// interface Goods {
//     sex: string,
//     interest: string
//     beautiful?: boolean
// }
var mySearch;
mySearch = function (sources, subString) {
    var flag = sources.search(subString);
    return (flag != -1);
};
console.log(mySearch('高，富，帅，才华、德行', '高'));
