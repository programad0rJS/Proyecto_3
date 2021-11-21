const Formulario = document.querySelector('#Formulario');
const Botones = document.querySelector('#Botones');
const Resultados = document.querySelector('#Resultados');


const Imaganes = [
    {Nombre: 'Harry Potter', URL: 'https://estaticos-cdn.elperiodico.com/clip/80ff62f2-728c-4991-bd2e-faba8a049709_alta-libre-aspect-ratio_default_0.jpg'},
    {Nombre: 'Goku ', URL: 'https://cdn2.actitudfem.com/media/files/styles/big_img/public/images/2021/08/principal-goku-dragon-ball-es-asexual.jpg'},
    {Nombre: 'Goku Black', URL: 'https://depor.com/resizer/eEYovpplQRjjh8eH-UhaB2j5SUY=/980x0/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DATWLMML55ECLPZJ75MPILYAIU.jpg'},
    {Nombre: 'Harry', URL: 'https://s1.eestatic.com/2021/03/08/corazon/casas-reales/564454354_174828226_1024x576.jpg'},
]


const Filtrar = () => {
    // console.log(Formulario.value);
    Resultados.innerHTML = '';
    const Img = Formulario.value.toLowerCase();
    for(let Imagane of Imaganes){
        let Nombre = Imagane.Nombre.toLowerCase();  
        if (Nombre.indexOf(Img) !== -1) {
            Resultados.innerHTML += ` 

            <li>${Imagane.Nombre}</li> 
            <img src=${Imagane.URL} alt="Img" class="Resultado">

            `;
        }  
    }
        if (Resultados.innerHTML === '') {
            Resultados.innerHTML += ` 


            <li class='LosLi'>Imagen No Encontrado...</li>

            `;
        }

}



Botones.addEventListener('click', Filtrar)
