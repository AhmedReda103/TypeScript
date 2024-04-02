//!task1
let arr1: number[] = [1, 2, 3, 4];

//!task2
let arr2: number[] | string[];
arr2 = [1, 2, 3];
arr2 = ["a", "b", "c"];
for (let i = 0; i < arr2.length; i++) {
  console.log(arr2[i]);
}

//!task3
let num: number | boolean;
num = 1;
num = true;

//!task4
function handling(x1?: number, x2?: number): number {
  if (x2 !== undefined && x1 !== undefined) return x1 + x2;
  if (x1 !== undefined) return x1;
  return 0;
}
handling();

//!task5
interface IEmployee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

class Employee implements IEmployee {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };

  constructor(employeeData: IEmployee) {
    this.id = employeeData.id;
    this.name = employeeData.name;
    this.username = employeeData.username;
    this.email = employeeData.email;
    this.address = employeeData.address;
  }

  viewAddress(): void {
    console.log("Manager Address:");
    console.log(this.address);
  }
}

const employeeData: IEmployee = {
  id: 1,
  name: "Leanne Graham",
  username: "Bret",
  email: "Sincere@april.biz",
  address: {
    street: "Kulas Light",
    suite: "Apt. 556",
    city: "Gwenborough",
    zipcode: "92998-3874",
    geo: {
      lat: "-37.3159",
      lng: "81.1496",
    },
  },
};

const employee = new Employee(employeeData);
console.log(employee.username); // Output: Bret

//!task6
class Manager extends Employee {
  constructor(managerData: IEmployee) {
    super(managerData);
  }
}

const managerData: IEmployee = {
  id: 2,
  name: "ahmed",
  username: "ahmedreda",
  email: "ahmed@gmail.com",
  address: {
    street: "123 abo bakr",
    suite: "101",
    city: "Cairo City",
    zipcode: "12345",
    geo: {
      lat: "40",
      lng: "53",
    },
  },
};

const manager = new Manager(managerData);

manager.viewAddress();





//! task7

interface IAccount {
  dateOfOpening: Date;
  addCustomer:(customer: string) => void;
  removeCustomer:(customer: string) => void;
}

class Account {
  accountNum: number;
  balance: number;


  constructor(accountNum: number, balance: number) {
    this.accountNum = accountNum;
    this.balance = balance;
  }

  debitAmount(amount: number): string {
    if (this.balance >= amount) {
      this.balance -= amount;
      console.log(
        `${amount} debited successfully. New balance: ${this.balance}`
      );
      return `${amount} debited successfully. New balance: ${this.balance}`;
    } else {
      console.log("Insufficient balance.");
      return "Insufficient balance.";
    }
  }

  creditAmount(amount: number): string {
    this.balance += amount;
    console.log(
      `${amount} credited successfully. New balance: ${this.balance}`
    );
    return `${amount} credited successfully. New balance: ${this.balance}`;
  }

  getBalance(): number {
    return this.balance;
  }
}

class SavingAccount extends Account implements IAccount {
  minBalance: number;
	dateOfOpening: Date;
	
  constructor(accountNum: number, balance: number, minBalance: number , dateOfOpening :Date) {
    super(accountNum, balance);
		this.minBalance = minBalance;
		this.dateOfOpening = dateOfOpening
  }
  addCustomer(customer: string): void {
    console.log(`Customer ${customer} added to Saving Account.`);
  }
	removeCustomer(customer: string): void {
		console.log(`Customer ${customer} removed from Saving Account.`);
	}
}

class CurrentAccount extends Account implements IAccount {
  interestRate: number;
	dateOfOpening: Date;
	
  constructor(accountNum: number, balance: number, interestRate: number, dateOfOpening :Date) {
    super(accountNum, balance);
		this.interestRate = interestRate;
		this.dateOfOpening = dateOfOpening
  }

  addCustomer(customer: string): void {
    console.log(`Customer ${customer} added to Current Account.`);
  }

  removeCustomer(customer: string): void {
    console.log(`Customer ${customer} removed from Current Account.`);
  }
}


const savingAccount = new SavingAccount(101, 5000, 1000, new Date());
savingAccount.addCustomer("John");
console.log("Saving Account Balance:", savingAccount.getBalance());
savingAccount.debitAmount(2000);
savingAccount.creditAmount(3000);

const currentAccount = new CurrentAccount(102, 10000, 0.05, new Date());
currentAccount.addCustomer("Jane");
console.log("Current Account Balance:", currentAccount.getBalance());
currentAccount.debitAmount(5000);
currentAccount.creditAmount(7000);
