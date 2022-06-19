$(document).ready(onReady);

function onReady(){
    $(".add-person").click(handleAddClick);
    // $("#monthly-cost").click(handleAddClick)
    $(".delete-person").click(handleDeleteClick);
    clearInputs()
};

let total = 0

function handleAddClick(){
    let firstName = $("#first-name").val();
    let lastName = $("#last-name").val();
    let eID = $("#eID").val();
    let title = $("#title").val();
    let salary = $("#salary").val();
    let employeeInfo = "<tr><td><input type='checkbox' name='selector'></td><td>" + firstName + "</td><td>" + lastName + "</td><td>" + eID + "</td><td>" + title + "</td><td>" + salary + "</td></tr>"
    $("table tbody").append(employeeInfo);
    

    let employees = [];

    const employee = {
        firstName: $("#first-name").val(),
        lastName: $("#last-name").val(),
        eID: $("#eID").val(),
        title: $("#title").val(),
        salary: $("#salary").val()
    }

    employees.push(employee);
    console.log(employees);

    for (let i = 0; i < employees.length; i++) {

        let first = total += Number(employee.salary)
        let complete = Number(first) / 12
        console.log(Number(complete));
        $('#monthly-cost').empty().append(Number(complete));

        if (complete >= 20000) {
            console.log('ruh roh');
            $('#change-red').css('color', 'red');
        }

    }
    clearInputs()
};

function handleDeleteClick(){
    $("table tbody").find('input[name="selector"]').each(function(){
    if($(this).is(":checked")){
    $(this).parents("tr").remove();
};
});
};

function clearInputs(){
    $("#first-name").val('');
    $("#last-name").val('');
    $("#eID").val('');
    $("#title").val('');
    $("#salary").val('');
}
