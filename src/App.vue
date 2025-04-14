<script setup lang="ts">
import { ref } from 'vue';
import Sidebar from '@/components/Sidebar.vue'; // ajusta o caminho se necessário

const leftDrawerOpen = ref(false);
</script>

<template>
  <q-layout>
    <!-- Sidebar -->
    <Sidebar v-model:leftDrawerOpen="leftDrawerOpen" />

    <!-- Header -->
    <q-header elevated style="background-color: #1C1C1C;" class="text-white shadow-2">
      <q-toolbar>
        <!-- Botão para abrir/fechar a sidebar -->
        <q-btn flat dense icon="menu" class="q-mr-sm" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />

        <q-space />

        <q-toolbar-title class="text-weight-bold" style="text-align: center;">
          NoLife Studies
        </q-toolbar-title>

        <q-space />

        <!-- Botão de notificações -->
        <q-btn round icon="notifications" />
      </q-toolbar>
    </q-header>

    <!-- Conteúdo da página -->
    <q-page-container>
      <q-page padding>
        <RouterView />
      </q-page>
    </q-page-container>
  </q-layout>
</template>
