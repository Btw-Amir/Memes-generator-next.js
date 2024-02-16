
import Navbar from './Components/Navbar/navbar'
import Link from 'next/link'
export default async function Home() {
  const res = await fetch('https://api.imgflip.com/get_memes')
  const result = await res.json()
const data = result.data.memes
  const styles ={
  card:{
    border: "2px solid #752392",
    height: "332px",
    width: "281px",
    borderRadius: "4px",
    marginTop:" 25px",
    fontFamily: "Arial, Helvetica, sans-serif",
    
},
img:{
  objectFit:"cover",
  width:" 100%",
  height: "70%",
  borderBottom:" 1px solid White",
  borderRadius:" 4px 4px 0px 0px",
}  ,
main:{
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    flexDirection:" column !important",
},
cover:{
  display: "flex",
  flexWrap: "wrap",
  justifyContent:"center",
  gap:"20px",


},
btn:{
background:'#752392',
borderRadius:'8px',
padding:'5px 10px',
textAlign:'center',
margin:'2px 10px',
color:"white"
},
cardCont:{
  display:"flex",
  flexDirection:'column',
  // alignItems:
  gap:'4px',
  padding:'0px 18px',
  marginTop:"5px"
}

}
  
  return (
  <div>
    <Navbar/>
    <div style={styles.cover}>
    {data.map(function(items){
      return<div style={styles.main}>
      <div style={styles.card}>
<img style={styles.img}  src={items.url} alt='meme-image'/>
<div style={styles.cardCont}>
<p><b>Meme name:</b> {items.name} </p>
<button style={styles.btn}><Link href={`/detail/${items.id}`}>Detail-page</Link></button>
 </div>
     </div>
    </div>

})}
</div>
</div>
  );
}
