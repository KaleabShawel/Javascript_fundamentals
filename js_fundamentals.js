document.write("<center>");
document.write("1. Rest Parameters <br/>");
function sendCars(day, ...carIds){
    carIds.forEach(id=>document.write("<br>",id));
}
sendCars("Monday", 1,2,3);
function sendCars1(...carIds){
    carIds.forEach(id=>document.write("<br>",id));
    document.write("<br/>");
}
sendCars1("Monday", 1,2,3);
document.write("<br/>");
document.write("2. Destructuring Arrays <br/>");
let carIds2 = [1001, 2002, 3003];
let [car1, car2] = carIds2;
document.write("First car: ",car1,"&nbsp;"," ","Second car: ",car2,"<br/>");
let carIds3 = [1001, 2002, 3003];
 let car3, car4, theRest;
 [car3, car4,...theRest] = carIds3;
document.write("First car: ",car3,", &nbsp;"," ","Second car: ",car4,", &nbsp;"," ","The rest: ",theRest,"<br/>");
document.write("<br/>");
document.write("3. Destructuring Objects <br/>");
let car5 = { id:5000, style:'convertible'};
let{id,style}=car5;
document.write("The ID: ",id,"&nbsp;","And The style: ",style,"<br/>");
let car6 = {id2: 6000, style2: 'convertible'};
let id2, style2;
({id2,style2}=car6);
document.write("The Second ID: ",id2,"&nbsp;","And the second style:",style2,"<br/>");
document.write("<br/>");
document.write("4. Spread <br/>");
function startCars(car7, car8, car9 ){
    document.write("The first car: ",car7,",&nbsp;","The second car: ",car8,",&nbsp;","The third car: ",car9,"<br/>");
}
let carIds4 = ['A','B','C'];
startCars(...carIds4);
function startCars2(car10, car11, car12, ...rest){
    document.write("The Rest: ",rest);
    document.write("<br/>");
}
let carIds5 = ['A','B','C','D','E','F'];
startCars2(...carIds5);
document.write("<br/>");
document.write("5. Controlling Loops <br/>");
document.write("By break key word: <br/>");
for(let i=0; i<5; i++){
    document.write(i," ","<br/>");
    if(i===3)
    break;
}
document.write("BY Continue keyword:");
let j=0;
for(;j<5;j++){
    if(j===3)
    continue;
    document.write("<br/>",j);
}
document.write("<br/>");
document.write("6. Function Scope <br/>");
function studentReg(stuId){
    let message = 'Registration';
    let registrationFn = function turnKey(){
        document.write("In function scope: ",message);
    };
    registrationFn();
}
studentReg(123);

