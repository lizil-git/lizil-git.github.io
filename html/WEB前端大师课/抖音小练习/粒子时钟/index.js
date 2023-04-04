const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d', {
    willReadFrequently: true
});

// 粒子数量
const PARTICLE_NUM = 2000;
// 绘制文本
let text = '';
// 绘制文本字体大小
const FONT_SIZE = 180;
// 粒子对象形成数组
const particles = new Array(PARTICLE_NUM);
// 粒子颜色
const COLOR = '#5445544d';
// 随机尺寸
const SIZES = [2, 7];
// 开始移动时间
let startMoveTime = 0;

/**
 * 获取min到max之间的整数随机数
 * @param {Number} min 随机数下限
 * @param {Number} max 随机数上限
 * @returns 返回随机值
 */
function getRandom(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min)
}

// 初始化
function init() {
    // 初始化画布尺寸
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    // 初始化颗粒对象
    const cx = canvas.width / 2;
    const cy = canvas.height / 2;
    for (let i = 0; i < particles.length; i++) {
        const rad = Math.random() * 2 + Math.PI;
        const size = getRandom(SIZES[0], SIZES[1]);
        const r = canvas.height / 2;
        particles[i] = {
            sx: cx + Math.cos(rad) * r,
            sy: cy + Math.sin(rad) * r,
            x: cx + Math.cos(rad) * r,
            y: cy + Math.sin(rad) * r,
            size
        }
        drawParticle(particles[i])
    }
}

// 刷新绘制
function fps() {
    requestAnimationFrame((time) => {
        // 绘制的文本
        const curText = getText();
        if (curText !== text) {
            // 将新的文本赋值给当前文本
            text = curText;
            for (const p of particles) {
                p.sx = p.x;
                p.sy = p.y;
            }
            // 更新开始移动的时间点
            startMoveTime = Date.now();
        }
        // 获取像素点
        const imgData = getBMP();
        // 更新绘制
        update(imgData);
        fps();
    })
}
fps();

// 在画布上绘制一个点
function drawParticle(p) {
    ctx.fillStyle = COLOR;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI)
    ctx.closePath();
    ctx.fill()
}

// 获取当前时间
function getText() {
    return new Date().toTimeString().substring(0, 8);
}

// 绘制文本并得到像素点信息
function getBMP() {
    const { width, height } = canvas;
    clear();
    ctx.fillStyle = "#FFF";
    ctx.textBaseline = 'middle';
    ctx.font = `${FONT_SIZE}px '手札体-简', sans-serif`;
    const textWidth = ctx.measureText(text).width;
    ctx.fillText(text, (width - textWidth) / 2, height / 2);
    const imgData = ctx.getImageData(0, 0, width, height);
    return imgData;
}

// 更新绘制所有颗粒

function update(imgData) {
    clear();
    const { width, height, data } = imgData;
    // 取点
    const dis = 4; // 间隔距离
    const pxls = []; // 颗粒目标坐标
    for (let w = 0; w < width; w += dis) {
        for (let h = 0; h < height; h += dis) {
            const i = (w + h * width) * 4;
            if (data[i] > 10) {
                pxls.push([w, h])
            }
        }
    }
    const count = Math.min(particles.length, pxls.length);
    // 多少时间内到达位置
    const durtion = 400;
    // 现在过去的时间
    const timeSpan = Date.now() - startMoveTime;
    for (let i = 0; i < count; i++) {
        const p = particles[i];
        // 起始坐标
        const { sx, sy } = p;
        // 目标位置
        const [tx, ty] = pxls[i];
        const disX = tx - sx;
        const disY = ty - sy;
        let moveX = (disX / durtion) * timeSpan;
        let moveY = (disY / durtion) * timeSpan;
        if (Math.abs(moveX) > Math.abs(disX)) {
            moveX = disX;
        }
        if (Math.abs(moveY) > Math.abs(disY)) {
            moveY = disY;
        }
        p.x = sx + moveX;
        p.y = sy + moveY;
        drawParticle(p);
    }
}
// 清空画布
function clear() {
    const { width, height } = canvas;
    ctx.clearRect(0, 0, width, height)
}

init()
