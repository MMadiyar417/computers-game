let FirstComputer = {
    name: 'Jarvis',
    guess: 1,            
    secretNumber: randomNumber(1, 100),   
    attempt: 0,
    fibonacci: [1, 2],  
    index: 1  
};

let SecondComputer = {
    name: 'Friday',
    guess: 50,           
    secretNumber: randomNumber(1, 100), 
    attempt: 0,          
    min: 1,               
    max: 100              
};

function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function logicOfJarvis() {
    FirstComputer.attempt++;
    console.log(`${FirstComputer.name}: Пробую число ${FirstComputer.guess}`);
    
    if (FirstComputer.guess === SecondComputer.secretNumber) {
        console.log(`Конец игры ${FirstComputer.name} угадал загаданное число ${SecondComputer.name} -  ${SecondComputer.secretNumber} за ${FirstComputer.attempt} попыток!`);
        return true;
    } else if (FirstComputer.guess < SecondComputer.secretNumber) {
        console.log(`${SecondComputer.name}: Больше`);
    } else {
        console.log(`${SecondComputer.name}: Меньше`);
    }

    let nextFibonacci = FirstComputer.fibonacci[FirstComputer.index] + FirstComputer.fibonacci[FirstComputer.index - 1];
    FirstComputer.fibonacci.push(nextFibonacci);
    FirstComputer.index++;

    FirstComputer.guess = FirstComputer.fibonacci[FirstComputer.index];
    return false;
}

function logicOfFriday() {
    SecondComputer.attempt++;
    console.log(`${SecondComputer.name}: Пробую число ${SecondComputer.guess}`);
    
    if (SecondComputer.guess === FirstComputer.secretNumber) {
        console.log(`Конец игры ${SecondComputer.name} угадал загаданное число ${FirstComputer.name} - ${FirstComputer.secretNumber} за ${SecondComputer.attempt} попыток!`);
        return true;
    } else if (SecondComputer.guess < FirstComputer.secretNumber) {
        console.log(`${FirstComputer.name}: Больше`);
        SecondComputer.min = SecondComputer.guess + 1;
    } else {
        console.log(`${FirstComputer.name}: Меньше`);
        SecondComputer.max = SecondComputer.guess - 1;
    }

    SecondComputer.guess = Math.floor((SecondComputer.min + SecondComputer.max) / 2);
    return false;
}

let gameOver = false;
while (!gameOver) {
    gameOver = logicOfJarvis();
    if (!gameOver) {
        gameOver = logicOfFriday();
    }
}
