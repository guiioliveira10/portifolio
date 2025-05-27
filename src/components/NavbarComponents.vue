<template>
    <nav class="bg-stone-700 text-white py-4 px-6 fixed top-0 left-0 w-full z-10">
    <div class="flex items-center justify-between">
        
        <h1 class="text-lg font-bold">Guilherme Oliveira</h1>

        <ul class="flex gap-10 justify-end">
            <li>
                <router-link to="/" class="hover:underline">Home</router-link>
            </li>
            <li>
                <router-link to="/sobre" class="hover:underline">Sobre Mim</router-link>
            </li>
            <li>
                <router-link to="/contato" class="hover:underline">Contato</router-link>
            </li>
        </ul>
    </div>
</nav>
</template> 