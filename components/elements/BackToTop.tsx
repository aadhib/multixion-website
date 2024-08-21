'use client'
import { useEffect, useState } from "react"
import Script from "next/script"

export default function BackToTop() {
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
            url: 'https://calendly.com/service-multixion/30min?hide_gdpr_banner=1&background_color=000000&text_color=ffffff&primary_color=0900ff',
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
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="30" 
                        height="30" 
                        fill="white" 
                        viewBox="0 0 24 24"
                    >
                        <path d="M19 4h-1V2h-2v2H8V2H6v2H5c-1.1 0-1.99.9-1.99 2L3 20c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11zm-2-9H7v2h10V11zm0 4H7v2h10v-2z"/>
                    </svg>
                </a>
            )}
        </>
    )
}