  import{saveLibro} from './app/firebase.js'
  
  const librosForm = document.getElementById("libros-form");
  
  librosForm.addEventListener('submit',(e)=>{
    e.preventDefault()

    const titulo     = librosForm['titulo']
    const autor      = librosForm['autor']
    const editorial  = librosForm['editorial']
    const isbn       = librosForm['isbn']
    const fecha      = librosForm['fecha']

    saveLibro(titulo.value, autor.value, editorial.value, isbn.value, fecha.value)
  })

