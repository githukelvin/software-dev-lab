<template>
  <div class="auth">
    <!-- Begin::left side -->
    <div class="leftSide">
      <img src="../assets/images/auth.jpg" alt="auth illustratution" />
    </div>
    <!-- End::left side -->
    <!-- Begin::Right Side -->
    <div class="rightSide">
      <p>Welcome Back</p>
      <router-view></router-view>
      <div class="ddd">
        <router-link to="/">Home</router-link>
        <a href="/">Plans</a>
        <a href="/">Terms</a>
        <a href="/">Pricing</a>
      </div>
    </div>
    <!-- End::right side -->
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
.auth {
  display: grid;
  grid-template-columns: 1fr 1fr;
  //height: 100dvh;
  background: #55dde0;
  .leftSide {
    img {
      width: 100%;
      object-fit: contain;
    }
  }
  .rightSide {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5em 5em 0 5em;
    p {
      font-family: "Open Sans", sans-serif;
      font-size: 2rem;
      color: #000;
      font-weight: 600;
      margin-bottom: 1em;
    }
    .ddd {
      display: flex;
      flex-direction: row;
      gap: 1em;
      margin-top: 1em;
      //padding-bottom: 2em;
      a {
        font-family: "Open Sans", sans-serif;
        font-size: 1rem;
        color: #000;
        font-weight: 600;
      }
    }
  }
}
</style>
