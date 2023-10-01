import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Prob N Tech - It Services & It Consulting',
  description: 'Developed by ~ Zain-ul-Abdin',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Prob N Tech - </title>
        <link rel="shortcut icon" href="/Assest/favicon.png" type="image/x-icon" />
      </head>
      <body className={`${inter.className} bg-[#0d1117] relative overflow-x-hidden`}>
        <>
          {children}
        </>
      </body>
    </html>
  )
}

