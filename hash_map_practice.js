// The following creates a hash table
// arrays assignments are used to handle collisions though linked lists are preferable - will revist upon learning more about linked list implementation

let hashTable = Array(10);
let hashLength = hashTable.length;
for(let i = 0; i < hashLength; i++) {
    hashTable.splice(i, 1, []);
}
console.log(hashTable);

class Person {
    constructor(firstName, lastName, age, favoriteColor) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.favoriteColor = favoriteColor;
    }
}

const DREW = new Person("Alston", "Devero-Belfon", 29, "Green");
const CLAIRE = new Person("Claire", "Deveraux", 29, "Purple");
const DREW_2 = new Person("Alston", "Devero-Belfon", 30, "Purple")

function createHashData(transform) {
    const CHANGE_THIS = transform.firstName + transform.lastName;
    let sum = 0;
    for(let i = 0; i < CHANGE_THIS.length; i++) {
        sum += CHANGE_THIS.charCodeAt(CHANGE_THIS[i]);
    }
    const HASH_CODE = sum % hashTable.length;
    console.log(HASH_CODE);
    hashTable[HASH_CODE].push(transform);
}

function getHashData(data) {
    const CHANGE_THIS = data.firstName + data.lastName;
    let sum = 0;
    for(let i = 0; i < CHANGE_THIS.length; i++) {
        sum += CHANGE_THIS.charCodeAt(CHANGE_THIS[i]);
    }
    const HASH_CODE = sum % hashTable.length;
    const HASH_KEY = hashTable[HASH_CODE];
    const LIST_OBJ_INDEX = HASH_KEY.indexOf(data);
    console.log(`Key ${HASH_CODE}: \n Name - ${HASH_KEY[LIST_OBJ_INDEX].firstName} ${HASH_KEY[LIST_OBJ_INDEX].lastName} \n Age - ${HASH_KEY[LIST_OBJ_INDEX].age} \n Favorite Color - ${HASH_KEY[LIST_OBJ_INDEX].favoriteColor}`);
}

createHashData(DREW);
createHashData(CLAIRE);
createHashData(DREW_2);

getHashData(DREW);
getHashData(CLAIRE);
getHashData(DREW_2);