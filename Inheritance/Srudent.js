class Student{
    constructor(rollno,name){
        this.rollno = rollno;
        this.name = name;
    }

    getData(){
        console.log(`Roll No: ${this.rollno}`);
        console.log(`Name: ${this.name}`);    
    }
}

class Person extends Student{
    constructor(rollno,name,marks,attendance){
        super(rollno,name);
        this.marks = marks;
        this.attendance = attendance;
    }

    getDetail(){
        super.getData();
        console.log(`Marks: ${this.marks}`);
        console.log(`Attendance: ${this.attendance}`);
        console.log("");
            
    }
}

const students = [new Person('1','Soaib','90','80'),
            new Person('2','Neel','70','60'),
            new Person('3','Mohammad','100','90'),
            new Person('4','Daksh','85','75'),
]

students.forEach(emp=>emp.getDetail());