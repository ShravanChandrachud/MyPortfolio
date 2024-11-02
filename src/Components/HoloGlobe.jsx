import React, { useRef, useState, useEffect } from 'react';
import { Float, useGLTF, useAnimations } from '@react-three/drei';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const HoloGlobe = (props) => {
    const holoGlobeRef = useRef();
    const hologramRef = useRef();
    const [counter, setCounter] = useState(0);
    const [animation, setAnimation] = useState(null);

    const handleDuration = () => {
        setCounter((prevCount) => {
            const newCount = prevCount + 1;
            if (newCount >= 3) {
                animation.timeScale(1);
                setCounter(0);
            } else {
                animation.timeScale(animation.timeScale() + 3);
            }
            return newCount;
        });
    };

    useEffect(() => {
        const hologramAnimation = gsap.to(hologramRef.current.rotation, {
            z: `+=${Math.PI * 2}`,
            duration: 10,
            repeat: -1,
            ease: "none"
        });
        setAnimation(hologramAnimation);

        return () => hologramAnimation.kill();
    }, []);

    const { nodes, materials } = useGLTF('/models/holo_globe.glb');

    return (
        <group
            ref={holoGlobeRef}
            {...props}
            dispose={null}
            rotation={[0.20, -5.70, 0.39]}
        >
            <group name="Sketchfab_Scene">
                <group name="Sketchfab_model" rotation={[Math.PI / 2, 0, Math.PI / 2]}>
                    <group name="SM_HoloTablefbx" rotation={[-Math.PI, 0, 0]} scale={0.01}>
                        <group name="Object_2">
                            <group name="RootNode">
                                <group
                                    name="Table"
                                    position={[0, 0, 55.561]}
                                    rotation={[0, 0, -Math.PI / 2]}
                                    scale={30.48}>
                                    <mesh
                                        name="Table_Table_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Table_Table_0.geometry}
                                        material={materials.Table}
                                    />
                                </group>
                                <group
                                    ref={hologramRef}
                                    name="Hologram"
                                    position={[0, 0, 149.32]}
                                    rotation={[-0.20, -6.29, 3.93]}
                                    scale={52.304}>
                                    <mesh
                                        name="Hologram_Hologram_0"
                                        castShadow
                                        receiveShadow
                                        geometry={nodes.Hologram_Hologram_0.geometry}
                                        material={materials.Hologram}
                                        onClick={handleDuration}
                                        onPointerOver={(e) => {
                                            e.stopPropagation();
                                            document.body.style.cursor = 'pointer';
                                        }}
                                        onPointerOut={(e) => {
                                            e.stopPropagation();
                                            document.body.style.cursor = 'auto';
                                        }}
                                    />
                                </group>
                            </group>
                        </group>
                    </group>
                </group>
            </group>
        </group>
    );
};

useGLTF.preload('/models/holo_globe.glb');

export default HoloGlobe;
