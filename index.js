document.body.onload = adcElmento;
const parentList = [
  {
    name: "Marcos Maia",
    children: "Clarice",
  },
  {
    name: "João Paulo",
    children: "Pedro",
  },
  {
    name: "Fernanda",
    children: "Rosa",
  },
  {
    name: "Patricia",
    children: "Ana",
  },
  {
    name: "Lucas",
    children: "Samira",
  },
];

function adcElmento() {
  let liNovo = document.createElement("li");
  /*
  const conteudoNovo = document.createTextNode(
    `${parentList[0].name} é o pai de ${parentList[0].children}`
  );
  */
  const conteudoNovo = document.createTextNode(
    parentList.map(function (valor) {
      return `${valor.name} é o pai de ${valor.children}`;
    })
  );
  liNovo.appendChild(conteudoNovo);
  const $parentList = document.querySelector(".parent-list");
  document.body.insertBefore(liNovo, $parentList);
}

//a função deve adicionar as lis dentro da ul ".parent-list", contendo o nome do pai e da criança.

//ex: <li> Marcos Maia é pai de Clarice </li>

// Como o array tem 5 pais, deve adicionar 5 lis de acordo com exemplo acima.

//dica: você pode usar o document.createElement('li') ou innerHTML;
