function kitchenSink(variable) {
  var vType =  typeof(variable)

  if (vType === 'string') {
    console.log(variable)
  } else if ( vType === 'number') {
    console.log(variable*variable);
  } else if ( vType === 'boolean') {
    if (variable === true) {
      console.log('Yes')
    } else {
      console.log('No')
    }
  } else if (vType === 'function') {
    variable.call()
  } else if ( vType === 'object') {
     if ( Array.isArray(variable)) {
       for (var i =0; i < variable.length; i++ ) {
         kitchenSink(variable[i])
       }
     } else if ( Object.keys(variable).length === 0){
       console.log('This is an null object');
     } else {
       for (var key in variable) {
         kitchenSink(key)
         kitchenSink(variable[key])
       }
     }
  }else if ( vType === 'undefined') {
    console.log('Please enter a correct data.')
  }
}

console.log('-------String---------');
kitchenSink('This is a string input')
console.log('----------------------');
console.log('');
console.log('-------Number----------');
kitchenSink(2)
console.log('-----------------------');
console.log('');
console.log('------Boolean-True-----');
kitchenSink(true)
console.log('----------------------');
console.log('');
console.log('------Boolean-False-----');
kitchenSink(false)
console.log('-----------------------');
console.log('');
console.log('------Function-----');
kitchenSink(hello)
console.log('----------------------');
console.log('');
console.log('------Array-----');
kitchenSink([1,2,3])
console.log('-----------------------');
console.log('');
console.log('------Null-Object-----');
kitchenSink({})
console.log('-----------------------');
console.log('');
console.log('------Object-----');
kitchenSink({'name': 'Yi Sheng', 'age': 26})
console.log('----------------------');
console.log('');
console.log('------undefined-----');
kitchenSink()
console.log('-----------------------');
console.log('');


function hello() {
  console.log('This is an function input.');
}
