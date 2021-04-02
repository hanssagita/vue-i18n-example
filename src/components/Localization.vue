<template>
  <div class="localization">
    <h1>{{ msg }}</h1>
    <div class="information">
      <div class="item">
        <div class="title">
          {{ $t('highlights.approachable.label') }}
        </div>
        <div class="value">
          {{ $t('highlights.approachable.value') }}
        </div>
      </div>
      <div class="item">
        <div class="title">
          {{ $t('highlights.versatile.label') }}
        </div>
        <div class="value">
          {{ $t('highlights.versatile.value') }}
        </div>
      </div>
      <div class="item">
        <div class="title">
          {{ $t('highlights.performant.label') }}
        </div>
        <div class="value">
          {{ $t('highlights.performant.value') }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Localization',
  props: {
    msg: String
  }
}
</script>

<style scoped>
.information {
  display: flex;
  justify-content: space-around;
}
.item {
  width: 20%;
}
.title {
  color: #42b983;
  font-size: 1.5em;
  font-weight: bold;
}
.value {
  color: #4f5959;
  font-size: 1.2em;
}
</style>
