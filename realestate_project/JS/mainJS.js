let menu = document.querySelector('.header .menu');

document.querySelector('#menu-btn').onclick = () =>{
   menu.classList.toggle('active');
}

window.onscroll = () =>{
   menu.classList.remove('active');
}

document.querySelectorAll('input[type="number"]').forEach(inputNumber => {
   inputNumber.oninput = () =>{
      if(inputNumber.value.length > inputNumber.maxLength) inputNumber.value = inputNumber.value.slice(0, inputNumber.maxLength);
   };
});

document.querySelectorAll('.view-property .details .thumb .small-images img').forEach(images =>{
   images.onclick = () =>{
      src = images.getAttribute('src');
      document.querySelector('.view-property .details .thumb .big-image img').src = src;
   }
});

document.querySelectorAll('.faq .box-container .box h3').forEach(headings =>{
   headings.onclick = () =>{
      headings.parentElement.classList.toggle('active');
   }
});
const { fromEvent } = rxjs;
const { map, startWith } = rxjs.operators;

const house = document.querySelector('#house');
const range = document.querySelector('#range');
const label = document.querySelector('#label');

const f = new Flipping();
const update = f.wrap(rooms => {
  const prevRooms = house.getAttribute('data-rooms');
  house.setAttribute('data-prev-rooms', prevRooms);
  house.setAttribute('data-rooms', rooms);
  
  label.setAttribute('data-prev-rooms', prevRooms);
  label.setAttribute('data-rooms', rooms);
  label.setAttribute('data-rooms-delta', rooms - prevRooms);
});

const range$ = fromEvent(range, 'input')
  .pipe(
    map(e => e.target.value),
    startWith(6));

range$.subscribe(update);
