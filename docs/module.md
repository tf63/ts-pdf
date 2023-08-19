## インストール
```
    npm install --save-dev typescript ts-node
    # fsモジュールとかの型ヒント
    npm install --save-dev @types/node
    npm install markdown-it
```

**ts-node**
```
    # ファイルから実行
    ./node_modules/.bin/ts_node app.ts
    # or PATH=$PATH:/app/node_modules/.bin/

    # 対話形式で実行
    npx ts-node
    >>> 
```

**remark**
```
    npm install unified remark-parse remark-rehype rehype-stringify
```

**remark-math**
```
    npm install remark-math remark-html-katex
```