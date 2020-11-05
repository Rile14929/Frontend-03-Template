学习笔记

- setInterval(() => {}, 16)
- let tick = () => {setTimeout(tick, 16)}
- let tick = () => {requestAnimationFrame(tick)}
- 使用tick较为安全，setInterval有可能会产生积压