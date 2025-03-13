import React from 'react'
import Likebutton from './likebutton'
const Postcard = ({id,profileImage,username,content,isLiked}) => {
  return (
    <div style={{border:'1px solid black', display:'flex', flexDirection:'column', flexWrap:'wrap',padding:'2%',margin:'1%'}}>
      <div>
        <img src={profileImage}  height={'200px'}/>
      </div>
      <div>

      <p>{username}</p>
      <p>{content}</p>
      <p>{isLiked}</p>
      </div>
      <div>
        <Likebutton/>
      </div>
    </div>
  )
}

export default Postcard
