$(document).ready(function () {
    
    $('input.room-select-checkbox').change(function () {
        
        
        var selectedValue = $(this).val();

        
        $('#output1').text(selectedValue);

    });
});