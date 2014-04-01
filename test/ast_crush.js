var should = require('should');
var astCrush = require('../lib/ast_crush');

describe('ast crush', function () {
    it('Should crush', function () {
        var ast = {"type": "Program", "body": [
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

        var results = [
            {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""},
            {"type": "Identifier", "name": "styles"},
            {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"},
            {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""},
            {"type": "Identifier", "name": "template"},
            {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
            {"type": "ObjectExpression", "properties": [
                {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
            ]},
            {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
            ]}},
            {"type": "BlockStatement", "body": [
                {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                    {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                    {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                ]}}
            ]},
            {"type": "Identifier", "name": "$scope"},
            {"type": "FunctionExpression", "id": null, "params": [
                {"type": "Identifier", "name": "$scope"}
            ], "defaults": [], "body": {"type": "BlockStatement", "body": [
                {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                    {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                    {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                ]}}
            ]}, "rest": null, "generator": false, "expression": false},
            {"type": "Literal", "value": "$scope", "raw": "'$scope'"},
            {"type": "ArrayExpression", "elements": [
                {"type": "Literal", "value": "$scope", "raw": "'$scope'"},
                {"type": "FunctionExpression", "id": null, "params": [
                    {"type": "Identifier", "name": "$scope"}
                ], "defaults": [], "body": {"type": "BlockStatement", "body": [
                    {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                        {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                        {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                    ]}}
                ]}, "rest": null, "generator": false, "expression": false}
            ]},
            {"type": "Literal", "value": "myDirective", "raw": "\"myDirective\""},
            {"type": "Identifier", "name": "directive"},
            {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""},
            {"type": "Identifier", "name": "styles"},
            {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"},
            {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""},
            {"type": "Identifier", "name": "template"},
            {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
            {"type": "ObjectExpression", "properties": [
                {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
            ]},
            {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
            ]}},
            {"type": "BlockStatement", "body": [
                {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                    {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                    {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                ]}}
            ]},
            {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": [
                {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                    {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                    {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                ]}}
            ]}, "rest": null, "generator": false, "expression": false},
            {"type": "Literal", "value": "myDirective", "raw": "\"myDirective\""},
            {"type": "Identifier", "name": "directive"},
            {"type": "Literal", "value": "App.directives", "raw": "\"App.directives\""},
            {"type": "Identifier", "name": "module"},
            {"type": "Identifier", "name": "angular"},
            {"type": "MemberExpression", "computed": false, "object": {"type": "Identifier", "name": "angular"}, "property": {"type": "Identifier", "name": "module"}},
            {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "Identifier", "name": "angular"}, "property": {"type": "Identifier", "name": "module"}}, "arguments": [
                {"type": "Literal", "value": "App.directives", "raw": "\"App.directives\""}
            ]},
            {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "Identifier", "name": "angular"}, "property": {"type": "Identifier", "name": "module"}}, "arguments": [
                {"type": "Literal", "value": "App.directives", "raw": "\"App.directives\""}
            ]}, "property": {"type": "Identifier", "name": "directive"}},
            {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "Identifier", "name": "angular"}, "property": {"type": "Identifier", "name": "module"}}, "arguments": [
                {"type": "Literal", "value": "App.directives", "raw": "\"App.directives\""}
            ]}, "property": {"type": "Identifier", "name": "directive"}}, "arguments": [
                {"type": "Literal", "value": "myDirective", "raw": "\"myDirective\""},
                {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": [
                    {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                        {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                        {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                    ]}}
                ]}, "rest": null, "generator": false, "expression": false}
            ]},
            {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "Identifier", "name": "angular"}, "property": {"type": "Identifier", "name": "module"}}, "arguments": [
                {"type": "Literal", "value": "App.directives", "raw": "\"App.directives\""}
            ]}, "property": {"type": "Identifier", "name": "directive"}}, "arguments": [
                {"type": "Literal", "value": "myDirective", "raw": "\"myDirective\""},
                {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": [
                    {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                        {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                        {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                    ]}}
                ]}, "rest": null, "generator": false, "expression": false}
            ]}, "property": {"type": "Identifier", "name": "directive"}},
            {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "Identifier", "name": "angular"}, "property": {"type": "Identifier", "name": "module"}}, "arguments": [
                {"type": "Literal", "value": "App.directives", "raw": "\"App.directives\""}
            ]}, "property": {"type": "Identifier", "name": "directive"}}, "arguments": [
                {"type": "Literal", "value": "myDirective", "raw": "\"myDirective\""},
                {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": [
                    {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                        {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                        {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                    ]}}
                ]}, "rest": null, "generator": false, "expression": false}
            ]}, "property": {"type": "Identifier", "name": "directive"}}, "arguments": [
                {"type": "Literal", "value": "myDirective", "raw": "\"myDirective\""},
                {"type": "ArrayExpression", "elements": [
                    {"type": "Literal", "value": "$scope", "raw": "'$scope'"},
                    {"type": "FunctionExpression", "id": null, "params": [
                        {"type": "Identifier", "name": "$scope"}
                    ], "defaults": [], "body": {"type": "BlockStatement", "body": [
                        {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                            {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                            {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                        ]}}
                    ]}, "rest": null, "generator": false, "expression": false}
                ]}
            ]},
            {"type": "ExpressionStatement", "expression": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "Identifier", "name": "angular"}, "property": {"type": "Identifier", "name": "module"}}, "arguments": [
                {"type": "Literal", "value": "App.directives", "raw": "\"App.directives\""}
            ]}, "property": {"type": "Identifier", "name": "directive"}}, "arguments": [
                {"type": "Literal", "value": "myDirective", "raw": "\"myDirective\""},
                {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": [
                    {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                        {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                        {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                    ]}}
                ]}, "rest": null, "generator": false, "expression": false}
            ]}, "property": {"type": "Identifier", "name": "directive"}}, "arguments": [
                {"type": "Literal", "value": "myDirective", "raw": "\"myDirective\""},
                {"type": "ArrayExpression", "elements": [
                    {"type": "Literal", "value": "$scope", "raw": "'$scope'"},
                    {"type": "FunctionExpression", "id": null, "params": [
                        {"type": "Identifier", "name": "$scope"}
                    ], "defaults": [], "body": {"type": "BlockStatement", "body": [
                        {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                            {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                            {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                        ]}}
                    ]}, "rest": null, "generator": false, "expression": false}
                ]}
            ]}},
            {"type": "Program", "body": [
                {"type": "ExpressionStatement", "expression": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "CallExpression", "callee": {"type": "MemberExpression", "computed": false, "object": {"type": "Identifier", "name": "angular"}, "property": {"type": "Identifier", "name": "module"}}, "arguments": [
                    {"type": "Literal", "value": "App.directives", "raw": "\"App.directives\""}
                ]}, "property": {"type": "Identifier", "name": "directive"}}, "arguments": [
                    {"type": "Literal", "value": "myDirective", "raw": "\"myDirective\""},
                    {"type": "FunctionExpression", "id": null, "params": [], "defaults": [], "body": {"type": "BlockStatement", "body": [
                        {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                            {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                            {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                        ]}}
                    ]}, "rest": null, "generator": false, "expression": false}
                ]}, "property": {"type": "Identifier", "name": "directive"}}, "arguments": [
                    {"type": "Literal", "value": "myDirective", "raw": "\"myDirective\""},
                    {"type": "ArrayExpression", "elements": [
                        {"type": "Literal", "value": "$scope", "raw": "'$scope'"},
                        {"type": "FunctionExpression", "id": null, "params": [
                            {"type": "Identifier", "name": "$scope"}
                        ], "defaults": [], "body": {"type": "BlockStatement", "body": [
                            {"type": "ReturnStatement", "argument": {"type": "ObjectExpression", "properties": [
                                {"type": "Property", "key": {"type": "Identifier", "name": "template"}, "value": {"type": "Literal", "value": "/app/templates/template.html", "raw": "\"/app/templates/template.html\""}, "kind": "init"},
                                {"type": "Property", "key": {"type": "Identifier", "name": "styles"}, "value": {"type": "Literal", "value": "/app/styles/styles.css", "raw": "\"/app/styles/styles.css\""}, "kind": "init"}
                            ]}}
                        ]}, "rest": null, "generator": false, "expression": false}
                    ]}
                ]}}
            ]}
        ];


        JSON.stringify(astCrush(ast)).should.be.equal(JSON.stringify(results));
    });
});