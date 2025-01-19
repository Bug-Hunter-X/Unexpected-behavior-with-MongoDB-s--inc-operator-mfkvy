# MongoDB $inc operator unexpected behavior
This repository demonstrates an uncommon error related to the `$inc` operator in MongoDB.  The `$inc` operator is typically used to increment a numerical field in a document. However, if the specified document does not exist, the operation will fail silently, leaving your application with an unexpected state.  This example illustrates this behavior and provides a solution.

## Bug
The `bug.js` file shows incorrect usage of `$inc`. It attempts to increment a field `sequence` in a document where that document may not yet exist. This results in no change to the database rather than creating a document as expected.

## Solution
The `bugSolution.js` file demonstrates a robust solution. It uses the `$setOnInsert` operator in conjunction with `$inc` to ensure the document is created if it doesn't exist, and the counter is incremented.

## How to reproduce
1. Clone this repository.
2. Make sure that you have MongoDB installed and running.
3. Run `bug.js` to see the unexpected behaviour.  Check the database to see that no new document is created.  
4. Run `bugSolution.js` to see the correct behavior.  Verify the document is created and the counter is incremented.
