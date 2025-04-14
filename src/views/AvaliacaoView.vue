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

  <div style="text-align: center;">
    <q-form @submit="onSubmit" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="avaliacao" color="grey-10" label="Avaliação *" hint="O que achas sobre a aplicação" lazy-rules
        :rules="[val => val && val.length > 0 || 'Tens que escrever algo']" />
      <q-input filled v-model="name" label="Melhorias" color="grey-10" hint="O que achas que podia ser melhorado"/>

      <div class="">
        <q-rating v-model="ratingModel" size="2em" :max="4" color="grey-10">
          <template v-slot:tip-1>
            <q-tooltip>Terrivel</q-tooltip>
          </template>
          <template v-slot:tip-2>
            <q-tooltip>Nada mal</q-tooltip>
          </template>
          <template v-slot:tip-3>
            <q-tooltip>Bom</q-tooltip>
          </template>
          <template v-slot:tip-4>
            <q-tooltip>Incrivel!</q-tooltip>
          </template>
        </q-rating>
      </div>

      <div>
        <q-toggle v-model="accept" color="grey-9" class="q-mt-md" label="Eu li e aceito os termos de utilização" />
      </div>

      <div>
        <q-btn label="Enviar" type="submit" color="grey-9 q-mr-md" />
        <q-btn label="Redefinir" type="reset" color="white" flat class="text-grey-10" />
      </div>
    </q-form>
  </div>

</template>
