
const my_img = document.getElementById("my_img");
const my_text = document.getElementById("my_text");
const my_name = document.getElementById("my_name");
const my_link = document.getElementById("my_link");

var mydata =JSON.parse(id);

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
        my_img.src="images/logo_accueil.jpg";
        my_text.innerText=id.box_desc1esp;
        my_name.innerText=id.box_name1esp;
        my_link.href="https://www.youtube.com/";
    }
    else if (value == 2)
    {
        my_img.src="images/logo_propos.png";
        my_text.innerText=id.box_desc2esp;
        my_name.innerText=id.box_name2esp;
        my_link.href="https://www.twitch.tv/";
    }
    else if (value == 3)
    {
        my_img.src="images/logo_contacter.png";
        my_text.innerText=id.box_desc3esp;
        my_name.innerText=id.box_name3esp;
        my_link.href="https://www.youtube.com/";
    }
    else if (value == 4)
    {
        my_img.src="images/logo_services.png";
        my_text.innerText=id.box_desc4esp;
        my_name.innerText=id.box_name4esp;
        my_link.href="https://www.twitch.tv/";
    }
    else if (value == 5)
    {
        my_img.src="images/logo_accueil.jpg";
        my_text.innerText=id.box_desc5esp;
        my_name.innerText=id.box_name5esp;
        my_link.href="https://www.youtube.com/";   
    }
    else if (value == 6)
    {
        my_img.src="images/logo_contacter.png";
        my_text.innerText=id.box_desc6esp;
        my_name.innerText=id.box_name6esp;
        my_link.href="https://www.twitch.tv/";
    }
    else if (value == 7)
    {
        my_img.src="images/logo_services.png";
        my_text.innerText=id.box_desc7esp;
        my_name.innerText=id.box_name7esp;
        my_link.href="https://www.youtube.com/";
    }
}
