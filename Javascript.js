document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    
    // Mapping inputs to their respective display spans
    const inputs = {
        fullName: document.getElementById('fullName'),
        nickname: document.getElementById('nickname'),
        dob: document.getElementById('dob'),
        address: document.getElementById('address'),
        email: document.getElementById('email')
    };

    const displays = {
        resName: document.getElementById('resName'),
        resNick: document.getElementById('resNick'),
        resDob: document.getElementById('resDob'),
        resAddr: document.getElementById('resAddr'),
        resEmail: document.getElementById('resEmail')
    };

    // Submit Event Handling
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevents page refresh
        
        let isValid = true;

        // Form Validation Logic
        Object.keys(inputs).forEach(key => {
            const field = inputs[key];
            const errorElement = document.getElementById(key + 'Error');
            
            if (field.value.trim() === "") {
                field.style.borderColor = "red";
                errorElement.textContent = "Field required";
                isValid = false;
            } else {
                field.style.borderColor = "#ccc";
                errorElement.textContent = "";
            }
        });

        if (isValid) {
            // Updating DOM Content
            displays.resName.textContent = inputs.fullName.value;
            displays.resNick.textContent = inputs.nickname.value;
            displays.resDob.textContent = inputs.dob.value;
            displays.resAddr.textContent = inputs.address.value;
            displays.resEmail.textContent = inputs.email.value;
            
            alert("ID Card Generated Successfully!");
        }
    });
});
