const robot = require("robotjs");
const ONE_TURN = 13425
const TWO_TURN = 26491
const keys = [0, 1, 2, 3, 4, 5, 6]
const delay = (time = 1000) => new Promise((res) => {
    setTimeout(() => {
        res()
    }, time)
})
const rollover = async () => {
    let index;
    const current = new Date().getTime()
    robot.setMouseDelay(100)
    for (index = 0; index < keys.length; index++) {
        await delay(1000)
        console.log('下一个，好')
        await delay(1000)
        robot.keyTap("4");
        await delay(5000)
        robot.keyTap("tab", ['alt'])
        await delay(1000)
        robot.keyTap("4");
        await delay(5000)
        robot.keyTap("tab", ['alt'])
        // if (index === 0 || (index ==4= (keys.length - 1))) {
        //     robot.mouseToggle('down', 'left')
        //     robot.mouseToggle('up', 'left')
        // } else {
        //     robot.mouseToggle('down', 'right')
        //     robot.mouseToggle('up', 'right')
        // }
 
// var screenSize = robot.getScreenSize();
// robot.moveMouseSmooth(screenSize.width-140, screenSize.height-20);	//移动鼠标
// robot.setMouseDelay(1000)	
// // robot.mouseClick();	 //鼠标点击
// robot.moveMouseSmooth(screenSize.width-140, screenSize.height-560);
// robot.setMouseDelay(1000)
// robot.mouseClick()
// robot.moveMouseSmooth(screenSize.width-140, screenSize.height-490);
// robot.setMouseDelay(1000)
// robot.mouseClick()

// opn('C:/Users/seagm/Desktop/小白入门手册.txt');	//自动打开程序（文件地址自己修改即可）
// opn('C:/Users/seagm/Desktop/GitHub Desktop')
// opn('C:/Users/seagm/Desktop/Visual Studio Code')
// opn('', {app: 'chrome'});
// setTimeout(()=>{opn('C:/Program Files (x86)/Tencent/WeChat/WeChat.exe')},2000)

    }

    await (1000)
    console.log(new Date().getTime() - current)
    console.log(`已获得${turn * TWO_TURN}点经验`)
    turn++;
}
let turn = 1;
rollover()
setInterval(rollover, 60000)
