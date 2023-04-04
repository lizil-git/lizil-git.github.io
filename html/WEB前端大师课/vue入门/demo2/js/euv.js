function observe(obj) {
    for (const key in obj) {
        let internalValue = obj[key];
        let funcs = new Set();
        Object.defineProperty(obj, key, {
            get: function () {
                if (window.__func) {
                    funcs.add(window.__func);
                }
                return internalValue;
            },
            set: function (val) {
                internalValue = val;
                // 自动调用依赖该属性的函数
                funcs.forEach(fn => {
                    fn();
                });
            }
        })
    }
}

function autoFn(fn) {
    window.__func = fn;
    fn();
    window.__func = null;
}