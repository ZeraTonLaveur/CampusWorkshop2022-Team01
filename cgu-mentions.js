const nav_bar = document.querySelector("header .header_bar_scroll");
const nav_bar_responsive = document.querySelector("header .header_bar_scroll_responsive");
const scroll_size = 1;

function headerScroll() 
{
    let y = window.scrollY;

    if (resize() > 999)
    {
        nav_bar_responsive.style.display = "none";
        nav_bar.style.display = "flex";

        if (y > scroll_size)
        {
            nav_bar.style.display = "flex"; 
        }
        else if (y < scroll_size)
        {
            nav_bar.style.display = "none";
        }
    }  
    else if (resize() <= 999)
    {
        nav_bar.style.display = "none";
        nav_bar_responsive.style.display = "flex";

        if (y > scroll_size)
        {
            nav_bar_responsive.style.display = "flex";
        }
        else if (y < scroll_size)
        {
            nav_bar_responsive.style.display = "none";
        }     
    }

    if (y > before_display_back)
    {
        back_to_start.style.display = "block";
    }
    else if (y < before_display_back)
    {
        back_to_start.style.display = "none";
    }
}

function resize()
{
    let x = window.innerWidth;
    let y = window.scrollY;

    if (x > 999)
    {
        nav_bar_deployment_responsive.style.display = "none";

        if (y > scroll_size)
        {
            nav_bar_responsive.style.display = "none";
            nav_bar.style.display = "flex";
        }
    }
    else if (x <= 999)
    {
        if (y > scroll_size)
        {
            nav_bar.style.display = "none";
            nav_bar_responsive.style.display = "flex";
        }
    }
    return x;
}

window.addEventListener("resize", resize);
window.addEventListener("scroll", headerScroll);

// --------------------------------------------------------------

const bars_scroll = document.querySelector(".bars_scroll");
const cross = document.querySelector(".cross");

const nav_bar_deployment_responsive = document.querySelector(".header_bar_deployment_responsive");

function barsStart()
{
    nav_bar_deployment_responsive.style.display = "block";
    console.log("test");
}

function crossStart()
{
    nav_bar_deployment_responsive.style.display = "none";
}

bars_scroll.addEventListener("click", barsStart);
cross.addEventListener("click", crossStart);

// --------------------------------------------------------------

const back_to_start = document.querySelector("header .back");
const before_display_back = 500;

function back()
{
    window.scrollTo(
        {
            top: 0,
            behavior: 'smooth',
        }
    )
}

back_to_start.addEventListener("click", back);