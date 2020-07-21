let reviews = [
    {
        id: 1,
        name: "AB Sagor",
        role: 'Web Developer',
        img: './img/person-1.png',
        desc: "Hi, My name is Ab Sagor. Excepturi hic minima ab obcaecati omnis? Tempora, repudiandae? Exercitationem nostrum voluptatibus similique repellat consequatur magnam molestiae."
    },
    {
        id: 2,
        name: "Angel Rose",
        role: 'Web Developer Us',
        img: './img/person-2.png',
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi hic minima ab obcaecati omnis? Tempora, repudiandae? Exercitationem nostrum voluptatibus similique repellat consequatur magnam molestiae."
    },
    {
        id: 3,
        name: "Dipika Padukon",
        role: 'Actor In',
        img: './img/person-3.png',
        desc: "Dipika Padukon is very beutiful actor of India. Excepturi hic minima ab obcaecati omnis? Tempora, repudiandae? Exercitationem nostrum voluptatibus similique repellat consequatur magnam molestiae."
    },
    {
        id: 4,
        name: "Tanjin Tisha",
        role: 'Actor BD',
        img: './img/person-4.png',
        desc: "Tanjin Tisha is very beutiful actor of bd Drama. Excepturi hic minima ab obcaecati omnis? Tempora, repudiandae? Exercitationem nostrum voluptatibus similique repellat consequatur magnam molestiae."
    },
]

// controler btns 

let next_btn = document.getElementById("next");
let prev_btn = document.getElementById("prev");
let random_btn = document.getElementById("random");

// dom elements 
let person__img = document.querySelector('img.team-img');
let person__name = document.querySelector('p.name');
let person__role = document.querySelector('p.role');
let person__desc = document.querySelector('p.person-desc');

// current review
let review_current = 0;


// next btn works 

next_btn.addEventListener("click", next_review);

function next_review() {
   if(review_current === reviews.length-1) {
        review_current = 0;
   }else {
   review_current++
   }

   showData(review_current)
   
}

// prev btns 
prev_btn.addEventListener('click', prev_btns)

function prev_btns() {
   if(review_current === 0) {
        review_current = reviews.length - 1;
   }else {
   review_current--;
   }

   showData(review_current)
   
}

// random review genarator 
random_btn.addEventListener('click', random_gen);

function random_gen() {
    let random = Math.floor(Math.random() * reviews.length );
        console.log(random);
    showData(random);
}


// data showing function 
function showData(number) {
    person__img.setAttribute('src', reviews[number].img);
   person__name.innerHTML = reviews[number].name;
   person__role.innerHTML = reviews[number].role;
   person__desc.innerHTML = reviews[number].desc;
}

window.addEventListener("DOMContentLoaded", ()=> {
  showData(0)
})