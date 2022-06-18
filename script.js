$(document).ready(onReady);

function onReady(){
    $(".add-row").click(handleAddClick);
    $(".delete-row").click(handleDeleteClick);

function handleAddClick(){
        let firstName = $("#first-name").val();
        let lastName = $("#last-name").val();
        let eID = $("#eID").val();
        let title = $("#title").val();
        let salary = $("#salary").val();
        let employeeInfo = "<tr><td><input type='checkbox' name='record'></td><td>" + firstName + "</td><td>" + lastName + "</td><td>" + eID + "</td><td>" + title + "</td><td>" + salary + "</td></tr>"
        $("table tbody").append(employeeInfo);
};

// Find and remove selected table rows
function handleDeleteClick(){
        $("table tbody").find('input[name="record"]').each(function(){
            if($(this).is(":checked")){
                $(this).parents("tr").remove();
            }
        });
    };
};



// function handleAddClick(){
//     console.log('in add');
//     // take the information form the input field
//     $().append($('#first-name').val())
//     $('#ln-slot').append($('#last-name').val())
//     $('#eID-slot').append($('#eID').val())
//     $('#title-slot').append($('#title').val())
//     $('#salary-slot').append($('#salary').val())
// }

