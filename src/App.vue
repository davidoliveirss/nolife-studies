<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import Sidebar from '@/components/SideBar.vue';
import NotificationCenter from '@/components/NotificationCenter.vue';


const router = useRouter();
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

        <q-toolbar-title class="text-weight-bold q-ml-xl q-pl-xl" style="text-align: center;">
          NoLife Studies
          <q-badge outline align="top" color="white" label="v1.0.0" />
        </q-toolbar-title>

        <q-space />

        <notification-center />
        <q-btn round color="grey-10" class="q-ml-sm" icon="account_circle" @click="router.push('/conta')"/>
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
