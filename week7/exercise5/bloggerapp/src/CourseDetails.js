import React from 'react';

const CourseDetails = () => {
  const courses = [
    { id: 1, title: 'React Fundamentals', duration: '4 weeks', level: 'Beginner' },
    { id: 2, title: 'Advanced JavaScript', duration: '6 weeks', level: 'Intermediate' },
    { id: 3, title: 'CSS Animations', duration: '3 weeks', level: 'Advanced' }
  ];

  return (
    <div className="details">
      <h2>Course Details</h2>
      <ul>
        {courses.map(course => (
          <li key={course.id}>
            <h3>{course.title}</h3>
            <p>Duration: {course.duration}</p>
            <p>Level: {course.level}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CourseDetails;
