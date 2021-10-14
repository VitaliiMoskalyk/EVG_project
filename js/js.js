// const galleryEl = document.querySelector('.left_sidebar');
// console.log(galleryEl);

// const titleEl = document.querySelector('.Gallery_txt_left_sidebar');
// console.dir(titleEl);
// titleEl.textContent = 'yuuuhuuuuuuuuu';

// const photoEl = document.querySelector('.sidebar_photo_gallery');
// console.log(photoEl.getAttribute('src'));

// const instAction = document.querySelector('.navigation_menu_ins a');
// console.log(instAction.classList.add('action-sec'))

//  const firstEl = document.querySelector('nav');
//  console.log(firstEl.children);

// const titleEL = document.createElement('h2');
// titleEL.classList.add('red_color');
// titleEL.textContent = 'this is text';
// console.log(titleEL);

// const paragEl = document.createElement('p');
// paragEl.textContent = 'second element';

// titleEL.appendChild(paragEl);
// firstEl.insertBefore(titleEL,firstEl.children[2])

// const titleEl = document.querySelector('.navigation_menu_tel');
// console.log(titleEl);
// titleEl.textContent = '0502090950';
// titleEl.classList.add('red_color');

// const newEl = document.createElement('h1');
// newEl.classList.add('red_color');
// newEl.textContent = 'title';
// newEl.setAttribute('width','36')
// console.log(newEl);

// const navEl = document.querySelector('nav');
// navEl.appendChild(newEl)

// const colorPickerOptions = [
//     { label: 'red', color: 'red' },
//     { label: 'blue', color: 'blue' },
//     { label: 'yellow', color: 'yellow' },
//     { label: 'green', color: 'green' }
// ];


// const pickerEl = colorPickerOptions.map(option => {
//     const buttonsEl = document.createElement('button');
//     buttonsEl.type = 'button';
//     buttonsEl.textContent = option.label;
//     buttonsEl.style.backgroundColor = option.color;
//     return buttonsEl;
// });
// console.log(pickerEl);

// const navEl = document.querySelector('nav');

// navEl.append(...pickerEl)



const products = [{
    name: 'сервоприводы',
    description: 'lorem dghjhg cjhg cx jhg cjhhg cjg jh',
    price: 2000,
    available: true,
    onSale: true,
},
{
    name: 'протоны',
    description: 'lorem dghjhg cjhg cx jhg cjhhg cjg jh',
    price: 1200,
    available: true,
    onSale: true,
    },
{
    name: 'роторы',
    description: 'lorem dghjhg cjhg cx jhg cjhhg cjg jh',
    price: 2500,
    available: true,
    onSale: true,
}];

{/* <article class='product'>
    <h2 class='product__name'>Название</h2>
    <p class='product__descr'>Описание</p>
    <p class='product__price'>Цена: </p>
</article> */}
// 

//const countSymbol = require('..');


const countSymbol = function (str, symbol) {
    let result = 0;
    str.split('').forEach(el => {
        el === symbol? result++:0;
    });
    console.log(result);
};

countSymbol('Hello', 'o'); // 1
countSymbol('Hello', 'l'); // 2
countSymbol('Hello', 'H'); // 1
countSymbol('Hello', 'h'); // 0
