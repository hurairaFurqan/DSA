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
const g = new node("G");


a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;
/* First approach to iterative Method
const swapTwoNodes = (head, value1, value2) => {

    let prev1, prev2, node1, node2;
    prev1 = prev2 = node1 = node2 = head;
    while (node1.value !== value1) {
        prev1 = node1;
        node1 = node1.next;
    }
    while (node2.value !== value2) {
        prev2 = node2;
        node2 = node2.next;
    }

    let temp = node1.next;
    prev1.next = node2;
    prev2.next = node1;
    node1.next = node2.next;
    node2.next = temp;

    return head;

} */


// Second Approach to Iterative Method
const swapTwoNodes = (head, value1, value2) => {

    let p, prev;
    p = head
    prev = null;
    while (p !== null && p.value !== value1) {
        prev = p;
        p = p.next;
    }

    let pX = p;
    let prevX = prev;


    p = head
    prev = null;
    while (p !== null && p.value !== value2) {
        prev = p;
        p = p.next;
    }

    let pY = p;
    let prevY = prev;

    let temp = pY.next;
    pY.next = pX.next;
    pX.next = temp;

    if (prevX == null) {
        head = pY;
        prevY.next = pX
    }

    if (prevY == null) {
        head = pX;
        prevX.next = pY
    }

    if (prevX !== null && prevY !== null) {
        prevX.next = pY;
        prevY.next = pX;
    }

    return head;
}


// I am leaving a loop here on how to use this code to implement the feature of swapping adjacent nodes.


const traversal = (head) => {
    if (head === null) return head;
    console.log(head.value);
    return traversal(head.next)
}


const head = swapTwoNodes(a, "B", "D");
traversal(head);
