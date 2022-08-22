import { useEffect, useState } from "react";
import axios from "axios";

function AllStudents() {
    const [students, setStudents] = useState(null);

    useEffect(async () => {
        const API_URL = process.env.REACT_APP_BASE_URL;
        try {
            const response = await axios.get(`${API_URL}/students`);
            const students = response.data;
            if (!students || students.length === 0) {
                alert("Putz! Não há estudantes cadastrados!");
            } else {
                setStudents(students);
            }
        } catch (error) {
            alert("Não foi possível recuperar os estudantes!");
        }
    }, []);

    return (
        students ? students.map((student, index) => {
            return <h1 key={index}>{student.name}</h1>
        }) : "Carregando..."
    )
}

export default AllStudents;