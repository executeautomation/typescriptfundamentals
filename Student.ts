class Students {

    constructor(private lName,private fName){
    }

    GetFullName():string
    {
        return this.lName + " " + this.fName;
    }

}

export = Students