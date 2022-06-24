<template>
  <transition name="fade">
    <div class="vue-modal" v-show="open">
      <transition name="drop-in">
        <div class="vue-modal-inner">
          <div class="vue-modal-content">
            <slot />
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est culpa
            voluptate architecto laudantium commodi soluta consequatur aliquam
            sapiente sunt debitis ipsum totam esse libero, blanditiis
            voluptatem! Dolorum quod voluptatum, exercitationem qui eius hic
            eligendi ipsa sapiente cupiditate sequi recusandae quos explicabo
            architecto. Provident, ducimus! Soluta veniam minus suscipit
            eligendi autem. Nemo qui maxime ipsa, alias et accusantium natus ea
            esse laboriosam omnis perferendis! Illo doloremque, ut cum magni
            sapiente commodi libero in nisi temporibus accusantium, alias
            necessitatibus? Minima ipsam quisquam, vitae illum asperiores
            delectus nam dicta voluptates repellendus quod nemo nesciunt dolore
            impedit ullam porro dignissimos id atque labore magnam?
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style scoped>
*,
::before,
::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.vue-modal {
  position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.vue-modal-inner {
  max-width: 500px;
  margin: 2rem auto;
}

.vue-modal-content {
  position: relative;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.3);
  background-clip: padding-box;
  border-radius: 0.3rem;
  padding: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.drop-in-enter-active,
.drop-in-leave-active {
  transition: all 0.3s ease-out;
}

.drop-in-enter-from,
.drop-in-leave-to {
  opacity: 0;
  transform: translateY(-50px);
}
</style>