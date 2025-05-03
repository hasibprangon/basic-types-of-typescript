{

    // ternary operator || optional chaining || nullish coalescing operator

    const age: number = 18;

    if (age >= 18) {
        // console.log('adult');
    } else {
        // console.log('Not Adult');
    }

    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    console.log(isAdult);

    //  nullish coalescing

    // const isAuthenticated = undefined;
    const isAuthenticated = '';

    const result1 = isAuthenticated ?? 'Guest';
    const result2 = isAuthenticated ? isAuthenticated : 'Guest'
    // console.log({ result1 }, { result2 });

    // optional chaining

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress?: string;
            permanentAddress?: string;
        }
    }
    const user: User = {
        name: 'Hasib',
        address: {
            city: 'Kushtia',
            road: 'Bus stand Road, Khoksa',
            permanentAddress: 'Khoksa, Kushtia'
            // : 'Khoksa, Kushtia'
        }
    }

    const presentAddress = user?.address?.presentAddress ?? 'Pabna, Rajshahi, Bangladesh'
    console.log({presentAddress});

}