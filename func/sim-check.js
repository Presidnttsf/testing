import prompt_sync from "prompt-sync";
const prompt = prompt_sync({ sigint: true });

export function simCheck() {
    const count = prompt("Enter your mobile number: ");
    console.log('Enter your mobile number: ', count);
    if (count.length != 10)
        return "invalid number"

    if (count.startsWith(90)) {
        return "JIO"
    }
    if (count.startsWith(93)) {
        return "Reliance"
    }
    if (count.startsWith(94)) {
        return "Airtel"
    }

}   
