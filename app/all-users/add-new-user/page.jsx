"use client"
import React, { useState, useEffect } from 'react'

export default function Page() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [result, setResult] = useState("");

    const userData = {
        name: name,
        email: email,
        city: city
    };

    useEffect(() => {
        if (result) {
            const timer = setTimeout(() => {
                setResult("");
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [result]);

    const addUser = async () => {
        console.log(userData)
        try {
            let response = await fetch("https://664cd720ede9a2b55651d20a.mockapi.io/user/users", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            if (response.ok) {
                let data = await response.json();
                console.log(data);
                setResult("Your record is submitted successfully");
            } else {
                setResult("Failed to submit your record");
            }
        } catch (error) {
            console.error("Error:", error);
            setResult("An error occurred while submitting your record");
        }
    }

    return (
        <section className='px-5 py-20'>
            <div className='max-w-[960px] mx-auto w-full'>
                <p className={`text-green-600 font-bold transition-opacity duration-1000 ${result ? 'opacity-100' : 'opacity-0'}`}>{result}</p>
                <h1 className='text-5xl mb-5 font-bold'>Enter New User Details</h1>
                <div className='flex gap-5 mb-5'>
                    <div className='w-full md:w-full'>
                        <input type="text" value={name} onChange={(event) => { setName(event.target.value) }} name="name" id="name" placeholder='Enter Full Name' className='w-full h-14 mt-4 border focus:border-green-500 border-gray-200 p-2 rounded-md' />
                    </div>
                </div>
                <div className='mb-5'>
                    <input type="email" value={email} onChange={(event) => { setEmail(event.target.value) }} name="u_email" id="u_email" placeholder='Enter User Email' className='w-full h-14 mt-4 border focus:border-green-500 border-gray-200 p-2 rounded-md' />
                </div>
                <div className='mb-5'>
                    <input type="text" value={city} onChange={(event) => { setCity(event.target.value) }} name="city" id="city" placeholder='Enter your City' className='w-full h-14 mt-4 border focus:border-green-500 border-gray-200 p-2 rounded-md' />
                </div>
                <button className='bg-green-700 text-white py-3 px-5 rounded-lg' onClick={addUser}>
                    Add User
                </button>
            </div>
        </section>
    )
}
