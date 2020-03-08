<template>
  <div class="mybody">
    <div class="submit">
      <input v-model="items.name" type="text" placeholder="Enter todo" class="myinput" />
      <button class="mybutton" @click="add">
        <img src="@/assets/add.svg" />
      </button>
    </div>

    <results-component :items="items" @delete="ondelete" @select="onselect" />
    <button @click="deleteselected">
      <img src="@/assets/futa.svg" />
    </button>
  </div>
</template>

<script>
import resultsComponent from "./resultsComponent";
export default {
  components: {
    resultsComponent
  },
  data: () => ({
    name: "hello",
    items: [
      { name: "task 1", date: "Today 8:00 pm", isSelected: false },
      { name: "task 2", date: "Monday 9:15 pm", isSelected: false }
    ]
  }),
  
  methods: {
    add: function() {
      this.items.push({
        id: Math.random() * 100,
        name: this.name,
        date: "Friday 8:00 pm",
        isSelected: false
      });
      this.$store.dispatch("savetask", this.items);
    },
    ondelete: function(index) {
      this.items.splice(index, 1);
    },
    onselect: function(index) {
      this.items[index].isSelected = !this.items[index].isSelected;
    },
    deleteselected: function() {
      for (var i = 0; i <= this.items.length; i++) {
        if (this.items[i].isSelected == true) {
          this.items.splice(i, 1);
        }
      }
    },
    axiostest: function() {
      this.axios.get("localhost:8080/trial").then(response => {
        console.log(response.data);
      });
    }
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