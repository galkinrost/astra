var should = require('should');
var astra = require('../lib/astra');

describe('Astra', function () {
    it('run()', function () {
        var ast = {
            "type": "Program",
            "body": [
                {
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "angular"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "module"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "App.directives",
                                                "raw": "\"App.directives\""
                                            }
                                        ]
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "directive"
                                    }
                                },
                                "arguments": [
                                    {
                                        "type": "Literal",
                                        "value": "myDirective",
                                        "raw": "\"myDirective\""
                                    },
                                    {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "defaults": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                                {
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "ObjectExpression",
                                                        "properties": [
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "template"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/templates/template.html",
                                                                    "raw": "\"/app/templates/template.html\""
                                                                },
                                                                "kind": "init"
                                                            },
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "styles"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/styles/styles.css",
                                                                    "raw": "\"/app/styles/styles.css\""
                                                                },
                                                                "kind": "init"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "rest": null,
                                        "generator": false,
                                        "expression": false
                                    }
                                ]
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "directive"
                            }
                        },
                        "arguments": [
                            {
                                "type": "Literal",
                                "value": "myDirective",
                                "raw": "\"myDirective\""
                            },
                            {
                                "type": "ArrayExpression",
                                "elements": [
                                    {
                                        "type": "Literal",
                                        "value": "$scope",
                                        "raw": "'$scope'"
                                    },
                                    {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [
                                            {
                                                "type": "Identifier",
                                                "name": "$scope"
                                            }
                                        ],
                                        "defaults": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                                {
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "ObjectExpression",
                                                        "properties": [
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "template"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/templates/template.html",
                                                                    "raw": "\"/app/templates/template.html\""
                                                                },
                                                                "kind": "init"
                                                            },
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "styles"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/styles/styles.css",
                                                                    "raw": "\"/app/styles/styles.css\""
                                                                },
                                                                "kind": "init"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "rest": null,
                                        "generator": false,
                                        "expression": false
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]};
        var result = {
            "type": "Program",
            "body": [
                {
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "angular"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "module"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "App.directives",
                                                "raw": "\"App.directives\""
                                            }
                                        ]
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "directive"
                                    }
                                },
                                "arguments": [
                                    {
                                        "type": "Literal",
                                        "value": "newMyDirective",
                                        "raw": "\"newMyDirective\""
                                    },
                                    {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "defaults": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                                {
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "ObjectExpression",
                                                        "properties": [
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "template"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/templates/template.html",
                                                                    "raw": "\"/app/templates/template.html\""
                                                                },
                                                                "kind": "init"
                                                            },
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "styles"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/styles/styles.css",
                                                                    "raw": "\"/app/styles/styles.css\""
                                                                },
                                                                "kind": "init"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "rest": null,
                                        "generator": false,
                                        "expression": false
                                    }
                                ]
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "directive"
                            }
                        },
                        "arguments": [
                            {
                                "type": "Literal",
                                "value": "newMyDirective",
                                "raw": "\"newMyDirective\""
                            },
                            {
                                "type": "ArrayExpression",
                                "elements": [
                                    {
                                        "type": "Literal",
                                        "value": "$scope",
                                        "raw": "'$scope'"
                                    },
                                    {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [
                                            {
                                                "type": "Identifier",
                                                "name": "$scope"
                                            }
                                        ],
                                        "defaults": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                                {
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "ObjectExpression",
                                                        "properties": [
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "template"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/templates/template.html",
                                                                    "raw": "\"/app/templates/template.html\""
                                                                },
                                                                "kind": "init"
                                                            },
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "styles"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/styles/styles.css",
                                                                    "raw": "\"/app/styles/styles.css\""
                                                                },
                                                                "kind": "init"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "rest": null,
                                        "generator": false,
                                        "expression": false
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]};
        var newAst = astra(ast)
            .when({
                "type": "Literal",
                "value": "myDirective",
                "raw": "\"myDirective\""
            }, function (chunk) {
                chunk.value = "newMyDirective";
                chunk.raw = "\"newMyDirective\""
            })
            .run();

        JSON.stringify(newAst).should.be.equal(JSON.stringify(result));
    });
    it('run() async', function (done) {
        var ast = {
            "type": "Program",
            "body": [
                {
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "angular"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "module"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "App.directives",
                                                "raw": "\"App.directives\""
                                            }
                                        ]
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "directive"
                                    }
                                },
                                "arguments": [
                                    {
                                        "type": "Literal",
                                        "value": "myDirective",
                                        "raw": "\"myDirective\""
                                    },
                                    {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "defaults": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                                {
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "ObjectExpression",
                                                        "properties": [
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "template"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/templates/template.html",
                                                                    "raw": "\"/app/templates/template.html\""
                                                                },
                                                                "kind": "init"
                                                            },
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "styles"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/styles/styles.css",
                                                                    "raw": "\"/app/styles/styles.css\""
                                                                },
                                                                "kind": "init"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "rest": null,
                                        "generator": false,
                                        "expression": false
                                    }
                                ]
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "directive"
                            }
                        },
                        "arguments": [
                            {
                                "type": "Literal",
                                "value": "myDirective",
                                "raw": "\"myDirective\""
                            },
                            {
                                "type": "ArrayExpression",
                                "elements": [
                                    {
                                        "type": "Literal",
                                        "value": "$scope",
                                        "raw": "'$scope'"
                                    },
                                    {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [
                                            {
                                                "type": "Identifier",
                                                "name": "$scope"
                                            }
                                        ],
                                        "defaults": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                                {
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "ObjectExpression",
                                                        "properties": [
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "template"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/templates/template.html",
                                                                    "raw": "\"/app/templates/template.html\""
                                                                },
                                                                "kind": "init"
                                                            },
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "styles"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/styles/styles.css",
                                                                    "raw": "\"/app/styles/styles.css\""
                                                                },
                                                                "kind": "init"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "rest": null,
                                        "generator": false,
                                        "expression": false
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]};
        var result = {
            "type": "Program",
            "body": [
                {
                    "type": "ExpressionStatement",
                    "expression": {
                        "type": "CallExpression",
                        "callee": {
                            "type": "MemberExpression",
                            "computed": false,
                            "object": {
                                "type": "CallExpression",
                                "callee": {
                                    "type": "MemberExpression",
                                    "computed": false,
                                    "object": {
                                        "type": "CallExpression",
                                        "callee": {
                                            "type": "MemberExpression",
                                            "computed": false,
                                            "object": {
                                                "type": "Identifier",
                                                "name": "angular"
                                            },
                                            "property": {
                                                "type": "Identifier",
                                                "name": "module"
                                            }
                                        },
                                        "arguments": [
                                            {
                                                "type": "Literal",
                                                "value": "App.directives",
                                                "raw": "\"App.directives\""
                                            }
                                        ]
                                    },
                                    "property": {
                                        "type": "Identifier",
                                        "name": "directive"
                                    }
                                },
                                "arguments": [
                                    {
                                        "type": "Literal",
                                        "value": "newMyDirective",
                                        "raw": "\"newMyDirective\""
                                    },
                                    {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [],
                                        "defaults": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                                {
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "ObjectExpression",
                                                        "properties": [
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "template"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/templates/template.html",
                                                                    "raw": "\"/app/templates/template.html\""
                                                                },
                                                                "kind": "init"
                                                            },
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "styles"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/styles/styles.css",
                                                                    "raw": "\"/app/styles/styles.css\""
                                                                },
                                                                "kind": "init"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "rest": null,
                                        "generator": false,
                                        "expression": false
                                    }
                                ]
                            },
                            "property": {
                                "type": "Identifier",
                                "name": "directive"
                            }
                        },
                        "arguments": [
                            {
                                "type": "Literal",
                                "value": "newMyDirective",
                                "raw": "\"newMyDirective\""
                            },
                            {
                                "type": "ArrayExpression",
                                "elements": [
                                    {
                                        "type": "Literal",
                                        "value": "$scope",
                                        "raw": "'$scope'"
                                    },
                                    {
                                        "type": "FunctionExpression",
                                        "id": null,
                                        "params": [
                                            {
                                                "type": "Identifier",
                                                "name": "$scope"
                                            }
                                        ],
                                        "defaults": [],
                                        "body": {
                                            "type": "BlockStatement",
                                            "body": [
                                                {
                                                    "type": "ReturnStatement",
                                                    "argument": {
                                                        "type": "ObjectExpression",
                                                        "properties": [
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "template"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/templates/template.html",
                                                                    "raw": "\"/app/templates/template.html\""
                                                                },
                                                                "kind": "init"
                                                            },
                                                            {
                                                                "type": "Property",
                                                                "key": {
                                                                    "type": "Identifier",
                                                                    "name": "styles"
                                                                },
                                                                "value": {
                                                                    "type": "Literal",
                                                                    "value": "/app/styles/styles.css",
                                                                    "raw": "\"/app/styles/styles.css\""
                                                                },
                                                                "kind": "init"
                                                            }
                                                        ]
                                                    }
                                                }
                                            ]
                                        },
                                        "rest": null,
                                        "generator": false,
                                        "expression": false
                                    }
                                ]
                            }
                        ]
                    }
                }
            ]};
        astra(ast, true)
            .when({
                "type": "Literal",
                "value": "myDirective",
                "raw": "\"myDirective\""
            }, function (chunk, done) {
                chunk.value = "newMyDirective";
                chunk.raw = "\"newMyDirective\""
                setTimeout(done,1000);
            })
            .run(function (err, newAst) {
                JSON.stringify(newAst).should.be.equal(JSON.stringify(result));
                done();
            });

    });
});

