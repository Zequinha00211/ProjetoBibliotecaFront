<template>
  <div style="padding-right: 20px; padding-left: 20px">
    <Form
      :model="autor"
      :rules="ruleAutor"
      ref="formAutor"
      @submit.native.prevent
    >       
      <row :gutter="20">
        <i-col :sm="24">
          <FormItem label="NOME" prop="NOME">
            <i-input v-model="autor.NOME" style="width: 100%"></i-input>
          </FormItem>
        </i-col>
      </row>
      <row :gutter="20">
        <i-col :sm="24">
          <Button type="primary" long @click="salvarAutor">Cadastrar</Button>
        </i-col>
      </row>
    </Form>
  </div>
</template>

<script>
export default {
  props: {
    isEditar: {},
    value: { default: "" },
  },
  data() {
    return {
      autor: {
        NOME: "",
      },
      ruleAutor: {
        NOME: {
          required: true,
          message: "Campo requerido",
        },
      },
    };
  },
  components: {},
  watch: {
    value(newValue) {
      this.autor = newValue || {};
      if(newValue?.id === undefined){
        this.isExibFaculdade = false;
        setTimeout(() => {
        this.isExibFaculdade = true;
      }, 200);
      }
    },
    autor(newValue) {
       this.$emit("input", newValue || {});
    },
  },
  computed: {},
  methods: {
    salvarAutor() {
      this.$refs["formAutor"].validate((valid) => {
        if (valid) {
          this.$emit("salvarAutor", this.autor);
        }
      });
    },
  },
  created() {
    this.autor = this.value || {};
  },
};
</script>
