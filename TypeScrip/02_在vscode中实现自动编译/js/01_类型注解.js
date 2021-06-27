/**
 * 类型注解:是一种轻量级的为函数或者变量添加的约束
 * */
(function () {
    function showMsg(str) {
        return 'hello,world!' + str;
    }
    var msg = 'WangY';
    console.log(showMsg(msg));
})();
