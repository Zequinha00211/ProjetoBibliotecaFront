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
            <FormItem prop="inscemp" label="Inscrição da Empresa">
              <Input
                type="text"
                v-model="formEsocial.inscemp"
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
                  >{{ categoria.group.descricao }} -
                  {{ categoria.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="24">
            <ButtonGroup shape="circle">
              <Button type="primary" @click="tabname = 'exposicaoaorisco'">
                Próximo
                <Icon type="ios-arrow-forward"></Icon>
              </Button>
            </ButtonGroup>
          </i-col>
        </row>
      </TabPane>
      <TabPane label="Exposição ao Risco" name="exposicaoaorisco">
        <row :gutter="20">
          <i-col :sm="24">
              <label>Data de Inicio nas Condições de Risco</label>
            </i-col>
            <i-col :sm="24">
              <Button @click="(showModal = true), (datainicio = {})">
                Adicionar Data</Button
              >
            </i-col>
             <i-col :sm="24">
              <ListData
                v-model="datasinicio"
                @editar1="editar1"
                @deleteItem1="deleteItem1"
              />
            </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <Divider orientation="left">Informações do Ambiente:</Divider>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="12">
            <FormItem prop="locambiente" label="Local do Ambiente">
              <Select v-model="formEsocial.locambiente" filterable>
                <Option value="1">Estabelecimento do próprio empregador</Option>
                <Option value="2">Estabelecimento de terceiros</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="nomesetor" label="Nome do Setor">
              <Input
                type="text"
                v-model="formEsocial.nomesetor"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="12">
            <FormItem prop="tipinsc" label="Tipo de Inscrição">
              <Input
                type="text"
                v-model="formEsocial.tipinsc"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="inscsetor" label="Inscrição do Setor">
              <Input
                type="text"
                v-model="formEsocial.inscsetor"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <Divider orientation="left">Informação das Atividades:</Divider>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <FormItem prop="descatividade" label="Descrição das atividades">
              <Input
                type="text"
                v-model="formEsocial.descatividade"
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
                @click="tabname = 'identificacaodoempregador'"
              >
                <Icon type="ios-arrow-back"></Icon>
                Anterior
              </Button>
              <Button type="primary" @click="tabname = 'agentenocivo'">
                Próximo
                <Icon type="ios-arrow-forward"></Icon>
              </Button>
            </ButtonGroup>
          </i-col>
        </row>
      </TabPane>
      <TabPane label="Agente Nocivo" name="agentenocivo">
         <row :gutter="20">
          <i-col :sm="24">
              <label>Agente Nocivo</label>
            </i-col>
            <i-col :sm="24">
              <Button @click="(showModal2 = true), (agentenocivo = {})">
                Adicionar Informações</Button
              >
            </i-col>
             <i-col :sm="24">
              <ListAgenteNocivo
                v-model="agentesnocivos"
                @editar="editar"
                @deleteItem="deleteItem"
              />
            </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="8">
            <FormItem prop="limitetolerancia" label="Limite de tolerância">
              <Input
                type="text"
                v-model="formEsocial.limitetolerancia"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="unidademedida" label="Unidade de Medida">
               <Select v-model="formEsocial.unidademedida" filterable>
                <Option
                  v-for="unidademedida in unidadedemedida"
                  :value="unidademedida.codigo"
                  :key="unidademedida.id"
                  >{{ unidademedida.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="tecnicamedicao" label="Técnica de Medição">
              <Input
                type="text"
                v-model="formEsocial.tecnicamedicao"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <ButtonGroup shape="circle">
              <Button type="primary" @click="tabname = 'exposicaoaorisco'">
                <Icon type="ios-arrow-back"></Icon>
                Anterior
              </Button>
              <Button type="primary" @click="tabname = 'equipamentospiepc'">
                Próximo
                <Icon type="ios-arrow-forward"></Icon>
              </Button>
            </ButtonGroup>
          </i-col>
        </row>
      </TabPane>
      <TabPane label="Equipamentos de EPI e EPC" name="equipamentospiepc">
        <row :gutter="20">
          <i-col :sm="24">
            <FormItem
              prop="equipamentosprotecao"
              label="Utiliza Equipamentos de Proteção Coletiva(EPC)"
            >
              <Select v-model="formEsocial.equipamentosprotecao" filterable>
                <Option value="0">Não se aplica</Option>
                <Option value="1">Não implementa</Option>
                <Option value="2">Implementa</Option>
              </Select>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <FormItem
              prop="epcsprotecao"
              label="Os EPCS são eficazes na proteção do trabalhador"
            >
              <Input
                type="text"
                v-model="formEsocial.epcsprotecao"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <FormItem
              prop="utilizaequipamentos"
              label="Utiliza Equipamentos de Proteção Individual(EPI)"
            >
              <Select v-model="formEsocial.utilizaequipamentos" filterable>
                <Option value="0">Não se aplica</Option>
                <Option value="1">Não utilizado</Option>
                <Option value="2">Utilizado</Option>
              </Select>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <FormItem
              prop="episprotecao"
              label="Os EPIS são eficazes na proteção do trabalhador"
            >
              <Input
                type="text"
                v-model="formEsocial.episprotecao"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <ButtonGroup shape="circle">
              <Button type="primary" @click="tabname = 'agentenocivo'">
                <Icon type="ios-arrow-back"></Icon>
                Anterior
              </Button>
              <Button type="primary" @click="tabname = 'epiprotecaoindividual'">
                Próximo
                <Icon type="ios-arrow-forward"></Icon>
              </Button>
            </ButtonGroup>
          </i-col>
        </row>
      </TabPane>
      <TabPane
        label="EPI - Equipamento de Proteção Individual"
        name="epiprotecaoindividual"
      >
      <row :gutter="20">
          <i-col :sm="24">
              <label>EPI</label>
            </i-col>
            <i-col :sm="24">
              <Button @click="(showModal4 = true), (epi = {})">
                Adicionar Informações</Button
              >
            </i-col>
             <i-col :sm="24">
              <ListEpi
                v-model="epis"
                @editar3="editar3"
                @deleteItem3="deleteItem3"
              />
            </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <Divider orientation="left">Complementos dos APIS:</Divider>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="12">
            <FormItem prop="medidaprotecao" label="Medidas de Proteção">
              <Select v-model="formEsocial.medidaprotecao" filterable>
                <Option value="S">Sim</Option>
                <Option value="N">Não</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="boascondicoes" label="Boas Condições de Uso">
              <Select v-model="formEsocial.boascondicoes" filterable>
                <Option value="S">Sim</Option>
                <Option value="N">Não</Option>
              </Select>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="12">
            <FormItem prop="usoininepi" label="Uso ininterrupto do EPI">
              <Select v-model="formEsocial.usoininepi" filterable>
                <Option value="S">Sim</Option>
                <Option value="N">Não</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="validaderespeitada" label="Validade Respeitada">
              <Select v-model="formEsocial.validaderespeitada" filterable>
                <Option value="S">Sim</Option>
                <Option value="N">Não</Option>
              </Select>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="12">
            <FormItem
              prop="periodicidadedetroca"
              label="Periodicidade de troca"
            >
              <Select v-model="formEsocial.periodicidadedetroca" filterable>
                <Option value="S">Sim</Option>
                <Option value="N">Não</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="higienizacaocorreta" label="Higienização correta">
              <Select v-model="formEsocial.higienizacaocorreta" filterable>
                <Option value="S">Sim</Option>
                <Option value="N">Não</Option>
              </Select>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <ButtonGroup shape="circle">
              <Button type="primary" @click="tabname = 'equipamentospiepc'">
                <Icon type="ios-arrow-back"></Icon>
                Anterior
              </Button>
              <Button
                type="primary"
                @click="tabname = 'responsavelpelosregistros'"
              >
                Próximo
                <Icon type="ios-arrow-forward"></Icon>
              </Button>
            </ButtonGroup>
          </i-col>
        </row>
      </TabPane>
      <TabPane label="Responsável pelos registros ambientais" name="responsavelpelosregistros">
        <row :gutter="20">
          <i-col :sm="24">
              <label>Dados dos Responsáveis</label>
            </i-col>
            <i-col :sm="24">
              <Button @click="(showModal3 = true), (responsavel = {})">
                Adicionar Dados</Button
              >
            </i-col>
             <i-col :sm="24">
              <ListResponsavel
                v-model="responsaveis"
                @editar2="editar2"
                @deleteItem2="deleteItem2"
              />
            </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <Divider orientation="left"
              >Observações relativas aos registros ambientais:</Divider
            >
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <FormItem
              prop="obscomplementares"
              label="Observações complementares"
            >
              <Input
                type="text"
                v-model="formEsocial.obscomplementares"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <ButtonGroup shape="circle">
              <Button type="primary" @click="tabname = 'epiprotecaoindividual'">
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
        <FormS2240
          v-model="datainicio"
          @handleSubmit="handleSubmit"
          v-if="exibirForm"
        />
      </div>
      <div slot="footer"></div>
    </Modal>
    <Modal v-model="showModal2" width="760">
      <div style="text-align: center">
        <Form2S2240
          v-model="agentenocivo"
          @handleSubmit2="handleSubmit2"
          v-if="exibirForm2"
        />
      </div>
      <div slot="footer"></div>
    </Modal>
    <Modal v-model="showModal3" width="760">
      <div style="text-align: center">
        <Form3S2240
          v-model="responsavel"
          @handleSubmit3="handleSubmit3"
          v-if="exibirForm3"
        />
      </div>
      <div slot="footer"></div>
    </Modal>
     <Modal v-model="showModal4" width="760">
      <div style="text-align: center">
        <Form4S2240
          v-model="epi"
          @handleSubmit3="handleSubmit4"
          v-if="exibirForm4"
        />
      </div>
      <div slot="footer"></div>
    </Modal>
</div>
</template>

<script>
import { mask } from "vue-the-mask";
import ListData from "@/components/esocial/GridS2240";
import FormS2240 from "@/components/esocial/FormS2240";
import ListAgenteNocivo from "@/components/esocial/Grid2S2240";
import Form2S2240 from "@/components/esocial/Form2S2240";
import ListResponsavel from "@/components/esocial/Grid3S2240";
import Form3S2240 from "@/components/esocial/Form3S2240";
import ListEpi from "@/components/esocial/Grid4S2240";
import Form4S2240 from "@/components/esocial/Form4S2240";
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
      categoriasTrabalhador: {},
      codsituacaoTrabalhador: {},
      unidadedemedida: {},
      stringBtn: this.$route.params.id != undefined ? "Atualizar" : "Salvar",
      tabname: "identificacaodoempregador",
      formEsocial: {
        inscemp: "",
        name: "",
        cpf: "",
        codigo: "",
        data: "",
        locambiente: "",
        nomesetor: "",
        inscsetor: "",
        descatividade: "",
        codagentenocivo: "",
        cpfresponsavel: "",
        orgclasse: "",
        uforgao: "",
        nmrinscorgao: "",
      },
      ruleEsocial: {
        inscemp: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        name: [
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
        codigo: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        data: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        locambiente: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        nomesetor: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        inscsetor: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        descatividade: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        cpfresponsavel: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        orgclasse: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        uforgao: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        nmrinscorgao: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
      },
      datasinicio: [],
      showModal: false,
      exibirForm: true,
      datainicio: {},
      agentesnocivos: [],
      showModal2: false,
      exibirForm2: true,
      agentenocivo: {},
      responsaveis: [],
      showModal3: false,
      exibirForm3: true,
      responsavel: {},
      epis: [],
      showModal4: false,
      exibirForm4: true,
      epi: {},
    };   
  },
   components: {
    ListData,
    FormS2240,
    ListAgenteNocivo,
    Form2S2240,
    ListResponsavel,
    Form3S2240,
    ListEpi,
    Form4S2240,
  },
  methods: {
     handleSubmit(data) {
      this.exibirForm = false;
      if (data.id === undefined) {
        this.datasinicio.push({
          ...data,
          id: new Date().getTime(),
        });
      } else {
        this.datasinicio = this.datasinicio.filter((datainicio) => {
          if (data.id != data.id) {
            return data;
          } else {
            return datainicio;
          }
        });
      }

      this.exibirForm = true;
      this.showModal = false;
    },
    handleSubmit2(data) {
      this. exibirForm2 = false;
      if (data.id === undefined) {
        this.agentesnocivos.push({
          ...data,
          id: new Date().getTime(),
        });
      } else {
        this.agentesnocivos = this.agentesnocivos.filter((agentenocivo) => {
          if (data.id != agentenocivo.id) {
            return data;
          } else {
            return agentenocivo;
          }
        });
      }

      this.exibirForm2 = true;
      this.showModal2 = false;
    },
    handleSubmit3(data) {
      this. exibirForm3 = false;
      if (data.id === undefined) {
        this.responsaveis.push({
          ...data,
          id: new Date().getTime(),
        });
      } else {
        this.responsaveis = this.responsaveis.filter((responsavel) => {
          if (data.id != responsavel.id) {
            return data;
          } else {
            return responsavel;
          }
        });
      }

      this.exibirForm3 = true;
      this.showModal3 = false;
    },
    handleSubmit4(data) {
      this. exibirForm4 = false;
      if (data.id === undefined) {
        this.epis.push({
          ...data,
          id: new Date().getTime(),
        });
      } else {
        this.epis = this.epis.filter((epi) => {
          if (data.id != epi.id) {
            return data;
          } else {
            return epi;
          }
        });
      }

      this.exibirForm4 = true;
      this.showModal4 = false;
    },
    editar1(data) {
      console.log(data);
      this.exibirForm = false;
      this.datainicio = data;
      setTimeout(() => {
        this.showModal = true;
        this.exibirForm = true;
      }, 250);
    },
     deleteItem1(data) {
      this.datasinicio = this.datasinicio.filter((datainicio) => {
        if (datainicio.datainicio != data.datainicio) {
          return datainicio;
        }
      });   
    },
      editar(data) {
      console.log(data);
      this.exibirForm2 = false;
      this.agentenocivo = data;
      setTimeout(() => {
        this.showModal2 = true;
        this.exibirForm2 = true;
      }, 250);
    },
     deleteItem(data) {
      this.agentesnocivos = this.agentesnocivos.filter((agentenocivo) => {
        if (agentenocivo.codagentenocivo != data.codagentenocivo) {
          return agentenocivo;
        }
      });   
    },
     editar2(data) {
      console.log(data);
      this.exibirForm3 = false;
      this.responsavel = data;
      setTimeout(() => {
        this.showModal3 = true;
        this.exibirForm3 = true;
      }, 250);
    },
     deleteItem2(data) {
      this.responsaveis = this.responsaveis.filter((responsavel) => {
        if (responsavel.cpfresponsavel != data.cpfresponsavel) {
          return responsavel;
        }
      });
     },
      editar3(data) {
      console.log(data);
      this.exibirForm4 = false;
      this.epi = data;
      setTimeout(() => {
        this.showModal4 = true;
        this.exibirForm4 = true;
      }, 250);
    },
    deleteItem3(data) {
      this.epis = this.epis.filter((epi) => {
        if (epi.descepi != data.descepi) {
          return epi;
        }
      });
     },
     salvar() {
      this.$refs["formEsocial"].validate((valid) => {
        if (valid) {
          console.log(this.formEsocial);
          /*  this.$emit("handleSubmit", this.formEsocial); */
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
    async buscarCategoriadoTrabalhador() {
      const { data } = await axios.get("/esocial/tabela/01");
      this.categoriasTrabalhador = data.data.data;
    },
    async buscarUnidadeMedida() {
      const { data } = await axios.get("/esocial/atributos/unidade-medida");
      this.unidadedemedida = data.data.data;
    },
  },
  created() {
    this.buscarCategoriadoTrabalhador();
    this.buscarUnidadeMedida();

    this.formEsocial = this.value || {};
    this.formEsocial.cnpj = this.value.cnpjFormat;
    this.form2Esocial = this.value || {};
    this.form3Esocial = this.value || {};
    this.form4Esocial = this.value || {};
  },
};
</script>
