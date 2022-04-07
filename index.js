var robot = require("robotjs");

// Type "Hello World".

const keys = [ 'q', 'v','v','v'

// ,'v','v','v','v','v','v','v'
,'e' ]
let index = 0;
const delay = (time = 1000) => new Promise((res) => {
    setTimeout(() => {
        res()
    }, time)
})
// const timer = setInterval(async ()=> {
//     let index;
//     const current = new Date().getTime()
//     for(index = 0;index < keys.length; index ++) {
//         console.log(index);
//         const keyCode = keys[index];
//         console.log(keyCode);
//         robot.keyTap(keyCode);
//         console.log(`触发${index}`)
//         await delay(2500)
//     }
//     console.log(new Date().getTime() - current)
// }, 40000)

const test = async () => {
    let index;
    const current = new Date().getTime()
    for(index = 0;index < keys.length; index ++) {
        await delay(1500)
        console.log(index);
        const keyCode = keys[index];
        console.log(keyCode);
        // robot.setKeyboardDelay(300);
        robot.typeString(keyCode);
        // robot.keyToggle(keyCode, 'down');
        // robot.keyToggle(keyCode, 'down');
        // robot.keyToggle(keyCode, 'down');
        // robot.keyToggle(keyCode, 'down');
        // robot.keyToggle(keyCode, 'down');
        // robot.keyToggle(keyCode, 'down');
        // await delay(500)
        // robot.keyTap(keyCode);
        await delay(100)
        // robot.keyToggle(keyCode, 'up');
        // await delay(500)
        
        // robot.keyToggle(keyCode, 'up');
        console.log(`触发${index}`)
        await delay(500)
    }
    console.log(new Date().getTime() - current)
}

test()