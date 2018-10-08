// setTimeout模拟回调实现异步

function my_async_function(name, fn) {
    setTimeout(() => {
        fn(null, '-' + name + '-');
    }, 3000);
}

my_async_function('hello node.js', (err, name) => {
    if (err) {
        console.error(err);
    }
    console.log(name);
})