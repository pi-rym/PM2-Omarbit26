const axios = require('axios')


    
    const form = document.getElementById("formMovies")
    const containerInputs= document.querySelectorAll(".forValidate");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')


    const validateCheckBoxes = () => {
        const checkboxess = document.querySelectorAll('input[type="checkbox"]');
        let marcado = false
        checkboxess.forEach(checkbox=>{
            if(checkbox.checked){
                marcado=true;
            }
        })
        if(!marcado){
            return false;
        }
        return true;
    }

     /**validacion en tiempo real */
    containerInputs.forEach((containerInput)=>{
        const input = containerInput.querySelector('input')
        const feedback = containerInput.querySelector('div')
        input.addEventListener("input",(event)=>{
            if(input.validity.valid ){
                feedback.textContent="ok!"
                feedback.classList.remove("invalid-feedback")
                feedback.classList.add("valid-feedback")
                input.classList.remove("is-invalid")
                input.classList.add("is-valid")
            }else{
                feedback.textContent=`Introduce un campo valido, ejem: ${input.placeholder}`
                feedback.classList.remove("valid-feedback")
                feedback.classList.add("invalid-feedback")
                input.classList.remove("is-valid")
                input.classList.add("is-invalid")
            }
        })  
    })

    checkboxes.forEach(checkbox=>{
        checkbox.addEventListener('change', ()=>{
            if(validateCheckBoxes()){
                document.getElementById("check-feedback").textContent="ok!"
                document.getElementById("check-feedback").style.color= "#28a745"
            }else{
                document.getElementById("check-feedback").textContent="Select at least one genre"
                document.getElementById("check-feedback").style.color= "#dc3545"
            }
        })
    })

    
    const sendPost = (data)=>{
        const config = {
            method: 'post',
            url: 'http://localhost:3000/movies',
            headers: {
              'Content-Type': 'application/json'
            },
            data: data
          }

          axios(config)
            .then(function (response) {
                console.log(response)
                alert("Se creo movie en base de datos")
            })
             .catch(function (error) {
                alert('Error al realizar la solicitud:', error);
            });
    }



    const resetForm = (event) => {
        containerInputs.forEach((containerInput)=>{
            const input = containerInput.querySelector('input')
            const feedback = containerInput.querySelector('div')
            input.value=""
            feedback.textContent=""
            feedback.classList.remove("invalid-feedback")
            feedback.classList.remove("valid-feedback")
            input.classList.remove("is-invalid")
            input.classList.remove("is-valid")
            })
        checkboxes.forEach(checkbox=>{
            checkbox.checked=false;
            document.getElementById("check-feedback").textContent=""
        })
        }

    const submitForm = (event)=>{
        event.preventDefault();
        if(!form.checkValidity()||!validateCheckBoxes())
        { 
            
            return alert("Es obligatorio que todos los campos esten validados")
        }

        alert("Se estan enviando datos al servidor")
        const title=document.getElementById("inputTitle").value 
        const year=document.getElementById("inputYear").value
        const director=document.getElementById("inputDirector").value
        const duration=document.getElementById("inputDuration").value
        const rate=document.getElementById("inputRate").value
        const poster=document.getElementById("inputPoster").value
        const genre = []
        checkboxes.forEach((checkbox)=>{
            if(checkbox.checked){
                genre.push(checkbox.value)
            }
        })
    
        const data = {
            title,
            year,
            director,
            duration,
            genre,
            rate,
            poster
        }
        console.log(data)
        sendPost(data);
        resetForm();
    }

    form.addEventListener("submit",submitForm);
    form.addEventListener("reset",resetForm);


