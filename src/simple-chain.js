/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    if (typeof value === 'undefined') {
      this.chain.push(' ');  
    } else {
      this.chain.push(value);
    }
    return this;
  },
  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position % 1 !== 0 ||
      position > this.chain.length ||
      position <= 0
    ) {
      this.chain = [];
      throw new Error("You can't remove incorrect link!");
    }

    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const outputChain = this.chain.map(value => `( ${value} )`)
    this.chain = [];

    return outputChain.join('~~');
  }
};

module.exports = {
  chainMaker
};
