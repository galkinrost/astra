ASTRA
=========

ASTRA is easy to use AST traverse library

Installation
------------

```sh
npm install --save astra
```

Usage
------

```javascript

var astra=require('astra');

var newAst=astra(ast)
    .when(pattern,function(chunk){

    })
    .when(anotherPattern,function(chunk){

    })
    .run();

```


License
----

MIT

