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
            globeRef.current.pointOfView({ lat: 18.47961417830408, lng: 73.86247673863971, altitude: 1.5 }, 0);
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

    const handleCopyPhone = () => {
        navigator.clipboard.writeText('+918459984264');

        setHasCopied(true);
        toast.info("Phone number has been copied to your clipboard");
        setTimeout(() => {
            setHasCopied(false)
        }, 2000)
    }


    const myLoc = [{
        lat: 18.47961417830408,
        lng: 73.86247673863971,
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
            <div className='grid mt-12 xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full'>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid1.png' alt='grid1' className='w-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Hi, I'm Shravan</p>
                            <p className='grid-subtext'>I'm an aspiring computer science student with extensive experience in full-stack development. I'm passionate about AR/VR development and excited by its transformative potential in the future of technology.</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid2.png' alt='grid2' className='w-full sm:w-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>Tech Stack</p>
                            <p className='grid-subtext'>I specialize in ThreeJS, React, Node and SQL based web applications. I also have knowledge of python, c++, java, html, css and javascript. I am currently learning Unreal Engine and Unity for AR/VR Development</p>
                        </div>
                    </div>
                </div>
                <div className='col-span-1 xl:row-span-3'>
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
                                pointOfView={{ lat: 0, lng: 73.86247673863971, altitude: 2 }}
                                htmlElementsData={myLoc}
                                htmlElement={d => {
                                    const el = document.createElement('div');
                                    el.innerHTML = markerSvg;
                                    el.style.color = d.color;
                                    el.style.width = `${d.size}px`;

                                    el.style['pointer-events'] = 'auto';
                                    el.style.cursor = 'pointer';
                                    el.onclick = () => console.info(d);
                                    return el;
                                }}
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>I live here</p>
                            <p className='grid-subtext'>I was born in Pune, Maharashtra, India</p>
                            <Button name='Contact Me' isBeam containerClass='w-full mt-10' />
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-2 xl:row-span-3'>
                    <div className='grid-container'>
                        <img src='/assets/grid3.png' alt='grid3' className='w-full sm:h-[276px] h-fit object-contain' />
                        <div>
                            <p className='grid-headtext'>My Passion for Virtual Reality</p>
                            <p className='grid-subtext'>I believe 3D technology will aid us widely in the future for in many cases like simulations and digital twinning and hence I have taken a step into learning and understanding 3D technology like Three Js</p>
                        </div>
                    </div>
                </div>
                <div className="xl:col-span-1 xl:row-span-3">
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
                                <div className="copy-container" onClick={handleCopyPhone}>
                                    <p className="md:text-sm font-small text-gray_gradient text-white">
                                        +91 84599 84264
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
