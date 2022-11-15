import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state:{
        valor:"",
        correcto:  "-You Picked Right!-",
        incorrecto:"-------Try Again!------",
        mensaje:   "",
        espera:   "----------------------------",
        botones:[],
        max:0,

     },
    actions:{ 
        evaluacion({commit},valor){
            commit('evaluar',valor)
        },
        subirDificultad({commit}){
            commit('cambiarAHard')
        },
        bajarDificultad({commit}){
            commit('cambiarAEasy')
        },
        entregaBoton({commit},valor){
            commit('entregarBotones',valor)
        },
        reincia({commit}){
            commit('resetear')
        }


    
    },
    mutations:{ 
          evaluar(state,valor){
            console.log(state.valor +" "+valor)
            if(valor==state.valor){
                state.mensaje=state.correcto
            }else{
              state.mensaje=state.incorrecto
            }
          },
          resetear(){
            
            location.reload()
          },
          cambiarAHard(state){
            state.max=6 
            this.commit('entregarBotones',state)
             
             
          },
          cambiarAEasy(state){
            state.max=3  
            this.commit('entregarBotones',state)
            
          },
    
          randomInt(){
          return Math.floor(Math.random() * 256);
          },
    
          createRandomStringColor(){
              let newColor = "rgb(" + this.randomInt() + ", " + this.randomInt() + ", " + this.randomInt() + ")" ;
              return newColor;},
        
        entregarBotones(state){
            let bot=[]
            for(let i=0;i<state.max;i++){
                bot[i]= "rgb(" + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ", " + Math.floor(Math.random() * 256) + ")"
            }
            state.botones=bot
             this.commit('getRndInteger',state)
            },
       
        getRndInteger(state) {
            state.valor=state.botones[Math.floor(Math.random() * (state.max - 0)) + 0]
            state.mensaje=state.espera
        },
    }
})