document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('idForm');

    form.addEventListener('submit', (e) => {
        e.preventDefault(); // JavaScript Event Object [cite: 10]
        
        // Form Validation Basics [cite: 11]
        const inputs = ['fullName', 'nickname', 'dob', 'address', 'email'];
        let isValid = true;
        
        inputs.forEach(id => {
            if (!document.getElementById(id).value) {
                isValid = false;
                // Add CSS class manipulation for error states [cite: 13]
            }
        });

        if (isValid) {
            // Modifying element content [cite: 7]
            document.getElementById('outName').textContent = document.getElementById('fullName').value;
            // ... repeat for other fields
        }
    });
});
