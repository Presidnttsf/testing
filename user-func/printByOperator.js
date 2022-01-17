export function printOperator(users, company) {
    let usersMobile = [];
    let obj = {
        airtel: "7",
        jio: "8",
        bsnl: "9",
    }
    for (let index = 0; index < users.length; index++) {
        const element = users[index];
        if (element.mobile.startsWith(obj[company.toLowerCase()]))
            usersMobile.push(element)

    }
    return usersMobile;
}
