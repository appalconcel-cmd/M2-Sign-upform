document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('idForm');
    
    // Elements for real-time update and display
    const displayFields = {
        fullName: document.getElementById('displayName'),
        nickname: document.getElementById('displayNick'),
        dob: document.getElementById('displayDob'),
        address: document.getElementById('displayAddress'),
        email: document.getElementById('displayEmail')
    };

    // Event Handling for Form Submission
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // JavaScript Event Object usage
        
        if (validateForm()) {
            updateIDCard();
            alert("ID Successfully Generated!");
        }
    });

    function validateForm() {
        let isValid = true;
        const inputs = form.querySelectorAll('input');

        inputs.forEach(input => {
            const errorSpan = document.getElementById(`${input.id}Error`);
            
            // Simple validation: check if empty
            if (input.value.trim() === "") {
                input.classList.add('invalid'); // CSS Class Manipulation
                errorSpan.textContent = "This field is required."; // Displaying Error Messages
                isValid = false;
            } else {
                input.classList.remove('invalid');
                errorSpan.textContent = "";
            }
        });

        return isValid;
    }

    function updateIDCard() {
        // Accessing and Modifying Element Properties
        displayFields.fullName.textContent = document.getElementById('fullName').value;
        displayFields.nickname.textContent = document.getElementById('nickname').value;
        displayFields.dob.textContent = document.getElementById('dob').value;
        displayFields.address.textContent = document.getElementById('address').value;
        displayFields.email.textContent = document.getElementById('email').value;
    }
});
