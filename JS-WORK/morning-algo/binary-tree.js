/**
 * Class to represent a Node in a Binary Search Tree (BST).
 */
class BSTNode {
    /**
     * Constructs a new instance of a BST node.
     * @param {number} data The integer to store in the node.
     */
    constructor(data) {
        this.data = data;
        /**
         * These properties are how this node is connected to other nodes to form
         * the tree. Similar to .next in a SinglyLinkedList except a BST node can
         * be connected to two other nodes. To start, new nodes will not be
         * connected to any other nodes, these properties will be set after
         * the new node is instantiated.
         *
         * @type {BSTNode|null}
         */
        this.left = null;
        /** @type {BSTNode|null} */
        this.right = null;
    }
}

/**
 * Represents an ordered tree of nodes where the data of left nodes are <= to
 * their parent and the data of nodes to the right are > their parent's data.
 */
class BinarySearchTree {
    constructor() {
        /**
         * Just like the head of a linked list, this is the start of our tree which
         * branches downward from here.
         *
         * @type {BSTNode|null}
         */
        this.root = null;
    }
    /**
     * Determines if this tree is empty.
     * - Time: O(?).
     * - Space: O(?).
     * @returns {boolean} Indicates if this tree is empty.
     */
    isEmpty() { 
        if(this.root == null){
            return true;
        }else{
            return false;
        }
    }
    /**
     * Inserts a new node with the given newVal in the right place to preserver
     * the order of this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {number} newVal The data to be added to a new node.
     * @returns {BinarySearchTree} This tree.
     */
    insert(newVal) {         
        var newNode = new BSTNode(newVal);
        var runner = this.root;
        if(this.isEmpty()){
            this.root = newNode;
        }
        while(runner){
            if(newNode.data >= runner.data && !runner.right){
                return runner.right = newNode;
            }
            else if(newNode.data >= runner.data && runner.right){
                runner = runner.right;
            } else if(newNode.data <= runner.data && !runner.left){
                return runner.left = newNode;
            } else if(newNode.data <= runner.data && runner.left){
                runner = runner.left;
            }
        }
    }
    /**
    * Retrieves the smallest integer data from this tree.
    * - Time: O(?).
    * - Space: O(?).
    * @param {Node} current The node that is currently accessed from the tree as
    *    the tree is being traversed.
    * @returns {number} The smallest integer from this tree.
    */
    min(current = this.root) { 
        if(this.isEmpty()){
            return null;
        }
        while(current){
            if (current.left){
                current = current.left
            } else
                return current.data;
        }
    }
    max(current = this.root) { 
        if(this.isEmpty()){
            return null;
        }
        while(current){
            if (current.right){
                current = current.right
            } else
                return current.data;
        }
    }
    /**
   * Retrieves the smallest integer data from this tree.
   * - Time: O(?).
   * - Space: O(?).
   * @param {Node} current The node that is currently accessed from the tree as
   *    the tree is being traversed.
   * @returns {number} The smallest integer from this tree.
   */
    minRecursive(current = this.root) {
        if(this.isEmpty()){
            return false;
        }
        if(current.left != null){
            return this.minRecursive(current.left);
        }
        return current.data;
    }

/**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
    contains(searchVal) {
        if( this.isEmpty() ){
            return false;
        }

        let runner = this.root;
        while( runner ){
            if( runner.data === searchVal ){
                return true;
            }

            if( searchVal > runner.data ){
                runner = runner.right;
            } else {
                runner = runner.left;
            }
        }

        return false;
    }

/**
 * Determines if this tree contains the given searchVal.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} searchVal The number to search for in the node's data.
 * @returns {boolean} Indicates if the searchVal was found.
 */
    containsRecursive(searchVal, current = this.root) {
        if( ! current ){
            return false;
        }
        if( searchVal === current.data ){
            return true;
        }
        if( searchVal > current.data ){
            return this.containsRecursive( searchVal, current.right );
        } else {
            return this.containsRecursive( searchVal, current.left );
        }
    }
    /**
 * Calculates the range (max - min) from the given startNode.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Node} startNode The node to start from to calculate the range.
 * @returns {number|null} The range of this tree or a sub tree depending on if the
 *    startNode is the root or not.
 */
    range() {
        if(this.isEmpty()){
            return null; 
        }
        return (this.max() - this.min());
    }
 // Advice: make a max() and use it together with min()

/**
 * Inserts a new node with the given newVal in the right place to preserver
 * the order of this tree.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} newVal The data to be added to a new node.
 * @param {Node} curr The node that is currently accessed from the tree as
 *    the tree is being traversed.
 * @returns {BinarySearchTree} This tree.
 */
    insertRecursive(newVal, current = this.root) {
        if( this.isEmpty() ){
            this.root = new BSTNode( newVal );
            return this;
        }
        if( newVal === current.data ){
            current.count++;
            return this;
        }
        if ( newVal > current.data ){
            if( current.right ){
                return this.insertRecursive( newVal, current.right );
            } else {
                current.right = new BSTNode( newVal );
                return this;
            }
        } else {
            if( current.left ){
                return this.insertRecursive( newVal, current.left );
            } else {
                current.left = new BSTNode( newVal );
                return this;
            }
        }
    }
    /**
 * DFS Inorder: (Left, CurrNode, Right)
 * Converts this BST into an array following Depth First Search inorder.
 * See debugger call stack to help understand the recursion.
 * @param {Node} node The current node during the traversal of this tree.
 * @param {Array<number>} vals The data that has been visited so far.
 * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
 */
    toArrInorder(node = this.root, vals = []) {
        if(this.isEmpty == true){
            return false
        }
        if(node.left){
            this.toArrInorder(node.left, vals)
        }
        vals.push(node.data)
        if(node.right){
            this.toArrInorder(node.right, vals)
        }
        return vals
    }

/**
  * DFS Preorder: (CurrNode, Left, Right)
  * Converts this BST into an array following Depth First Search preorder.
  * @param {Node} node The current node during the traversal of this tree.
  * @param {Array<number>} vals The data that has been visited so far.
  * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
  */
    toArrPreorder(node = this.root, vals = []) {
        if(this.isEmpty == true){
            return false
        }
        vals.push(node.data)
        if(node.left){
            this.toArrInorder(node.left, vals)
        }
        if(node.right){
            this.toArrInorder(node.right, vals)
        }
        return vals
    }
/**
  * DFS Postorder (Left, Right, CurrNode)
  * Converts this BST into an array following Depth First Search postorder.
  * @param {Node} node The current node during the traversal of this tree.
  * @param {Array<number>} vals The data that has been visited so far.
  * @returns {Array<number>} The vals in DFS Preorder once all nodes visited.
  */
    toArrPostorder(node = this.root, vals = []) {
        if(this.isEmpty == true){
            return false
        }
        if(node.left){
            this.toArrInorder(node.left, vals)
        }
        if(node.right){
            this.toArrInorder(node.right, vals)
        }
        vals.push(node.data)
        return vals
    }


}

let newTree = new BinarySearchTree
console.log(newTree.minRecursive());
newTree.insert(50);
newTree.insert(25);
newTree.insert(10);
newTree.insert(40);
newTree.insert(75);
newTree.insert(60);
newTree.insert(90);
console.log(newTree.toArrInorder());
console.log(newTree.toArrPreorder());
console.log(newTree.toArrPostorder());
