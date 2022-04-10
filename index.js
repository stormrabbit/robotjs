var robot = require("robotjs");

// Type "Hello World".

const keys = [ 0,1,2,3,4,5, 11 ]
const delay = (time = 1000) => new Promise((res) => {
    setTimeout(() => {
        res()
    }, time)
})
let turn = 1;
(async ()=> {
    let index;
    const current = new Date().getTime()
    robot.setMouseDelay(100)
    for(index = 0;index < keys.length; index ++) {
        await delay(3000)
        console.log('下一个，好')
        if(index === 0 || (index === (keys.length - 1))) {
            robot.mouseToggle('down', 'left')
            robot.mouseToggle('up', 'left')
        } else {
            robot.mouseToggle('down', 'right')
            robot.mouseToggle('up', 'right')
        }
    }

    await(1000)
    console.log(new Date().getTime() - current)
    console.log(`已获得${turn}轮经验`)
    turn ++;
})()
const timer = setInterval(async ()=> {
    let index;
    const current = new Date().getTime()
    robot.setMouseDelay(100)
    for(index = 0;index < keys.length; index ++) {
        await delay(3000)
        console.log('下一个，好')
        if(index === 0 || (index === (keys.length - 1))) {
            robot.mouseToggle('down', 'left')
            robot.mouseToggle('up', 'left')
        } else {
            robot.mouseToggle('down', 'right')
            robot.mouseToggle('up', 'right')
        }
    }

    await(1000)
    console.log(new Date().getTime() - current)
    console.log(`已获得${turn}轮经验`)
    turn ++;
}, 24500)
