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
              <FormItem prop="idinscricaoempresa" label="Inscrição da Empresa">
                <Select v-model="formEsocial.idinscricaoempresa" filterable>
                  <Option
                    v-for="inscricaoempresa in inscricaodaempresa"
                    :value="inscricaoempresa.id"
                    :key="inscricaoempresa.id"
                    >{{ inscricaoempresa.name }} -
                    {{ inscricaoempresa.cnpjFormat }}</Option
                  >
                </Select>
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
              <Button @click="(showModalDadosData = true), (datainicio = {})">
                Adicionar Data</Button
              >
            </i-col>
            <i-col :sm="24">
              <TiGridDatas
                v-model="datasinicio"
                @editarItemData="editarItemData"
                @deleteItemData="deleteItemData"
                v-if="exibirGridDataInicio"
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
                  <Option :value="1"
                    >Estabelecimento do próprio empregador</Option
                  >
                  <Option :value="2">Estabelecimento de terceiros</Option>
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
              <Button
                @click="(showModalAgenteNocivo = true), (agentenocivo = {})"
              >
                Adicionar Informações</Button
              >
            </i-col>
            <i-col :sm="24">
              <TiGridAgentes
                v-if="exibirGridAgenteNocivo"
                v-model="agentesnocivos"
                @editarItemAgenteNocivo="editarItemAgenteNocivo"
                @deleteItemAgenteNocivo="deleteItemAgenteNocivo"
              />
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="8">
              <FormItem prop="limitetolerancia" label="Limite de tolerância">
                <Input
                  type="number"
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
                prop="equipamentosproecaocoletiva"
                label="Utiliza Equipamentos de Proteção Coletiva(EPC)"
              >
                <Select
                  v-model="formEsocial.equipamentosproecaocoletiva"
                  filterable
                >
                  <Option :value="0">Não se aplica</Option>
                  <Option :value="1">Não implementa</Option>
                  <Option :value="2">Implementa</Option>
                </Select>
              </FormItem>
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="24">
              <FormItem
                prop="epcsprotecaoeficazes"
                label="Os EPCS são eficazes na proteção do trabalhador"
              >
                <Input
                  type="text"
                  v-model="formEsocial.epcsprotecaoeficazes"
                  placeholder=" "
                />
              </FormItem>
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="24">
              <FormItem
                prop="utilizaequipamentosindividual"
                label="Utiliza Equipamentos de Proteção Individual(EPI)"
              >
                <Select
                  v-model="formEsocial.utilizaequipamentosindividual"
                  filterable
                >
                  <Option :value="0">Não se aplica</Option>
                  <Option :value="1">Não utilizado</Option>
                  <Option :value="2">Utilizado</Option>
                </Select>
              </FormItem>
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="24">
              <FormItem
                prop="episprotecaoeficazes"
                label="Os EPIS são eficazes na proteção do trabalhador"
              >
                <Input
                  type="text"
                  v-model="formEsocial.episprotecaoeficazes"
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
                <Button
                  type="primary"
                  @click="tabname = 'epiprotecaoindividual'"
                >
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
              <FormItem prop="epis" label="EPI">
                <Select v-model="formEsocial.epis" multiple filterable>
                  <Option
                    v-for="documento in dadosEpis"
                    :value="documento.id"
                    :key="documento.id"
                    >{{ documento.codepi }} - {{ documento.descepi }}</Option
                  >
                </Select>
              </FormItem>
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
              <FormItem prop="boascondicoesdeuso" label="Boas Condições de Uso">
                <Select v-model="formEsocial.boascondicoesdeuso" filterable>
                  <Option value="S">Sim</Option>
                  <Option value="N">Não</Option>
                </Select>
              </FormItem>
            </i-col>
          </row>
          <row :gutter="20">
            <i-col :sm="12">
              <FormItem
                prop="usoininterruptoepi"
                label="Uso ininterrupto do EPI"
              >
                <Select v-model="formEsocial.usoininterruptoepi" filterable>
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
        <TabPane
          label="Responsável pelos registros ambientais"
          name="responsavelpelosregistros"
        >
          <row :gutter="20">
            <i-col :sm="24">
              <label>Dados dos Responsáveis</label>
            </i-col>
            <i-col :sm="24">
              <Button
                @click="(showModalDadosResponsaveis = true), (responsavel = {})"
              >
                Adicionar Dados</Button
              >
            </i-col>
            <i-col :sm="24">
              <TiGridResponsaveis
                v-model="responsaveis"
                @editarItemResponsavel="editarItemResponsavel"
                @deleteItemResponsavel="deleteItemResponsavel"
                v-if="exibirGridResponsavel"
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
                <Button
                  type="primary"
                  @click="tabname = 'epiprotecaoindividual'"
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
      v-model="showModalDadosData"
      width="500"
      :footer-hide="true"
      title="Data de Início nas Condições de Risco"
    >
      <div style="text-align: center">
        <TiFormDatas
          v-model="datainicio"
          @adicionarDadosDatas="adicionarDadosDatas"
          @cancelarDadosDatas="cancelarDadosDatas"
          v-if="exibirFormData"
        />
      </div>
      <div slot="footer"></div>
    </Modal>
    <Modal
      v-model="showModalAgenteNocivo"
      width="760"
      title="Dados do Agente Nocivo"
      :footer-hide="true"
    >
      <div style="text-align: center">
        <TiFormAgentes
          v-model="agentenocivo"
          @adicionarDadosAgentesNocivos="adicionarDadosAgentesNocivos"
          @cancelarDadosAgenteNocivo="cancelarDadosAgenteNocivo"
          v-if="exibirFormAgenteNocivo"
        />
      </div>
      <div slot="footer"></div>
    </Modal>
    <Modal
      v-model="showModalDadosResponsaveis"
      width="760"
      title="Dados dos Responsáveis"
      :footer-hide="true"
    >
      <div style="text-align: center">
        <TiFormReponsaveis
          v-model="responsavel"
          @adicionarDadosResponsaveis="adicionarDadosResponsaveis"
          @cancelarDadosResponsaveis="cancelarDadosResponsaveis"
          v-if="exibirFormDadosResponsaveis"
        />
      </div>
      <div slot="footer"></div>
    </Modal>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import TiGridDatas from "@/components/esocial/s2240/GridDatas";
