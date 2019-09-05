function UpdateAllData() {
  UpdateCoursesTable(courses, "COURSES");
  document.getElementById("coursestable").innerHTML = text;

  UpdateAssignmentsTable(assignments, "Assignments");
  document.getElementById("assingmentstable").innerHTML = text;

  UpdateStudentsTable(students, "Students");
  document.getElementById("studentstable").innerHTML = text;

  UpdateTrainersTable(trainers, "Trainers");
  document.getElementById("trainerstable").innerHTML = text;

  GenerateButtons();
  DropMenus();
}
