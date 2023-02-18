
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

// It'll take an ID name of an input Field as parameter and clear the field value
const clearInputField = function(elementId){
    document.getElementById(elementId).value = "";
}

// This function will display the result of shapes areas
let counter = 1;
 const displayAreaResults = function(name, result){
    document.getElementById('result-element').innerHTML += `
        <div  class="result-element">
            <p class="result-name">${counter}. ${name}</p>
            <p class="result-value">${result}cm<sup>2</sup></p>
            <button class="convert-btn">Convert to m<sup>2</sup></button>
         </div>
    `;
    counter++;
}

// Area of Triangle 
document.getElementById('btn-triangle').addEventListener('click', function(){
    const valueBreadth = getValueFromInputField('triangle-breadth');
    const valueHeight = getValueFromInputField('triangle-height');
    if((typeof valueBreadth === 'number' && valueBreadth > 0) && (typeof valueHeight === 'number' && valueHeight > 0)){
        const areaTriangle = multiplyTwoValuesWithHalf(valueBreadth, valueHeight);
        clearInputField('triangle-breadth');
        clearInputField('triangle-height');
        displayAreaResults('Triangle', areaTriangle);
    }else{
        alert("Please enter valid positive number.");
    }


})

// Area of Rectangle
document.getElementById('btn-rectangle').addEventListener('click', function(){
    const valueBreadth = getValueFromInputField('rectangle-breadth');
    const valueHeight = getValueFromInputField('rectangle-height');
    if((typeof valueBreadth === 'number' && valueBreadth > 0) && (typeof valueHeight === 'number' && valueHeight > 0)){
        const areaRectangle = multiplyTwoValuesWithHalf(valueBreadth, valueHeight);
        clearInputField('rectangle-breadth');
        clearInputField('rectangle-height');
        displayAreaResults('Rectangle', areaRectangle);
    }else{
        alert("Please enter valid positive number.");
    }
})

// Area of Parallelogram
document.getElementById('btn-parallelogram').addEventListener('click', function(){
    const valueBreadth = getValueFromTextField('para-b');
    const valueHeight = getValueFromTextField('para-h');
    const areaParallelogram = multiplyTwoValues(valueBreadth, valueHeight);
    displayAreaResults('Parallelogram', areaParallelogram);
})

// Area of Rhombus
document.getElementById('btn-rhombus').addEventListener('click', function(){
    const valueD1 = getValueFromTextField('rhom-d1');
    const valueD2 = getValueFromTextField('rhom-d2');
    const areaRhombus = multiplyTwoValuesWithHalf(valueD1, valueD2);
    displayAreaResults('Rhombus', areaRhombus);
})

// Area of Pentagon
document.getElementById('btn-pentagon').addEventListener('click', function(){
    const valueP = getValueFromTextField('penta-p');
    const valueB = getValueFromTextField('penta-b');
    const areaPentagon = multiplyTwoValuesWithHalf(valueP, valueB);
    displayAreaResults('Pentagon', areaPentagon);
})

// Area of Ellipse
document.getElementById('btn-ellipse').addEventListener('click', function(){
    const valueA = getValueFromTextField('elli-a');
    const valueB = getValueFromTextField('elli-b');
    const areaEllipse = parseFloat((3.14 * valueA * valueB).toFixed(2));
    displayAreaResults('Ellipse', areaEllipse);
})
