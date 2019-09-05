//-------------------EDIT / DELETE BUTTONS GENERATE ----------------------------------//
//------------------------------------------------------------------------------------//
function GenerateButtons() {
  var tr = $("table").find("tbody>tr");

  for (var i = 0; i < tr.length; i++) {
    var td = document.createElement("td");

    var btUpdate = document.createElement("input");

    btUpdate.setAttribute("type", "button"); // SET ATTRIBUTES.
    btUpdate.setAttribute("value", "Edit");
    btUpdate.setAttribute("class", "edit");
    btUpdate.setAttribute("data-toggle", "tooltip");
    btUpdate.setAttribute("style", "background-color:#44CCEB;");
    td.appendChild(btUpdate);

    // *** DELETE.
    //td = document.createElement('th');
    tr[i].appendChild(td);
    var btDelete = document.createElement("input");
    btDelete.setAttribute("type", "button"); // SET INPUT ATTRIBUTE.
    btDelete.setAttribute("value", "Delete");
    btDelete.setAttribute("data-toggle", "tooltip");
    btDelete.setAttribute("class", "delete");
    btDelete.setAttribute("style", "background-color:#ED5650;");

    td.appendChild(btDelete);

    tr[i].appendChild(td);
  }

  var coursestr = $("#coursestable .edit");
  var coursesdel = $("#coursestable .delete");
  for (var j = 0; j < coursestr.length; j++) {
    coursestr.attr("data-toggle", "modal");
    coursestr.attr("data-target", "#modal12");
    coursesdel.attr("class", "coursedelete");
    coursestr.attr("class", "courseedit");
  }

  var assigntr = $("#assingmentstable .edit");
  var assigndel = $("#assingmentstable .delete");
  for (var j = 0; j < assigntr.length; j++) {
    assigntr.attr("data-toggle", "modal");
    assigntr.attr("data-target", "#modal42");
    assigndel.attr("class", "assigndelete");
    assigntr.attr("class", "assignedit");
  }

  var trainertr = $("#trainerstable .edit");
  var trainerdel = $("#trainerstable .delete");
  for (var j = 0; j < trainertr.length; j++) {
    trainertr.attr("data-toggle", "modal");
    trainertr.attr("data-target", "#modal32");
    trainerdel.attr("class", "trainerdelete");
    trainertr.attr("class", "traineredit");
  }

  var studenttr = $("#studentstable .edit");
  var studentdel = $("#studentstable .delete");

  for (var j = 0; j < studenttr.length; j++) {
    studenttr.attr("data-toggle", "modal");
    studenttr.attr("data-target", "#modal22");
    studentdel.attr("class", "studentdelete");
    studenttr.attr("class", "studentedit");
  }
}

GenerateButtons();

//------------------------------------------------------------------------------------------------------------------//
