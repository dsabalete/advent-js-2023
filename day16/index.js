function transformTree(arr) {
  if (arr.length === 0) {
    return null;
  }

  const createNode = (index) => {
    if (index >= arr.length || arr[index] === null) {
      return null;
    }

    const node = {
      value: arr[index],
      left: createNode(2 * index + 1),
      right: createNode(2 * index + 2),
    };

    return node;
  };

  return createNode(0);
}

// Example usage:
// const treeArray = [3, 1, 0, 8, 12, null, 1]
// const treeObject = transformTree(treeArray)
// console.log(treeObject)

module.exports = transformTree