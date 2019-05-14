$(document).ready(function() {
    var myValidateRules = {
        rules:{
            phone:{
                required: true,
                minlength: 11
            }
        }
    }

    for(var i = 1; i <= 20; i++) {
        $("#orderform"+i).validate(myValidateRules);
    }
    
    $.validator.messages.required = "Заполните поле!";
    
    $(".phoneform").inputmask("+7(999)999-99-99", {
        "clearIncomplete": true
    });//маска
    
});