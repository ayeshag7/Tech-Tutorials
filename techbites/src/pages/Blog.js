import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Blog = () => {
    const params = useParams()
    const blog = params.blog;

    const [data, setData] = useState('');

    useEffect(() => {
        async function fetchBlogs() {
            const response = await fetch(`http://localhost:8000/blogs?id=${blog}`);
            const blogData = await response.json();
            setData(blogData[0]);
        }
        fetchBlogs();
    }, [])

    const markup = { __html: data.content };


  return (
    <div className='flex flex-col px-12 my-12 mx-24'>
        <h1 className='text-center font-bold text-3xl my-6'>{data && data.title}</h1>
        <p className='' dangerouslySetInnerHTML={markup}></p>
    </div>
  )
}
