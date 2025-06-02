<template>
  <div class="home">
    <div class="welcome-card">
      <h1>📚 Bem-vindo à sua Biblioteca</h1>
      <p>Gerencie seus livros, autores e usuários com facilidade.</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.home {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80vh;
  background: linear-gradient(to right, #e0f7fa, #fff);
  padding: 20px;
}

.welcome-card {
  background: white;
  border-radius: 16px;
  padding: 40px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 500px;
  width: 100%;
}

h1 {
  font-size: 28px;
  color: #00796b;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  color: #555;
}
</style>
