"use strict";
var Students = (function () {
    function Students(lName, fName) {
        this.lName = lName;
        this.fName = fName;
    }
    Students.prototype.GetFullName = function () {
        return this.lName + " " + this.fName;
    };
    return Students;
}());
module.exports = Students;
//# sourceMappingURL=Student.js.map