
// Blog Page Navigation
document.getElementById('blog-btn').addEventListener('click', function(){
    window.location.href = "../blog.html";
})

// These two functions will do the mathematical calculation
const multiplyTwoValues = function(value1, value2){
    return value1 * value2;
}
const multiplyTwoValuesWithHalf = function(value1, value2){
    return 0.5 * value1 * value2;
}

// It'll take an ID name of an input Field as parameter and return it's value as floating Number
const getValueFromInputField = function(elementId){
    const inputField = document.getElementById(elementId);
    const valueString = inputField.value;
    const value = parseFloat(valueString);
    return value;
}