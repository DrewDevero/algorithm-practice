let myMap = new Map();

myMap.set("Carl", 53);
myMap.set("Candice", 23);

console.log(myMap.get("Candice"));
console.log(myMap);

myMap.forEach((entry, key) => console.log(key.toString(), entry));