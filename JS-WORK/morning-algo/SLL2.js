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
    /**
 * Inserts a new node before a node that has the given value as its data.
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} newVal The value to use for the new node that is being added.
 * @param {any} targetVal The value to use to find the node that the newVal
 *    should be inserted in front of.
 * @returns {boolean} To indicate whether the node was pre-pended or not.
 */
    prepend(value, target){
        let newNode = new ListNode(value)
        
        if(this.isEmpty()){
            return false;
        }
        else if(this.head.data == target){
            newNode.next = this.head;
            this.head = newNode;
            return true;
        }

        let runner = this.head;
        while(runner.next != null){
            if(runner.next.data == target){
                newNode.next = runner.next;
                runner.next = newNode;
                return true;
            }
            runner = runner.next;
        }
        return false;
    }
/**
 * Finds the node with the smallest data and moves that node to the front of
 * this list.
 * - Time: O(?).
 * - Space: O(?).
 * @returns {SinglyLinkedList} This list.
 */
    moveMinToFront() {
        if( this.isEmpty() || this.head.next == null){
            return this;
        }
        
        let minNode = this.head;
        let nodeBeforeMinNode = null;
        
        let runner = this.head;
        while( runner.next ){
            if( runner.next.data < minNode.data ) {
                minNode = runner.next;
                nodeBeforeMinNode = runner;
            }
            runner = runner.next;
        }

        if( ! nodeBeforeMinNode ){
            return this;
        }
        
        let nodeAfterMinNode = minNode.next;
        minNode.next = this.head;
        this.head = minNode;
        nodeBeforeMinNode.next = nodeAfterMinNode;
        
        return this;
    }
    /**
 * Concatenates the nodes of a given list onto the back of this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {SinglyLinkedList} addList An instance of a different list whose
 *    whose nodes will be added to the back of this list.
 * @returns {SinglyLinkedList} This list with the added nodes.
 */
    concat(concatList){
        if (this.isEmpty()){
            this.head = concatList.head;
            return list1;
        }

        let runner1 = this.head;
        while (runner1.next != null){
            runner1 = runner1.next;
        }
        runner1.next = concatList.head;
        return list1;
    }

 /**
 * Splits this list into two lists where the 2nd list starts with the node
 * that has the given value.
 * splitOnVal(5) for the list (1=>3=>5=>2=>4) will change list to (1=>3)
 * and the return value will be a new list containing (5=>2=>4)
 * - Time: O(?).
 * - Space: O(?).
 * @param {any} val The value in the node that the list should be split on.
 * @returns {SinglyLinkedList} The split list containing the nodes that are
 *    no longer in this list.
 */
    splitOnVal( val ){
        if( this.isEmpty() ){
            return null;
        }
        if( this.head.data === val){
            let returnList = new SinglyLinkedList();
            returnList.head = this.head;
            this.head = null;
            return returnList;
        }
        let runner = this.head;
        while( runner.next ){
            if( runner.next.data === val){
                let returnList = new SinglyLinkedList();
                returnList.head = runner.next;
                runner.next = null;
                return returnList;
            }
            runner = runner.next;
        }
        return null;
    }

/**
 * Recursively finds the maximum integer data of the nodes in this list.
 * - Time: O(?).
 * - Space: O(?).
 * @param {ListNode} runner The start or current node during traversal, or null
 *    when the end of the list is reached.
 * @param {ListNode} maxNode Keeps track of the node that contains the current
 *    max integer as it's data.
 * @returns {?number} The max int or null if none.
 */
    recursiveMax(runner = this.head, maxNode = this.head) {}
    /**
 * Reverses this list in-place without using any extra lists.
 * - Time: (?).
 * - Space: (?).
 * @returns {SinglyLinkedList} This list.
 */
    reverse() {}

 /**
  * Determines whether the list has a loop in it which would result in
  * infinitely traversing unless otherwise avoided. A loop is when a node's
  * next points to a node that is behind it.
  * - Time: (?).
  * - Space: (?).
  * @returns {boolean} Whether the list has a loop or not.
  */
    hasLoop(){
    if(this.isEmpty() || !(this.head.next)){ return false }

    let singleRunner = this.head;
    let doubleRunner = this.head.next;

    while(singleRunner.next && doubleRunner.next && doubleRunner.next.next){
        singleRunner = singleRunner.next;
        doubleRunner = doubleRunner.next.next;

        if(singleRunner === doubleRunner){ return true }
    }
    return false;
}
}

let list1 = new SinglyLinkedList();
// list1.insertAtBack(3);
// list1.insertAtBack(2);
list1.insertAtBack(1);
list1.insertAtBack(1);
list1.insertAtBack(1);
list1.insertAtBack(1);
list1.insertAtBack(1);
console.log(list1.hasLoop());

list1.display();