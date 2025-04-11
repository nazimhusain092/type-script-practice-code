function signUp(name, email, isPaid) {
    return {
        name: name,
        email: email,
        isPaid: isPaid
    };
}
var result = signUp("NHPasha", "nhpasha@gmail.com", true);
console.log(result);
function addTwo(num) {
    return num + 10;
}
console.log(addTwo(9));
