/*
 * @Author: 李自力 lizili@yygongzi.com
 * @Date: 2023-03-06 10:12:10
 * @LastEditors: lizili lizili@yygongzi.com
 * @LastEditTime: 2023-03-25 08:56:10
 */
/**
 * 判断字符串是否符合email格式
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isEmail = (s) => {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(s)
}
/**
 * 判断字符串是否符合该模式的手机号格式
 * @param {String} s 需要校验的字符串
 * @param {String} model strict | simple | loose
 * @returns 返回校验结果
 */
export const isMobile = (s, model = 'loose') => {
    switch (model) {
        case 'strict':
            return /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1589]))\d{8}$/.test(s);
        case 'strict':
            return /^(?:(?:\+|00)86)?1[3-9]\d{9}$/.test(s);
        default:
            return /^(?:(?:\+|00)86)?1\d{10}$/.test(s);
    }
}
/**
 * 判断字符串是否符合座机号格式
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isPhone = (s) => {
    return /^(?:(?:\d{3}-)?\d{8}|^(?:\d{4}-)?\d{7,8})(?:-\d+)?$/.test(s)
}
/**
 * 判断字符串是否符合Url格式
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isUrl = (s) => {
    return /^(((ht|f)tps?):\/\/)?([^!@#$%^&*?.\s-]([^!@#$%^&*?.\s]{0,63}[^!@#$%^&*?.\s])?\.)+[a-z]{2,6}\/?/.text(s);
}
/**
 * 判断值是否为字符串
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isString = (s) => {
    return Object.prototype.toString.call(s).slice(8, -1) === 'String'
}
/**
 * 判断值是否为数字
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isNumber = (n) => {
    return Object.prototype.toString.call(n).slice(8, -1) === 'Number';
}
/**
 * 判断值是否为Boolean
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isBoolean = (b) => {
    return Object.prototype.toString.call(b).slice(8, -1) === 'Boolean';
}
/**
 * 判断值是否为Function
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isFunction = (f) => {
    return Object.prototype.toString.call(f).slice(8, -1) === 'Function';
}
/**
 * 判断值是否为null
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isNull = (n) => {
    return Object.prototype.toString.call(n).slice(8, -1) === 'Null';
}
/**
 * 判断值是否为Undefined
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isUndefined = (u) => {
    return Object.prototype.toString.call(u).slice(8, -1) === 'Undefined';
}
/**
 * 判断值是否为Object
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isObject = (o) => {
    return Object.prototype.toString.call(o).slice(8, -1) === 'Object';
}
/**
 * 判断值是否为Array
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isArray = (a) => {
    return Object.prototype.toString.call(a).slice(8, -1) === 'Array';
}
/**
 * 判断值是否为Date
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isDate = (t) => {
    return Object.prototype.toString.call(t).slice(8, -1) === 'Date';
}
/**
 * 判断值是否为RegExp
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isRegExp = (r) => {
    return Object.prototype.toString.call(r).slice(8, -1) === 'RegExp';
}
/**
 * 判断值是否为Error
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isError = (e) => {
    return Object.prototype.toString.call(e).slice(8, -1) === 'Error';
}
/**
 * 判断值是否为Promise
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isPromise = (r) => {
    return Object.prototype.toString.call(r).slice(8, -1) === 'Promise';
}
/**
 * 判断值是否为Symbol
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isSymbol = (r) => {
    return Object.prototype.toString.call(r).slice(8, -1) === 'Symbol';
}
/**
 * 判断值是否为Set
 * @param {String} s 需校验的字符串
 * @returns 返回校验结果
 */
export const isSet = (r) => {
    return Object.prototype.toString.call(r).slice(8, -1) === 'Set';
}
// 导出 浏览器用于 HTTP 请求的用户代理头的值
export const ua = navigator.userAgent.toLocaleLowerCase();
/**
 * 判断当前环境是否是微信浏览器
 * @returns 返回结果
 */
export const isInWX = () =>{
    return ua.match(/micromessenger/i) === 'micromessenger';
}
/**
 * 判断是否是移动端
 * @returns 返回结果
 */
export const isDeviceMobile = () => {
    return /Android|webos|iphone|balckberry/i.text(ua)
}
/**
 * 判断是否是是iOS
 * @returns 返回结果
 */
