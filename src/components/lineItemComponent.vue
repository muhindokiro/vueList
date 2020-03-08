<template>
  <div class="mytab">
    <div class="itemclass">
      <div @click="$emit('select',index)">
        <div v-if="theitem.isSelected">
          <img src="@/assets/done.svg" alt="done" class="img" />
        </div>
        <div v-else>
          <img src="@/assets/undone.svg" alt="done" class="img" />
        </div>
      </div>
      {{theitem.name}}
    </div>
    <div class="itemclass">
      {{theitem.date}}
      <img
        src="@/assets/futa.svg"
        alt="del"
        class="dust"
        @click="$emit('delete',index)"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ["theitem", "index"]
};
</script>

<style>
.mytab {
  border-bottom: 1px solid #cccccc;
  display: flex;
  font-size: 14px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
}

.dust {
  margin: 0px 2px 0px 20px;
}
.img {
  height: 20px;
  width: 20px;
  margin: 0px 5px;
}
.itemclass {
  display: flex;
  align-items: center;
  flex-direction: row;
}
</style>