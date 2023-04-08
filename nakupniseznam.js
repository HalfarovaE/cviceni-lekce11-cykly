const list = ['mouka', 'máslo', 'cukr', 'jablka', 'skořice']

let sjednoceni = ''
for (let i = 0; i <list.length; i++)
{
	sjednoceni+=list[i]
	
}

console.log(sjednoceni)


/*
for(let i = 0; i< list.length; i++){
if (i > 0){
	sjednoceni += ","
	
}
sjednoceni += list[i]
}
console.log(sjednoceni)*/
/*
for (let i = 0; i < list.length; i++)
{
	sjednoceni += `<li>${list[i]}</li>`
}

console.log(sjednoceni)
*/

/*
const shoppingList = [
	'mouka',
	'máslo',
	'cukr',
	'jablka',
	'skořice',
	'mléko',
	'cibule',
]*/
/*
shoppingList.forEach((item) => {

	if (item.length%2===0){
	 console.log(item.toLocaleUpperCase())}
})
*/
/*
let shoppingListString = ''
shoppingList.forEach((item)=>{
	shoppingListString+= item

})

console.log(shoppingListString)*/

const odstavec = document.querySelectorAll(".paragraf")
odstavec.forEach((paragraf) => {
	paragraf.style.color = "red"
})