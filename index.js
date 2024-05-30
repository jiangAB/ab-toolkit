'use strict';

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
    return true
  } else {
    return false
  }
}

module.exports = {
  firstTest,
  isEmpty
};