<template>
  <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/articles">Articles</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: Arial, sans-serif; background: #f5f5f5; color: #333; }
#app { max-width: 800px; margin: 0 auto; padding: 20px; }
nav { display: flex; gap: 16px; margin-bottom: 24px; padding: 12px 0; border-bottom: 1px solid #ddd; }
nav a { text-decoration: none; color: #4CAF50; font-weight: bold; }
nav a.router-link-active { text-decoration: underline; }
</style>
