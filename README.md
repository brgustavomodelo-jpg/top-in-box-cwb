# Top in Box CWB — Cardápio digital

Catálogo institucional (sem carrinho, sem checkout). HTML, CSS e JavaScript puros.

## Como abrir
Dê dois cliques em `index.html`. Para servir localmente: `python3 -m http.server` na pasta e acesse http://localhost:8000.

## Como editar (tudo em `js/products.js`)
- **Preço / nome / descrição:** altere a linha do produto, ex.: `P("salgados","Pastéis simples","Carne",10,"Carne moída")`. O preço é o 4º valor.
- **Adicionar produto:** copie uma linha `P(...)` dentro da lista `products` e mude os valores. Categorias: `doces`, `salgados`, `pacotes`, `centos`, `bebidas`. Um subtítulo novo (2º valor) cria um novo grupo automaticamente.
- **Remover produto:** apague a linha.
- **Trocar fotos:** coloque a imagem em `assets/products/` e informe o caminho no 7º valor, ex.: `P("salgados","Pastéis simples","Carne",10,"Carne moída","","assets/products/carne.jpg")`. Sem foto, o card aparece só com texto.
- **Links, endereço, telefone:** objeto `CONFIG` no topo do arquivo.
- **Encomendas e avisos:** listas `ENCOMENDAS` e `AVISOS`.
- **Cores:** variáveis no início de `css/style.css`.

## Como publicar
Envie a pasta inteira para um serviço de hospedagem estática (Netlify Drop, GitHub Pages, Cloudflare Pages ou Vercel). O `index.html` deve ficar na raiz.
