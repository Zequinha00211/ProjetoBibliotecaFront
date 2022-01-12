<template>
  <Form ref="formEsocial" :model="formEsocial" :rules="ruleEsocial" inline>
    <Tabs :value="tabname">
      <TabPane
        label="Identificação do Empregador"
        name="identificacaodoempregador"
      >
        <row :gutter="20">
          <i-col :sm="12">
            <FormItem prop="inscricaoempresa" label="Inscrição da Empresa">
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
            <FormItem prop="matriculaempregado" label="Matricula do Empregado">
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
                  :value="
                    codigodecategoriatrabalhador.codigo
                  "
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
                @click="tabname = 'comunicacaodeacidentedetrabalhor'"
              >
                Próximo
                <Icon type="ios-arrow-forward"></Icon>
              </Button>
            </ButtonGroup>
          </i-col>
        </row>
      </TabPane>
      <TabPane
        label="Comunicação de Acidente de Trabalho(CAT)"
        name="comunicacaodeacidentedetrabalhor"
      >
        <row :gutter="20">
          <i-col :sm="5">
            <FormItem prop="datadoacidente" label="Data do Acidente">
              <DatePicker
                type="date"
                format="dd/MM/yyyy"
                v-model="formEsocial.datadoacidente"
                style="width: 100%"
              ></DatePicker>
            </FormItem>
          </i-col>
          <i-col :sm="14">
            <FormItem prop="tipodoacidente" label="Tipo do Acidente">
              <Select v-model="formEsocial.tipodoacidente" filterable>
                <Option
                  v-for="tipodoacidente in tipoacidentetrabalho"
                  :value="tipodoacidente.codigo"
                  :key="tipodoacidente.id"
                  >{{ tipodoacidente.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="5">
            <FormItem prop="horadoacidente" label="Hora do Acidente">
              <TimePicker
                format="HH:mm"
                v-model="formEsocial.horadoacidente"
                style="width: 100%"
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="5">
            <FormItem
              prop="horastrabalhadasantes"
              label="Horas Trabalhadas Antes"
            >
              <TimePicker
                format="HH:mm"
                v-model="formEsocial.horastrabalhadasantes"
                style="width: 100%"
              />
            </FormItem>
          </i-col>
          <i-col :sm="10">
            <FormItem prop="tipocat" label="Tipo de CAT">
              <Select v-model="formEsocial.tipocat" filterable>
                <Option
                  v-for="tipocat in tipocat"
                  :value="tipocat.codigo"
                  :key="tipocat.id"
                >
                  {{ tipocat.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="5">
            <FormItem prop="houveobito" label="Houve Obito">
              <Select v-model="formEsocial.houveobito" filterable>
                <Option value="S">Sim</Option>
                <Option value="N">Não</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="4">
            <FormItem prop="datadoobito" label="Data do Óbito">
              <DatePicker
                type="date"
                format="dd/MM/yyyy"
                v-model="formEsocial.datadoobito"
                style="width: 100%"
              ></DatePicker>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="8">
            <FormItem
              prop="comunicacaoaautoridade"
              label="Comunicação á autoridade"
            >
              <Input
                type="text"
                v-model="formEsocial.comunicacaoaautoridade"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="iniciativacat" label="Iniciativa da CAT">
              <Select v-model="formEsocial.iniciativacat" filterable>
                <Option
                  v-for="iniciativacat in iniciativacat"
                  :value="iniciativacat.codigo"
                  :key="iniciativacat.id"
                  >{{ iniciativacat.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem
              prop="codigodasituacaogeradoradoacidente"
              label="Código da Situação Geradora do Acidente"
            >
              <Select
                v-model="formEsocial.codigodasituacaogeradoradoacidente"
                filterable
              >
                <Option
                  v-for="codigodasituacaogeradoradoacidente in codsituacaoTrabalhador"
                  :value="codigodasituacaogeradoradoacidente.codigo"
                  :key="codigodasituacaogeradoradoacidente.id"
                  >{{ codigodasituacaogeradoradoacidente.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <FormItem prop="observacoes" label="Observações">
              <Input
                type="text"
                v-model="formEsocial.observacoes"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="24">
            <ButtonGroup shape="circle">
              <Button
                type="primary"
                @click="tabname = 'identificacaodoempregador'"
              >
                <Icon type="ios-arrow-back"></Icon>
                Anterior
              </Button>
              <Button type="primary" @click="tabname = 'localdoacidente'">
                Próximo
                <Icon type="ios-arrow-forward"></Icon>
              </Button>
            </ButtonGroup>
          </i-col>
        </row>
      </TabPane>
      <TabPane label="Local do Acidente" name="localdoacidente">
        <row :gutter="20">
          <i-col :sm="4">
            <FormItem prop="tipodolocal" label="Tipo do Local">
              <Input
                type="text"
                v-model="formEsocial.tipodolocal"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="desclocal" label="Descrição do Local">
              <Input
                type="text"
                v-model="formEsocial.desclocal"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="4">
            <FormItem prop="pais" label="País">
              <Select v-model="formEsocial.pais" filterable>
                <Option
                  v-for="pais in paisdoacidente"
                  :value="pais.codigo"
                  :key="pais.id"
                  >{{ pais.nome }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="4">
            <FormItem prop="cep" label="CEP">
              <Input
                type="text"
                v-model="formEsocial.cep"
                placeholder=" "
                v-mask="`#####-###`"
              />
            </FormItem>
          </i-col>
          <i-col :sm="4">
            <FormItem prop="uf" label="UF">
              <Input type="text" v-model="formEsocial.uf" placeholder=" " />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="8">
            <FormItem prop="tipodologradouro" label="Tipo do Logradouro">
              <Select v-model="formEsocial.tipodologradouro" filterable>
                <Option
                  v-for="tipodologradouro in tipodeLogradouro"
                  :value="tipodologradouro.codigo"
                  :key="tipodologradouro.id"
                  >{{ tipodologradouro.codigo }} -
                  {{ tipodologradouro.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="numerodologradouro" label="Número do Logradouro">
              <Input
                type="text"
                v-model="formEsocial.numerodologradouro"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="bairro" label="Bairro">
              <Input type="text" v-model="formEsocial.bairro" placeholder=" " />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="6">
            <FormItem prop="desclogradouro" label="Descrição do Logradouro">
              <Input
                type="text"
                v-model="formEsocial.desclogradouro"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="6">
            <FormItem prop="codmunicipio" label="Código do Município">
              <Input
                type="text"
                v-model="formEsocial.codmunicipio"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="6">
            <FormItem prop="codpostal" label="Código Postal">
              <Input
                type="text"
                v-model="formEsocial.codpostal"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="6">
            <FormItem
              prop="complementologradouro"
              label="Complemento do Logradouro"
            >
              <Input
                type="text"
                v-model="formEsocial.complementologradouro"
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
                @click="tabname = 'comunicacaodeacidentedetrabalhor'"
              >
                <Icon type="ios-arrow-back"></Icon>
                Anterior
              </Button>
              <Button
                type="primary"
                @click="tabname = 'identificalocaldoacidente'"
              >
                Próximo
                <Icon type="ios-arrow-forward"></Icon>
              </Button>
            </ButtonGroup>
          </i-col>
        </row>
      </TabPane>
      <TabPane
        label="Identificação do Local do Acidente"
        name="identificalocaldoacidente"
      >
        <row :gutter="20">
          <i-col :sm="12">
            <FormItem prop="tipoinsclocal" label="Tipo de Inscrição do Local">
              <Select v-model="formEsocial.tipoinsclocal" filterable>
                <Option
                  v-for="tipoinsclocal in tipolocaldoAcidente"
                  :value="tipoinsclocal.codigo"
                  :key="tipoinsclocal.id"
                  >{{ tipoinsclocal.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="nmrinsc" label="Número de Inscrição">
              <Input
                type="text"
                v-model="formEsocial.nmrinsc"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <Divider orientation="left"
              >Parte atingida pelo acidente de trabalho:</Divider
            >
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="12">
            <FormItem
              prop="codigoparteatingida"
              label="Código da parte Atingida"
            >
              <Select v-model="formEsocial.codigoparteatingida" filterable>
                <Option
                  v-for="codigoparteatingida in parteatingida"
                  :value="codigoparteatingida.codigo"
                  :key="codigoparteatingida.id"
                  >{{ codigoparteatingida.id }} -
                  {{ codigoparteatingida.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem
              prop="lateralidadepartesatingidas"
              label="Lateralidade Das Partes Atingidas"
            >
              <Select
                v-model="formEsocial.lateralidadepartesatingidas"
                filterable
              >
                <Option
                  v-for="lateralidadepartesatingidas in lateralidadepartesatingidas"
                  :value="lateralidadepartesatingidas.codigo"
                  :key="lateralidadepartesatingidas.id"
                  >{{ lateralidadepartesatingidas.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <Divider orientation="left"
              >Agente causador do acidente de trabalho:</Divider
            >
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <FormItem
              prop="codagentecausadoracidente"
              label="Código do agente causador do acidente"
            >
              <Input
                type="text"
                v-model="formEsocial.codagentecausadoracidente"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <i-col :sm="24">
          <ButtonGroup shape="circle">
            <Button type="primary" @click="tabname = 'localdoacidente'">
              <Icon type="ios-arrow-back"></Icon>
              Anterior
            </Button>
            <Button type="primary" @click="tabname = 'atestadomedico'">
              Próximo
              <Icon type="ios-arrow-forward"></Icon>
            </Button>
          </ButtonGroup>
        </i-col>
      </TabPane>
      <TabPane label="Atestado Médico" name="atestadomedico">
        <row :gutter="20">
          <i-col :sm="5">
            <FormItem prop="datadoatendimento" label="Data do Atendimento">
              <DatePicker
                type="date"
                format="dd/MM/yyyy"
                v-model="formEsocial.datadoatendimento"
                style="width: 100%"
              ></DatePicker>
            </FormItem>
          </i-col>
          <i-col :sm="5">
            <FormItem prop="horarioatendimento" label="Horário do Atendimento">
              <TimePicker
                format="HH:mm"
                v-model="formEsocial.horarioatendimento"
                style="width: 100%"
              />
            </FormItem>
          </i-col>
          <i-col :sm="14">
            <FormItem prop="namedomedico" label="Nome do Médico">
              <Input
                type="text"
                v-model="formEsocial.namedomedico"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="5">
            <FormItem prop="houveinternacao" label="Houve Internação">
              <Select v-model="formEsocial.houveinternacao" filterable>
                <Option value="S">Sim</Option>
                <Option value="N">Não</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="5">
            <FormItem prop="duracaodotratamento" label="Duração do Tratamento">
              <TimePicker
                format="HH:mm"
                v-model="formEsocial.duracaodotratamento"
                style="width: 100%"
              />
            </FormItem>
          </i-col>
          <i-col :sm="7">
            <FormItem prop="orgaodeclasse" label="Orgão de Classe">
              <Select v-model="formEsocial.orgaodeclasse" filterable>
                <Option
                  v-for="orgaodeclasse in orgaoclasse"
                  :value="orgaodeclasse.codigo"
                  :key="orgaodeclasse.id"
                >
                  {{ orgaodeclasse.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="7">
            <FormItem prop="ufdoorgaoclasse" label="UF do Orgão de Classe">
              <Input
                type="text"
                v-model="formEsocial.ufdoorgaoclasse"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="5">
            <FormItem prop="houveafastamento" label="Houve Afastamento">
              <Select v-model="formEsocial.houveafastamento" filterable>
                <Option value="S">Sim</Option>
                <Option value="N">Não</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="5">
            <FormItem prop="desclesao" label="Descrição da Lesão">
              <Select v-model="formEsocial.desclesao" filterable>
                <Option
                  v-for="desclesao in descricaolesao"
                  :value="desclesao.codigo"
                  :key="desclesao.id"
                  >{{ desclesao.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="14">
            <FormItem
              prop="nmrinscdoorgaodeclasse"
              label="Número de Inscrição do Orgão de Classe"
            >
              <Input
                type="text"
                v-model="formEsocial.nmrinscdoorgaodeclasse"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="12">
            <FormItem
              prop="desccomplementardalesao"
              label="Descrição complementar da Lesão"
            >
              <Input
                type="text"
                v-model="formEsocial.desccomplementardalesao"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem
              prop="nmrdoreciboultimacat"
              label="Número do Recibo da última CAT"
            >
              <Input
                type="text"
                v-model="formEsocial.nmrdoreciboultimacat"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="8">
            <FormItem prop="diagnosticoprovavel" label="Diagnóstico Provável">
              <Input
                type="text"
                v-model="formEsocial.diagnosticoprovavel"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="coddatabelacid" label="Código da Tabela CID">
              <Input
                type="text"
                v-model="formEsocial.coddatabelacid"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="observacoes2" label="Observações">
              <Input
                type="text"
                v-model="formEsocial.observacoes2"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="24">
            <ButtonGroup shape="circle">
              <Button
                type="primary"
                @click="tabname = 'identificalocaldoacidente'"
              >
                <Icon type="ios-arrow-back"></Icon>
                Anterior
              </Button>
              <Button type="primary" @click="salvar()">{{ stringBtn }}</Button>
            </ButtonGroup>
          </i-col>
        </row>
      </TabPane>
    </Tabs>
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
      categoriasTrabalhador: {},
      codsituacaoTrabalhador: {},
      tipolocaldoAcidente: {},
      tipodeLogradouro: {},
      paisdoacidente: {},
      parteatingida: {},
      descricaolesao: {},
      tipoacidentetrabalho: {},
      iniciativacat: {},
      orgaoclasse: {},
      tipocat: {},
      lateralidadepartesatingidas: {},
      stringBtn: this.$route.params.id != undefined ? "Atualizar" : "Salvar",
      tabname: "identificacaodoempregador",
      formEsocial: {},
   /*    formEsocial: {
        inscricaoempresa: "",
        nameempregado: "",
        cpfempregado: "",
        matriculaempregado: "",
        codigodecategoriatrabalhador: "",
        datadoacidente: "",
        tipodoacidente: "",
        horadoacidente: "",
        horastrabalhadasantes: "",
        tipocat: "",
        houveobito: "",
        datadoobito: "",
        comunicacaoaautoridade: "",
        iniciativacat: "",
        codigodasituacaogeradoradoacidente: "",
        tipodolocal: "",
        desclocal: "",
        observacoes: "",
        pais: "",
        cep: "",
        tipodologradouro: "",
        numerodologradouro: "",
        bairro: "",
        desclogradouroradouro: "",
        codmunicipionicipio: "",
        codpostal: "",
        complementologradouroradouro: "",
        uf: "",
        tipoinsclocal: "",
        nmrinsc: "",
        codigoparteatingida: "",
        lateralidade: "",
        codagentecausadoracidente: "",
        datadoatendimento: "",
        horarioatendimento: "",
        namedomedico: "",
        houveinternacao: "",
        duracaodotratamento: "",
        orgaodeclasse: "",
        ufdoorgaoclasse: "",
        houveafastamento: "",
        desclesao: "",
        nmrinscdoorgaodeclasse: "",
        desccomplementardalesao: "",
        nmrdoreciboultimacat: "",
        diagnosticoprovavel: "",
        coddatabelacid: "",
      }, */
      ruleEsocial: {
        inscricaoempresa: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
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
        matriculaempregado: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        datadoacidente: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        tipodoacidente: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        horadoacidente: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        horastrabalhadasantes: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        tipocat: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        houveobito: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        datadoobito: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        comunicacaoaautoridade: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        iniciativacat: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        codigodasituacaogeradoradoacidente: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        tipodolocal: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        pais: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        cep: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        numerodologradouro: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        desclogradouro: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        codpostal: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        uf: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        codmunicipionicipio: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        tipoinsclocal: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        nmrinsc: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        codigoparteatingida: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        lateralidadepartesatingidas: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        codagentecausadoracidente: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        datadoatendimento: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        horarioatendimento: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        namedomedico: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        houveinternacao: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        duracaodotratamento: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        orgaodeclasse: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        ufdoorgaoclasse: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        houveafastamento: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        desclesao: [
          {
            required: true,
            message: "Campo Obrigatório.",
          },
        ],
        nmrinscdoorgaodeclasse: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        nmrdoreciboultimacat: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        coddatabelacid: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
      },
    };
  },
  watch: {
    value(newValue) {
      this.formEsocial = newValue || {};
    },
  },
  methods: {
    salvar() {
      this.$refs["formEsocial"].validate((valid) => {
        if (valid) {
          console.log(this.formEsocial);
          this.$emit("handleSubmit", this.formEsocial);
        } else {
          this.$Message.error("Insira todos os campos!");
        }
      });
    },
    async buscarCategoriadoTrabalhador() {
      const { data } = await axios.get("/esocial/tabela/01");
      this.categoriasTrabalhador = data.data.data;
    },
    async buscarCodigoSituacaodoTrabalhador() {
      const { data } = await axios.get("/esocial/tabela/15");
      this.codsituacaoTrabalhador = data.data.data;
    },
    async buscarTipodeInscricaoLocaldoAcidente() {
      const { data } = await axios.get("/esocial/tabela/05");
      this.tipolocaldoAcidente = data.data.data;
    },
    async buscartipodeLogradouro() {
      const { data } = await axios.get("/esocial/tabela/20");
      this.tipodeLogradouro = data.data.data;
    },
    async buscarPais() {
      const { data } = await axios.get("/esocial/tabela/06");
      this.paisdoacidente = data.data.data;
    },
    async buscarParteAtingida() {
      const { data } = await axios.get("/esocial/tabela/13");
      this.parteatingida = data.data.data;
    },
    async buscarDescricaoLesao() {
      const { data } = await axios.get("/esocial/tabela/17");
      this.descricaolesao = data.data.data;
    },
    async buscarTipoAcidenteTrabalho() {
      const { data } = await axios.get(
        "/esocial/atributos/tipo-acidente-trabalho"
      );
      this.tipoacidentetrabalho = data.data.data;
    },
    async buscarIniciativaCat() {
      const { data } = await axios.get("/esocial/atributos/iniciativa-cat");
      this.iniciativacat = data.data.data;
    },
    async buscarOrgaodeClasse() {
      const { data } = await axios.get("/esocial/atributos/orgao-classe");
      this.orgaoclasse = data.data.data;
    },
    async buscarTipodeCat() {
      const { data } = await axios.get("/esocial/atributos/tipo-cat");
      this.tipocat = data.data.data;
    },
    async buscarLateralidadePartesAtingidas() {
      const { data } = await axios.get(
        "/esocial/atributos/lateralidade-partes-atingidas"
      );
      this.lateralidadepartesatingidas = data.data.data;
    },
  },
  created() {
    this.buscarCategoriadoTrabalhador();
    this.buscarCodigoSituacaodoTrabalhador();
    this.buscarTipodeInscricaoLocaldoAcidente();
    this.buscartipodeLogradouro();
    this.buscarPais();
    this.buscarParteAtingida();
    this.buscarDescricaoLesao();
    this.buscarTipoAcidenteTrabalho();
    this.buscarIniciativaCat();
    this.buscarOrgaodeClasse();
    this.buscarTipodeCat();
    this.buscarLateralidadePartesAtingidas();

    this.formEsocial = this.value || {};
  },
};
</script>
