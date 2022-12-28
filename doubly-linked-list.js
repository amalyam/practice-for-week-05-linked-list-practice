class DoublyLinkedListNode {
  constructor(val) {
    this.value = val;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.length = 0;
  }

  addToHead(val) {
    if (!this.head) {
      this.head = new DoublyLinkedListNode(val);
      this.tail = this.head;
    } else {
      let newNode = new DoublyLinkedListNode(val);
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }

  addToTail(val) {
    if (!this.head) {
      this.head = new DoublyLinkedListNode(val);
    } else {
      let current = this.head;
      while (current) {
        if (!current.next) {
          let newNode = new DoublyLinkedListNode(val);
          this.tail = newNode;
          current.next = newNode;
          newNode.prev = current;
          newNode.next = null;

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
      process.stdout.write(`${current.value} <-> `);
      current = current.next;
    }

    console.log("NULL");
  }
}

module.exports = DoublyLinkedList;
