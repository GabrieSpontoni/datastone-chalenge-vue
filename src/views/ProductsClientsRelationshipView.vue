<script setup lang="ts">
import { onMounted, ref, reactive } from 'vue'
import { clientApi } from '@/api/client'

type Client = {
  id: string
  name: string
  document: string
  phone: string
  email: string
  active: boolean
}

const clients = ref<Client[]>([])
const selectedClientId = ref<string | null>(null)
const selectedClient = reactive<Client>({
  id: '',
  name: '',
  document: '',
  phone: '',
  email: '',
  active: false
})

onMounted(async () => {
  const response = (await clientApi.get()) as { data: { clients: Client[] } }
  clients.value = response.data.clients
})

const handleSelectClient = () => {
  const selectedClientData = clients.value.find(client => client.id === selectedClientId.value)
  if (selectedClientData) {
    selectedClient.id = selectedClientData.id
    selectedClient.name = selectedClientData.name
    selectedClient.document = selectedClientData.document
    selectedClient.phone = selectedClientData.phone
    selectedClient.email = selectedClientData.email
    selectedClient.active = selectedClientData.active
  }
}
</script>

<template>
  <div>
    <div class="form">
      <h1>Produtos</h1>
      <input placeholder="nome" class="input" />
      <select placeholder="ativo" class="input">
        <option selected disabled>Ativo</option>
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </select>
    </div>
    <div class="form">
      <h1>Clientes</h1>
      <select v-model="selectedClientId" class="input" @change="handleSelectClient">
        <option :value="null" disabled>Selecione um cliente</option>
        <option v-for="client in clients" :key="client.id" :value="client.id">
          {{ client?.name }}
        </option>
      </select>
      <input placeholder="documento" class="input" v-model="selectedClient.document" />
      <input placeholder="telefone" class="input" v-model="selectedClient.phone" />
      <input placeholder="e-mail" class="input" v-model="selectedClient.email" />
      <select placeholder="ativo" class="input" v-model="selectedClient.active">
        <option selected disabled>Ativo</option>
        <option value="true">Sim</option>
        <option value="false">Não</option>
      </select>
    </div>
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
