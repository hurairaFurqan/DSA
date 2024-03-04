class list1 {
    constructor(val, next) {
        this.val = val;
        this.next = null
    }
}

class list2 {
    constructor(val, next) {
        this.val = val
        this.next = null
    }
}

const a1 = new list1("A");
const b1 = new list1("B");
const c1 = new list1("C");



const p2 = new list2("P")
const q2 = new list2("Q")
const r2 = new list2("R")
const s2 = new list1("S");
const t2 = new list1("T");
const u2 = new list1("U");

a1.next = b1;
b1.next = c1;

p2.next = q2;
q2.next = r2;
r2.next = s2;
s2.next = t2;
t2.next = u2;


/* First approach to problem
const zipperLists = (head1, head2) => {
    let current1 = head1;
    let temp1 = head1;
    let current2 = head2;
    let temp2 = head2
    while (current1 !== null || current2 !== null) {
        temp1 = current1.next;
        temp2 = current2.next;
        current1.next = current2;
        current2.next = temp1;
        current1 = temp1;
        current2 = temp2;
    }
} */

/* Optimize approach to iterative Method
const zipperLists = (head1, head2) => {
    let tail = head1;
    let current1 = head1.next;
    let current2 = head2;
    let count = 0;
    while (current1 !== null && current2 !== null) {
        if (count % 2 === 0) {
            tail.next = current2;
            current2 = current2.next;
        } else {
            tail.next = current1;
            current1 = current1.next;
        }
        tail = tail.next;
        count++;
    }
    if (current1 !== null) tail.next = current1;
    if (current2 !== null) tail.next = current2;
    return head1;
} */


/* Recursive Method  

1.Unable to understand how this code works
5 minutes later
2.Now I understand this code

const zipperLists = (head1, head2) => {
    if (head1 === null && head2 === null) return null;
    if (head1 === null) return head2;
    if (head2 === null) return head1;

    const next1 = head1.next;
    const next2 = head2.next;
    head1.next = head2;
    head2.next = zipperLists(next1, next2)

    return head1;
} */

const newHead = zipperLists(a1, p2)


const traversal = (head) => {
    if (head === null) return;
    console.log(head.val);
    return traversal(head.next)
}


traversal(newHead)