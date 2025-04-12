<script setup lang="ts">
import { ref } from 'vue';
import { useMeta } from 'quasar';

useMeta({ title: 'NoLife Studies' });

const slide = ref('style');
</script>

<template>
    <title>NoLife Studies</title>

    <div class="q-pa-md">
        <q-markup-table flat bordered> 
            <thead class="bg-grey-10">
                <tr>
                    <th colspan="5">
                        <div class="row no-wrap items-center">
                            <q-img style="width: 70px" :ratio="1" class="rounded-borders"
                                src="https://pactoparaoclima.portodigital.pt/wp-content/uploads/2023/02/AE-Fontes-Pereira-de-Melo-5.jpg" />

                            <div class="text-h4 q-ml-md text-white">Eventos Fontes Pereira de Melo</div>
                        </div>
                    </th>
                </tr>
                <tr>
                    <th class="text-left text-white">Eventos</th>
                    <th class="text-right text-white">Disciplina</th>
                    <th class="text-right text-white">Data</th>
                    <th class="text-right text-white">Carbs (g)</th>
                    <th class="text-right text-white">Protein (g)</th>
                </tr>
            </thead>
            <tbody :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
                <tr>
                    <td class="text-left">Frozen Yogurt</td>
                    <td class="text-right">159</td>
                    <td class="text-right">6</td>
                    <td class="text-right">24</td>
                    <td class="text-right">4</td>
                </tr>
                <tr>
                    <td class="text-left">Ice cream sandwich</td>
                    <td class="text-right">237</td>
                    <td class="text-right">9</td>
                    <td class="text-right">37</td>
                    <td class="text-right">4.3</td>
                </tr>
                <tr>
                    <td class="text-left">Eclair</td>
                    <td class="text-right">262</td>
                    <td class="text-right">16</td>
                    <td class="text-right">23</td>
                    <td class="text-right">6</td>
                </tr>
                <tr>
                    <td class="text-left">Cupcake</td>
                    <td class="text-right">305</td>
                    <td class="text-right">3.7</td>
                    <td class="text-right">67</td>
                    <td class="text-right">4.3</td>
                </tr>
                <tr>
                    <td class="text-left">Gingerbread</td>
                    <td class="text-right">356</td>
                    <td class="text-right">16</td>
                    <td class="text-right">49</td>
                    <td class="text-right">3.9</td>
                </tr>
            </tbody>
        </q-markup-table>
    </div>

</template>
