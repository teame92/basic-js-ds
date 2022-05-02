const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
    constructor() {
        this.roots = null
    }
    root() {
        return this.roots
    }

    add(data) {

        function addInside(node, data) {
            if (!node) {
                return new Node(data)
            }
            if (node.data === data) {
                return node
            }
            if (data < node.data) {
                node.left = addInside(node.left, data)
            } else {
                node.right = addInside(node.right, data)
            }
            return node
        }

        this.roots = addInside(this.roots, data)
    }

    has(data) {

        function searchData(node, data) {
            if (!node) {
                return false
            }
            if (node.data === data) {
                return true
            }
            if (data < node.data) {
                return searchData(node.left, data)
            } else {
                return searchData(node.right, data)
            }
        }

        return searchData(this.roots, data)
    }

    find(data) {

        function searchData(node, data) {
            if (!node) {
                return null
            }
            if (node.data === data) {
                return node
            }
            if (data < node.data) {
                return searchData(node.left, data)
            } else {
                return searchData(node.right, data)
            }
        }

        return searchData(this.roots, data)
    }

    remove(data) {

        function removeNode(node, data) {
            if (!node) {
                return null
            }
            if (data < node.data) {
                node.left = removeNode(node.left, data)
                return node
            } else if (node.data < data) {
                node.right = removeNode(node.right, data)
                return node
            } else {
                if (!node.left && !node.right) {
                    return null
                }
                if (!node.left) {
                    node = node.right
                    return node
                }
                if (!node.right) {
                    node = node.left
                    return node
                }
                let rightMin = node.right
                while (rightMin.left) {
                    rightMin = rightMin.left
                }
                node.data = rightMin.data
                node.right = removeNode(node.right, rightMin.data)
                return node
            }
        }

        this.roots = removeNode(this.roots, data)
    }

    min() {
        if (!this.roots) {
            return
        }
        let node = this.roots
        while (node.left) {
            node = node.left
        }
        return node.data
    }

    max() {
        if (!this.roots) {
            return
        }
        let node = this.roots
        while (node.right) {
            node = node.right
        }
        return node.data
    }
}

module.exports = {
    BinarySearchTree
};