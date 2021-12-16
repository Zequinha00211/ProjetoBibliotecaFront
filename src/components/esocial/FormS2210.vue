<template>
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
                  >{{ categoria.group.descricao }} - {{ categoria.descricao }}</Option
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
            <FormItem prop="data" label="Data do Acidente">
              <DatePicker
                type="date"
                format="DD/MM/yyyy"
                v-model="formEsocial.data"
                style="width: 100%"
              ></DatePicker>
            </FormItem>
          </i-col>
          <i-col :sm="14">
            <FormItem prop="tipo" label="Tipo do Acidente">
              <Select v-model="formEsocial.tipo" filterable>
                <Option
                  v-for="tipo in tipoacidentetrabalho"
                  :value="tipo.codigo"
                  :key="tipo.id"
                  >{{ tipo.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="5">
            <FormItem prop="hora" label="Hora do Acidente">
              <TimePicker
                format="HH:mm"
                v-model="formEsocial.hora"
                style="width: 100%"
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="5">
            <FormItem prop="horatrab" label="Horas Trabalhadas Antes">
              <TimePicker
                format="HH:mm"
                v-model="formEsocial.horatrab"
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
                  > {{ tipocat.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="5">
            <FormItem prop="ho" label="Houve Obito">
              <Select v-model="formEsocial.ho" filterable>
                  <Option value="S">Sim</Option>
                  <Option value="N">Não</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="4">
            <FormItem prop="datobi" label="Data do Óbito">
              <DatePicker
                type="date"
                format="DD/MM/yyyy"
                v-model="formEsocial.datobi"
                style="width: 100%"
              ></DatePicker>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="8">
            <FormItem prop="comunicacao" label="Comunicação á autoridade">
              <Input
                type="text"
                v-model="formEsocial.comunicacao"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="iniciativa" label="Iniciativa da CAT">
              <Input
                type="text"
                v-model="formEsocial.iniciativa"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem
              prop="codsituacao"
              label="Código da Situação Geradora do Acidente"
            >
            <Select v-model="formEsocial.codsituacao" filterable>
                <Option
                  v-for="codsituacao in codsituacaoTrabalhador"
                  :value="codsituacao.codigo"
                  :key="codsituacao.id"
                  >{{ codsituacao.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="24">
            <FormItem prop="obs" label="Observações">
              <Input type="text" v-model="formEsocial.obs" placeholder=" " />
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
            <FormItem prop="tipoloc" label="Tipo do Local">
              <Input
                type="text"
                v-model="formEsocial.tipoloc"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="descloc" label="Descrição do Local">
              <Input
                type="text"
                v-model="formEsocial.descloc"
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
              <Input type="text" v-model="formEsocial.cep" placeholder=" " />
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
            <FormItem prop="tipolog" label="Tipo do Logradouro">
              <Select v-model="formEsocial.tipolog" filterable>
                <Option
                  v-for="tipolog in tipodeLogradouro"
                  :value="tipolog.codigo"
                  :key="tipolog.id"
                  >{{tipolog.codigo}} - {{ tipolog.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="numerolog" label="Número do Logradouro">
              <Input
                type="text"
                v-model="formEsocial.numerolog"
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
            <FormItem prop="desclog" label="Descrição do Logradouro">
              <Input
                type="text"
                v-model="formEsocial.desclog"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="6">
            <FormItem prop="codmu" label="Código do Município">
              <Input type="text" v-model="formEsocial.codmu" placeholder=" " />
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
            <FormItem prop="complementolog" label="Complemento do Logradouro">
              <Input
                type="text"
                v-model="formEsocial.complementolog"
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
            <FormItem prop="numinsc" label="Número de Inscrição">
              <Input
                type="text"
                v-model="formEsocial.numinsc"
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
            <FormItem prop="codatingida" label="Código da parte Atingida">
              <Select v-model="formEsocial.codatingida" filterable>
                <Option
                  v-for="codatingida in parteatingida"
                  :value="codatingida.codigo"
                  :key="codatingida.id"
                  >{{ codatingida.id }} - {{ codatingida.descricao }}</Option
                >
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="lateralidadepartesatingidas" label="Lateralidade Das Partes Atingidas">
              <Select v-model="formEsocial.lateralidadepartesatingidas" filterable>
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
              prop="codagente"
              label="Código do agente causador do acidente"
            >
              <Input
                type="text"
                v-model="formEsocial.codagente"
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
            <FormItem prop="dataatendimento" label="Data do Atendimento">
              <DatePicker
                type="date"
                format="DD/MM/yyyy"
                v-model="formEsocial.dataatendimento"
                style="width: 100%"
              ></DatePicker>
            </FormItem>
          </i-col>
          <i-col :sm="5">
            <FormItem prop="horaatendimento" label="Horário do Atendimento">
              <TimePicker
                format="HH:mm"
                v-model="formEsocial.horaatendimento"
                style="width: 100%"
              />
            </FormItem>
          </i-col>
          <i-col :sm="14">
            <FormItem prop="nomemed" label="Nome do Médico">
              <Input
                type="text"
                v-model="formEsocial.nomemed"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="5">
            <FormItem prop="houveinter" label="Houve Internação">
              <Select v-model="formEsocial.houveinter" filterable>
                  <Option value="S">Sim</Option>
                  <Option value="N">Não</Option>
              </Select>
            </FormItem>
          </i-col>
          <i-col :sm="5">
            <FormItem prop="duracaotrata" label="Duração do Tratamento">
              <TimePicker
                format="HH:mm"
                v-model="formEsocial.duracaotrata"
                style="width: 100%"
              />
            </FormItem>
          </i-col>
          <i-col :sm="7">
            <FormItem prop="orgaoclasse" label="Orgão de Classe">
              <Input
                type="text"
                v-model="formEsocial.orgaoclasse"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="7">
            <FormItem prop="uforgaoclasse" label="UF do Orgão de Classe">
              <Input
                type="text"
                v-model="formEsocial.uforgaoclasse"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="5">
            <FormItem prop="houveafa" label="Houve Afastamento">
             <Select v-model="formEsocial.houveafa" filterable>
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
              prop="nmrinscorgao"
              label="Número de Inscrição do Orgão de Classe"
            >
              <Input
                type="text"
                v-model="formEsocial.nmrinscorgao"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="12">
            <FormItem
              prop="desccomplelesao"
              label="Descrição complementar da Lesão"
            >
              <Input
                type="text"
                v-model="formEsocial.desccomplelesao"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="12">
            <FormItem prop="nmrrecibo" label="Número do Recibo da última CAT">
              <Input
                type="text"
                v-model="formEsocial.nmrrecibo"
                placeholder=" "
              />
            </FormItem>
          </i-col>
        </row>
        <row :gutter="20">
          <i-col :sm="8">
            <FormItem prop="diagprov" label="Diagnóstico Provável">
              <Input
                type="text"
                v-model="formEsocial.diagprov"
                placeholder=" "
              />
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="cid" label="Código da Tabela CID">
              <Input type="text" v-model="formEsocial.cid" placeholder=" " />
            </FormItem>
          </i-col>
          <i-col :sm="8">
            <FormItem prop="obs" label="Observações">
              <Input type="text" v-model="formEsocial.obs" placeholder=" " />
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
      tipocat: {},
      lateralidadepartesatingidas: {},
      stringBtn: this.$route.params.id != undefined ? "Atualizar" : "Salvar",
      tabname: "identificacaodoempregador",
      formEsocial: {
        inscemp: "",
        name: "",
        cpf: "",
        matricula: "",
        codigo: "",
        data: "",
        tipo: "",
        hora: "",
        horatrab: "",
        tipocat: "",
        ho: "",
        datobi: "",
        comunicacao: "",
        iniciativa: "",
        codsituacao: "",
        obs: "",
        tipoloc: "",
        descloc: "",
        pais: "",
        cep: "",
        tipolog: "",
        numerolog: "",
        bairro: "",
        desclog: "",
        codmu: "",
        codpostal: "",
        complementolog: "",
        uf: "",
        tipoinsclocal: "",
        numinsc: "",
        codatingida: "",
        lateralidade: "",
        codagente: "",
        dataatendimento: "",
        horaatendimento: "",
        nomemed: "",
        houveinter: "",
        duracaotrata: "",
        orgaoclasse: "",
        uforgaoclasse: "",
        houveafa: "",
        desclesao: "",
        nmrinscorgao: "",
        desccomplelesao: "",
        nmrrecibo: "",
        diagprov: "",
        cid: "",
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
        matricula: [
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
        tipo: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        hora: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        horatrab: [
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
            trigger: "blur",
          },
        ],
        ho: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        datobi: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        comunicacao: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        iniciativa: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        codsituacao: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        obs: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        tipoloc: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        descloc: [
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
            trigger: "blur",
          },
        ],
        cep: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        tipolog: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        numerolog: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        bairro: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        desclog: [
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
        complementolog: [
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
        codmu: [
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
            trigger: "blur",
          },
        ],
        numinsc: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        codatingida: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        lateralidade: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        codagente: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        dataatendimento: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        horaatendimento: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        nomemed: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        houveinter: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        duracaotrata: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        orgaoclasse: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        uforgaoclasse: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        houveafa: [
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
        desccomplelesao: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        nmrrecibo: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        diagprov: [
          {
            required: true,
            message: "Campo Obrigatório.",
            trigger: "blur",
          },
        ],
        cid: [
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
      this.formEsocial.cnpj = newValue.cnpjFormat;
    },
  },
  methods: {
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
    async buscarParteAtingida(){
      const { data } = await axios.get("/esocial/tabela/13")
      this.parteatingida = data.data.data;
    },
    async buscarDescricaoLesao(){
      const { data } = await axios.get("/esocial/tabela/17")
      this.descricaolesao = data.data.data;
    },
     async buscarTipoAcidenteTrabalho(){
      const { data } = await axios.get("/esocial/atributos/tipo-acidente-trabalho")
      this.tipoacidentetrabalho = data.data.data;
    },
    async buscarTipodeCat(){
      const { data } = await axios.get("/esocial/atributos/tipo-cat")
      this.tipocat = data.data.data;
    },
    async buscarLateralidadePartesAtingidas(){
      const { data } = await axios.get("/esocial/atributos/lateralidade-partes-atingidas")
      this.lateralidadepartesatingidas = data.data.data;
    }
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
    this.buscarTipodeCat();
    this.buscarLateralidadePartesAtingidas();
    this.formEsocial = this.value || {};
    this.formEsocial.cnpj = this.value.cnpjFormat;
  },
};
</script>
