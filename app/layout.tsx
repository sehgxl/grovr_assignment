import Navbar from "@/components/Navbar"
import "./globals.css"
import type { Metadata } from "next"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Job Board",
  description: "Get all your job data",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
