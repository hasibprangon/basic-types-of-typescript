// Reference type --> Object

const user : {
readonly platform : string;   //type ==> literal types (readonly = access modifier)
firstName : string;
middleName ?: string;    //optional
lastName : string;
isMarried ?: boolean;
} = {
    platform : 'Programming Hero',
    firstName: 'Hasibul',
    // middleName: 'Hossain',
    lastName: 'Prangon',
    isMarried : true
};

// user.platform = 'ph';
