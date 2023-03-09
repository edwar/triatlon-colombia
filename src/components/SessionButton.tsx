'use client'
import { UserCircleIcon } from '@heroicons/react/24/outline'
import { Dropdown } from 'flowbite-react'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

function SessionButton () {
  const { data: session } = useSession()
  const { push } = useRouter()
  if (session?.user?.email) {
    return (
      <Dropdown
        color='bg-teal-700'
        label={
          session.user.image
            ? <Image className='rounded-full' alt='profile' src={session.user.image} width={30} height={30} />
            : <Image alt='profile' src='/user.png' width={30} height={30} />
}
      >
        <Dropdown.Header className='px-2'>
          <span className='block text-sm'>
            {session.user.name}
          </span>
          <span className='block truncate text-sm font-medium'>
            {session.user.email}
          </span>
        </Dropdown.Header>
        <Dropdown.Item className='px-2' onClick={() => push('/dashboard')}>
          Tablero
        </Dropdown.Item>
        <Dropdown.Item className='px-2' onClick={() => push('/rules')}>
          Reglamento
        </Dropdown.Item>
        <Dropdown.Item className='px-2'>
          Configuraci&oacute;n
        </Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item className='px-2' onClick={() => signOut({ redirect: true, callbackUrl: '/' })}>
          Cerrar sesi&oacute;n
        </Dropdown.Item>
      </Dropdown>
    )
  }
  return (
    <li
      onClick={() => signIn('google')}
      className='flex items-center h-10 p-2 gap-1 text-neutral hover:bg-cyan-300/70 md:hover:text-cyan-300 hover:text-white hover:cursor-pointer py-2 pl-3 rounded md:hover:bg-transparent md:border-0 md:p-0'
    >
      <UserCircleIcon
        className='w-6 h-6'
      />
      <div
        className='md:hidden lg:block sm:block py-2 pl-3 pr-4 md:p-0'
      >
        Iniciar sesión
      </div>
    </li>
  )
}

export default SessionButton
