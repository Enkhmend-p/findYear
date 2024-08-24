// function -> dahij ashiglah bolomjtoi kodnii tsugluulga
// 1. define -> zarlah
// argument/parametr -> func-iin zaaval avah utga
function hello(name,age){
	console.log("hello "+name);
	console.log("your age is "+age)
}
// 2. call -> duudaj ajiluulna
hello("cat",15);
hello("bold",17);
function tursunOn(nas){
	// NaN - not a number
	console.log("tanii tursun on:"+(2024-nas));
}
tursunOn(24);
function niilber(first,second){
	console.log(first+second);
}
niilber(56,68);
// DOM -> DOcument : html deerh buh code
console.log(document);
var h1 = document.getElementsByTagName("h1")[0];
console.log(h1);
// variableName.style.styleName="value";
h1.style.color="red";
// varName.innerText="value": ->
h1.innerText="Hello cat";
function changeText(){
	h1.style.color="green";
	h1.innerText="Text changed";
}
var h2=document.getElementsByTagName('h2')[0];
console.log(h2);
function change(){
	h2.style.color="blue";
	h2.innerText="found";
}
var input=document.getElementsByTagName('input')[0];
var p=document.getElementsByTagName('p')[0];
var p2=document.getElementsByTagName('p')[1];
var p3=document.getElementsByTagName('p')[2];
var p4=document.getElementsByTagName('p')[3];
console.log(input);
console.log(p);
function age(){
	console.log(2024-input.value);
	p.innerText="your birth year :"+(2024-input.value);
	if(input.value>17){
		p2.innerText="ta nasand hursen baina"
    }else{
		p2.innerText="ta nasand hureegui baina"
	}
	if(input.value>130){
		p3.innerText="hun iim naslah bolomjgui"
		p3.style.color="red"
	}
	else if(input.value<0){
		p3.innerText="ta turuugui baina"
		p3.style.color="yellow"
	}
	else if(input.value=="");{
		alert("hooson baij bolohgui");
	}
		console.log ( parseInt(input.value+10));
		p4.innerText="ta 10 jiliin daraa iim nastai baina "+ (parseInt(input.value)+10);
}