function studentReg2(stuId2){
    let message2 = 'Registration';
    let registrationFn2 = function turnKey2(){
        let message = 'override';
        document.write("<br/>");
        document.write("In the Nested function: ",message);
    };
    registrationFn2();
    document.write("<br/>");
    document.write("In function scope: ",message2,"<br/>");
}
studentReg2(123);
document.write("<br/>");
document.write("7. Block Scope <br/>");
let message3 = 'outside from the codeblock';
if (5===5){
    let message = 'Equal';
    document.write("In the block scope: ", message,"<br/>");
}
document.write("Out of the scope: ", message3,"<br/>");
document.write("<br/>");
var message4 = 'outside';
if(5===5){
    var message ='Equal';
    document.write("In var key word: ",message,"<br/>");
}
document.write("var keyword didn't apply block scope: ",message,"<br/>");
document.write("<br/>");
document.write("8. IIFE's(Immediately Invoked Function Expression) <br/>");
(function(){
    document.write("Declaring a function by IIFE: ",'in function. <br/>');
})();
document.write("<br/>");
document.write("9. Closures <br/>");
let app2 = (function(){
    let stuId2 = 2345;
    let getId = function (){
        return stuId2;
    };
    return {
        getId : getId
    };
}) ();
document.write("Using Closre to accessing function and nested function: ",app2.getId(),"<br/>");
document.write("<br/>");
document.write("10. The this keyword <br/>");
let o = {
 stuId3 : 123,
 getId2 : function(){
    document.write(this,"<br/>");
    return this.stuId3;
 }
};
document.write(o.getId2(),"<br/>");
document.write("<br/>");
document.write("11. Call and Apply <br/>");
let o2 = {
 stuId4 : 1234,
 getId3 : function(){
    return this.stuId4;

 }
};
let newStud = {stuId4 : 6789};
 document.write("By Call:",o2.getId3.call(newStud),"<br/>");
  
 let o3 = {
 stuId5 : 1234,
 getId4 : function(prefix){
    return prefix + this.stuId5;
 }
 };
 let newStud2 = {stuId5:4567};
 document.write("BY Apply: ",o3.getId4.apply(newStud2,['ID: ']),"<br/>");
 document.write("<br/>");
 document.write("12. Bind <br/>");
 let o4 = {
 studId6 : 1456,
 getId5 : function(){
    return this.studId6;
 }
 };
 let newStud3 ={studId6:7895};
 let newFn = o4.getId5.bind(newStud3);
 document.write("To assign new context to a copy function we call Bind keyword: ",newFn(),"<br/>");
 console.log(newFn());
 document.write("<br/>");
 document.write("13. Arrow Function <br/>");
 let getId6 = (prefix,suffix)=>{
 return prefix + "This is arrow Function " + suffix;
 };
 document.write(getId6("=>: ","!"),"<br/>");
 let getId7 = (prefix,suffix)=>prefix + 'Arrow function with out return keyword' + suffix;
 document.write(getId7("=>: ","!"),"<br/>");
 let getId8 = _=>'Arrow function with underscore';
 document.write("=>: ",getId8(),"!","<br/>");
 document.write("<br/>");
 document.write("14. Default Parameters <br/>");
 let trackCar = function(carId,city='Addis Ababa'){
 console.log(document.write(`Tracking ${carId} in ${city}.<br/>`));
 };
 console.log(trackCar(667));
 console.log(trackCar(435,"Debere zeyte"));
 document.write("<br/>");
 document.write("15. Object and Arrays <br/>");
 function Student(id3){
    this.studId7 = id3;
 }
 let student = new Student(4567);
 document.write("The student ID:",student.studId7,"<br/>");
 document.write("<br/>");
 document.write("15.1. Methods <br/>");
 function Student2(id4){
    this.studId8 = id4;
    this.start = function(){
        document.write("start: "+ this.studId8,"<br/>");
    };
 }
 let student2 = new Student2(6897);
  student2.start();
  document.write("<br/>");
 document.write("15.2. prototypes <br/>");
 function Student3(id5){
    this.studId9 = id5;
 }
 Student3.prototype.start2 = function(){
    document.write("Start from: "+ this.studId9,"<br/>");
 };
 let student3 = new Student3(1122);
 student3.start2();
 document.write("<br/>");
 document.write("15.3. Expanding objects using prototypes <br/>");
 String.prototype.hello = function(){
    return this.toString()+'string.prototype is a builted constructor';
 };
 document.write("Hello this example: ".hello(),"<br/>");
 document.write("<br/>");
 document.write("15.4. JSON javascript Object Notation <br/>");
 let student4 = {
    id:4567,
    style3:'The nerdy one'
 };
 document.write("Convert to JSON: ",JSON.stringify(student4),"<br/>");

 let studIds = [
    {studId:345},
    {studId:789},
    {studId:468}
 ];
 document.write("Converting an Array to JSON: ",JSON.stringify(studIds),"<br/>");

 let jsonIn = 
 `[
    {"studId":548},
    {"studId":984},
    {"studId":488}
 ]
 `;
