<template>
  <transition name="fade">
    <div class="vue-modal" v-show="open">
      <transition name="drop-in">
        <div class="vue-modal-inner">
          <div class="vue-modal-content">
            <slot />
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam,
            cupiditate. Laudantium illum accusantium commodi autem incidunt
            atque, hic nobis tempore neque quae voluptas aperiam, maxime quo
            distinctio quaerat cupiditate. Neque, odit repellendus aperiam
            magnam quidem rem placeat dolores aliquam vitae reiciendis voluptas
            qui fugiat iusto et illo excepturi voluptatibus voluptatem facere
            dolorum esse perferendis, reprehenderit autem? Eos id voluptatem
            velit iusto dignissimos neque aliquid similique in laboriosam
            molestias atque saepe aspernatur qui esse ipsam doloremque porro
            magni fugiat, culpa suscipit ratione amet. Nihil cum vel nemo
            consequuntur, dolore vero itaque soluta voluptates atque, dolor ipsa
            excepturi quia fuga blanditiis tempora?
            <div>
              <button></button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>