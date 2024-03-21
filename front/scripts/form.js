    const sendPost = require('./handlerpost');

    const form = document.getElementById("formMovies")
    const containerInputs= document.querySelectorAll(".forValidate");
    const checkboxes = document.querySelectorAll('input[type="checkbox"]')

    // validacion en línea
    //inputs

    containerInputs.forEach((containerInput)=>{
        const input = containerInput.querySelector('input')
        const feedback = containerInput.querySelector('div')
        input.addEventListener("input",(event)=>{
            if(input.validity.valid ){
                feedback.textContent=""
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
    //check box
    checkboxes.forEach(checkbox=>{
        checkbox.addEventListener('change', ()=>{
            if(validationCheckBoxes()){
                document.getElementById("check-feedback").style.color= "#28a745"
            }else{
                document.getElementById("check-feedback").textContent="Select at least one genre"
                document.getElementById("check-feedback").style.color= "#dc3545"
            }
        })
    })

    //validation submit

    // validacion js elementos no vacios inputs
    const validationInputs = ()=>{
        let validation = true     
        containerInputs.forEach((containerInput)=>{
            const input = containerInput.querySelector('input')
            if(!input.value.trim()){
                validation = false
            }

        })
        return validation
    }

    // validacion submit al menos un checkbox marcado
    const validationCheckBoxes = () => {
        let marcado = false
        checkboxes.forEach(checkbox=>{if(checkbox.checked){marcado=true}})
        if(!marcado){return false;}
        return true;
    }

    // funciones eventos manejadores
    const resetForm = () => {
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
            document.getElementById("checkboxAction").checked=true; 
        }

    const submitForm = (event)=>{
        event.preventDefault();
        if(!form.checkValidity()||!validationCheckBoxes()||!validationInputs())
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
        checkboxes.forEach((checkbox)=>{if(checkbox.checked){genre.push(checkbox.value)}})
    
        const data = {title,year,director,duration,genre,rate,poster}
        sendPost(data);
        resetForm();
    }

    form.addEventListener("submit",submitForm);
    document.getElementById("btn_reset").addEventListener("click",resetForm);;


