import './App.css'
import { Canvas } from "@react-three/fiber";
import ThreeElement from "./ThreeElement.tsx";

function App() {

  return (
    <Canvas
    camera={{
        near:1,
        far:20,
        fov:75,
        position:[3,3,0]
    }}>

<ThreeElement/>
    </Canvas>


  )
}

export default App
