document.getElementById('change-text-button').addEventListener('click', function() {
    var headerText = document.getElementById('header-text');
    headerText.textContent = 'Texten har ändrats!';
    headerText.classList.add('new-style');
});

