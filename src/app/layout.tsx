import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mental Paddi',
  description: 'A platform where students can seek mental health support',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
