<script setup lang="ts">
import { ref, watch } from 'vue'

const loading = ref(false)

const clientName = ref('')
const clientDocument = ref('')
const clientPhone = ref('')
const clientEmail = ref('')
const clientActive = ref('default')

watch(
  [clientName, clientDocument, clientPhone, clientEmail, clientActive],
  async (
    [newName, newDocument, newPhone, newEmail, newActive],
    [oldName, oldDocument, oldPhone, oldEmail, oldActive]
  ) => {
    console.log(
      'watch',
      {
        newName,
        newDocument,
        newPhone,
        newEmail,
        newActive
      },
      {
        oldName,
        oldDocument,
        oldPhone,
        oldEmail,
        oldActive
      }
    )
    loading.value = true
  }
)
</script>

<template>
  <div class="form">
    <input placeholder="nome" class="input" v-model="clientName" />
    <input placeholder="documento" class="input" v-model="clientDocument" />
    <input placeholder="telefone" class="input" v-model="clientPhone" />
    <input placeholder="e-mail" class="input" v-model="clientEmail" />
    <select placeholder="ativo" class="input" v-model="clientActive">
      <option selected
      value="default"
      disabled>Ativo</option>
      <option value="true">Sim</option>
      <option value="false">Não</option>
    </select>
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
</style>
