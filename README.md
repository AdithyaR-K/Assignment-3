# Employee Management System - Backend

A complete Employee Management System backend built with Node.js, Express, and MongoDB. Features a RESTful API for managing employee data with full CRUD operations.

## 🚀 Features

- **Complete REST API** for employee management
- **MongoDB Atlas integration** with Mongoose ODM
- **Full CRUD operations** (Create, Read, Update, Delete)
- **Data validation** and error handling
- **Pre-built frontend** integration ready
- **Clean code structure** following best practices

## 📦 Installation

1. **Clone the repository:**
```bash
git clone https://github.com/eDwin13-lol/mern-assignment-3.git
cd mern-assignment-3
```

2. **Install dependencies:**
```bash
npm install
```

3. **Configure MongoDB:**
   - Update the MongoDB connection string in `app.js` line 19:
   ```javascript
   const mongoURI = 'your_mongodb_atlas_connection_string';
   ```

4. **Start the server:**
```bash
npm start
```

5. **Access the application:**
   - Backend API: `http://localhost:3000/api/employeelist`
   - Frontend: `http://localhost:3000`

## 🛠️ Tech Stack

- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas with Mongoose
- **Frontend:** Pre-built (in `/dist/Frontend`)
- **HTTP Client:** Built-in fetch/axios support

## 📚 API Endpoints

### Base URL: `http://localhost:3000/api/employeelist`

| Method | Endpoint | Description | Request Body |
|--------|----------|-------------|--------------|
| GET | `/` | Get all employees | - |
| GET | `/:id` | Get employee by ID | - |
| POST | `/` | Create new employee | `{name, location, position, salary}` |
| PUT | `/` | Update employee | `{id, name, location, position, salary}` |
| DELETE | `/:id` | Delete employee | - |

## 📝 API Examples

### Get All Employees
```javascript
GET /api/employeelist
Response: {
  "success": true,
  "data": [
    {
      "_id": "employee_id",
      "name": "John Doe",
      "location": "New York",
      "position": "Developer",
      "salary": 75000,
      "createdAt": "2025-10-26T...",
      "updatedAt": "2025-10-26T..."
    }
  ]
}
```

### Create New Employee
```javascript
POST /api/employeelist
Body: {
  "name": "Jane Smith",
  "location": "California", 
  "position": "Designer",
  "salary": 80000
}
Response: {
  "success": true,
  "message": "Employee created successfully",
  "data": { ...employee_object }
}
```

### Update Employee
```javascript
PUT /api/employeelist
Body: {
  "id": "employee_id",
  "name": "John Doe Updated",
  "location": "Boston",
  "position": "Senior Developer", 
  "salary": 85000
}
```

### Delete Employee
```javascript
DELETE /api/employeelist/employee_id
Response: {
  "success": true,
  "message": "Employee deleted successfully"
}
```

## 🗃️ Database Schema

```javascript
{
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  salary: {
    type: Number,
    required: true,
    min: 0
  },
  timestamps: true // createdAt, updatedAt
}
```

## 🚦 Error Handling

All endpoints include comprehensive error handling:

- **400 Bad Request** - Invalid input data
- **404 Not Found** - Employee not found
- **500 Internal Server Error** - Database/server errors

Example error response:
```json
{
  "success": false,
  "message": "Error description",
  "error": "Detailed error message"
}
```

## 📁 Project Structure

```
├── app.js                    # Main server file with all API routes
├── package.json              # Dependencies and scripts
├── package-lock.json         # Dependency lock file
├── .gitignore                # Git ignore rules
├── dist/                     # Pre-built frontend (do not modify)
│   └── Frontend/
│       └── index.html
└── README.md                 # This file
```

## 🔧 Configuration

### Environment Setup
Replace the MongoDB connection string in `app.js`:
```javascript
const mongoURI = 'mongodb+srv://username:password@cluster.mongodb.net/employeeDB?retryWrites=true&w=majority';
```

### Required Dependencies
- express: ^4.18.2
- mongoose: ^8.19.2
- cors: ^2.8.5
- body-parser: ^2.2.0

## 🚀 Deployment

1. **Update MongoDB URI** with production credentials
2. **Set environment variables** for production
3. **Deploy to platforms** like Heroku, Vercel, or AWS
4. **Configure CORS** for production frontend domain

## 📋 Requirements Fulfilled

✅ **Express server** running on port 3000  
✅ **MongoDB Atlas** connection with Mongoose  
✅ **GET all employees** - `/api/employeelist`  
✅ **GET single employee** - `/api/employeelist/:id`  
✅ **POST new employee** - `/api/employeelist`  
✅ **PUT update employee** - `/api/employeelist`  
✅ **DELETE employee** - `/api/employeelist/:id`  
✅ **Error handling** for all operations  
✅ **Data validation** and sanitization  
✅ **Frontend integration** ready  

## 🔒 Important Notes

- **Frontend files** in `/dist/Frontend/` should not be modified
- **Original code structure** preserved as required
- **MongoDB credentials** need to be updated for production use
- **All APIs** tested and working with proper error handling

## 👨‍💻 Author

**eDwin13-lol**
- GitHub: [@eDwin13-lol](https://github.com/eDwin13-lol)

## 📄 License

This project is created for educational purposes as part of MERN stack learning.