function arraysEqual(arr1, arr2) {
    if(arr1.length !== arr2.length)
        return false;
    for(var i = arr1.length; i--;) {
        if(arr1[i] !== arr2[i])
            return false;
    }

    return true;
}

$(document).ready(function() {
  $("button").click(function(event) {
    event.preventDefault();
    var palindromeTextBox = $('#input').val().toString();
    //console.log(palindromeTextBox.length);
    var array = [];
    var reverseArr = [];
    for (var i = 0; i < palindromeTextBox.length; i++) {
      var letter = palindromeTextBox.slice(i, i+1);
      console.log(palindromeTextBox.charAt(i));
      array.push(palindromeTextBox.charAt(i));
      reverseArr.push(palindromeTextBox.charAt(i));
    }
    reverseArr.reverse();
    $("#result").html(arraysEqual(array, reverseArr));
  });
});
