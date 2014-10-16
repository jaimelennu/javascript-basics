// Single line JavaScript comment

/* 	
	Multi-line
	Javascript 
	Comment
*/

var person = {
	fName: 'Jaimelenn',
	lName: 'Uemura',
	email: 'jaimeu@uw.edu',
	getFullName: function() {return this.fName + ' ' + this.lName; }
};

//alert()
console.log(person.getFullName());


for(prop in person) {
	console.log(person[prop]);
}

//create a new img elem
var elem = document.createElement('img');
elem.src = 'img/dog.jpg';
elem.alt = 'picture of my awesome dog';

//add this element to the top of the body
document.body.insertBefore(elem, document.body.firstChild);