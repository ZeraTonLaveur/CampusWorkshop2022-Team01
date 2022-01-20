# Digital-Consultant

Ce readme à pour but d'aiguiller l'utilisateur pour qu'il puisse rajouter dans des variables Json les textes qu'il désire en ce qui concerne les image il faut appeller l'image de la même façon que celle que vous voulez remplacer.

Le fichier json est repartie en plusieur partie qui represente les differents pages du siteweb.
Certaines id sont tout de meme utilisé pour plusieurs pages c'est le cas des id ("box_name","box_desc","blog_resume","blog_article_name")

La plupart des id sont composé de leur nom d'id plus un chiffre et la langue afin de permettre de remplir les éléments similaire et de faire la traduction ( exemple: box_name + 1 + fr = box_name1fr )


Partie Index:
Elle est permet de remplir les portefolio et le formulaire d'inscription à la newletter.

Portfolio:
```solidity
    "portfolio_nom1fr" : "",
    "portfolio_desc1fr" : "",
    "portfolio_type1fr" : "",
    "portfolio_lien1fr" : "",
```
Ici on y ajoute dans l'ordre le nom du projet, la description du projet, le type de projet et le lien qui mene au projet en question.

Newsletter:
```solidity
    "newsletterfr" : "Inscription à la newsletter",
    "newsletter_mailfr" : "Adresse mail",
    "newsletter_nomfr" : "Nom complet",
    "newsletter_inscriptionfr" : "S'inscrire",
```
Ici on y ajoute le text d'invitation d'inscription, l'adresse, le nom puis on peut changer le text du boutton d'inscription.
Cette partie permet essentiellement les changements de langues.


Partie Nos services:
Elle permet de remplir les differentes étapes d'offres de remplir les boites d'outils et de les traduire.

Phrase d'introduction de la page et des différentes phases:
```solidity
    "service_introfr" : "",
    "service_phase1fr" : "",
    "service_phase1txtfr" : "",
```
Ici on y ajoute le texte de l'introduction , du nom de la phase puis sa description.

Boites d'outils:
```solidity
    "box_name1fr" : "Site web",
    "box_desc1fr" : "",
```
Ici on peut changer le nom des outils devellopé ainsi que leur descriptions.


Partie à propos:
Elle permet de remplir le texte d'introduction et les box des membre de l'équipe.

Phrase d'introduction de la page à propos de l'entreprise:
```solidity
    "props_txt1fr" : "",
    "props_txt2fr" : "",
```
Ici on définie le texte d'introduction de la page et on la traduit.

Box équipe:
```solidity
    "team_member_nom1" :"Nom",
    "team_member_prenom1" : "Prénom",
    "team_member_job1" : "Job",
```
Ici on peut mettre le Nom, le prénom ainsi que le rôle de l'employé dans l'entreprise.


Partie Article:
Elle permet de mettre le contenue des articles du blog.

Article content:
```solidity
"blog_article1fr" : "lorem",
```


Partie Blog:
Ici on remplie les blog box ave le nom de l'article son contenue et sa date de publication.

Blog box:
```solidity
"blog_resume1fr" : "Résumé",
"blog_article_name1fr" : "Article 1",
"blog_date1fr" : "Date",
```


Partie Info CGU
Ici on remplie toutes les données nécessaire à la CGU.

CGU content:
```solidity
    "cgu_date" : "00/00/0000",
    "adresse_site" : "www.digital-consultant.fr",
    "editeur_dev1" : "RAFALES Alexandre, ",
    "editeur_dev2" : "BELTRIX Romuald, ",
    "editeur_dev3" : "GUILLOCHON Léo ",
    "adresse_dev" : " 132 Avenue de Lattre de Tassigny Centre Pierre Cointreau CCI, 49000 Angers",
    "tel_dev" : "+33 0 00 00 00 00",
    "mail_dev" : "dev@mail.com",
    "nom_hebergeur" : "GitHub",
    "siege_hebergeur" : " San Francisco, Californie, États-Units",
    "tel_hebergeur" : "00 00 00 00 00",
    "services_articles" : "services",
    "serv_site" : "Consulting",
    "numéro_cnil" : "00000000",
    "mail_retrataction" : "retra@mail.com",
```

Partie Info MENTIONS LEGALES 
Ici on remplie toutes les données nécessaire aux mentions légales.

Mentions légales content:
```solidity
    "statut_ml" : "societe",   
    "prefixe_ml" : "SAS",  
    "nom_societe_ml" : "Digital consultant",  
    "adresse_ml" : "14 impasse des muriers 13103 Mas le blanc des alpilles",  
    "tel_ml" : "0000000000",  
    "capital_ml" : "xxxxx€",  
    "siret_ml" : "00000000000000",    
    "rcs_ml" : "Marseille B 803 585 959",  
    "num_tva_ml" : "FR1180358595900015",  
    "mail_boite_ml" : "contact@digitalconsultant.fr",  
    "createur_ml" : "Bieltrix Romuald",
    "responasble_ml" : "Guillochon Léo",
    "resp_mail_ml" : " resp@mail.com",
    "resp_juridique_ml": "personne physique",
    "webmaster_ml" : "Rafales Alexandre",
    "webmaster_mail" : "webmaster@mail.com",
    "hebergeur_ml" : "Github",
    "site_ml" : "www.digital-consultant.com"
```