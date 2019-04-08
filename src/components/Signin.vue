<template>
    <div id="signin" class="text-center" >
        <form class="form-signin" @submit="saveData">
            <img class="mb-4" src="./logo-gp-service.jpg" alt="" width="72" height="72">
            <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>

            <label for="" class="sr-only">Email address</label>
            <input type="text" v-model="user.email">

            <label for="inputPassword" class="sr-only">Password</label>
            <input type="text" v-model="user.password">
            <div class="checkbox mb-3">
                <label>
                    <input type="checkbox" value="remember-me"> Remember me
                </label>
            </div>
            <button class="btn btn-lg btn-primary btn-block" type="submit" @click.prevent="saveData">Sign in</button>
            <p class="mt-5 mb-3 text-muted">&copy; 2019</p>
        </form>
    </div>
</template>

<style href="signin.css">

</style>

<script>


export default {
    mounted () {
        console.log("Coucou")
    },
    props: {
      value: Object
      
    },
    components:{

      
    },
    data(){
        return{
              user: JSON.parse(JSON.stringify(this.value)),
        }
    },
    methods:{
        saveData(){
            this.user.isLogged ='true',
            this.$emit('input',this.user)

        }
    }

}

</script>
