var Username="vanloc101997@gmail.com";
var Password="123"
var inputusername=document.getElementById('Username');
var inputpassword=document.getElementById('Password');
var formlogin=document.getElementById('form-login');
if (formlogin.attachEvent) {
    formlogin.attachEvent('submit',onFormSubmit);

} else{
    formlogin.addEventListener('submit',onFormSubmit)  
}

function onFormSubmit(elemen) {
    if (elemen.preventDefault)elemen.preventDefault();
    var user=inputusername.value;
    var pass=inputpassword.value;
    if ( user==Username && pass==Password) {
        window.location = "C:/Users/Admin/Desktop/demo/quanlysanpham.html";
    }else{
        window.location = "C:/Users/Admin/Desktop/demo/index.html";
    }
    return false;

    
}
