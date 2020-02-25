<template>
  <div class="mybody">
    <div class="submit">
      <input type="text" placeholder="Enter todo" class="myinput" />
      <button class="mybutton">
        <img src="@/assets/add.svg" alt />
      </button>
    </div>

    <results-component />
  </div>
</template>

<script>
import resultsComponent from "./resultsComponent";
export default {
  components: {
    resultsComponent
  }
};
</script>

<style>
.mybody {
  padding: 20px;
}
.myinput {
  width: 97%;
  padding: 0px 15px;
  height: 31px;
  border: 1px solid #cccccc;
}
.mybutton {
  background-color: white;
  border: 1px solid #cccccc;
  height: 35px;
}
.submit {
  display: flex;
  margin-bottom: 5px;
  flex-direction: row;
}
</style>