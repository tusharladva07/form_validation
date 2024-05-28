let nameError = document.getElementById("nameError")
let phoneError = document.getElementById("phoneError")
let emailError = document.getElementById("emailError")
let msgError = document.getElementById("msgError")
let successError = document.getElementById("successError")

function validatename(){
    let nameinpt = document.getElementById("contact-name").value;
    if(nameinpt.length==0)
        {
            nameError.innerHTML = "Name is required";
            return false;
        }
        nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;

}
function validatephone(){
    let phoneinpt = document.getElementById("contact-phone").value;
    if(phoneinpt.length==0)
        {
            phoneError.innerHTML = "Phone number is required";
            return false;
        }
        if(phoneinpt.length+1 < 10)
            {
                phoneError.innerHTML = "Phone Number Must Be 10 Digits";
                return false;
            }
    
        phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;

}
function validateemail(){
    let emailinpt = document.getElementById("contact-email").value;
    if(emailinpt.length==0)
        {
            emailError.innerHTML = "Email is required";
            return false;
        }
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailinpt.match(emailPattern))
            {
                emailError.innerHTML = "Email is not valid";
                return false;
            }
    
        emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
        return true;

}
function validatemsg(){
    let msginpt = document.getElementById("contact-msg").value;
    let required = 30;
    if(msginpt.length!=required)
        {
            left = msginpt.length+1; 
            msgError.innerHTML = left+ '/'+required;
            return false;
        }
        return true;

}

function validatesubmitt(){
    if(!validatemsg() || !validateemail() || !validatephone() || !validateemail())
        {
            successError.innerHTML = "Please Fill Required Fields";
            nameError.innerHTML = "Name is required";
            phoneError.innerHTML = "Phone number is required";
            emailError.innerHTML = "Email is required";
            setTimeout(() => {
            successError.innerHTML = "Please Fill Required Fields";
                successError.style.display= 'none'; 
            }, 3000);
            return false;
        }
        return true;
}