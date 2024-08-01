//your JS code here. If required.
// Function that returns a promise resolving with the array [1, 2, 3, 4] after 3 seconds
function getNumbers() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([1, 2, 3, 4]);
        }, 3000);
    });
}

// Function to update the output div with the current array
function updateOutput(array) {
    const outputDiv = document.getElementById('output');
    outputDiv.textContent = array.join(', ');
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
        outputDiv.textContent = `Error: ${error}`;
    });
