document.addEventListener('DOMContentLoaded', () => {
    if(!document.getElementById('development-mode')){
        // if production mode

    }
    const pluss = document.querySelectorAll('.plus');
    const minus = document.querySelectorAll('.minus');

    let sum = 0;
    let multiplication = 0;
    
    function plussFun () {
        pluss.forEach(el => {
            el.addEventListener('click', () => {
                let caunt = parseInt(el.nextElementSibling.textContent);
                el.nextElementSibling.innerHTML = '';
                caunt += 1
                el.nextElementSibling.innerHTML = caunt;
                let orignPrice = parseInt(el.parentNode.parentNode.firstElementChild.firstElementChild.textContent);
                for(let i = 1; i <= caunt; i++) {
                    multiplication = i
                }
                if(multiplication < 5) {
                    sum = multiplication * orignPrice;
                }
                if(multiplication >= 5) {
                    let dis5 = orignPrice / 100 * 5
                    let sumDis5 = orignPrice - dis5;
                    sum = sumDis5 * multiplication;
                }
                if(multiplication >= 10) {
                    let dis5 = orignPrice / 100 * 9
                    let sumDis10 = orignPrice - dis5;
                    sum = sumDis10 * multiplication;
                }
                el.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = sum;
            })
        })
    }
    plussFun( );
    function minusFun() {
        minus.forEach(el => {
            el.addEventListener('click', () => {
                let caunt = parseInt(el.previousElementSibling.textContent);
                let orignPrice = parseInt(el.parentNode.parentNode.firstElementChild.firstElementChild.textContent);
                el.previousElementSibling.innerHTML = '';
                caunt -= 1
                multiplication--
                if(caunt <= 0) {
                    caunt = 0
                }
                if(multiplication <= 4) {
                    sum = sum - orignPrice;
                    sum = multiplication * orignPrice;
                }
                if(multiplication >= 5 && multiplication <= 9) {
                    let dis5 = orignPrice / 100 * 5
                    let sumDis5 = orignPrice - dis5;
                    sum = sum - sumDis5
                    sum = sumDis5 * multiplication;
                }
                if(multiplication >= 10) {
                    let dis5 = orignPrice / 100 * 10
                    let sumDis5 = orignPrice - dis5;
                    sum = sum - sumDis5
                    sum = sumDis5 * multiplication;
                }
                if(sum <= 0) sum = 0;
                el.nextElementSibling.innerHTML = sum;
                el.previousElementSibling.innerHTML = caunt;

            })
        })
    }
    // code here
    minusFun()
    
    document.querySelector('.m-trigger').addEventListener('click', () => {
        let cauntPl = document.querySelector('.plastic .caunt');
        let cauntMn = document.querySelector('.monomer .caunt');
        document.querySelector('.plasticModal').innerHTML = cauntPl.textContent;
        document.querySelector('.monomerModal').innerHTML = cauntMn.textContent;
    })
    
    
});





