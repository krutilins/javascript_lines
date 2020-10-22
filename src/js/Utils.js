export class Utils{
  constructor(){

  }

  static randomInteger(min, max) {
    let rand = min + Math.random() * (max - min);
    return Math.floor(rand);
  }

  static generateUniqueNumbers(count, min, max) {
    let result = [];
    /**
     * if you need to generate more than we have
     * in the range from min to max - return
     * numbers of range
     * 
     * else generate unique numbers
     */
    if (count > max - min) {
      for (let i = min; i < max; i++) {
        result.push(i);
      }
    } else {
      for (let i = 0; i < count; i++) {
        let tepmNumber = this.randomInteger(min, max);
        if (!result.includes(tepmNumber)) {
          result.push(tepmNumber);
        } else {
          i--;
        }
      }
    }
    return result;
  }
}