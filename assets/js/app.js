var correctEmail = "testthetest@test.com";
var correctPassword = "password";


$("#submitBtn").on('click', function(){

var inputtedValue = $("#usernameInput").val();
var inputtedPassword = $("#passwordInput").val();

if (inputtedValue == correctEmail && inputtedPassword == correctPassword){

	alert("IT WORKED!!!");

return false;
}else{
	alert("WRONG PASSWORD or EMAIL");
}

return false;

});