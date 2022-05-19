<template>
  <div v-if="dealer" class="card-body p-1-9 p-sm-2-3 p-md-6 p-lg-7 ml-3">
    <div class="row align-items-center">
      <div class="col-lg-6 mb-4 mb-lg-0">
        <img
          src="https://arfitect.com/Assets/images/arfitect/Arfitect-white-background-transparan.webp"
          alt="Arfitect Cargo"
        />
      </div>
      <div class="col-lg-6 px-xl-10">
        <div
          class="
            bg-secondary
            d-lg-inline-block
            py-1-9
            px-1-9 px-sm-6
            mb-1-9
            rounded
          "
        >
          <h3 class="h2 text-white mb-0">{{ dealer.adress }}</h3>
        </div>
        <ul class="list-unstyled mb-1-9">
          <li class="mb-2 mb-xl-3 display-28">
            <span class="display-26 text-secondary me-2 font-weight-600"
              >Id:</span
            >
            {{ dealer.id }}
          </li>
          <li class="mb-2 mb-xl-3 display-28">
            <span class="display-26 text-secondary me-2 font-weight-600"
              >Zip Code:</span
            >
            {{ dealer.zipCode }}
          </li>
          <li class="mb-2 mb-xl-3 display-28">
            <span class="display-26 text-secondary me-2 font-weight-600"
              >Email:</span
            >
            edith@mail.com
          </li>
          <li class="mb-2 mb-xl-3 display-28">
            <span class="display-26 text-secondary me-2 font-weight-600"
              >Website:</span
            >
            www.example.com
          </li>
          <li class="display-28">
            <span class="display-26 text-secondary me-2 font-weight-600"
              >Phone:</span
            >
            507 - 541 - 4567
          </li>
        </ul>
      </div>
    </div>
  </div>

  <!-- <div v-if="dealer">
    <h1>{{ dealer.adress }}</h1>
    <p>{{ dealer.id }}</p>
    <p>{{ dealer.zipCode }}</p>
    <p>{{ dealer.employees }}</p>
  </div> -->
</template>

<script>
import DealerService from '@/services/DealerService.js'

export default {
  props: ['id'],
  data() {
    return {
      dealer: null,
    }
  },
  created() {
    console.log(this)
    DealerService.getDealer(this.id)
      .then((response) => {
        this.dealer = response.data
        console.log(response.data + 'fdsfdsf')
      })
      .catch((error) => {
        console.log(error)
      })
  },
}
</script>

<style>
body {
  margin-top: 20px;
}
.card-style1 {
  box-shadow: 0px 0px 10px 0px rgb(89 75 128 / 9%);
}
.border-0 {
  border: 0 !important;
}
.card {
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}

section {
  padding: 120px 0;
  overflow: hidden;
  background: #fff;
}
.mb-2-3,
.my-2-3 {
  margin-bottom: 2.3rem;
}

.section-title {
  font-weight: 600;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 10px;
  position: relative;
  display: inline-block;
}
.text-primary {
  color: #ceaa4d !important;
}
.text-secondary {
  color: #15395a !important;
}
.font-weight-600 {
  font-weight: 600;
}
.display-26 {
  font-size: 1.3rem;
}

@media screen and (min-width: 992px) {
  .p-lg-7 {
    padding: 4rem;
  }
}
@media screen and (min-width: 768px) {
  .p-md-6 {
    padding: 3.5rem;
  }
}
@media screen and (min-width: 576px) {
  .p-sm-2-3 {
    padding: 2.3rem;
  }
}
.p-1-9 {
  padding: 1.9rem;
}

.bg-secondary {
  background: #15395a !important;
}
@media screen and (min-width: 576px) {
  .pe-sm-6,
  .px-sm-6 {
    padding-right: 3.5rem;
  }
}
@media screen and (min-width: 576px) {
  .ps-sm-6,
  .px-sm-6 {
    padding-left: 3.5rem;
  }
}
.pe-1-9,
.px-1-9 {
  padding-right: 1.9rem;
}
.ps-1-9,
.px-1-9 {
  padding-left: 1.9rem;
}
.pb-1-9,
.py-1-9 {
  padding-bottom: 1.9rem;
}
.pt-1-9,
.py-1-9 {
  padding-top: 1.9rem;
}
.mb-1-9,
.my-1-9 {
  margin-bottom: 1.9rem;
}
@media (min-width: 992px) {
  .d-lg-inline-block {
    display: inline-block !important;
  }
}
.rounded {
  border-radius: 0.25rem !important;
}
</style>