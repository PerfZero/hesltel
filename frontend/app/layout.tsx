import './globals.css'
import { sfProDisplay } from './fonts'

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
      <body>{children}</body>
    </html>
  )
}

