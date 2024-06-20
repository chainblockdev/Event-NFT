import React from 'react';
import './BlogSection.css';

const blogs = [
  {
    image: process.env.PUBLIC_URL + '/blog1.jpg',
    title: '6 Strategies to Find Your Conference Keynote and Other Speakers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12 Mar',
    author: 'John Doe'
  },
  {
    image: process.env.PUBLIC_URL + '/blog2.jpg',
    title: 'How Successfully Used Paid Marketing to Drive Incremental Ticket Sales',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12 Mar',
    author: 'John Doe'
  },
  {
    image: process.env.PUBLIC_URL + '/blog3.jpg',
    title: 'Introducing Workspaces: Work smarter, not harder with new navigation',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    date: '12 Mar',
    author: 'John Doe'
  },
];

const BlogSection = () => (
  <section className="blog-wrapper">
    <h2>Blog</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <div className="blog-list">
      {blogs.map((blog, index) => (
        <div className="blog-card" key={index}>
          <img src={blog.image} alt={blog.title} className="blog-image" />
          <div className="blog-content">
            <h3 className="blog-title">{blog.title}</h3>
            <p className="blog-description">{blog.description}</p>
            <p className="blog-meta">{blog.date} - {blog.author}</p>
          </div>
        </div>
      ))}
    </div>
    <button className="read-more-button">Leggi tutto</button>
  </section>
);

export default BlogSection;
