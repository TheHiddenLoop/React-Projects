import React from 'react'
import {posts} from "../data.js"
import { Card } from '../components/Card.jsx'
export function Home() {
  return (
    <div className=' flex p-[50px] py-[100px] justify-between flex-wrap'>
      {posts.map((post)=>(
        <Card key={post.id} post={post}/>
      ))}
    </div>
  )
}
