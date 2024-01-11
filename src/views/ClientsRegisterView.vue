<script setup lang="ts">
import { ref, watch } from 'vue'
import { clientApi } from '../api/client'

const loading = ref(false)

const clientName = ref('')
const clientDocument = ref('')
const clientPhone = ref('')
const clientEmail = ref('')
const clientActive = ref('default')

watch([clientName, clientDocument, clientPhone, clientEmail, clientActive], () => {})

const createClient = async () => {
  await clientApi.create({
    id: Math.random().toString(36).substr(2, 9),
    name: clientName.value,
    document: clientDocument.value,
    phone: clientPhone.value,
    email: clientEmail.value,
    active: clientActive.value
  })
}

function submit() {
  createClient()
  loading.value = true
}
</script>

<template>
  <div class="form">
    <input placeholder="nome" class="input" v-model="clientName" />
    <input placeholder="documento" class="input" v-model="clientDocument" />
    <input placeholder="telefone" class="input" v-model="clientPhone" />
    <input placeholder="e-mail" class="input" v-model="clientEmail" />
    <select placeholder="ativo" class="input" v-model="clientActive">
      <option selected value="default" disabled>Ativo</option>
      <option value="true">Sim</option>
      <option value="false">Não</option>
    </select>
    <button class="button" :loading="loading" @click="submit">Cadastrar</button>
  </div>
</template>

<style>
.form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  align-items: center;
  margin-top: 8px;
}
.input {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 1.2rem;
  font-family: inherit;
  color: var(--color-text);
  background: var(--color-background);
}

.button {
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid var(--color-border);
  border-radius: 8px;
  font-size: 1.2rem;
  font-family: inherit;
  color: var(--color-text);
  background: var(--color-background);
  cursor: pointer;
}

.button:hover {
  background: #06ad51;
}
</style>
