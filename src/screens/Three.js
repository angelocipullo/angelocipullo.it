import { Canvas} from '@react-three/fiber'
import React, { Suspense, useState  } from 'react'
import { Environment, OrbitControls } from "@react-three/drei";

import Bedroom from '../components/Bedroom/Bedroom'


const Home = () => {

    const [ x, setX] = useState(12)
    const [ y, setY] = useState(15)
    const [ z, setZ] = useState(-2)
    const [i, setI] = useState(0)

    return (
        <div className='bg-[#F0EAD6] h-screen'>
            <div className='absolute top-0 z-50 right-0'>
                <input type="number" value={x} onChange={(e) => setX(e.target.value)} />
                <input type="number" value={y} onChange={(e) => setY(e.target.value)} />
                <input type="number" value={z} onChange={(e) => setZ(e.target.value)} />
                <input type="number" value={i} onChange={(e) => setI(e.target.value)} />
                <button onClick={() => setI(1)}>accendi le luci</button>
            </div>
            <Canvas camera={{ fov: 25}} className='h-screen'>

                <Suspense fallback={null}>

                    {/* <ambientLight intensity={0.4} /> */}
                    <pointLight position={[x, y, z]} intensity={i}/>
                    <OrbitControls />
                    <Bedroom />
                </Suspense>
            </Canvas>
        </div>
    )
}



export default Home