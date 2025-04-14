<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useMeta } from 'quasar';

const $q = useQuasar();

const avaliacao = ref(null);
const accept = ref(false);
const ratingModel = ref(2); // Movido para cá e declarado corretamente

const onSubmit = () => {
    if (accept.value !== true) {
        $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'You need to accept the license and terms first'
        });
    }
    else {
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
        });
    }
};

const onReset = () => {
    avaliacao.value = null;
    age.value = null;
    accept.value = false;
};
</script>

<template>

    <title>NoLife Studies</title>

    <div class="q-pa-md">
        <q-card class="my-card" flat bordered>
            <q-card-section class="bg-grey-10 text-center">
                <div class="text-h5 text-white">Sistema de avaliações</div>
                <div class="text-subtitle1 text-grey-4 q-mt-sm">Ano letivo 2024/25</div>
            </q-card-section>
            <div>
                <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
                    <q-input filled v-model="avaliacao" color="grey-10" class="q-mt-xl" label="Avaliação *"
                        hint="O que achas sobre a aplicação" lazy-rules
                        :rules="[val => val && val.length > 0 || 'Tens que escrever algo']" />
                    <q-input filled v-model="name" label="Melhorias" color="grey-10"
                        hint="O que achas que podia ser melhorado" />

                    <div class="q-pb-md q-pr-sm" style="text-align: right;">

                        <q-btn label="Enviar" type="submit" color="grey-9 q-mr-sm">
                            <q-tooltip>
                                Esta alteração é defenitiva!
                            </q-tooltip>
                        </q-btn>
                        <q-btn label="Redefinir" type="reset" color="white" flat class="text-grey-10" />

                    </div>
                </q-form>
            </div>
        </q-card>
    </div>

</template>
