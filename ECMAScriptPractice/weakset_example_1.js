var ws = new WeakSet();
var obj ={};
var foo = {};

ws.add(foo);
ws.add(obj);

ws.has(obj);
ws.has(foo);

ws.delete(obj)
ws.has(obj);