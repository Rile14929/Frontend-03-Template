# 四则运算
  - 词法
    - TokenNumber:
      - 1 2 3 4 5 6 7 8 9 0的组合
    - Operator: + - * /
    - Whitespace: `<SP>`
    - LineTerminator: `<LF>` `<CR>`
  - 语法
    ```
    <Expression>::=
      <AdditiveExpression><EOF>

    <AdditiveExpression>::=
      <MultiplicativeExpression>
      |<AdditiveExpression><+><MultiplicativeExpression>
      |<AdditiveExpression><-><MultiplicativeExpression>

    <MultiplicativeExpression>::=
      <Number>
      |<MultiplicativeExpression><*><Number>
      |<MultiplicativeExpression></><Number>
    ```