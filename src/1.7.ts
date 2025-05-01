{
    // spread operator
    //rest operator
    //destructuring


    // spread operator

    const bros1: string[] = ['Hasibul', 'Hossain'];
    const bros2: string[] = ['Prangon'];

    bros1.push(...bros2);

    const info1 = {
        person1: 'Hasibul',
        person2: 'Hossain',
        person3: 'Prangon'
    }

    const info2 = {
        p1: 'Neasher',
        p2: 'Maruf',
        p3: 'Hridoy'
    }

    const personList = {
        ...info1,
        ...info2
    }

    // rest operator

    // not the best way
    const greetFriends = (f1: string, f2: string, f3: string, f4: string, f5: string) => {
        console.log(`hi ${f1}, ${f2}, ${f3}, ${f4}`);
    }

    // greetFriends('Hasib', 'Hossain', 'Prangon', 'Abul', 'Babul')

    // best way 
    const greetFriends2 = (...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`));
        greetFriends2('Hasib', 'Hossain', 'Prangon', 'Abul', 'Babul')
    }

}