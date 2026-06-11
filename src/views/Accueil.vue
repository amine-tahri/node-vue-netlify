<template>
  <div>
    <h1>Bienvenue</h1>
    <p>Application Vue + Node.js déployée sur Netlify avec serverless-http.</p>

    <div class="card">
      <h2>Test API</h2>
      <button @click="testerApi">Appeler /api/hello</button>
      <p v-if="reponse" class="reponse">{{ reponse }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const reponse = ref('');

async function testerApi() {
  try {
    const res = await fetch('/api/hello');
    const data = await res.json();
    reponse.value = data.message;
  } catch (err) {
    reponse.value = 'Erreur: ' + err.message;
  }
}
</script>

<style scoped>
h1 { margin-bottom: 8px; }
p { color: #666; margin-bottom: 20px; }
.card { background: white; border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1); }
h2 { margin-bottom: 12px; }
button { background: #4CAF50; color: white; border: none; padding: 10px 20px; border-radius: 6px; cursor: pointer; font-size: 14px; }
button:hover { background: #45a049; }
.reponse { margin-top: 12px; color: #2e7d32; font-weight: bold; }
</style>
