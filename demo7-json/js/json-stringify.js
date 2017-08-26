var obj1 = {
    name: "Eric Lee",
    age: 24,
    a: undefined,
    f: function () {

    },
    b: [function () { }]
};
console.log(obj1);
var jsonstr1 = JSON.stringify(obj1, fun);
function fun(name, value) {
    if (name == "age") {
        value = 14;
    }
    return value;
}
console.log(jsonstr1);//=>{"name":"Eric Lee","age":24,"b":[null]}数组里面有函数的时候会被转换成null

var obj2 = {
    a: 1,
    b: 2,
    c: 3,
    d: 4
};
console.log(obj2);

var jsonstr2 = JSON.stringify(obj2, ["c", "a", "d"]);
// 第二个参数如果是函数，则每一组名称/值对都会调用此函数，该函数返回一个值，作为名称的值变换到结果字符串中，如果返回 undefined，则该成员被忽略。
// - 如果是数组，则只有数组中存在名称才能够被转换，且转换后顺序与数组中的值保持一致。
console.log(jsonstr2);
