class node {
    constructor(val, next) {
        this.val = val;
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
const find = (head, value) => {
    let current = head;
    while (current !== null) {
        if (current.val === value) {
            return true
        }
        current = current.next;
    }
    return false;
}
 */

/* Recursive Method
const find = (head, value) => {
    if (head === null) return false;
    if (head.val === value) return true;
    return find(head.next, value)
}
 */

console.log(find(a, "F"));