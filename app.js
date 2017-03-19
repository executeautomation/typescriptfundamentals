/// <reference path="./typings/index.d.ts" />
"use strict";
exports.__esModule = true;
var Stud = require("./Student");
//Enum declaration
var LanguagesKnown;
(function (LanguagesKnown) {
    LanguagesKnown[LanguagesKnown["English"] = 0] = "English";
    LanguagesKnown[LanguagesKnown["Hindi"] = 1] = "Hindi";
    LanguagesKnown[LanguagesKnown["Tamil"] = 2] = "Tamil";
})(LanguagesKnown || (LanguagesKnown = {}));
//Declaring Student
var student = {
    Name: "Karthik",
    Age: 30,
    Phone: 2342342,
    Language: LanguagesKnown[LanguagesKnown.Tamil]
};
//List of Students
var studentsList = [
    { Name: "Prashanth", Age: 26, Phone: 23423423, Language: LanguagesKnown[LanguagesKnown.English] },
    { Name: "Shree", Age: 27, Phone: 2454545, Language: LanguagesKnown[LanguagesKnown.Hindi] }
];
var studentsListG = [
    { Name: "Prashanth", Age: 26, Phone: 23423423, Language: LanguagesKnown[LanguagesKnown.English] },
    { Name: "Shree", Age: 27, Phone: 2454545, Language: LanguagesKnown[LanguagesKnown.Hindi] }
];
//Pushing a student into the array (List of students)
studentsList.push(student);
// for (var index = 0; index < studentsList.length; index++) {
//     var element = studentsList[index];
//     console.log("Age:" + element.Age + " with Name:" + element.Name + " has Phone:" +element.Phone + " knows language:"+ element.Language );
// }
//Function declaration
function GetStudentsList(students) {
    students.forEach(function (element) {
        console.log("Age:" + element.Age + " with Name:" + element.Name + " has Phone:" + element.Phone + " knows language:" + element.Language);
    });
}
GetStudentsList(studentsList);
//Rest Parameters
function GetNumbers() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    nums.forEach(function (element) {
        console.log("Number: " + element);
    });
}
GetNumbers(1, 2, 3, 4, 5, 6);
//Default Parameters
function GetInfo(info) {
    if (info === void 0) { info = "Happy"; }
    console.log(info);
}
GetInfo("Very happy");
//#################################### Functions advanced ########################
//Anonymous function
var StudentName = function (lName, fName) {
    return fName + "..." + lName;
};
console.log(StudentName("KK", "Karthik"));
//Arrow Function
var StudentFullName = function (lName, fName) { return fName + ".." + lName; };
console.log(StudentFullName("KK", "Prashanth"));
//*********************Classes ********************** */
var s = new Stud("KK", "Karthik");
console.log(s.GetFullName());
//******************** Generics ************************ */
//Function declaration
function GetStudentsListGenerics(students) {
    students.forEach(function (element) {
        console.log("Age:" + element.Age + " with Name:" + element.Name + " has Phone:" + element.Phone + " knows language:" + element.Language);
    });
}
GetStudentsListGenerics(studentsListG);
//# sourceMappingURL=app.js.map