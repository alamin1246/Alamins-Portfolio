import React from 'react';
import './Blog.css';

const Blog = ({ blog }) => {
    const {date, blogHeading,blogDes,blogImage } = blog;
  
    return (
        <div className='blog'>
            <p>Date:{date}</p>
            <h5>{blogHeading}</h5>
            <p><small>{blogDes}</small></p>
            <img className='w-100' height={300} src={blogImage} alt="" />
            
        </div>
    );
};

export default Blog;