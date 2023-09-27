<template>
  <main>
    <section class="sect1">
      <div class="container topDiv">
        <div class="left">
          <div class="top">
            <h1>Helping you Book an appointment easily</h1>
          </div>
          <div class="bottom">
            <p>
              Booking made easy by bookie book you favourite expert from the
              comfort of your home or office fast and efficient .no more ques
              and delays
            </p>
            <div class="btns">
              <ActionBtn
                toLink="getStarted"
                classname="black"
                text="Get Started"
              />
              <button class="btn-color">
                <i class="fa-solid fa-circle-play"></i>
                How to Book
              </button>
            </div>
          </div>
        </div>
        <div class="right">
          <video
            id="background-video"
            autoplay
            loop
            muted
            poster="../assets/images/animation_lmp30eb8.mp4"
          >
            <source
              src="../assets/images/animation_lmp30eb8.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
    </section>
    <!-- sect 2 -->
    <section class="sect2">
      <div class="container round">
        <div class="rounded-div">
          <h2>About company</h2>
        </div>
        <div class="left-div">
          <p>
            Bookie is a user-friendly platform that redefines appointment
            booking by connecting users with their favorite experts
            effortlessly. Offering convenience, speed, and efficiency, it
            eliminates the need for queues and delays. Users can easily browse
            experts in various fields, book from home or the office, and receive
            expert advice. The platform notifies users of upcoming appointments
            and provides a review system for sharing feedback. Secure payments,
            customization, and a mobile app enhance the user experience.
            Ultimately, Bookie aims to streamline appointment booking,
            generating more interest and satisfaction among users.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import ActionBtn from "@/components/ActionBtn.vue";
</script>
<style lang="scss" scoped>
main {
  background: url("../assets/images/hero-image.png"),
    lightgray 50% / cover no-repeat;
  padding-bottom: 5em;
  background-repeat: no-repeat;
  background-size: cover;
  .topDiv {
    display: grid;
    grid-template-columns: 1fr 1fr;

    .right {
      width: 100%;
      height: 100%;
      background: url("../assets/images/animation_lmp30eb8.mp4");
      background-size: cover;
    }
  }
  .top {
    padding-block: 2em;
    h1 {
      font-family: "Open Sans", sans-serif;
      font-size: 4rem;
      line-height: 4.5rem;
      width: 80%;
      font-weight: 400;
      color: #111;
    }
  }
  .bottom {
    display: flex;
    flex-direction: column;
    padding-bottom: 10em;
    p {
      line-height: 1.5rem;
      font-size: 1rem;
      font-family: "Lato", sans-serif;
      color: #111;
      font-weight: 400;
      width: 55%;
    }
    .btns {
      display: flex;
      flex-direction: row;
      gap: 2em;
      margin-top: 5em;
      .black {
        background-color: black;
        color: white;
      }
      .btn-color {
        border-radius: 1.75rem;
        background: rgba(17, 17, 17, 0.08);
        width: 14.52863rem;
        height: 2.83644rem;
        display: flex;
        align-items: center;
        flex-direction: row;
        color: #111;
        font-family: "Lato", sans-serif;
        gap: 2em;
        padding: 0.5em;
        font-size: 1rem;

        svg {
          color: #000;
        }
      }
    }
  }
  .round {
    display: flex;
    flex-direction: row;
    width: 79.90631rem;
    margin-inline: auto;
    margin-bottom: 2em;
    .rounded-div {
      border-radius: 31.25rem 0rem 0rem 31.25rem;
      background: #fff;
      width: 28.875rem;
      height: 21.875rem;
      display: grid;
      place-items: center;
      h2 {
        color: #0048ff;
        font-size: 2rem;
        font-weight: 700;
        font-family: "Lato", sans-serif;
        width: 50%;
      }
    }
    .left-div {
      background: #c4d4ff;
      display: grid;
      width: 100%;
      place-items: center;
      p {
        color: #222;
        font-size: 1.375rem;
        font-weight: 400;
        font-family: "Lato", sans-serif;
        line-height: 2.5rem;
        margin-inline: 2em;
      }
    }
  }
}
</style>
