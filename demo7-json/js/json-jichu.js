
var str = '{"name":"Eric Lee","age":26}';
var obj = JSON.parse(str,fun);
function fun(name,value) {
    console.log(name+":"+value);
    if (name=="age") {
        value = 14;
    }
    return value;
}
console.log(obj);
var jsonStr = JSON.stringify(obj);
console.log(jsonStr);