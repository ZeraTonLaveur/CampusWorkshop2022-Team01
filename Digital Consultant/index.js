const nav_bar = document.querySelector("header .header_bar_scroll");
const nav_bar_responsive = document.querySelector("header .header_bar_scroll_responsive");

function headerScroll() 
{
    let y = window.scrollY;
    let x = window.innerWidth;

    if (x > 999)
    {
        if(nav_bar_responsive.style.display == "flex")
        {
            nav_bar_responsive.style.display = "none"
        }

        if (y > 100)
        {
            console.log(">");
            nav_bar.style.display = "flex";
        }
        else if (y < 100)
        {
            console.log("<");
            nav_bar.style.display = "none";
        }
    }
    else if (x <= 999)
    {

        if (y > 100)
        {
            console.log(">");
            nav_bar_responsive.style.display = "flex";
        }
        else if (y < 100)
        {
            console.log("<");
            nav_bar_responsive.style.display = "none";
        }
    }
}

window.addEventListener("scroll", headerScroll)