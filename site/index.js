//  iframe do menu cadastrar e menu entrar

const iframeContainer = document.getElementById("iframeContainer");
const closeBtn = document.getElementById("closeBtn");

function abrirIframe(arquivo) {
  // Remove iframe existente
  const iframeExistente = iframeContainer.querySelector("iframe");
  if (iframeExistente) {
    iframeContainer.removeChild(iframeExistente);
  }
  // Cria novo iframe
  const iframe = document.createElement("iframe");
  iframe.src = arquivo;
  iframe.style.width = "95%";
  iframe.style.height = "80%";
  iframe.style.border = "none";
  iframeContainer.appendChild(iframe);
  iframeContainer.style.display = "block";
}

document.getElementById("btnAbrirLogin").addEventListener("click", () => {
  abrirIframe("entrar.html");
});

document.getElementById("btnAbrirCadastro").addEventListener("click", () => {
  abrirIframe("cadastro.html");
});

closeBtn.addEventListener("click", () => {
  iframeContainer.style.display = "none";
  const iframe = iframeContainer.querySelector("iframe");
  if (iframe) {
    iframeContainer.removeChild(iframe);
  }
});

let menu = document.querySelectorAll(".info");

menu.forEach((item) => {
  item.addEventListener("mouseover", () => {
    item.style.color = "red";
  });

  item.addEventListener("mouseout", () => {
    item.style.color = "white";
  });
});
