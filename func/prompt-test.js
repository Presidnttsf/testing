import prompt_sync from "prompt-sync";

const prompt = prompt_sync({ sigint: true });
//With readline

export function promptTest() {
    const count = prompt("Enter Number of users : ");
    console.log('Number of User : ', count);
    for (let index = 0; index < count; index++) {
        const userName = prompt("Enter name of user " + (index + 1) + ": ");
        console.log('User name is', userName);
    }
}
