import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';

export default function ShowStudents() {

    const [studentsList, setStudentsList] = useState([]);

    const deleteStudent = (id) => {
        axios.delete(`http://localhost:3001/students/${id}`).then(() => {
            window.location.reload(false);
        })
    }

    useEffect(() => {
        axios.get("http://localhost:3001/students").then((allStudents) => {
            setStudentsList(allStudents.data)
        })
    }, [])

    return (
    <TableContainer component={Paper}>
        <Table aria-label="simple table">
        <TableHead>
            <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>regNo</TableCell>
            <TableCell>Grade</TableCell>
            <TableCell>Section</TableCell>
            <TableCell>Action</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {studentsList.map((student, key) => (
            <TableRow key={key}>
                <TableCell component="th" scope="row">
                {student.studentName}
                </TableCell>
                <TableCell align="right">{student.regNo}</TableCell>
                <TableCell align="right">{student.grade}</TableCell>
                <TableCell align="right">{student.section}</TableCell>
                <TableCell align="right" onClick={() => deleteStudent(student._id) }> Delete </TableCell>
            </TableRow>
            ))}
        </TableBody>
        </Table>
    </TableContainer>
    );
}
