$(document).ready(onReady);

function onReady(){
    $(".add-person").click(handleAddClick);
    // $("#monthly-cost").click(handleAddClick)
    $(".delete-person").click(handleDeleteClick);
    clearInputs()
};

let monthlyCost = 0

function handleAddClick(){
    let firstName = $("#first-name").val();
    let lastName = $("#last-name").val();
    let eID = $("#eID").val();
    let title = $("#title").val();
    let salary = $("#salary").val();
    let employeeInfo = "<tr><td><input type='checkbox' name='selector'></td><td>" + firstName + "</td><td>" + lastName + "</td><td>" + eID + "</td><td>" + title + "</td><td>" + salary + "</td></tr>"
    $("table tbody").append(employeeInfo);
    clearInputs()

    $('#monthly-cost').empty().append(monthlyCost);
};

function handleDeleteClick(){
    $("table tbody").find('input[name="selector"]').each(function(){
    if($(this).is(":checked")){
    $(this).parents("tr").remove();
}
});
};

function clearInputs(){
    $("#first-name").val('');
    $("#last-name").val('');
    $("#eID").val('');
    $("#title").val('');
    $("#salary").val('');
}