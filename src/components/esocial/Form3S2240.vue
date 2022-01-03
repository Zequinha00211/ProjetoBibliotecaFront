<template>
  <Form ref="form3Esocial" :model="form3Esocial" :rules="rule3Esocial" inline>
    <row :gutter="20">
          <i-col :sm="12">
            <FormItem prop="cpfresponsavel" label="CPF do responsável">
              <Input
                type="text"
                v-model="form3Esocial.cpfresponsavel"
                placeholder=" "
                v-mask="`###.###.###-##`"
              />
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="orgclasse" label="Órgão de Classe">
               <Select v-model="form3Esocial.orgclasse" filterable>
                <Option value="1">Conselho Regional de Medicina - CRM</Option>
                <Option value="4">Conselho Regional de Engenharia e Agronomia - CREA</Option>
                 <Option value="9">Outros</Option>
              </Select>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="12">
            <FormItem prop="uforgao" label="UF do Órgão de classe">
              <Input
                type="text"
                v-model="form3Esocial.uforgao"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="descorgaoclase" label="Descrição: Órgão de Classe">
              <Input
                type="text"
                v-model="form3Esocial.descorgaoclase"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <FormItem
              prop="nmrinscorgao"
              label="Número de inscrição do Órgão de classe"
            >
              <Input
                type="text"
                v-model="form3Esocial.nmrinscorgao"
                placeholder=" "
              />
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
      stringBtn : this.$route.params.id != undefined ? 'Atualizar': 'Salvar',
      form3Esocial: {
        cpfresponsavel: "",
        orgclasse: "",
        uforgao: "",
        descorgaoclase: "",
        nmrinscorgao: "",

      },
      rule3Esocial: {
        cpfresponsavel: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        orgclasse: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        uforgao: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        nmrinscorgao: [
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
      this.form3Esocial = newValue || {}; 
      
    },
  },
  methods: {
    salvar() {
      this.$refs["form3Esocial"].validate((valid) => {
        if (valid) {
          this.$emit("handleSubmit3", this.form3Esocial); 
           this.form3Esocial = { cpfresponsavel: "", orgclasse: "",  uforgao: "", descorgaoclase: "", nmrinscorgao: "",}        
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
  },
  created() {
    this.form3Esocial = this.value || {};  
  },
};
</script>
