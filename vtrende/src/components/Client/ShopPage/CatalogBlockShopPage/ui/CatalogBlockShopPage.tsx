import { CatalogBlock } from '@/src/entities/Client'
import mockData from '@/src/entities/Client/modal/hooks/getCategoryItems'
import React from 'react'

export const CatalogBlockShopPage = () => {
  return (
    <CatalogBlock categories={mockData.categories} />
  )
}
