
/// <reference path="./typings/index.d.ts" />

import { IStudentInfo } from './IStudentInfo'
import Stud = require('./Student')

import * as Webdriver from "selenium-webdriver"


//Enum declaration
enum LanguagesKnown { English, Hindi, Tamil}

//Declaring Student
let student:IStudentInfo = {
    Name: "Karthik",
    Age: 30,
    Phone: 2342342,
    Language: LanguagesKnown[LanguagesKnown.Tamil]
}

//List of Students
let studentsList:IStudentInfo[] = [
    {Name: "Prashanth", Age:26, Phone: 23423423, Language: LanguagesKnown[LanguagesKnown.English]},
    {Name: "Shree",Age:27, Phone:2454545, Language: LanguagesKnown[LanguagesKnown.Hindi]}
]


let studentsListG:Array<IStudentInfo> = [
    {Name: "Prashanth", Age:26, Phone: 23423423, Language: LanguagesKnown[LanguagesKnown.English]},
    {Name: "Shree",Age:27, Phone:2454545, Language: LanguagesKnown[LanguagesKnown.Hindi]}
]

//Pushing a student into the array (List of students)
studentsList.push(student);

// for (var index = 0; index < studentsList.length; index++) {
//     var element = studentsList[index];
//     console.log("Age:" + element.Age + " with Name:" + element.Name + " has Phone:" +element.Phone + " knows language:"+ element.Language );
// }

//Function declaration
function GetStudentsList(students: IStudentInfo[]){
    students.forEach(element => {
            console.log("Age:" + element.Age + " with Name:" + element.Name + " has Phone:" +element.Phone + " knows language:"+ element.Language );
    });
}

GetStudentsList(studentsList);

//Rest Parameters
function GetNumbers(...nums: number[]){
    nums.forEach(element => {
        console.log("Number: " + element);
    });
}

GetNumbers(1,2,3,4,5,6)

//Default Parameters
function GetInfo(info:string = "Happy"){
    console.log(info);
}

GetInfo("Very happy");

//#################################### Functions advanced ########################

//Anonymous function
let StudentName = function (lName:string, fName:string){
    return fName + "..." + lName;
}

console.log(StudentName("KK", "Karthik"));

//Arrow Function
let StudentFullName = (lName:string, fName:string) => {return fName + ".." + lName};

console.log(StudentFullName("KK", "Prashanth"));

//*********************Classes ********************** */

let s = new Stud("KK", "Karthik");
console.log(s.GetFullName());


//******************** Generics ************************ */

//Function declaration
function GetStudentsListGenerics(students: Array<IStudentInfo>){
    students.forEach(element => {
            console.log("Age:" + element.Age + " with Name:" + element.Name + " has Phone:" +element.Phone + " knows language:"+ element.Language );
    });
}

GetStudentsListGenerics(studentsListG);




