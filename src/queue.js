const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
    constructor() {
        this.queue = [];
    }


    getUnderlyingList() {
        let first = null;
        for (let i = this.queue.length; i > 0; i--) {
            let temp = first;
            first = {
                value: this.queue[i - 1],
                next: 0,
            };
            first.next = temp;

        }
        return first;
    }

    enqueue(value) {
        this.queue.push(value);
    }

    dequeue() {
        return this.queue.shift()
    }
}

module.exports = {
    Queue
};