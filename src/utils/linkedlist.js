/**
 * The nodes of the linked list
 *
 * @param object i - The object node to add to the node
 */
function Node(i) {
  let item = i,
    next = null;

  return {
    item,
    next
  };
}

/**
 * A linked list
 */
function LinkedList() {
  let _head = null;

  function insert(item) {
    // If the node exists, remove it and reinsert at correct position
    const existingNode = remove(item.getName());
    let newNode = existingNode ? existingNode : Node(item);

    // If the list is empty, insert node at head
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

      // Run through list until node is greater than runner
      while (runner !== null && runner.item.compareTo(newNode.item) < 0) {
        previous = runner;
        runner = runner.next;
      }

      newNode.next = runner;
      previous.next = newNode;
    }
  }

  /**
   * Find the node
   *
   * @param string name - The string value of the node to find
   *
   * @returns bool|Team - The found team or false if not found
   */
  function find(value) {
    let runner = null,
      previous = null;

    if (_head !== null) {
      if (_head.item.equal(value)) {
        return _head.item;
      }

      runner = _head.next;
      previous = _head;

      while (runner !== null) {
        if (runner.item.equal(value)) {
          return runner.item;
        }

        previous = runner;
        runner = runner.next;
      }
    }

    return false;
  }

  /**
   * Remove the node
   *
   * @param string name - The string value of the node to find and remove
   *
   * @return bool|Node - The found node or false if not found
   */
  function remove(value) {
    let runner = null,
      previous = null;

    if (_head !== null) {
      if (_head.item.equal(value)) {
        const removed = _head;

        _head = null;

        return removed;
      }

      runner = _head.next;
      previous = _head;

      while (runner !== null) {
        if (runner.item.equal(value)) {
          const removed = runner;

          previous.next = runner.next;
          runner = null;

          return removed;
        }

        previous = runner;
        runner = runner.next;
      }
    }

    return false;
  }

  /**
   * A generator function to return an iterator to loop over data structure
   */
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
}

module.exports = LinkedList;
