const tree = {
  value: "A",
  left: {
    value: "B",
    left: {
      value: "D",
    },
    right: {
      value: "E",
    },
  },
  right: {
    value: "C",
    left: {
      value: "F",
    },
    right: {
      value: "G",
    },
  },
};

function preorder(root) {
  if (!root) {
    return;
  }
  console.log("当前遍历的结点：", root.value);
  preorder(root.left);
  preorder(root.right);
}

function inorder(root) {
  if (!root) {
    return;
  }
  inorder(root.left);
  console.log("当前遍历的结点：", root.value);

  inorder(root.right);
}

function postorder(root) {
  if (!root) {
    return;
  }

  postorder(root.left);
  postorder(root.right);
  console.log("当前遍历的结点：", root.value);
}

console.log("preorder");
preorder(tree);
console.log("inorder");
inorder(tree);
console.log("postorder");
postorder(tree);
