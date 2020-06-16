## 链表

- 单向链表：链表中的每个节点包括至少两部分，分别是数据值和指向下一个节点的指针
- 循环链表：将链表最后一个元素的指针指向第一个节点
- 双向链表：增加节点指向上一个节点的指针
- 双向循环列表

```
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
}

const node1 = new Node('first');
const node2 = new Node('second');
const node3 = new Node('thrid');

link.append(node1)
link.append(node2)
link.append(node3)

console.log(link.valueOf());
// first -> second -> thrid -> 
```

### 链表的操作

- 增加节点

把插入结点的指针指向后一个节点，把上一个界定啊的指针指向插入的结点

    - 头部插入和中间插入
    ```
    pre.next = item;
    item.next = next;
    ```
    - 尾部插入
    ```
    this.last.next = item;
    this.last = item;
    ```

- 删除节点

把删除节点上一个节点的指针指向删除节点的下一个节点

    ```
    pre.next = pre.next.next;
    ```

- 查找节点

链表的查找操作必须一次遍历节点，通过上一个节点的指针找到下一个节点

可以看出，链表删除增加操作比较方便，但是查找操作复杂度未O(n), 并且删除新增节点时，往往会伴随一个查找的操作，因此链表并不实用，链表的意义在于，在数据元素个数不确定时，不局限于连续的内存空间，实现数据存储方式按顺序存储

### 链表的常见操作

#### 链表逆序

```

reverse = () => {
    let curr = this.head;
    while(curr) {
        let next = curr.next;
        curr.next = null;
        this.head = next;
    }
}
```

#### 找到奇数长度链表中间位置节点

- 通过两次循环，第一次计算链表长度，第二次找到中间位置索引的节点
- 利用快慢指针进行处理，快指针每次向后跳两个节点，慢指针每次向后一个节点，当快指针到达列表尾部，慢指针所在位置就是中心节点

```

```

####  判断链表是否有环

同样利用快慢指针处理，如果链表有环，快慢指针最终会相遇，否则快指针优先到达链表尾部，完成遍历

```

```

