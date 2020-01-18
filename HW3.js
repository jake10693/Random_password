//generate random password
function generate(){
    console.log('ive been clicked')
    //set password length/complexity
    let complexity = document.getElementById("slider").value;

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890";


    let password = "";

    //create forloop to choose password characters
    for (var i = 0; i <= complexity; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    
    }
    
    //add pasword to textbox/display area
    document.getElementById("display").value = password;

    //add password to previously generated passwords section
    document.getElementById("lastNums").innerHTML += password + "<br>"


}

//set default length display of 25
document.getElementById("length").innerHTML = "length: 25";

//funtion to set length based on slider position
document.getElementById("slider").oninput = function(){

    if(document.getElementById("slider").value > 0){
        document.getElementById("length").innerHTML = "length: "  + document.getElementById("slider").value;
      }
      else{
          document.getElementById("length").innerHTML = "length: 1";
      }

}

//function to copy password to clipboard
function copyPassword(){

    document.getElementById("display").select();

    document.execCommand("Copy");

    alert("Password copied to clipboard!");

}