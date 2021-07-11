<template>
  <div>
    <Multilingual />
    <SwitchLanguage />
  </div>
</template>

<script>
  import Multilingual from '@/components/Multilingual.vue'
  import SwitchLanguage from '@/components/SwitchLanguage.vue'
  export default {
    name: 'Home',
    components: {
      SwitchLanguage,
      Multilingual
    }
  }
</script>
