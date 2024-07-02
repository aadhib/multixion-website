'use server'

import { Client } from "@notionhq/client";
import { CreatePageParameters } from "@notionhq/client/build/src/api-endpoints";

const notion = new Client({ auth: process.env.NOTION_TOKEN })

export async function onSubmit(formData: FormData): Promise<void> {
    await dispatchFormDataToNotion(formData);
}


async function dispatchFormDataToNotion(formData : FormData){
//Setting an object from the FormData map
const formDataInterface = {
    name: formData.get('name'),
    website: formData.get('website'),
    phoneNumber: formData.get('phone_number'),
    email: formData.get('email'),
    message: formData.get('message'),
}


//The row object defined as per the NotionAPI 'Page' property requirement
const new_row: CreatePageParameters = {
    parent: {
        database_id: process.env.DATABASE_ID as string,
    },
    properties: {
        "Name": {
            type: "title",
            title: [
                {
                    text: {
                        content: formDataInterface.name as string
                    }
                }
            ]
        },
        "Email": {
            type: "email",
            email: formDataInterface.email as string,
        },
        "Phone Number": {
            rich_text: [
                {
                    text: {
                        content: formDataInterface.phoneNumber as string,
                    }
                }
            ],
        },
        "Website": {
            type: "url",
            url: formDataInterface.website as string,
        },
        "Message": {
            rich_text: [
                {
                    text: {
                        content: formDataInterface.message as string,
                    }
                }
            ],
        },
    }
}

await notion.pages.create(new_row).then(
    (value) => {
        console.log(value);
        return 200
    },
    (error) => {
        console.log(error);
        throw new Error()
    });
}