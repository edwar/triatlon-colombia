import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Navigator } from '@/types'

export function useNav (nav: Navigator[]) {
  const [active, setActive] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (!active) return
    document.addEventListener('click', handleToggle)

    return () => {
      document.removeEventListener('click', handleToggle)
    }
  })

  nav.forEach(item => {
    item.isActive = item.path === pathname
  })

  const handleToggle = () => setActive(!active)
  return {
    active,
    handleToggle,
    nav
  }
}
