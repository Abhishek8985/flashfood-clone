function dropcontent() {
    var dropContent = document.querySelector('.drop-content');
    var buttonText = document.getElementById('buttonText');
    var computedStyle = window.getComputedStyle(dropContent);
    var drop_button = document.querySelector('drop');

    if (computedStyle.display === 'none') {
        dropContent.style.display = 'block';
        buttonText.innerText = 'see less';
        buttonText.style.position='absolute'
        buttonText.style.top +='300px';
        buttonText.style.left ='7px';
        drop_button.style.position='absolute';
        drop_button.style.position.top+='300px';
    } else {
        dropContent.style.display = 'none';
        buttonText.innerText = 'see more';
        buttonText.style.top ='12px';
        drop_button.style.position.top='0px';
    }
}
