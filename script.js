document.getElementById('generateButton').addEventListener('click', function() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then(data => {
            document.getElementById('dogImage').src = data.message;
        })
        .catch(error => console.error('Erro ao buscar imagem:', error));
});

const apiKey = 'Yn3pdNj8eZvZvAQVagjrtq8EGPd27YvcXPb6Bpni'; // Substitua com a chave de API fornecida pela NASA

document.getElementById('generateButton').addEventListener('click', function() {
    fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const imgElement = document.getElementById('animalImage');
            imgElement.src = data.url;
            imgElement.alt = data.title; // Adiciona o título como texto alternativo
            imgElement.style.display = 'block'; // Exibe a imagem
        })
        .catch(error => console.error('Erro ao buscar imagem:', error));
});
