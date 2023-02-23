import { ReactNode } from 'react'

export interface Navigator {
    name: string
    path: string
    icon: ReactNode
    isActive?: boolean
  }
