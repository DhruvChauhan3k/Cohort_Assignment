import { useState } from "react"


export function Details()
{
    const [follow,setFollow]=useState(0)
    const [likes,setLikes]=useState(0)
    const [Posts,setPosts]=useState(0)
    return(
        <div style={{margin:'10px',textAlign:'center'}}>
         <button onClick={()=>{setLikes(likes+1)}}>Likes {likes}</button>
        <button onClick={()=>setFollow(follow+1)}>Followers {follow}</button>
         <button onClick={()=>{setPosts(Posts+1)}}>Posts {Posts}</button>  
        </div>
    )
}