// Vue.component('film', {
//   el: "#application",
//   template: '<div class="row"><div class="container mt-4"> <div class = "card"style = "width: 18rem;" ><div class = "card-body" ><h5 class = "card-title" > The Pianist < /h5> <p class = "card-text" > The Pianist is an action - packed,biography film.It is about Władysław Szpilman’ slife.He was an excellent pianist,but he was a Jew.He lived in the time of the Second World War. </p> </div> </div></div></div>'

// });




let app = new Vue({
  el: "#application",
  // template: '<div class="row"></div>'
  data: {
    films: [{
        title: "The Pianist"
      },
      {
        description: "The Pianist is an action-packed, biography film. It is about Władysław Szpilman’s life. He was an excellent pianist, but he was a Jew. He lived in the time of the Second World War"
      },
      {
        title1: "Baise Moi"
      },
      {
        description1: "Baise-moi (Fuck me) is a 2000 French crime thriller film with elements of a rape and revenge film written and directed by Virginie Despentes and Coralie Trinh Thi and starring Karen Lancaume and Raffaëla Anderson. It is based on the novel by Despentes, first published in 1993"
      }

    ]
  }


  // },
  // created: function () {
  //   //console.log("created books");
  //   this.getInfo();
  // },
  // methods: {
  //   getInfo: function () {

  //     // GET /someUrl
  //     this.$http.get('../js/info.json').then(response => {

  //       // get body data
  //       this.ticket = response.body;
  //       // for (let i = 0; i < response.legnth; i++) {
  //       //   response.body.title;
  //       //   response.body.discription;

  //       // }
  //       // console.log(response.body[0].title)
  //       // console.log(response.body[0].description)
  //       // console.log(response.body[1].title)
  //       // console.log(response.body[1].description)

  //       // }, response => {
  //       // error callback
  //     });


  //   }
  // },

  // data: {
  //   ticketCinema: {
  //     title: "mon titre",
  //     description: "azertyuio ertyui dfghjk"
  //   },
  //   ticket: [],
  //   message: "toto"
  // },

  //'template': '<div class="row"> <h3 v -for = "todo-item in ticket": todo - item = "todo-item" > < /h3> < / div > '

})

// function(param){
//   //
// }

// param => {
//    //
// }
