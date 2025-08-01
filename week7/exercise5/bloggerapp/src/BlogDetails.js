import React from 'react';

const BlogDetails = () => {
  const blogs = [
    { id: 1, title: 'Getting Started with React', category: 'React', date: '2023-01-15' },
    { id: 2, title: 'CSS Grid Layout', category: 'CSS', date: '2023-02-20' },
    { id: 3, title: 'JavaScript ES6 Features', category: 'JavaScript', date: '2023-03-10' }
  ];

  return (
    <div className="details">
      <h2>Blog Details</h2>
      <ul>
        {blogs.map(blog => (
          <li key={blog.id}>
            <h3>{blog.title}</h3>
            <p>Category: {blog.category}</p>
            <p>Date: {blog.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogDetails;