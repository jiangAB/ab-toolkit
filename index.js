"use strict";

function firstTest(name) {
  return `Hello, ${name}!`;
}

/**
 * 判断一个变量是否为空（null 或 undefined）。
 * @param {*} value 要判断的变量。
 * @returns {boolean} 如果变量为空，则返回 true；否则返回 false。
 */
function isEmpty(value) {
  if (value === null || value === undefined) {
    return true;
  } else {
    return false;
  }
}

/**
 * 判断两个对象是否相等 浅等于
 * @param {object} obj1 要判断的变量。
 * @param {object} obj2 要判断的变量。
 * @returns {boolean} 如果两个对象相等则返回 true；否则返回 false。
 *  */
function ObjectIsEqual(obj1, obj2) {
  if (obj1 === obj2) {
    return true;
  }

  if (
    typeof obj1 !== "object" ||
    obj1 === null ||
    typeof obj2 !== "object" ||
    obj2 === null
  ) {
    return false;
  }

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

module.exports = {
  firstTest,
  isEmpty,
  ObjectIsEqual,
};
