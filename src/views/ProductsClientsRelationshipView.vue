<script setup lang="ts"></script>

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
      <input placeholder="nome" class="input" />
      <input placeholder="documento" class="input" />
      <input placeholder="telefone" class="input" />
      <input placeholder="e-mail" class="input" />
      <select placeholder="ativo" class="input">
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
