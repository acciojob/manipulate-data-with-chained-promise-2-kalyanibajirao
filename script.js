// your-script.js

document.addEventListener('DOMContentLoaded', () => {
    const ageForm = document.getElementById('ageForm');
    const ageInput = document.getElementById('age');
    const nameInput = document.getElementById('name');

    ageForm.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent default form submission

        const age = parseInt(ageInput.value, 10);
        const name = nameInput.value;

        if (isNaN(age) || age <= 0) {
            alert('Please enter a valid age.');
            return;
        }

        try {
            const result = await verifyAge(age);
            alert(`Welcome, ${name}. You can vote.`);
        } catch (error) {
            alert(`Oh sorry, ${name}. You aren't old enough.`);
        }
    });

    function verifyAge(age) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (age >= 18) {
                    resolve();
                } else {
                    reject();
                }
            }, 4000); // Wait for 4 seconds
        });
    }
});
