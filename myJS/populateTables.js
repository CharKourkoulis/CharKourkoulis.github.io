//========================   COURSES TABLE DATA POPULATE ==================================================================================//
function UpdateCoursesTable(table, titlos) {
  var headings = "<thead><tr>";
  var footings = "<tfoot><tr>";
  var data = "";
  var keys = [
    "Id",
    "Title",
    "Stream",
    "Type",
    "Start Date",
    "End Date",
    "Assignments",
    "Trainers",
    "Students",
    "Edit/Delete",
    ""
  ];

  for (var key of keys) {
    headings += "<th>" + key + "</th>";
    footings += "<th>" + key + "</th>";
  }

  headings += "</tr></thead>";
  footings += "</tr></tfoot>";

  text = "<caption>" + titlos + "</caption>";
  text += headings;
  text += "<tbody>";

  var data = "";

  for (var i = 0; i < table.length; i++) {
    data += "<tr>";
    data += "<td>" + table[i].Id + "</td>";
    data += "<td>" + table[i].Title + "</td>";
    data += "<td>" + table[i].Stream + "</td>";
    data += "<td>" + table[i].Type + "</td>";
    data +=
      "<td>" +
      table[i].StartDate.getDate() +
      "-" +
      table[i].StartDate.getMonth() +
      "-" +
      table[i].StartDate.getFullYear();
    +"</td>";
    data +=
      "<td>" +
      table[i].EndDate.getDate() +
      "-" +
      table[i].EndDate.getMonth() +
      "-" +
      table[i].EndDate.getFullYear();
    +"</td>";

    //----------------------------------------------------------------------------------------------------//
    data += "<td> <select>";

    for (let index = 0; index < table[i].Assignments.length; index++) {
      data +=
        "<option value=" +
        table[i].Assignments[index].Id +
        ">" +
        table[i].Assignments[index].Title +
        "</option>";
    }
    data += " </select></td>";

    //----------------------------------------------------------------------------------------------------//
    data += "<td> <select>";

    for (let index = 0; index < table[i].Trainers.length; index++) {
      data +=
        "<option value=" +
        table[i].Trainers[index].Id +
        ">" +
        table[i].Trainers[index].FirstName +
        " " +
        table[i].Trainers[index].LastName +
        "</option>";
    }
    data += " </select></td>";

    //---------------------------------------------------------------------------------------------------//

    data += "<td> <select>";

    for (let index = 0; index < table[i].Students.length; index++) {
      data +=
        "<option value=" +
        table[i].Students[index].Id +
        ">" +
        table[i].Students[index].FirstName +
        " " +
        table[i].Students[index].LastName +
        "</option>";
    }
    data += " </select></td>";

    data += "</tr>";
  }

  text += data;
  text += "</tbody>";
  //text += footings;
}

UpdateCoursesTable(courses, "COURSES");
document.getElementById("coursestable").innerHTML = text;

//================================================  COURSES TABLE POPULATE DATA END !! =================================================//

//================================= ASSIGNMENTS TABLE POPULATE DATA ===============================================================//

function UpdateAssignmentsTable(table, titlos) {
  var headings = "<thead><tr>";
  var footings = "<tfoot><tr>";
  var data = "";
  var keys = [
    "Title",
    "Description",
    "Submission Date",
    "Oral Mark",
    "Total Mark",
    "Course Title",
    "Students to Submit",
    "Edit/Delete",
    ""
  ];

  for (var key of keys) {
    headings += "<th>" + key + "</th>";
    footings += "<th>" + key + "</th>";
  }

  headings += "</tr></thead>";
  footings += "</tr></tfoot>";

  text = "<caption>" + titlos + "</caption>";
  text += headings;
  text += "<tbody>";

  var data = "";

  for (var i = 0; i < table.length; i++) {
    data += "<tr>";
    data += "<td>" + table[i].Title + "</td>";
    data += "<td>" + table[i].Description + "</td>";
    data +=
      "<td>" +
      table[i].SubDate.getDate() +
      "-" +
      table[i].SubDate.getMonth() +
      "-" +
      table[i].SubDate.getFullYear();
    +"</td>";
    data += "<td>" + table[i].OralMark + "</td>";
    data += "<td>" + table[i].TotalMark + "</td>";
    data +=
      "<td>" +
      table[i].Course.Title +
      " " +
      table[i].Course.Type +
      " " +
      table[i].Course.Stream +
      "</td>";

    //---------------------------------------------------------------------------------------------------//

    data += "<td> <select>";

    for (let index = 0; index < table[i].Students.length; index++) {
      data +=
        "<option value=" +
        table[i].Students[index].Id +
        ">" +
        table[i].Students[index].FirstName +
        " " +
        table[i].Students[index].LastName +
        "</option>";
    }
    data += " </select></td>";

    data += "</tr>";
  }

  text += data;
  text += "</tbody>";
  //text += footings;
}

