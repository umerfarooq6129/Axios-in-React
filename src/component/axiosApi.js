import React, { useEffect, useState } from 'react'
import axios from './axios'

const AxiosApi = () => {
    const [myData, setmyData] = useState([]);
    const [isError, setisError] = useState([]);

    // by using promises

    // useEffect(() => {
    //     axios.get('https://jsonplaceholder.typicode.com/posts')

    //         // use promises
    //         .then(res =>
    //             setmyData(res.data)
    //         )
    //         .catch((error) => setisError(error.message))

    //     // error handling
    // }, [])

    // now by using asyn await function

    // const getApiData= async()=>{
    //     try{
    //         const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    //             setmyData(res.data);
    //     }
    //     catch(error){
    //         setisError(error.message)
    //     }
        
            
    // }

    // useEffect(()=>{
    //     getApiData();
    // }, [])

    // another way to write axios

    const getApiData= async(url)=>{
        try{
            const res = await axios.get('/posts');
                setmyData(res.data);
        }
        catch(error){
            setisError(error.message)
        }
        
            
    }

    useEffect(()=>{
        getApiData();
    }, [])



    return (
        <>
            <h1 className='title'>axios tutorial</h1>
            {isError !== "" && <p className='error'>{isError}</p>}

            <div className="card">
                {myData.map((post) => {
                    const { id, title, body } = post
                    return (
                        <div className='card-body' key={id}>
                            <h1>{title.slice(0,20)}</h1>
                            <p>{body.slice(0,100)}</p>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default AxiosApi
