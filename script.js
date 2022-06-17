$(onReady)

function onReady(){
    console.log('jq loaded');
    $('#submit-button').on('click',handleAddClick)
    $('#delete-button').on('click',handleDeleteClick)


}

function