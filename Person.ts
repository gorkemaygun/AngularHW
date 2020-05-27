interface PersonOptions {
  firstName: string;
  lastName: string;
  age?: number;
  phoneNumber?: number;
  state?: string;
  zipcode?: number;
  occupation?: string;
  hourlyWage?: number;
}
class Person {
  private firstName: string;
  private lastName: string;
  private age: number;
  private phoneNumber: number;
  private state: string;
  private zipCode: number;
  private occupation: string;
  private hourlyWage: number;
  private certs: string[];

  constructor(
    firstName: string,
    lastName: string,
    age?: number,
    phoneNumber?: number,
    state?: string,
    zipCode?: number,
    occupation?: string,
    hourlyWage?: number
  ) {
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
  getHourlyWage(): number {
    return this.hourlyWage * 40;
  }
  addCerts(...certs: string[]): any {
    for (let cert in certs) {
      certs.push(cert);
    }
    this.certs = certs;
  }
  getOptions(Options: PersonOptions): Person {
    return new Person(Options.firstName, Options.lastName);
  }
  getFullName(): string {
    return this.firstName + " " + this.lastName;
  }
  getFullInfo(): string {
    return (
      this.firstName +
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
      this.getHourlyWage()
    );
  }
}
let gorkem = new Person(
  "Gorkem",
  "Aygun",
  26,
  3467141366,
  "NC",
  28202,
  "Developer",
  70
);
let jessica = new Person(
  "Jessica",
  "Gate",
  25,
  3548247898,
  "TX",
  77077,
  "Lawyer",
  100
);
let Jordan = new Person(
  "Jadon",
  "Sancho",
  25,
  1234567890,
  "NC",
  28201,
  "Doctor",
  120
);
document.getElementById("personInfo1").innerHTML = gorkem.getFullInfo();
document.getElementById("personInfo2").innerHTML = jessica.getFullInfo();
document.getElementById("personInfo3").innerHTML = gorkem
  .getOptions({
    firstName: "Gorkem",
    lastName: "Aygun",
  })
  .getFullName();
document.getElementById("personInfo4").innerHTML = Jordan.getFullInfo();
