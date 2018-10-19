export class friends {
    _name: string;
    age: number; 
    email: string;
    bestfriend: boolean; 

    constructor(n: string, a: number, e: string, b: boolean) {
        this._name =n;
        this.age = a;
        this.email =e;
        this.bestfriend =b;
    

   
    }
   about():string {
        return `name: ${this._name}, age: ${this.age}, email: ${this.email}, bestfriend ${this.bestfriend}`;
    }
    
    
}



let phil: friends = new friends("phil", 27, "phil@gmail.com",false);
let angie: friends = new friends("angie", 37, "ngie@gmail.com",true);
let emilie: friends = new friends("emilie", 37, "emilie@gmail.com",true);
let robert: friends = new friends("robert", 32, "robert@gmail.com",false);
let lori : friends = new friends("lori", 20, "lori@gmail.com",true);


let f2: friends[] = [];
f2.push(phil);
f2.push(angie);
f2.push(emilie);
f2.push(robert);
f2.push (lori);






