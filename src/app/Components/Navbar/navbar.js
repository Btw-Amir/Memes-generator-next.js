import Link from "next/link"
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
        <img style={{ background: 'none', borderRadius: "50%" }} height={40} width={40} src="https://i.pinimg.com/originals/71/9c/10/719c10fb577785c70c66e50c24381e0c.jpg" />

        <Link href={"/"}> <h3>Meme Generator</h3></Link>
      </div>
      <div style={styles.right}>
        <h3>Next-js</h3>
        <h3>Project: 01</h3>
      </div>
    </div>
  )

}
