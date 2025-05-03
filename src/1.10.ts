{
    // union types

    // type FrontendDEveloper = 'reactDeveloper' | 'HTML developer';
    // const newDeveloper: FrontendDEveloper = 'reactDeveloper';

    // type FullStackDeveloper = 'frontendDeveloper' | 'MERNStackDeveloper';

    // type Developer = FrontendDEveloper | FullStackDeveloper

    // type User = {
    //     name: string,
    //     gender: 'male' | 'female',
    //     email?: string,
    //     bloodGroup: 'O' | 'A' | 'B' | 'AB'
    // }
    // const user1: User = {
    //     name: 'Prangon',
    //     gender: 'male',
    //     bloodGroup: 'O'
    // }



    // intersection type

    type FrontendDeveloper = {
        skills : string[];
        designation1 : 'frontend developer'
    }
    type BackendDeveloper = {
        skills: string[];
        designation2: 'backend developer'
    }

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
    
    const fullStackDeveloper : FullStackDeveloper = {
        skills: ['React', 'Css', 'HTML'],
        designation1:'frontend developer',
        designation2: 'backend developer'
    }

}