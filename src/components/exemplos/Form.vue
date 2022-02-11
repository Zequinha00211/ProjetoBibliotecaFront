<template>
  <div>
    <Form ref="formUpload" :model="formUpload" :rules="ruleUpload" inline>
      <row :gutter="20">
        <i-col :sm="24">
          <FormItem prop="upload">
            <Upload
              :headers="{ Authorization: `Bearer ${$auth.token()}` }"
              :action="`${baseURL}esocial/epi/upload`"
              :on-success="buscarAnexos"
              :on-error="error"
              :before-upload="handleBeforeUpload"
              type="drag"
              v-model="formUpload.upload"
            >
              <div style="padding: 20px 0">
                <Icon
                  type="ios-cloud-upload"
                  size="52"
                  style="color: #3399ff"
                ></Icon>
                <p>Clique aqui para adicionar um arquivo!</p>
              </div>
            </Upload>
          </FormItem>
        </i-col>
      </row>
    </Form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  props: {
    value: {},
  },
  data() {
    return {
      formUpload: {},
      ruleUpload: {},
    };
  },
  watch: {
    value(newValue) {
      this.formUpload = newValue || {};
    },
  },
  computed: {
    baseURL: () => axios.defaults.baseURL,
  },
  methods: {
    buscarAnexos() {
      this.$Notice.success({
        title: "Upload Realizado com Sucesso!",
      });
      this.$Spin.hide();
    },
    error(err, file, fileList) {
      this.$Notice.error({
        title: "Falha no Upload",
        desc: `Arquivo ${fileList.name}`,
      });
      this.$Spin.hide();
    },
    handleBeforeUpload() {
      this.$Spin.show();
    },
  },
  created() {
    this.formUpload = this.value || {};
  },
};
</script>
