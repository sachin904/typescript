// Function to greet a user by name
function greet(name: string): string {
    return "hello " + name;
}

// Function to check if a number is even
function IsEven(num: number): boolean {
    return num % 2 === 0;
}

// Calling the functions
const ans = greet("sachin");
const ans2 = IsEven(4);
console.log(ans);
console.log(ans2);

// INTERFACES

// One interface can use another interface
interface Address {
    city?: string;    // Optional property
    country?: string; // Optional property
    pincode: number;  // Mandatory property
}

// User interface with an optional address property
interface User {
    name: string;
    age: number;
    address?: Address; // Optional property
}

// Example user object with minimal address details
let user2: User = {
    name: "akash",
    age: 20,
    address: {
        pincode: 21234
    }
}

// Function to display the pincode of a user (if available)
function DisplayPincode(user: User) {
    return user.address?.pincode;
}

// Another user object with full address details
let user: User = {
    name: "sachin",
    age: 14,
    address: {
        city: "ranchi",
        country: "india",
        pincode: 732883
    }
}

// Function to check if a user is legal (18+)
function IsLegal(user: User): boolean {
    return user.age >= 18;
}

// Checking the legality of a user
let result = IsLegal(user);
console.log(result);

// Displaying the pincode of a user
let pincode = DisplayPincode(user);
console.log(pincode);

// INTERFACE FOR EMPLOYEE ADDRESS
interface EmployeeAddress {
    address: Address;
}

// Employee object with address details
let employeeAddress: EmployeeAddress = {
    address: {
        city: "DELHI",
        country: "INDIA",
        pincode: 435632
    }
}

// Function to get the city of an employee
function EmployeeCity(employeeAddress: EmployeeAddress) {
    return employeeAddress.address.city;
}

// Fetching and logging the city
const city = EmployeeCity(employeeAddress);
console.log(city);

// CLASS IMPLEMENTING AN INTERFACE
interface People {
    name: string;
    age: number;
    isLegal(): boolean; // Function to check if age is above 18
}

// Class implementing the People interface
class Manager implements People {
    name: string;
    age: number;
    mobile: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
        this.mobile = 9832738283; // Default mobile number
    }

    // Function to check if the manager is legal (18+)
    isLegal() {
        return this.age > 18;
    }
}

// Subclass extending Manager
class God extends Manager {
    constructor(name: string, age: number) {
        super(name, age);
    }
}

// Creating objects and displaying their properties
let godObj = new God("rishu", 30);
let obj1 = new Manager("john", 30);

console.log(obj1.name);
console.log(obj1.age);
console.log(obj1.mobile);
console.log(obj1.isLegal());

console.log(godObj.name);
console.log(godObj.age);
console.log(godObj.isLegal());

// INTERFACE VS ABSTRACT CLASS

// Abstract class (cannot be instantiated directly)
abstract class User3 {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    abstract greet(): string; // Abstract method (must be implemented by subclasses)

    hello() {
        console.log("Hi everyone");
    }
}

// Concrete class implementing the abstract class
class Worker1 extends User3 {
    constructor(name: string) {
        super(name);
    }

    // Implementing the abstract method
    greet() {
        return "Hi " + this.name;
    }
}

// Creating an instance of Worker1 and calling methods
let work1 = new Worker1("akash");
console.log(work1.greet());
console.log(work1.hello());

// TYPES

// INTERSECTION TYPE
type User4 = {
    name: string;
    age: number;
};

type Student = {
    name: string;
    grade: string;
};

// Creating objects with different types
let user4: User4 = {
    name: "amit",
    age: 23
};

let user5: Student = {
    name: "amit",
    grade: "A"
};

// Intersection type (combining both types)
let user6: User4 & Student = {
    name: "amit",
    age: 34,
    grade: "A+"
};

// Function to display user age
function Disp(user6: User4 & Student) {
    return user6.age;
}

// UNION TYPE
type User7 = {
    name: string;
    age: number;
    mobile: number;
};

type Student1 = {
    name: string;
    grade: string;
    mobile: string;
};

// Creating objects with different types
let user9: User7 = {
    name: "amit",
    age: 23,
    mobile: 7832992832
};

let user0: Student1 = {
    name: "amit",
    grade: "A",
    mobile: "782893893"
};

// Union type (either User7 or Student1)
let union1: User7 | Student1 = {
    name: "amit",
    age: 23,
    mobile: 7832992832
};

let union2: User7 | Student1 = {
    name: "amit",
    grade: "a+",
    mobile: "389423293"
};

let union3: User7 | Student1 = {
    name: "amit",
    grade: "a+",
    mobile: 7832992832,
    age: 323
};

// Function to display name (works with both User7 and Student1)
function Disp1(user11: User7 | Student1) {
    return user11.name;
}

// ARRAY TYPE WITH INTERFACE
interface Users1 {
    name: string;
    age: number;
    address: string;
}

// Function to filter users who are 18+
function FilterUsers(users1: Users1[]) {
    let ans = [];
    for (let i = 0; i < users1.length; i++) {
        if (users1[i].age >= 18) {
            ans.push(users1[i]);
        }
    }
    return ans;
}

// Creating an array of users
let users1: Users1[] = [{
    name: "sanjeet",
    age: 18,
    address: "delhi"
}];

// Filtering and displaying users
const FilteredUser = FilterUsers(users1);
console.log(FilteredUser);
