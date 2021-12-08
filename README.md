# SST Tron Informática  - VUEJS

## Inicialização do Projeto
<p>O npm install será executado na configuração do projeto</p>

```
npm install
```
### Start docker e compilar projeto
```
docker-compose -f docker-compose-development.yml up -d --build
docker exec -it sstui_vue bash
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
