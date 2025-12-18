<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import { Head, router } from "@inertiajs/vue3";
import { Copy, Check, ArrowLeft } from "lucide-vue-next";
import { ref } from "vue";
import { route } from "ziggy-js";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

interface ApiKey {
    id: number;
    name: string;
    key: string;
    created_at: string;
}

const props = defineProps<{
    apiKey: ApiKey;
}>();

const copied = ref(false);

function copyToClipboard() {
    navigator.clipboard.writeText(props.apiKey.key);
    copied.value = true;
    setTimeout(() => {
        copied.value = false;
    }, 2000);
}
</script>

<template>
    <AppLayout>
        <Head title="API Key Details" />

        <div class="p-8 max-w-2xl mx-auto">
            <Button
                variant="ghost"
                @click="router.visit(route('api-keys.index'))"
                class="mb-6"
            >
                <ArrowLeft class="h-4 w-4 mr-2" />
                Back
            </Button>

            <h1 class="text-3xl font-bold text-white mb-6">
                {{ apiKey.name }}
            </h1>

            <div class="bg-neutral-800 rounded-lg p-6 space-y-4">
                <div>
                    <Label class="text-neutral-400 text-sm mb-2 block">
                        Created
                    </Label>
                    <p class="text-white">
                        {{ new Date(apiKey.created_at).toLocaleString() }}
                    </p>
                </div>

                <div>
                    <Label class="text-neutral-400 text-sm mb-2 block">
                        API Key
                    </Label>
                    <div class="flex items-center gap-2">
                        <code
                            class="flex-1 bg-neutral-900 px-4 py-2 rounded text-neutral-300 font-mono text-sm break-all"
                        >
                            {{ apiKey.key }}
                        </code>
                        <Button
                            variant="outline"
                            @click="copyToClipboard"
                            class="shrink-0"
                        >
                            <Check
                                v-if="copied"
                                class="h-4 w-4 text-green-500"
                            />
                            <Copy v-else class="h-4 w-4" />
                        </Button>
                    </div>
                    <p class="text-xs text-neutral-400 mt-2">
                        Keep this key secret. You won't be able to see it again.
                    </p>
                </div>
            </div>
        </div>
    </AppLayout>
</template>

