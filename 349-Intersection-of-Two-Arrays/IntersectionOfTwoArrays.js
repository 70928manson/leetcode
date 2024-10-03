/**
 * input 為兩個 integer 陣列, output 為這兩個陣列的集合, 並且不用管順序
 */


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  // 先把 nums1 陣列出現過的 integer 存進 hash 表
  // nums2 陣列在跟 hash 表比對, 出現過就 push 到 ans 陣列
  const ans = [];
  const hash = {};

  for (let i = 0; i < nums1.length; i++) {
    if  (hash[nums1[i]] === undefined) {
        hash[nums1[i]] = true;
    }
  }
  for (let i = 0; i < nums2.length; i++) {
    if  (hash[nums2[i]] === true) {
        ans.push(nums2[i]);
        hash[nums2[i]] = false; // 避免重複數字
    }
  }

  return ans; 
}