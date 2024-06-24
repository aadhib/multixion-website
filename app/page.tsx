import Layout from "@/components/layout/Layout"
import Blog1 from "@/components/sections/Blog1"
import Hero1 from "@/components/sections/Hero1"
import Service1 from "@/components/sections/Service1"
import Team1 from "@/components/sections/Team1"
import Testimonial1 from "@/components/sections/Testimonial1"
import Work from "@/components/sections/Work"

export default function Home() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Hero1 />
                <Service1 />
                <Work />
                <Team1 />
                <Testimonial1 />
                <Blog1 />
            </Layout>
        </>
    )
}