// f(x) = 3x^2 + 2x - 6
// x = 3
// f(3) = 3 * (3)^2 + 2(3) - 6 = 27


var mygpa  = 3.1
const mingpa = 3.0

if (mygpa > mingpa){
	console.log("accepted")
}
else{
		console.log("not accepted")
}

var scorlarshipgpa  = 3.2

if(mygpa>mingpa && mygpa>scorlarshipgpa){
	console.log("accepted with scholarship")
}
else if(mygpa > mingpa){
     console.log("Only accepted")
}
else{
	console.log("not accepted")
}

//Functions and paramters


function sum(){
	let n1 = 100
	let n2 = 200
	let n3 = 300
	total = n1+n2+n3
	return total
}

console.log(sum())

function f(x){
	//ans = 3*x**2*x+2-6
	return ans
}
console.log(3)


function areaOfReCTangele(l,w){
	totalArea =  l*w
	var reportText = "The area of the rectangle is "+totalArea+" cm"
	return reportText
}

console.log(areaOfReCTangele(3,3))