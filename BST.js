class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BST{
    constructor(){
        this.root = null;
    }
    add(val){
        if(!this.root){ // if the root is null, or if the root doesn't exits, then create a Node(root), add the value as a argument
            this.root = new Node(val)
            return this;
        }
        let runner = this.root;
        while(runner !== null){
            if(runner.data < val){ //go to the right
                if(runner.right == null){
                    runner.right = new Node(val);
                    return this
                }
                else {
                runner = runner.right;
            }
            }
            else { // go to the left
                if(runner.left == null){
                    runner.left = new Node(val)
                    return this;
                }
                else {
                    runner = runner.left;
                }
            }
        }
    }

    size(current_node){
        if(current_node == null){
            return 0
        }
        return 1 + this.size(current_node.left) + this.size(current_node.right)
    }

}

let binarySearchTree1 = new BST();
binarySearchTree1.add(20).add(17).add(40).add(43).add(4)
console.log(binarySearchTree1.size(binarySearchTree1.root))