import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import axios from "axios";

export default function Add() {
    const [student, setStudent] = useState({
        regNo: 0,
        studentName: "",
        grade: "",
        section:""
    });

    const addStudent = event => {
        event.preventDefault()
        axios.post("http://localhost:3001/students", student, {headers: {"Content-Type": "application/json"}}).then(() => {
            window.location.reload(false);
        })
    }

    return (
    <>
        <h2>Add a student</h2>
    <Box component="form">
        <TextField id="standard-basic" label="Registration No. " variant="standard" value={student.regNo} onChange={(event)=> {
            setStudent({...student, regNo: event.target.value})
        }} />
        <TextField id="standard-basic" label="Name" variant="standard" value={student.studentName} onChange={(event)=> {
            setStudent({...student, studentName: event.target.value})
        }} />
        <TextField id="standard-basic" label="Grade" variant="standard" value={student.grade} onChange={(event)=> {
            setStudent({...student, grade: event.target.value})
        }} />
        <TextField id="standard-basic" label="Section" variant="standard" value={student.section} onChange={(event)=> {
            setStudent({...student, section: event.target.value})
        }} />
        <Button variant="outlined" onClick={addStudent}>Add</Button>
    </Box>
    </>
    );
}
