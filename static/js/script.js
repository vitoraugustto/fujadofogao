window.onload = function() {

    setTimeout(function() {
        document.body.classList.remove('preload');
    }, 200);

    const burgers = document.getElementById('burgers');
    const dishes = document.getElementById('dishes');
    const combos = document.getElementById('combos');
    const promotions = document.getElementById('promotions');
    const spanBurgers = document.getElementById('span-burgers');
    const spanDishes = document.getElementById('span-dishes');
    const spanCombos = document.getElementById('span-combos');
    const spanPromotions = document.getElementById('span-promotions');
    const sectionBurger = document.getElementById('burger-main');

    [burgers, dishes, combos, promotions].forEach((icon) => 
        icon.addEventListener('click', function() {
            let lis = document.querySelectorAll('li');

            function changeWidthLi() {
                for (var i = 0; i < lis.length; i++) {
                    lis[i].style.width = '20%';
                    lis[i].style.marginRight = '10px';
                };
            };
            changeWidthLi();
        }));
        

        burgers.addEventListener('click', function() {
            spanBurgers.style.opacity = '1';
            sectionBurger.style.display = 'block';

            [spanDishes, spanCombos, spanPromotions].forEach((span) =>
            span.style.opacity = '0');
        });

        dishes.addEventListener('click', function() {
            spanDishes.style.opacity = '1';

            [spanBurgers, spanCombos, spanPromotions].forEach((span) =>
            span.style.opacity = '0');
        });

        combos.addEventListener('click', function() {
            spanCombos.style.opacity = '1';

            [spanBurgers, spanDishes, spanPromotions].forEach((span) =>
            span.style.opacity = '0');
        });

        promotions.addEventListener('click', function() {
            spanPromotions.style.opacity = '1';

            [spanBurgers, spanDishes, spanCombos].forEach((span) =>
            span.style.opacity = '0');
        });

};