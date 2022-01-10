<template>
  <Form ref="formEsocial" :model="formEsocial" :rules="ruleEsocial" inline>
    <row :gutter="20">
      <i-col :sm="24">
        <FormItem
          prop="datainicio"
          label=""
        >
          <DatePicker
            type="date"
            format="dd/MM/yyyy"
            v-model="formEsocial.datainicio"
            style="width: 100%"
          ></DatePicker>
        </FormItem>
      </i-col>
    </row>
    <row :gutter="20">
        
      <i-col :sm="12">
        <FormItem>
          <Button @click="$emit('cancelar')" class="btnFormS2240">Cancelar</Button>
        </FormItem>
      </i-col>
      <i-col :sm="12">
        <FormItem>
          <Button type="primary" @click="salvar()" class="btnFormS2240">{{ stringBtn }}</Button>
        </FormItem>
      </i-col>
    </row>
  </Form>
</template>

<script>
import { mask } from "vue-the-mask";
export default {
  props: {
    value: {},
  },
  directives: {
    mask,
  },
  data() {
    return {
      stringBtn: this.$route.params.id != undefined ? "Atualizar" : "Salvar",
      formEsocial: {
        datainicio: "",
      },
      ruleEsocial: {
        datainicio: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
      },
    };
  },
  watch: {
    value(newValue) {
      this.formEsocial = newValue || {};
    },
  },
  methods: {
    salvar() {
      this.$refs["formEsocial"].validate((valid) => {
        if (valid) {
          this.$emit("handleSubmit", this.formEsocial);
          this.formEsocial = { datainicio: "" };
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
    this.formEsocial = this.value || {};
  },
};
</script>
<style scoped>
.btnFormS2240{
  width: 100%;
}
</style>
