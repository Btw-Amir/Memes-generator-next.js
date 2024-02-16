import React from 'react'
import Navbar from '../../Components/Navbar/navbar'
import './page.css'
import Detail from './details'

export default async function page(props) {

    const ids = props.params.id
    const res = await fetch('https://api.imgflip.com/get_memes')
    const result = await res.json()
    const data = result.data.memes
    const single = data.filter(item => item.id === props.params.id)
    const meme = single[0]

    return (
        <div>
            <Navbar />
            <Detail Detail={meme} />

        </div>
    )
}
