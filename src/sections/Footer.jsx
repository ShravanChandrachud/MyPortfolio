import React from 'react'

const Footer = () => {
    return (
        <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-white-500 flex gap-2'>
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

            <div className='flex gap-3'>
                <div className='social-icon'>
                    <a
                        href="https://github.com/ShravanChandrachud"
                        target="_blank"
                    >
                        <img src='/assets/github.svg' alt='github' className='w-7 h-7' />
                    </a>
                </div>
                <div className='social-icon'>
                    <a
                        href="https://www.linkedin.com/in/shravan-chandrachud-308912244/"
                        target="_blank"
                    >
                        <img src='/assets/linkedin-icon.png' alt='LinkdIn' className='w-8 h-8' />
                    </a>
                </div>
            </div>
            <p className='text-white-500'>&copy; 2024 Shravan Chandrachud. All rights reserved.</p>
        </section>
    )
}

export default Footer
