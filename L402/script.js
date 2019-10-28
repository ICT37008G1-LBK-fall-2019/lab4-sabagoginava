let students = [{
    id: 1,
    name: 'nata'
},
{
    id: 2,
    name: 'temo'
}]
function countName(s, n) {
let nameCount = 0;
for (let x of s) {
    if (x.name === n) {
        nameCount++;
    }
}
return nameCount;
}
let x = countName(students, 'nata');
console.log(x)
console.log(countName(students, 'temo'));
console.log(countName(students, 'jumberi'));
