import './globals.css'

export const metadata = {
  title: 'Unplugwell',
  description: 'Digital Wellness Blog',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white dark:bg-gray-900">
        {children}
      </body>
    </html>
  )
}