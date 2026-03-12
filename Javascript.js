document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('idRegistrationForm');
    
    // Accessing elements for ID functionality
    const fields = {
        name: document.getElementById('fullName'),
        nick: document.getElementById('nickname'),
        dob: document.getElementById('dob'),
        addr: document.getElementById('address'),
        email: document.getElementById('email')
    };

    const outputs = {
        name: document.getElementById('resName'),
        nick: document.getElementById('resNick'),
        dob: document.getElementById('resDob'),
        addr: document.getElementById('resAddr'),
        email: document.getElementById('resEmail')
    };

    // Event Handling for submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Using the Event Object
        
        let valid = true;

        // Form Validation Basics
        Object.keys(fields).forEach(key => {
            const input = fields[key];
            const error = document.getElementById(input.id + 'Error');
            
            if (!input.value.trim()) {
                input.style.borderColor = "#d9534f"; // Modifying properties
                error.textContent = "Required"; // Displaying error messages
                valid = false;
            } else {
                input.style.borderColor = "#ddd";
                error.textContent = "";
            }
        });

        if (valid) {
            // Modifying content for ID functionality
            outputs.name.textContent = fields.name.value;
            outputs.nick.textContent = fields.nick.value;
            outputs.dob.textContent = fields.dob.value;
            outputs.addr.textContent = fields.addr.value;
            outputs.email.textContent = fields.email.value;
            
            alert("Success! Your ID has been updated.");
        }
    });
});
