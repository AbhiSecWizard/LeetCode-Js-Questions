/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {     
    return function(x) {
     for(let a = functions.length-1; a >= 0; a--){
          x = functions[a](x) 
     }   
    return x
    }
};


/**
 * const fn = compose([x => x + 1, x => 2 * x])
 * fn(4) // 9
 */