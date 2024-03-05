class node {
    constructor(val, next) {
        this.val = val;
        this.next = null
    }
}

/* Iterative Method
const inserstionAtEnd = (head, value) => {

    if (head === null) {
        return new node(value);
    }

    let current = head;

    while (current.next !== null) {
        current = current.next
    }

    current.next = new node(value);


    return head;


}
 */

const inserstionAtEnd = (head, value) => {
    if (head === null) return new node(value);
    if (head.next === null) {
        head.next = new node(value);
        return;
    }

    return inserstionAtEnd(head.next,value);
}



const nHead1 = inserstionAtEnd(null, "A");

const array = ["B", "C", "D", "E", "F"];


const traversal = (head) => {
    if (head === null) return
    console.log(head.val);
    traversal(head.next)
}


for (let i = 0; i < array.length; i++) {
    inserstionAtEnd(nHead1, array[i])
}
traversal(nHead1);