export const isIos = () => {
    var u = navigator.userAgent;
    if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) {  
        return false
    } else if (u.indexOf('iPhone') > -1) {
        return true
    } else if (u.indexOf('iPad') > -1) {
        return false
    } else if (u.indexOf('Windows Phone') > -1) {
        return false
    } else {
        return false
    }
}
/**
 * 判断是否是是PC端
 * @returns 返回结果
 */
export const isPC = () => {
    var userAgentInfo = navigator.userAgent;
    var Agents = ["Android", "iPhone",
        "SymbianOS", "Windows Phone",
        "iPad", "iPod"];
    var flag = true;
    for (var v = 0; v < Agents.length; v++) {
        if (userAgentInfo.indexOf(Agents[v]) > 0) {
            flag = false;
            break;
        }
    }
    return flag;
}
/**
 * 去除字符串中的html标签
 * @param {String} str 待转化的字符串
 * @returns 转化后的字符串
 */
export const removeHtmltag = (str) => {
    return str.replace(/<[^>]+>/g, '')
}
/**
 * 获取请求中的参数
 * @param {String} str 待提取的链接
 * @returns 参数对象
 */
export const getQueryString = (name) => {
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
    const search = window.location.search.split('?')[1] || '';
    const r = search.match(reg) || [];
    return r[2];
}
/**
 * 动态插入script标签
 * @param {String} src 引入js的链接
 */
export const injectScript = (src) => {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.src = src;
    const t = document.getElementsByTagName('script')[0];
    t.parentNode.insertBefore(s, t);
}
/**
 * 根据地址下载文件
 * @param {String} url 要下载的文件地址
 */
export const download = (url) => {
    var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
    var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;
    if (isChrome || isSafari) {
        var link = document.createElement('a');
        link.href = url;
        if (link.download !== undefined) {
            var fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
            link.download = fileName;
        }
        if (document.createEvent) {
            var e = document.createEvent('MouseEvents');
            e.initEvent('click', true, true);
            link.dispatchEvent(e);
            return true;
        }
    }
    if (url.indexOf('?') === -1) {
        url += '?download';
    }
    window.open(url, '_self');
}
/**
 * 判断指定标签是否存在指定class
 * @param {Element} el 指定标签
 * @param {String} className 检查的class
 */
export const hasClass = (el, className) => {
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
    return reg.test(el.className)
}
/**
 * 添加指定class到指定标签 
 * @param {Element} el 需添加class的标签
 * @param {String} className 添加到class
 */
export const addClass = (el, className) => {
    if (hasClass(el, className)) {
        return
    }
    let newClass = el.className.split(' ')
    newClass.push(className)
    el.className = newClass.join(' ')
}
/**
 * 移除指定标签的指定class
 * @param {Element} el 需移除class的标签
 * @param {String} className 移除的class
 * @returns 
 */
export const removeClass = (el, className) => {
    if (!hasClass(el, className)) {
        return
    }
    let reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
    el.className = el.className.replace(reg, ' ')
}
/**
 * 获取滚动的坐标
 * @param {Element} el 获取标签滚动的距离
 * @returns 返回{距离左边的距离,距离上边的距离}
 */
export const getScrollPosition = (el = window) => ({
    x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
    y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});
/**
 * 判断标签是否在可视窗口
 * @param {Element} el 需判断的标签
 * @param {Boolean} partiallyVisible 
 * @returns 
 */
export const elementIsVisibleInViewport = (el, partiallyVisible = false) => {
    const { top, left, bottom, right } = el.getBoundingClientRect();
    const { innerHeight, innerWidth } = window;
    return partiallyVisible
        ? ((top > 0 && top < innerHeight) || (bottom > 0 && bottom < innerHeight)) &&
        ((left > 0 && left < innerWidth) || (right > 0 && right < innerWidth))
        : top >= 0 && left >= 0 && bottom <= innerHeight && right <= innerWidth;
}
/**
 * 将值赋值到粘贴板
 * @param {String} value 赋值到粘贴板的内容
 */
