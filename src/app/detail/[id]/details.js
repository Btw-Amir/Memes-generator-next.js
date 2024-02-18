"use client"
import './page.css'
import { useState } from 'react'
// import {fi?}
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
        setTextI('') 
        setText('')
    }
    

  return (
    <div>
       <div className='parent'>
            <div className='before'>

        <img alt='meme' src={post?post:Detail.url} />
        <p>{Detail.name}</p>
            </div>
            <div className='operation'>
                
                <input type='text' required value={text}  placeholder='Enter first text' onChange={(e) =>setText(e.target.value)} />
                <input type='text' required value={textI} placeholder='Enter second text' onChange={(e) =>setTextI(e.target.value)} />
                <button style={{color:'white'}}  className={!btn?"generating":"generate"}onClick={submit} disabled={!btn}>{btn?"Confirm":"please wait.."}</button>
        {/* <a href={post} download> */}
                {/* <button  style={{color:'white'}} className={"generate"} >Download</button> */}
        {/* </a> */}
            </div>
        </div>
    </div>
  )
}
