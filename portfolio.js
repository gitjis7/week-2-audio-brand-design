$(document).ready(function(){
    $("#signupform").validate({
        rules:{
            names:{
                required:true,
                minlength:4
            }
        }
    })
})
