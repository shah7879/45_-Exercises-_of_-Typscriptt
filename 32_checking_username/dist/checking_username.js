"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user_name = ['ShaHji', 'ZaHid', 'FaiSal', 'Ali', 'john'];
let new_user = ['Bilal', 'ShaHji', 'Dawood', 'Jameel', 'Ali'];
new_user.forEach(newusername => {
    let lowercase = newusername.toLocaleLowerCase();
    if (user_name.map(u_user => u_user.toLowerCase()).includes(lowercase)) {
        console.log(`The username ${newusername} is not available.please write a deffrent username`);
    }
    else {
        console.log(`The username ${newusername} is available.`);
    }
});
