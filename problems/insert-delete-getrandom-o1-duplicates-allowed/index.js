/**
 * Initialize your data structure here.
 */
var RandomizedCollection = function() {
  this.map = {};
  this.nums = [];
  return this;
};

/**
 * Inserts a value to the collection. Returns true if the collection did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.insert = function(val) {
  let index = this.nums.length;
  this.nums.push(val);
  if (this.map[val]) {
    this.map[val][index] = true;
    return false;
  } else {
    this.map[val] = { [index]: true };
    return true;
  }
};

/**
 * Removes a value from the collection. Returns true if the collection contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedCollection.prototype.remove = function(val) {
  if (this.map[val] != undefined) {
    let index = Object.keys(this.map[val])[0];
    let last = this.nums[this.nums.length - 1];

    if (Object.keys(this.map[val]).length == 1) {
      this.map[val] = undefined;
    } else {
      delete this.map[val][index];
    }

    if (this.map[last] !== undefined) {
      this.map[last][index] = true;
      delete this.map[last][this.nums.length - 1];
    }

    this.nums[index] = last;
    this.nums.pop();
    return true;
  } else {
    return false;
  }
};

/**
 * Get a random element from the collection.
 * @return {number}
 */
RandomizedCollection.prototype.getRandom = function() {
  let length = this.nums.length;

  if (length) {
    let key = this.nums[parseInt(Math.floor(Math.random() * length))];
    return +key;
  }
};

/**
 * Your RandomizedCollection object will be instantiated and called as such:
 * var obj = new RandomizedCollection()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */
