const pro_first_1 = document.querySelector(".pro_first_1");
const pro_first_2 = document.querySelector(".pro_first_2");
const pro_first_3 = document.querySelector(".pro_first_3");

const pro_second_1 = document.querySelector(".pro_second_1");
const pro_second_2 = document.querySelector(".pro_second_2");
const pro_second_3 = document.querySelector(".pro_second_3");

const google_map = document.querySelector(".map");

const first_line = 800;
const second_line = 1200;
const map = 2000;

function slide()
{
    let y = window.scrollY;

    if (y > first_line)
    {
        pro_first_1.classList.add("slideTop_1");
        pro_first_2.classList.add("slideTop_1");
        pro_first_3.classList.add("slideTop_1");
    }

    if (y > second_line)
    {
        pro_second_1.classList.add("slideTop_1");
        pro_second_2.classList.add("slideTop_1");
        pro_second_3.classList.add("slideTop_1");
    }

    if (y > map)
    {
        google_map.classList.add("slideLeft_1");
    }
}

window.addEventListener("scroll", slide);