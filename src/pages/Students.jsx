import { useContext, useEffect } from "react";
import { StudentContext } from "../context/StudentContext";
import StudentCard from "../components/StudentCard";

function Students() {
  const { students } = useContext(StudentContext);

  useEffect(() => {
    console.log("Student data loaded");
  }, []);

  return (
    <div className="container">
      <h1>Students</h1>

      <div className="student-list">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
          />
        ))}
      </div>
    </div>
  );
}

export default Students;