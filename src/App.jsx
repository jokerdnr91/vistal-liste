import React, { useEffect, useState } from 'react';
import { ajouterTache, recupererTaches } from './firebaseConfig';

export default function App() {
  const [taches, setTaches] = useState([]);
  const [nouvelleTache, setNouvelleTache] = useState('');

  useEffect(() => {
    chargerTaches();
  }, []);

  const chargerTaches = async () => {
    const toutesLesTaches = await recupererTaches();
    setTaches(toutesLesTaches);
  };

  const handleAjout = async () => {
    if (nouvelleTache.trim() === '') return;
    await ajouterTache(nouvelleTache);
    setNouvelleTache('');
    chargerTaches(); // Recharge les tâches après ajout
  };
import { useState } from "react";
import { ajouterTache } from "./firebaseConfig";

const [nouvelleTache, setNouvelleTache] = useState("");

const handleSubmit = async (e) => {
  e.preventDefault();
  if (nouvelleTache.trim() === "") return;

  await ajouterTache(nouvelleTache);
  setNouvelleTache(""); // vide le champ
};
  return (
    <form onSubmit={handleSubmit}>
  <input
    type="text"
    value={nouvelleTache}
    onChange={(e) => setNouvelleTache(e.target.value)}
    placeholder="Ajouter une tâche"
  />
  <button type="submit">Ajouter</button>
</form>
    <div style={{ padding: '20px' }}>
      <h1>Ma To-Do Liste Luxe</h1>
      <input
        type="text"
        value={nouvelleTache}
        onChange={(e) => setNouvelleTache(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button onClick={handleAjout}>Ajouter</button>
      <ul>
        {taches.map((tache) => (
          <li key={tache.id}>{tache.titre}</li>
        ))}
      </ul>
    </div>
  );
}
