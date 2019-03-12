<template>
  <div class="hello-word-page">
    {{ msg }}
    <button :class="[$style.button, $style.buttonClose]">
      测试按钮
    </button>
  </div>
</template>
<style module>
.button {
  border: none;
  border-radius: 2px;
}

.buttonClose {
  background-color: red;
}
</style>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: '666666'
    }
  },
  data () {
    return {
    };
  }
};
</script>
