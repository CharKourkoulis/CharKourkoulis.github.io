function Course(id, title, stream, type, startDate, endDate) {
  this.Id = id;
  this.Title = title;
  this.Stream = stream;
  this.Type = type;
  this.StartDate = startDate;
  this.EndDate = endDate;

  this.Trainers = [];
  this.Students = [];
  this.Assignments = [];
}

function Trainer(firstname, lastname, subject, id) {
  this.FirstName = firstname;
  this.LastName = lastname;
  this.Subject = subject;
  this.Id = id;

  this.Course;
}

function Assignment(title, description, subdate, oralmark, totalmark, id) {
  this.Title = title;
  this.Description = description;
  this.SubDate = subdate;
  this.OralMark = oralmark;
  this.TotalMark = totalmark;
  this.Id = id;

  this.Course;
  this.Students = [];
}

function Student(id, firstname, lastname, birthdate, tuitionfees) {
  this.Id = id;
  this.FirstName = firstname;
  this.LastName = lastname;
  this.BirthDate = birthdate;
  this.TuitionFees = tuitionfees;

  this.Assignments = [];
  this.Courses = [];
}

function AddTrainersToCourse(trainer, course) {
  course.Trainers.push(trainer);
  trainer.Course = course;
}

function AddAssignmentsToCourse(assignment, course) {
  course.Assignments.push(assignment);
  assignment.Course = course;
}

function AddStudentToCourse(student, course) {
  course.Students.push(student);
  student.Courses.push(course);

  for (let index = 0; index < course.Assignments.length; index++) {
    student.Assignments.push(course.Assignments[index]);
    course.Assignments[index].Students.push(student);
  }
}

var courses = [];
courses[0] = new Course(0,"CB-8","part time","c#",new Date(2019, 5, 16),new Date(2019, 9, 16));
courses[1] = new Course(1,"CB-8","full time","c#",new Date(2019, 10, 20),new Date(2020, 05, 07));
courses[2] = new Course(2,"jB-8","part time","java",new Date(2019, 9, 16),new Date(2020, 02, 11));
courses[3] = new Course(3,"jB-8","full time","java",new Date(2019, 9, 16),new Date(2020, 04, 08));

var trainers = [];
trainers[0] = new Trainer("Hector", "Gkatsos", "CSharp lesson", 0);
trainers[1] = new Trainer("George", "Pasparakis", "Java lesson", 1);
trainers[2] = new Trainer("Argyris", "Pagidas", "Python lesson", 2);
trainers[3] = new Trainer("Kwstas", "Mpoutsioulis", "SQL lesson", 3);

var assignments = [];
assignments[0] = new Assignment("Ergasia 1", "Atomiki",new Date(2019, 10, 4),40,60, 0);
assignments[1] = new Assignment("Ergasia 2","Omadiki",new Date(2019, 8, 17),50,50,1);
assignments[2] = new Assignment("Ergasia 3","Atomiki",new Date(2020, 1, 11),20,80,2);
assignments[3] = new Assignment("Ergasia 4","Omadiki",new Date(2020, 3, 9),30,70,3);
assignments[4] = new Assignment("Ergasia 5","Atomiki",new Date(2019, 11, 24),40,60,4);
assignments[5] = new Assignment("Ergasia 6", "Omadiki",new Date(2019, 9, 17),50,50,5);
assignments[6] = new Assignment("Ergasia 7","Atomiki",new Date(2020, 2, 18),20,80,6);
assignments[7] = new Assignment("Ergasia 8","Omadiki",new Date(2020, 4, 9),30,70,7);

var students = [];
students[0] = new Student( 0,"Babis","Kourkoulis",new Date(1985, 2, 16),2500);
students[1] = new Student(1, "Nikos", "Korobos", new Date(1987, 11, 12), 1500);
students[2] = new Student(2, "Giannis", "Koukos", new Date(1992, 7, 14), 2500);
students[3] = new Student(3, "Kostas", "Kalantas", new Date(1994, 6, 9), 2500);
students[4] = new Student(4, "Nikos", "Xylouris", new Date(1988, 11, 19), 1500);
students[5] = new Student(5,"Menelaos","Trikoupis",new Date(1993, 5, 5),2700);
students[6] = new Student(6,"Iakovos","Karamanos",new Date(1995, 7, 7),2800);
students[7] = new Student(7,"Iolaos","Hrakleidis",new Date(1983, 6, 19),3500);
students[8] = new Student(8,"Zina","Papadopoulou", new Date(2001, 2, 23),2200);
students[9] = new Student(9,"Euterpi","Nikolaou",new Date(1999, 3, 14),2900);
students[10] = new Student(10,"Minos","Spiropoulos",new Date(1997, 10, 22),4500);

AddTrainersToCourse(trainers[0], courses[0]);
AddTrainersToCourse(trainers[1], courses[1]);
AddTrainersToCourse(trainers[2], courses[2]);
AddTrainersToCourse(trainers[3], courses[3]);

AddAssignmentsToCourse(assignments[0], courses[0]);
AddAssignmentsToCourse(assignments[1], courses[1]);
AddAssignmentsToCourse(assignments[2], courses[2]);
AddAssignmentsToCourse(assignments[3], courses[3]);
AddAssignmentsToCourse(assignments[4], courses[0]);
AddAssignmentsToCourse(assignments[5], courses[1]);
AddAssignmentsToCourse(assignments[6], courses[2]);
AddAssignmentsToCourse(assignments[7], courses[3]);

AddStudentToCourse(students[0], courses[0]);
AddStudentToCourse(students[0], courses[3]);
AddStudentToCourse(students[1], courses[0]);
AddStudentToCourse(students[2], courses[1]);
AddStudentToCourse(students[3], courses[1]);
AddStudentToCourse(students[4], courses[2]);
AddStudentToCourse(students[5], courses[2]);
AddStudentToCourse(students[6], courses[3]);
AddStudentToCourse(students[7], courses[3]);
AddStudentToCourse(students[8], courses[0]);
AddStudentToCourse(students[9], courses[1]);
AddStudentToCourse(students[10], courses[3]);

//=========================================================================================================================================//
//=============================================  END OF OBJECTS CREATION AND DATA INSERT ==================================================//
