let root = {
  "data": "A", "children": [{
    "data": "B", "children":
      [{ "data": "D", "children": [] }]
  }, {
    "data": "C", "children":
      [{
        "data": "E", "children": [{ "data": "G", "children": [] },
        { "data": "H", "children": [] }]
      }, { "data": "F", "children": [] }]
  }]
};
/* the upper code is same as this one just for reading purpose
root = {'data': 'A', 'children': []}
node2 = {'data': 'B', 'children': []}
node3 = {'data': 'C', 'children': []}
node4 = {'data': 'D', 'children': []}
node5 = {'data': 'E', 'children': []}
node6 = {'data': 'F', 'children': []}
node7 = {'data': 'G', 'children': []}
node8 = {'data': 'H', 'children': []}
root['children'] = [node2, node3]
node2['children'] = [node4]
node3['children'] = [node5, node6]
node5['children'] = [node7, node8]
*/


function preorderTraverse(node) {
  console.log(node['data']);
  if (Array.isArray(node['children'])) {
    if (node["children"].length > 0) {
      for (let child of node["children"]) {
        preorderTraverse(child);
      }
    }
  }
  return;
}
preorderTraverse(root);

console.log('now Postorder');

function postOrderTraverse(node) {
  if (Array.isArray(node['children'])) {
    if (node['children'].length > 0) {
      for (let parent in node['children']) {
        postOrderTraverse(node['children'][parent])
      }
    }
  }
  console.log(node.data);
  return;
}
postOrderTraverse(root)

console.log('now inOrder Transversal in Bin Trees');

function inOrderTransverse(node) {
  if (Array.isArray(node['children'])) {
    if (node.children.length >= 1) {
      inOrderTransverse(node['children'][0])
      // printing left children first
    }
    console.log(node.data);
    if (node['children'].length >= 2) {
      inOrderTransverse(node['children'][1])
      // printing right childen first
    }
  }
  return;//base case
}

inOrderTransverse(root)


console.log("finding Eight letter names in a Tree");
const rootNames = {
  'name': 'Alice', 'children': [{
    'name': 'Bob', 'children':
      [{ 'name': 'Darya', 'children': [] }]
  }, {
    'name': 'Caroline',
    'children': [{
      'name': 'Eve', 'children': [{
        'name': 'Gonzalo',
        'children': []
      }, { 'name': 'Hadassah', 'children': [] }]
    }, {
      'name': 'Fred',
      'children': []
    }]
  }]
};
function find8letteredNames(node) {
  if (Array.isArray(node['children'])) {
    if (node.name.length == 8) console.log(node.name);
    if (node['children'].length > 0) {
      for (let child of node['children']) {
        find8letteredNames(child);
      }
    }
  }
}

find8letteredNames(rootNames)

console.log('\n\nMaxTreeDepth');

let depth = 0, maxDepth = 0;
console.log(getDepth(root, depth, maxDepth));

function getDepth(node, depth) {
  if (node.children.length > 0) {
    depth++;
    if(maxDepth < depth) maxDepth = depth;
    for (let child of node.children) {
      getDepth(child,depth)
    }
  }
  return;
}
console.log(maxDepth);