import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { toast } from 'react-toastify';

const Contact = () => {
    const formRef = useRef();

    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    })
    const [loading, setLoading] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await emailjs.send(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                {
                    from_name: form.name,
                    to_name: 'Shravan',
                    to_email: 'shravanchandrachud0110@gmail.com',
                    from_email: form.email,
                    message: form.message,
                },
                import.meta.env.VITE_PUBLIC_KEY
            );

            setLoading(false);
            toast.success('Your message has been sent!');

            setForm({
                name: '',
                email: '',
                message: '',
            })
        } catch (err) {
            console.log(err);
            toast.error("Error sending message.");
            setLoading(false);
        }
    };


    return (
        <section id='contact' className='c-space my-20'>
            <div className='relative min-h-screen flex items-center justify-center flex-col'>
                <img src='/assets/terminal.png' alt='terminal background' className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>
                    <h3 className='head-text'>Let's Talk</h3>
                    <p className='text-lg text-white-600 mt-3'>Whether you're looking to create a new website, improve existing website or make a new project, I'm here to help</p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-76'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input
                                type='text'
                                name='name'
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Enter your name'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input
                                type='email'
                                name='email'
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Enter your email'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Message Me</span>
                            <textarea
                                name='message'
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder="Hi Shravan, I'm interested in talking to you about ..."
                            />
                        </label>
                        <button className='field-btn' type='submit' disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src='assets/arrow-up.png' alt='arrow up' className='field-btn_arrow' />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
