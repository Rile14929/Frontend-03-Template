# 深度优先搜索算法（Depth-First-Search）
> 是一种用于遍历或搜索树或图的算法。 这个算法会尽可能深的搜索树的分支。 当节点v的所在边都己被探寻过，搜索将回溯到发现节点v的那条边的起始节点。 这一过程一直进行到已发现从源节点可达的所有节点为止。

```javascript
function deepTraversal(node) {  
  var nodeList = [];  
  if (node) {  
      var stack = [];  
      stack.push(node);  
      while (stack.length != 0) {  
          var childrenItem = stack.pop();  
          nodeList.push(childrenItem);  
          var childrenList = childrenItem.children;  
          for (var i = childrenList.length - 1; i >= 0; i--)  
              stack.push(childrenList[i]);  
      }  
  }    
  return nodeList;  
}
```

# 广度优先搜索算法（Breadth-First-Search）
> 简单的说，BFS是从根节点开始，沿着树(图)的宽度遍历树(图)的节点。
  如果所有节点均被访问，则算法中止。
  BFS同样属于盲目搜索。
  一般用队列数据结构来辅助实现BFS算法。

```javascript
function wideTraversal(node) {  
  var nodes = [];  
  if (node != null) {  
      var queue = [];  
      queue.unshift(node);  
      while (queue.length != 0) {  
          var item = queue.shift();  
          nodes.push(item);  
          var children = item.children;  
          for (var i = 0; i < children.length; i++)  
              queue.push(children[i]);  
      }  
  }  
  return nodes;  
}
```