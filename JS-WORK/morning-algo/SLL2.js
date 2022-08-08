class ListNode {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        if (this.head) {
            return false;
        }
        return true;
    }

    insertAtFront(data) {
        let newNode = new ListNode(data);
        newNode.next = this.head;
        this.head = newNode;
        return;
    }


    removeFromFront() {
        if (!this.isEmpty) {
            this.head = this.head.next;
        }
        return;
    }

    insertAtBack(data) {
        let newNode = new ListNode(data);
        if (this.isEmpty()) {
            this.head = newNode;
        } else {
            let runner = this.head;
            while (runner.next) {
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return;
    }

    display() {
        if (this.isEmpty()) {
            console.log("This list is empty!")
        } else {
            let n = 0;
            let runner = this.head;
            console.log('node ' + n + ': ' + runner.data);
            while (runner.next) {
                runner = runner.next;
                n++;
                console.log('node ' + n + ': ' + runner.data);
            }
        }
        return;
    }
    /**
       * Calls insertAtBack on each item of the given array.
       * - Time: O(n * m) n = list length, m = arr.length.
       * - Space: O(1) constant.
       * @param {Array<any>} vals The data for each new node.
       * @returns {SinglyLinkedList} This list.
       */
    seedFromArr(values) {
        this.head = null;
        for (let value of values) {
            this.insertAtBack(value);
        }
    }
    /**
         * Converts this list into an array containing the data of each node.
         * - Time: O(n) linear.
         * - Space: O(n).
         * @returns {Array<any>} An array of each node's data.
         */
    toArr() {
        var newArr = [];
        let runner = this.head;
        while (runner) {
            newArr.push(runner.value);
            runner = runner.next;
        }
        return newArr;
    }
    /**
        * Creates a new node with the given data and inserts it at the back of
        * this list.
        * - Time: O(?).
        * - Space: O(?).
        * @param {any} data The data to be added to the new node.
        * @param {?ListNode} runner The current node during the traversal of this list
        *    or null when the end of the list has been reached.
        * @returns {SinglyLinkedList} This list.
        */
    insertAtBackRecursive(data, runner = this.head) {
        if (runner.next == null) {
            let lastcar = new ListNode(data)
            runner.next = lastcar;
            return lastcar
        }
    }
    /**
 * Removes the last node of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data from the node that was removed.
 */
    removeBack() {
        if (this.isEmpty()) {
            return null
        }
        while (node.next.next) {
            node = node.next;
        }
        let lastNode = node.next;
        node.next = null;
        return lastNode;
    }
    /**
 * Determines whether or not the given search value exists in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The data to search for in the nodes of this list.
 * @returns {boolean}
 */
    contains(value) {
        let node = this.head;
        while (node != null && node.data != value) {
            node = node.next;
        }
        if (node != null) {
            return true;
        }
        else {
            return false;
        }
    }
    /**
 * Retrieves the data of the second to last node in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {any} The data of the second to last node or null if there is no
 *    second to last node.
 */
    secondToLast() {
        if(this.isEmpty() || this.head.next == null){
            return null;
        }
        let runner = this.head;
        while(runner.next.next){
            runner = runner.next;
        }
        return runner.data; 
    }
/**
  * Removes the node that has the matching given val as it's data.
  * - Time: O(?).
  * - Space: O(?).
  * @param {any} val The value to compare to the node's data to find the
  *    node to be removed.
  * @returns {boolean} Indicates if a node was removed or not.
  */
    removeVal(value){
        let removedValue = false;
        let reomveCounter = 0;
        if (this.head == null){
            return removedValue;
        }
        if (this.head.data == value){
            this.head = this.head.next;
            removedValue = true;
            reomveCounter++;
        }
        let runner = this.head;
        while (runner.next != null){
            if (runner.next.data == value){
                    runner.next = runner.next.next;
                removedValue = true;
                reomveCounter++;
            } else{
            runner = runner.next;
            }
        }
        console.log(reomveCounter);
        return removedValue;
    }
}

let list1 = new SinglyLinkedList();
list1.insertAtBack(3);
console.log(list1.secondToLast());
list1.insertAtBack(2);

list1.insertAtBack(1);
list1.insertAtBack(4);
console.log(list1.contains(5))
list1.insertAtBack(10);
console.log(list1.secondToLast());
list1.display();