import "@/node_modules/react-modal-video/css/modal-video.css"
import "public/assets/css/bootstrap.css"
import "public/assets/css/style.css"
import "app/favicon.ico"
import 'swiper/css'
import "swiper/css/pagination"
import 'swiper/css/free-mode';
import { barlow, firaSans } from '@/lib/font'
export const metadata = {
    title: 'TEDA GLOBAL LIMITED',
    description: 'Discover TEDA GLOBAL LIMITED, a trusted crypto investment firm established on August 6, 2024. Specializing in financial market management, we empower clients with expert strategies and secure solutions for navigating the digital economy',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${firaSans.variable} ${barlow.variable}`}>
            <body>{children}</body>
        </html>
    )
}
