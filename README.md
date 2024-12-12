# MongoDB $inc operator error: Incorrect increment value type

This repository demonstrates a common error when using the `$inc` operator in MongoDB update operations. The error occurs when using a string value instead of a number as the increment value. This can result in unexpected behavior or an error. The solution shows the correct way to use the `$inc` operator to increment a numeric field.

## Bug

The code `db.collection('myCollection').updateOne({name: "John"}, {$inc: {age: '1'}});` incorrectly uses the string '1' as the increment value instead of the number 1. This will cause an error in MongoDB.

## Solution

The correct way to use the `$inc` operator is to provide a numeric value for the increment. The following code shows the corrected operation:

```javascript
db.collection('myCollection').updateOne({name: "John"}, {$inc: {age: 1}});
```