const a=5; // default
let b=5; // 이후에도 변수값 변경가능
var c=5 //이제 안씀!!

//2.5 array
const week=['mon','tue','wed','thu','fri','sat'];
console.log(week);
console.log(week[5]);

week.push("sun"); //추가
console.log(week);

//2.6 objects
const player = {
    name: "nico",
    points: 1212,
    handsome: false,
    fat: "littlebit"
};

console.log(player);
console.log(player.name);
player.lastName="potato"; //object 추가
console.log(player);

//2.7,8 functions 
function sayHello(name,age){
    console.log("Hello! my name is "+name+" and I am "+age);

}
sayHello("nico",10)
sayHello("dal",23)
sayHello("flyn",21)

function plus(a,b){
    console.log(a+" + "+b+" = "+(a+b))
}
plus(1,3)

const memeber={
    name : "nico",
    sayHi: function (otherMember){
        console.log("hi "+otherMember);
    }
};
console.log(memeber.name);
memeber.sayHi("sara")

//2.11 Returns
const calculator={
    plus: function(a,b){
        return(a+b);
    },
    minus: function(a,b){
        return(a-b);
    },
    times: function(a,b){
        return(a*b);
    },
    divide: function(a,b){
        return(a/b);
    },
    power: function(a,b){
        return(a**B);
    },
};

const plusResult=calculator.plus(2,3);
console.log(plusResult)

//2.13,14,15 Conditionals 
const age = parseInt(prompt("How old ae you?"));

if (isNaN(age)){
    console.log("Please write a number");
} else if (age<18){
    console.log("You are too young.");
} else if (age>=18 && age<=50){
    console.log("You can drink");
} else if (age>50 && age<=80){
    console.log("You can't drink")
}




