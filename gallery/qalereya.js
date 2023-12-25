function searchExercises() {
    let input = document.querySelector('.inputSearch').value.trim().toLowerCase();
    let exerciseItems = document.querySelectorAll('.image-container > div');

    exerciseItems.forEach(function (item) {
        let text = item.querySelector('h2').textContent.trim().toLowerCase();
        if (text.includes(input)) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

function searchButtonClick() {
    searchExercises();}


