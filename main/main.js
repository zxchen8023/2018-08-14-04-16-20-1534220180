module.exports = function main() {
    let sequence = new Sequence([6, 9, 15, -2, 92, 11]);
    console.log(`o) 最小值 = ${sequence.minimum()}
	o) 最大值 = ${sequence.maximum()}
	o) 元素数量 = sequence.length
	o) 平均值 = ${sequence.average()}
// Write your code here	
`);
};

class Sequence {
  constructor(input) {
    // Write your code here
  }

  minimum() {
	var min = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++){ 
       if (this[i] < min){ 
           min = this[i]; 
        } 
    } 
return min;
    // Write your code here
  }
  maximum() {
	var max = this[0];
    var len = this.length;
    for (var i = 1; i < len; i++){ 
       if (this[i] > min){ 
           max = this[i]; 
        } 
    } 
  return max;
  }
  average() {
	var sum = this[0];
    var len = this.length;
    var ave;
    for (var i = 1; i < len; i++){
    sum = sum + this[i];
    }
    ave = sum / len;
    return ave;	
  // Write your code here
}
