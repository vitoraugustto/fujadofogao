window.onload = function() {

    setTimeout(function() {
        document.body.classList.remove('preload');
    }, 200);

    const burger = document.getElementById('burger');
    const dish = document.getElementById('dish');
    const combos = document.getElementById('combos');
    const promotions = document.getElementById('promotions');

    [burger, dish, combos, promotions].forEach((icon))

    burger.addEventListener('click', function() {
        let lis = document.querySelectorAll('li');

        function widthLi() {
            for (var i = 0; i < lis.length; i++) {
                lis[i].style.width = 'auto';
            };
        };

        widthLi();
    });


};