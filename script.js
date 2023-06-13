function letterCombinations(input_digit) {
  //Complete the function

	/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    if(!digits.length) return [];
    let map = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }

    let res=[];
    function b(s,i){
        if(s.length==digits.length){
            res.push(s);
            return
            
        }
         for(let x of map[digits[i]]){
            b(s+x,i+1);
        }
    }
        b("",0);
        return res;
    
};
}

module.exports = letterCombinations;
