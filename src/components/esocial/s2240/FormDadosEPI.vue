<template>
  <Form ref="FormDadosEPI" :model="FormDadosEPI" :rules="rule4Esocial" inline>
    <row :gutter="20">
      <i-col :sm="12">
        <FormItem
          prop="caoudocumentoavaliacao"
          label="CA ou documento de avaliação de EPI"
        >
          <Select
            v-model="FormDadosEPI.caoudocumentoavaliacao"
            multiple
            filterable
            :remote-method="remoteEpis"
            :loading="loading"
            @on-set-default-options="setDefaultOptions"
          >
            <Option
              v-for="(documento, index) in dadosEpis"
              :value="documento.id"
              :key="index"
              >{{ documento.codepi }}</Option
            >
          </Select>
        </FormItem>
      </i-col>
      <i-col :sm="12">
        <FormItem prop="descepi" label="Descrição do EPI">
          <Select v-model="FormDadosEPI.descepi" filterable>
            <Option
              v-for="descepi in dadosEpis"
              :value="descepi.id"
              :key="descepi.id"
              >{{ descepi.descepi }}</Option
            >
          </Select>
        </FormItem>
      </i-col>
    </row>
    <row :gutter="20">
      <i-col :sm="12">
        <FormItem>
          <Button @click="$emit('cancelarDadosEPI')" class="btnFormDadosEPI"
            >Cancelar</Button
          >
        </FormItem>
      </i-col>
      <i-col :sm="12">
        <FormItem>
          <Button type="primary" @click="adicionar()" class="btnFormDadosEPI">{{
            stringBtn
          }}</Button>
        </FormItem>
      </i-col>
    </row>
  </Form>
</template>

<script>
import { mask } from "vue-the-mask";
import axios from "axios";
export default {
  props: {
    value: {},
  },
  directives: {
    mask,
  },
  data() {
    return {
      dadosEpis: {},
      stringBtn: "Adicionar",
      modelDadosEpis: ['beijing', 'shenzhen'],
      FormDadosEPI: {},
      rule4Esocial: {},
       list: [
                    {
                        value: 'beijing',
                        label: '北京'
                    },
                    {
                        value: 'shanghai',
                        label: '上海'
                    },
                    {
                        value: 'shenzhen',
                        label: '深圳'
                    },
                    {
                        value: 'hangzhou',
                        label: '杭州'
                    },
                    {
                        value: 'guangzhou',
                        label: '广州'
                    }
                ],
    };
  },
  watch: {
    value(newValue) {
      this.FormDadosEPI = newValue || {};
      this.stringBtn =
        this.FormDadosEPI.index != undefined ? "Atualizar" : "Adicionar";
    },
  },
  methods: {
    adicionar() {
      this.$refs["FormDadosEPI"].validate((valid) => {
        if (valid) {
          this.$emit("adicionarDadosEPI", this.FormDadosEPI);
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
    async buscarDadosEpi() {
      const { data } = await axios.get("/esocial/epi/");
      this.dadosEpis = data.data;
    },
    remoteEpis(newValue) {
      if (newValue !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options = this.list.filter(
            (item) => item.label.indexOf(newValue) > -1
          );
        }, 200);
      } else {
        this.options = [];
      }
    },
    setDefaultOptions(options) {
      this.options = options;
    },
  },
  created() {
    this.FormDadosEPI = this.value || {};
    this.stringBtn =
      this.FormDadosEPI.index != undefined ? "Atualizar" : "Adicionar";
    this.buscarDadosEpi();
  },
};
</script>
<style scoped>
.btnFormDadosEPI {
  width: 100%;
}
</style>
