const multiLineInput = document.querySelector('#multiline');
const singleLineInput = document.querySelector('#singleline');

multiLineInput.addEventListener('input', function(e){
    let text = e.srcElement.value;
    text = text.replace(/(?:\r\n|\r|\n)/g, '\\n');
    singleLineInput.value = text;
});