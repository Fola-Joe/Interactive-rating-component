const submit = document.querySelector('#submit');
const numBtn = document.querySelectorAll('.btn');
const page1 = document.querySelector('#rating-start');
const page2 = document.querySelector('#thank-you-state');
const rateNum = document.querySelector('#rate');

let rate = null
submit.addEventListener('click', function (event) {
    event.preventDefault();
    if (rate) {
        rateNum.innerText = rate;
    }

    let selected = false;
    for (num of numBtn) {
        const active = document.querySelector('.checked');
        if (active) {
            alert = function(){};
            let selected = true;
            page1.style.display = 'none';
            page2.style.display = 'block';
        }
    }
    if (!selected){
        alert('Please select a rating!');
    }
})

page2.addEventListener('click', function() {
    page1.style.display = 'block';
    page2.style.display = 'none';
})

numBtn.forEach(num => {
    num.addEventListener('click', function(e) {
        const active = document.querySelector('.checked');
        if (active) {
            active.classList.remove('checked')
        }
        const card = e.target;
        card.classList.add('checked');
        rate = e.target.innerText;
    })
})