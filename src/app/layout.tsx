import './globals.css'
import { ReactNode } from 'react'
import SessionProvider from '@/components/SessionProviders'
import { authOptions } from '@/pages/api/auth/[...nextauth]'
import { getServerSession } from 'next-auth'
import Nav from '@/components/Nav'

export default async function RootLayout ({
  children
}: {
  children: ReactNode
}) {
  const session = await getServerSession(authOptions)

  return (
    <html lang='es'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <SessionProvider session={session}>
          <Nav />
          <div className='py-16'>
            {children}
          </div>
          <footer className='fixed bottom-0 left-0 right-0 bg-gray-100 text-gray-700 py-4'>
            <div className='container mx-auto px-4'>
              <p className='text-center'>&copy; 2023 Club Deportivo de Triatlón</p>
            </div>
          </footer>
        </SessionProvider>
      </body>
    </html>
  )
}
