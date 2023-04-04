let user = {
    name: '李自力',
    birth: '2022-09-10'
}
observe(user)
function showFristName () {
    console.log('showFristName');
    document.querySelector('#firstName').textContent = `姓: ${user.name[0]}`
}
function showLastName () {
    console.log('showLastName');
    document.querySelector('#lastName').textContent = `名: ${user.name.slice(1)}`
}
function showAge () {
    console.log('showAge');
    let birthDay = new Date(user.birth);
    var today = new Date();
    today.setHours(0);
    today.setMinutes(0);
    today.setMilliseconds(0);
    document.querySelector('#age').textContent = `年龄: ${today.getFullYear() - birthDay.getFullYear()}`
}
autoFn(showAge)
autoFn(showFristName)
autoFn(showLastName)