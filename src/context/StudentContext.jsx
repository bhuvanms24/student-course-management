import { createContext, useState } from "react";

export const StudentContext = createContext();

export function StudentProvider({ children }) {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "Bhuvan M S",
      email: "bhuvan@example.com",
      course: "MCA"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      email: "rahul@example.com",
      course: "MCA"
    },
    {
      id: 3,
      name: "Anjali Sharma",
      email: "anjali@example.com",
      course: "BCA"
    }
  ]);

  return (
    <StudentContext.Provider value={{ students, setStudents }}>
      {children}
    </StudentContext.Provider>
  );
}