<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import { Head, router } from "@inertiajs/vue3";
import { Plus, Trash2, Pencil, Copy, Check } from "lucide-vue-next";
import { ref } from "vue";
import { route } from "ziggy-js";
import { Button } from "@/components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface ApiKey {
    id: number;
    slug: string;
    name: string;
    key: string;
    created_at: string;
}

const props = defineProps<{
    apiKeys: ApiKey[];
}>();

const copiedKeyId = ref<number | null>(null);

function copyToClipboard(key: string, id: number) {
    navigator.clipboard.writeText(key);
    copiedKeyId.value = id;
    setTimeout(() => {
        copiedKeyId.value = null;
    }, 2000);
}

function deleteApiKey(apiKey: ApiKey) {
    if (confirm(`Are you sure you want to delete "${apiKey.name}"?`)) {
        router.delete(route("api-keys.destroy", apiKey.id));
    }
}
</script>

<template>
    <AppLayout>
        <Head title="API Keys" />

        <div class="p-8">
            <div class="flex items-center justify-between mb-6">
                <h1 class="text-3xl font-bold text-white">API Keys</h1>
                <Button
                    @click="router.visit(route('api-keys.create'))"
                    class="bg-green-500 hover:bg-green-600"
                >
                    <Plus class="h-4 w-4 mr-2" />
                    Create API Key
                </Button>
            </div>

            <div v-if="apiKeys.length === 0" class="text-center py-12">
                <p class="text-neutral-400 mb-4">No API keys yet.</p>
                <Button
                    @click="router.visit(route('api-keys.create'))"
                    variant="outline"
                >
                    Create your first API key
                </Button>
            </div>

            <div v-else class="space-y-4">
                <div
                    v-for="apiKey in apiKeys"
                    :key="apiKey.id"
                    class="bg-neutral-800 rounded-lg p-4 flex items-center justify-between"
                >
                    <div class="flex-1">
                        <h3 class="text-white font-semibold mb-1">
                            {{ apiKey.name }}
                        </h3>
                        <p class="text-neutral-400 text-sm mb-2">
                            Created {{ new Date(apiKey.created_at).toLocaleDateString() }}
                        </p>
                        <div class="flex items-center gap-2">
                            <code class="text-xs bg-neutral-900 px-2 py-1 rounded text-neutral-300 font-mono">
                                {{ apiKey.key.substring(0, 20) }}...
                            </code>
                            <Button
                                variant="ghost"
                                size="sm"
                                @click="copyToClipboard(apiKey.key, apiKey.id)"
                                class="h-6 px-2"
                            >
                                <Check
                                    v-if="copiedKeyId === apiKey.id"
                                    class="h-3 w-3 text-green-500"
                                />
                                <Copy v-else class="h-3 w-3" />
                            </Button>
                        </div>
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger as-child>
                            <Button variant="ghost" size="icon">
                                <Pencil class="h-4 w-4" />
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" class="bg-neutral-800 border-neutral-700">
                            <DropdownMenuItem
                                @click="router.visit(route('api-keys.edit', apiKey.id))"
                                class="text-neutral-300 hover:text-white hover:bg-neutral-700/50 cursor-pointer"
                            >
                                <Pencil class="h-4 w-4 mr-2" />
                                Edit
                            </DropdownMenuItem>
                            <DropdownMenuItem
                                @click="deleteApiKey(apiKey)"
                                class="text-red-400 hover:text-red-300 hover:bg-red-500/10 cursor-pointer"
                            >
                                <Trash2 class="h-4 w-4 mr-2" />
                                Delete
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

