import React from 'react'
import Header from '../components/header'
import Seo from '../components/seo'
import "../components/layout.css"

const GridLayoutHome = ({title,children}) => {
  return (
    <div>
      <Header siteTitle={title}/>
      <Seo title = {title}/>
      {children}
    </div>
  )
}

export default GridLayoutHome
