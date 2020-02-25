<template>
  <div class="lineitems">
      <div v-for="item in items" :key="item" class="idem">
          <line-item-component :theitem='item'/>
      </div>
  </div>
</template>

<script>
import lineItemComponent from './lineItemComponent'
export default {
    components:{
        lineItemComponent 
    },
data: ()=>({
    items:[
        {name:"task 1", date:"Today 8:00 pm", isSelected:true},
        {name:"task 2", date:"Monday 9:15 pm", isSelected:false},
        {name:"task 3", date:"Monday 11:15 pm", isSelected:false},
        {name:"task 4", date:"Wednesday 2:30 pm", isSelected:false},
    ]
})
}
</script>

<style>
.lineitems{
    border: 1px solid  #cccccc;
    border-radius: 5px;
}
.idem :hover{
    background-color: #e8e8e8;
}
.idem{
    background-color: white;
}
</style>