/* Lógica do site: abertura, navegação, abas e produtos (os dados vêm de products.js). */
const $ = (s, el = document) => el.querySelector(s);
const brl = v => v.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
const ICON = {
  fork: '<svg viewBox="0 0 24 24"><path d="M7 2v8a2 2 0 0 0 2 2v10h2V12a2 2 0 0 0 2-2V2h-1.5v6h-1V2H8.500v6h-1V2zM17 2c-2 1.500-3 4-3 7 0 2 1 3 3 3v10h2V2z"/></svg>',
  insta: '<svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.500a4.500 4.500 0 1 1 0 9 4.500 4.500 0 0 1 0-9zm0 2a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5zM17.300 5.800a1.100 1.100 0 1 1 0 2.200 1.100 1.100 0 0 1 0-2.200z"/></svg>',
  wa: '<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.600 15L2 22l5.200-1.400A10 10 0 1 0 12 2zm0 2a8 8 0 1 1-4.200 14.800l-.3-.2-3 .8.8-2.900-.2-.3A8 8 0 0 1 12 4zM8.800 7.500c-.4 0-.8.2-1.100.6-.4.500-1 1.200-1 2.600s1.100 3 1.300 3.200c.2.200 2.200 3.500 5.400 4.700 2.700 1 3.200.8 3.800.7.600-.1 1.900-.8 2.100-1.500.3-.7.3-1.400.2-1.500l-.5-.3-1.900-.9c-.3-.1-.5-.1-.7.1l-.9 1.100c-.2.200-.3.200-.6.100-1.800-.9-3-1.600-4.100-3.500-.1-.3.100-.4.300-.6l.5-.6.300-.5v-.5l-.9-2.100c-.2-.5-.4-.5-.6-.5z"/></svg>',
  pin: '<svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.500A2.500 2.500 0 1 1 12 6.500a2.500 2.500 0 0 1 0 5z"/></svg>'
};
// Links, textos e ícones preenchidos a partir de CONFIG
document.querySelectorAll("[data-link]").forEach(a => { a.href = CONFIG[a.dataset.link]; a.target = "_blank"; a.rel = "noopener"; });
document.querySelectorAll("[data-txt]").forEach(el => el.textContent = CONFIG[el.dataset.txt]);
document.querySelectorAll("[data-icon]").forEach(el => el.insertAdjacentHTML("afterbegin", ICON[el.dataset.icon]));

// Abertura animada (só na primeira carga)
const intro = $("#intro");
setTimeout(() => { document.body.classList.add("ready"); intro.classList.add("out"); }, 1900);
setTimeout(() => intro.remove(), 2700);

// Navegação Início <-> Cardápio (sem recarregar)
function show(view) {
  $("#home").hidden = view !== "home"; $("#menu").hidden = view !== "menu";
  window.scrollTo({ top: 0, behavior: "smooth" });
  history.replaceState(null, "", view === "menu" ? "#cardapio" : location.pathname);
}
document.querySelectorAll("[data-go]").forEach(b => b.addEventListener("click", e => {
  e.preventDefault(); show(b.dataset.go); if (b.dataset.cat) openCat(b.dataset.cat);
}));

// Abas do cardápio
const tabs = $("#tabs"), list = $("#list");
CATEGORIES.forEach(c => {
  const b = document.createElement("button");
  b.setAttribute("role", "tab"); b.id = "tab-" + c.id; b.textContent = c.nome;
  b.addEventListener("click", () => openCat(c.id)); tabs.append(b);
});
function openCat(id) {
  tabs.querySelectorAll("button").forEach(b => b.setAttribute("aria-selected", b.id === "tab-" + id));
  $("#tab-" + id).scrollIntoView({ inline: "center", block: "nearest" });
  const groups = {};
  products.filter(p => p.category === id).forEach(p => (groups[p.group] ||= []).push(p));
  list.innerHTML = "";
  Object.entries(groups).forEach(([g, items]) => {
    const s = document.createElement("section");
    s.innerHTML = `<h3>${g}</h3><div class="grid"></div>`;
    items.forEach(p => {
      const c = document.createElement("article"); c.className = "card";
      c.innerHTML = (p.image ? `<img src="${p.image}" alt="${p.name}" loading="lazy">` : "") +
        `<div class="info"><h4>${p.name}</h4>${p.description ? `<p>${p.description}</p>` : ""}${p.detail ? `<p class="detail">${p.detail}</p>` : ""}</div><span class="price">${brl(p.price)}</span>`;
      $(".grid", s).append(c);
    });
    list.append(s);
  });
  list.classList.remove("swap"); void list.offsetWidth; list.classList.add("swap");
}
openCat(CATEGORIES[0].id);

// Encomendas
$("#enc-list").innerHTML = ENCOMENDAS.map(([n, q, v]) => `<li><span>${n}<small>${q}</small></span><b>${brl(v)}</b></li>`).join("");
$("#avisos").innerHTML = AVISOS.map(a => `<li>${a}</li>`).join("");
if (location.hash === "#cardapio") show("menu");
