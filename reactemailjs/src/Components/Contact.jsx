import React, { useRef } from 'react';
import Swal from 'sweetalert2'
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_gyvbqzd', 'template_cob1ilm', form.current, {
                publicKey: 'fusW1807v69HYIce3',
            })
            .then(
                () => {
                    Swal.fire({
                        title: "Good job!",
                        text: "You clicked the button!",
                        icon: "success"
                    });
                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div class="mb-4">
                <label class="block text-gray-800 mb-1" for="name">Your Name</label>
                <input type="name" name="user_name"
                    class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your name"/>



            </div>
            <div class="mb-4">
                <label class="block text-gray-800 mb-1" for="email">Your Email</label>
                <input
                    class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    placeholder="Enter your email"
                    name="user_email"
                    id="email"
                    type="email"
                />
            </div>
            <div class="mb-4">
                <label class="block text-gray-800 mb-1" for="message"
                >Your Message</label>

                <textarea
                    class="w-full px-4 py-2 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-300 transition duration-300"
                    rows="4"
                    placeholder="Enter your message"
                    name="message"
                    id="message"
                ></textarea>
            </div>
            <button
                class="w-full bg-yellow-300 text-gray-800 py-2 px-4 rounded-lg hover:bg-yellow-400 transition duration-300"
                type="submit" value="send"
            >
                Send Message
            </button>
        </form>
    );
};

export default Contact





