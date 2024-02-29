class node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const a = new node("A");
const b = new node("B");
const c = new node("C")
const d = new node("D")


a.next = b;
b.next = c;
c.next = d;

const printLinkedList = (head) => {
    const values = [];
    fillValues(head, values);
    return values;
}
const fillValues = (head, values) => {
    if (head === null) return;
    values.push(head.val);
    fillValues(head.next, values);
}

console.log(printLinkedList(a))