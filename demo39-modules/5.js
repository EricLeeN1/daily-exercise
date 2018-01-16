let module1 = (function (mod) {
    //...
    let m2 = function (params1, params2) {
        //...
        console.log('m2begin====================================');
        console.log(params1, params2);
        console.log('====================================m2end');
    };
    mod.m3 = function (params1, params2) {
        //...
        console.log('m3begin====================================');
        console.log(params1, params2);
        console.log('====================================m3end');
    };
    return mod;
})(window.module1 || {});

module1.m3(1,2);
module1.m2(1,2);//module1.m2 is not a function