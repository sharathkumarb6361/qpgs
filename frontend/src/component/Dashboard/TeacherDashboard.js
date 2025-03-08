import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Container, TextField, Button, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AdminDashboard from './components/Dashboard/AdminDashboard';
import TeacherDashboard from './components/Dashboard/TeacherDashboard';
import ExamDashboard from './components/Dashboard/ExamDashboard';
import AddQuestion from './components/Questions/AddQuestion';
import ViewQuestions from './components/Questions/ViewQuestions';
import CreatePattern from './components/Patterns/CreatePattern';
import ViewPatterns from './components/Patterns/ViewPatterns';
import GeneratePaper from './components/Papers/GeneratePaper';
import ViewPapers from './components/Papers/ViewPapers';

const CreatePattern = () => {
    const [patternName, setPatternName] = useState('');
    const [modules, setModules] = useState('');
    const [questionConfig, setQuestionConfig] = useState([]);
    const [subQuestions, setSubQuestions] = useState('');
    const [totalMarks, setTotalMarks] = useState('');
    
    const handleAddQuestionType = () => {
        setQuestionConfig([...questionConfig, { type: '', count: '' }]);
    };

    const handleSavePattern = () => {
        console.log("Saving pattern:", { patternName, modules, questionConfig, subQuestions, totalMarks });
    };

    return (
        <Container>
            <h2>Create Question Paper Pattern</h2>
            <TextField label="Pattern Name" fullWidth margin="normal" value={patternName} onChange={(e) => setPatternName(e.target.value)} />
            <TextField label="Modules" fullWidth margin="normal" value={modules} onChange={(e) => setModules(e.target.value)} />
            {questionConfig.map((qc, index) => (
                <div key={index}>
                    <TextField label="Question Type" fullWidth margin="normal" value={qc.type} onChange={(e) => {
                        const newConfig = [...questionConfig];
                        newConfig[index].type = e.target.value;
                        setQuestionConfig(newConfig);
                    }} />
                    <TextField label="Number of Questions" type="number" fullWidth margin="normal" value={qc.count} onChange={(e) => {
                        const newConfig = [...questionConfig];
                        newConfig[index].count = e.target.value;
                        setQuestionConfig(newConfig);
                    }} />
                </div>
            ))}
            <Button variant="contained" color="secondary" onClick={handleAddQuestionType}>Add Question Type</Button>
            <TextField label="Sub-Question Structure" fullWidth margin="normal" value={subQuestions} onChange={(e) => setSubQuestions(e.target.value)} />
            <TextField label="Total Marks" type="number" fullWidth margin="normal" value={totalMarks} onChange={(e) => setTotalMarks(e.target.value)} />
            <Button variant="contained" color="primary" onClick={handleSavePattern}>Save Pattern</Button>
        </Container>
    );
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/teacher" element={<TeacherDashboard />} />
                <Route path="/exam" element={<ExamDashboard />} />
                <Route path="/add-question" element={<AddQuestion />} />
                <Route path="/view-questions" element={<ViewQuestions />} />
                <Route path="/create-pattern" element={<CreatePattern />} />
                <Route path="/view-patterns" element={<ViewPatterns />} />
                <Route path="/generate-paper" element={<GeneratePaper />} />
                <Route path="/view-papers" element={<ViewPapers />} />
            </Routes>
        </Router>
    );
};

export default App;