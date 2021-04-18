class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let size = 0;
        let currentNode = this.head
        while(currentNode) {
            size++;
            currentNode = currentNode.next;
        }
        return size;
    }

    endInsert(data) {
        let node = { current : data, next : null}
        if(this.head === null) {
            this.head = node
        } else {
            let currentNode = this.head;
            while(currentNode) {
                if(currentNode.next === null) {
                    currentNode.next = node;
                    break;
                } else {
                currentNode = currentNode.next;
                }
            }
        }
    }

    frontInsert(data) {
        if(this.head) {
            let newNext = this.head;
            this.head = { current : data, next : newNext };
        }
    }

    frontDelete(data) {
        if(this.head.current === data) {
            this.head = this.head.next;
        }
    }

    displayList() {
        let node = this.head;
        while(node) {
            let currentNode = node;
            node = node.next;
            return currentNode;
        }
    }
    
    has(data) {
        let node = this.head;
        let hasData;
        while(node) {
            if(node.current === data) {
                hasData = `${true}: '${data}' was found.`;
                break;
            } else {
                hasData = `${false}: '${data}' was NOT found.`;
            }
            node = node.next;
        }
        return hasData;
    }
}

let newList = new LinkedList;

newList.endInsert(3);
newList.endInsert(4);
newList.endInsert("stuff");
console.log(newList.size());
newList.frontInsert("start");
console.log(newList.displayList());
newList.frontDelete("start");
console.log(newList.displayList());
console.log(newList.has("stuff"));
console.log(newList.has(60));
/* class Node {
    constructor(data) {
        this.current = data;
        this.next = null;
    }
}

let node1 = new Node(2);
let node2 = new Node(5);

node1.next = node2;
let firstList = new LinkedList(node1);

let firstListSize = firstList.size();

console.log(firstList);
console.log(firstList.head.next.current);
console.log(firstListSize); */