<template>
   <form class="review-form">
      <p>
        <label for="name">NAME</label>
        <input id="name" v-model="name" placeholder="name">
      </p>
          <p>
        <label for="name">ACTIVITY</label>
        <input id="name" v-model="name" placeholder="name">
        <br>
        <input type="submit" value="Submit">  
      </p>    
    
    </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
