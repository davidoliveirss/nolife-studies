<script setup lang="ts">
import { ref } from "vue";
import { useQuasar } from "quasar";

const $q = useQuasar();

const avaliacao = ref(null);
const accept = ref(false);
const ratingModel = ref(2);

const onSubmit = () => {
    if (accept.value !== true) {
        $q.notify({
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message: "Você precisa aceitar os termos e condições primeiro",
        });
    } else {
        $q.notify({
            color: "green-4",
            textColor: "white",
            icon: "cloud_done",
            message: "Formulário enviado com sucesso!",
        });
    }
};

const onReset = () => {
    avaliacao.value = null;
    accept.value = false;
};
</script>

<template>
    <title>NoLife Studies</title>

    <div class="q-pa-md">
        <q-card flat bordered class="q-mx-xl">
            <q-card-section class="bg-grey-10 text-center">
                <div class="text-h4 text-white q-mb-sm">NoLife Studies</div>
                <div class="text-h5 text-white">Termos e condições de utilização</div>
                <div class="text-subtitle1 text-grey-2 q-mt-sm">Ano letivo 2024/25</div>
            </q-card-section>

            <q-separator />

            <q-card-section>

                <!-- Container dos termos com scroll -->
                <div class="terms-container q-pa-md q-mb-md">
                    <div class="text-body1">
                        <p class="text-weight-bold">1. Aceitação dos Termos</p>
                        <p class="q-mb-md">
                            Ao utilizar nosso sistema de resumos, você concorda com estes
                            termos e condições. Se não concordar, por favor, não utilize o
                            sistema.
                        </p>

                        <p class="text-weight-bold">2. Uso Adequado</p>
                        <p class="q-mb-md">
                            Você concorda em usar este sistema apenas para fins educacionais e
                            de avaliação legítima. É proibido:
                        </p>
                        <ul class="q-mb-md">
                            <li>blablabla</li>
                            <li>blebleble</li>
                        </ul>

                        <p class="text-weight-bold">3. Privacidade e Dados</p>
                        <p class="q-mb-md">
                            Respeitamos sua privacidade. Os dados coletados serão usados
                            apenas para fins acadêmicos e de melhoria do sistema, em
                            conformidade com a RGPD.
                        </p>

                        <p class="text-weight-bold">4. Responsabilidades</p>
                        <p class="q-mb-md">
                            A NoLife Studies não se responsabiliza por avaliações ou conteúdos
                            gerados por usuários, mas reserva-se o direito de moderar e
                            remover conteúdo inadequado.
                        </p>

                        <p class="text-weight-bold">5. Alterações nos Termos</p>
                        <p>
                            Estes termos podem ser atualizados periodicamente. O uso
                            continuado do sistema após alterações constitui aceitação dos
                            novos termos.
                        </p>
                    </div>
                </div>
            </q-card-section>
        </q-card>
    </div>
</template>