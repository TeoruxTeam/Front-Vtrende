import { FC, PropsWithChildren } from 'react'
import { Header } from '../../Header/ui/Header'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  )
}
