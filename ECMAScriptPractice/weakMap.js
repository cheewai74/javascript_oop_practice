/**
 *  The WeakMap obj is a collection of key/value pairs in which the keys are weakly referenced.
 *  keys of WeakMaps are of the type Obj only. Primitive data types are as keys are not allowed.
 *  WeakMap keys are objs ( values can be arbitrary values)
 *  WeakMap keys are weakly held.
 *  You can't get an overview of the contents of a WeakMap
 *  You can't clear WeakMao
 */

var weakmap = new WeakMap();
weakmap.set({}, 123);