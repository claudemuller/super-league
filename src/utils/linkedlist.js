function Node() {
  let item = null,
    next = null;

  return {
    item,
    next
  };
}

function LinkedList() {
  let _head = null;

  function insert(item) {
    const newNode = Node();

    newNode.item = item;

    if (_head === null) {
      _head = newNode;
    } else if (_head.item.compareTo(newNode.item) > 0) {
      newNode.next = _head;
      _head = newNode;
    } else {
      let runner = null,
        previous = null;

      runner = _head.next;
      previous = _head;

      while (runner !== null && runner.item.compareTo(item) < 0) {
        previous = runner;
        runner = runner.next;
      }

      newNode.next = runner;
      previous.next = newNode;
    }
  }

  function find(item) {
    let runner = null,
      previous = null;

    if (_head !== null) {
      runner = _head.next;
      previous = _head;

      while (runner !== null) {
        if (runner !== null && runner.item.getName() === item.getName()) {
          return runner.item;
        }

        previous = runner;
        runner = runner.next;
      }
    }

    return false;
  }

  function* enumerate() {
    let current = _head;

    while (current !== null) {
      yield current.item;
      current = current.next;
    }
  }

  return {
    insert,
    find,
    enumerate
  };
};

module.exports = LinkedList;
