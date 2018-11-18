Vue.component('todo-item', {
  template: '<div class="row"><courses v-for="course in courses" :courses="courses"></courses></div>'
})

let app = new Vue({
  el: "#app",
  data: {
    courses: [],
    message: ""
  },
  created: function () {
    console.log("created books");
    this.getInfo();
  },
  methods: {
    getInfo: function () {
      {
        // GET /someUrl
        this.$http.get('../js/info.json').then(response => {

          // get body data
          this.courses = response.body;

        }, response => {
          // error callback
        });
      }

    }
  }

})
