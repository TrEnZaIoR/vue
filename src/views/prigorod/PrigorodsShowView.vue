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
    <h1>Пригородные маршруты</h1>
      <button class="btn btn-warning"><router-link :to="'/prigorods/edit/'+ this.$route.params.id">Изменить</router-link></button>
      <button class="btn btn-danger" v-on:click="deletStud(this.$route.params.id)">Удалить</button>
      <table   class="table" v-for="prigorod in prigorods" v-bind:key="prigorod.id">
            <tr>
              <td scope="col">ID</td>
              <td>{{ prigorod.id }}</td>
            </tr>
            <tr>
              <td scope="col">Из</td>
              <td>{{ prigorod.p_o }}</td>
            </tr>
            <tr>
              <td scope="col">В</td>
              <td>{{ prigorod.p_p }}</td>
            </tr>
            <tr>
              <td scope="col">Время отправления</td>
              <td>{{ prigorod.time_o }}</td>
            </tr>
            <tr>
              <td scope="col">Время прибытия</td>
              <td>{{ prigorod.time_p }}</td>
            </tr>
            <tr>
              <td scope="col">Кол-во мест</td>
              <td>{{ prigorod.count_m }}</td>
            </tr>
            <tr>
              <td scope="col">Кол-во оставшихся</td>
              <td>{{ prigorod.count_mo}}</td>
            </tr>
            <tr>
              <td scope="col">Цена</td>
              <td>{{ prigorod.price}}</td>
            </tr>
            <tr>
              <td scope="col">Имя водителя</td>
              <td>{{ prigorod.name_vod}}</td>
            </tr>
            <tr>
              <td scope="col">Гос номер</td>
              <td>{{ prigorod.gos_nomer}}</td>
            </tr>
        </table>
      </div><!--/row -->
  </div><!--/container -->
</template>
<script>
import axios from 'axios'
export default {
  data: () => ({
    prigorods: [],
    errors: []
  }),
  created () {
    this.fetch()
  },
  methods: {
    fetch () {
      axios.get('http://localhost:8081/api/prigorods/' + this.$route.params.id)
        .then(response => {
          console.log('+++ SUCCESS +++')
          this.prigorods = response.data.values.rows
        })
        .catch(e => {
          console.log('+++ ERROR +++')
          this.errors.push(e)
        })
    },
    deletStud (id) {
      axios.delete(`http://localhost:8081/api/prigorods/${id}`)
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
