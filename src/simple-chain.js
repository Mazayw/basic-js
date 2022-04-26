const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    return this.chain.length;
  },
  addLink(value) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    const STR = `( ${value} )`;
    this.chain.push(STR);
    return this;
  },
  removeLink(position) {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    if (!Number.isInteger(position) || !this.chain[position - 1]) {
      this.chain = [];
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    this.chain.reverse();
    return this;
  },
  finishChain() {
    //throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here
    try {
      return this.chain.join('~~');
    }
    finally {
      this.chain = [];
    }

  }
};

module.exports = {
  chainMaker
};
