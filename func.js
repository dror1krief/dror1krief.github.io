async function fetchData(type) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/${type}`);
    const data = await response.json();
    displayData(data, type);
}

function displayData(data, type) {
    const container = document.getElementById('card-container');
    container.innerHTML = ''; // Clear the container before adding new cards

    data.forEach(item => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const title = document.createElement('div');
        title.className = 'card-title';
        title.innerText = getTitle(item, type);
        
        const content = document.createElement('div');
        content.className = 'card-content';
        content.innerText = getContent(item, type);
        
        card.appendChild(title);
        card.appendChild(content);
        container.appendChild(card);
    });
}

function getTitle(item, type) {
    switch(type) {
        case 'posts':
            return item.title;
        case 'comments':
            return `Comment by User ${item.email}`;
        case 'users':
            return item.name;
        default:
            return '';
    }
}

function getContent(item, type) {
    switch(type) {
        case 'posts':
            return item.body;
        case 'comments':
            return item.body;
        case 'users':
            return `Email: ${item.email}, Phone: ${item.phone}`;
        default:
            return '';
    }
}

// Load posts by default
fetchData('posts');
