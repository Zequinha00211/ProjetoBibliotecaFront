# SST Tron Informática  - VUEJS

## Inicialização do Projeto
```
npm install
```

### Start docker e compilar projeto
```
docker-compose -f docker-compose-development.yml up -d --build
docker exec -it sstui_vue
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
