/**
 * Created by Eric on 2017/10/24.
 */
function args() {
    console.log(arguments);
    return arguments;
}
args(1, 2, 3, 4, true, "eric");

function a() {
    // alert('a');
    console.log('a');
    a =function () {
        // alert('b');
    console.log('b');
    }
}
a();