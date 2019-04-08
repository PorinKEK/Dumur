<template>
    <div id="header">
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
        <a class="navbar-brand" href="/">Group'Project</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
  
        <div class="collapse navbar-collapse" id="navbarsExampleDefault">

            <ul class="navbar-nav mr-auto">
      
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home</router-link>
                </li>
      
                <li class="nav-item">
                    <router-link class="nav-link" to="/About">About</router-link>
                </li>

                <li class="nav-item right">
                    <router-link class="nav-link" to="/Signin">Sign in</router-link>
                </li>
            </ul>
        </div>
        </nav>
    </div>
</template>

<style scoped>

</style>

<script>


export default {
  mounted () {
    console.log("Coucou")
  },
    components:{
      
    }
}

</script>
