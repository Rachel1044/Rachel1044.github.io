document.querySelector("#form").factOne.addEventListener("click", f1);

function f1(){
	document.querySelector("#div").innerHTML = "North Korea and Cuba are the only places you can't buy Coca-Cola <br> <img src = 'Images/coke.jpg' alt= 'coke'>";
}

document.querySelector("#form").factTwo.addEventListener("click", f2);

function f2(){
	document.querySelector("#div").innerHTML = "The hottest chili pepper in the world is so hot it could kill you <br> <img src = 'Images/pepper.jpg' alt= 'pepper'>" ;
}

document.querySelector("#form").factThree.addEventListener("click", f3);

function f3(){
	document.querySelector("#div").innerHTML = "The first oranges weren’t orange <br> <img src= 'Images/greenoranges.jpg' alt='Orange'>";
}

document.querySelector("#form").factFour.addEventListener("click", f4);

function f4(){
	document.querySelector("#div").innerHTML = "A cow-bison hybrid is called a beefalo <br> <img src = 'Images/hybridcow.jpg' alt= 'Cow'>" ;
}

document.querySelector("#form").factFive.addEventListener("click", f5);

function f5(){
	document.querySelector("#div").innerHTML = "Scotland has 421 words for snow <br> <img src = 'Images/snow.jpg' alt= 'Snow'>" ;
}