class Node {
    constructor(value) {
        this.prev = null;
        this.value = value;
        this.next = null;
    }
}

class linkedList {
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
            newNode.prev = this.tail
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    print() {
        let current = this.head;

        // Forword
        console.log("Forword");
        while (current.next) {
            console.log(current.value);
            // console.log(current);
            current = current.next;
        }

        console.log("Backword");
        while (current) {
            console.log(current.value);
            // console.log(current);
            current = current.prev;
        }
    }

    set(value, index) {
        const newNode = new Node(value);
        let curent = this.head;
        let i = 1;

        while (i < index) {
            curent = curent.next;
            i++;
        }

        // console.log(curent, newNode);
        newNode.next = curent.next;
        curent.next.prev = newNode;
        newNode.prev = curent;
        curent.next = newNode;
    }

    remove(value, index) {
        const newNode = new Node(value);
        let curent = this.head;
        let i = 1;

        while (i < index) {
            curent = curent.next;
            i++;
        }

        let afterNode = curent.next.next;
        // console.log(curent.value, curent, afterNode);
        afterNode.prev = curent
        curent.next = afterNode;
    }

    includes(value) {
        if (!this.head) return false;
        let current = this.head;

        while (current) {
            // console.log(current.value);
            if (current.value === value) {
                return true
            }

            current = current.next;
        }

        return false
    }

    find(value) {
        if (!this.head) return false;
        let current = this.head;

        while (current) {
            if (current.value === value) {
                return current
            }

            current = current.next;
        }

        return false
    }

    shift() {
        this.head = this.head.next;
        this.head.prev = null;
        this.length--
    }

    unshift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.length++
    }

    findMax() {
        let curent = this.head.next;
        let max = this.head.value;

        while (curent) {
            if (curent.value > max) {
                max = curent.value;
            }
            curent = curent.next;
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

        return secondMax
    }
}

const list = new linkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);

console.log(list.findMax())
console.log(list.findMin())
console.log(list.secondMax())
