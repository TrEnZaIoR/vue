<template>
  <div id="aboutwrap">
  <div class="container">
        <div class="row">
        <div class="col-lg-6 col-lg-offset-3">
        </div>
      </div>
    </div>
    </div>
<section id="works"></section>
<div class="container">
  <div class="row centered mt mb">
    <h1>Маршруты дальнего следования</h1>
      <button class="btn btn-warning"><router-link :to="'/mezgorods/edit/'+ this.$route.params.id">Изменить</router-link></button>
      <button class="btn btn-danger" v-on:click="deletMezgorod(this.$route.params.id)">Удалить</button>
      <table   class="table" v-for="mezgorod in mezgorods" v-bind:key="mezgorod.id">
        <tr>
              <td >ID</td>
              <td>{{ mezgorod.id }}</td>
            </tr>
            <tr>
              <td >Из</td>
              <td>{{ mezgorod.p_o }}</td>
            </tr>
            <tr>
              <td >В</td>
              <td>{{ mezgorod.p_p }}</td>
            </tr>
            <tr>
              <td >Время отправления</td>
              <td>{{ mezgorod.time_o }}</td>
            </tr>
            <tr>
              <td >Время прибытия</td>
              <td>{{ mezgorod.time_p }}</td>
            </tr>
            <tr>
              <td >Кол-во мест</td>
              <td>{{ mezgorod.count_m }}</td>
            </tr>
            <tr>
              <td >Кол-во оставшихся</td>
              <td>{{ mezgorod.count_mo}}</td>
            </tr>
            <tr>
              <td >Цена</td>
              <td>{{ mezgorod.price}}</td>
            </tr>
            <tr>
              <td >Имя водителя</td>
              <td>{{ mezgorod.name_vod}}</td>
            </tr>
            <tr>
              <td >Гос номер</td>
              <td>{{ mezgorod.gos_nomer}}</td>
            </tr>
        </table>
      </div><!--/row -->
  </div><!--/container -->
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    mezgorods: [],
    errors: []
  }),
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      axios.get('https://anharrum.site/api/mezgorods/' + this.$route.params.id)
        .then(response => {
          console.log('+++ SUCCESS +++')
          this.mezgorods = response.data.values.rows
        })
        .catch(e => {
          console.log('+++ ERROR +++')
          this.errors.push(e)
        })
    },
    deletMezgorod (id) {
      axios.delete(`https://anharrum.site/api/mezgorods/${id}`)
        .then(res => {
          console.log('Deleted')
          this.fetch()
        })
        .catch(e => {
          console.log('+++ ERROR +++')
          this.errors.push(e)
        })
    }
  }
}
</script>
