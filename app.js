const itens = [
    {
      id: 1,
      titulo: "dandadan",
      genero: "acao sobrenatural",
      img: "imagens/dandadan.jpg",
      sinopse: `A trama acompanha dois estudantes, um ocultista e uma médium, que encaram ameaças paranormais enquanto tentam provar a existência de fantasmas e alienígenas. `,
    },
    {
      id: 2,
      titulo: "undead x unluck",
      genero: "acao romance",
      img: "imagens/undead-unluck.jpg",
      sinopse: `A jovem Fuuko estava decidida a morrer quando um homem misterioso com um corpo imortal surge diante dela! Andy, o "Undead" está determinado a usar os poderes de Fuuko, que trazem azar a qualquer um que a toca, para causar a própria morte e, assim, decide que irá acompanhá-la até que isso aconteça...`,
    },
    {
      id: 3,
      titulo: "record of ragnarok",
      genero: "luta",
      img: "imagens/shumatsu.jpg",
      sinopse: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      titulo: "country delight",
      category: "breakfast",
      img: "imagens/back.jpg",
      sinopse: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      titulo: "egg attack",
      genero: "lunch",
      img: "./images/item-5.jpeg",
      sinopse: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      titulo: "oreo dream",
      genero: "shakes",
      img: "./images/item-6.jpeg",
      sinopse: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      titulo: "bacon overflow",
      genero: "breakfast",
      img: "./images/item-7.jpeg",
      sinopse: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      titulo: "american classic",
      genero: "lunch",
      img: "./images/item-8.jpeg",
      sinopse: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      titulo: "quarantine buddy",
      genero: "shakes",
      img: "./images/item-9.jpeg",
      sinopse: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      titulo: "bison steak",
      genero: "dinner",
      img: "./images/item-10.jpeg",
      sinopse: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  const container = document.getElementById("container")
  const botoes = document.getElementById("botoes")

  window.addEventListener("DOMContentLoaded", function (){
    mostraritens(itens);
});

function mostraritens(animes){
  let mostraritem = animes.map(function (item) {

    return `<section class="box ${item.genero}">
          <div class="imagem">
            <img src="${item.img}" alt="${item.titulo}">
          </div>
            <h3>${item.titulo}</h3>
            <p>${item.genero}</p>
        </section>`
  })
  mostraritem -mostraritem.join("")

  container.innerHTML = mostraritem
}