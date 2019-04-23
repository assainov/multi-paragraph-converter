const multiLineInput = document.querySelector('#multiline');
const singleLineInput = document.querySelector('#singleline');
const copied = document.querySelector('.copied');

multiLineInput.addEventListener('input', function(e){
    let text = e.srcElement.value;
    text = text.replace(/(?:\r\n|\r|\n)/g, '\\n');
    singleLineInput.value = text;
});

singleLineInput.addEventListener('click', function(e){
    if (e.srcElement.value.length > 0) {
        singleLineInput.select();
        document.execCommand('copy');
        copied.classList.add('shown');
        setTimeout(function(){
            copied.classList.remove('shown');
        }, 1000);
    }
});