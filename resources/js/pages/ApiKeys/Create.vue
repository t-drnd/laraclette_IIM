<script setup lang="ts">
import AppLayout from "@/layouts/AppLayout.vue";
import InputError from "@/components/InputError.vue";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Spinner } from "@/components/ui/spinner";
import { useForm } from "@inertiajs/vue3";
import { Head, router } from "@inertiajs/vue3";
import { route } from "ziggy-js";

const form = useForm({
    name: "",
    email: "",
});

function submit() {
    console.log('Form submitted', form.data());
    
    if (!form.name || !form.email) {
        console.error('Form validation failed: name and email are required');
        return;
    }
    
    form.post(route('api-keys.store'), {
        preserveScroll: true,
        onStart: () => {
            console.log('Request started');
        },
        onSuccess: (page) => {
            console.log('API key created successfully', page);
        },
        onError: (errors) => {
            console.error('Validation errors:', errors);
        },
        onFinish: () => {
            console.log('Request finished');
        },
    });
}
</script>

<template>
    <AppLayout>
        <Head title="Create API Key" />

        <div class="p-8 max-w-2xl mx-auto">
            <h1 class="text-3xl font-bold text-white mb-6">Create API Key</h1>

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
                        placeholder="e.g., My Mobile App"
                    />
                    <InputError :message="form.errors.name" />
                </div>

                <div>
                    <Label for="email" class="text-white">Email</Label>
                    <Input
                        id="email"
                        v-model="form.email"
                        type="email"
                        class="mt-1 bg-neutral-900 border-neutral-700 text-white"
                        placeholder="your@email.com"
                    />
                    <InputError :message="form.errors.email" />
                    <p class="text-xs text-neutral-400 mt-1">
                        An account will be created automatically if it doesn't exist.
                    </p>
                </div>

                <div class="flex gap-4">
                    <Button
                        type="submit"
                        :disabled="form.processing || !form.name || !form.email"
                        class="bg-green-500 hover:bg-green-600 disabled:opacity-50 disabled:cursor-not-allowed"
                        @click="(e) => { console.log('Button clicked', form.data()); }"
                    >
                        <Spinner v-if="form.processing" class="mr-2" />
                        Create API Key
                    </Button>
                    <Button
                        type="button"
                        variant="outline"
                        @click="router.visit(route('api-keys.index'))"
                    >
                        Cancel
                    </Button>
                </div>
                
                <div v-if="Object.keys(form.errors).length > 0" class="mt-4 p-4 bg-red-900/20 border border-red-500/50 rounded">
                    <p class="text-red-400 text-sm font-semibold mb-2">Errors:</p>
                    <ul class="list-disc list-inside text-red-300 text-sm">
                        <li v-for="(error, field) in form.errors" :key="field">
                            {{ field }}: {{ error }}
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    </AppLayout>
</template>

