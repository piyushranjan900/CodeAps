// src/pages/Blog.tsx
import React from 'react';
import './Blog.css';

const Blog: React.FC = () => {
  return (
    <div className="blog">
      <h1>Blog</h1>
      <p>Stay updated with the latest news and insights from CodeApsTech.</p>
      <div className="blog-posts">
        <article className="blog-post">
          <h2>5 Tips to Improve Your Website Performance</h2>
          <p>Learn how to optimize your website for speed and better user experience.</p>
          <a href="#">Read More</a>
        </article>
        <article className="blog-post">
          <h2>Why Mobile Apps are Essential for Modern Businesses</h2>
          <p>Discover the benefits of having a mobile app for your business.</p>
          <a href="#">Read More</a>
        </article>
        {/* Add more blog posts as needed */}
      </div>
    </div>
  );
};

export default Blog;
