// 2 possible return values

// the arg coming in is an array

// const array1 = [5, 12, 8, 130, 44];

// const found = array1.find(element => element > 10);

// myObj = myArrayOfObjects.find(obj => obj.prop === 'something');

const superbowlWin = (array) => {
  const obj = array.find((record) => record.result === "W");
  if (obj !== undefined) {
    return obj.year;
  } else {
    return undefined;
  }
};
