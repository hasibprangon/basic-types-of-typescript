{
    // destructuring
    const person = {
        id: 1,
        name: {
            firstName: 'Hasibul',
            middleName: 'Hossain',
            lastName: 'Prangon'
        },
        contactNo: '01600000',
        address: 'BD'
    };

    const { address, name : {middleName : midName} } = person; //here midName is a variable where middleName is stored

    const myFriends = ['hasib', 'Hossain', 'Prangon', 'Babul'];

    const [,, name, ...rest] = myFriends


}