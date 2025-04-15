import { useState, useEffect } from "react";
import { ajouterTache, recupererTaches } from "./firebaseConfig";
window.addEventListener("error", function (e) {
  alert("Erreur : " + e.message);
});
function App() {
  const [nouvelleTache, setNouvelleTache] = useState("");
  const [taches, setTaches] = useState([]);

  useEffect(() => {
    chargerTaches();
  }, []);

  const chargerTaches = async () => {
    const tachesFirebase = await recupererTaches();
    setTaches(tachesFirebase);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (nouvelleTache.trim() !== "") {
      await ajouterTache(nouvelleTache);
      setNouvelleTache("");
      chargerTaches();
    }
  };

  return (
  <div>
    <h1>Ma super To-Do liste</h1>
    <form onSubmit={ajouterNouvelleTache}>
      <input
        type="text"
        value={nouvelleTache}
        onChange={(e) => setNouvelleTache(e.target.value)}
        placeholder="Ajouter une tâche"
      />
      <button type="submit">Ajouter</button>
    </form>
    <ul>
      {taches.map((tache) => (
        <li key={tache.id}>{tache.titre}</li>
      ))}
    </ul>
  </div>
);
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Ma To-do List</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Nouvelle tâche"
          value={nouvelleTache}
          onChange={(e) => setNouvelleTache(e.target.value)}
        />
        <button type="submit" style={{ marginLeft: "10px" }}>Ajouter</button>
      </form>

      <ul>
        {taches.map((tache) => (
          <li key={tache.id}>{tache.titre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
