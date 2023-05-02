const toggleBtn = document.querySelector('.action-toggle')
            const toggleBtnIcon = document.querySelector('.action-toggle i')
            const dropDownMenu = document.querySelector('.dropdown-menu')

            toggleBtn.onclick = function () {
                dropDownMenu.classList.toggle('open')
            const isOpen =  dropDownMenu.classList.contains('open')

            toggleBtnIcon.classList=isOpen
            ?'fa-solid fa-xmark'
            :'fa-solid fa-bars'
            }


            var typed = new Typed('.GET-DELICIOUS-FOOD-span', {
strings: [" out door sevices.", " home services.", "  online services."],
typeSpeed: 100,
backSpeed:100,
backDelay: 1000,
loop: true,
});




