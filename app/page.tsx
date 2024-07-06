import Layout from "@/components/layout/Layout"
import Blog from "@/components/sections/Blog"
import Hero from "@/components/sections/Hero"
import Service from "@/components/sections/Service"
import Testimonial from "@/components/sections/Testimonial1"
import Work from "@/components/sections/Work"

export default function Home() {
    return (
        <>
            <Layout>
                <Hero />
                <Service />
                <Work />
                <Testimonial />
                <Blog />
            </Layout>
        </>
    )
}