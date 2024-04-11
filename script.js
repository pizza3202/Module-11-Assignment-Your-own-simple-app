document.addEventListener('DOMContentLoaded', function() {
    const apiKey = 'live_X2g0o2blAfB2FwGXzZuQzB8rGvI2NAU2epIvbyNVAXzq8FymVFaOKHyF20ZE9x70';
    const apiUrl = 'https://api.thedogapi.com/v1/images/search';
    const dogImg = document.getElementById('dog-image');
    const dogBreed = document.getElementById('dog-breed');
    const nextDogButton = document.getElementById('next-dog');
    function fetchDog() {
        fetch(apiUrl, {
            headers: {
                'x-api-key': apiKey 
            }
        })
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                dogImg.src = data[0].url;
                if (data[0].breeds && data[0].breeds.length > 0) {
                    dogBreed.textContent = `Breed: ${data[0].breeds[0].name}`;
                } else {
                    dogBreed.textContent = 'No breed information found.';
                }
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
            dogBreed.textContent = 'Failed to fetch dog data.';
        });
    }
    fetchDog();
    nextDogButton.addEventListener('click', function() {
        fetchDog();
    });
});
