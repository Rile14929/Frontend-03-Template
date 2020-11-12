# 手势
- 基础手势体系 https://www.processon.com/diagraming/5fa94599637689653d906025
- listen（监听） -> recognize（识别） -> dispatch（分发）
- new Listener(new Recognizer(dispatch))

# 监听
- addeventListener 第三个参数
  - capture: Boolean，表示 listener 会在该类型的事件捕获阶段传播到该 EventTarget 时触发。
  - once: Boolean，表示 listener 在添加之后最多只调用一次。如果是 true， listener 会在其被调用之后自动移除。
  - passive: Boolean，设置为true时，表示 listener 永远不会调用 preventDefault()。如果 listener 仍然调用了这个函数，客户端将会忽略它并抛出一个控制台警告。查看 使用 passive 改善的滚屏性能 了解更多.