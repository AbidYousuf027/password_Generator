let inputField = document.getElementById("password");
let copyPassword = document.getElementById("copyPassword");
let createPassword = document.getElementById("createPassword");
let digit = 10;

let upperCase = "ACEGIKMOQSUWY";
let lowerCase = "bdfhjlnprtvxz";
let number = "1234567890";
let symbol = "!@#$%&";

let allChar = upperCase + lowerCase + number + symbol;

copyPassword.addEventListener("click", ()=>{
    inputField.select()
    document.execCommand("copy");
    
})

createPassword.addEventListener("click" , ()=>{
    let password = "";
    for (let i = 0; i < digit; i++){
        
        password += allChar[Math.floor(Math.random() * allChar.length)];
    }
    inputField.value = password;
   
})

