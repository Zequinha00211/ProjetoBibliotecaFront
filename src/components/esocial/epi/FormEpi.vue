<template>
  <Form ref="formEpi" :model="formEpi" :rules="ruleEpi" inline>
    <row :gutter="20">
      <i-col :sm="8">
        <FormItem prop="codepi">
          <Input
            type="number"
            v-model="formEpi.codepi"
            placeholder="Código Epi"
          >
          </Input>
        </FormItem>
      </i-col>
      <i-col :sm="16">
        <FormItem prop="descepi">
          <Input type="text" v-model="formEpi.descepi" placeholder="Descrição Epi">
          </Input>
        </FormItem>
      </i-col>
    </row>
    <row :gutter="20">
        <i-col :sm="24">
        <FormItem prop="grupoepi">
          <Input
            type="text"
            v-model="formEpi.grupoepi"
            placeholder="Grupo EPI"
          >
          </Input>
        </FormItem>
      </i-col>
    </row>
    <row :gutter="20">
        <i-col :sm="24">
        <FormItem prop="subgrupoepi">
          <Input
            type="text"
            v-model="formEpi.subgrupoepi"
            placeholder="SubGrupo EPI"
          >
          </Input>
        </FormItem>
      </i-col>
    </row>
    <row :gutter="20">
        <i-col :sm="6">
        <FormItem prop="caoudocumentoavaliacao">
          <Input
            type="number"
            v-model="formEpi.caoudocumentoavaliacao"
            placeholder="Número CA"
          >
          </Input>
        </FormItem>
      </i-col>
       <i-col :sm="6">
        <FormItem prop="dataaprovacao">
           <DatePicker
                type="date"
                format="dd/MM/yyyy"
                v-model="formEpi.dataaprovacao"
                style="width: 100%"
              ></DatePicker>
        </FormItem>
      </i-col>
      <i-col :sm="6">
        <FormItem prop="datavalidade">
           <DatePicker
                type="date"
                format="dd/MM/yyyy"
                v-model="formEpi.datavalidade"
                style="width: 100%"
              ></DatePicker>
        </FormItem>
      </i-col>
       <i-col :sm="6">
        <FormItem prop="nmrdolote">
          <Input
            type="number"
            v-model="formEpi.nmrdolote"
            placeholder="Número Lote"
          >
          </Input>
        </FormItem>
      </i-col>
      </row>
      <row :gutter="20">
        <i-col :sm="24">
        <FormItem prop="fornecedor">
          <Input
            type="text"
            v-model="formEpi.fornecedor"
            placeholder="Fornecedor"
          >
          </Input>
        </FormItem>
      </i-col>
       <i-col :sm="24">
        <FormItem>
          <Button type="primary" @click="salvarAtualizarCadastro()">{{stringBtn}}</Button>
        </FormItem>
      </i-col>
      </row>
  </Form>
</template>

<script>
export default {
  props: {
    value: {},
  },
  data() {
    return {
      stringBtn: this.$route.params.id != undefined ? "Atualizar" : "Salvar",
      formEpi: {},
      ruleEpi: {
        codepi: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        descepi: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        dataaprovacao: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        datavalidade: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        nmrdolote: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        fornecedor: [
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
      this.preencherDados(newValue);
    },
  },
  methods: {
    preencherDados(newValue){
     this.formEpi = newValue || {};
    },
     async salvarAtualizarCadastro() {
      this.$refs["formEpi"].validate(async (valid) => {
        if (valid) {
          if (this.formEpi.id != undefined) {
            this.$emit("atualizar", this.formEpi);
          } else {
            this.$emit("salvar", this.formEpi);
          }
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
     this.preencherDados(this.value);
  },
};
</script>
