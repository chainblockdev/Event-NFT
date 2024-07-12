// src/components/BlogDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const blogs = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + '/blog1.jpg',
    title: '6 Strategies to Find Your Conference Keynote and Other Speakers',
    description: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    date: '12 Mar',
    author: 'John Doe',
    content: 'Full content of the blog post goes here...'
  },
  // Add other blog objects here...
];

const BlogDetails = () => {
  const { id } = useParams();
  const blog = blogs.find(blog => blog.id === parseInt(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <div>
      <img src={blog.image} alt={blog.title} />
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <p>{blog.date} - {blog.author}</p>
      <div>{blog.content}</div>
    </div>
  );
};

export default BlogDetails;
