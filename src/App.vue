<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  QHeader, QToolbar, QLayout, QPage, QPageContainer,
  QSpace, QBtn, QBtnDropdown, QAvatar, QSeparator,
  QCheckbox, QLinearProgress, QDrawer, QList, QItem, QItemSection, QItemLabel
} from 'quasar';

const router = useRouter();

// Estados reativos
const accountDropdown = ref(false);
const logoutAll = ref(false);
const storageUsage = ref(0.05);
const leftDrawerOpen = ref(false); // Controle da sidebar

const handleLogout = () => {
  console.log('Logout realizado');
  router.push('/login');
};
</script>

<template>
  <q-layout>
    <q-drawer v-model="leftDrawerOpen" side="left" bordered :width="280" class="bg-dark text-white">
      <q-list padding>
        <q-item class="q-mb-md">
          <q-item-section>
            <q-item-label class="text-h5 text-weight-bold">NoLife Studies</q-item-label>
          </q-item-section>
        </q-item>

        <!-- items do Menu -->
        <q-item clickable v-ripple @click="router.push('/')">
          <q-item-section avatar>
            <q-icon name="home" color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Dashboard</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="router.push('/resumos')">
          <q-item-section avatar>
            <q-icon name="school" color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Resumos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="router.push('/resumos')">
          <q-item-section avatar>
            <q-icon name="manage_search" color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Gerir resumos</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="router.push('/avaliar')">
          <q-item-section avatar>
            <q-icon name="rate_review" color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Avaliar</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-ripple @click="router.push('/user')">
          <q-item-section avatar>
            <q-icon name="logout" color="white" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Logout</q-item-label>
          </q-item-section>
        </q-item>
        <!-- Adicione outros itens conforme necessário -->
      </q-list>
    </q-drawer>

    <q-header elevated style="background-color: #1C1C1C;" class="text-white shadow-2">
      <q-toolbar>
        <!-- Botão para toggle da sidebar -->
        <q-btn flat dense icon="menu" class="q-mr-sm" aria-label="Menu" @click="leftDrawerOpen = !leftDrawerOpen" />

        <q-space/>

        <q-toolbar-title class="text-weight-bold" style="text-align: center;">
          NoLife Studies
        </q-toolbar-title>

        <q-space/>

        <q-btn round icon="notifications">
        </q-btn>

        <!-- ... restante do código do header ... -->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page padding>
        <RouterView />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style scoped>
/* Estilos personalizados */
.q-drawer {
  background-color: #1C1C1C;
  border-right: 1px solid rgba(255, 255, 255, 0.1) !important;
}

.q-item:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-radius: 8px;
}

.q-item__label {
  color: white !important;
}
</style>