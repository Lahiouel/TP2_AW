
function validation()
{  
    if (document.getElementById("nom").value.length < 5)
    {
	  
	   document.getElementById("resultat").setAttribute('style','display:none');
	   document.getElementById("error").setAttribute('style','display:block');
	   document.getElementById("error").innerHTML = "La saisie du nom est obligatoire";
	   
	}
	else if (document.getElementById("prenom").value.length < 5)
    {
	   document.getElementById("resultat").setAttribute('style','display:none');
	   document.getElementById("error").setAttribute('style','display:block');
	   document.getElementById("error").innerHTML = "La saisie du prénom est obligatoire";
	   
	}
	else if (document.getElementById("dateN").value.length == 0)
    {
	   document.getElementById("resultat").setAttribute('style','display:none');
	   document.getElementById("error").setAttribute('style','display:block');
	   document.getElementById("error").innerHTML = "La saisie de la date est obligatoire";
	   
	}
	else if (document.getElementById("adr").value.length < 5)
    {
	   document.getElementById("resultat").setAttribute('style','display:none');
	   document.getElementById("error").setAttribute('style','display:block');
	   document.getElementById("error").innerHTML = "La saisie de l'adresse est obligatoire";
	   
	}
	else if ( document.getElementById("mail").value.length < 5)
    {
	   document.getElementById("resultat").setAttribute('style','display:none');
	   document.getElementById("error").setAttribute('style','display:block');
	   document.getElementById("error").innerHTML = "La saisie du mail est obligatoire";
	   
	}
	else
	{
	   document.getElementById("error").setAttribute('style','display:none');
	   document.getElementById("resultat").setAttribute('style','display:block');
	   document.getElementById("resultat").innerHTML = "Bienvenue " + document.querySelector("#nom").value + "  " + document.querySelector("#prenom").value;
	}
}