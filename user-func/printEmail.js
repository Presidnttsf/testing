export function printEmail(users, domain) {
    let usersEmail = [];
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        let string = element.email;
        if (string.endsWith(domain))
            usersEmail.push(element)

    }
    return usersEmail
}

