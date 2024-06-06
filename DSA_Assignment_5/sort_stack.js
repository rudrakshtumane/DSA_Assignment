function sort(stack) {
    if (stack.length === 0) {
      return;
    }
  
    let top = stack.pop();
    sort(stack);
    insertsorted(stack, top);
  }
  
  function insertsorted(stack, element) {
    if (stack.length === 0 || stack[stack.length - 1] <= element) {
      stack.push(element);
      return;
    }
    let top = stack.pop();
    insertsorted(stack, element);
    stack.push(top);
  }
  
  let stack = [34, 3, 31, 98 , 92, 23];
  sort(stack);
  console.log(stack);