const port_first_1 = document.querySelector(".port_first_1");
const port_first_2 = document.querySelector(".port_first_2");
const port_first_3 = document.querySelector(".port_first_3");

const port_second_1 = document.querySelector(".port_second_1");
const port_second_2 = document.querySelector(".port_second_2");
const port_second_3 = document.querySelector(".port_second_3");

const news = document.querySelector(".news");

const first_line = 1200;
const second_line = 1800;
const news_counter = 3800;

function slide()
{
    let y = window.scrollY;

    if (y > first_line)
    {
        port_first_1.classList.add("slideTop_1");
        port_first_2.classList.add("slideTop_1");
        port_first_3.classList.add("slideTop_1");
    }

    if (y > second_line)
    {
        port_second_1.classList.add("slideTop_1");
        port_second_2.classList.add("slideTop_1");
        port_second_3.classList.add("slideTop_1");
    }

    if (y > news_counter)
    {
        news.classList.add("slideRight_1");
    }
}

window.addEventListener("scroll", slide);