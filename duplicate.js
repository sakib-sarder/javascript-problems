/* const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'cabul', 'kabul', 'gabul', 'babul', 'ebul', 'abul', 'abul'];

function removeDuplicate(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++){
        const name = names[i];
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}


const uniqueNames = removeDuplicate(names)
console.log(uniqueNames); */

function biriyaniChorKhuja(names) {
    let finalNames = [];
    for (let i = 0; i < names.length; i++){
        singleName = names[i];
        if (finalNames.includes(singleName) === false) {
            finalNames.push(singleName);
        }
    }
    return finalNames;
}


const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'babul', 'abul', 'cabul', 'kabul', 'gabul', 'babul', 'ebul', 'abul', 'abul'];
const result = biriyaniChorKhuja(names);
console.log(result);