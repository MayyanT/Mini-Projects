const colorPicker = document.getElementById('color-picker');
const container = document.getElementById('container');

colorPicker.value = '#06020F';

colorPicker.addEventListener('input', () => {
    let colorSelected = colorPicker.value;
    container.style.background = colorSelected;
});
