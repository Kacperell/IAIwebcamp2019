const hamburger = document.querySelector(".fa-bars")
const nav = document.querySelector("nav")

hamburger.addEventListener('click', function () {
    nav.classList.toggle('onn');
});


$(document).ready(function () {
    $('.slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
        nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
        cssEase: 'linear',
        responsive: [{
            breakpoint: 800,
            settings: {
                arrows: false,
                dots: true,
                centerMode: true,
                autoplaySpeed: 2500,
                centerPadding: '20px',
                slidesToShow: 1
            }
        }]
    });
});



$(document).ready(function () {
    $('.sliderNews').slick({
        infinite: true,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        cssEase: 'linear',
        responsive: [{
                breakpoint: 969,
                settings: {
                    arrows: false,
                    centerMode: true,
                    autoplaySpeed: 2000,
                    centerPadding: '20px',

                    slidesToShow: 3
                }
            },
            {
                breakpoint: 760,
                settings: {
                    arrows: true,
                    prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
                    nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
                    autoplaySpeed: 2000,
                    slidesToShow: 2
                }
            }
        ]
    });
});



const modal = document.querySelector(".modal")
const inModal = document.querySelector(".inModalContent")
const btns = document.querySelectorAll(".btnReadMore")
const exitModal = document.querySelector('.InModal__exit');
btns.forEach((btn) => {
    btn.addEventListener('click', openmodal);
});

function openmodal(e) {
    const link = e.target.getAttribute("data-id");
    const newmodalcontent = document.createElement("div");
    newmodalcontent.classList = ('inModalContentFetch');
    if(localStorage.getItem(link)==null){
        fetch(`cms/wpis${link}.html`).then((r) => r.text())
        .then((r) => {
            localStorage.setItem(link, r);
            newmodalcontent.innerHTML = r;
            inModal.appendChild(newmodalcontent);
            console.log("pobiera");
        });
    }else{
        const r=localStorage.getItem(link);
        newmodalcontent.innerHTML = r;
        inModal.appendChild(newmodalcontent);
    }   
        modal.classList.add('active');
        exitModal.addEventListener('click', function () {
        modal.classList.remove('active');
        inModal.innerHTML = '';
    })
}






const form=document.querySelector('.newsletter__form');
const formName=document.querySelector('.form__element.name');
console.log(formName);
form.addEventListener('submit',validate)
function validate(){
    console.log(formName.value);
    if(formName.value==''){
        // alert('pole nie moze byc puste')
    }
    if(formName.value==''){

    }

}


const clickDropdownSpans = document.querySelectorAll(".containerFooter__element.toDrop span")
clickDropdownSpans.forEach((span) => {
    span.addEventListener('click', toogleUL,false);
});

function toogleUL(e){
    let dozmiany;
    if($(e.target.parentElement).is("span")){
        dozmiany=e.target.parentElement.parentElement.children[1];
    }else{
        dozmiany=e.target.parentElement.children[1];
    }
    if(dozmiany.parentElement.children[0].children[1].classList[1]=='fa-angle-down'){
        dozmiany.parentElement.children[0].children[1].className= " fas fa-angle-up arrowFooter";
    }else{
        dozmiany.parentElement.children[0].children[1].className= " fas fa-angle-down arrowFooter";
    }   
    dozmiany.classList.toggle("dropdown");
}


