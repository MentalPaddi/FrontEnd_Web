import type { Metadata } from 'next';
import '../globals.css'

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
    <>
      <div className='bg-[#F2F2F2] min-h-screen'>{children}</div>
    </>
  )
}
