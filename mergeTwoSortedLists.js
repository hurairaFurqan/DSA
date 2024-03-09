class list1 {
    constructor(value, next) {
        this.value = (value === undefined ? 0 : value)
        this.next = (next === undefined) ? null : next;
    }
}

class list2 {
    constructor(value, next) {
        this.value = (value === undefined ? 0 : value)
        this.next = (next === undefined) ? null : next;
    }
}

class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}
const a1 = new list1(1);
const b1 = new list1(2);
const c1 = new list1(4);



const p2 = new list2(1)
const q2 = new list2(3)
const r2 = new list2(4)

a1.next = b1;
b1.next = c1;

p2.next = q2;
q2.next = r2

/* 1st approach to iterative Method
var mergeTwoLists = function (head1, head2) {
    if (head1 === null && head2 === null) {
        return null;
    }
    if (head1 !== null && head2 === null) {
        return head1;
    }
    if (head1 === null && head2 !== null) {
        return head2;
    }



    let temp = null;
    let temp1 = head1;
    let temp2 = head2;
    while (temp2 !== null) {
        if (temp2.value >= temp1.value) {
            temp = temp1.next;
            temp1.next = temp2;
            temp1 = temp;
            temp = temp2.next;

            // while (temp2.value == temp.value) {
            //     temp2 = temp2.next;
            //     temp = temp2.next;
            // }
            temp2.next = temp1;
            temp2 = temp;
        }
    }
    return head1;
}; */



const mergeTwoLists = (head1, head2) => {
    let temp = new ListNode();
    let head = temp;
    if (!head1) {
        return head2;
    }
    if (!head2) {
        return head1
    }

    while (head1 && head2) {

        if (head1.val <= head2.val) {
            temp.next = head1;
            head1 = head1.next;
        } else {
            temp.next = head2;
            head2 = head2.next;
        }
        temp = temp.next;
    }
    temp.next = head1 != null ? head1 : head2
    return head.next;
}

const newHead = mergeTwoLists(a1, p2)

const traversal = (head) => {
    if (head === null) return;
    console.log(head.value);
    return traversal(head.next)
}


traversal(newHead)

