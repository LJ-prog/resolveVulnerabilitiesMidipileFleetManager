<template>

  <q-page padding>
    <q-card v-bind:style="$q.screen.lt.sm ? {'margin-top': '23%', } : {}">
      <q-card-section class="row justify-center">
        <div class="text-h4" style="text-align: center">
          Profil
        </div>
      </q-card-section>

      <q-card-section class="row justify-center" id="center">
        <div class="col-25">
          <label for="fname">Prénom *</label>
        </div>
        <div class="col-75">
          <q-input
            filled
            v-model="firstName"
            class="input"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Votre prénom.."
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Champ requis']"
            @keydown.enter.prevent="submit('myInput')"
            ref="myInput"/>
        </div>

        <div class="col-25">
          <label for="lname">Nom *</label>
        </div>
        <div class="col-75">
          <q-input
            filled
            v-model="lastName"
            class="input"
            type="text"
            id="lname"
            name="lastname"
            placeholder="Votre nom.."
            lazy-rules
            :rules="[ val => val && val.length > 0 || 'Champ requis']"
            @keydown.enter.prevent="submit('myInput')"
            ref="myInput"
            />

        </div>

        <div class="col-25">
          <label for="country">Pays</label>
        </div>
        <div class="col-75">
          <q-select class="select" filled v-model="selectCountry" :options="options" label="Pays" />
        </div>

        <div class="col-25">
          <label for="subject">Bio</label>
        </div>
        <div class="col-75">
          <!-- <textarea id="subject" name="subject" placeholder="Write something.." style="height:200px"></textarea> -->
          <q-input
            v-model="bio"
            filled
            class="textarea"
            borderless
            type="textarea"
            id="subject"
            name="subject"
            placeholder="Votre bio vous attend.."
            @keydown.enter.prevent="submit('myInput')"
            ref="myInput"
          />
        </div>

        <!-- <div class="col-3 text-center">
          <p>Submitted value:</p>
          <q-chip dense size="lg" color="red" v-if="firstName">{{firstName}}</q-chip>
          <q-chip dense size="lg" color="red" v-if="lastName">{{lastName}}</q-chip><br/>
          <q-chip dense size="lg" color="red" v-if="bio">{{bio}}</q-chip>
        </div> -->

      </q-card-section>

      <q-card-section align="center">
        <q-btn class="submit" label="Valider" type="submit" v-model="valid" color="primary"/>
      </q-card-section>




    </q-card>
  </q-page>

</template>

<style scoped>
* {
  box-sizing: border-box;
}

.input, .select, .textarea {
  width: 60%;
  padding: 12px;
  border-radius: 4px;
  resize: vertical;
}

label {
  padding-top: 30px;
  padding-left: 12px;
  padding-right: 12px;
  padding-bottom: 12px;
  display: inline-block;
}

.col-25 {
  float: left;
  width: 15%;
  margin-top: 6px;
}

.col-75 {
  float: left;
  width: 75%;
  margin-top: 6px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

#center {
  margin-left:14%;
}


/* Responsive layout - when the screen is less than 600px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 600px) {
  .col-75 {
    width: 100%;
    margin-top: 0;
    text-align: center;
  }

  .col-25 {
    width: 100%;
    margin-top: 0;
    margin-left: 20.5%;
  }

  label {
    padding-top: 12px;
  }

  #center {
  margin-left:0;
}
}
</style>

<script>
import { ref } from 'vue'

export default {
  data () {
    return {
      bio:'',
      firstName:'',
      lastName:'',
      selectCountry: ref('France'),
      options: [
        'France', 'Belgique', 'Suisse', 'Espagne', 'USA'
      ],
    }
  },

  methods: {
    submit(refKey) {
      //Setting the variable only when submitted
      this.test = this.$refs[refKey].model;
    }
  }
}
</script>
