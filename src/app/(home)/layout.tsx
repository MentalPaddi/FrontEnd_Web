import type { Metadata } from 'next';
import '../globals.css'
import BottomNav from '@/components/bottomNav';

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
    <div className='w-full flex flex-col items-center'>
      <div className='bg-[#F2F2F2] min-h-screen w-full pb-20'>{children}</div>
      <BottomNav />
    </div>
  )
}
