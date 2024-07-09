import type { Metadata } from "next"
import { Aclonica, Poppins, Unbounded } from "next/font/google"
import 'aos/dist/aos.css';
import 'swiper/css'
import "swiper/css/navigation"
import "swiper/css/pagination"
import "/public/assets/css/animate.min.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/default.css"
import "/public/assets/css/fontawesome-all.min.css"
import "/public/assets/css/icon-font.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/select2.min.css"
import "/public/assets/css/style.css"
import "/public/assets/css/swiper-bundle.min.css"

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
    variable: "--tg-body-font-family",
    display: 'swap',
})
const aclonica = Aclonica({
    weight: ['400'],
    subsets: ["latin"],
    variable: "--tg-heading-font-family",
    display: 'swap',
})
const unbounded = Unbounded({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ["latin"],
    variable: "--tg-heading2-font-family",
    display: 'swap',
})

export const metadata: Metadata = {
    icons: {
        icon: [
          {
            url: "/assets/favicon.ico",
            href: "/assets/favicon.ico",
          },
        ],
      },
    title: "Multixion",
    description: "Your One-Stop Solution for Seamless Success: From Initial Registration to Digital Excellence!",
    openGraph: {
        images: [
            {
                url: "https://raw.githubusercontent.com/aadhib/multixion-website/0f71ca208deefbaead75ac6617a21c0c8c289ac4/public/assets/img/meta_image.png",
                href: "https://raw.githubusercontent.com/aadhib/multixion-website/0f71ca208deefbaead75ac6617a21c0c8c289ac4/public/assets/img/meta_image.png",
            },
        ],
    },
    
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body className={`${poppins.variable} ${aclonica.variable} ${unbounded.variable} theme-green`}>{children}</body>
        </html>
    )
}
