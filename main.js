/* capitalizes the first letter of each word in the string */

var letterCapitalize = function(str){
	var newArr =[], arr1 = [];
	var arr = str.split(' ');

  $(arr).each(function(index, value){
  	arr1 = arr[index].split('');
  	arr1.splice(0,1,arr1[0].toUpperCase());
  	arr1 = arr1.join('');
  	newArr.push(arr1);
  })


  return (newArr.join(' '));

}

console.log(letterCapitalize("i am relaxed and creative"));



