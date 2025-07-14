async function loadEvents() {
  const response = await fetch('adriacara.github.io/Felicitats/data/events.json');
  if (!response.ok) {
    throw new Error("No se pudo cargar el JSON");
  }
  return await response.json();
}