import { useContext, useState } from "react";
import { StudentContext } from "../context/StudentContext";

function AddStudent() {
  const { students, setStudents } = useContext(StudentContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const newStudent = {
      id: students.length + 1,
      name: name,
      email: email,
      course: course
    };

    setStudents([...students, newStudent]);

    setName("");
    setEmail("");
    setCourse("");

    alert("Student added successfully!");
  }

  return (
    <div className="container">
      <h1>Add Student</h1>

      <form onSubmit={handleSubmit} className="student-form">
        <label>Student Name</label>

        <input
          type="text"
          placeholder="Enter student name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />

        <label>Email</label>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />

        <label>Course</label>

        <select
          value={course}
          onChange={(event) => setCourse(event.target.value)}
          required
        >
          <option value="">Select Course</option>
          <option value="MCA">MCA</option>
          <option value="BCA">BCA</option>
          <option value="B.Tech">B.Tech</option>
          <option value="MBA">MBA</option>
        </select>

        <button type="submit">
          Add Student
        </button>
      </form>
    </div>
  );
}

export default AddStudent;