export function printGenderWise(users, gender) {
    const out = [];
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.gender.toLowerCase() == gender.toLowerCase()) {
            out.push(element);
        }
    }
    return out;

}