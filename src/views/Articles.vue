<template>
  <div>
    <h1>Articles</h1>

    <!-- Liste des articles -->
    <div class="card">
      <h2>Liste <button @click="chargerArticles">Rafraîchir</button></h2>
      <p v-if="chargement">Chargement...</p>
      <ul v-else>
        <li v-for="article in articles" :key="article.id">
          <strong>{{ article.titre }}</strong> — {{ article.contenu }}
        </li>
      </ul>
    </div>

    <!-- Formulaire création -->
    <div class="card">
      <h2>Créer un article</h2>
      <input v-model="form.titre" placeholder="Titre" />
      <textarea v-model="form.contenu" placeholder="Contenu"></textarea>
      <button @click="creerArticle">Créer</button>
      <p v-if="message" class="message">{{ message }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const articles = ref([]);
const chargement = ref(false);
const message = ref('');
const form = ref({ titre: '', contenu: '' });

async function chargerArticles() {
  chargement.value = true;
  try {
    const res = await fetch('/api/articles');
    articles.value = await res.json();
  } catch (err) {
    console.error(err);
  } finally {
    chargement.value = false;
  }
}

async function creerArticle() {
  try {
    const res = await fetch('/api/articles', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form.value),
    });
    const data = await res.json();
    if (res.ok) {
      message.value = `Article "${data.titre}" créé avec l'ID ${data.id}`;
      form.value = { titre: '', contenu: '' };
    } else {
      message.value = 'Erreur: ' + data.erreur;
    }
  } catch (err) {
    message.value = 'Erreur réseau';
  }
}

onMounted(chargerArticles);
</script>

<style scoped>
h1 { margin-bottom: 16px; }
.card { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); margin-bottom: 20px; }
h2 { margin-bottom: 12px; display: flex; align-items: center; gap: 12px; }
ul { list-style: none; }
li { padding: 8px 0; border-bottom: 1px solid #eee; }
li:last-child { border-bottom: none; }
input, textarea { display: block; width: 100%; padding: 8px 12px; margin-bottom: 10px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; }
textarea { height: 80px; resize: vertical; }
button { background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-size: 14px; }
button:hover { background: #45a049; }
.message { margin-top: 12px; color: #2e7d32; font-weight: bold; }
</style>
