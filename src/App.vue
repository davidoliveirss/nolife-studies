<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import {
  QHeader, QToolbar, QLayout, QPage, QPageContainer,
  QSpace, QBtn, QBtnDropdown, QAvatar, QSeparator,
  QCheckbox, QLinearProgress
} from 'quasar';

const router = useRouter();

// Estados reativos
const accountDropdown = ref(false);
const logoutAll = ref(false);
const storageUsage = ref(0.05);

const handleLogout = () => {
  console.log('Logout realizado');
  router.push('/login');
};
</script>

<template>
  <q-layout>
    <q-header elevated style="background-color: #1C1C1C;" class="text-white shadow-2">
      <q-toolbar>
        <q-btn flat dense icon="menu" class="q-mr-sm" aria-label="Menu" />

        <q-space />

        <q-toolbar-title class="text-weight-bold">
          NoLife Studies
        </q-toolbar-title>
        <!-- Links de Navegação -->
        <div class="gt-sm">
          <q-btn flat label="Home" icon="home" @click="router.push('/')" class="q-mx-sm" />
          <q-btn flat label="Pesquisa" icon="search" @click="router.push('/pesquisa')" class="q-mx-sm" />
          <q-btn-dropdown v-model="accountDropdown" icon="manage_accounts" label="Conta" persistent class="q-ml-md">
            <div class="column q-pa-md" style="min-width: 300px">
              <div class="text-h8 q-mb-md" style="text-align: center; width: auto;">davidaguasoliveira@gmail.com</div>
              <q-btn color="primary" label="Gerir Conta NoLife" outline dense v-close-popup @click="handleLogout" />

              <div class="column q-gutter-y-sm" color="#1C1C1C">

                <div class="column justify-between q-mt-md">
                  <div class="row q-mt-md">
                    <div class="text-caption q-mb-xs">
                      Usou {{ (storageUsage * 100).toFixed(0)}}% de 15 GB
                    </div>
                    <q-linear-progress :value="storageUsage" color="#1C1C1C" class="q-mb-md" />
                  </div>
                  <q-btn flat dense label="Regras de Utilização" class="text-caption text-grey-7" />
                  <q-btn flat dense label="Tutoriais" class="text-caption text-grey-7" />
                </div>
              </div>

              <q-separator class="q-my-md"/>

              <div class="row items-center justify-between">
                <q-avatar size="40px">
                  <img src="https://cdn.quasar.dev/img/boy-avatar.png">
                </q-avatar>
                <div>David Oliveira</div>

                <q-btn color="1C1C1C" label="Logout" outline dense v-close-popup @click="handleLogout" />
              </div>
            </div>
          </q-btn-dropdown>
        </div>
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
/* Estilos personalizados opcionais */
.q-checkbox__label div {
  line-height: 1.2;
}
</style>