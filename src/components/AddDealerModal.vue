<template>
  <transition name="fade">
    <div class="vue-modal" v-show="open">
      <transition name="drop-in">
        <div class="vue-modal-inner">
          <div class="vue-modal-content">
            <slot />
            <label class="form-label" for="zipCode">Zip Code</label
            ><input
              id="zipCode"
              class="form-control"
              type="number"
              v-model="zipCode"
            />
            <br />

            <label class="form-label" for="adress">Adress</label>
            <input
              id="adress"
              class="form-control"
              type="text"
              v-model="adress"
            />
            <br />

            <div class="buttons">
              <button
                class="btn btn-outline-danger"
                type="button"
                @click="close"
              >
                Cancel
              </button>
              <button
                class="btn btn-outline-success"
                type="submit"
                @click="addDealer"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
import DealerService from '@/services/DealerService.js'
import { onMounted, onUnmounted } from 'vue'
export default {
  props: {
    open: {
      tye: Boolean,
      required: true,
    },
  },

  data() {
    return {
      zipCode: '',
      adress: '',
    }
  },

  methods: {
    addDealer() {
      const dealer = {
        zipCode: this.zipCode,
        adress: this.adress,
      }
      DealerService.createDealer(dealer)

        .then((response) => {
          this.dealers = response.data
          this.$router.go()
        })
        .catch((error) => {
          console.log(error)
        })
    },
  },

  setup(_, { emit }) {
    const close = () => {
      emit('close')
    }

    const handleKeyup = (event) => {
      if (event.keyCode == 27) {
        close()
      }
    }

    onMounted(() => document.addEventListener('keyup', handleKeyup))
    onUnmounted(() => document.removeEventListener('keyup', handleKeyup))

    return { close }
  },
}
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

button {
  margin-right: 15px;
}

/* .buttons {
  float: right;
  display: flex;
} */
</style>