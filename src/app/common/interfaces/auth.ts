export interface Auth {
    email: string,
    password: string
}

export interface User{
    name: string,
    age: number,
    email: string,
    diabetes: boolean,
    numberOfCup: number
}
export class Users{
    name: string = '';
    age = 18;
    email = '';
    diabetes = false;
    numberOfCup = 0;
    password = '';

    constructor(name: string, age: number, email: string, diabetes: boolean, numberOfCup: number, password: string){
        this.name = name;
        this.age = age;
        this.email = email;
        this.diabetes = diabetes;
        this.numberOfCup = numberOfCup;
        this.password = password;

    }
}