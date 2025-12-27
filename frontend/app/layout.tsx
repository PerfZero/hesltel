import './globals.css'
import { sfProDisplay } from './fonts'
import Script from 'next/script'

export const metadata = {
  title: 'Hustle App',
  description: 'Fullstack application',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru" className={sfProDisplay.variable}>
      <body>
        {children}
        <Script
          src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js"
          strategy="afterInteractive"
        />
        <Script
          src="/scripts/liquidGL.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  )
}

