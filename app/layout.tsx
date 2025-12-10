import type React from "react"
import { Analytics } from "@vercel/analytics/next"
// <CHANGE> Importing site footer component
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

// ... existing code ...

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        {/* <CHANGE> Adding site footer across entire site */}
        <SiteFooter />
        <Analytics />
      </body>
    </html>
  )
}

export const metadata = {
      generator: 'v0.app'
    };