let stuIds2 = JSON.parse(jsonIn);
  document.write("","<pre> parsing JSON: ",JSON.stringify(stuIds2),"</pre>");
  
 document.write("15.5. Array Iteration <br/>");
 let studIds3 = [
    {studId:3868, style:'The silent one'},
    {studId:7974, style:'The brave one'},
    {studId:4687, style:'The other nerdy'}
 ];
 studIds3.forEach(sutd=>console.log(sutd));
 studIds3.forEach(stud=>document.write(JSON.stringify (stud,"<br/>")));
 studIds3.forEach((stud2,index)=>document.write(JSON.stringify(stud2,index,"<br/>")));
 document.write("<br/>");
 document.write("15.6. Array Filtering <br/>");
 let studIds4 = [
    {studId:3868, style:'The silent one'},
    {studId:7974, style:'The brave one'},
    {studId:4687, style:'The other nerdy'}
 ];
 let nerdy = studIds4.filter(stud3=>stud3.style ==='The other nerdy');
 document.write(JSON.stringify(nerdy,"<br/>"));
 document.write("<br/>");
 document.write("15.7. Array Testing <br/>");
 let studIds5 = [
    {studId:3868, style:'The silent one'},
    {studId:7974, style:'The brave one'},
    {studId:4687, style:'The other nerdy'}
 ];
 let result = studIds5.every(stud4=>stud4.studId>5);
 document.write("This will return Boolean value: ",JSON.stringify(result,"<br/>"));
 document.write("<br/>");
 document.write("15.8. Locate the first match <br/>");
 let studIds6 = [
    {studId:3868, style:'The silent one'},
    {studId:7974, style:'The brave one'},
    {studId:4687, style:'The other nerdy'}
 ];
 let student5 = studIds6.find(stud =>stud.studId > 5000 );
 document.write(JSON.stringify(student5),"<br/>");

 document.write("<br/>");
 document.write(" 16. Class and Modules <br/>");
 document.write(" 16.1. Class Basics <br/>");
 class Sport{
  
 }
 let sport = new Sport();
 document.write("Empty object in the class: ",JSON.stringify( sport),"<br/>");
 document.write("<br/>");
 document.write(" 16.2. Constructors and properties <br/>");
 class Sports{
    constructor(id){
        this.id = id;
    }
 }
 let sport2 = new Sports('Football');
 document.write("class with constructor: ",JSON.stringify( sport2.id),"<br/>");
 class Sport3{
    constructor(id){
        this.id = id;
    }
 }
 let sport3 = new Sport3('Football');
 sport3.id='Tennis';
 document.write("Accessing the property without the class block: ",JSON.stringify(sport3.id),"<br/>");
 document.write("<br/>");
 document.write(" 16.3. Methods <br/>");
 class Sport4{
    constructor(id){
        this.id = id;
    }
    identify(suffix){
        return `sportTeam: ${this.id} ${suffix}`;
    } 
 }
 let sport5 = new Sport4('Chelsea');
 console.log(sport5.identify('located in Londan !!!'));

 document.write("Methods are functions that exist an object: ",JSON.stringify(sport5.identify('located in Londan!!!')));
 document.write("<br/>");
 document.write(" 16.4. Inheritance <br/>");
 class Sports2{
    constructor(){
        this.type = 'Football';
    }
    game(){
        return ` ${this.type}`;
    }
 }
  class Football extends Sports2{
    constructor(){
        super();
    }
  }
  let football = new Football();
  document.write("This class name is inherited from Sport: ",JSON.stringify(football.type),"<br/>");

  class Sport6{
    constructor(){
        this.type = 'Tennis';
    }
    start(){
        return `Matchs: ${this.type}`;
    }
  }
 class Tennis extends Sport6{
    start(){
        return 'in sport '+ super.start();
    }
 }
 let tennis = new Tennis();
 console.log(tennis.start());
 document.write(JSON.stringify(tennis.start()));
 document.write("<br/>");
 document.write(" 16.5. Creating and Importing Module <br/>");
 
 
 
 document.write("<center/>");

 
 
 