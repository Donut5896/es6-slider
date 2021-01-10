import people from './data.js';
//console.log(people);
const container = document.querySelector('.slide-container');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');


//set slides
container.innerHTML = people.map( (person, sildeIndex) => {
    const {img, name, job, text} = person;
    //console.table(person);
    //console.log(sildeIndex);

    //set slideindex position
    let position = 'next'; //by default

    if(sildeIndex === 0){
        position = 'active';
    }
    if(sildeIndex === people.length - 1){
        position = 'last';
    }
        //display data
    return ` <article class="slide ${position}">
          <img src="${img}" 
          class="img" alt="${name}" />
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">${text}
        </p>
        <div class="quote-icon">
          <div class="fas fa-quote-right"></div>
        </div>
        </article>`;

}).join(''); //to remove comma


// prev and next buttons
const startSlider = (type) => {
    //console.log('hello world');
    //console.log(type);
    const active = document.querySelector('.active');
    const last = document.querySelector('.last');
    // to not have many next classes
    let next = active.nextElementSibling;
    //console.log(next);

    //running out of nextsibling issues
    if(!next){
        next = container.firstElementChild
    }
 
    //to remove classes 
    active.classList.remove(['active']);
    last.classList.remove(['last']);
    next.classList.remove(['next']);

    //prev button
    if(type ==='prev'){
        active.classList.add('next');
        last.classList.add('active');
        next = last.previousElementSibling;
        //if run out of slide, override the value
        if(!next){
           next = container.lastElementChild; 
        }
        //get the new 'next'
    next.classList.remove(['next']);

    next.classList.add('last');
    return;
    }


    //to add classes
    active.classList.add(['last']);
    last.classList.add(['next']);
    next.classList.add(['active']);


}

nextBtn.addEventListener('click' , () => {
    startSlider();
})
prevBtn.addEventListener('click' , () => {
    startSlider('prev');
})