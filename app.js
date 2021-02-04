const app = Vue.createApp({
    //data functions
   // template: '<h2>i an templete</h2>'
   data(){
       return{
           showBooks:false,
           title:'muna madan',
           author: 'kabindra',
           age:'1'
       }
   },
   methods:{
       changeTitle(abc){
         // this.title = "wordds of radiance"
         this.title = abc
       },

       toggleShowBooks(){
           this.showBooks =! this.showBooks;
       }
   }
})

app.mount('#app') 
