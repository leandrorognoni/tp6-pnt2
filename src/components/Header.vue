<template>

  <section class="src-components-header">
    <h3>THE GREAT RGB</h3>
    <h1>{{$store.state.valor}}</h1>
    <h3>GUESSING GAME</h3>
    
  </section>

</template>

<script>
  export default  {
    name: 'src-components-header',
    props: ["res"],
    components:{
    
    },
    mounted () {
      
    },
    data () {
      return {       
      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">
  .src-components-header {
    transition: all 0.3s;
	background: steelblue;
	text-transform: uppercase;
	text-align: center;
	margin: 0;
	color: white;
  }
</style>
