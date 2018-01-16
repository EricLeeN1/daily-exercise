var module1 = (function (mod) {
    // mod = {};//必须写这个才行。要不是阮一峰文档写错了，要不是这个方法被放弃了。
    let _count = 0;
    let m1 = function (params1, params2) {
        //...  
    };
    let m2 = function (params1, params2) {
        //...
        console.log('m2begin====================================');
        console.log(params1, params2);
        console.log('====================================m2end');
    };
    mod.m3 = function (params1, params2) {
        //...
        console.log('m3begin====================================');
        console.log(params1, params2,this.m2,this._count,this.m1);
        console.log('====================================m3end');
    };

    return mod;

})(this);

// module1.m2(1,2);
module1.m3(1,2);