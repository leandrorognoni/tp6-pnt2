<template >

  <section class="src-components-nav-bar">
    <Header/>
    <button @click="resetear()"> New colors</button>
		<span>{{$store.state.mensaje}} </span>
		<button @click="cambiarAEasy()">easy</button>
		<button class="selected" @click="cambiarAHard()">hard</button>
    <Contenedor  @envio-respuesta="evaluar($event)"/>

  </section>

</template>

<script >
import Contenedor from "./Contenedor.vue";
import Header from "./Header.vue"
  export default  {
    name: 'src-components-nav-bar',
    props: [],
    components:{
      Contenedor, //lo registramos
      Header,
      
    },
     beforeMount () {
      this.cambiarAHard()
    },
    mounted () {
       
      
      
    },
    update(){
       
    },
    data () {
      return {
        
      } 
    },
    methods: {
     
      evaluar(valor){
       this.$store.dispatch("evaluacion",valor)
      },
      resetear(){
        
        this.$store.dispatch("reincia")
      },
      cambiarAHard(){
         this.$store.dispatch("subirDificultad")
         
      },
      cambiarAEasy(){
         this.$store.dispatch("bajarDificultad")
        
      },



    },
    
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-nav-bar {
  background: #ffffff;
	height: 30px;
	text-align: center;
	margin: 0;
	margin-top: -30px;

  }
  
  button {
	border: none;
	background-color: white;
	font-family: "Montserrat", "Avenir";
	text-transform: uppercase;
	height: 100%;
	font-weight: 700;
	letter-spacing: 1px;
	color: steelblue;
	transition: all 0.3s;
	outline: none;
  }
  button:hover {
    color: white;
    background-color: steelblue;
  }
  span{
    color:black
  }
</style>
