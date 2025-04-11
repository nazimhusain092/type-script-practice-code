function signUp(name: string, email: string, isPaid:boolean){
    return {
        name, email, isPaid
    }
}

const result = signUp("NHPasha","nhpasha@gmail.com", true)
console.log(result)

function addTwo(num: number): number{
    return num + 10
}
console.log(addTwo(9))