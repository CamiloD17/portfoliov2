///PROYECTOS///

$('.buttonProject-1').click(function(){
    urlProject1='http://camilow.pythonanywhere.com/'
    window.open(urlProject1, '_blank'); 
})

$('.buttonProject-2').click(function(){
    urlProject2='https://ice-cream-restaurant.netlify.app/'
    window.open(urlProject2, '_blank'); 
})
$('.buttonProject-3').click(function(){
    alert("Este proyecto aún se encuentra en fase de diseño. ¡Vuelva Pronto! :)")
})
///REDES SOCIALES///
let linkedin = document.querySelector("#linkedin")
let github = document.querySelector("#github")
let twitter = document.querySelector("#twitter")
let gmail = document.querySelector("#gmail")

$(linkedin).click(function () {
    window.open("https://www.linkedin.com/in/camilo-hernandez-dodino/", '_blank')
});
$(github).click(function () {
    window.open("https://github.com/CamiloD17", '_blank')
});
$(twitter).click(function () {
    window.open("https://twitter.com/CamiloDodino17", '_blank')
});
$(gmail).click(function () {
    window.open("mailto:kdodino1999@gmail.com", '_blank')
});

///FORMULARIO CON LA LIBRERIA FORMSPREE///
const $form = document.querySelector("#form")

$form.addEventListener("submit",handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action,{
        method: this.method,
        body: form,
        headers:{
            "Accept" : "application/json"
        }
    })
    if (response.ok){
        this.reset()
        alert("Su mensaje ha sido enviado con éxito, pronto me pondré en contácto contigo.")
    }else{
        alert("Ha habido un problema al enviar el mensaje")
    }
}






