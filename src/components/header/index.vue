<template>
  <v-container class="text-center">
      <header>
        <h1>UCSD Health</h1>
        <h2>Doctors Referral</h2>
      </header>
  </v-container>
</template>
<script>

export default {
  name: 'Header'
}
</script>
<style lang="scss" scoped>
header {
    h1 {
        font-size: 32px;
        line-height: 24px;
        font-weight: bolder;
        margin-bottom: 0;
        padding-bottom: 0;
    }
     h2 {
        margin-top: 0;
        padding-top: 0;
        font-size: 19px;
        text-transform: uppercase;
     }
}
</style>
