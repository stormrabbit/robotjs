var robot = require("robotjs");

// Type "Hello World".

const keys = ['space', 'f1', 'a', ]
let index = 0;
const timer = setInterval(()=> {
    const keyIndex = Math.floor(Math.random() * keys.length);
    console.log(keyIndex);
    const keyCode = keys[keyIndex];
    console.log(keyCode);
    robot.keyTap(keyCode);
    console.log(`触发${index}`)
    if(index === 1000) {
        clearInterval(timer);
    }
    index ++;
}, 10000)