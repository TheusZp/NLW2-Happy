// Ctrl+k Ctrl+c cria comentario
// Ctrl+k Ctrl+u descria


// create map
const map = L.map('mapid').setView([-27.2162216,-49.6462013], 15);


// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    
})


let marker;

// crear e add marcador

map.on('click', function(event){
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat').value = lat;
    document.querySelector('[name=lng').value = lng;

    // remover icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker=L.marker([lat, lng], {icon})
    .addTo(map)
})


// Add campo de fotos
function addPhotoField(){
    // pegar o container de fotos id='images'
    const container = document.querySelector('#images');


    // pegar o container para duplicar .new-upload
    const fieldsContainer = document.querySelectorAll('.new-upload');

    //realiazar o clone, da ultima imagem add
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true);

    // verificar se o campo esta vazio, se sim, nao add ao container de imagens
    const input = newFieldContainer.children[0]

    if(input.value == ""){
        return
    }

    //limpar o campo antes de add ao container de imagens
    newFieldContainer.children[0].value = ""

    //adicionar o clone ao continer de #images
    container.appendChild(newFieldContainer);
    
}
// BOTÃO DE DELETAR O CAMPO
function deleteField(event){
    const span = event.currentTarget

    const fieldsContainer = document.querySelectorAll('.new-upload');

    if(fieldsContainer.length <= 1){
        //limpar o valor do campo
        span.parentNode.children[0].value = ""

        return
    }

    // deletar o campo
    span.parentNode.remove()
}

// Seleção do sim ou não
function toggleSelect(event){
    // pegar o bottaõ cliado
    

    // verificar se é sim ou não

    

    // retirar a class .active dos botoes
    document.querySelectorAll(".button-select button").forEach(function(button){
        button.classList.remove('active')
    })

    //colocar a classe .active no botão clicado
    const button = event.currentTarget
    button.classList.add('active')

    //atualizar meu input hidden com o valor selecionado
    const input = document.querySelector('[name="open_on_weekends')
    input.value = button.dataset.value

}

function validate(event){
    //validar se lat e lng estão preenchidos
    //preventDefault impede que o formulario seja enviado
    const needsLatAndLng = false;
    if (needsLatAndLng) {
        event.preventDefault()
        alert("Selecione um ponto no mapa")
    }
}