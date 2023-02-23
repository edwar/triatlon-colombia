import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Navigator } from '@/types'

export function useNav (nav: Navigator[]) {
  const [active, setActive] = useState(false)
  const pathname = usePathname()

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
