function balancedpara(expression) {
    let stack = [];
    const openingBrackets = ['(', '{', '['];
    const closingBrackets = [')', '}', ']'];
    let matchingpara = {
      ")": "(",
      "}": "{",
      "]": "[",
    };
  
    for (let char of expression) {
      if (openingBrackets.includes(char)) {
        stack.push(char);
      } 
      else if (closingBrackets.includes(char)) {
        if (stack.length === 0 || stack.pop() !== matchingpara[char] ) {
          return false;
        }
      }
    }
    return stack.length === 0;
  }
  
  console.log(balancedpara("{[()]}"));
  console.log(balancedpara("{[(])}"));

