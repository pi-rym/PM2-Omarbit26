document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("formMovies")
    const containerInputs= document.querySelectorAll(".forValidate");
    const containerCheck= document.getElementById("forValidateCheck")

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



    const checkboxes = document.querySelectorAll('input[type="checkbox"]')
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
        if(!validateCheckBoxes())
        { 
            console.log("Complete todos los campos el formulario")
            return
        }
        //!form.checkValidity()||
        alert("Se estan enviando datos al servidor")
        resetForm();
    }

    form.addEventListener("submit",submitForm);
    form.addEventListener("reset",resetForm);
})

