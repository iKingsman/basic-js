const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chainItems: [],
  getLength() {
    return this.chainItems.length;
  },
  addLink(value) {
    this.chainItems.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (isNaN(position) || position <= 0 || position > this.chainItems.length) {
      this.chainItems = [];
      throw new Error("You can't remove incorrect link!");
    }
    else {
      this.chainItems.splice(position - 1, 1);
      return this;
    }
  },
  reverseChain() {
    this.chainItems.reverse();
    return this;
  },
  finishChain() {
    const finishedChain = this.chainItems.join("~~");
    this.chainItems = [];
    return finishedChain;
  }
};

module.exports = {
  chainMaker
};
