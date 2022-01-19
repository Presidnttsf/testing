export function BrCheckAmd(string) {
    // let openArr = ['(', '{', '['];
    // let closeArr = [')', '}', ']'];
    let obj = {
        '(': ')',
        '[': ']',
        '{': '}',

    }
    let openArr = Object.keys(obj);
    let closeArr = Object.values(obj);
    let stack = [];
    for (let index = 0; index < string.length; index++) {
        const e = string[index];
        if (openArr.includes(e)) {
            stack.push(e)
        }
        if (closeArr.includes(e)) {
            let a = stack.pop();
            if (e != obj[a])
                return false;
        }

    }
    if (stack.length === 0) {
        return true;
    } else { return false }

};