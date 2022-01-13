const nav_bar = document.querySelector("header .header_bar_scroll");
var nav_bar_is_load = false;

const nav_bar_responsive = document.querySelector("header .header_bar_scroll_responsive");
var nav_bar_responsive_is_load = false;

const scroll_size = 80;

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
}

function resize()
{
    let x = window.innerWidth;
    let y = window.scrollY;

    if (x > 999)
    {
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

