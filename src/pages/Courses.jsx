function Courses() {
  const courses = [
    {
      id: 1,
      name: "Web Development",
      duration: "3 Months"
    },
    {
      id: 2,
      name: "Database Management",
      duration: "4 Months"
    },
    {
      id: 3,
      name: "Python Programming",
      duration: "3 Months"
    },
    {
      id: 4,
      name: "Cloud Computing",
      duration: "4 Months"
    }
  ];

  return (
    <div className="container">
      <h1>Available Courses</h1>

      <div className="course-list">
        {courses.map((course) => (
          <div className="course-card" key={course.id}>
            <h3>{course.name}</h3>
            <p>Duration: {course.duration}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;