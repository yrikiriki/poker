
<template>
  <main style="padding:24px">
    <h1>Backend Greeting</h1>
    <select v-model="lang">
      <option value="ja">ja</option>
      <option value="en">en</option>
    </select>
    <button @click="callApi" style="margin-left:8px">GET /api/hello</button>
    <p style="margin-top:16px"><strong>Result:</strong> {{ message }}</p>
    <p v-if="error" style="color:#c00">Error: {{ error }}</p>
  </main>
</template>
<script setup>
import { ref } from 'vue'
const lang = ref('ja')
const message = ref('')
const error = ref('')
async function callApi () {
  error.value = ''; message.value = ''
  try {
    // ← ここがあなたの fetch
    const res = await fetch(`/api/hello?lang=${encodeURIComponent(lang.value)}`, {
      headers: { 'Accept': 'text/plain' }
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    message.value = await res.text()
  } catch (e) {
    error.value = e.message || String(e)
  }
}
</script>