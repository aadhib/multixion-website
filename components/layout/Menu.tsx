'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

export const services = [
    { id: "01", name: 'IT Consulting', path: '/service/it-consulting' , cardContent :'Tailored IT strategies to optimize your business operations and enhance efficiency.' },
    { id: "02", name: 'Software Development', path: '/service/software-development' , cardContent :'Custom software solutions designed to meet your specific business needs and drive growth.'},
    { id: "03", name: 'Web Development', path: '/service/web-development', cardContent :'Responsive and scalable web solutions that elevate your online presence and user experience.' },
    { id: "04", name: 'Mobile App Development', path: '/service/mobile-app-development' , cardContent :'Innovative mobile applications that engage users and deliver seamless experiences across platforms.'},
    { id: "05", name: 'Cloud Solutions', path: '/service/cloud-solutions' , cardContent :'Secure and scalable cloud infrastructure to streamline your operations and ensure data accessibility.' },
    { id: "06", name: 'Cybersecurity', path: '/service/cybersecurity', cardContent :'Robust cybersecurity measures to protect your digital assets and safeguard against potential threats.'},
    { id: "07", name: 'Networking', path: '/service/networking' , cardContent :'Efficient network solutions to optimize connectivity and facilitate seamless communication within your organization.' },
    { id: "08", name: 'IT Support and Maintenance', path: '/service/it-support-maintenance' , cardContent :'Proactive IT support and maintenance services to keep your systems running smoothly and minimize downtime.'},
    { id: "09", name: 'Creative Branding Solutions', path: '/service/creative-branding-solutions', cardContent :'Strategic branding initiatives that define your brand identity and resonate with your target audience.' },

]

const porfolioLinks = [
    { id: 1, name: 'Portfolio', path: '/project' },
    { id: 2, name: 'Portfolio Details', path: '/project-details' },
]
const blogLinks = [
    { id: 1, name: 'Blog', path: '/blog' },
    { id: 2, name: 'Blog Details', path: '/blog-details' },
]
export default function Menu({ menuLeft }: any) {
    const pathname = usePathname()
    const isActive = (path: string) => path === pathname
    const isPorfolioLinkActive = () => {
        return porfolioLinks.some((link) => link.path === pathname) ? true : false
    };
    const isBlogLinkActive = () => {
        return blogLinks.some((link) => link.path === pathname) ? true : false
    };
    return (
        <>
            <ul className={`navigation ${menuLeft ? "ms-xxl-0" : "me-0"} `}>
                <li className={pathname == "/" ? "active" : ""}><Link href="/#">HOME</Link>
                </li>
                <li className={pathname == "/about" ? "active" : ""}><Link href="/about">ABOUT</Link>
                </li>
                <li className={`menu-item-has-children ${isPorfolioLinkActive() ? 'active' : ''}`}><Link href="/service">SERVICES</Link>
                    <ul className="sub-menu">
                        {services.map((link) => {
                            return (
                                <li key={link.id} className={isActive(link.path) ? 'active' : ''}>
                                    <Link
                                        href={link.path}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </li>

                {/* Uncomment below two list items when blog and portfolio is ready to go live*/}

                {/* <li className={`menu-item-has-children ${isPorfolioLinkActive() ? 'active' : ''}`}><Link href="/#">PORTFOLIO</Link>
                    <ul className="sub-menu">
                        {porfolioLinks.map((link) => {
                            return (
                                <li key={link.id} className={isActive(link.path) ? 'active' : ''}>
                                    <Link
                                        href={link.path}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </li>
                <li className={`menu-item-has-children ${isBlogLinkActive() ? 'active' : ''}`}><Link href="/#">BLOG</Link>
                    <ul className="sub-menu">
                        {blogLinks.map((link) => {
                            return (
                                <li key={link.id} className={isActive(link.path) ? 'active' : ''}>
                                    <Link
                                        href={link.path}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </li> */}
                <li className={pathname == "/contact" ? "active" : ""}><Link href="/contact">CONTACT</Link></li>
            </ul>
        </>
    )
}
