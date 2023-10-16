<template>
  <div class="content">
    <p class="top">Who Are You ?</p>

    <div class="btns">
      <p>
        You Just want to book an appointment with your favourite proffesional
        <br />.Continue as Client
      </p>
      <ActionBtn toLink="IsAClient" classname="client" text="Client" />
    </div>
    <div class="btns">
      <p>
        Are you a proffesional and you want to automate and make it easy for
        your appointments <br />.Continue as proffesional
      </p>
      <ActionBtn
        toLink="IsAProffesional"
        classname="proffesional"
        text="Proffesional"
      />
      <!-- codec54321 -->
    </div>
  </div>
</template>

<script setup>
import ActionBtn from "@/components/ActionBtn.vue";
</script>

<style lang="scss" scoped>
.top {
  text-transform: capitalize;
  font-weight: 500;
  font-family: "Lato", sans-serif;
  text-align: center;
  padding: 1em;
  font-size: 1.5em;
  color: #fd5200;
}
.proffesional {
  background: #000;
}
.client {
  background: #524eac;
}
.btns {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
p {
  font-family: "Lato", sans-serif;
  font-size: 1.2em;
  line-height: 1.5;
  text-align: center;
  padding-block: 2em;
}
.content {
  margin-bottom: 2em;
}
</style>
