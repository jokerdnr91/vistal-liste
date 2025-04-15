import React, { useState, useEffect } from 'react';
import { ajouterTache, recupererTaches } from './firebaseConfig';

function App() {
  const [tache, setTache] = useState('');
  const [listeTaches, setListeTaches] = useState([]);

  useEffect(() => {
    recupererTaches().then(taches => {
      setListeTaches(taches);
    });
  }, []);

  const handleAjout = async () => {
    if (tache.trim() !== '') {
      await ajouterTache(tache);
      const taches = await recupererTaches();
      setListeTaches(taches);
      setTache('');
    }
  };

  return (
    <div>
      <h1>Ma To-Do Liste</h1>
      <input
        type="text"
        value={tache}
        onChange={(e) => setTache(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={handleAjout}>Ajouter</button>

      <ul>
        {listeTaches.map((t) => (
          <li key={t.id}>{t.titre}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
