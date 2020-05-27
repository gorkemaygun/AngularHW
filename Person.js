var Person = /** @class */ (function () {
    function Person(firstName, lastName, age, phoneNumber, state, zipCode, occupation, hourlyWage) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.phoneNumber = phoneNumber;
        this.state = state;
        this.zipCode = zipCode;
        this.occupation = occupation;
        this.hourlyWage = hourlyWage;
        this.certs = this.certs;
    }
    Person.prototype.getHourlyWage = function () {
        return this.hourlyWage * 40;
    };
    Person.prototype.addCerts = function () {
        var certs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            certs[_i] = arguments[_i];
        }
        for (var cert in certs) {
            certs.push(cert);
        }
        this.certs = certs;
    };
    Person.prototype.getOptions = function (Options) {
        return new Person(Options.firstName, Options.lastName);
    };
    Person.prototype.getFullName = function () {
        return this.firstName + " " + this.lastName;
    };
    Person.prototype.getFullInfo = function () {
        return (this.firstName +
            " " +
            this.lastName +
            "\n " +
            this.age +
            "\n" +
            this.phoneNumber +
            "\n    " +
            this.zipCode +
            "," +
            this.state +
            "\n   " +
            this.occupation +
            " " +
            this.getHourlyWage());
    };
    return Person;
}());
var gorkem = new Person("Gorkem", "Aygun", 26, 3467141366, "NC", 28202, "Developer", 70);
var jessica = new Person("Jessica", "Gate", 25, 3548247898, "TX", 77077, "Lawyer", 100);
var Jordan = new Person("Jadon", "Sancho", 25, 1234567890, "NC", 28201, "Doctor", 120);
document.getElementById("personInfo1").innerHTML = gorkem.getFullInfo();
document.getElementById("personInfo2").innerHTML = jessica.getFullInfo();
document.getElementById("personInfo3").innerHTML = gorkem
    .getOptions({
    firstName: "Gorkem",
    lastName: "Aygun"
})
    .getFullName();
document.getElementById("personInfo4").innerHTML = Jordan.getFullInfo();
