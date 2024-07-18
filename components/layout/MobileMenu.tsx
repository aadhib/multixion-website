'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from 'react'
import services from "@/util/services.json"

interface ActiveState {
    status: boolean
    key: number
}

export default function MobileMenu({ closeMenu }: any) {
    const pathname = usePathname()
    const [isActive, setIsActive] = useState<ActiveState>({
        status: false,
        key: 0,
    })

    const handleClick = (key: number) => {
        if (isActive.key === key) {
            setIsActive({
                ...isActive,
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation me-0">
                <li className="menu-item-has-children" onClick={closeMenu}><Link href="/#">HOME</Link></li>
                <li className={pathname == "/about" ? "active" : ""} onClick={closeMenu}><Link href="/about">ABOUT US</Link></li>
                <li className="menu-item-has-children">
                    <Link href="/service" onClick={closeMenu}>SERVICES</Link>
                    <ul className="sub-menu" style={{ display: `${isActive.key == 2 ? "block" : "none"}` }}>
                        {services.map(({ path, name }) => {
                            return <li key={path} id={path} className={pathname == path ? "active" : ""} onClick={closeMenu}><Link href={path}>{name}</Link></li>
                        })}
                    </ul>
                    <div className={isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"} onClick={() => handleClick(2)}><span className="plus-line" /></div>
                </li>
                {/* <li className="menu-item-has-children"><Link href="/#">PORTFOLIO</Link>
                </li>*/}
                <li className="menu-item-has-children" onClick={closeMenu}><Link href="/blog">BLOGS</Link></li>
                <li className={pathname == "/contact" ? "active" : ""} onClick={closeMenu}><Link href="/contact">CONTACT</Link></li>
            </ul>
        </>
    )
}
