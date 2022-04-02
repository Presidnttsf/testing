export const userCounter = function(allusers, userAge) {
    let count = 0;
    for (let index = 0; index < allusers.length; index++) {
        const user = allusers[index];
        if (user.age > userAge) {
            count++
        }
    }
    return count;
}



export const userCounterName = function(allusers, userAge) {
    let userArr = [];
    for (let index = 0; index < allusers.length; index++) {
        const user = allusers[index];
        if (user.age > userAge) {
            userArr.push('name = ' + user.first_name + " " + user.last_name + ' city: ' + user.city + " " + "IP ADD-" + user.ip_address);
        }
    }
    return userArr;
}


export const  userByFirstNameLength = function(allusers) {
    let userArr = [];
    for (let index = 0; index < allusers.length; index++) {
        const user = allusers[index];
        if (user.first_name.length == 5) {
            userArr.push(user);
        }
    }
    return userArr;
}


// export const sayHello = function (p1) {
//     console.log('Hello', p1)
//  }
export const pd = function (user) {
    console.log ('**BASIC INFO**');
    console.log ('hello',user.first_name, user.last_name, '!!');
    console.log ('you live in', user.city);
    console.log ('your ip adress is', user.ip_address);
    console.log ('**CONTACT INFO**');
    console.log ('Phone Number: ', user.phone);
    console.log ('Phone Number: ', user.email);

}

export const table = function (a,b) {

for (let index = 1; index <= b; index++) {
    console.log (a,' *', index, '=', a*index);
    
}

}

export const avg = function (a, b){
    console.log('calc =', (a + b)*2);
    return (a + b)/2;
                 
    
    }   

