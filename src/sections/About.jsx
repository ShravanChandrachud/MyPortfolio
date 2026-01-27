import React, { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import { color } from 'three/webgpu'
import Button from '../Components/Button'
import { toast } from 'react-toastify';

const About = () => {
    const globeRef = useRef();

    const [hasCopied, setHasCopied] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            globeRef.current.pointOfView({ lat: 42.33351257529759, lng: -71.10180955798526, altitude: 1.5 }, 0);
        }, 300);
    }, []);

    const handleCopyEmail = () => {
        navigator.clipboard.writeText('shravanchandrachud0110@gmail.com');

        setHasCopied(true);
        toast.info("Email has been copied to your clipboard");
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }

    const handleCopyPhone = (num) => {
        navigator.clipboard.writeText(num);

        setHasCopied(true);
        toast.info("Phone number has been copied to your clipboard");
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }


    const myLoc = [{
        lat: 42.33351257529759,
        lng: -71.10180955798526,
        color: 'red',
        size: 20,
    }]

    const markerSvg = `<svg viewBox="-4 0 36 36">
    <path fill="currentColor" d="M14,0 C21.732,0 28,5.641 28,12.6 C28,23.963 14,36 14,36 C14,36 0,24.064 0,12.6 C0,5.641 6.268,0 14,0 Z"></path>
    <circle fill="black" cx="14" cy="14" r="7"></circle>
  </svg>`;

    return (
        <section className='c-space my-20' id='about'>
            <p className='head-text'>About Me</p>
            <div className='grid mt-12 xl:grid-cols-3 xl:grid-rows-4 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src='/assets/grid1.png' alt='grid1' className='w-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>MS CS Student @ Northeastern</p>
                            <p className='grid-subtext'>I'm a CS graduate student with a 4.0 GPA, focused on making AI work inside 3D worlds. I spend my time building things like custom Transformers and smart agents in Unity. My goal is to bridge the gap between intelligent code and immersive digital spaces.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <img src='/assets/tech-stack-bg.png' alt='grid2' className='w-full sm:w-[326px] h-[176px] object-contain' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>
                                1. Machine Learning & Data Science:
                                PyTorch, TensorFlow, Keras, OpenCV, NumPy, Pandas, Scikit-Learn, TensorBoard
                                2. Spatial Computing & Simulation:
                                Unity Engine (C#), AR/VR Development, Unreal Engine
                                3. Programming Languages and Databases:
                                Python, C#, C++, JavaScript/TypeScript, MongoDB(NoSQL), MySQL, PostgresSQL
                                4. Tools:
                                MySQL Workbench, PgAdmin4, Docker, JIRA, Robot Framework, Remix IDE, Git.
                            </p>
                        </div>
                    </div >
                </div >
                <div className='col-span-1 xl:row-span-2'>
                    <div className='grid-container'>
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center'>
                            <Globe
                                ref={globeRef}
                                height={326}
                                width={326}
                                backgroundColor='rgba(0,0,0,0)'
                                showAtmosphere={true}
                                showGraticules={true}
                                globeImageUrl='//unpkg.com/three-globe/example/img/earth-day.jpg'
                                bumpImageUrl='//unpkg.com/three-globe/example/img/earth-topology.png'
                                htmlElementsData={myLoc}
                                htmlElement={d => {
                                    const el = document.createElement('div');
                                    el.innerHTML = markerSvg;
                                    el.style.color = d.color;
                                    el.style.width = `${d.size}px`;

                                    el.style['pointer-events'] = 'auto';
                                    el.style.cursor = 'pointer';
                                    return el;
                                }}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>I currently live in Boston</p>
                            <p className='grid-subtext'>I was born in Pune, Maharashtra, India</p>
                            <a href='#contact'>
                                <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-2'>
                    <div className='grid-container flex flex-col justify-between'>

                        <div className="flex justify-center">
                            <img
                                src='/assets/grid3.png'
                                alt='grid3'
                                className='w-full sm:h-[260px] h-fit object-contain'
                            />
                        </div>

                        <div className="my-6">
                            <p className='grid-headtext mb-2'>Bringing AI into 3D Space</p>
                            <p className='grid-subtext'>
                                I believe AI is most powerful when it can interact with a 3D environment.
                                I am studying to integrate Deep Learning models into Unity simulations so they can learn to 'see' and 'move' in a digital world.
                                By combining Computer Vision with spatial computing, I'm building the tools that will power the next generation of smart AR/VR interfaces.
                            </p>
                        </div>

                        <div className="flex justify-center mt-auto">
                            <a
                                href="/assets/Shravan_Chandrachud_resume.pdf"
                                download="Shravan_Chandrachud_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-neutral-100 font-bold text-xl hover:text-white transition-colors"
                            >
                                Download Resume
                            </a>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-2">
                    <div className="grid-container">
                        <img
                            src="/assets/grid4.png"
                            alt="grid4"
                            className="w-full md:h-[126px] sm:h-[276px] h-fit object-cover sm:object-top"
                        />
                        <div className="space-y-2">
                            <p className="grid-headtext text-center">Contact Me</p>
                            <div className="flex items-center gap-2">
                                <img src="/assets/email.png" alt='email icon' />
                                <div className='copy-container' onClick={handleCopyEmail}>
                                    <p className="md:text-sm w-fit font-small text-gray_gradient text-white">
                                        shravanchandrachud0110@gmail.com
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/assets/githubIconDark.png" alt="github icon" />
                                <a href="https://github.com/ShravanChandrachud" target='_blank' className="md:text-sm font-small text-gray_gradient text-white">
                                    Github
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/assets/linkedIn.png" alt="linkedin icon" />
                                <a href="https://www.linkedin.com/in/shravan-chandrachud-308912244/" target='_blank' className="md:text-sm font-small text-gray_gradient text-white">
                                    LinkedIn
                                </a>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/assets/phone.png" alt="phone icon" />
                                <div className="copy-container" onClick={() => handleCopyPhone('+918459984264')}>
                                    <p className="md:text-sm font-small text-gray_gradient text-white">
                                        +91 84599 84264
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src="/assets/phone.png" alt="phone icon" />
                                <div className="copy-container" onClick={() => handleCopyPhone('+18573393097')}>
                                    <p className="md:text-sm font-small text-gray_gradient text-white">
                                        +1 857-339-30977
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    )
}

export default About
