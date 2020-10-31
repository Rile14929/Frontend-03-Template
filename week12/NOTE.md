# Proxy

## 概述
  - Proxy 用于修改某些操作的默认行为，等同于在语言层面做出修改，所以属于一种“元编程”（meta programming），即对编程语言进行编程。
  - 为底层库设计的一种特性

## 实例方法
  - get
  - set
  - has
  - deleteProperty
  - ownKeys
  - getOwnPropertyDescriptor
  - defineProperty
  - preventExtensions
  - getPrototypeOf
  - isExtensible
  - setPrototypeOf
  - apply
  - construct

# Range

## 属性
  - collapsed
  - commonAncestorContainer
  - endContainer
  - endOffset
  - startContainer
  - startOffset 
## 方法
  - 定位方法
    - setStart
    - setEnd
    - setStartBefore
    - setStartAfter
    - setEndBefore
    - setEndAfter
    - selectNode
    - selectNodeContents
    - collapse
  - 编辑方法
    - cloneContents
    - deleteContents
    - insertNode

# reactive
- 定义
  - reactive API 定义为传入一个对象并返回一个基于原对象的响应式代理，即返回一个 Proxy，相当于 Vue2x 版本中的 Vue.observer。 
- 优点
  - 在 Vue 2x 中数据的响应式处理是基于 Object.defineProperty() 的，但是它只会侦听对象的属性，并不能侦听对象
  - reactive API 是基于 ES2015 Proxy 实现对数据对象的响应式处理，即在 Vue3.0 可以往对象中添加属性，并且这个属性也会具有响应式的效果