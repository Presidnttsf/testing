//make an array using prompt method.

import prompt_sync from "prompt-sync";

const prompt = prompt_sync({ sigint: true });


function makeArr(n) {

    const count = prompt("Enter Number of users : ");
    console.log('Number of User : ', count);
    let out = [];

    for (let index = 0; index < count; index++) {
        const userName = prompt("Enter name of user " + (index + 1) + ": ");
        out.push(userName);
    }
    console.log(out)
    return out.map((e) => { return 'Hello!!! ' + e });
}

console.log(makeArr());