const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60,60,60]
const grades = [a,b,c,d,f]





var a = 0
var b = 0
var c = 0
var d = 0
var f = 0



for (var x in scores){
    x = scores[x]
     if(x > 90){
         a += 1;
     }
     else if(x > 80){
         b += 1;
     }
     else if(x > 70){
         c += 1;
     }
     else if(x > 60){
         d += 1;
     }
     else if(x >= 50){
         f += 1;
     }
};




console.log("there are " + a + " A's")
console.log("there are " + b + " B's")
console.log("there are " + c + " C's")
console.log("there are " + d + " D's")
console.log("there are " + f + " F's")






x = Math.max.apply(null,scores)

y = Math.min.apply(null,scores)

console.log(x + " Is the highest grade ")
console.log(y + " Is the lowest grade ")

var stringPres = ""
let totalGrades = [a,b,c,d,f];



function numberOfGrades(){
    let currentGradeCount = [];
    if (a >= b && a >= c && a >= d && a >= f){
        currentGradeCount.push("A");
    };
    if (b >= a && b >= c && b >= d && b >= f){
        currentGradeCount.push("B");
    };
    if (c >= a && c >= b && c >= d && c >= f){
        currentGradeCount.push("C");
    };
    if (d >= a && d >= b && d >= c && d >= f){
        currentGradeCount.push("D");
    }
    if (f >= a && f >= b && f >= c && f >= d){
        currentGradeCount.push("F");
    }
    console.log("Current Grade Count",currentGradeCount);
    if(currentGradeCount.length > 1){
        for (i = 0; i < currentGradeCount.length; i++){
            stringPres += currentGradeCount[i]+","
        }
    
        console.log(stringPres + " are the most occuring grades");
    }else{
        console.log(currentGradeCount+ " is the most occuring grade");
    }
}



function leastGrades(){
    let fewestGradeCount = [];
    if (a <= b && a <= c && a <= d && a <= f){
        fewestGradeCount.push("A");
    };
    if (b <= a && b <= c && b <= d && b <= f){
        fewestGradeCount.push("B");
    };
    if (c <= a && c <= b && c <= d && c <= f){
        fewestGradeCount.push("C");
    };
    if (d <= a && d <= b && d <= c && d <= f){
        fewestGradeCount.push("D");
    }
    if (f <= a && f <= b && f <= c && f <= d){
        fewestGradeCount.push("F");
    }
    console.log("fewest Grade Count",fewestGradeCount);
    if(fewestGradeCount.length > 1){
        for (i = 0; i < fewestGradeCount.length; i++){
            stringPres += fewestGradeCount[i]+","
        }
    
        console.log(stringPres + " are the least occuring grades");
    }else{
        console.log(fewestGradeCount+ " is the least occuring grade");
    }
}
numberOfGrades()

leastGrades()