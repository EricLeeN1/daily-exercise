let modules1 = (function () {
 let _count = 0;
 let m1 = function (params1,params2) {
   //...  
 };
 let m2 = function (params1,params2) {
    //...
    console.log('====================================');
    console.log(params1,params2);
    console.log('====================================');  
  };
  return {
      m1:m1,
      m2:m2
  }
})();

console.info(modules1._count);//undefined
console.log(modules1.m2(1,2));//12
console.log(modules1.m1(1,2));//undefined undefined