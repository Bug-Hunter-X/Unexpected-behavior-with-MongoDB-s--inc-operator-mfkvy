```javascript
//Correct use of $inc operator with $setOnInsert
db.collection('counters').updateOne({ _id: 'myCounter' }, { $inc: { sequence: 1 }, $setOnInsert: { sequence: 0 } });
```