export const copyTextToClipboard = (value) => {
    var textArea = document.createElement("textarea");
    textArea.style.background = 'transparent';
    textArea.value = value;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        var successful = document.execCommand('copy');
    } catch (err) {
        console.log('Oops, unable to copy');
    }
    document.body.removeChild(textArea);
}
/**
 * 判断值是否是某类型
 * @param {String} str 需判断的值
 * @param {String} type 需判断的类型
 * @returns 返回判断结果
 */
export const checkStr = (str, type) => {
    switch (type) {
        case 'phone':   //手机号码
            return /^1[3|4|5|6|7|8|9][0-9]{9}$/.test(str);
        case 'tel':     //座机
            return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
        case 'card':    //身份证
            return /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(str);
        case 'pwd':     //密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线
            return /^[a-zA-Z]\w{5,17}$/.test(str)
        case 'postal':  //邮政编码
            return /[1-9]\d{5}(?!\d)/.test(str);
        case 'QQ':      //QQ号
            return /^[1-9][0-9]{4,9}$/.test(str);
        case 'email':   //邮箱
            return /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(str);
        case 'money':   //金额(小数点2位)
            return /^\d*(?:\.\d{0,2})?$/.test(str);
        case 'URL':     //网址
            return /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/.test(str)
        case 'IP':      //IP
            return /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/.test(str);
        case 'date':    //日期时间
            return /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2})(?:\:\d{2}|:(\d{2}):(\d{2}))$/.test(str) || /^(\d{4})\-(\d{2})\-(\d{2})$/.test(str)
        case 'number':  //数字
            return /^[0-9]$/.test(str);
        case 'english': //英文
            return /^[a-zA-Z]+$/.test(str);
        case 'chinese': //中文
            return /^[\\u4E00-\\u9FA5]+$/.test(str);
        case 'lower':   //小写
            return /^[a-z]+$/.test(str);
        case 'upper':   //大写
            return /^[A-Z]+$/.test(str);
        case 'HTML':    //HTML标记
            return /<("[^"]*"|'[^']*'|[^'">])*>/.test(str);
        default:
            return true;
    }
}
/**
 * 严格的身份证校验
 * @param {String} sId 身份号
 * @returns 返回校验结果
 */
export const isCardID = (sId) => {
    if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(sId)) {
        console.log('你输入的身份证长度或格式错误')
        return false
    }
    //身份证城市
    var aCity = { 11: "北京", 12: "天津", 13: "河北", 14: "山西", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "黑龙江", 31: "上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36: "江西", 37: "山东", 41: "河南", 42: "湖北", 43: "湖南", 44: "广东", 45: "广西", 46: "海南", 50: "重庆", 51: "四川", 52: "贵州", 53: "云南", 54: "西藏", 61: "陕西", 62: "甘肃", 63: "青海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "香港", 82: "澳门", 91: "国外" };
    if (!aCity[parseInt(sId.substr(0, 2))]) {
        console.log('你的身份证地区非法')
        return false
    }

    // 出生日期验证
    var sBirthday = (sId.substr(6, 4) + "-" + Number(sId.substr(10, 2)) + "-" + Number(sId.substr(12, 2))).replace(/-/g, "/"),
        d = new Date(sBirthday)
    if (sBirthday != (d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate())) {
        console.log('身份证上的出生日期非法')
        return false
    }

    // 身份证号码校验
    var sum = 0,
        weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2],
        codes = "10X98765432"
    for (var i = 0; i < sId.length - 1; i++) {
        sum += sId[i] * weights[i];
    }
    var last = codes[sum % 11]; //计算出来的最后一位身份证号码
    if (sId[sId.length - 1] != last) {
        console.log('你输入的身份证号非法')
        return false
    }

    return true
}
/**
 * 将数字转换成中文数值
 * @param {String} num 待转换的数字
 * @returns 返回中文
 */
