export function getUniqueDomain(users) {
    let s = new Set();
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        let domain = element.email.split('.')[1];
        s.add("." + domain)
    }
    return s;
}