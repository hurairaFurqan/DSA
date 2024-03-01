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

/* My approach to iterative Method
const findValueAtIndex = (head, index) => {
    let current = head;
    let count = 0
    while (count <= index) {
        if (current === null) {
            console.log("Index not found");
            break
        }
        if (count === index) {
            console.log(current.val);
            break
        } else {
            current = current.next
            count++
        }
    }
} */

/* Optimize approach to iterative Method
const findValueAtIndex = (head, index) => {
    let current = head;
    let count = 0
    while(current !== null){
        if (count === index) return current.val;
        current = current.next;
        count++;
    }
    return null;
} */

/* Recursive Approach
const findValueAtIndex = (head, index) => {
    if (head === null) return null;
    if (index === 0) return head.val;
    return findValueAtIndex(head.next, index - 1)
} */
console.log(findValueAtIndex(a, 2));