import React, { useState } from 'react';
import './App.css';
import BookDetails from './BookDetails';
import BlogDetails from './BlogDetails';
import CourseDetails from './CourseDetails';

function App() {
  const [activeTab, setActiveTab] = useState('books');
  const [renderMethod, setRenderMethod] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  // Simulate loading
  const simulateLoad = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 1500);
  };

  // Method 1: If-else statement
  const renderWithIfElse = () => {
    if (activeTab === 'books') {
      return <BookDetails />;
    } else if (activeTab === 'blogs') {
      return <BlogDetails />;
    } else {
      return <CourseDetails />;
    }
  };

  // Method 2: Ternary operator
  const renderWithTernary = () => (
    activeTab === 'books' ? <BookDetails /> :
    activeTab === 'blogs' ? <BlogDetails /> :
    <CourseDetails />
  );

  // Method 3: Logical && operator
  const renderWithLogicalAnd = () => (
    <>
      {activeTab === 'books' && <BookDetails />}
      {activeTab === 'blogs' && <BlogDetails />}
      {activeTab === 'courses' && <CourseDetails />}
    </>
  );

  // Method 4: Switch statement
  const renderWithSwitch = () => {
    switch(activeTab) {
      case 'books': return <BookDetails />;
      case 'blogs': return <BlogDetails />;
      case 'courses': return <CourseDetails />;
      default: return <BookDetails />;
    }
  };

  // Method 5: Object lookup
  const componentMap = {
    books: <BookDetails />,
    blogs: <BlogDetails />,
    courses: <CourseDetails />
  };

  const renderWithObjectLookup = () => componentMap[activeTab];

  // Method 6: Immediately Invoked Function
  const renderWithIIFE = () => (
    (() => {
      if (activeTab === 'books') return <BookDetails />;
      if (activeTab === 'blogs') return <BlogDetails />;
      return <CourseDetails />;
    })()
  );

  // Select rendering method based on state
  const renderComponent = () => {
    switch(renderMethod) {
      case 1: return renderWithIfElse();
      case 2: return renderWithTernary();
      case 3: return renderWithLogicalAnd();
      case 4: return renderWithSwitch();
      case 5: return renderWithObjectLookup();
      case 6: return renderWithIIFE();
      default: return renderWithIfElse();
    }
  };

  return (
    <div className="App">
      <h1>Blogger App</h1>
      
      <div className="controls">
        <div className="tabs">
          <button 
            className={activeTab === 'books' ? 'active' : ''}
            onClick={() => setActiveTab('books')}
          >
            Books
          </button>
          <button 
            className={activeTab === 'blogs' ? 'active' : ''}
            onClick={() => setActiveTab('blogs')}
          >
            Blogs
          </button>
          <button 
            className={activeTab === 'courses' ? 'active' : ''}
            onClick={() => setActiveTab('courses')}
          >
            Courses
          </button>
        </div>

        <div className="methods">
          <h3>Rendering Methods:</h3>
          {[1, 2, 3, 4, 5, 6].map(method => (
            <button
              key={method}
              className={renderMethod === method ? 'active' : ''}
              onClick={() => setRenderMethod(method)}
            >
              Method {method}
            </button>
          ))}
        </div>

        <button onClick={simulateLoad}>
          {isLoading ? 'Loading...' : 'Simulate Loading'}
        </button>
      </div>

      <div className="content">
        {isLoading ? (
          <div className="loader">Loading content...</div>
        ) : (
          renderComponent()
        )}
      </div>
    </div>
  );
}

export default App;