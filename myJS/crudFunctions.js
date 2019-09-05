//------------------------------ADD FUNCTIONS (OOP INFECT ALL TABLES)-----------------------------//

$(document).ready(function() {
  var trainerindex = "";
  var courindex = "";
  var studentindex = "";
  var assignmentindex = "";

  $("#course-form").submit(function(e) {
    e.preventDefault();
    var courseId = courses[courses.length - 1].Id + 1;
    var courseTitle = $("#course-title").val();
    var courseType = $("#course-type").val();
    var courseStream = $("#course-stream").val();
    var startDate = $("#start-date").val();
    var endDate = $("#end-date").val();

    courses[courses.length] = new Course(
      courseId,
      courseTitle,
      courseStream,
      courseType,
      new Date(startDate),
      new Date(endDate)
    );

    UpdateAllData();

    $("#course-title").val("");
    $("#course-type").val("");
    $("#course-stream").val("");
    $("#start-date").val("");
    $("#end-date").val("");
    alert("Course successfully created!");
  });

  //--------------------------------------------------------------------------------//
  $("#assignment-form").submit(function(e) {
    e.preventDefault();

    var assignTitle = $("#assignment-title").val();
    var assignDescription = $("#assignment-description").val();
    var assignOralMark = $("#assing-oralmark").val();
    var assignTotalMark = $("#assing-totalmark").val();
    var submitDate = $("#submit-date").val();
    var assignCourse = $("#assignselectcourse").val();
    var assignID = assignments[assignments.length - 1].Id + 1;

    var index = courses.findIndex(x => x.Id == assignCourse);

    tempassignment = new Assignment(
      assignTitle,
      assignDescription,
      new Date(submitDate),
      assignOralMark,
      assignTotalMark,
      assignID
    );

    tempassignment.Course = courses[index];
    courses[index].Assignments.push(tempassignment);

    for (var i = 0; i < courses[index].Students.length; i++) {
      tempassignment.Students.push(courses[index].Students[i]);
      courses[index].Students[i].Assignments.push(tempassignment);
    }
    assignments.push(tempassignment);

    UpdateAllData();

    $("#assignment-title").val("");
    $("#assignment-description").val("");
    $("#assing-oralmark").val("");
    $("#assing-totalmark").val("");
    $("#submit-date").val("");
    $("#assignselectcourse").val("");
    alert("Assignment successfully created!");
  });

  //-------------------------------------------------------------------------------------------//

  $("#trainer-form").submit(function(e) {
    e.preventDefault();

    var trainerFirst = $("#trainer-fname").val();
    var trainerLast = $("#trainer-lname").val();
    var trainerSubject = $("#trainer-subject").val();
    var trainerCourse = $("#trainerselectcourse").val();

    var index = courses.findIndex(x => x.Id == trainerCourse);
    //console.log(index);

    var trainerID = trainers[trainers.length - 1].Id + 1;
    temptrainer = new Trainer(
      trainerFirst,
      trainerLast,
      trainerSubject,
      trainerID
    );
    temptrainer.Course = courses[index];
    trainers.push(temptrainer);

    courses[index].Trainers.push(temptrainer);

    UpdateAllData();

    $("#trainer-fname").val("");
    $("#trainer-lname").val("");
    $("#trainer-subject").val("");
    $("#trainerselectcourse").val("");
    alert("Trainer successfully Created!");
  });

  //----------------------------------------------------------------------------------------//

  $("#student-form").submit(function(e) {
    e.preventDefault();
    var studentID = students[students.length - 1].Id + 1;
    var studentFirst = $("#student-fname").val();
    var studentLast = $("#student-lname").val();
    var studentBirth = $("#birthdate").val();
    var studentTuition = $("#student-fees").val();
    var studentCourse = $("#studentselectcourse").val();
    //console.log(studentID);
    var index = courses.findIndex(x => x.Id == studentCourse);

    tempstudent = new Student(
      studentID,
      studentFirst,
      studentLast,
      new Date(studentBirth),
      studentTuition
    );

    courses[index].Students.push(tempstudent);
    tempstudent.Courses.push(courses[index]);

    for (var i = 0; i < courses[index].Assignments.length; i++) {
      tempstudent.Assignments.push(courses[index].Assignments[i]);
      courses[index].Assignments[i].Students.push(tempstudent);
    }
    students.push(tempstudent);

    UpdateAllData();

    $("#student-id").val("");
    $("#student-fname").val("");
    $("#student-lname").val("");
    $("#birthdate").val("");
    $("#student-fees").val("");
    $("#studentselectcourse").val("");
    alert("Student Successfully Created!");
  });

  //========================================================================================================//
  //-------------------------------------------------------------------------------------------------------//
  //-------------- EDIT FUNCTIONS ------------------------------------------------------------------------//

  $(document).on("click", "input.traineredit", function(e) {
    var $row = $(this).closest("tr"); // Finds the closest row <tr>
    var rowIndex = $(this)
      .closest("td")
      .parent()[0].sectionRowIndex;
    trainerindex = rowIndex;

    $tds = $row.find("td"); // Finds all children <td> elements

    $("#trainer-fname2").val($tds[0].innerHTML);
    $("#trainer-lname2").val($tds[1].innerHTML);
    $("#trainer-subject2").val($tds[2].innerHTML);
    $("#trainerselectcourse2").val($tds[3].innerHTML);

    var courindex = courses.findIndex(
      x => x.Id == trainers[trainerindex].Course.Id
    );
    document.getElementById("trainerselectcourse2").selectedIndex =
      courindex + 1;
  });

  $("#trainer-form2").submit(function(e) {
    e.preventDefault();

    trainers[trainerindex].FirstName = $("#trainer-fname2").val();
    trainers[trainerindex].LastName = $("#trainer-lname2").val();
    trainers[trainerindex].Subject = $("#trainer-subject2").val();

    var courseindex = courses.findIndex(
      x => x.Id == $("#trainerselectcourse2").val()
    );
    var trainerId = trainers[trainerindex].Id;

    if (!courses[courseindex].Trainers.some(tr => tr.Id === trainerId)) {
      AddTrainersToCourse(trainers[trainerindex], courses[courseindex]);
    }

    UpdateAllData();
    alert("Trainer successfully Updated!");
  });

  //-------------------------------------------------------------------------------------------------//

  $(document).on("click", "input.studentedit", function() {
    var $row = $(this).closest("tr"); // Finds the closest row <tr>
    var rowIndex = $(this)
      .closest("td")
      .parent()[0].sectionRowIndex;
    studentindex = rowIndex;
    $tds = $row.find("td"); // Finds all children <td> elements

    $("#student-fname2").val($tds[1].innerHTML);
    $("#student-lname2").val($tds[2].innerHTML);
    $("#student-fees2").val($tds[4].innerHTML);
    $("#studentselectcourse2").val($tds[5].innerHTML);

    var date = students[studentindex].BirthDate;
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + date.getMonth()).slice(-2);
    var bday = date.getFullYear() + "-" + month + "-" + day;
    $("#birthdate2").val(bday);

    var courindex = courses.findIndex(
      x => x.Id == students[studentindex].Courses[0].Id
    );
    document.getElementById("studentselectcourse2").selectedIndex =
      courindex + 1;
  });

  $("#student-form2").submit(function(e) {
    e.preventDefault();

    students[studentindex].FirstName = $("#student-fname2").val();
    students[studentindex].LastName = $("#student-lname2").val();
    students[studentindex].BirthDate = new Date($("#birthdate2").val());
    students[studentindex].TuitionFees = $("#student-fees2").val();

    var courseindex = courses.findIndex(
      x => x.Id == $("#studentselectcourse2").val()
    );
    var studentId = students[studentindex].Id;

    if (!courses[courseindex].Students.some(s => s.Id === studentId)) {
      AddStudentToCourse(students[studentindex], courses[courseindex]);
    }

    UpdateAllData();
    alert("Student successfully Updated!");
  });

  //----------------------------------------------------------------------------------------//

  $(document).on("click", "input.courseedit", function() {
    var $row = $(this).closest("tr"); // Finds the closest row <tr>
    var rowIndex = $(this)
      .closest("td")
      .parent()[0].sectionRowIndex;
    courindex = rowIndex;
    $tds = $row.find("td"); // Finds all children <td> elements

    $("#course-title2").val($tds[1].innerHTML);
    //$("#course-type2").val($tds[2].innerHTML);
    // $("#course-stream2").val($tds[3].innerHTML);

    var startdate = courses[courindex].StartDate;
    var sday = ("0" + startdate.getDate()).slice(-2);
    var smonth = ("0" + startdate.getMonth()).slice(-2);
    var sday = startdate.getFullYear() + "-" + smonth + "-" + sday;
    $("#start-date2").val(sday);

    var enddate = courses[courindex].EndDate;
    var eday = ("0" + enddate.getDate()).slice(-2);
    var emonth = ("0" + enddate.getMonth()).slice(-2);
    var eday = enddate.getFullYear() + "-" + emonth + "-" + eday;
    $("#end-date2").val(eday);
  });

  $("#course-form2").submit(function(e) {
    e.preventDefault();

    courses[courindex].Title = $("#course-title2").val();
    courses[courindex].Type = $("#course-type2").val();
    courses[courindex].Stream = $("#course-stream2").val();
    courses[courindex].StartDate = new Date($("#start-date2").val());
    courses[courindex].EndDate = new Date($("#end-date2").val());

    UpdateAllData();
    alert("Course successfully Updated!");
  });

  //-----------------------------------------------------------------------------------------//

  $(document).on("click", "input.assignedit", function() {
    var $row = $(this).closest("tr"); // Finds the closest row <tr>
    var rowIndex = $(this)
      .closest("td")
      .parent()[0].sectionRowIndex;
    assignmentindex = rowIndex;
    $tds = $row.find("td"); // Finds all children <td> elements

    $("#assignment-title2").val($tds[0].innerHTML);
    $("#assignment-description2").val($tds[1].innerHTML);
    $("#assing-oralmark2").val($tds[3].innerHTML);
    $("#assing-totalmark2").val($tds[4].innerHTML);
    $("#assignselectcourse2").val($tds[5].innerHTML);

    var date = assignments[assignmentindex].SubDate;
    var day = ("0" + date.getDate()).slice(-2);
    var month = ("0" + date.getMonth()).slice(-2);
    var sday = date.getFullYear() + "-" + month + "-" + day;
    $("#submit-date2").val(sday);

    var courindex = courses.findIndex(
      x => x.Id == assignments[assignmentindex].Course.Id
    );
    document.getElementById("assignselectcourse2").selectedIndex =
      courindex + 1;
  });

  $("#assignment-form2").submit(function(e) {
    e.preventDefault();

    assignments[assignmentindex].Title = $("#assignment-title2").val();
    assignments[assignmentindex].Description = $(
      "#assignment-description2"
    ).val();
    assignments[assignmentindex].OralMark = $("#assing-oralmark2").val();
    assignments[assignmentindex].TotalMark = $("#assing-totalmark2").val();
    assignments[assignmentindex].SubDate = new Date($("#submit-date2").val());

    var courseindex = courses.findIndex(
      x => x.Id == $("#assignselectcourse2").val()
    );
    var assignId = assignments[assignmentindex].Id;

    if (!courses[courseindex].Assignments.some(ass => ass.Id === assignId)) {
      AddAssignmentsToCourse(
        assignments[assignmentindex],
        courses[courseindex]
      );

      for (var student of courses[courseindex].Students) {
        student.Assignments.push(assignments[assignmentindex]);
      }
    }

    UpdateAllData();
    alert("Assignment successfully Updated!");
  });

  //--------------------------------------------------------------------------------------------------//
  //==================================================================================================//
  //---------------------------DELETE FUNCTIONS -----------------------------------------------------//

  $(document).on("click", "input.trainerdelete", function() {
    var rowIndex = $(this)
      .closest("td")
      .parent()[0].sectionRowIndex;
    trainerindex = rowIndex;
    var trainerID = trainers[trainerindex].Id;
    var delcourse = courses.findIndex(
      x => x.Id === trainers[trainerindex].Course.Id
    );

    trainers.splice(trainerindex, 1);
    courses[delcourse].Trainers.splice(item => item.Id === trainerID, 1);

    UpdateAllData();
  });

  //------------------------------------------------------------------------------------------------------------//

  $(document).on("click", "input.coursedelete", function() {
    var rowIndex = $(this)
      .closest("td")
      .parent()[0].sectionRowIndex;
    courseindex = rowIndex;
    var courseID = courses[courseindex].Id;

    for (var trainer of trainers) {
      if (trainer.Course.Id === courseID) {
        trainer.Course.Title = "";
        trainer.Course.Type = "";
        trainer.Course.Stream = "";
      }
    }

    for (var student of students) {
      if (student.Courses.some(cour => cour.Id === courseID)) {
        var index = student.Courses.findIndex(x => x.Id === courseID);
        student.Courses.splice(student.Courses[index], 1);
      }
    }

    for (var assign of assignments) {
      if (assign.Course.Id === courseID) {
        assign.Course.Title = "";
        assign.Course.Type = "";
        assign.Course.Stream = "";
      }
    }

    courses.splice(courseindex, 1);
    UpdateAllData();
  });

  //--------------------------------------------------------------------------------------------------------//

  $(document).on("click", "input.assigndelete", function() {
    var rowIndex = $(this)
      .closest("td")
      .parent()[0].sectionRowIndex;
    assignindex = rowIndex;
    var assignID = assignments[assignindex].Id;

    for (var student of students) {
      if (student.Assignments.some(ass => ass.Id === assignID)) {
        var index = student.Assignments.findIndex(x => x.Id === assignID);
        student.Assignments.splice(student.Assignments[index], 1);
      }
    }

    for (var course of courses) {
      if (course.Assignments.some(ass => ass.Id === assignID)) {
        var indexx = course.Assignments.findIndex(x => x.Id === assignID);
        course.Assignments.splice(course.Assignments[indexx], 1);
      }
    }

    assignments.splice(assignindex, 1);
    UpdateAllData();
  });
  //------------------------------------------------------------------------------------------------------//

  $(document).on("click", "input.studentdelete", function() {
    var rowIndex = $(this)
      .closest("td")
      .parent()[0].sectionRowIndex;
    studentindex = rowIndex;
    var studentID = students[studentindex].Id;

    for (var course of courses) {
      if (course.Students.some(st => st.Id === studentID)) {
        var indexx = course.Students.findIndex(x => x.Id === studentID);
        course.Students.splice(course.Students[indexx], 1);
      }
    }

    for (var assign of assignments) {
      if (assign.Students.some(st => st.Id === studentID)) {
        var indexx = assign.Students.findIndex(x => x.Id === studentID);
        assign.Students.splice(assign.Students[indexx], 1);
      }
    }

    students.splice(studentindex, 1);
    UpdateAllData();
  });
  //------------------------------------------------------------------------------------------------------//

  //=====================  END OF DELETE FUNCTIONS ======================================================//

  //============================================================================================//

  // Acordion Function for correct working
  jQuery("a").click(function(e) {
    jQuery(".collapse").collapse("hide");
  });
});
