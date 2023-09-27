<template>
  <header>
    <div class="container nav">
      <div class="logo">
        <router-link to="/"> bookie </router-link>
      </div>
      <div class="links">
        <ul>
          <li><router-link to="/">home</router-link></li>
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/help">Help</router-link></li>
          <li><router-link to="/pricing">Pricing</router-link></li>
        </ul>
      </div>
      <div class="actionbtns">
        <ActionBtn toLink="login" classname="login" text="Login" />
        <ActionBtn toLink="register" classname="register" text="Register" />
      </div>
    </div>
  </header>
</template>

<script setup>
import ActionBtn from "./ActionBtn.vue";
</script>

<style lang="scss" scoped>
.logo {
  a {
    color: #29a791;
    font-family: "Leckerli One", cursive;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    text-transform: capitalize;
    line-height: normal;
  }
}
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0;
  .links {
    display: flex;
    ul {
      display: flex;
      flex-direction: row;
      gap: 2em;
      li {
        a {
          color: #9e4da6;
          font-family: "Lato", sans-serif;
          font-size: 1.1rem;
          font-style: normal;
          font-weight: 700;
          text-transform: capitalize;
          line-height: normal;
        }
      }
    }
  }
  .actionbtns {
    display: flex;
    flex-direction: row;
    gap: 2em;
    .login {
      border: 2px solid #6c69ff;
      background: linear-gradient(
        222deg,
        rgba(37, 109, 119, 0.74) 25%,
        rgba(8, 217, 245, 0.5) 61.97%
      );
    }
    .register {
      border: 2px solid #d1c1ff;
      background: linear-gradient(
        59deg,
        rgba(9, 21, 63, 0) -4.73%,
        #1d3bd9 -4.73%,
        rgba(9, 15, 63, 0.93) 65.16%
      );
    }
  }
}
</style>
