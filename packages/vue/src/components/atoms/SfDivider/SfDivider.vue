<template functional>
  <hr
    :class="[data.class, data.staticClass, 'sf-divider']"
    :style="[data.style, data.staticStyle]"
  />
</template>
<script>
export default {
  name: "SfDivider",
};
</script>
<style lang="scss">
@import "~@highdigital/sharedt/styles/components/atoms/SfDivider.scss";
</style>
