import { useGLTF } from '@react-three/drei'
import React, { useRef } from 'react'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useControls } from 'leva';

const Headset = (props) => {
    const headsetRef = useRef();
    const { nodes, materials } = useGLTF('/models/headset_oculus.glb')

    // const cont = useControls('headset', {
    //     rotationX: {
    //         value: 5.11,
    //         min: -4 * Math.PI,
    //         max: 4 * Math.PI,
    //         step: Math.PI / 16
    //     },
    //     rotationY: {
    //         value: 0.99,
    //         min: -4 * Math.PI,
    //         max: 4 * Math.PI,
    //         step: Math.PI / 16
    //     },
    //     rotationZ: {
    //         value: 1.76,
    //         min: -4 * Math.PI,
    //         max: 4 * Math.PI,
    //         step: Math.PI / 16
    //     },
    // })

    useGSAP(() => {
        gsap.to(headsetRef.current.position, {
            y: '+=2',
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: 'power1.inOut',
        });
    }, []);

    // return (
    //     <mesh
    //         {...props}
    //         ref={headsetRef}
    //         scale={3}
    //         rotation={[5.11, 0.99, 1.76]}
    //     // rotation={[cont.rotationX, cont.rotationY, cont.rotationZ]}
    //     >
    //         <primitive object={scene} />
    //     </mesh>                 
    // )    
    return (
        <group {...props} dispose={null} ref={headsetRef}>
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[5.11, -0.38, -5.11]} scale={1.1}>
                    <group name="Oculus_quest_2_uvfbx" rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                        <group name="RootNode">
                            <group name="Controllers" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                                <mesh
                                    name="Controllers_Controllers_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Controllers_Controllers_0.geometry}
                                    material={materials.Controllers}
                                />
                            </group>
                            <group name="Controllers001" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                                <mesh
                                    name="Controllers001_Controllers_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Controllers001_Controllers_0.geometry}
                                    material={materials.Controllers}
                                />
                            </group>
                            <group name="Oculus_Headset" rotation={[-Math.PI / 2, 0, 0]} scale={100}>
                                <mesh
                                    name="Oculus_Headset_Headset_0"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Oculus_Headset_Headset_0.geometry}
                                    material={materials.Headset}
                                />
                                <mesh
                                    name="Oculus_Headset_Headset_0_1"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Oculus_Headset_Headset_0_1.geometry}
                                    material={materials.Headset}
                                />
                                <mesh
                                    name="Oculus_Headset_Headset_0_2"
                                    castShadow
                                    receiveShadow
                                    geometry={nodes.Oculus_Headset_Headset_0_2.geometry}
                                    material={materials.Headset}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    )
}

useGLTF.preload('/models/headset_oculus.glb');

export default Headset
