var age = prompt("Please tell us your age?");

function bouncer() {
	if (age <= 20){
		document.getElementById("out").innerHTML = "Sorry but you are not allow drink alcohol.";
	}
	else if (age => 21){
		document.getElementById("out").innerHTML = "Go ahead, you can drink.";
	}
}
bouncer();