export const numberToChinese = (num) => {
    var AA = new Array("零", "一", "二", "三", "四", "五", "六", "七", "八", "九", "十");
    var BB = new Array("", "十", "百", "仟", "萬", "億", "点", "");
    var a = ("" + num).replace(/(^0*)/g, "").split("."),
        k = 0,
        re = "";
    for (var i = a[0].length - 1; i >= 0; i--) {
        switch (k) {
            case 0:
                re = BB[7] + re;
                break;
            case 4:
                if (!new RegExp("0{4}//d{" + (a[0].length - i - 1) + "}$")
                    .test(a[0]))
                    re = BB[4] + re;
                break;
            case 8:
                re = BB[5] + re;
                BB[7] = BB[5];
                k = 0;
                break;
        }
        if (k % 4 == 2 && a[0].charAt(i + 2) != 0 && a[0].charAt(i + 1) == 0)
            re = AA[0] + re;
        if (a[0].charAt(i) != 0)
            re = AA[a[0].charAt(i)] + BB[k % 4] + re;
        k++;
    }

    if (a.length > 1) // 加上小数部分(如果有小数部分)
    {
        re += BB[6];
        for (var i = 0; i < a[1].length; i++)
            re += AA[a[1].charAt(i)];
    }
    if (re == '一十')
        re = "十";
    if (re.match(/^一/) && re.length == 3)
        re = re.replace("一", "");
    return re;
}
/**
 * 将数字转换为大写金额
 * @param {String | Number} Num 待转换数字
 * @returns 大写金额写法
 */
export const changeToChinese = (Num) => {
    if (typeof Num == "number") {
        Num = new String(Num);
    };
    Num = Num.replace(/,/g, "") //替换tomoney()中的“,”
    Num = Num.replace(/ /g, "") //替换tomoney()中的空格
    Num = Num.replace(/￥/g, "") //替换掉可能出现的￥字符
    if (isNaN(Num)) { //验证输入的字符是否为数字
        //alert("请检查小写金额是否正确");
        return "";
    };
    //字符处理完毕后开始转换，采用前后两部分分别转换
    var part = String(Num).split(".");
    var newchar = "";
    //小数点前进行转化
    for (var i = part[0].length - 1; i >= 0; i--) {
        if (part[0].length > 10) {
            return "";
            //若数量超过拾亿单位，提示
        }
        var tmpnewchar = ""
        var perchar = part[0].charAt(i);
        switch (perchar) {
            case "0":
                tmpnewchar = "零" + tmpnewchar;
                break;
            case "1":
                tmpnewchar = "壹" + tmpnewchar;
                break;
            case "2":
                tmpnewchar = "贰" + tmpnewchar;
                break;
            case "3":
                tmpnewchar = "叁" + tmpnewchar;
                break;
            case "4":
                tmpnewchar = "肆" + tmpnewchar;
                break;
            case "5":
                tmpnewchar = "伍" + tmpnewchar;
                break;
            case "6":
                tmpnewchar = "陆" + tmpnewchar;
                break;
            case "7":
                tmpnewchar = "柒" + tmpnewchar;
                break;
            case "8":
                tmpnewchar = "捌" + tmpnewchar;
                break;
            case "9":
                tmpnewchar = "玖" + tmpnewchar;
                break;
        }
        switch (part[0].length - i - 1) {
            case 0:
                tmpnewchar = tmpnewchar + "元";
                break;
            case 1:
                if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                break;
            case 2:
                if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                break;
            case 3:
                if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                break;
            case 4:
                tmpnewchar = tmpnewchar + "万";
                break;
            case 5:
                if (perchar != 0) tmpnewchar = tmpnewchar + "拾";
                break;
            case 6:
                if (perchar != 0) tmpnewchar = tmpnewchar + "佰";
                break;
            case 7:
                if (perchar != 0) tmpnewchar = tmpnewchar + "仟";
                break;
            case 8:
                tmpnewchar = tmpnewchar + "亿";
                break;
            case 9:
                tmpnewchar = tmpnewchar + "拾";
                break;
        }
        var newchar = tmpnewchar + newchar;
    }
    //小数点之后进行转化
    if (Num.indexOf(".") != -1) {
        if (part[1].length > 2) {
            // alert("小数点之后只能保留两位,系统将自动截断");
            part[1] = part[1].substr(0, 2)
        }
        for (i = 0; i < part[1].length; i++) {
            tmpnewchar = ""
            perchar = part[1].charAt(i)
            switch (perchar) {
                case "0":
                    tmpnewchar = "零" + tmpnewchar;
                    break;
                case "1":
                    tmpnewchar = "壹" + tmpnewchar;
                    break;
                case "2":
                    tmpnewchar = "贰" + tmpnewchar;
                    break;
                case "3":
                    tmpnewchar = "叁" + tmpnewchar;
                    break;
                case "4":
                    tmpnewchar = "肆" + tmpnewchar;
                    break;
                case "5":
                    tmpnewchar = "伍" + tmpnewchar;
                    break;
                case "6":
                    tmpnewchar = "陆" + tmpnewchar;
                    break;
                case "7":
                    tmpnewchar = "柒" + tmpnewchar;
                    break;
                case "8":
                    tmpnewchar = "捌" + tmpnewchar;
                    break;
                case "9":
                    tmpnewchar = "玖" + tmpnewchar;
                    break;
            }
            if (i == 0) tmpnewchar = tmpnewchar + "角";
            if (i == 1) tmpnewchar = tmpnewchar + "分";
            newchar = newchar + tmpnewchar;
        }
    }
    while (newchar.search("零零") != -1)
        newchar = newchar.replace("零零", "零");
    newchar = newchar.replace("零亿", "亿");
    newchar = newchar.replace("亿万", "亿");
    newchar = newchar.replace("零万", "万");
    newchar = newchar.replace("零元", "元");
    newchar = newchar.replace("零角", "");
    newchar = newchar.replace("零分", "");
    if (newchar.charAt(newchar.length - 1) == "元") {
        newchar = newchar + "整"
    }
    return newchar;
}
/**
 * 去除空格
 * @param {String} str 待转换的字符串
 * @param {Number} type  1-所有空格 2-前后空格 3-前空格 4-后空格
 * @returns 
 */
