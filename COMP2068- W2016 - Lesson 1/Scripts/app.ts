/// <reference path="../typings/tsd.d.ts"/>

console.log("App Started...");

class Person {
    
    //private instance variables
    private _name:string;
    
    //constructor function
    constructor(name:string){
        this._name = name;
    }
    
    //public methods
    public speak():void{
        console.log(this._name + " says hello");
    }
}

var tom:Person = new Person("Tom");
tom.speak();