```javascript
//Incorrect use of $inc operator
db.collection('myCollection').updateOne({name: "John"}, {$inc: {age: '1'}});
```