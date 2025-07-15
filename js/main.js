// Obtener desde los parámetros GET
const urlParams = new URLSearchParams(window.location.search);

loadEvents().then((events) => {
  const code = parseInt(urlParams.get('code'));
  const lang = urlParams.get('lang')?.toLowerCase() || 'es';
  const nombre = urlParams.get('name')?.concat("!") || "Invitado!";
  const emojiContainer = document.createElement("div");

  let event = events[code];
  if (!event || !event.texts[lang]) {
    event = {
      image: "images/error.jpg",
      texts: {
        es: { title: "Error", text: "Mensaje no disponible" }
      }
    };
  }

  const content = event.texts[lang] || event.texts['es']; // fallback a español

  //Emogis
  emojiContainer.setAttribute("aria-hidden", "true");
  emojiContainer.className = "emoji-animation";
  emojiContainer.innerText = event.emoji || "";

  // Actualizar contenido
  document.documentElement.lang = lang;
  document.querySelectorAll('.titleJS').forEach(ttle => ttle.innerText = content.title);
  document.getElementById('name').innerText = nombre;
  document.getElementById('image').src = event.image;
  document.getElementById('text').innerText = content.text;
  document.querySelector("main").appendChild(emojiContainer);
});