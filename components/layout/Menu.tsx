'use client'
import Link from "next/link"
import { usePathname } from "next/navigation"

const services = [
    { id: 1, name: 'Web Development', path: '/service/web-development' },
    { id: 2, name: 'Mobile App Development', path: '/service/mobile-app-development' },
    { id: 3, name: 'UI/UX', path: '/service/ui-ux' },
    { id: 4, name: 'Cloud Software Development', path: '/service/cloud-software-development' },
    { id: 5, name: 'Branding', path: '/service/branding' },
    { id: 6, name: 'Digital Marketing', path: '/service/digital-marketing' },

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
