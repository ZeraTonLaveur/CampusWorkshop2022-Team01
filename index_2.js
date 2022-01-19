const my_img = document.getElementById("my_img");
const my_text = document.getElementById("my_text");
const my_name = document.getElementById("my_name");
const my_link = document.getElementById("my_link");

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
        my_text.innerText="premier test";
        my_name.innerText="Audit";
        my_link.href="https://www.youtube.com/";
    }
    else if (value == 2)
    {
        my_img.src="images/logo_propos.png";
        my_text.innerText="deuxième très grand texte";
        my_name.innerText="Chat Bot";
        my_link.href="https://www.twitch.tv/";
    }
    else if (value == 3)
    {
        my_img.src="images/logo_contacter.png";
        my_text.innerText="troisième très très très grand texte";
        my_name.innerText="Site Web";
        my_link.href="https://www.youtube.com/";
    }
    else if (value == 4)
    {
        my_img.src="images/logo_services.png";
        my_text.innerText="quatrièèèèèèèèèèèèèèèè èèèèèè èèèèèèèèèèèèèèèèèèèèè èèèèèèèèèèè èèèèèèèèèèèème";
        my_name.innerText="E-commerce";
        my_link.href="https://www.twitch.tv/";
    }
    else if (value == 5)
    {
        my_img.src="images/logo_accueil.jpg";
        my_text.innerText="lorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem";
        my_name.innerText="Création de marque";
        my_link.href="https://www.youtube.com/";   
    }
    else if (value == 6)
    {
        my_img.src="images/logo_contacter.png";
        my_text.innerText="lorem loremlorem loremlorem loremlolorem loremlorem loremlorem loremlolorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem loremlorem lorem";
        my_name.innerText=" Applications mobiles";
        my_link.href="https://www.twitch.tv/";
    }
    else if (value == 7)
    {
        my_img.src="images/logo_services.png";
        my_text.innerText="loremloremloremloremloremloremloremlorem lorem lorem lorem lorem";
        my_name.innerText="Stratégie de communication";
        my_link.href="https://www.youtube.com/";
    }
}

carousel(1);