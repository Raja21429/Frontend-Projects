class User{
    constructor(name,age){
        this.name = name;
        this.age = age;
    
    }
    login() {

        console.log(`Hi ${this.name}`);
        console.log("you are logged in");
    }
        
        
    

     logout() {
        console.log("you are logged out");
        
    }

}

// let user1 = new User('Raja',22)
// user1.login()

class Paid extends User{
    
    constructor(name,age){
        super(name,age);
        this.paid = `100GB`
    }

    //override -->polymorphisy
    login(){
        console.log(`Hello special customer ${this.name} ${this.age} you will get ${this.paid}`);
    }


}
let paiduser1 = new Paid('Ramesh',23)
paiduser1.login()
paiduser1.logout()