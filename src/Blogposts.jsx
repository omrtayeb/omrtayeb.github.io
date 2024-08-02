import React from 'react';
// import './Blogpost.scss';  // Make sure to import your SCSS file

const Blogpost = () => {
  return (
    <div className="blogpost-page">
      <input type="checkbox" id="sidebar-toggle" />
      <label htmlFor="sidebar-toggle" className="sidebar-toggle-label">☰</label>
      <aside className="sidebar">
        <ul>
          <li><a href="#topic1">Topic 1</a></li>
          <li><a href="#topic2">Topic 2</a></li>
          {/* Add more topics as needed */}
        </ul>
      </aside>
      <main className="content">
        <h1>Blog Post Title</h1>
        <p>Blog post content goes here...</p>
        {/* Add more content as needed */}
      </main>
    </div>
  );
};

export default Blogpost;
