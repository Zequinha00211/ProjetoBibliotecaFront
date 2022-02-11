<template>
  <Form ref="formEpi" :model="formEpi" :rules="ruleEpi" inline>
    <row :gutter="20">
      <i-col :sm="8">
        <FormItem prop="codepi" label="Código do Epi">
          <Input
            type="number"
            v-model="formEpi.codepi"
          >
          </Input>
        </FormItem>
      </i-col>
      <i-col :sm="16">
        <FormItem prop="descepi" label="Descrição Epi">
          <Input type="text" v-model="formEpi.descepi">
          </Input>
        </FormItem>
      </i-col>
    </row>
    <row :gutter="20">
        <i-col :sm="24">
        <FormItem prop="grupoepi" label="Grupo EPI">
          <Input
            type="text"
            v-model="formEpi.grupoepi"
          >
          </Input>
        </FormItem>
      </i-col>
    </row>
    <row :gutter="20">
        <i-col :sm="24">
        <FormItem prop="subgrupoepi" label="SubGrupo EPI">
          <Input
            type="text"
            v-model="formEpi.subgrupoepi"
          >
          </Input>
        </FormItem>
      </i-col>
    </row>
    <row :gutter="20">
        <i-col :sm="6">
        <FormItem prop="caoudocumentoavaliacao" label="Número CA">
          <Input
            type="number"
            v-model="formEpi.caoudocumentoavaliacao"
          >
          </Input>
        </FormItem>
      </i-col>
       <i-col :sm="6">
        <FormItem prop="dataaprovacao" label="Data de Aprovação">
           <DatePicker
                type="date"
                format="dd/MM/yyyy"
                v-model="formEpi.dataaprovacao"
                style="width: 100%"
              ></DatePicker>
        </FormItem>
      </i-col>
      <i-col :sm="6">
        <FormItem prop="datavalidade" label="Data de Validade">
           <DatePicker
                type="date"
                format="dd/MM/yyyy"
                v-model="formEpi.datavalidade"
                style="width: 100%"
              ></DatePicker>
        </FormItem>
      </i-col>
       <i-col :sm="6">
        <FormItem prop="nmrdolote" label="Número Lote">
          <Input
            type="number"
            v-model="formEpi.nmrdolote"
          >
          </Input>
        </FormItem>
      </i-col>
      </row>
      <row :gutter="20">
        <i-col :sm="24">
        <FormItem prop="fornecedor" label="Fornecedor">
          <Input
            type="text"
            v-model="formEpi.fornecedor"
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
