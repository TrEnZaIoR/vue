<template>
<section id="works"></section>
<div class="container">
  <div class="row centered mt mb">
    <h1>Маршруты дальнего следования</h1>
      <button class="btn btn-warning"><router-link to="/mezgorods/add">Создать</router-link></button>
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
            <tr v-for="mezgorod in mezgorods" v-bind:key="mezgorod.id">
                <td>{{mezgorod.id}}</td>
                <td>{{mezgorod.p_o}}</td>
                <td>{{mezgorod.p_p}}</td>
                <td>{{mezgorod.time_o}}</td>
                <td>{{mezgorod.time_p}}</td>
                <td>{{mezgorod.count_m}}</td>
                <td>{{mezgorod.count_mo}}</td>
                <td>{{mezgorod.price}}</td>
                <td>{{mezgorod.name_vod}}</td>
                <td>{{mezgorod.gos_nomer}}</td>
                <th class="btn btn-danger">
                  <ul>
                    <li><button class="btn btn-light"><router-link :to="'/mezgorods/'+ mezgorod.id">Просмотр</router-link></button></li>
                    <li><button class="btn btn-warning"><router-link :to="'/mezgorods/edit/'+ mezgorod.id">Изменить</router-link></button></li>
                    <li><button class="btn btn-danger" v-on:click="deletMezgorod(mezgorod.id)">Удалить</button></li>
                  </ul>
                </th>
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
      axios.get('https://anharrum.site/api/mezgorods', function (req, res) {
        res.set('Access-Control-Allow-Origin', '*')
      })
        .then(response => {
          console.log('+++ SUCCESS +++')
          this.mezgorods = response.data.values
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
