const startCarCount = 1000;
const minCarCount = 10;
let day = 1;
let currentCarCount = startCarCount;

while (currentCarCount > minCarCount) {
    currentCarCount = Math.round(currentCarCount / 2);
    day++;
}

console.log(`Через ${day}...`);

const userOne = {
    role: 'admin',
    firstname: 'Дмитрий',
}

const userTwo = {
    role: 'manager',
    firstname: 'Артём',
}

function getDefaultRole() {
    // Тут какие-то сложные асинхронные действия.
    return 'admin'
}

function checkAccess(user, role = 'admin') {
    if (user.role === role){
        return true;
    }
        return false;
}

function showSuccesMessage(user) {
    console.log('#####################');
    console.log(`# Доступ открыт ${user.firstname} #`);
    console.log('#####################')
}

function showErrorMessage(user) {
    console.log('#####################');
    console.log(`# Доступ закрыт ${user.firstname} #`);
    console.log('#####################')
}

if (checkAccess(userOne, 'admin')) {
    showSuccesMessage(userOne);
} else {
    showErrorMessage(userOne);
}

function checkAccessAndShowMessage(user, role){
    if (checkAccess(user, role)) {
        showSuccesMessage(user);
    } else {
        showErrorMessage(user);
    }
} 

checkAccessAndShowMessage (userOne, 'admin')
checkAccessAndShowMessage (userTwo, 'manager')












function sayHi(){
    let text = 'Hi';
    console.log(text);
}





// function showMessage(user = "гость") {
   
//         console.log(`Привет, ${user}`)  
    
// }

// showMessage ('Дмитрий');
// showMessage ();

const sayHi2 = () => console.log('Привет');
sayHi2();

let showMessage = (text, n) => {
    let n=5;
    for (i = 1; i<=n; i++) {
        showMessage();
    }
}

 