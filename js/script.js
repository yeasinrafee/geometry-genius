
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

// It'll take an ID name of a text Field as parameter and return it's value as floating Number
const getValueFromTextField = function(elementId){
    const textField = document.getElementById(elementId);
    const valueString = textField.textContent;
    const value = parseFloat(valueString);
    return value;
}

// Area of Triangle 
document.getElementById('btn-triangle').addEventListener('click', function(){
    const valueBreadth = getValueFromInputField('triangle-breadth');
    const valueHeight = getValueFromInputField('triangle-height');
    const areaTriangle = multiplyTwoValuesWithHalf(valueBreadth, valueHeight);
    console.log(areaTriangle);
})

// Area of Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const valueBreadth = getValueFromInputField('rectangle-breadth');
    const valueHeight = getValueFromInputField('rectangle-height');
    const areaRectangle = multiplyTwoValues(valueBreadth, valueHeight);
    console.log(areaRectangle);
})

// Area of Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const valueBreadth = getValueFromTextField('para-b');
    const valueHeight = getValueFromTextField('para-h');
    const areaParallelogram = multiplyTwoValues(valueBreadth, valueHeight);
    console.log(areaParallelogram);
})

// Area of Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const valueD1 = getValueFromTextField('rhom-d1');
    const valueD2 = getValueFromTextField('rhom-d2');
    const areaRhombus = multiplyTwoValuesWithHalf(valueD1, valueD2);
    console.log(areaRhombus);
})
// Area of Pentagon
// Area of Ellipse