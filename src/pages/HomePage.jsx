import React from 'react'
import { useTranslation } from 'react-i18next'

const HomePage = () => {
  const { t } = useTranslation()
  return (
    <div className='container flex flex-col gap-3 text-center justify-center items-center h-full my-10'>
      <h1 className='text-[--color-red] text-3xl font-bold'>{t("Welcome to BOSTA!")}</h1>
      <p className='text-xl'>Start by searching for your shipment by ID</p>
      <p className='text-gray-300'>Enjoy this assessment</p>
    </div>
  )
}

export default HomePage