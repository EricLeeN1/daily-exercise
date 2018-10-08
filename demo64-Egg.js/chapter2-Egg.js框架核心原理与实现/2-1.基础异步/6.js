// async/await 可以在语法层面上规避回调

async function func() {
    return 2;
}
// func().then(console.log);// 2

const getPosts = () =>
    new Promise((resolve, reject) => {
        resolve([{
                name: "a"
            },
            {
                name: "b"
            },
            {
                name: "b"
            },
            {
                name: "d"
            },
        ]);
    });


async function func2() {
    try {
        const number = await func();
        const posts = await getPosts();
        console.log(number);
        console.log(posts);
    } catch (e) {
        console.error(e);
    }
}

func2();//2 [ { name: 'a' }, { name: 'b' }, { name: 'b' }, { name: 'd' } ]