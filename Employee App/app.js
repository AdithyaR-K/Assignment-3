// Task1: initiate app and run server at 3000
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

const path=require('path');
app.use(express.static(path.join(__dirname+'/dist/FrontEnd')));
// Task2: create mongoDB connection
const mongoURI = 'mongodb+srv://username:password@cluster.mongodb.net/employeeDB?retryWrites=true&w=majority';

mongoose.connect(mongoURI)
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error('MongoDB connection error:', error));

// Employee Schema
const employeeSchema = new mongoose.Schema({
    name: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    position: { type: String, required: true, trim: true },
    salary: { type: Number, required: true, min: 0 }
}, { timestamps: true });

const Employee = mongoose.model('Employee', employeeSchema); 


//Task 2 : write api with error handling and appropriate api mentioned in the TODO below







//TODO: get data from db  using api '/api/employeelist'
app.get('/api/employeelist', async (req, res) => {
    try {
        const employees = await Employee.find({});
        res.status(200).json({ success: true, data: employees });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching employees', error: error.message });
    }
});




//TODO: get single data from db  using api '/api/employeelist/:id'
app.get('/api/employeelist/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid employee ID' });
        }
        const employee = await Employee.findById(id);
        if (!employee) {
            return res.status(404).json({ success: false, message: 'Employee not found' });
        }
        res.status(200).json({ success: true, data: employee });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error fetching employee', error: error.message });
    }
});





//TODO: send data from db using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.post('/api/employeelist', async (req, res) => {
    try {
        const { name, location, position, salary } = req.body;
        if (!name || !location || !position || !salary) {
            return res.status(400).json({ success: false, message: 'All fields required: name, location, position, salary' });
        }
        const newEmployee = new Employee({ name: name.trim(), location: location.trim(), position: position.trim(), salary: Number(salary) });
        const savedEmployee = await newEmployee.save();
        res.status(201).json({ success: true, message: 'Employee created successfully', data: savedEmployee });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error creating employee', error: error.message });
    }
});






//TODO: delete a employee data from db by using api '/api/employeelist/:id'
app.delete('/api/employeelist/:id', async (req, res) => {
    try {
        const { id } = req.params;
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid employee ID' });
        }
        const deletedEmployee = await Employee.findByIdAndDelete(id);
        if (!deletedEmployee) {
            return res.status(404).json({ success: false, message: 'Employee not found' });
        }
        res.status(200).json({ success: true, message: 'Employee deleted successfully', data: deletedEmployee });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error deleting employee', error: error.message });
    }
});





//TODO: Update  a employee data from db by using api '/api/employeelist'
//Request body format:{name:'',location:'',position:'',salary:''}
app.put('/api/employeelist', async (req, res) => {
    try {
        const { id, name, location, position, salary } = req.body;
        if (!id || !name || !location || !position || !salary) {
            return res.status(400).json({ success: false, message: 'All fields required: id, name, location, position, salary' });
        }
        if (!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(400).json({ success: false, message: 'Invalid employee ID' });
        }
        const updatedEmployee = await Employee.findByIdAndUpdate(id, { name: name.trim(), location: location.trim(), position: position.trim(), salary: Number(salary) }, { new: true, runValidators: true });
        if (!updatedEmployee) {
            return res.status(404).json({ success: false, message: 'Employee not found' });
        }
        res.status(200).json({ success: true, message: 'Employee updated successfully', data: updatedEmployee });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Error updating employee', error: error.message });
    }
});


//! dont delete this code. it connects the front end file.
app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/Frontend/index.html'));
});

// Start server
app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
    console.log('Employee Management System Backend Ready!');
});



