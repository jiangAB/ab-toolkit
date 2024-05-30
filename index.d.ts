// index.d.ts

/**
 * 判断一个变量是否为空（null 或 undefined）。
 * @param {*} value 要判断的变量。
 * @returns {boolean} 如果变量为空，则返回 true；否则返回 false。
 */
declare function isEmpty(value: any): boolean;

/**
 * 返回一个拼接了问候语的字符串。
 * @param {string} name 要问候的名字。
 * @returns {string} 拼接了问候语的字符串。
 */
declare function firstTest(name: string): string;

export { isEmpty, firstTest };