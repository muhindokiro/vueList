<template>
  <div class="lineitems">
    <div v-for="(item,index) in items" :key="item" class="idem">
      <line-item-component :theitem="item" @delete="ondelete" :index="index" @select="onselect" />
    </div>
   
  </div>
  
</template>

<script>
import lineItemComponent from "./lineItemComponent";

export default {
  components: {
    lineItemComponent
  },
  props: ["items"],

  methods: {
    ondelete: function(value) {
      console.log(value);
      this.$emit("delete",value)
    },
    onselect: function(value) {
      console.log(value);
      this.$emit("select",value)
    },
    

  }
};
</script>

<style>
.lineitems {
  border: 1px solid #cccccc;
  border-radius: 5px;
}
.idem :hover {
  background-color: #e8e8e8;
}
.idem {
  background-color: white;
}
</style>