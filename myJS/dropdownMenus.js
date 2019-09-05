//-----------------------------DROPDOWN MENU GIA TA COURSES STA FORMS----------------------------------------//

function DropMenus() {
  var selectcourse = document.getElementById("selectcourse");
  var trainer_course = document.getElementById("trainer-course");
  var assignment_selectcourse = document.getElementById(
    "assignment-selectcourse"
  );

  var selectcourse2 = document.getElementById("selectcourse2");
  var trainer_course2 = document.getElementById("trainer-course2");
  var assignment_selectcourse2 = document.getElementById(
    "assignment-selectcourse2"
  );

  selectcourse.innerHTML = "";
  trainer_course.innerHTML = "";
  assignment_selectcourse.innerHTML = "";

  selectcourse2.innerHTML = "";
  trainer_course2.innerHTML = "";
  assignment_selectcourse2.innerHTML = "";

  var select = document.createElement("select"); // CREATE AND ADD A DROPDOWN LIST.
  select.setAttribute("id", "studentselectcourse");
  select.innerHTML = '<option value=""></option>';
  for (k = 0; k < courses.length; k++) {
    select.innerHTML =
      select.innerHTML +
      '<option value="' +
      courses[k].Id +
      '">' +
      courses[k].Title +
      " " +
      courses[k].Stream +
      "</option>";
  }
  select.required = true;
  selectcourse.appendChild(select);

  //-----------------------------------------------------------------------------------------------------//

  var selectcs = document.createElement("select"); // CREATE AND ADD A DROPDOWN LIST.
  selectcs.setAttribute("id", "studentselectcourse2");
  selectcs.innerHTML = '<option value=""></option>';
  for (k = 0; k < courses.length; k++) {
    selectcs.innerHTML =
      selectcs.innerHTML +
      '<option value="' +
      courses[k].Id +
      '">' +
      courses[k].Title +
      " " +
      courses[k].Stream +
      "</option>";
  }
  selectcs.required = true;
  selectcourse2.appendChild(selectcs);

  //---------------------------------------------------------------------------------------------------//

  var select12 = document.createElement("select"); // CREATE AND ADD A DROPDOWN LIST.
  select12.setAttribute("id", "trainerselectcourse2");
  select12.innerHTML = '<option value=""></option>';
  for (k = 0; k < courses.length; k++) {
    select12.innerHTML =
      select12.innerHTML +
      '<option value="' +
      courses[k].Id +
      '">' +
      courses[k].Title +
      " " +
      courses[k].Stream +
      "</option>";
  }
  select12.required = true;
  trainer_course2.appendChild(select12);

  //----------------------------------------------------------------------------------------------------//
  var select1 = document.createElement("select"); // CREATE AND ADD A DROPDOWN LIST.
  select1.setAttribute("id", "trainerselectcourse");
  select1.innerHTML = '<option value=""></option>';
  for (k = 0; k < courses.length; k++) {
    select1.innerHTML =
      select1.innerHTML +
      '<option value="' +
      courses[k].Id +
      '">' +
      courses[k].Title +
      " " +
      courses[k].Stream +
      "</option>";
  }
  select1.required = true;
  trainer_course.appendChild(select1);

  //----------------------------------------------------------------------------------------------------//
  var select2 = document.createElement("select"); // CREATE AND ADD A DROPDOWN LIST.
  select2.setAttribute("id", "assignselectcourse");
  select2.innerHTML = '<option value=""></option>';
  for (k = 0; k < courses.length; k++) {
    select2.innerHTML =
      select2.innerHTML +
      '<option value="' +
      courses[k].Id +
      '">' +
      courses[k].Title +
      " " +
      courses[k].Stream +
      "</option>";
  }
  select2.required = true;
  assignment_selectcourse.appendChild(select2);

  //-------------------------------------------------------------------------------------------------------//

  var select21 = document.createElement("select"); // CREATE AND ADD A DROPDOWN LIST.
  select21.setAttribute("id", "assignselectcourse2");
  select21.innerHTML = '<option value=""></option>';
  for (k = 0; k < courses.length; k++) {
    select21.innerHTML =
      select21.innerHTML +
      '<option value="' +
      courses[k].Id +
      '">' +
      courses[k].Title +
      " " +
      courses[k].Stream +
      "</option>";
  }
  select21.required = true;
  assignment_selectcourse2.appendChild(select21);
}

DropMenus();

//--------------------------------------------------------------------------------------------------------------------//
