import Navbar from "./components/Navbar/Navbar"
import Modal from "./components/modals/Modal"
import RegisterModal from "./components/modals/RegisterModal"
import "./globals.css"
import {Inter} from "next/font/google"
import ToasterProvider from "./providers/ToasterProvider"
import LoginModal from "./components/modals/LoginModal"
import getCurrentUser from "./actions/getCurrentUser"
import RentModal from "./components/modals/RentModal"

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
        <ToasterProvider />
        <Navbar currentUser={currentUser} />
        <LoginModal />
        <RentModal />
        <RegisterModal />
        {children}
      </body>
    </html>
  )
}
