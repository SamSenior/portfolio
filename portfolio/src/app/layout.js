import ThemeRegistry from '../../theme/ThemeRegistry'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Samuel Senior Portfolio',
  description: 'My developer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeRegistry>
        <body className={inter.className}>{children}</body>
      </ThemeRegistry>
    </html>
  )
}
