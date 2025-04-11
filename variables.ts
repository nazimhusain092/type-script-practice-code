console.log('============Variables==========')

// number

const userId:number = 3334455;
userId.toExponential()

const strId:string = userId.toExponential();

console.log(typeof userId, typeof strId)
console.log(userId, strId)

const isTrue: boolean = true;
console.log(isTrue)

let hero;
function getHero(){
    return "Hero"
}
hero = getHero()
console.log(hero)