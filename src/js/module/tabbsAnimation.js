function setupDropdownMenus(category, categoryButton, categoryList) {
    const categorySellector = document.querySelectorAll(category);
    categorySellector.forEach(oneCategory => {
        let button = oneCategory.querySelector(categoryButton);
        let listSelector = oneCategory.querySelector(categoryList);

        function toggleDropdown() {
            console.log('click');
            listSelector.classList.toggle('show');
        }

        button.addEventListener('click', toggleDropdown);
        
       
        window.addEventListener('DOMContentLoaded', function() {
            const windowWidth = window.innerWidth;
            if (windowWidth > 1076) {
                listSelector.classList.toggle('show');
            }
        });
    });
}

export default setupDropdownMenus;