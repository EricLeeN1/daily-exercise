// interface Goods {
//     sex: string,
//     interest: string
//     beautiful?: boolean
// }

// let car: Goods = { sex: 'boy', interest: '赚钱', beautiful: true }
// console.log(car);

interface SearchMan {
    (sources: string, subString: string): boolean
}

let mySearch: SearchMan

mySearch = function (sources: string, subString: string): boolean {
    let flag = sources.search(subString)
    return (flag != -1)
}

console.log(mySearch('高，富，帅，才华、德行', '高'));
