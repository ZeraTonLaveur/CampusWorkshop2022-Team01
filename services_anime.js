const text_1 = document.querySelector(".text_1");
const img_1 = document.querySelector(".img_1");

const text_2 = document.querySelector(".text_2");
const img_2 = document.querySelector(".img_2");

const text_3 = document.querySelector(".text_3");
const img_3 = document.querySelector(".img_3");

const offre_1 = 500;
const offre_2 = 1000;
const offre_3 = 1500;

function slide()
{
    let y = window.scrollY;

    if (y > offre_1)
    {
        text_1.classList.add("slideLeft_1");
        img_1.classList.add("slideRight_1");
    }

    if (y > offre_2)
    {
        text_2.classList.add("slideRight_1");
        img_2.classList.add("slideLeft_1");
    }
    
    if (y > offre_3)
    {
        text_3.classList.add("slideLeft_1");
        img_3.classList.add("slideRight_1");
    }
}

window.addEventListener("scroll", slide);