class node {
    constructor(val, next) {
        this.val = val;
        this.next = null;
    }
}

const traversal = (head) => {
    if (head == null) return
    console.log(head.val);
    traversal(head.next);
}


/* Regular Method
const insertAtStart = (head, value) => {
    if (head == null) {
        return new node(value);
    }

    let temp = new node(value);
    temp.next = head;
    head = temp;
    return head;
}
 */


const head = insertAtStart(null, "D");
// traversal(head)
const nhead = insertAtStart(head, "C");
// traversal(nhead)
const n1head = insertAtStart(nhead, "B");
// traversal(n1head)
const n2head = insertAtStart(n1head, "A");
traversal(n2head)
