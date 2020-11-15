# 工具链
  - YEOMAN（脚手架生成器）https://yeoman.io/
    - User interactions
      - Prompts
    - file system
    - managing dependencies

  - webpack
    - 核心思路：打包出一个js文件，用html手动去引用js文件
    - 多文件合并，通过loader，plugin控制合并的规则和对文本进行一些转换
    - webpack-cli 提供了webpack命令
    - loader的使用把一个source变成目标代码，纯粹的文本的转换，会把根据所转出来的import语句或者reqiure函数所对应的文件加载进来。
    - 通过test规则，决定什么样的后缀名的文件，使用什么样的loader，也可以使用多个loader处理同一个文件
    - plugin更像是一种独立的机制

  - babel
    - 把新版本的js编译成老版本的js