UpdateAssignmentsTable(assignments, "Assignments");
document.getElementById("assingmentstable").innerHTML = text;

//======================================= ASSIGNMENTS TABLE POPULATE DATA END =====================================//

//========================== STUDENTS TABLE POPULATE DATA ==========================================================//

function UpdateStudentsTable(table, titlos) {
  var headings = "<thead><tr>";
  var footings = "<tfoot><tr>";
  var data = "";
  var keys = [
    "Id",
    "First Name",
    "Last Name",
    "Date of Birth",
    "Tuition Fees",
    "Courses",
    "Assignments",
    "Edit/Delete",
    ""
  ];

  for (var key of keys) {
    headings += "<th>" + key + "</th>";
    footings += "<th>" + key + "</th>";
  }

  headings += "</tr></thead>";
  footings += "</tr></tfoot>";

  text = "<caption>" + titlos + "</caption>";
  text += headings;
  text += "<tbody>";

  var data = "";

  for (var i = 0; i < table.length; i++) {
    data += "<tr>";
    data += "<td>" + table[i].Id + "</td>";
    data += "<td>" + table[i].FirstName + "</td>";
    data += "<td>" + table[i].LastName + "</td>";
    data +=
      "<td>" +
      table[i].BirthDate.getDate() +
      "-" +
      table[i].BirthDate.getMonth() +
      "-" +
      table[i].BirthDate.getFullYear() +
      "</td>";
    data += "<td>" + table[i].TuitionFees + "</td>";

    //---------------------------------------------------------------------------------------------------//

    data += "<td> <select>";

    for (let index = 0; index < table[i].Courses.length; index++) {
      data +=
        "<option value=" +
        table[i].Courses[index].Title +
        ">" +
        table[i].Courses[index].Title +
        " " +
        table[i].Courses[index].Type +
        " " +
        table[i].Courses[index].Stream +
        "</option>";
    }
    data += " </select></td>";

    //-----------------------------------------------------------------------------------------------------------------------//

    data += "<td> <select>";

    for (let index = 0; index < table[i].Assignments.length; index++) {
      data +=
        "<option value=" +
        table[i].Assignments[index].Id +
        ">" +
        table[i].Assignments[index].Title +
        "</option>";
    }
    data += " </select></td>";

    //------------------------------------------------------------------------------------------------------------//

    data += "</tr>";
  }

  text += data;
  text += "</tbody>";
  //text += footings;
}

UpdateStudentsTable(students, "Students");
document.getElementById("studentstable").innerHTML = text;

//======================================= STUDENTS TABLE POPULATE DATA END ===============================================//

//======================================= TRAINERS TABLE POPULATE DATA ==================================================//

function UpdateTrainersTable(table, titlos) {
  var headings = "<thead><tr>";
  var footings = "<tfoot><tr>";
  var data = "";
  var keys = [
    "First Name",
    "Last Name",
    "Subject",
    "Course",
    "Edit/Delete",
    ""
  ];

  for (var key of keys) {
    headings += "<th>" + key + "</th>";
    footings += "<th>" + key + "</th>";
  }

  headings += "</tr></thead>";
  footings += "</tr></tfoot>";

  text = "<caption>" + titlos + "</caption>";
  text += headings;
  text += "<tbody>";

  var data = "";

  for (var i = 0; i < table.length; i++) {
    data += "<tr>";
    data += "<td>" + table[i].FirstName + "</td>";
    data += "<td>" + table[i].LastName + "</td>";
    data += "<td>" + table[i].Subject + "</td>";
    data +=
      "<td>" +
      table[i].Course.Title +
      " " +
      table[i].Course.Type +
      " " +
      table[i].Course.Stream +
      "</td>";

    data += "</tr>";
  }

  text += data;
  text += "</tbody>";
  //text += footings;
}

UpdateTrainersTable(trainers, "Trainers");
document.getElementById("trainerstable").innerHTML = text;

//============================================TRAINERS POPULATE DATA END===========================================================//
