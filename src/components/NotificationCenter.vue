<template>
    <div>
        <q-btn round color="grey-10" icon="notifications" @click="toggleNotifications">
            <q-badge v-if="unreadNotifications > 0" color="red" floating>
                {{ unreadNotifications }}
            </q-badge>
        </q-btn>

        <q-menu v-model="showNotifications" anchor="bottom right" self="top right" :offset="[10, 10]">
            <q-card style="width: 350px; max-width: 90vw;">
                <q-card-section class="bg-primary text-white row items-center justify-between">
                    <div class="text-h6">Notificações</div>
                    <q-btn v-if="notifications.length > 0" flat dense round icon="done_all" @click="markAllAsRead" />
                </q-card-section>

                <q-scroll-area style="max-height: 300px;">
                    <q-list separator v-if="notifications.length > 0">
                        <q-item v-for="notification in notifications" :key="notification.id" clickable
                            @click="handleNotificationClick(notification)" :class="{ 'bg-grey-2': !notification.read }">
                            <q-item-section>
                                <q-item-label>{{ notification.title }}</q-item-label>
                                <q-item-label caption lines="2">{{ notification.message }}</q-item-label>
                                <q-item-label caption class="text-grey-6">
                                    {{ formatDate(notification.date) }}
                                </q-item-label>
                            </q-item-section>
                            <q-item-section side top>
                                <q-icon v-if="!notification.read" name="fiber_manual_record" color="primary"
                                    size="xs" />
                            </q-item-section>
                        </q-item>
                    </q-list>

                    <q-card-section v-else class="text-center text-grey-6">
                        Nenhuma notificação nova.
                    </q-card-section>
                </q-scroll-area>
            </q-card>
        </q-menu>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const showNotifications = ref(false);
const notifications = ref([
    {
        id: 1,
        title: "Bem-vindo ao sistema",
        message: "Seu cadastro foi realizado com sucesso!",
        date: new Date(),
        read: false,
        action: "/profile"
    },
    {
        id: 2,
        title: "Atualização disponível",
        message: "Uma nova versão do sistema está disponível para instalação",
        date: new Date(Date.now() - 3600000), // 1 hora atrás
        read: true,
        action: "/updates"
    }
]);

const unreadNotifications = computed(() => {
    return notifications.value.filter(n => !n.read).length;
});

const toggleNotifications = () => {
    showNotifications.value = !showNotifications.value;
};

const markAllAsRead = () => {
    notifications.value.forEach(notification => {
        notification.read = true;
    });
};

const handleNotificationClick = (notification) => {
    notification.read = true;
    // Aqui você pode adicionar navegação se necessário
    // router.push(notification.action);
    showNotifications.value = false;
};

const formatDate = (date) => {
    const now = new Date();
    const diff = now - new Date(date);

    if (diff < 60000) return 'Agora mesmo';
    if (diff < 3600000) return `${Math.floor(diff / 60000)} min atrás`;
    if (diff < 86400000) return `${Math.floor(diff / 3600000)} h atrás`;

    return new Date(date).toLocaleDateString();
};
</script>

<style scoped>
.q-item {
    transition: background-color 0.3s;
}
</style>