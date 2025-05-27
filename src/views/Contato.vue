<template>
  <section class="h-screen flex flex-col justify-center items-center bg-transparent">
    <h1 class="text-4xl font-bold text-white mb-4">Contate-me por estes meios!</h1>
    <p class="text-lg text-white mb-6">Para tirar qualquer dúvida, insira seus dados aqui.</p>

    <form class="w-full max-w-md space-y-4">
      <input type="text" placeholder="Seu nome" class="w-full px-4 py-2 border rounded" />
      <input type="email" placeholder="Seu e-mail" class="w-full px-4 py-2 border rounded" />
      <textarea placeholder="Sua mensagem" rows="4" class="w-full px-4 py-2 border rounded"></textarea>
      <button type="submit" class="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Enviar</button>
    </form>

    <div class="flex space-x-6 mt-20">
        <a href="https://www.linkedin.com/in/guilherme-oliveira-053439246/" target="_blank">
            <img src="@/assets/linkedin.png" alt="LinkedIn" class="w-14 h-14 object-contain hover:opacity-80" />
        </a>
        <a href="https://github.com/guiioliveira10" target="_blank">
            <img src="@/assets/github.png" alt="GitHub" class="w-14 h-14 object-contain hover:opacity-80" />
        </a>
        <a href="https://www.instagram.com/guip.oliveira/" target="_blank">
            <img src="@/assets/insta.png" alt="Instagram" class="w-14 h-14 object-contain hover:opacity-80"/>
        </a>
    </div>   
  </section>
</template>