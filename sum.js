class node {
    constructor(val) {
        this.val = val
        this.next = null
    }
}

const a = new node(1);
const b = new node(2);
const c = new node(3)
const d = new node(4)


a.next = b;
b.next = c;
c.next = d;


/* Iterative Method

const sum = (head) => {
    let sum = 0;
    let current = head;
    while (current !== null) {
        sum += current.val;
        current = current.next;
    }
    return sum;
}
 */

/* Recursive Method
    const sum = (head) => {
    if(head === null) return 0;
    return head.val + sum(head.next);
} */

console.log(sum(a));