import TiFormDatas from "@/components/esocial/s2240/FormData";
import TiGridAgentes from "@/components/esocial/s2240/GridDadosAgenteNocivo";
import TiFormAgentes from "@/components/esocial/s2240/FormDadosAgenteNocivo";
import TiGridResponsaveis from "@/components/esocial/s2240/GridDadosResponsaveis";
import TiFormReponsaveis from "@/components/esocial/s2240/FormDadosReponsaveis";
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
      idCadastroS2240: this.$route.params.id,
      idCadastroS2240Data: this.$route.params.id,
      dadosEpis: {},
      categoriasTrabalhador: {},
      codsituacaoTrabalhador: {},
      unidadedemedida: {},
      inscricaodaempresa: {},
      stringBtn: this.$route.params.id != undefined ? "Atualizar" : "Salvar",
      tabname: "identificacaodoempregador",
      formEsocial: {},
      ruleEsocial: {
        idinscricaoempresa: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        nameempregado: [
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
        equipamentosproecaocoletiva: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        utilizaequipamentosindividual: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        medidaprotecao: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        boascondicoesdeuso: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        usoininterruptoepi: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        validaderespeitada: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        periodicidadedetroca: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        higienizacaocorreta: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        obscomplementares: [
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
      showModalDadosData: false,
      exibirFormData: true,
      exibirGridDataInicio: true,
      datainicio: {},
      agentesnocivos: [],
      agentesnocivosOld: [],
      showModalAgenteNocivo: false,
      exibirFormAgenteNocivo: true,
      exibirGridAgenteNocivo: true,
      agentenocivo: {},
      responsaveis: [],
      showModalDadosResponsaveis: false,
      exibirFormDadosResponsaveis: true,
      exibirGridResponsavel: true,
      responsavel: {},
    };
  },
  components: {
    TiGridDatas,
    TiFormDatas,
    TiGridAgentes,
    TiFormAgentes,
    TiGridResponsaveis,
    TiFormReponsaveis,
  },
  watch: {
    value(newValue) {
      this.preencherDados(newValue);
    },
    datainicio() {
      this.exibirGridDataInicio = false;
      setTimeout(() => {
        this.exibirGridDataInicio = true;
      }, 100);
    },
    agentenocivo() {
      this.exibirGridAgenteNocivo = false;
      setTimeout(() => {
        this.exibirGridAgenteNocivo = true;
      }, 100);
    },
    responsavel() {
      this.exibirGridResponsavel = false;
      setTimeout(() => {
        this.exibirGridResponsavel = true;
      }, 100);
    },
  },
  methods: {
    preencherDados(newValue) {
      this.formEsocial = newValue || {};
      const datasInicio = this.formEsocial.datasinicio;
      this.datasinicio = datasInicio !== undefined ? datasInicio : [];

      const agentesNocivos = this.formEsocial.agentesnocivos;
      this.agentesnocivos = agentesNocivos != undefined ? agentesNocivos : [];

      this.formEsocial.epis = (newValue.epis || []).map((epi) => epi.idsepi);

      const responsaveis = this.formEsocial.responsaveis;
      this.responsaveis = responsaveis != undefined ? responsaveis : [];
    },
    async salvarAtualizarCadastro() {
      console.log(this.formEsocial);
      this.$refs["formEsocial"].validate(async (valid) => {
        const validate = valid && this.datasinicio.length > 0;
        if (validate) {
          this.formEsocial.datasinicio = this.datasinicio;
          this.formEsocial.agentesnocivos = this.agentesnocivos;
          this.formEsocial.responsaveis = this.responsaveis;
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
    adicionarDadosDatas(data) {
      if (
        this.datainicio.editar != undefined &&
        this.datainicio.editar === true
      ) {
        this.datasinicio[this.datainicio.index] = this.datainicio;
      } else {
        this.datasinicio.push({
          ...data,
        });
      }
      this.formEsocial.datasinicio = this.datasinicio;
      this.exibirFormData = true;
      this.showModalDadosData = false;
      this.datainicio = {};
    },
    adicionarDadosAgentesNocivos(data) {
      if (
        this.agentenocivo.editar != undefined &&
        this.agentenocivo.editar === true
      ) {
        this.agentesnocivos[this.agentenocivo.index] = this.agentenocivo;
      } else {
        this.agentesnocivos.push({
          ...data,
        });
      }
      this.formEsocial.agentesnocivos = this.agentesnocivos;
      this.exibirFormAgenteNocivo = true;
      this.showModalAgenteNocivo = false;
      this.agentenocivo = {};
    },
    editarItemAgenteNocivo(data) {
      this.exibirFormAgenteNocivo = false;
      this.agentenocivo = { ...data.key, editar: true, index: data.rowIndex };
      setTimeout(() => {
        this.showModalAgenteNocivo = true;
        this.exibirFormAgenteNocivo = true;
      }, 250);
    },
    cancelarDadosAgenteNocivo() {
      this.agentenocivo = {};
      this.exibirFormAgenteNocivo = true;
      this.showModalAgenteNocivo = false;
    },
    adicionarDadosResponsaveis(data) {
      if (
        this.responsavel.editar != undefined &&
        this.responsavel.editar === true
      ) {
        this.responsaveis[this.responsavel.index] = this.responsavel;
      } else {
        this.responsaveis.push({
          ...data,
        });
      }
      this.formEsocial.responsaveis = this.responsaveis;
      this.exibirFormDadosResponsaveis = true;
      this.showModalDadosResponsaveis = false;
      this.responsavel = {};
    },
    cancelarDadosDatas() {
      this.datainicio = {};
      this.exibirFormData = true;
      this.showModalDadosData = false;
    },
    cancelarDadosResponsaveis() {
      this.responsavel = {};
      this.exibirFormDadosResponsaveis = true;
      this.showModalDadosResponsaveis = false;
    },
    editarItemData(data) {
      this.exibirFormData = false;
      this.datainicio = { ...data.key, editar: true, index: data.rowIndex };
      setTimeout(() => {
        this.showModalDadosData = true;
        this.exibirFormData = true;
      }, 250);
    },
    editarItemResponsavel(data) {
      this.exibirFormDadosResponsaveis = false;
      this.responsavel = { ...data.key, editar: true, index: data.rowIndex };
      setTimeout(() => {
        this.showModalDadosResponsaveis = true;
        this.exibirFormDadosResponsaveis = true;
      }, 250);
    },
    deleteItemData(data) {
      const datasinicio = this.datasinicio;
      this.datasinicio = datasinicio.filter((element, index) => {
        return data.rowIndex !== index;
      });
    },
    deleteItemAgenteNocivo(data) {
      const agentesnocivos = this.agentesnocivos;
      this.agentesnocivos = agentesnocivos.filter((element, index) => {
        return data.rowIndex !== index;
      });
    },
    deleteItemResponsavel(data) {
      const responsaveis = this.responsaveis;
      this.responsaveis = responsaveis.filter((element, index) => {
        return data.rowIndex !== index;
      });
    },
    deleteItemEpi(data) {
      const epis = this.epis;
      this.epis = epis.filter((element, index) => {
        return data.rowIndex !== index;
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
    async buscarInscricaoDaEmpresa() {
      const { data } = await axios.get("/company/all");
      this.inscricaodaempresa = data.data;
    },
    async buscarDadosEpi() {
      const { data } = await axios.get("/esocial/epi/");
      this.dadosEpis = data.data;
    },
  },
  created() {
    /*   this.datasinicio = []; */
    this.buscarCategoriadoTrabalhador();
    this.buscarUnidadeMedida();
    this.buscarInscricaoDaEmpresa();
    this.buscarDadosEpi();
    this.preencherDados(this.value);
  },
};
</script>
