import { useState } from "react"
import { Container, Button } from "./komponenku/mamad"


export default function App() {
const [lampuku, setLamp] = useState(false)

const handle = () => {
    setLamp(!lampuku)
}

    return(
 <>
 <Container Ubahbg={lampuku}> 
    <Button onClick={handle} Ubahtombol={lampuku}>{lampuku === true ? "Gelap" : "Terang"}</Button>
 </Container>

 </>)
}