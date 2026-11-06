/* ARQUIVO ÚNICO DE PRODUTOS E INFORMAÇÕES — edite preços, nomes, descrições e fotos aqui.
   image: caminho da foto (ex.: "assets/products/carne.jpg"). Vazio = sem foto (espaço reservado). */
const CONFIG = {
  nome: "TOP IN BOX CWB",
  whatsapp: "https://api.whatsapp.com/send/?phone=554197984574&text&type=phone_number&app_absent=0",
  whatsappTexto: "(41) 99798-4574",
  instagram: "https://www.instagram.com/topinbox.cwb/",
  instagramUser: "@topinbox.cwb",
  endereco: "Rua Cid Marcondes de Albuquerque, 2539",
  mapa: "https://www.google.com/maps/search/?api=1&query=Rua+Cid+Marcondes+de+Albuquerque+2539"
};
const CATEGORIES = [
  { id: "doces", nome: "DOCES" }, { id: "salgados", nome: "SALGADOS" },
  { id: "pacotes", nome: "PACOTES" }, { id: "centos", nome: "CENTOS DE DOCES" },
  { id: "bebidas", nome: "BEBIDAS" }
];
// P(categoria, subtítulo, nome, preço, descrição, quantidade/tamanho, foto)
const P = (category, group, name, price, description = "", detail = "", image = "") =>
  ({ category, group, name, price, description, detail, image });
const products = [
  // DOCES
  P("doces","Pastéis doces","Chocolate ao leite",11),
  P("doces","Pastéis doces","Doce de leite",11),
  P("doces","Pastéis doces","Romeu e Julieta",10),
  P("doces","Pastéis doces","Banana com chocolate",11),
  P("doces","Pastéis doces","Sensação",12,"Morango e chocolate ao leite"),
  P("doces","Pastéis doces","Banoffee",12,"Banana, doce de leite e canela"),
  // SALGADOS
  P("salgados","Pastéis simples","Carne",10,"Carne moída"),
  P("salgados","Pastéis simples","Queijo",10,"Mussarela e orégano"),
  P("salgados","Pastéis simples","Pizza",10,"Mussarela, presunto e orégano"),
  P("salgados","Pastéis simples","Frango",10,"Frango desfiado e mussarela"),
  P("salgados","Pastéis simples","Calabresa",10,"Calabresa, mussarela e orégano"),
  P("salgados","Pastéis especiais","Frango com requeijão",12,"Frango, mussarela, requeijão e azeitona"),
  P("salgados","Pastéis especiais","Frango com cheddar",12,"Frango, mussarela, cheddar e bacon"),
  P("salgados","Pastéis especiais","Palmito",12,"Palmito, mussarela, milho e azeitona"),
  P("salgados","Pastéis especiais","Bacon",12,"Bacon, carne e cheddar"),
  P("salgados","Pastéis TOP","Camarão",15,"Camarão, mussarela e catupiry"),
  P("salgados","Pastéis TOP","Costela",15,"Costela, mussarela e requeijão"),
  P("salgados","Pastéis TOP","Completão",13,"Carne, frango, calabresa, mussarela, presunto, azeitona e orégano"),
  P("salgados","Outros salgados","Coxinha de frango",6),
  P("salgados","Outros salgados","Bolinho de carne",5),
  P("salgados","Outros salgados","Vina frita",4),
  P("salgados","Outros salgados","Pão bolinho",8),
  P("salgados","Outros salgados","Assadinho de forno",3),
  // PACOTES
  P("pacotes","TOP COPOS P","Salgadinhos",10,"","16 unidades"),
  P("pacotes","TOP COPOS P","Mini churros",12,"","16 unidades"),
  P("pacotes","TOP COPOS P","Batata frita",10,"","200g"),
  P("pacotes","TOP COPOS G","Salgadinhos",16,"","26 unidades"),
  P("pacotes","TOP COPOS G","Mini churros",17,"","26 unidades"),
  P("pacotes","TOP COPOS G","Batata frita",15,"","300g"),
  P("pacotes","TOP 50 UNIDADES","Mix",38,"","50 unidades"),
  P("pacotes","TOP 50 UNIDADES","Quibe",34,"","50 unidades"),
  P("pacotes","TOP 50 UNIDADES","Churros",39,"","50 unidades"),
  P("pacotes","TOP 100 UNIDADES","Mix",63,"","100 unidades"),
  P("pacotes","TOP 100 UNIDADES","Quibe",59,"","100 unidades"),
  P("pacotes","TOP 100 UNIDADES","Churros",65,"","100 unidades"),
  // CENTOS DE DOCES
  P("centos","Churros de doce de leite","Churros de doce de leite",39,"","50 unidades"),
  P("centos","Churros de doce de leite","Churros de doce de leite",65,"","100 unidades"),
  P("centos","Brigadeiros","Brigadeiro",1.5,"Chocolate tradicional ou ninho","Unidade"),
  // BEBIDAS
  P("bebidas","Refrigerantes e outras bebidas","Cini 2L",7.9),
  P("bebidas","Refrigerantes e outras bebidas","Coca-Cola 1L",8),
  P("bebidas","Refrigerantes e outras bebidas","Cini 600ml",5.5),
  P("bebidas","Refrigerantes e outras bebidas","Coca-Cola 350ml",5),
  P("bebidas","Refrigerantes e outras bebidas","Guaraná 350ml",5),
  P("bebidas","Refrigerantes e outras bebidas","Fanta Laranja 350ml",5),
  P("bebidas","Refrigerantes e outras bebidas","Fanta Uva 350ml",5),
  P("bebidas","Refrigerantes e outras bebidas","Sprite 350ml",5),
  P("bebidas","Refrigerantes e outras bebidas","Coca-Cola 200ml",3.5),
  P("bebidas","Refrigerantes e outras bebidas","Cini 200ml",3),
  P("bebidas","Refrigerantes e outras bebidas","Água 500ml",3.5),
  ...["Acerola","Abacaxi","Goiaba","Manga","Maracujá","Morango"].map(s=>P("bebidas","Sucos naturais – 500ml",s,8)),
  ...["Morango com leite","Maracujá com leite","Cupuaçu com leite"].map(s=>P("bebidas","Sucos naturais – 500ml",s,12)),
  P("bebidas","Bebidas quentes","Café com leite",3),
  P("bebidas","Bebidas quentes","Chocolate quente",4)
];
// Encomendas para festas: [nome, quantidade, preço]
const ENCOMENDAS = [
  ["Mini salgadinhos","50 unidades",38],["Mini salgadinhos","100 unidades",63],
  ["Mini assadinhos","50 unidades",50],["Mini assadinhos","100 unidades",100],
  ["Churros de doce de leite","50 unidades",39],["Churros de doce de leite","100 unidades",65],
  ["Brigadeiro","Unidade",1.5]
];
const AVISOS = [
  "Encomendas acima de R$ 50,00 exigem sinal de 50% do valor do pedido.",
  "Cartão de débito, crédito e dinheiro somente para retirada na loja.",
  "Encomendas devem ser realizadas com no mínimo 2 dias de antecedência."
];