export const trim = (str, type) => {
    type = type || 1
    switch (type) {
        case 1:
            return str.replace(/\s+/g, "");
        case 2:
            return str.replace(/(^\s*)|(\s*$)/g, "");
        case 3:
            return str.replace(/(^\s*)/g, "");
        case 4:
            return str.replace(/(\s*$)/g, "");
        default:
            return str;
    }
}
/**
 * 字符转换
 * @param {String} str 待转化的字符串
 * @param {Number} type 1:首字母大写 2：首字母小写 3：大小写转换 4：全部大写 5：全部小写
 * @returns 
 */
export const changeCase = (str, type) => {
    type = type || 4
    switch (type) {
        case 1:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toUpperCase() + word.substring(1).toLowerCase();

            });
        case 2:
            return str.replace(/\b\w+\b/g, function (word) {
                return word.substring(0, 1).toLowerCase() + word.substring(1).toUpperCase();
            });
        case 3:
            return str.split('').map(function (word) {
                if (/[a-z]/.test(word)) {
                    return word.toUpperCase();
                } else {
                    return word.toLowerCase()
                }
            }).join('')
        case 4:
            return str.toUpperCase();
        case 5:
            return str.toLowerCase();
        default:
            return str;
    }
}
/**
 * 在字符串中插入新字符串
 * @param {String} soure 原字符串
 * @param {Number} index 插入位置坐标
 * @param {String} newStr 插入的字符串
 * @returns 返回插入后的字符串
 */
export const insertStr = (soure, index, newStr) => {
    var str = soure.slice(0, index) + newStr + soure.slice(index);
    return str;
}

/**
 * 检测密码强度
 * @param {String} str 检查的字符串
 * @returns 返回密码等级
 */
export const checkPwd = (str) => {
    var Lv = 0;
    if (str.length < 6) {
        return Lv
    }
    if (/[0-9]/.test(str)) {
        Lv++
    }
    if (/[a-z]/.test(str)) {
        Lv++
    }
    if (/[A-Z]/.test(str)) {
        Lv++
    }
    if (/[\.|-|_]/.test(str)) {
        Lv++
    }
    return Lv;
}
/**
 * 向get请求添加参数
 * @param {String} url 原请求地址
 * @param {String} key 
 * @param {any} value 
 * @returns 新get请求地址
 */
export const appendQuery = (url, key, value) => {
    var options = key;
    if (typeof options == 'string') {
        options = {};
        options[key] = value;
    }
    options = $.param(options);
    if (url.includes('?')) {
        url += '&' + options
    } else {
        url += '?' + options
    }
    return url;
}