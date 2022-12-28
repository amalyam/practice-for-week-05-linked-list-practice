class LinkedListNode {
  constructor(val, next) {
    this.value = val;
    this.next = null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = null;
    this.length = 0;
  }

  addToHead(val) {
    // this.head = new LinkedListNode(val, this.head);
    //console.log(`${this.head.next.value}`);

    const newNode = new LinkedListNode(val, null);
    newNode.next = this.head;
    this.head = newNode;

    this.length++;
  }

  addToTail(val) {
    if (!this.head) {
      this.head = new LinkedListNode(val, null);
    } else {
      let current = this.head;
      while (current) {
        if (!current.next) {
          const newNode = new LinkedListNode(val, null);
          current.next = newNode;
          break;
        } else {
          current = current.next;
        }
      }
    }
    this.length++;
  }

  // You can use this function to help debug
  print() {
    let current = this.head;

    while (current) {
      process.stdout.write(`${current.value} -> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

/* let linkedList = new LinkedList();

linkedList.addToTail(1);
linkedList.addToTail(2);
linkedList.addToTail(3);

linkedList.print(); */

module.exports = LinkedList;
