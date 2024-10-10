// URL da API pública
const apiUrl = 'https://jsonplaceholder.typicode.com/posts';

// Seleciona o elemento UL onde os posts serão exibidos
const postList = document.getElementById('post-list');

// Função para buscar dados da API
function fetchPosts() {
    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro na requisição');
            }
            return response.json();
        })
        .then(data => {
            displayPosts(data);
        })
        .catch(error => {
            console.error('Erro:', error);
            postList.innerHTML = '<li>Erro ao carregar posts</li>';
        });
}

// Função para exibir os posts na tela
function displayPosts(posts) {
    // Limpa a lista antes de exibir novos dados
    postList.innerHTML = '';

    // Limita o número de posts a 10 (opcional)
    posts.slice(0, 10).forEach(post => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`;
        postList.appendChild(listItem);
    });
}

// Chama a função para buscar os posts ao carregar a página
fetchPosts();
