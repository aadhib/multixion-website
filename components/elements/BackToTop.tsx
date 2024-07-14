'use client'
import { useEffect, useState } from "react"
import Script from "next/script"
import { redirect } from 'next/navigation'

export default function BackToTop({ target }: React.ChangeEvent<HTMLInputElement>) {
    const [hasScrolled, setHasScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            setHasScrolled(window.scrollY > 100)
        }

        window.addEventListener("scroll", onScroll)
        return () => window.removeEventListener("scroll", onScroll)
    }, [])

    const handleClick = () => {
        // @ts-ignore
        window.Calendly.initPopupWidget({
            url: 'https://calendly.com/service-multixion/30min',
        });
    }

    return (
        <>
            <Script
                src="https://assets.calendly.com/assets/external/widget.js"
                type="text/javascript"
                async
            />
            <link
                href="https://assets.calendly.com/assets/external/widget.css"
                rel="stylesheet"
            />
            {hasScrolled && (
                <a className="scroll__top scroll-to-target open" onClick={handleClick}>
                    Schedule a meeting?
                </a>

            )}
        </>
    )
}