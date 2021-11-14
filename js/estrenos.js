const cargarPeliculas = async() =>{

    try{
    const respuesta = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=47816039f11e58ddd3d89ed77524fb5f');
    console.log(respuesta);

    //Comprobar si la consulta es correcta.
    
    if(respuesta.status === 200){
        const datos = await respuesta.json();

        let peliculas = '';
        datos.results.forEach(pelicula=>{
            peliculas += ` 
            <div class="container-fluid">
            <div class="col-12 col-lg-6 col-xl-4 my-3">
            <div class="border border-warning border-3 card" style="width: 22rem;">
            <img src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}" class="card-img-top">
            <div class="card-body">
            <h5 class="btn btn-warning">${pelicula.title}</h5><br>
            <h5 class="btn btn-warning">${pelicula.release_date}</h5>
            </div>
            </div>
            </div>
            </div>`
        });

        document.getElementById('contenedor').innerHTML=peliculas;

        datos.results.forEach(pelicula =>{
           console.log(pelicula.title);
       });

            } else if(respuesta.status===401){
                console.log('Revisa los datos de tu consulta y vuelve a intentar.');
            } else if (respuesta.status===404){
                console.log('La movie que buscas no existe');
            }
            
            }catch(error){
                console.log(error);
            }
}
cargarPeliculas();