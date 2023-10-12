<template>
  <div>
    <p class="top">Which role or you purpose in this website</p>
    <p>
      You Just want to book an appointment with your favourite proffesional
      <br />.Continue as Client
    </p>
    <p>
      Are you a proffesional and you want to automate and make it easy for your
      appointments <br />continue as proffesional
    </p>
    <div class="btns">
      <ActionBtn toLink="IsAClient" classname="client" text="Client" />
      <ActionBtn
        toLink="IsAProffesional"
        classname="proffesional"
        text="Proffesional"
      />
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
}
.proffesional {
  background: #000;
}
.client {
  background: #524eac;
}
.btns {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  margin-block: 2em;
}
</style>
