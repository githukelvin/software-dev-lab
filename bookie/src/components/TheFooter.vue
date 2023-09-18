<template>
  <footer>
    <div class="container footer">
      <div class="logo">
        <router-link to="/"> bookie </router-link>
      </div>
      <div class="learn">
        <h1>learn more</h1>
        <ul>
          <li><router-link to="/">About</router-link></li>
          <li><router-link to="/">Press release</router-link></li>
          <li><router-link to="/">Jobs</router-link></li>
          <li><router-link to="/">privacy policy</router-link></li>
          <li><router-link to="/">contact us</router-link></li>
        </ul>
      </div>
      <div class="tickets">
        <h1>Tickets & Booking</h1>
        <ul>
          <li><router-link to="/">Tickets</router-link></li>
          <li><router-link to="/">Booking</router-link></li>
        </ul>
      </div>
      <div class="contacts">
        <h1>Contacts</h1>
        <ul>
          <li><router-link to="/">Phone: +254 712 345 678</router-link></li>
          <li><router-link to="/">Email: Bookie@gmail.com</router-link></li>
        </ul>
      </div>
      <div class="socials">
        <h1>Social</h1>
        <ul>
          <router-link to="/" target="blank"
            ><i class="fa-brands fa-facebook"></i
          ></router-link>
          <router-link to="/" target="blank"
            ><i class="fa-brands fa-x-twitter"></i
          ></router-link>
          <router-link to="/" target="blank"
            ><i class="fa-brands fa-instagram"></i
          ></router-link>
          <router-link to="/" target="blank"
            ><i class="fa-brands fa-youtube"></i
          ></router-link>
        </ul>
      </div>
    </div>
    <p class="copyright">&copy; Bookie | All Rights Reserved</p>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped></style>
