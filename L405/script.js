let students = [
    {
        id: 1,
        name: 'gia',
        gpa: 3
    },
    {
        id: 2,
        name: 'vaxo',
        gpa: 1.2
    },
    {
        id: 3,
        name: 'nata',
        gpa: 2.5
    },
    {
        id: 4,
        name: 'mari',
        gpa: 1.5
    },
    {
        id: 5,
        name: 'ia',
        gpa: 2
    }
];
function myList(array, mingpa = 2) {
    let myArray = array.filter(x => x.gpa > mingpa).map((x) => x.gpa);
    let sum = 0;
    for (var i = 0; i < myArray.length; i++) {
        sum += myArray[i];

    }
    let avg = sum / (myArray.length > 0 ? myArray.length : 1);
    return avg;
}
console.log(myList(students, 1));
