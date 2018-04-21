var now = moment().format("YYYY/MM/DD");
console.log(now);
var employee = {
  name: "Paul",
  role: "Engineer",
  startDate: Date(2017 - 01 - 01),
  monthsWorked: 12,
  rate: 15000,
  totalBilled: 60000
};

$("#submitForm").on("click", function(event) {
  event.preventDefault();
  var th = $('<th scope="row">');
  var tr = $("<tr>");
  var tdName = $("<td>" + employee.name + "</td>");
  var tdRole = $("<td>" + employee.role + "</td>");
  var tdStart = $("<td>" + employee.startDate + "</td>");
  var tdMonths = $("<td>" + employee.monthsWorked + "</td>");
  var tdRate = $("<td>" + employee.rate + "</td>");
  var tdBilled = $("<td>" + employee.totalBilled + "</td>");

  th.text("1");
  tr.append(tdName);
  tr.append(tdRole);
  tr.append(tdStart);
  tr.append(tdMonths);
  tr.append(tdRate);
  tr.append(tdBilled);
  tr.prepend(th);
  $("#newTable").append(tr);
});
