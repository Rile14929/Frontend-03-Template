- 单元测试工具
  - mocha
    ```javascript
    // add.js
    function add(x, y) {
      return x + y;
    }
    module.exports = add;
    ```
    ```javascript
    // add.test.js
    var assert = require('assert')
    var add = require('./add.js');

    describe('加法函数的测试', function() {
      it('1 加 1 应该等于 2', function() {
        assert.equal(add(1, 1), 2)
      });
    });
    ```

    - 上面这段代码，就是测试脚本，它可以独立执行。测试脚本里面应该包括一个或多个describe块，每个describe块应该包括一个或多个it块。
    - describe块称为"测试套件"（test suite），表示一组相关的测试。它是一个函数，第一个参数是测试套件的名称（"加法函数的测试"），第二个参数是一个实际执行的函数。
    - it块称为"测试用例"（test case），表示一个单独的测试，是测试的最小单位。它也是一个函数，第一个参数是测试用例的名称（"1 加 1 应该等于 2"），第二个参数是一个实际执行的函数。
    - assert是nodejs内置的模块

  - jest

- 代码覆盖工具（code coverage）
  - nyc
    - @istanbuljs/nyc-config-babel
    - babel-plugin-istanbul
    - 顺道去查了一下nyc的工作原理 https://zhuanlan.zhihu.com/p/88524418