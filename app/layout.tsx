import Navbar from "./components/Navbar/Navbar"
import Modal from "./components/modals/Modal"
import RegisterModal from "./components/modals/RegisterModal"
import "./globals.css"
import {Inter} from "next/font/google"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./components/modals/LoginModal"
import getCurrentUser from "./actions/getCurrentUser"
import RentModal from "./components/modals/RentModal"
import ClientOnly from "./components/ClientOnly"

const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "AirBNB",
  description: "Airbnb website built with next 13",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const currentUser = await getCurrentUser()

  return (
    <html lang='en'>
      <body className={inter.className}>
        <ClientOnly>
          <ToasterProvider />
          <Navbar currentUser={currentUser} />
          <LoginModal />
          <RentModal />
          <RegisterModal />
        </ClientOnly>
        <div className='py-28'>{children}</div>
      </body>
    </html>
  )
}
