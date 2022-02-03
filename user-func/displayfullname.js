import { SingleUserFullName } from "./printUserFn.js";

export function printFullName(users) {
    let fullName = [];
    console.log(users.length)
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        // fullName.push(element.id + ': ' + element.first_name + ' ' + element.last_name)
        fullName.push(SingleUserFullName(element))

    }

    return fullName;
}
