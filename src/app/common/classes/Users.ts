/**
 * Users - creates an Object Users 
 */
export class Users {
    name: string = '';
    age = 18;
    email = '';
    diabetes = false;
    numberOfCup = 0;
    password?= '';
    md_number?: number;
    sexe?= '';
    data: Array<any>;


    /**
     * addCup - adds a cup of water to the user
     * return: void
     */
    addCup() {
        this.numberOfCup += 1;
    }

    /**
     * generateHour - generates a array of recommanded hours
     * to drink water
     * @param debutHour the debut hour 
     * @returns an array of numbers
     */
    generateHour(debutHour: number, totalNumOfCup: number) {
        debutHour = this.Hour;
        if (debutHour < 15) {
            while (debutHour < 20 && totalNumOfCup > 0) {
                this.arr.push(debutHour);
                debutHour++;
                totalNumOfCup--;
            }
        }

        return this.arr;
    }

    /**
     * getNextHour - gets the next hour notication
     * to drink water
     * @param arr: an array containing the hours
     */
    getNextHour(arr: Array<number>) {
        const lastElement = arr[arr.length - 1]
        let nextHour = this.arr.shift();

        if (nextHour! < lastElement) {
            nextHour!++;

        }
        return nextHour ? nextHour : 0;


    }
    /**
     * CupGoalSetter - sets the cupGoal
     * @param value: the new value of cupGoal
     */
    CupGoalSetter(value: number) {
        this.cupGoal = value;
    }
    /**
    * save - updated the modifications brought to the object
    * @returns void
    */
    save() {
        this.updated_at = new Date();
        this.data.push({
            ml: this.numberOfCup * 200,
            date: this.updated_at
        });
    }
    /**
    * reset - resets the cup counter to 0
    * @param debutHour - the debut hour
    * @returns void
    */
    reset(debutHour: number) {
        let remainingHours = 24 - debutHour;
        let seconds = 60000 * remainingHours;
        setInterval(() => {
            this.save();
            this.debut = new Date();
            this.numberOfCup = 0
        }, seconds)
    }



    public get cups() {
        return this.numberOfCup;
    }

    public get doctor() {
        if (this.md_number)
            return this.md_number;
        else return 0;
    }

    public set doctor(num: number) {
        this.md_number = num;
    }

    public get debutDate(): Date {

        return this.debut;
    }
    public get Hour(): number {
        return this.debut.getHours() + 1;
    }

    public get CupGoalGetter(): number {
        return this.cupGoal;
    }

    public get day(): string {
        let days = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimache'];
        let day = this.debut.getDay();
        return days[day - 1];
    }
    constructor(
        name: string,
        age: number,
        email: string,
        diabetes: boolean,
        numberOfCup: number,
        password?: string,
        md_number?: number,
        sexe?: string,
        data: Array<any> = [],
        private cupGoal: number = 0,
        private debut: Date = new Date(),
        private arr: Array<number> = [],
        public updated_at: Date = new Date(),

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
        this.data = data;
        this.reset(this.Hour)
    }
}

/**
 * Homme - creates an Object Homme inheriting from Users
 */
export class Homme extends Users {
    recommandedFluids = 11 * this.numberOfCup;

    constructor() {
        super('', 18, '', false, 0, undefined, undefined, 'homme');
    }
}