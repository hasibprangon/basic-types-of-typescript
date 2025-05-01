// Learning Function
// Normal Function

function add(num1: number, num2: number): number {
    return num1 + num2;
}
// add(2, 2)

// Arrow Function

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object ==> function ==> method
const person: {
    myName: string;
    balance: number;
    addBalance(balance: number): number;
} = {
    myName: 'Prangon',
    balance: 0,
    addBalance(balance: number): number {
        return this.balance + balance;
    }
};


const person2: {
    myName: string;
    balance: number;
    addBalance2(balance: number): string
} = {
    myName: 'Hasib',
    balance: 200,
    addBalance2(balance) {
        return `My balance is ${this.balance + balance}`;
    }
};

const arr: number[] = [1, 2, 3, 4, 5];

const newArr : number[] = arr.map((elem : number) : number =>
    elem * elem)

