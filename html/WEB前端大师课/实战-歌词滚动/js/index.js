/**
 * 解析歌词字符串
 * 得到一个歌词对象的数组
 * 每个对象: {time:开始时间, words: 歌词}
 */
function parseLrc() {
    let result = [];
    let lines = lrc.split('\n');
    for (let i = 0; i < lines.length; i++) {
        let str = lines[i];
        let [time, words] = str.split(']');
        let obj = {
            time: parseTime(time.substring(1)),
            words: words,
        }
        result.push(obj)
    }
    return result
}
/**
 * 将时间字符串转换成数字(秒)
 * @param {String} params 时间字符串 
 * @returns 
 */
function parseTime(params) {
    let [m, s] = params.split(':');
    return (+m * 6000 + +s * 100) / 100;
}
let lrcData = parseLrc();
let doms = {
    audio: document.querySelector('audio'),
    ul: document.querySelector('ul'),
    container: document.querySelector('.container')
}
/**
 * 计算出,在当前的情况下,lrcData数组中,应该高亮显示哪一个
 */
function findIndex() {
    let curTime = doms.audio.currentTime;
    for (let i = 0; i < lrcData.length; i++) {
        if (lrcData[i].time > curTime) {
            return --i
        }
    }
    return lrcData.length - 1
}

function createLrcElements() {
    let frag = document.createDocumentFragment(); //  文档片段
    for (let i = 0; i < lrcData.length; i++) {
        let li = document.createElement('li');
        li.textContent = lrcData[i].words;
        frag.appendChild(li);
    }
    doms.ul.appendChild(frag);
}
createLrcElements();

let containerHeight = doms.container.clientHeight;
let liHeight = doms.ul.children[0].clientHeight;
let maxOffset = doms.ul.clientHeight - containerHeight;
function setOffset() {
    let index = findIndex();
    let offset = liHeight * index + liHeight / 2 - containerHeight / 2;
    if (offset < 0) {
        offset = 0;
    }
    if (offset > maxOffset) {
        offset = maxOffset;
    }
    let aLi = doms.ul.querySelector('.active');
    if (aLi) {
        aLi.classList.remove('active');
    }
    let li = doms.ul.children[index];
    doms.ul.style.transform = `translateY(-${offset}px)`;
    if (li){
        doms.ul.children[index].classList.add('active')
    }
}
setOffset();
doms.audio.addEventListener('timeupdate', setOffset)