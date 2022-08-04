class ListNode {
    constructor( data ) {
        this.data = data;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
    }

    isEmpty() {
        if ( this.head ) {
            return false;
        }
        return true;
    }
    
    insertAtFront( data ) {
        let newNode = new ListNode( data );
        newNode.next = this.head;
        this.head = newNode;
        return;
    }


    removeFromFront() {
        if( !this.isEmpty){
            this.head = this.head.next;
        }
        return;
    }

    insertAtBack( data ) {
        let newNode = new ListNode( data );
        if ( this.isEmpty() ){
            this.head = newNode;
        } else {
            let runner = this.head;
            while( runner.next ){
                runner = runner.next;
            }
            runner.next = newNode;
        }
        return;
    }

    display(){
        if( this.isEmpty() ){
            console.log("This list is empty!")
        } else {
            let n = 0;
            let runner = this.head;
            console.log('node ' + n + ': '+runner.data);
            while( runner.next ){
                runner = runner.next;
                n++;
                console.log('node ' + n + ': '+runner.data);
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
    seedFromArr(vals) {}

 /**
     * Converts this list into an array containing the data of each node.
     * - Time: O(n) linear.
     * - Space: O(n).
     * @returns {Array<any>} An array of each node's data.
     */
    toArr() {}
 
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
        if(runner.next == null){
            let lastcar = new ListNode(data)
            runner.next = lastcar;
            return lastcar
        }
    }


}

let list1 = new SinglyLinkedList();
list1.removeFromFront();
console.log(list1.isEmpty());
list1.insertAtBack("all");
list1.insertAtBack("my");
list1.insertAtBack("life");
list1.insertAtBack("I");
list1.insertAtBack("was");
list1.insertAtBack("waiting");
console.log(list1.isEmpty());

list1.removeFromFront();
list1.removeFromFront();
list1.removeFromFront();
list1.insertAtFront("grumpy")
list1.insertAtFront("bumpy")
list1.insertAtFront("mklumpy")
list1.insertAtFront("dumpy")

list1.display();