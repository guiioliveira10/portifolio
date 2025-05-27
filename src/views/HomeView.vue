<template>
  <div class="flex h-screen w-screen">
    <div class="flex items-center justify-center">
      <img src="@/assets/foto-minha.png" alt="Minha Foto" class="mt-20 h-full w-auto object-contain" />
    </div>
    
    <div class="ml-24 w-1/2 h-full flex flex-col justify-center">
      <section class="space-y-6 mt-24">
        <h1 class="text-6xl font-extrabold text-white text-center">Bem-vindo ao meu Portifólio!</h1>

        <h2 class="text-3xl font-semibold text-white text-center">Aqui estão alguns projetos feitos neste semestre:</h2>

        <div class="text-lg text-white space-y-6">
          <p class="text-center">
            <strong>Pokédex com JavaScript e API:<br></strong>
            <span> Um projeto que consume dados da PokéAPI gratuita e exibe Pokémons de forma interativa com cards dos pokémons e ao clicar mostrava os dados de cada um deles. Foi um projeto feito com a integração de APIs e JavaScript.</span>
          </p>

          <p class="text-center">
            <strong>Página informativa sobre Tailwind:<br></strong>
            <span> Desenvolvida em grupo, esta landing page apresentava o framework Tailwind CSS, seus principais conceitos e exemplos. Trabalhamos com divisão de tarefas, responsividade e um front-end com o uso do Tailwind.</span>
          </p>

          <p class="text-center">
            <strong>Layout de E-commerce (Front-End):<br></strong>
            <span> Projeto de uma interface de loja virtual, com foco em layout responsivo, organização dos produtos e algo agradável para o usuário. Um projeto importante para aplicar conceitos de design e a usabilidade do usuário.</span>
          </p>
        </div>
      </section>
    </div>
  </div>
</template>