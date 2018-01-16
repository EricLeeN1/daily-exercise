var module1 = new Object({
    _count:0,
    m1(params1,params2){
        //...
    },
    m2(params1,params2){
        //...
        console.log('====================================');
        console.log(params1,params2);
        console.log('====================================');
    }
});
module1.m2(1,2);
console.log('====================================');
console.log(module1._count);
console.log('====================================');