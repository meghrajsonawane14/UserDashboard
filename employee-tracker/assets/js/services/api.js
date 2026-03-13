const API={
getEmployees:()=>fetch("data/employees.json").then(r=>r.json()),
getAttendance:()=>fetch("data/attendance.json").then(r=>r.json()),
getReports:()=>fetch("data/reports.json").then(r=>r.json())
};

