import React from 'react'
import { Post } from '../components'
import { posting } from '../data';
import Posted from '../components/posted';

function Tag() {
  return (
    <div className='grid'>
    {posting.map((post)=>(
        // <div style={{backgroundColor:'red'}}>
        //     <h1>{post.post}</h1>
        //     <h2>{post.subpost}</h2>
        // </div>
        <Posted 
        header={post.postHeader}
        subs={post.post}
        Continue={post.cont}
        description={post.author}
        date={post.date}
        duration={post.durts}
        />
    ))}
    </div>
    
  )
}

export default Tag