# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @winnie-li/lotide`

**Require it:**

`const _ = require('@winnie-li/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actual, expected)`: return a message to tell if two arrays are the same
* `assertEqual(actual, expected)`: return a message to tell if two values are the same
* `assertObjectsEqual(actual, expected)`: return a message to tell if two objects are the same
* `countLetters(string)`: take in a sentence (as a string), and an object include the count of each letter
* `countOnly(allItems, itemsToCount)`: intake an array and an object, return an object containing counts of the items we want to could bese on the itemsToCount object. allItems: an array of strings that we need to look through. itemsToCount: an object specifying what to count
* `eqArrays(arr1, arr2)`: compare two arrays and returns true of false, based on a perfrct match
* `eqObjects(object1, object2)`: returns true if both objects have identical keys with identical values
* `findKey(object, callback)`: take in an object and a callback, scan the object and return the first key for which the callback returns a truthy value.
* `findKeyByValue(object, value)`: scan the input object, return the first key which contains the input value
* `head(arr)`: return the first element of the input array
* `letterPositions(sentence)`: return all the indices (zero-based positions) in the string where each character is found.
* `map(array, callback)`: returns a new array based on the result of the call back function
* `middle(arr)`: return an array with only the middle element(s) of the given array
* `tail(arr)`: return a new array include all the elements from the input array except the first element
* `takeUntil(array, callback)`: return a slice of the array with elements taken from the beginning. Keep going until the callback/predicate returns a truthy value
* `without(source, itemsToRemove)`: return a new array with only those elements from source that are not present in the itemsToRemove array.