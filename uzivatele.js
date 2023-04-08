const users = ['paja', 'kaja', 'vlasta', 'peta', 'alex', 'ja', 'misa']

/*for(let i = 0; i < users.length; i +=1){
console.log(users[i])}*/

/*const domain = "@gmail.com"

console.log(users[0] + domain)
console.log(users[1] + domain)
console.log(users[2] + domain)
console.log(users[3] + domain)
console.log(users[4] + domain)
console.log(users[5] + domain)
console.log(users[6] + domain)*/
/*
for (let i = 0; i < users.length; i ++){
	const jmeno = users[i]
	if (jmeno.length<=4){
	const email =` ${jmeno}@gmail.com`
	console.log(email)}
}
*/

const amounts = [2500, -550, 1000, -1200, -3000, 1270, 2300]

let pocatecniZustatek = 0
for (let i = 0; i < amounts.length; i++){
	pocatecniZustatek += amounts[i]
}


console.log(pocatecniZustatek)

