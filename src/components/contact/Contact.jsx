import "./contact.css";
import React from 'react'
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import CALL from "../../assets/call.jpg";
import { motion } from "framer-motion";


const Contact = () => {

    const form = useRef();

    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);


    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus('');

        emailjs
            .sendForm('service_qqy4mpn', 'template_ahfesul', form.current, {
                publicKey: '7-nccnJpD3ghQf0fG',
            })
            .then(() => {
                setStatus('success');
                setLoading(false);
                form.current.reset(); // clear form
            })
            .catch((error) => {
                console.log('FAILED...', error.text);
                setStatus('error');
                setLoading(false);
            });
    };


    return (
        <div className='contact' id="contact">

            <span className="contact_title">CONTACT US</span>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >

                <div className="contact_container">


                    <div className="contact_img_div">
                        <img src={CALL} alt="call_img" />
                    </div>

                    <div className="form_div">
                        <form ref={form} onSubmit={sendEmail}>
                            <input type="text" name='name' placeholder='Enter Full Name' required />
                            <input type="email" name='email' placeholder='Enter Email' required />
                            <textarea name="message" rows="7" placeholder='Enter Message' required></textarea>

                            <button type='submit' className='submit_btn' disabled={loading}>
                                {loading ? 'Sending...' : 'Send message'}
                            </button>

                            {status === 'success' && (
                                <p className="success-msg">Message sent successfully...</p>
                            )}

                            {status === 'error' && (
                                <p className="error-msg">Failed to send message</p>
                            )}
                        </form>

                    </div>

                </div>

            </motion.div>


        </div>
    );
};

export default Contact;