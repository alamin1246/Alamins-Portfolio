import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import './Blogs.css';

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data));
    }, [])
    return (
        <div id='blogs' className='container'>
            <div className="row mt-5">
              <br/>
                <h1 className='text-primary text-center mt-5'>Blogs</h1>
                <div className='blogs-container'>
                    {
                        blogs.map(blog => <Blog
                            key={blog.id}
                            blog={blog}
                        >
                        </Blog>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Blogs;