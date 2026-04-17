// with instanceof
var User = /** @class */ (function () {
    function User() {
        this.name = 'Naresh';
    }
    return User;
}());
var Admin = /** @class */ (function () {
    function Admin() {
        this.role = 'admin';
    }
    return Admin;
}());
function checkRole(person) {
    // console.log(person.role) direct ga error vastundi ,if user passed
    if (person instanceof Admin) {
        console.log(person.role); // role
    }
    else {
        console.log(person.name); // 
    }
}
var user = {
    name: "Naresh"
};
checkRole(user);
function makeSound(animal) {
    if ('bark' in animal) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
var dog = {
    bark: function () {
        console.log("barkerd");
    }
};
makeSound(dog);
function handleResponse(res) {
    if ('data' in res) {
        console.log(res.data);
        return;
    }
    console.log(res.error);
}
var success = {
    data: 'There is a data available in the db'
};
handleResponse(success);
