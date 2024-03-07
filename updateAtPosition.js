class node {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}

const a = new node("A");
const b = new node("B");
const c = new node("C");
const d = new node("D");
const e = new node("E");
const f = new node("F");


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

/* Iterative Method
const updateAtPosition = (head, value, pos) => {
    if (pos === 0) {
        head.value = value
        return head
    }

    let count = 1;
    let target = head;
    while (count < pos) {
        target = target.next
        count++;
    }
    target.value = value;
    return head;
} */

/* Recursive Method
const updateAtPosition = (head, value, pos) => {
    if (pos === 0) {
        head.value = value;
        return head;
    }
    if (pos == 1) {
        head.value = value
        return head;
    }
    head.next = updateAtPosition(head.next, value, pos - 1)
    return head;
} */


const traversal = (head) => {
    if (head === null) return head;
    console.log(head.value);
    return traversal(head.next)
}

const head = updateAtPosition(a, "H", 3)
traversal(head);
