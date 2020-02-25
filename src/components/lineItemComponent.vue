<template>
  <div class="mytab">

      <div class="itemclass">
          <img src="@/assets/done.svg" alt="done" class="img">
          status: {{theitem.isSelected}}
          name:{{theitem.name}}
      </div>
      <div class="itemclass">
            time:{{theitem.date}}
            <img src='@/assets/futa.svg' alt="del" class="dust">
      </div>
  </div>
</template>

<script>
export default {
props:['theitem']
}
</script>

<style>
.mytab{
    border-bottom: 1px solid  #cccccc;
    display: flex;
    font-size: 14px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
     


}

.dust{
        margin: 0px 2px 0px 20px;

}
.img{
    height: 20px;
    width: 20px;
    margin: 0px 5px;
}
.itemclass{
    display: flex;
    align-items: center;
    flex-direction: row;
}
</style>