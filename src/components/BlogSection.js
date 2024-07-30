// src/components/BlogSection.js
import React from 'react';
import { Link } from 'react-router-dom';
import './BlogSection.css';

const blogs = [
  {
    id: 1,
    image: process.env.PUBLIC_URL + '/blog1.jpg',
    title: '6 Strategies to Find Your Conference Keynote and Other Speakers',
    description: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    date: '12 Mar',
    author: 'John Doe'
  },
  {
    id: 2,
    image: process.env.PUBLIC_URL + '/blog2.jpg',
    title: 'How Successfully Used Paid Marketing to Drive Incremental Ticket Sales',
    description: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    date: '12 Mar',
    author: 'John Doe'
  },
  {
    id: 3,
    image: process.env.PUBLIC_URL + '/blog3.jpg',
    title: 'Introducing Workspaces: Work smarter, not harder with new navigation',
    description: 'Sekarang, kamu bisa produksi tiket fisik untuk eventmu bersama Bostiketbos. Hanya perlu mengikuti beberapa langkah mudah.',
    date: '12 Mar',
    author: 'John Doe'
  },
];

const BlogSection = () => (
  <section className="blog-wrapper">
    <h2>Blog</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="blog-list">
      {blogs.map((blog) => (
        <div className="blog-card" key={blog.id}>
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.description}</p>
            <p className="blog-meta">{blog.date} - {blog.author}</p>
          </div>
        </div>
      ))}
    </div>
    <Link to="/blog">
      <button className="read-more-button">Leggi tutto</button>
    </Link>
  </section>
);

export default BlogSection;
