class node {
    constructor(value, next) {
        this.value = value
        this.next = null
    }
}

const a = new node("A");
const b = new node("B");
const c = new node("C");
const d = new node("D");

a.next = b;
b.next = c;
c.next = d;


/* Iterative Method 
const insertionAtPosition = (head, value, position) => {
    // if (head == null) {
    //     return new node(value);
    // }
    let count = 1;
    let temp = head;
    while (count < position) {
        temp = temp.next;
        count++;
    }
    let current = new node(value);
    current.next = temp.next;
    temp.next = current;
} */

const traversal = (head) => {
    if (head === null) return
    console.log(head.value);
    return traversal(head.next)
}

// traversal(a)

insertionAtPosition(a, "E", 2)



traversal(a);