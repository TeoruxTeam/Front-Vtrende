import { FC, PropsWithChildren } from 'react'
import styles from './ProductLayout.module.scss'

export const ProductLayout: FC<PropsWithChildren> = ({children}) => {
  return (
    <div className={styles.productLayout}>
      {children}
    </div>
  )
}
