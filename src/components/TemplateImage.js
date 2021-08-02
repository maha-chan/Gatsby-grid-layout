import React, { useState } from 'react'
import { Button, Icon } from 'semantic-ui-react'
import image from "../../data/images/sample.jpg"
const TemplateImage = () => {
  const [likes,setLikes] = useState(2)
  return (
    <div style={{width:"100%",height:"100%",color:"white"}}>
      <img src={image} alt="banner" width="100%" height="60%"/>
      <h4 style={{margin: "2px 0"}}>Banner Image</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci non fugiat illum quaerat aliquid veritatis quis quas deserunt sequi iste!</p>
      <Button secondary style={{marginTop:"-30px"}} onClick={()=>setLikes(likes+1)}><Icon name="like" color="red"/> {likes}</Button>
    </div>
  )
}

export default TemplateImage
