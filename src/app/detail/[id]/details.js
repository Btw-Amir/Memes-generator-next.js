"use client"
import './page.css'
import { useState } from 'react'
export default function details(props) {
    const{Detail}= props
    const [text,setText]= useState('')
    const [textI,setTextI]= useState('')
    const [post ,setPost] =useState(Detail.url)
    const [btn ,setBtn]=useState(true)
    async function submit(){
        setBtn(false)
       const texts ={
            text: text,
            text1: textI
        }
        const postUrl =`https://api.imgflip.com/caption_image?template_id=${Detail.id}&username=mohamadAmir&password=12345678@&text0=${texts.text}&text1=${texts.text1}&gt`
        const res= await fetch(postUrl)
        const result = await res.json()
        setPost(result.data.url)
        setBtn(true)

    }
    

  return (
    <div>
       <div className='parent'>
            <div className='before'>

        <img src={post?post:Detail.url} />
        <p>{Detail.name}</p>
            </div>
            <div className='operation'>
                <input type='text' placeholder='Enter first text' onChange={(e) =>setText(e.target.value)} />
                <input type='text' placeholder='Enter second text' onChange={(e) =>setTextI(e.target.value)} />
                <button style={{color:'white'}} onClick={submit} disabled={!btn}>{btn?"Confirm":"please wait.."}</button>
            </div>
        </div>
    </div>
  )
}
