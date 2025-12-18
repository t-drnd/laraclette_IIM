<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import InputError from "@/components/InputError.vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useForm } from "@inertiajs/vue3";
import { Head } from "@inertiajs/vue3";
import { route } from "ziggy-js";

interface ApiKey {
    id: number;
    name: string;
    slug: string;
}

const props = defineProps<{
    apiKey: ApiKey;
}>();

const form = useForm({
    name: props.apiKey.name,
});

function submit() {
    form.put(route("api-keys.update", props.apiKey.id));
}
</script>

<template>
    <AppLayout>
        <Head title="Edit API Key" />

        <div class="p-8 max-w-2xl mx-auto">
            <h1 class="text-3xl font-bold text-white mb-6">Edit API Key</h1>

            <form
                @submit.prevent="submit"
                class="bg-neutral-800 rounded-lg p-6 space-y-4"
            >
                <div>
                    <Label for="name" class="text-white">Name</Label>
                    <Input
                        id="name"
                        v-model="form.name"
                        type="text"
                        class="mt-1 bg-neutral-900 border-neutral-700 text-white"
                    />
                    <InputError :message="form.errors.name" />
                </div>

                <div class="flex gap-4">
                    <Button
                        type="submit"
                        :disabled="form.processing"
                        class="bg-green-500 hover:bg-green-600"
                    >
                        <Spinner v-if="form.processing" class="mr-2" />
                        Update
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        @click="$inertia.visit(route('api-keys.index'))"
                    >
                        Cancel
                    </Button>
                </div>
            </form>
        </div>
    </AppLayout>
</template>

