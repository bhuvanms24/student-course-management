function StudentCard({ student }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p>
        <strong>Email:</strong> {student.email}
      </p>

      <p>
        <strong>Course:</strong> {student.course}
      </p>
    </div>
  );
}

export default StudentCard;