import Navbar from "./components/Navbar/Navbar"
import RegisterModal from "./components/modals/RegisterModal"
import "./globals.css"
import {Inter} from "next/font/google"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./components/modals/LoginModal"
import getCurrentUser from "./actions/getCurrentUser"
import RentModal from "./components/modals/RentModal"
import SearchModal from "./components/modals/SearchModal"
import ClientOnly from "./components/ClientOnly"

const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "HomeVibe",
  description:
    "A central platform that gives you home away home feeling. finding exciting and vibrant accommodation or stays. 'Experience a vibrant and energized experience when staying at accommodations' ",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/homevibe.png' sizes='any' />
      </head>
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <LoginModal />
          <RentModal />
          <SearchModal />
          <RegisterModal />
        </ClientOnly>
        <Navbar currentUser={currentUser} />
        <div className='py-28'>{children}</div>
      </body>
    </html>
  )
}
