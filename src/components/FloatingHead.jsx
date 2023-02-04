import React, {Suspense, useRef} from "react";
import {useScroll, useTransform} from "framer-motion";
import {Canvas} from "@react-three/fiber";
import {Model3} from "./Model3";
import {OrbitControls} from "@react-three/drei";


export const FloatingHead = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]

    })

    const headScale = useTransform(scrollYProgress, [0, 0.2], [1, 0], { target: ref, clamp: false })
    return(
        <>
            <Canvas
                camera={{ position: [0, 0, 8.25], fov: 3.3 }}
                style={{
                    // backgroundColor: '#111a21',
                    width: '65%',
                    height: '40%',
                    scale: headScale
                }}
                className={'absolute top-0 '}
            >
                <ambientLight intensity={1.25} color={'rgb(236,20,20)'} />
                <ambientLight intensity={0.1} />

                <directionalLight intensity={0.8} />
                <Suspense fallback={null}>
                    {/*<Model position={[0, -1.70, 0]} /> */}
                    {/*<Model2 position={[0, -1.70, 0]} />*/}
                    <Model3 position={[0, -1.70, 0]} />
                </Suspense>
                <OrbitControls enableZoom={false} autoRotate={true} autoRotateSpeed={5} reverseOrbit={true} />
            </Canvas>
        </>

    )
}