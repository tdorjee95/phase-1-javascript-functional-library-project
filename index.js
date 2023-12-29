function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (callback(collection[i], i, collection) === false) {
          break; // Stop the loop if callback returns false
        }
      }
    } else {
      for (const key in collection) {
        if (callback(collection[key], key, collection) === false) {
          break; // Stop the loop if callback returns false
        }
      }
    }
  
    return collection;
  }
  
  function myFind(collection, predicate) {
    let result;
  
    myEach(collection, function (element) {
      if (predicate(element) && result === undefined) {
        result = element;
        return false; // Break out of the loop if the value is found early
      }
    });
  
    return result;
  }
  
  
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function (element) {
      result.push(callback(element));
    });
    return result;
  }
  
  function myReduce(collection, callback, acc) {
    const keys = myKeys(collection);
    let startIndex = acc === undefined ? 1 : 0;
  
    for (let i = startIndex; i < keys.length; i++) {
      acc = callback(acc === undefined ? collection[keys[i - 1]] : acc, collection[keys[i]], keys[i], collection);
    }
  
    return acc;
  }
  
  
  function myFilter(collection, predicate) {
    const result = [];
    myEach(collection, function (element) {
      if (predicate(element)) {
        result.push(element);
      }
    });
  
    return result;
  }
  
  function mySize(collection) {
    let size = 0;
    myEach(collection, function () {
      size++;
    });
    return size;
  }
  
  function myFirst(array, n) {
    if (n === undefined) {
      return array[0];
    } else {
      return array.slice(0, n);
    }
  }
  
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    } else {
      return array.slice(-n);
    }
  }
  
  // BONUS: mySortBy
  function mySortBy(array, callback) {
    return array.slice().sort(function (a, b) {
      const valA = callback(a);
      const valB = callback(b);
      return valA < valB ? -1 : valA > valB ? 1 : 0;
    });
  }
  
  // BONUS: myFlatten
  function myFlatten(array, shallow, newArr = []) {
    myEach(array, function (element) {
      if (Array.isArray(element) && !shallow) {
        myFlatten(element, false, newArr);
      } else {
        newArr.push(element);
      }
    });
    return newArr;
  }
  
  // Object Functions
  function myKeys(object) {
    const keys = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        keys.push(key);
      }
    }
    return keys;
  }
  
  function myValues(object) {
    const values = [];
    for (let key in object) {
      if (object.hasOwnProperty(key)) {
        values.push(object[key]);
      }
    }
    return values;
  }