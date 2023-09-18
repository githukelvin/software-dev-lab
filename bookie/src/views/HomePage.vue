<template>
  <main>
    <div class="container">
      <div class="top">
        <h1>Helping you Book an appointment easily</h1>
      </div>
      <div class="bottom">
        <p>
          Booking made easy by bookie book you favourite expert from the comfort
          of your home or office fast and efficient .no more ques and delays
        </p>
        <div class="btns">
          <ActionBtn classname="black" text="Get Started" />
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="34"
              viewBox="0 0 36 34"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M18.0201 33.8115C27.6639 33.8115 35.4817 26.423 35.4817 17.3088C35.4817 8.19458 27.6639 0.806061 18.0201 0.806061C8.37636 0.806061 0.558533 8.19458 0.558533 17.3088C0.558533 26.423 8.37636 33.8115 18.0201 33.8115Z"
                fill="black"
              />
            </svg>
            How to Book
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import ActionBtn from "@/components/ActionBtn.vue";
</script>
<style lang="scss" scoped>
main {
  background-image: url("../assets/images/hero-image.png");

  .top{
    
  }
  .bottom {
    .black {
      background-color: black;
      color: white;
    }
  }
}
</style>
