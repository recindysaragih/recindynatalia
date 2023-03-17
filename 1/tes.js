const namaField = document.querySelector("[name=nama]");

namaField.addEventListener("keyup", (event) => {
    if(!namaField.validity.valid){
        console.error("nama invalid");
        document.getElementById("invalid-nama").style.display = "block";
    } else {
         console.info("nama  valid");
        document.getElementById("invalid-nama").style.display = "none";
    }

});
const NIMField = document.querySelector("[name=nim]");

NIMField.addEventListener("keyup", (event) => {
    if(!NIMField.validity.valid){
        console.error("NIM invalid");
        document.getElementById("invalid-nim").style.display = "block";
    } else {
         console.info("NIM  valid");
        document.getElementById("invalid-nim").style.display = "none";
    }

});
const nikField = document.querySelector("[name=nik]");

nikField.addEventListener("keyup", (event) => {
    if(!nikField.validity.valid){
        console.error("NIK invalid");
        document.getElementById("invalid-nik").style.display = "block";
    } else {
         console.info("NIK valid");
        document.getElementById("invalid-nik").style.display = "none";
    }

});
const nohpField = document.querySelector("[name=nohp]");

nohpField.addEventListener("keyup", (event) => {
    if(!nohpField.validity.valid){
        console.error("No hp invalid");
        document.getElementById("invalid-nohp").style.display = "block";
    } else {
         console.info("No hp valid");
        document.getElementById("invalid-nohp").style.display = "none";
    }

});
const emaildField = document.querySelector("[name=email]");

emaildField.addEventListener("keyup", (event) => {
    if(!emaildField.validity.valid){
        console.error("email invalid");
        document.getElementById("invalid-email").style.display = "block";
    } else {
         console.info("email valid");
        document.getElementById("invalid-email").style.display = "none";
    }

});
const passwordField = document.querySelector("[name=password]");

passwordField.addEventListener("keyup", (event) => {
    if(!passwordField.validity.valid){
        console.error("passowrd invalid");
        document.getElementById("invalid-passowrd").style.display = "block";
    } else {
         console.info("passowrd valid");
        document.getElementById("invalid-passowrd").style.display = "none";
    }

});