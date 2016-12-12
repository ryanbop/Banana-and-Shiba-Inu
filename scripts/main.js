var myImage = document.querySelector('img');

myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if(mySrc === 'images/banan.png') {
     myImage.setAttribute ('src','images/doge.png');
	} else {
		myImage.setAttribute ('src' , 'images/banan.png');
	}
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.innerHTML = 'Bananas and Shibu Inus are Cool, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  var storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'Bananas and Shibu Inus are Cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
