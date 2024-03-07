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
const deleteAtPosition = (head, pos) => {
    if (pos === 0) {
        head = head.next
        return head;;
    }
    let count = 1;
    let prev = head;
    let target = head.next;
    while (count < pos) {
        prev = prev.next;
        target = target.next;
        count++;
    }
    prev.next = target.next;
    target.next = null;
    return head;
} */

/* Recursive Method
const deleteAtPosition = (head, pos) => {
    if (pos === 0) {
        return head.next;
    }
    if (pos === 1) {
        let res = head.next;
        return res;
    }

    head.next = deleteAtPosition(head.next, pos - 1);
    return head;

} */


const traversal = (head) => {
    if (head === null) return head;
    console.log(head.value);
    return traversal(head.next)
}

const head = deleteAtPosition(a, 3)
traversal(head);
