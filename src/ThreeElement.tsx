import * as THREE from 'three'
import {useThree,useFrame} from "@react-three/fiber";
import {useRef} from "react";


const ThreeElement = ()=>{
    const {size,gl,scene,camera} = useThree()
const boxRef = useRef<THREE.Mesh>(null)
    useFrame((state,delta)=>{
            // boxRef.current.rotation.x += delta
        // boxRef.current.position.y += delta
        // boxRef.current.scale.z += delta
        }
    // console.log(state,delta)

    )
    console.log(size)
    console.log(gl)
    console.log(scene)
    console.log(camera)

    return (
        <>
        <directionalLight position={[5, 5, 5]}/>
        <mesh ref={boxRef} rotation={[THREE.MathUtils.degToRad(45),THREE.MathUtils.degToRad(45),0]}>
            <boxGeometry />
            <meshStandardMaterial color="red"/>
        </mesh>
        </>
    )
}

export default ThreeElement