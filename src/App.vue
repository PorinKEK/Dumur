<template>
  <div>
    <my-header> </my-header>
    
    <div>
      <signin v-if="this.user.isLogged==='false'" v-model="user"></signin>
      
    </div>
    <pre>
      {{user}}
    </pre>
  </div>
</template>

<script>
  import axios from 'axios'
  import MyHeader from './components/Header'
  import Signin from './components/Signin'
  export default {
    props: {
      
      
    },
    data(){
      return{
      user:{
                email:'',
                password:'',
                isLogged:'false'
            } 
      }
    },
    methods: {
      connect(){
        
        
      }
    },
    mounted () {
    
    },
    components:{
      MyHeader,
      Signin, 
    }
  }
</script>
