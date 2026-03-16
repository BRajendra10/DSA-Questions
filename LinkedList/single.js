/**
 * SINGLEY LINKEDLIST:
 * 
 * create a singley linkedlist. basic crud
 */

class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    length() {
        return this.length;
    }

    push(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++
    }

    print() {
        if (!this.head) return;

        let current = this.head;

        while (current.next) {
            console.log(current.value);
            current = current.next;
        }

        /**
         * This extra console.log function call is for expectional printing
         * when curent.next is null means we don't have any next value
         * but here is the situation we have curent.value but because of current.next
         * we can't print our current.value .
         */
        console.log(current.value);
    }

    set(value, index) {
        if (index < 0 || index > this.length) return false;

        let i = 1;
        let curent = this.head;

        while (i < index) {
            // console.log(curent.value, i, this.length);
            curent = curent.next;
            i++;
        }

        const updatedNode = new Node(value);
        updatedNode.next = curent.next;
        curent.next = updatedNode;
        this.length++
    }

    remove(index) {
        let i = 1;
        let curent = this.head;

        while (i < index) {
            // console.log(curent.value, i, this.length);
            curent = curent.next;
            i++;
        }

        // console.log(curent);
        curent.next = curent.next.next;
    }

    includes(value) {
        let curent = this.head;

        while (curent.next) {
            // console.log("Always", value, curent.value);
            // console.log(curent.value === value);
            if (curent.value === value) {
                // console.log("First condition", value, curent.value);
                return true
            }

            curent = curent.next;
        }

        if (curent.value === value) {
            // console.log("Last eliment condition" , value, curent.value);
            return true;
        } else {
            // console.log("everythign fails", value, curent.value);
            return false;
        }
    }

    shift() {
        this.head = this.head.next
        this.length--;
    }

    unShift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode
        }
        this.length++;
    }

    find(value) {
        if (!this.head) return false;
        let curent = this.head;

        while (curent.next) {
            if (curent.value === value) {
                return curent
            }

            curent = curent.next;
        }

        if (curent.value === value) {
            return curent;
        } else {
            return false;
        }
    }

    findMax() {
        let curent = this.head.next;
        let max = this.head.value;

        while (curent.next) {
            if (curent.value > max) {
                max = curent.value;
            }
            curent = curent.next;
        }

        if (curent.value > max) {
            max = curent.value
        }

        return max
    }

    findMin() {
        let curent = this.head.next;
        let min = this.head.value;

        while (curent.next) {
            if (curent.value < min) {
                min = curent.value;
            }
            curent = curent.next;
        }

        if (curent.value < min) {
            min = curent.value
        }

        return min
    }

    secondMax() {
        let curent = this.head.next;
        let max = this.head.value;
        let secondMax = null;

        while (curent.next) {
            if (curent.value > max) {
                secondMax = max
                max = curent.value;
            }
            curent = curent.next;
        }

        if (curent.value > max) {
            secondMax = max
            max = curent.value
        }

        return secondMax
    }
}

const list = new LinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);

list.print();

// console.log(list.findMax());
// console.log(list.findMin());
// console.log(list.secondMax());