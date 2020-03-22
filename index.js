var myName = "Gabriel Aggrey";

var myCourses = ["HTML-CSS-Javascript", "PHP", "CSharp"];

for(var g = 0; g < myCourses.length; g++){
    console.log(myCourses[g]);
}


var oddNumbers = [];

for(var g = 0; g <= 200; g++){
    if (g%2===1){
        oddNumbers.push(g);
    }
}
console.log(oddNumbers);