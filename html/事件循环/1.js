function delay(duration) {
    var start = Date.now();
    while(Date.now() - start < duration) {};
}


setTimeout(() => {
    console.log(1)
}, 0);
console.log(2)
// reslut  2 1
setTimeout(() => {
    console.log(1)
}, 0);

delay(1000)
console.log(2)

// result 2 1

setTimeout(() => {
    console.log(1)
}, 0);
Promise.resolve().then(() =>{
    console.log(2)
})
console.log(3)
//  result 3 2 1


function a() {
    console.log(1);
    Promise.resolve().then(function () {
        console.log(2);
    })
}
setTimeout(() => {
    console.log(3);
    Promise.resolve().then(a)
}, 0);
Promise.resolve().then(function() {
    console.log(4)
})
console.log(5);

// result 5 4 3 1 2

function a() {
    console.log(1);
    Promise.resolve().then(function () {
        console.log(2);
    })
}
setTimeout(() => {
    console.log(3);
}, 0);
Promise.resolve().then(a)
console.log(5);
// result 5 1 2 3
