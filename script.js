document.addEventListener("DOMContentLoaded", function() {
    // Function to simulate asynchronous data fetching that resolves with an array of numbers after 3 seconds
    function getNumbers() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([1, 2, 3, 4]);
            }, 3000);
        });
    }

    // Function to update the output div with the provided array
    function updateOutput(array) {
        const outputDiv = document.getElementById('output');
        if (outputDiv) {
            outputDiv.textContent = array.join(', ');
        }
    }

    // Start the promise chain
    getNumbers()
        .then(numbers => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    // Filter out odd numbers
                    const evenNumbers = numbers.filter(num => num % 2 === 0);
                    updateOutput(evenNumbers); // Update the output after 1 second
                    resolve(evenNumbers);
                }, 1000);
            });
        })
        .then(evenNumbers => {
            return new Promise((resolve) => {
                setTimeout(() => {
                    // Multiply even numbers by 2
                    const multipliedNumbers = evenNumbers.map(num => num * 2);
                    updateOutput(multipliedNumbers); // Update the output after 2 seconds
                    resolve(multipliedNumbers);
                }, 2000);
            });
        })
        .catch(error => {
            const outputDiv = document.getElementById('output');
            if (outputDiv) {
                outputDiv.textContent = `Error: ${error}`;
            }
        });
});
