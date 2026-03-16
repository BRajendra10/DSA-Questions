
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class CircularLinkedList {
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
            this.tail.next = this.head; // Point to self
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.tail.next = this.head; // Close the circle
        }

        this.length++;
    }

    print() {
        if (!this.head) return;

        let current = this.head;
        do {
            console.log(current.value);
            current = current.next;
        } while (current !== this.head);
    }

    // Treated as Insert Operation based on Single.js logic
    set(value, index) {
        if (index < 0 || index > this.length) return false;

        if (index === 0) {
            this.unShift(value);
            return true;
        }

        if (index === this.length) {
            this.push(value);
            return true;
        }

        let current = this.head;
        let i = 1;

        while (i < index) {
            current = current.next;
            i++;
        }

        const newNode = new Node(value);
        newNode.next = current.next;
        current.next = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;

        let current = this.head;
        let i = 1;

        while (i < index) {
            current = current.next;
            i++;
        }

        current.next = current.next.next;
        this.length--;
        return true;
    }

    includes(value) {
        if (!this.head) return false;

        let current = this.head;
        do {
            if (current.value === value) return true;
            current = current.next;
        } while (current !== this.head);

        return false;
    }

    shift() {
        if (!this.head) return;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = this.head.next;
            this.tail.next = this.head; // Tail must point to new head
        }
        this.length--;
    }

    unShift(value) {
        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            this.tail.next = this.head;
        } else {
            newNode.next = this.head;
            this.head = newNode;
            this.tail.next = this.head; // Tail must point to new head
        }
        this.length++;
    }

    find(value) {
        if (!this.head) return false;

        let current = this.head;
        do {
            if (current.value === value) return current;
            current = current.next;
        } while (current !== this.head);

        return false;
    }

    findMax() {
        if (!this.head) return null;

        let current = this.head;
        let max = this.head.value;

        do {
            if (current.value > max) max = current.value;
            current = current.next;
        } while (current !== this.head);

        return max;
    }

    findMin() {
        if (!this.head) return null;

        let current = this.head;
        let min = this.head.value;

        do {
            if (current.value < min) min = current.value;
            current = current.next;
        } while (current !== this.head);

        return min;
    }

    secondMax() {
        if (!this.head || this.length < 2) return null;

        let current = this.head;
        let max = -Infinity;
        let secondMax = -Infinity;

        // Using do-while to ensure we check every node exactly once
        do {
            if (current.value > max) {
                secondMax = max;
                max = current.value;
            } else if (current.value > secondMax && current.value < max) {
                secondMax = current.value;
            }
            current = current.next;
        } while (current !== this.head);

        // If secondMax is still -Infinity (e.g., all values were same), return null or the value
        return secondMax === -Infinity ? null : secondMax;
    }
}

const list = new CircularLinkedList();

list.push(10);
list.push(20);
list.push(30);
list.push(40);

list.print();
console.log(list.includes(30))
console.log("Max:", list.findMax());
console.log("Min:", list.findMin());
console.log("Second Max:", list.secondMax());
