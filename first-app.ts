let userName: string = "Saumya";

const API_KEY = "abc";

let number: number;
number = 34;

let isValid: boolean;
isValid = true;

type StringOrNum = string | number;
let userID: StringOrNum = "abc1";
userID = 123;

type User = {
  name: string;
  age: number;
  id: string | number;
  isAdmin: boolean;
};
let user: User;
user = {
  name: "Vidu",
  age: 34,
  id: "123",
  isAdmin: true,
};

// let hobbies: Array<string>;
let hobbies: string[];
hobbies = ["Sports", "Cooking", "Reading"];

function add(a: number, b: number): number {
  const result = a + b;
  console.log(result);

  return result;
}

type AddFn = (a: number, b: number) => number;

function calculate(a: number, b: number, calFn: AddFn) {
  calFn(a, b);
}

calculate(2, 3, add);

interface Credentials {
  password: string;
  email: string;
}

let creds: Credentials;
creds = {
  password: "abc",
  email: "abc@gmail.com",
};

class AuthCredentials implements Credentials {
  email: string;
  password: string;
  userName: string;
}
function login(credentials: Credentials) {}
login(new AuthCredentials());

type Admin = {
  permission: string[];
};
type AppUser = {
  userName: string;
};
type AppAdmin = Admin & AppUser;
let admin: AppAdmin = {
  permission: ["login"],
  userName: "Saumya",
};

interface Student {
  permission: string[];
}
interface AppStudent {
  userName: string;
}
interface AppAdminstudent extends Student, AppStudent {}
let pupil: AppAdminstudent;
pupil = {
  permission: ["admin"],
  userName: "Amila",
};

//literal types
type Role = "admin" | "user" | "editor";
let role: Role;
role = "admin";
role = "user";

function performAction(action: string | number, role: Role) {
  if (role === "admin" && typeof action === "string") {
  }
}

//Generic types
let roles: Array<Role>;
roles = ["admin", "user"];

type DataStorage<T> = {
  storage: T[];
  add: (data: T) => void;
};

const textStorage: DataStorage<string> = {
  storage: ["cheese"],
  add(data) {
    this.storage.push(data);
  },
};

const userStorage: DataStorage<User> = {
  storage: [],
  add(user) {},
};

function merge<T, U>(a: T, b: U){
    return{
        ...a,
        ...b
    };
}
const newUser = merge<{name: string},{age: number}>({name: "Saumya"},{age: number});
newUser.name;