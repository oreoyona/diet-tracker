export interface Auth {
    email: string,
    password: string
}

export interface Sexe {

}

export interface User {
    name: string,
    age: number,
    email: string,
    diabetes: boolean,
    numberOfCup: number,
}
export class Users {
    name: string = '';
    age = 18;
    email = '';
    diabetes = false;
    numberOfCup = 0;
    password?= '';
    md_number?: number ;
    sexe? = '';
    

    /**
     * addCup - adds a cup of water to the user
     * return: void
     */
    addCup() {
        this.numberOfCup += 1;
    }

    public get cups() {
        return this.numberOfCup;
    }

    public get doctor(){
        if (this.md_number)
        return this.md_number;
        else return 0;
    }

    public set doctor(num: number){
        this.md_number = num;
    }

    public get debutDate(): Date{
       
        return this.debut;
    }
    public get Hour():number{
        return this.debut.getHours() + 1;
    }



    


    constructor(
        name: string,
        age: number,
        email: string,
        diabetes: boolean,
        numberOfCup: number,
        password?: string,
        md_number?:number,
        sexe?: string,
        private debut:Date = new Date()
        ) {


        this.name = name;
        this.age = age;
        this.email = email;
        this.diabetes = diabetes;
        this.numberOfCup = numberOfCup;
        this.password = password;
        this.md_number = md_number;
        this.sexe = sexe
        this.debut = new Date();

    }
}


export class Homme extends Users{
    recommandedFluids = 11 * this.numberOfCup;

    constructor(){
        super('',18,'', false, 0, undefined, undefined, 'homme');
    }
}

