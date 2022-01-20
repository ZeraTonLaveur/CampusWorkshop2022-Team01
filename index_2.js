
const my_img = document.getElementById("my_img");
const my_text = document.getElementById("my_text");
const my_name = document.getElementById("my_name");
const my_link = document.getElementById("my_link");

// var mydata =JSON.parse(id);

function carousel(value)
{
    for (let i = 1; i < 8; i++)
    {
        const my_color = document.getElementById('my_color_' + i);

        if (i != value)
        {
            my_color.style.color = '#FFFFFF';
        }
        else if (i == value)
        {
            my_color.style.color = '#199688';
        }
    }
    
    if (value == 1)
    {
        my_img.src="images/carousel_1.png";
        my_text.innerText=id.box_desc1fr;
        my_name.innerText=id.box_name1fr;
        my_link.href="services.html#box1";
    }
    else if (value == 2)
    {
        my_img.src="images/carousel_2.png";
        my_text.innerText=id.box_desc2fr;
        my_name.innerText=id.box_name2fr;
        my_link.href="services.html#box1";
    }
    else if (value == 3)
    {
        my_img.src="images/carousel_1.png";
        my_text.innerText=id.box_desc3fr;
        my_name.innerText=id.box_name3fr;
        my_link.href="services.html#box2";
    }
    else if (value == 4)
    {
        my_img.src="images/carousel_2.png";
        my_text.innerText=id.box_desc4fr;
        my_name.innerText=id.box_name4fr;
        my_link.href="services.html#box2";
    }
    else if (value == 5)
    {
        my_img.src="images/carousel_1.png";
        my_text.innerText=id.box_desc5fr;
        my_name.innerText=id.box_name5fr;
        my_link.href="services.html#box3";   
    }
    else if (value == 6)
    {
        my_img.src="images/carousel_2.png";
        my_text.innerText=id.box_desc6fr;
        my_name.innerText=id.box_name6fr;
        my_link.href="services.html#box3";
    }
    else if (value == 7)
    {
        my_img.src="images/carousel_1.png";
        my_text.innerText=id.box_desc7fr;
        my_name.innerText=id.box_name7fr;
        my_link.href="services.html#box4";
    }
}
