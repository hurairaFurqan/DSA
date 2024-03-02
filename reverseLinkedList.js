class node {
    constructor(val, next) {
        this.val = val
        this.next = null;
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
const reverseLinkedList = (head) => {
    let temp = head;
    let current = head;
    let prev = null;

    // reversal loop
    while (temp !== null && current !== null) {
        temp = current.next;
        current.next = prev
        prev = current;
        current = temp
    }

    head = prev;

    // traversal loop

    let current1 = head;
    while (current1 !== null) {
        console.log(current1.val);
        current1 = current1.next
    }
} */

/* Recursive Method
const reverseLinkedList = (head, prev = null) => {
    if (head === null) return prev;
    const temp = head.next;
    head.next = prev;
    return reverseLinkedList(temp, head)
} */

const newHead = reverseLinkedList(a)

const display = (head) => {
    if (head === null) return;
    console.log(head.val);
    display(head.next);
}


display(newHead);