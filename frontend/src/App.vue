<!-- CadastroLivro.vue -->
<template>
  <v-app dark>
  <v-app-bar app dark>
    <v-toolbar-title>Cadastro de Livros</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn text @click="irParaInicio">Início</v-btn>
    <v-btn text @click="irParaCadastroLivro">Cadastrar Livro</v-btn>
    <v-btn icon @click="voltar">
      <v-icon>mdi-arrow-left</v-icon>
    </v-btn>
  </v-app-bar>

    <v-main dark>
      <v-form ref="form" v-model="valid" lazy-validation>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                v-model="livro.titulo"
                label="Título"
                :rules="[v =>!!v || 'Título é obrigatório']"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="livro.autor"
                label="Autor"
                :rules="[v =>!!v || 'Autor é obrigatório']"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="livro.editora"
                label="Editora"
                :rules="[v =>!!v || 'Editora é obrigatório']"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="livro.anoPublicacao"
                label="Ano de Publicação"
                type="number"
                :rules="[v =>!!v || 'Ano de Publicação é obrigatório', v => v >= 1900 || 'Ano de Publicação deve ser maior ou igual a 1900']"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="livro.nmrPaginas"
                label="Número de páginas"
                type="number"
                :rules="[v =>!!v || 'O número de páginas do livro é obrigatório.']"
                required
              ></v-text-field>
            </v-col>

            <v-col cols="12">
              <v-btn
                :disabled="!valid"
                color="yellow darken-1"
                class="mr-4"
                @click="salvarLivro"
              >
                Salvar
              </v-btn>

              <v-btn color="white" class="mr-4" @click="limparFormulario">
                Limpar
              </v-btn>

              <v-btn color="orange darken-1" @click="voltar">
                Voltar
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-form>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      valid: true,
      livro: {
        titulo: '',
        autor: '',
        editora: '',
        anoPublicacao: '',
        nmrPaginas: '',
      },
    };
  },
  methods: {
    salvarLivro() {
      // Lógica para salvar o livro
      console.log(this.livro);
    },
    limparFormulario() {
      this.$refs.form.reset();
      this.livro = {
        titulo: '',
        autor: '',
        editora: '',
        anoPublicacao: '',
        nmrPaginas: '',
      };
    },
    voltar() {
      this.$router.go(-1);
    },
    irParaCadastroLivro() {
      this.$router.push({ name: 'cadastro-livro' });
    },
    irParaInicio() {
      this.$router.push({ name: 'inicio' });
    },
  },
};
</script>

<style>
.v-application {
  background-color: #000000;
  color: #fff;
}

.v-toolbar {
  background-color: #000;
}

.v-list {
  background-color: #333;
}

.v-list-item {
  color: #fff;
}

.v-list-item:hover {
  background-color: #000000;
}

.v-form {
  padding: 20px;
}

.v-btn {
  margin: 10px;
}

.v-btn.yellow.darken-2 {
  background-color: #F7DC6F !important;
  color: #000 !important;
}

.v-btn.black {
  background-color: #000 !important;
  color: #fff !important;
}

.v-text-field {
  margin: 10px;
}

.v-text-field label {
  color: #d4b727;
}

.v-text-field input {
  color: #dbd415;
}

.v-text-field .v-input__slot {
  background-color: #333;
  border-color: #444;
}

.v-text-field .v-input__slot:focus {
  border-color: #b49827;
}
</style>