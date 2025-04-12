<script setup lang="ts">
import { ref } from 'vue';
import { useMeta } from 'quasar';
import {
    QCard,
    QCardSection,
    QTabs,
    QTab,
    QTabPanels,
    QTabPanel,
    QSeparator
} from 'quasar';

const tab = ref('login'); // Controle das tabs
</script>

<template>
    <div class="q-pa-md">
        <q-card class="my-card" flat bordered>
            <q-card-section>
                <div class="text-h5 text-center">NoLife Studies</div>
                <div class="text-subtitle2 text-center">by NoLife Dev Team</div>
            </q-card-section>

            <q-tabs v-model="tab" class="text-teal">
                <q-tab label="Login" name="login" />
                <q-tab label="Register" name="register" />
            </q-tabs>

            <q-separator />

            <q-tab-panels v-model="tab" animated>
                <q-tab-panel name="login" style="color: #1C1C1C;">
                    <q-input filled v-model="name" label="Username"
                        lazy-rules:rules="[val => val && val.length > 0 || 'Please type something']" />
                    <q-btn push color="primary" label="Login" />
                </q-tab-panel>

                <q-tab-panel name="register" style="color: #1C1C1C;">
                    <q-input filled v-model="name" label="Username"
                        lazy-rules:rules="[val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="name" label="Nome"
                        lazy-rules:rules="[val => val && val.length > 0 || 'Please type something']" />
                    <q-input filled v-model="name" label="Sobrenome"
                        lazy-rules:rules="[val => val && val.length > 0 || 'Please type something']" />
                    <q-checkbox left-label v-model="left2" label="Li e aceito os termos e regras de utilização" checked-icon="check" unchecked-icon="cancel" />
                    <q-btn push color="primary" label="Register" />
                </q-tab-panel>
            </q-tab-panels>
        </q-card>
    </div>
</template>

<style scoped>
.my-card {
    width: 100%;
    max-width: 250px;
}

/* Estilo opcional para melhorar a legibilidade */
.q-tab-panel {
    padding: 16px;
    color: white;
}
</style>