{
    var isValid = false;
    //var curInput = "";
    var inputTouched = false

    function check(id) {
        
        const regex = /^[a-zA-Z]{2,}$/;
        const email = document.getElementById("email");
        const errMessage = document.getElementById("errorMess");
        const pass = document.getElementById("password");
        switch(id){
            case "fname":
                const fName = document.getElementById("fname");
                
                if(regex.test(fName.value) ){
                    fName.classList.add("valid");
                    errMessage.textContent = "";
                    isValid = true;
                } else {
                    fName.classList.add("invalid");
                    fName.classList.remove("valid");
                    errMessage.innerHTML = "Invalid. Enter at Least 2 characters";
                    isValid = false;
                }
                break;
            case "lname":
                const lName = document.getElementById("lname");
                //const regex = //
                if(regex.test(lName.value)){
                    lName.classList.add("valid");
                    errMessage.innerHTML = "";
                    isValid = true;
                } else {
                    lName.classList.add("invalid");
                    lName.classList.remove("valid");
                    errMessage.innerHTML = "Invalid. Enter at Least 2 characters";
                    isValid = false;
                };
                break;
            case "email":
                
                const emailReg = /([a-z0-9._-]+@[a-z0-9._-]+\.[a-z0-9_-]+)/gi;
                if(emailReg.test(email.value)){
                    email.classList.add("valid");
                    errMessage.innerHTML = "";
                    isValid = true;
                } else {
                    email.classList.add("invalid");
                    email.classList.remove("valid");
                    errMessage.innerHTML = "Invalid email. Enter a valid email";
                    isValid = false;
                };
                break;
            case "email2":
                const email2 = document.getElementById("email2");
                if(email2.value === email.value){
                    email2.classList.add("valid");
                    errMessage.innerHTML = "";
                    isValid = true;
                } else {

                    email2.classList.add("invalid");
                    
                    email2.classList.remove("valid");
                    errMessage.innerHTML = "Invalid email. Enter a valid email";
                    isValid = false;
                };
                break;
            case "password":
                
                const passRegex = /^\w{5,10}$/;
                if(passRegex.test(pass.value)){
                    pass.classList.add("valid");
                    errMessage.innerHTML = "";
                    isValid = true;
                } else {
                    pass.classList.add("invalid");
                    pass.classList.remove("valid");
                    errMessage.innerHTML = "Enter 5 - 10 characters. No special characters.";
                    isValid = false;
                };
                break;
            case "password2":
                const pass2 = document.getElementById("password2");
                if(pass2.value === pass.value){
                    pass2.classList.add("valid");
                    errMessage.innerHTML = "";
                    isValid = true;
                } else {
                    pass2.classList.add("invalid");
                    pass2.classList.remove("valid");
                    pass2.innerHTML = "Passwords do not match.";
                    isValid = false;
                };
                break;

        }
       
    }

}