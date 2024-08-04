function getNumbers() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve([1, 2, 3, 4]);
                }, 3000);
            });
        }

        // Function to filter out odd numbers
        function filterOdds(numbers) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const evenNumbers = numbers.filter(number => number % 2 === 0);
                    resolve(evenNumbers);
                }, 1000);
            });
        }

        // Function to multiply even numbers by 2
        function multiplyByTwo(numbers) {
            return new Promise((resolve) => {
                setTimeout(() => {
                    const multipliedNumbers = numbers.map(number => number * 2);
                    resolve(multipliedNumbers);
                }, 2000);
            });
        }

        // Function to update the DOM
        function updateOutput(text) {
            document.getElementById('output').textContent = text;
        }

        // Chain the promises
        getNumbers()
            .then(numbers => {
                return filterOdds(numbers).then(evenNumbers => {
                    updateOutput(evenNumbers.join(', '));
                    return evenNumbers;
                });
            })
            .then(evenNumbers => {
                return multiplyByTwo(evenNumbers).then(multipliedNumbers => {
                    updateOutput(multipliedNumbers.join(', '));
                });
            })
            .catch(error => {
                console.error('An error occurred:', error);
            });