import React from 'react'
import styles from './ChangeLanguage.module.scss';
import markerIcon from '@/public/marker.svg'
import Image from 'next/image';

export const ChangeLanguage = () => {
  return (
    <div className={styles.changeLanguage}>
      <Image src={markerIcon} alt='marker' width={20} height={20} />
    </div>
  )
}
