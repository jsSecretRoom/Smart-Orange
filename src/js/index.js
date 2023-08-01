document.addEventListener('DOMContentLoaded', function(){
    
    function setupDropdownMenus(buttonSelector, listSelector, tabObject, masivMarket) {
        const categories = document.querySelectorAll(tabObject);
        
        let currentCategory = null;
    
        categories.forEach((category) => {
            const button = category.querySelector(buttonSelector);
            const list = category.querySelector(listSelector);
    
            button.addEventListener('click', () => {

                categories.forEach((c) => {
                    if (c !== category) {
                        c.querySelector(listSelector).classList.remove('show');
                    }
                });
                list.classList.toggle('show');
                currentCategory = list.classList.contains('show') ? category : null;
                categories.forEach((c) => {
                    if (c !== category) {
                        c.style.display = currentCategory ? 'none' : 'block';
                    }
                });
                if (list.classList.contains('show')) {
                    const listItems = list.querySelectorAll('li');
                    let delay = 0.1;
                    listItems.forEach((item) => {
                        item.style.animationDelay = delay + 's';
                        delay += 0.1;
                    });
                }
            });
        }),
        document.addEventListener('click', (event) => {
        const tabsMarket = document.querySelector(masivMarket);
            if (!event.target.closest(masivMarket) && currentCategory) {
                currentCategory.querySelector(listSelector).classList.remove('show');
                currentCategory = null;
                tabsMarket.querySelectorAll(tabObject).forEach(category => {
                    category.style.display = 'block';
                });
            }
        });
    }
  
    setupDropdownMenus('.category-button', '.category-list', '.category', '.futer-head');
});