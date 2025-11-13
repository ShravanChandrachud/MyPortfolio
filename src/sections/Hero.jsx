import { PerspectiveCamera } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import HackerRoom from '../Components/HackerRoom'
import CanvasLoader from '../Components/CanvasLoader'
// import { Leva, useControls } from 'leva'
import { useMediaQuery } from 'react-responsive'
import { calculateSizes } from '../constants'
import Headset from '../Components/Headset'
import Cube from '../Components/Cube'
import ReactLogo from '../Components/ReactLogo'
import HoloGlobe from '../Components/HoloGlobe'
import HeroCamera from '../Components/HeroCamera'
import Button from '../Components/Button'

const Hero = () => {
    // const controls = useControls(
    //     'HackerRoom', {
    //     scale: {
    //         value: 0.069,
    //         min: 0.001,
    //         max: 0.08,
    //         step: 0.001
    //     },
    //     positionX: {
    //         value: 0,
    //         min: -5,
    //         max: 5,
    //         step: 0.0001
    //     },
    //     positionY: {
    //         value: 0,
    //         min: -5,
    //         max: 5,
    //         step: 0.0001
    //     },
    //     positionZ: {
    //         value: 0,
    //         min: -5,
    //         max: 5,
    //         step: 0.0001
    //     },
    //     rotationX: {
    //         value: 0,
    //         min: -4 * Math.PI,
    //         max: 4 * Math.PI,
    //         step: 0.0001
    //     },
    //     rotationY: {
    //         value: Math.PI,
    //         min: -4 * Math.PI,
    //         max: 4 * Math.PI,
    //         step: 0.0001
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -4 * Math.PI,
    //         max: 4 * Math.PI,
    //         step: 0.0001
    //     },
    // });

    const isSmall = useMediaQuery({ maxWidth: 520 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });
    const isMobile = useMediaQuery({ maxWidth: 768 });

    const sizes = calculateSizes(isSmall, isMobile, isTablet);

    return (
        <section id='home' className='min-h-screen w-full flex flex-col relative'>
            <div className='w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3'>
                <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>
                    Hi, I am Shravan
                    <span className='waving-hand'>👋</span>
                </p>
                <p className='hero_tag text-gray_gradient'>
                    Developing Innovative Ideas
                </p>
            </div>

            <div className='w-full h-full absolute inset-0'>
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 20]} />
                        <ambientLight intensity={1.5} />
                        <directionalLight position={[10, 10, 10]} intensity={5} />
                        <HeroCamera isMobile={isMobile}>
                            <HackerRoom
                                scale={sizes.deskScale}
                                position={sizes.deskPosition}
                                rotation={[0.0, Math.PI, 0.0]}
                            />
                        </HeroCamera>
                        <group>
                            <Headset position={sizes.headsetPosition} />
                            <Cube position={sizes.cubePosition} />
                            <ReactLogo position={sizes.reactPosition} />
                            <HoloGlobe position={sizes.holoGlobePosition} />
                        </group>
                    </Suspense>
                </Canvas>
            </div>
            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href='#contact' className='w-fit'>
                    <Button name="Want to chat with me?" isBeam containerClass="sm:w-fit w-full sm:min-w-96" />
                </a>
            </div>
        </section>
    )
}

export default Hero
