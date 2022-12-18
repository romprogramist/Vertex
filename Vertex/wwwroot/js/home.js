document.addEventListener('DOMContentLoaded', () => {
    if(!document.getElementById('development-mode')){
        // if production mode

    }
    const pluss = document.querySelectorAll('.plus');
    const minus = document.querySelectorAll('.minus');
    
    let caunt = 0;
    let pricePlast = 7500;
    let pricePlastDiscont10 = 6700;
    let pricePlastDiscont5 = 7000;
    let sum = 0;
    let multiplication = 0;
    
    function plussFun (price1, price2, price3) {
        pluss.forEach(el => {
            el.addEventListener('click', () => {
                el.nextElementSibling.innerHTML = '';
                caunt += 1
                el.nextElementSibling.innerHTML = caunt;
                for(let i = 1; i <= caunt; i++) {
                    multiplication = i
                }
                if(multiplication < 5) {
                    sum = multiplication * price1;
                }
                if(multiplication >= 5) {
                    sum = price2 * multiplication;
                }
                if(multiplication >= 10) {
                    sum = price3 * multiplication;
                }
                el.nextElementSibling.nextElementSibling.nextElementSibling.innerHTML = sum;
            })
        })
    }
    plussFun( pricePlast, pricePlastDiscont5, pricePlastDiscont10 );
    function minusFun(price1, price2, price3) {
        minus.forEach(el => {
            el.addEventListener('click', () => {
                el.previousElementSibling.innerHTML = '';
                caunt -= 1
                multiplication--

                if(caunt <= 0) {
                    caunt = 0
                }

                if(multiplication <= 4) {
                    sum = sum - price1;
                    sum = multiplication * price1;
                }
                if(multiplication >= 5 && multiplication <= 9) {
                    sum = sum - price2
                    sum = price2 * multiplication;
                }

                if(multiplication >= 10) {
                    sum = sum - price3
                    sum = price3 * multiplication;
                }
                if(sum <= 0) sum = 0;

                el.nextElementSibling.innerHTML = sum;
                el.previousElementSibling.innerHTML = caunt;

            })
        })
    }
    minusFun( pricePlast, pricePlastDiscont5, pricePlastDiscont10 );
    // code here
});