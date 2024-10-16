import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    // State to store form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle input change
    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log form data to console
        console.log(formData);
    };

    return (
        <div className="container">
            <div className="contact_info">
                <div>
                    <h1 className="contact_title">Contact Me</h1>
                    <div className="flex items-top justify-center sm:items-center sm:pt-0">
                        <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 md:my-10">
                            <div className="overflow-hidden">
                                <div className="grid grid-cols-1 md:grid-cols-2">
                                    <div className="p-6 mr-2 sm:rounded-lg">
                                        <h1 className="text-4xl sm:text-5xl text-white font-extrabold tracking-tight">
                                            Get in touch
                                        </h1>
                                        <p className="text-lg sm:text-2xl font-medium text-white mt-2">
                                            Fill in the form to start a conversation
                                        </p>

                                        <div>
                                            <div className="flex items-center mt-8 text-white">
                                                <FontAwesomeIcon icon={faLocationDot} className="w-8 h-8" />
                                                <div className="ml-4 text-md tracking-wide w-40">
                                                    Gazirchat, Ashulia, Savar, Dhaka
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-4 text-white">
                                                <FontAwesomeIcon icon={faPhone} className="w-8 h-8" />
                                                <div className="ml-4 text-md tracking-wide w-40">
                                                    +8801619821700
                                                </div>
                                            </div>
                                            <div className="flex items-center mt-4 text-white">
                                                <FontAwesomeIcon icon={faEnvelope} className="w-8 h-8" />
                                                <div className="ml-4 text-md tracking-wide w-40">
                                                    engrmaruw@gmail.com
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact Form */}
                                    <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
                                        <div className="flex flex-col">
                                            <label htmlFor="name" className="hidden">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                id="name"
                                                placeholder="Full Name"
                                                className="mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-black focus:border-indigo-500 focus:outline-none"
                                                value={formData.name}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="flex flex-col mt-2">
                                            <label htmlFor="email" className="hidden">Email</label>
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                placeholder="Email"
                                                className="mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-black focus:border-indigo-500 focus:outline-none"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <div className="flex flex-col mt-2">
                                            <label htmlFor="message" className="hidden">Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Message"
                                                cols="30"
                                                rows="4"
                                                className="mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-black focus:border-indigo-500 focus:outline-none"
                                                value={formData.message}
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <button type="submit" className="md:w-32 primary_btn mt-5 play_bankai">
                                            Submit
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
