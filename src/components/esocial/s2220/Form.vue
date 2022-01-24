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
              <FormItem prop="inscricaoempresa" label="Número da Inscrição">
                <Input
                  type="text"
                  v-model="formEsocial.inscricaoempresa"
                  placeholder=" "
                  v-mask="`##.###.###/####-##`"
                />
              </FormItem>
            </i-col>
            <i-col :sm="12">
              <FormItem prop="nameempregado" label="Nome do Empregado">
                <Input
                  type="text"
                  v-model="formEsocial.nameempregado"
                  placeholder=" "
                />
              </FormItem>
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="12">
              <FormItem prop="cpfempregado" label="CPF do Empregado">
                <Input
                  type="text"
                  v-model="formEsocial.cpfempregado"
                  placeholder=" "
                  v-mask="`###.###.###-##`"
                />
              </FormItem>
            </i-col>
            <i-col :sm="12">
              <FormItem
                prop="matriculaempregado"
                label="Matricula do Empregado"
              >
                <Input
                  type="text"
                  v-model="formEsocial.matriculaempregado"
                  placeholder=" "
                />
              </FormItem>
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="24">
              <FormItem
                prop="codigodecategoriatrabalhador"
                label="Codigo da Categoria do Trabalhador"
              >
                <Select
                  v-model="formEsocial.codigodecategoriatrabalhador"
                  filterable
                >
                  <Option
                    v-for="codigodecategoriatrabalhador in categoriasTrabalhador"
                    :value="codigodecategoriatrabalhador.codigo"
                    :key="codigodecategoriatrabalhador.id"
                    >{{ codigodecategoriatrabalhador.group.descricao }} -
                    {{ codigodecategoriatrabalhador.descricao }}</Option
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
                  format="dd/MM/yyyy"
                  v-model="formEsocial.dataemissaoatestado"
                  style="width: 100%"
                ></DatePicker>
              </FormItem>
            </i-col>
            <i-col :sm="8">
              <FormItem prop="atestadoaso" label="Atestado do ASO">
                <Select v-model="formEsocial.atestadoaso" filterable>
                  <Option :value="1">Apto</Option>
                  <Option :value="2">Inapto</Option>
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
              <ti-grid-exames
                v-model="exames"
                @editarItemExame="editarItemExame"
                @deleteItemExame="deleteItemExame"
                v-if="exibirGridExames"
              />
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
              <FormItem prop="ufexpedicaocrm" label="UF de Expedição do CRM">
                <Input
                  type="text"
                  v-model="formEsocial.ufexpedicaocrm"
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
                <Button type="primary" @click="salvarAtualizarCadastro()">{{
                  stringBtn
                }}</Button>
              </ButtonGroup>
            </i-col>
          </row>
        </TabPane>
      </Tabs>
    </Form>

    <Modal
      v-model="showModal"
      width="760"
      title="Dados dos Exames"
      :footer-hide="true"
    >
      <div style="text-align: center">
        <ti-form-exames
          v-model="exame"
          @adicionarDadosExames="adicionarDadosExames"
          @cancelarDadosExames="cancelarDadosExames"
          v-if="exibirForm"
        />
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
import TiGridExames from "@/components/esocial/s2220/GridExames";
import TiFormExames from "@/components/esocial/s2220/FormExames";
import axios from "axios";
export default {
  props: {
    value: {},
  },
  data() {
    return {
      idCadastroS2220: this.$route.params.id,
      idCadastroS2220Exame: this.$route.params.id,
      categoriasTrabalhador: [],
      tiposdeExames: [],
      stringBtn: this.$route.params.id != undefined ? "Atualizar" : "Salvar",
      tabname: "identificacaodoempregador",
      formEsocial: {},
      ruleEsocial: {
        inscricaoempresa: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        cpfempregado: [
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
          },
        ],
        dataemissaoatestado: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        inscmedico: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        ufexpedicaocrm: [
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
      exibirGridExames: true,
      exame: {},
    };
  },
  components: {
    TiGridExames,
    TiFormExames,
  },
  watch: {
    value(newValue) {
      this.preencherDados(newValue);
    },
    exame() {
      this.exibirGridExames = false;
      setTimeout(() => {
        this.exibirGridExames = true;
      }, 100);
    },
  },
  methods: {
    preencherDados(newValue) {
      this.formEsocial = newValue || {};
      if (newValue.id != undefined) {
        let dataemissaoatestado = newValue?.dataemissaoatestado;
        if (typeof dataemissaoatestado === "string" && dataemissaoatestado) {
          dataemissaoatestado = new Date(dataemissaoatestado);
        }
        this.formEsocial.dataemissaoatestado = dataemissaoatestado;
        this.exames = this.formEsocial.exames;
      }
    },
    async salvarAtualizarCadastro() {
      this.$refs["formEsocial"].validate(async (valid) => {
        if (valid) {
          this.formEsocial.exames = this.exames;
          if (this.formEsocial.id != undefined) {
            this.$emit("atualizar", this.formEsocial);
          } else {
            this.$emit("salvar", this.formEsocial);
          }
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
    adicionarDadosExames(data) {
      if (this.exame.editar != undefined && this.exame.editar === true) {
        this.exames[this.exame.index] = this.exame;
      } else {
         this.exames.push({
          ...data,
        }); 
      }     
      this.formEsocial.exames = this.exames;
      this.exibirForm = true;
      this.showModal = false;
      this.exame = {};
    },
    cancelarDadosExames() {
      this.exame = {};
      this.exibirForm = true;
      this.showModal = false;
    },
    editarItemExame(data) {
      this.exibirForm = false;
      this.exame = { ...data.key, editar: true, index: data.rowIndex };
      setTimeout(() => {
        this.showModal = true;
        this.exibirForm = true;
      }, 250);
    },
    deleteItemExame(data) {
      const exames = this.exames;
      this.exames = exames.filter((element, index) => {
        return data.rowIndex !== index;
      });
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
    this.preencherDados(this.value);
  },
};
</script>
