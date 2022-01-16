import React, { useState, useEffect } from 'react'

const UseEffectAPI = () => {

    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/albums/1/photos');
        setUsers(await response.json());
    }
    useEffect(() => {
        getUsers();

    }, []);

    return (
        <>
            <h1>Use Effect API</h1>
            <div className='container-fluid mt-5'>
                <div className='row text-center'>
                    {
                        users.map((curElement) => {
                            return(
                            <div className='col-10 col-md-4 mt-5'>
                                <div className='card p-2'>
                                    <div className='d-flex align-items-center'>
                                        <div className='image'> <img src={curElement.thumbnailUrl}></img></div>
                                        <div className='ml-3 w-100'>
                                            <h4 className='mb-0 mt-0 textLeft'>Harsh</h4><span className='textLeft'>Web Developer</span>
                                            <div className='p-2 mt-2 bg-light d-flex justify-content-between rounded text-dark stats'>
                                                <div className='d-flex flex-column'>
                                                    <span className='articles'>Articles</span><span className='number1'>420</span></div>
                                                <div className='d-flex flex-column'>
                                                    <span className='followers'>Followers</span><span className='number2'>658</span></div>
                                                <div className='d-flex flex-column'>
                                                    <span className='rating'>Rating</span><span className='number3'>8.6</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })
                    }
                   
                </div>
            </div>
        </>
    )
}

export default UseEffectAPI
