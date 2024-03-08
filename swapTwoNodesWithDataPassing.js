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


// Iterative Method
const swapTwoNodes = (head, pos1, pos2) => {
    let count = 1;
    let node1 = head;
    let node2 = head;
    while (count < pos1) {
        node1 = node1.next;
        count++;
    }
    count = 1;
    while (count < pos2) {
        node2 = node2.next;
        count++;
    }
    let swapVar = node1.value;
    node1.value = node2.value;
    node2.value = swapVar;
    return head;
}

/* const swapTwoNodes = (head, pos1, pos2, node1 = head, node2 = head) => {
    if (pos1 === 1) {
        
    }
    if (pos2 === 1) {
        
    }
} */


const traversal = (head) => {
    if (head === null) return head;
    console.log(head.value);
    return traversal(head.next)
}

const head = swapTwoNodes(a, 3, 4);
traversal(head);
