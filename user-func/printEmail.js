export function printEmail(users, email) {
    const arr = [];
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.email.endsWith(email)) {
            arr.push(element);
        }
    }
    return arr;
}