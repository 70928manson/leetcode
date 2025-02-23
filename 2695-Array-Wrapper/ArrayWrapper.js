/**
 * @param {number[]} nums
 * @return {void}
 */
var ArrayWrapper = function(nums) {
    this.nums = nums;
};

/**
 * @return {number}
 */
ArrayWrapper.prototype.valueOf = function() {
    let res = 0;
    for (let i = 0; i < this.nums.length; i++) {
        res += this.nums[i];
    };

    return res;
}

/**
 * @return {string}
 */
ArrayWrapper.prototype.toString = function() {
    let res = "";

    for (let i = 0; i < this.nums.length; i++) {
        res += this.nums[i];
        if (i !== this.nums.length - 1) {
            res += ","
        };
    };

    return "[" + res + "]";
};

/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */