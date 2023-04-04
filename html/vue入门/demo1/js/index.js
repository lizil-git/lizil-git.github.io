let vue = new Vue({
    el: '#app',
    data: {
        // 界面数据
        title: '淘宝',
        goods: goods
    },
    computed: {
        count: function () {
            return this.goods.reduce((p, n) => {
                return p + n.choose
            }, 0)
        }
    }
});


