// Configuração do Firebase (sem imports: o initializeApp é chamado nas páginas)
export const firebaseConfig = {
  apiKey: "AIzaSyC-jFvqCHitpO8-5tH7O0CgB3Z4HiAglUg",
  authDomain: "buzzer-professor.firebaseapp.com",
  databaseURL: "https://buzzer-professor-default-rtdb.firebaseio.com",
  projectId: "buzzer-professor",
  storageBucket: "buzzer-professor.firebasestorage.app",
  messagingSenderId: "321791042849",
  appId: "1:321791042849:web:4c5add76f30f23abb84a60"
};

// Código da sala: vem da URL (?sala=turma1). Permite várias turmas ao mesmo tempo.
export function getSala() {
  const p = new URLSearchParams(location.search);
  return (p.get("sala") || "turma1").replace(/[.#$\[\]\/]/g, "").slice(0, 30);
}
