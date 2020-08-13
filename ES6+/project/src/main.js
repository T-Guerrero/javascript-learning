import api from './api';

class App {
    constructor() {
        this.repositories = [];
        this.formEl = document.getElementById('repo-form')
        this.inputEl = document.querySelector('input[name=repository]')
        this.listEl = document.getElementById('repo-list')
        this.registerHandlers();
    }
    registerHandlers(){
        this.formEl.addEventListener('submit', (e) => { this.addRepository(e) });
    }

    setLoading(loading = true){
        if (loading === true){
            let loadingEl = document.createElement('span');
            loadingEl.appendChild(document.createTextNode('Carregando'));
            loadingEl.id = 'loading';
            this.formEl.appendChild(loadingEl);
        }
        else{
            let loadingEl = document.getElementById('loading').remove();
        }
    }

    async addRepository(e){
        e.preventDefault();
        const repoName = this.inputEl.value;
        if (!repoName.trim())
            return;
        
            this.setLoading();
        try {
            this.inputEl.value = 'Loading'
            const response = await api.get(`/repos/${repoName}`);
            const {name, description, html_url, owner:{ avatar_url} } = response.data;
            this.repositories.push({
                name,
                description,
                avatar_url,
                html_url
            });
            this.inputEl.value = '';
            this.render();
        } catch (error) {
            alert('O repositório não existe!')
        }
        this.setLoading(false);
    }

    render(){
        this.listEl.innerHTML = '';
        this.repositories.forEach(repo => {
            let imgEl = document.createElement('img');
            imgEl.src = repo.avatar_url;

            let titleEl = document.createElement('strong');
            titleEl.appendChild(document.createTextNode(repo.name));

            let descriptionEl = document.createElement('p');
            descriptionEl.appendChild(document.createTextNode(repo.description));

            let linkEl = document.createElement('a');
            linkEl.target = '_blank';
            linkEl.href = repo.html_url;
            linkEl.appendChild(document.createTextNode('Acessar'));

            const newListEl = document.createElement('li');
            newListEl.appendChild(imgEl);
            newListEl.appendChild(titleEl);
            newListEl.appendChild(descriptionEl);
            newListEl.appendChild(linkEl);

            this.listEl.appendChild(newListEl);
        })
    }
}

new App();