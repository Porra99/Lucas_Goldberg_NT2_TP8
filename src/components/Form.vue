<template>
  <section class="src-components-form">
    <div class="jumbotron">
    
      <h2>Form</h2>
      <hr>
      <br>
    
      <vue-form :state="formState" @submit.prevent="enviar()">
          <validate tag="div">
            <label for="nombre">Nombre</label>
            <input 
              type="text" 
              id="nombre" 
              name="nombre" 
              class="form-control"
              autocomplete="off"
              v-model.trim="formData.nombre"
              required
              :minlength="nombreLengthMin"
              :maxlength="nombreLengthMax"
              no-espacios
          >
      
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido.</div>            
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No pude ingresar espacios.
            </div>            
            <div slot="minlength" class="alert alert-danger mt-1">
              Ingrese mas de {{ nombreLengthMin }} caracteres.
            </div>            
            <div v-if="formData.nombre.length == nombreLengthMax" class="alert alert-warning mt-1">
              Ingrese menos de {{ nombreLengthMax }} caracteres.
            </div>            
          </field-messages>

        </validate>
        <br>
        <validate tag="div">
          <label for="edad">Edad</label>
          <input
            type="number"
            id="edad"
            name="edad"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.edad"
            required
            :min="edadMin"
            :max="edadMax"
          >
          <field-messages name="edad" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido.</div>
            <div slot="min" class="alert alert-danger mt-1">
              La edad mínima es de {{ edadMin }} años.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La edad máxima es de {{ edadMax }} años.
            </div>
          </field-messages>  
        </validate>
        <br>
        <validate tag="div">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.email"
            required
          >
          <field-messages name="email" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido.</div>
            <div slot="email" class="alert alert-danger mt-1">Email inválido.</div>
          </field-messages>  
        </validate>
        <br>

        <button class="btn btn-info btn-block my-3" :disabled="formState.$invalid" type="submit">Enviar</button>

      </vue-form>
      <br>
      <hr>
    </div>
  </section>  
</template>

<script lang="js">
  export default {
    name: 'Form',
    data() {
      return{
        formData : this.getInicialData(),
        formState : {},
        nombreLengthMin : 3,
        nombreLengthMax : 15,
        edadMin : 18,
        edadMax : 120,
      }
    },
    methods:{
      getInicialData(){
        return{
          nombre: '',
          edad: '',
          email: ''
        }
      },
      enviar(){
        this.postUsuarioAsyncAwait()
        this.postUsuarioThenCatch()
        this.formData = this.getInicialData()
        this.formState._reset()
      },
      
      async postUsuarioAsyncAwait() {
        const usuario = { "nombre": this.formData.nombre, 
                          "email": this.formData.email, 
                          "edad": this.formData.edad 
                        }
        this.$store.dispatch('postUsuarioAsyncAwait', usuario)
    },

    postUsuarioThenCatch() {
      const usuario = { "nombre": this.formData.nombre, 
                        "email": this.formData.email, 
                        "edad": this.formData.edad 
                      }
      this.$store.dispatch('postUsuarioThenCatch', usuario)
    }
    },
  }
</script>

<style scoped lang="css">
  
  .jumbotron{
    background-color: rgb(16, 56, 10);
    color: white;
  }

  hr{
    background-color: #eee;
  }

</style>
