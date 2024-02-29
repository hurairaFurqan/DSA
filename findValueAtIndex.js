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


const findValueAtIndex = (head, index) => {
    
}