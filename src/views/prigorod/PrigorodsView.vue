<template>
<section id="works"></section>
<div class="container">
  <div class="row centered mt mb">
    <h1>Пригородные маршруты</h1>
      <button class="btn btn-warning"><router-link to="/prigorods/add">Создать</router-link></button>
        <table   class="table">
            <tr>
              <td scope="col">ID </td>
              <td scope="col">Из</td>
              <td scope="col">В</td>
              <td scope="col">Время отправления</td>
              <td scope="col">Время прибытия</td>
              <td scope="col">Кол-во мест</td>
              <td scope="col">Кол-во оставшихся</td>
              <td scope="col">Цена</td>
              <td scope="col">Имя водителя</td>
              <td scope="col">Гос номер</td>
              <td>###</td>
            </tr>
            <tr v-for="prigorod in prigorods" v-bind:key="prigorod.id">
                <td>{{prigorod.id}}</td>
                <td>{{prigorod.p_o}}</td>
                <td>{{prigorod.p_p}}</td>
                <td>{{prigorod.time_o}}</td>
                <td>{{prigorod.time_p}}</td>
                <td>{{prigorod.count_m}}</td>
                <td>{{prigorod.count_mo}}</td>
                <td>{{prigorod.price}}</td>
                <td>{{prigorod.name_vod}}</td>
                <td>{{prigorod.gos_nomer}}</td>
                <td class="btn btn-danger">
                  <ul>
                    <li><button class="btn btn-light"><router-link :to="'/prigorods/'+ prigorod.id">Просмотр</router-link></button></li>
                    <li><button class="btn btn-warning"><router-link :to="'/prigorods/edit/'+ prigorod.id">Изменить</router-link></button></li>
                    <li><button class="btn btn-danger" v-on:click="deletPrigorod(prigorod.id)">Удалить</button></li>
                  </ul>
                </td>
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
      axios.get('https://anharrum.site/api/prigorods', function (req, res) {
        res.set('Access-Control-Allow-Origin', '*')
      })
        .then(response => {
          console.log('+++ SUCCESS +++')
          this.prigorods = response.data.values
        })
        .catch(e => {
          console.log('+++ ERROR +++')
          this.errors.push(e)
        })
    },
    deletPrigorod (id) {
      axios.delete(`https://anharrum.site/api/prigorods/${id}`)
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
