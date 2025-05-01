{
    // 

    // type alias

    type Students = {
        name: string;
        age: number;
        contactsNo?: number;
        gender: string;
        address: string
    };

    const student1: Students = {
        name: 'Kamal',
        age:12,
        gender: 'male',
        address: 'kst'

    }


    // type alias for function

    type Function = (x : number, y : number) => number

    const add : Function = (a, b) => a + b;

    // 
}