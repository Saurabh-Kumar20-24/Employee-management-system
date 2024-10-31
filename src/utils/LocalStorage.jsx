//we can write this prompt to get some data from chatgpt {create a json data of 5 employees, each employee contains id and email and password make sure to give them password 123,do one more thing create another json data of 1 admin with same properties}



const employees = [
  {
    "id": 1,
    "firstName": "Rajesh",
    "email": "e1@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "title": "Complete Project Report",
        "description": "Prepare the monthly project report for team review.",
        "date": "2024-10-30",
        "category": "Reports"
      },
      {
        "active": false,
        "newTask": false,
        "failed": false,
        "title": "Attend Training",
        "description": "Complete mandatory cybersecurity training.",
        "date": "2024-11-02",
        "category": "Training"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "title": "Submit Expense Report",
        "description": "Submit the Q3 travel expenses report.",
        "date": "2024-10-25",
        "category": "Finance"
      }
    ],
    "taskNumbers": {
      "active": 1,
      "newTask": 1,
      "failed": 1,
      "completed": 1
    }
  },
  {
    "id": 2,
    "firstName": "Priya",
    "email": "e2@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "title": "Update Client Records",
        "description": "Update CRM with latest client interactions.",
        "date": "2024-11-01",
        "category": "Client Relations"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "title": "Prepare Sales Presentation",
        "description": "Create slides for next quarter's sales strategies.",
        "date": "2024-10-28",
        "category": "Sales"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "title": "Submit Timesheets",
        "description": "Complete and submit timesheets for October.",
        "date": "2024-10-20",
        "category": "Admin"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "failed": 1,
      "completed": 0
    }
  },
  {
    "id": 3,
    "firstName": "Anita",
    "email": "e3@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "title": "Organize Team Meeting",
        "description": "Schedule and organize the monthly team meeting.",
        "date": "2024-10-30",
        "category": "Meetings"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "title": "Prepare Budget Forecast",
        "description": "Forecast budget requirements for Q1 2025.",
        "date": "2024-11-03",
        "category": "Finance"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "failed": 0,
      "completed": 1
    }
  },
  {
    "id": 4,
    "firstName": "Vikram",
    "email": "e4@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "title": "Client Onboarding",
        "description": "Assist in the onboarding process for new clients.",
        "date": "2024-10-31",
        "category": "Client Relations"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "title": "System Audit",
        "description": "Conduct audit of system settings for compliance.",
        "date": "2024-10-29",
        "category": "Audit"
      },
      {
        "active": false,
        "newTask": false,
        "failed": true,
        "title": "Submit Project Deliverables",
        "description": "Submit all deliverables for the recently completed project.",
        "date": "2024-10-24",
        "category": "Projects"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "failed": 1,
      "completed": 0
    }
  },
  {
    "id": 5,
    "firstName": "Sita",
    "email": "e5@e.com",
    "password": "123",
    "tasks": [
      {
        "active": true,
        "newTask": true,
        "failed": false,
        "title": "Develop Marketing Strategy",
        "description": "Outline marketing strategy for Q1.",
        "date": "2024-11-01",
        "category": "Marketing"
      },
      {
        "active": false,
        "newTask": false,
        "failed": false,
        "title": "Team Building Activity",
        "description": "Plan a team-building event for the department.",
        "date": "2024-10-30",
        "category": "HR"
      },
      {
        "active": true,
        "newTask": false,
        "failed": false,
        "title": "Annual Review Preparation",
        "description": "Prepare for annual performance reviews.",
        "date": "2024-11-05",
        "category": "Performance"
      }
    ],
    "taskNumbers": {
      "active": 2,
      "newTask": 1,
      "failed": 0,
      "completed": 1
    }
  }
];




const admin = [
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
];


export const setLocalStorage = ()=>{
  localStorage.setItem('employees', JSON.stringify(employees))
  localStorage.setItem('admin', JSON.stringify(admin))
}

export const getLocalStorage = ()=>{
   const employees = JSON.parse(localStorage.getItem('employees'))
   const admin= JSON.parse(localStorage.getItem('admin'))

   return {employees,admin}
}
