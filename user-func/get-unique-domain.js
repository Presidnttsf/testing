export function getUniqueDomain(users) {
    let s = new Set();
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        let domainArr = element.email.split('.');
        if (domainArr.length > 2) {
            domainArr.splice(0, 1);
            let dom = domainArr.join('.');
            s.add("." + dom)

        } else {
            s.add("." + domainArr[1])
        }

    }
    return s;
}


