


class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Link {
    constructor() {
        this.head = null;
        this.last = null;
    }

    append = (node) => {
        if (this.last) {
            this.last.next = node;
            this.last = node;
        } else {
            this.head = node;
            this.last = node;
        }
    }

    valueOf = () => {
        let str = '';
        let curr = this.head;
        while(curr) {
            str += curr.value + ' -> ';

            curr = curr.next;
        }
        return str;
    }

    reverse = () => {
        let curr = this.head;
        while(curr) {
            let next = curr.next;
            curr.next = null;
            this.head = next;
        }
    }

    findcenter = () => {
        let fast = this.head;
        let low = this.head;

        try {
            while(true) {
                fast = fast.next.next;
                low = low.next;
                if (fast === this.last) {
                    return low.value;
                }
            }
            
        } catch(e) {
            throw new Error('链表长度不是奇数，或长度小于三')
        }
        
    }

    checkCircle = () => {
       
    }
}

const node1 = new Node('first');
const node2 = new Node('second');
const node3 = new Node('thrid');
const node4 = new Node('forth');

const link = new Link();

link.append(node1)
link.append(node2)
link.append(node3)
// link.append(node4)

// link.reverse();

console.log(link.valueOf());