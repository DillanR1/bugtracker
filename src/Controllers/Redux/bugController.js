import bugModel from '../Models/bugModel'

export function retrieveBugs(){
    let data = [];

    data.push(new bugModel({
        _id:123465789,
        name:"Crash on Load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V1.0",
        assigned:"Dillan Roby",
        creator:"John Doe",
        priority:1,
        time:"15:54",
    }))

    data.push(new bugModel({
        _id:123465789,
        name:"Won't Load",
        details:"Crashes after 3 seconds",
        steps:"Open application and it will crash",
        version:"V1.0",
        assigned:"Dillan Roby",
        creator:"John Doe",
        priority:3,
        time:"15:54",
    }))

    let sorted = data.sort((a,b) => {return a.priority - b.priority})
    return sorted;
}