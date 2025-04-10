<script setup lang="ts">
import { QBtn, QInput } from 'quasar';
import { ref } from 'vue';

// aqui define-se uma property com nome texto
const props = defineProps<{
    texto: string
}>()

// o valor da property texto passa para uma variavel local (ref) chamada x
const x = ref(props.texto)

</script>

<template>
    <q-input v-model="x" label="Nome a pesquisar" />
    <q-btn color="primary" @click="$emit('onsearch', x)">Pesquisar</q-btn>
</template>

<style scoped></style>