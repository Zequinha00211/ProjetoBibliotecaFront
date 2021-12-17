<template>
  <div>
    <Form ref="formInline" :model="elementos" inline>
      <row :gutter="20">
        <i-col :sm="12">
          <FormItem prop="user" label="user">
            <Input type="text" v-model="elementos.user" placeholder="Username">
              <Icon type="ios-person-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </i-col>

        <i-col :sm="12">
          <FormItem prop="password" label="password">
            <Input
              type="text"
              v-model="elementos.password"
              placeholder="Password"
            >
              <Icon type="ios-lock-outline" slot="prepend"></Icon>
            </Input>
          </FormItem>
        </i-col>
      </row>
      <row :gutter="20">
        <i-col :sm="24">
          <label> Elemtos do Array</label>
        </i-col>
        <i-col :sm="24">
          <Button @click="(showModal = true), (company = {})">
            Adicionar elementos</Button
          >
        </i-col>
        <i-col :sm="24">
          <ListCompany
            v-model="companys"
            @editar="editar"
            @deleteItem="deleteItem"
          />
        </i-col>
      </row>
      <row :gutter="20">
        <i-col :sm="12">
          <FormItem>
            <Button @click="salvar()"> Salvar</Button>
          </FormItem>
        </i-col>
      </row>
    </Form>

    <Modal v-model="showModal" width="760">
      <div style="text-align: center">
        <FormExemplo
          v-model="company"
          @handleSubmit="handleSubmit"
          v-if="exibirForm"
        />
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
import ListCompany from "@/components/exemplos/Grid";
import FormExemplo from "@/components/exemplos/Form";
import axios from "axios";
export default {
  data() {
    return {
      companys: [],
      showModal: false,
      exibirForm: true,
      company: {},
      elementos: {},
    };
  },
  components: {
    ListCompany,
    FormExemplo,
  },
  methods: {
    handleSubmit(data) {
      this.exibirForm = false;
      if (data.id === undefined) {
        this.companys.push({
          ...data,
          id: new Date().getTime(),
        });
      } else {
        this.companys = this.companys.filter((company) => {
          if (data.id != company.id) {
            return data;
          } else {
            return company;
          }
        });
      }

      this.exibirForm = true;
      this.showModal = false;
    },
    editar(data) {
      console.log(data);
      this.exibirForm = false;
      this.company = data;
      setTimeout(() => {
        this.showModal = true;
        this.exibirForm = true;
      }, 250);
    },
    deleteItem(data) {
      this.companys = this.companys.filter((company) => {
        if (company.cnpj != data.cnpj) {
          return company;
        }
      });
    },
    async salvar() {
        const params = {
            ...this.elementos,
            array: this.companys
        };
      await axios.post("exemplos", params);
      this.$Message.success("Alterado com Sucesso!");
    },
  },
  created() {},
};
</script>
