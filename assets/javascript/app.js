var employee = {
  name: "Paul",
  role: "Engineer",
  startDate: "01/01/18",
  rate: 15000
};
var monthsWorked,
  totalBilled,
  now = moment().date();

$("#submit").on("click", function() {
  monthsWorked = now - employee.startDate;
  console.log(monthsWorked);
  var th = $("<th>");
  var tdName = $("<td>" + eomployee.name + "</td>");
  var tdRole = $("<td>" + employee.role + "</td>");
  var tdStart = $("<td>" + employee.startDate + "</td>");
  var tdMonths = $("<td>" + monthsWorked + "</td>");
  var tdRate = $("<td>" + employee.rate + "</td>");
  var tdBilled = $("<td>" + monthsWorked * employee.rate + "</td>");
});

<tr>
  <th scope="row">1</th>
  <td>Paul</td> employeeName
  <td>Engineer</td> role
  <td>01/01/18</td> startDate
  <td>4</td> months Worked (now - start date)
  <td>$15,000</td> rate
  <td>$60,000</td> titalBilled
</tr>;
