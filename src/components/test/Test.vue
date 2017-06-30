<template>
  <div class="test">
    <p>{{msg}}</p>
  </div>
</template>

<script>
    export default {
        name: 'MyTestComponent',
        props: {
            msg: String
        }
    }
</script>
