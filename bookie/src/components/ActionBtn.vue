<template>
  <router-link :to="toLink" class="btn" :class="classname">{{
    text
  }}</router-link>
</template>

<script>
export default {
  props: {
    text: String,
    classname: String,
    toLink: String,
  },
};
</script>
