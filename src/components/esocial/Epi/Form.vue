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
        <FormItem prop="nmrdoca">
          <Input
            type="number"
            v-model="formEpi.nmrdoca"
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
        <FormItem prop="datadevalidade">
           <DatePicker
                type="date"
                format="dd/MM/yyyy"
                v-model="formEpi.datadevalidade"
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
          <Button type="primary" @click="salvar()">{{stringBtn}}</Button>
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
        datadevalidade: [
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
      this.formEpi = newValue || {};
    },
  },
  methods: {
    salvar() {
      this.$refs["formEpi"].validate((valid) => {
        if (valid) {
          this.$emit("handleSubmit", this.formEpi);
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
    this.formEpi = this.value || {};
  },
};
</script>
