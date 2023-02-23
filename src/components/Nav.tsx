'use client'
import { GlobeAsiaAustraliaIcon, Bars3Icon, HomeIcon, UserGroupIcon, SparklesIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import { useNav } from '@/hooks/useNav'
import SessionButton from './SessionButton'

function Nav () {
  const { active, handleToggle, nav } = useNav([{
    name: 'Inicio',
    path: '/',
    icon: <HomeIcon className='w-6 h-6' />
  }, {
    name: 'Nosotros',
    path: '/about',
    icon: <UserGroupIcon className='w-6 h-6' />
  }, {
    name: 'Misión',
    path: '/mision',
    icon: <SparklesIcon className='w-6 h-6' />
  }, {
    name: 'Visión',
    path: '/vision',
    icon: <EyeIcon className='w-6 h-6' />
  }])

  return (
    <nav
      className='fixed shadow-md z-50 w-full bg-teal-700 border-gray-200 px-2 sm:px-4 py-2.5'
    >
      <div
        className='container flex flex-wrap items-center justify-between mx-auto'
      >
        <Link
          href='/'
          className='flex items-center'
        >
          <GlobeAsiaAustraliaIcon
            className='w-10 h-10 text-white'
          />
          <span
            className='self-center text-xl font-semibold whitespace-nowrap text-white'
          >
            Triatl&oacute;n Colombia
          </span>
        </Link>
        <button
          onClick={handleToggle}
          data-collapse-active='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-white rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-white'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span
            className='sr-only'
          >
            Open main menu
          </span>
          <Bars3Icon
            className='w-6 h-6'
          />
        </button>
        <div
          className={`${active ? 'block' : 'hidden'} w-full md:block md:w-auto`} id='navbar-default'
        >
          <ul
            className='flex flex-col mt-4 border border-white rounded-lg bg-teal-700 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-teal-700'
          >
            {nav.map(item => (
              <Link
                key={item.path}
                href={item.path}
                aria-current='page'
              >
                <li
                  className={`flex items-center h-10 p-2 gap-1 ${item.isActive ? 'text-teal-700 bg-cyan-300 font-bold md:text-cyan-300 md:bg-transparent hover:text-white md:hover:text-cyan-300 hover:cursor-pointer py-2 rounded md:hover:bg-transparent md:border-0 md:p-0' : 'text-neutral hover:bg-cyan-300/70 md:hover:text-cyan-300 hover:text-white hover:cursor-pointer py-2 rounded md:hover:bg-transparent md:border-0 md:p-0'}`}
                >
                  {item.icon}
                  <div className='md:hidden lg:block sm:block py-2 pl-3 pr-4 md:p-0'>
                    {item.name}
                  </div>
                </li>
              </Link>
            ))}
            <SessionButton />
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Nav
