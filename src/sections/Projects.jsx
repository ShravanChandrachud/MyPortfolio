import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import { useControls } from 'leva';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../Components/CanvasLoader'
import DemoComputer from '../Components/DemoComputer';

const Projects = () => {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const projectCount = myProjects.length;

    // const cont = useControls('headset', {
    //     rotationX: {
    //         value: -0.25,
    //         min: -2 * Math.PI,
    //         max: 2 * Math.PI,
    //         step: Math.PI / 64
    //     },
    //     rotationY: {
    //         value: Math.PI,
    //         min: -2 * Math.PI,
    //         max: 2 * Math.PI,
    //         step: Math.PI / 64
    //     },
    //     rotationZ: {
    //         value: 0,
    //         min: -2 * Math.PI,
    //         max: 2 * Math.PI,
    //         step: Math.PI / 64
    //     },
    // })

    const currentProj = myProjects[selectedProjectIndex]

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prev) => {
            if (direction === 'previous') {
                return prev === 0 ? projectCount - 1 : prev - 1;
            } else {
                return prev === projectCount - 1 ? 0 : prev + 1;
            }
        })
    }
    return (
        <section id='projects' className='c-space my-20'>
            <p className='head-text'>My Projects</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl'>
                    <div className='absolute top-0 right-0'>
                        <img src={currentProj.spotlight} alt='spotlight' className='w-full h-96 object-cover rounded-xl' />
                    </div>
                    <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-xl' style={currentProj.logoStyle}>
                        <img src={currentProj.logo} alt='logo' className='w-10 h-10 shadow-sm' />
                    </div>
                    <div className='flex flex-col gap-5 text-white-600 my-5'>
                        <p className='text-white text-2xl font-semibold animatedText'>
                            {currentProj.title}
                        </p>
                        <p className='animatedText'>{currentProj.desc}</p>
                        <p className='animatedText'>{currentProj.subdesc}</p>
                    </div>
                    <div className='flex items-center justify-center flex-wrap gap-5'>
                        <div className='flex items-center gap-6'>
                            {currentProj.tags.map((tag, index) => (
                                <div key={index} className='tech-logo'>
                                    <img src={tag.path} alt={tag.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-between items-center mt-7'>
                        <button className='arrow-btn' onClick={() => handleNavigation('previous')}>
                            <img src='/assets/left-arrow.png' alt='left arrow' className='w-4 h-4' />
                        </button>
                        <button className='arrow-btn' onClick={() => handleNavigation('next')}>
                            <img src='/assets/right-arrow.png' alt='right arrow' className='w-4 h-4' />
                        </button>
                    </div>
                </div>
                <div className='border border-black-300 bg-black-200 rounded-lg md:h-full h-96 '>
                    <Canvas>
                        <ambientLight intensity={5} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -Math.PI, 0]}>
                                    <DemoComputer
                                        position={[0.1, 0.5, 0]}
                                        scale={0.8}
                                        rotation={[-0.25, 3.18, 0]}
                                        // rotation={[cont.rotationX, cont.rotationY, cont.rotationZ]}
                                        texture={currentProj.texture}
                                    />
                                </group>
                            </Suspense>
                        </Center>
                        <OrbitControls
                            maxPolarAngle={Math.PI / 2}
                            enableZoom={true}
                            enablePan
                        />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects
