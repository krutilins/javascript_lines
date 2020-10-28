export class Utils{
  static getRandomInteger(min, max) {
    return Math.floor(min + Math.random() * (max - min));
  }

  static generateUniqueNumbers(count, min, max) {
    let UniquerNumbers = [];
    /**
     * if you need to generate more than we have
     * in the range from min to max - return
     * numbers of range
     * 
     * else generate unique numbers
     */
    if (count > max - min) {
      for (let i = min; i < max; i++) {
        UniquerNumbers.push(i);
      }
    } else {
      for (let i = 0; i < count; i++) {
        let tempNumber;
        do {
          tempNumber  = this.getRandomInteger(min, max);
        } while(UniquerNumbers.includes(tempNumber))
        UniquerNumbers.push(tempNumber);
      }
    }
    return UniquerNumbers;
  }
}