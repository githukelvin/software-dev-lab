<template>
  <button class="btn" :class="classname">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String,
    classname: String,
  },
};
</script>
