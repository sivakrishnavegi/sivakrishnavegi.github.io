import HomePageContainer from '@/core/containers/home'
import React from 'react'

const HomePageLayout = ({ children }: { children : React.ReactNode}) => {
  return (
    <div>
        {children}
    </div>
  )
}

export default HomePageLayout