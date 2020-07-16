class Eric {
    public name: string
    public age: number
    public skill: string
    constructor(name: string, age: number, skill: string) {
        this.name = name;
        this.age = age;
        this.skill = skill;
    }
    public interest() {
        console.log('赚钱');
    }
}

let EricSon: Eric = new Eric('eric', 18, 'codding');
EricSon.interest();

class EricDau extends Eric {
    public sex: string = '女孩'
    public keai() {
        console.log('可爱');
    }
    public interest(){
        super.interest()
        console.log('挣一个小目标');
    }
}

let an = new EricDau('An', 5, '可爱');
an.keai()
an.interest()