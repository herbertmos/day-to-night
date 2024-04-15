var horario=new Date
let horas= horario.getHours()
let imagem=document.getElementById("picture")
let foto1="url(pexels-reynaldo-brigworkz-brigantty-771883.jpg)";
let foto2="url(pexels-brett-sayles-912364.jpg)"
if (horas>=4 && horas<12){
    document.getElementById("horas").innerHTML=`<strong>Bom dia agora são ${horas} am </strong>`
    
}else if (horas >=12 && horas <= 18){
    document.getElementById("horas").innerHTML=`<strong>Boa tarde agora são ${horas} pm </strong>`
    imagem.style.backgroundImage=foto2
    imagem.style.backgroundPosition="left"

}else if(horas >=19 || horas >=0){
    document.getElementById("horas").innerHTML=`<strong>Boa noite agora são ${horas} pm </strong>`
    imagem.style.backgroundImage = foto1
}