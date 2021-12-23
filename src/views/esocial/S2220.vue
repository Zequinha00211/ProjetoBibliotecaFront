<template>
  <div>
    <Form ref="formEsocial" :model="formEsocial" :rules="ruleEsocial" inline>
      <Tabs :value="tabname">
        <TabPane
          label="Identificação do Empregador"
          name="identificacaodoempregador"
        >
          <row :gutter="20">
            <i-col :sm="12">
              <FormItem prop="nmrinsc" label="Número da Inscrição">
                <Input
                  type="text"
                  v-model="formEsocial.nmrinsc"
                  placeholder=" "
                  v-mask="`##.###.###/####-##`"
                />
              </FormItem>
            </i-col>
            <i-col :sm="12">
              <FormItem prop="name" label="Nome do Empregado">
                <Input type="text" v-model="formEsocial.name" placeholder=" " />
              </FormItem>
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="12">
              <FormItem prop="cpf" label="CPF do Empregado">
                <Input
                  type="text"
                  v-model="formEsocial.cpf"
                  placeholder=" "
                  v-mask="`###.###.###-##`"
                />
              </FormItem>
            </i-col>
            <i-col :sm="12">
              <FormItem prop="matricula" label="Matricula do Empregado">
                <Input
                  type="text"
                  v-model="formEsocial.matricula"
                  placeholder=" "
                />
              </FormItem>
            </i-col>
          </row>
           <row :gutter="20">
          <i-col :sm="24">
            <FormItem prop="codigo" label="Codigo da Categoria do Trabalhador">
              <Select v-model="formEsocial.codigo" filterable>
                <Option
                  v-for="categoria in categoriasTrabalhador"
                  :value="categoria.codigo"
                  :key="categoria.id"
                  >{{ categoria.group.descricao }} - {{ categoria.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
            <i-col :sm="24">
              <ButtonGroup shape="circle">
                <Button
                  type="primary"
                  @click="tabname = 'examemedicoocupacional'"
                >
                  Próximo
                  <Icon type="ios-arrow-forward"></Icon>
                </Button>
              </ButtonGroup>
            </i-col>
          </row>
        </TabPane>
        <TabPane label="Exame Médico Ocupacional" name="examemedicoocupacional">
          <row :gutter="20">
            <i-col :sm="8">
              <FormItem prop="tipoexame" label="Tipo do Exame">
                <Select v-model="formEsocial.tipoexame" filterable>
                <Option
                  v-for="tipoexame in tiposdeExames"
                  :value="tipoexame.codigo"
                  :key="tipoexame.id"
                  >{{ tipoexame.descricao }}</Option
                >
              </Select>
              </FormItem>
            </i-col>
            <i-col :sm="8">
              <FormItem
                prop="dataemissaoatestado"
                label="Data de Emissão do Atestado"
              >
                <DatePicker
                  type="date"
                  format="DD/MM/yyyy"
                  v-model="formEsocial.dataemissaoatestado"
                  style="width: 100%"
                ></DatePicker>
              </FormItem>
            </i-col>
            <i-col :sm="8">
              <FormItem prop="atestadoaso" label="Atestado do ASO">
                 <Select v-model="formEsocial.ho" filterable>
                  <Option value="1">Apto</Option>
                  <Option value="2">Inapto</Option>
              </Select>
              </FormItem>
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="24">
              <label>Exames Complementares</label>
            </i-col>
            <i-col :sm="24">
              <Button @click="(showModal = true), (exame = {})">
                Adicionar Exames</Button
              >
            </i-col>
            <i-col :sm="24">
              <ListExame
                v-model="exames"
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
          <row :gutter="20">
            <i-col :sm="24">
              <ButtonGroup shape="circle">
                <Button
                  type="primary"
                  @click="tabname = 'identificacaodoempregador'"
                >
                  <Icon type="ios-arrow-back"></Icon>
                  Anterior
                </Button>
                <Button type="primary" @click="tabname = 'medicoemitente'">
                  Próximo
                  <Icon type="ios-arrow-forward"></Icon>
                </Button>
              </ButtonGroup>
            </i-col>
          </row>
        </TabPane>
        <TabPane label="Médico Emitente do ASO" name="medicoemitente">
          <row :gutter="20">
            <i-col :sm="10">
              <FormItem prop="inscmedico" label="Inscrição do Médico no CRM">
                <Input
                  type="text"
                  v-model="formEsocial.inscmedico"
                  placeholder=" "
                />
              </FormItem>
            </i-col>
            <i-col :sm="4">
              <FormItem prop="ufexpedicao" label="UF de Expedição do CRM">
                <Input
                  type="text"
                  v-model="formEsocial.ufexpedicao"
                  placeholder=" "
                />
              </FormItem>
            </i-col>
            <i-col :sm="10">
              <FormItem prop="nomemedico" label="Nome do Médico">
                <Input
                  type="text"
                  v-model="formEsocial.nomemedico"
                  placeholder=" "
                />
              </FormItem>
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="24">
              <Divider orientation="left"
                >Médico responsável pelo PCMSO</Divider
              >
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="10">
              <FormItem
                prop="cpfmedico"
                label="CPF do Médico"
                v-mask="`###.###.###-##`"
              >
                <Input
                  type="text"
                  v-model="formEsocial.cpfmedico"
                  placeholder=" "
                />
              </FormItem>
            </i-col>
            <i-col :sm="10">
              <FormItem
                prop="nmrinscmedico"
                label="Número de Inscrição do Médico"
              >
                <Input
                  type="text"
                  v-model="formEsocial.nmrinscmedico"
                  placeholder=" "
                />
              </FormItem>
            </i-col>
            <i-col :sm="4">
              <FormItem prop="ufcrm" label="UF do CRM">
                <Input
                  type="text"
                  v-model="formEsocial.ufcrm"
                  placeholder=" "
                />
              </FormItem>
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="24">
              <FormItem
                prop="nomemedicoresp"
                label="Nome do Médico Responsável"
              >
                <Input
                  type="text"
                  v-model="formEsocial.nomemedicoresp"
                  placeholder=" "
                />
              </FormItem>
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="24">
              <ButtonGroup shape="circle">
                <Button
                  type="primary"
                  @click="tabname = 'examemedicoocupacional'"
                >
                  <Icon type="ios-arrow-back"></Icon>
                  Anterior
                </Button>
                <Button type="primary" @click="salvar()">{{
                  stringBtn
                }}</Button>
              </ButtonGroup>
            </i-col>
          </row>
        </TabPane>
      </Tabs>
    </Form>

    <Modal v-model="showModal" width="760">
      <div style="text-align: center">
        <FormS2220
          v-model="exame"
          @handleSubmit="handleSubmit"
          v-if="exibirForm"
        />
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
import ListExame from "@/components/esocial/GridS2220";
import FormS2220 from "@/components/esocial/FormS2220";
import axios from "axios";
export default {
  data() {
    return {
      categoriasTrabalhador: {},
      tiposdeExames: {},
      stringBtn: this.$route.params.id != undefined ? "Atualizar" : "Salvar",
      tabname: "identificacaodoempregador",
      formEsocial: {
        nmrinsc: "",
        cpf: "",
        tipoexame: "",
        dataemissaoatestado: "",
        inscmedico: "",
        ufexpedicao: "",
        nomemedico: "",
      },
      ruleEsocial: {
        nmrinsc: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        cpf: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        tipoexame: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        dataemissaoatestado: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        inscmedico: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        ufexpedicao: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        nomemedico: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
      },
      exames: [],
      showModal: false,
      exibirForm: true,
      exame: {},
    };
  },
  components: {
    ListExame,
    FormS2220,
  },
  methods: {
    handleSubmit(data) {
      this.exibirForm = false;
      if (data.id === undefined) {
        this.exames.push({
          ...data,
          id: new Date().getTime(),
        });
      } else {
        this.exames = this.exames.filter((exame) => {
          if (data.id != exame.id) {
            return data;
          } else {
            return exame;
          }
        });
      }

      this.exibirForm = true;
      this.showModal = false;
    },
    editar(data) {
      console.log(data);
      this.exibirForm = false;
      this.exame = data;
      setTimeout(() => {
        this.showModal = true;
        this.exibirForm = true;
      }, 250);
    },
     deleteItem(data) {
      this.exames = this.exames.filter((exame) => {
        if (exame.cnpj != data.cnpj) {
          return exame;
        }
      });
    },
    async salvar() {
      const params = {
        ...this.formEsocial,
        array: this.exames,
      };
      await axios.post("exemplos", params);
      this.$Message.success("Alterado com Sucesso!");
    },
    async buscarCategoriadoTrabalhador() {
    const { data } = await axios.get("/esocial/tabela/01");
    this.categoriasTrabalhador = data.data.data;
  },
   async buscarTipodeExames() {
    const { data } = await axios.get("/esocial/atributos/tipo-exame");
    this.tiposdeExames = data.data.data;
  },
  },
  created() {
    this.buscarCategoriadoTrabalhador();
    this.buscarTipodeExames();
  },
};
</script>
