<template>
    <div></div>
</template>
<script>
export default{
    created () {
        if(this.$auth.check()){
            this.$router.push('/')
        }
        else{
            this.$router.push('/login')
        }
    }
}
</script>