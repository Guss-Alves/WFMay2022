class QueueNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    isEmpty() {
        return (this.size == 0) ? true : false;
    }
    /**
     * Adds a given val to the back of the queue.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @param {any} val
     * @returns {number} The new size of the queue.
     */
    enqueue(value) {
        let newNode = new QueueNode(value);
        if (this.isEmpty()) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size += 1;
        return this.size;
    }
    /**
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The removed item.
     */
    dequeue() {
        if (this.isEmpty()) {
            return null;
        }
        let oldHead = this.head;
        this.head = this.head.next;
        if (this.size == 1) {
            this.tail = null;
        }
        this.size -= 1;
        return oldHead;
    }
    /**
     * Retrieves the first item without removing it.
     * - Time: O(1) constant.
     * - Space: O(1) constant.
     * @returns {any} The first item.
     */
    front() {
        return this.head.data;
    }
    /**
     * Determines if the given item is in the queue.
     * - Time: O(n) linear.
     * - Space: O(1) constant.
     * @param {any} searchVal
     * @returns {boolean}
     */
    contains(searchValue) {
        let runner = this.head;
        while (runner && runner.data != searchValue) {
            runner = runner.next;
        }
        return runner ? true : false;
    }
    /**
     * Enqueues each of the given items.
     * - Time: O(n) linear since enqueue is O(1), n = vals.length.
     * - Space: O(1) constant.
     * @param {Array<any>} vals
     */
    seed(values) {
        for (let i in values) {
            this.enqueue(values[i]);
        }
    }
    /**
 * Compares this queue to another given queue to see if they are equal.
 * Avoid indexing the queue items directly via bracket notation, use the
 * queue methods instead for practice.
 * Use no extra array or objects.
 * The queues should be returned to their original order when done.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Queue} q2 The queue to be compared against this queue.
 * @returns {boolean} Whether all the items of the two queues are equal and
 *    in the same order.
 */
    compareQueues(q2) {
        let firstRunner = this.front();
        let secondRunner = secondQueue.front();

        if(this.size != secondQueue.size){
            return false;
        }

        while(firstRunner && secondRunner){
            if(firstRunner.data != secondRunner.data){
                return false;
            }
            firstRunner = firstRunner.next;
            secondRunner = secondRunner.next;
        }
        return true;
    }
    toStack(){
        var newStack = new Stack()
        if(this.isEmpty()){
            return newStack
        }
        var runner = this.head
        while(runner){
            newStack.push(runner.data)
            runner = runner.next
        }
        return newStack
    }
    /**
     * Determines if the queue is a palindrome (same items forward and backwards).
     * Avoid indexing queue items directly via bracket notation, instead use the
     * queue methods for practice.
     * Use only 1 stack as additional storage, no other arrays or objects.
     * The queue should be returned to its original order when done.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean}
     */
    isPalindrome() {
        var newStack = this.toStack()
        var runner = this.head
        while(runner){
            if(runner.data != newStack.pop().data){
                return false
            }
            runner = runner.next
        }
        return true
    }

    /**
     * Find the intersection in between 2 queues
     * If there is no intersection return a null value
     * If the is an intersection return the node where the queues intersect
     * - Time: O(?).
     * - Space: O(?).
     * @param {Queue} q2 The queue to be compared against this queue to find intersection.
     * @returns {QueueNode} Null in case of no intersection
     */
    findIntersection(q2) { }
}