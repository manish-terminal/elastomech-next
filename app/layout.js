import { Ubuntu } from 'next/font/google'
import './globals.css'
import EmailPopup from './components/EmailPopup'
import { metadata } from './metadata'

const ubuntu = Ubuntu({ 
  weight: '400',
  subsets: ['latin'] 
})

export { metadata }

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <main>
          {children}
        </main>
        <EmailPopup />
      </body>
    </html>
  )
} 