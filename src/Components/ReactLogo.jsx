import React, { useRef, useState } from 'react'
import { useControls } from 'leva';
import { Float, useGLTF } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { AxesHelper } from 'three';

const ReactLogo = (props) => {
    const reactLogoRef = useRef();
    const { rotationY, setRotationY } = useState(-2.16);

    // const cont = useControls('headset', {
    //     rotationX: {
    //         value: -5.50,
    //         min: -4 * Math.PI,
    //         max: 4 * Math.PI,
    //         step: Math.PI / 16
    //     },
    //     rotationY: {
    //         value: -2.16,
    //         min: -4 * Math.PI,
    //         max: 4 * Math.PI,
    //         step: Math.PI / 16
    //     },
    //     rotationZ: {
    //         value: -0.98,
    //         min: -4 * Math.PI,
    //         max: 4 * Math.PI,
    //         step: Math.PI / 16
    //     },
    // })

    useGSAP(() => {
        gsap.to(reactLogoRef.current.rotation, {
            z: `+=${Math.PI * 2}`,
            duration: 5,
            repeat: -1,
            ease: "none"
        });
    });

    // const { scene } = useGLTF('/models/react.glb')

    // return (
    //     <mesh
    //         {...props}
    //         ref={reactLogoRef}
    //         scale={0.5}
    //         rotation={[-5.50, -2.16, -2.55]}
    //     // rotation={[cont.rotationX, cont.rotationY, cont.rotationZ]}
    //     >
    //         <primitive object={scene} />
    //     </mesh>
    // )

    const { nodes, materials } = useGLTF('/models/react.glb')
    return (
        <group {...props} dispose={null} >
            <mesh
                ref={reactLogoRef}
                castShadow
                receiveShadow
                geometry={nodes['React-Logo_Material002_0'].geometry}
                material={materials['Material.002']}
                rotation={[-5.50, -2.16, -2.55]}
                // rotation={[cont.rotationX, cont.rotationY, cont.rotationZ]}
                scale={0.25}
            />
            {/* <primitive object={new AxesHelper(10)} /> */}
        </group>
    )
}

useGLTF.preload('/models/react.glb');

export default ReactLogo
