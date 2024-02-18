import Link from "next/link"
import Image from "next/image";

// import pic from ''
export default function navbar() {
  const styles = {
    nav: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0px 20px",
      height: "60px",
      color: 'white',
      backgroundColor: "#752392",
    },
    right: {
      display: "flex",
      gap: "10px",
    }


  }

  return (
    <div style={styles.nav}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <img alt="icon" style={{ background: 'none', borderRadius: "50%" }} height={40} width={40} src="https://i.pinimg.com/originals/71/9c/10/719c10fb577785c70c66e50c24381e0c.jpg" />

        <Link href={"/"}> <h3>Meme Generator</h3></Link>
      </div>
      <div style={styles.right}>
      <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
                    src="/next.svg"
                    alt="Next.js Logo"
                    style={{color:"white"}}
                    // fill:'white'
                    width={80}
                    height={37}
                    priority
                />
      </div>
    </div>
  )

}
