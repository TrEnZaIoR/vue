<template>
<section id="works"></section>
<div class="container">
  <div class="row centered mt mb">
    <h1>Маршруты дальнего следования</h1>
      <form @submit.prevent="CreateMezgorod" novalidate>
        <div class="form-group">
            <label for="p_o">Из</label>
            <input type="text" v-model="mezgorods.p_o"  id="p_o" class="form-control">
        </div>
        <div class="form-group">
            <label for="p_p">В</label>
            <input type="text" v-model="mezgorods.p_p"  id="p_p" class="form-control">
        </div>
        <div class="form-group">
            <label for="time_o">Время отправления</label>
            <input type="text" v-model="mezgorods.time_o"  id="time_o" class="form-control">
        </div>
        <div class="form-group">
            <label for="time_p">Время прибытия</label>
            <input type="text" v-model="mezgorods.time_p"  id="time_p" class="form-control">
        </div>
        <div class="form-group">
            <label for="count_m">Кол-во мест</label>
            <input type="number" v-model="mezgorods.count_m"  id="count_m" class="form-control">
        </div>
        <div class="form-group">
            <label for="count_mo">Кол-во оставшихся</label>
            <input type="number" v-model="mezgorods.count_mo"  id="count_mo" class="form-control">
        </div>
        <div class="form-group">
            <label for="price">Цена</label>
            <input type="number" v-model="mezgorods.price"  id="price" class="form-control">
        </div>
        <div class="form-group">
            <label for="name_vod">Имя водителя</label>
            <input type="text" v-model="mezgorods.name_vod"  id="name_vod" class="form-control">
        </div>
        <div class="form-group">
            <label for="gos_nomer">Гос номер</label>
            <input type="text" v-model="mezgorods.gos_nomer"  id="gos_nomer" class="form-control">
        </div>
        <button type="submit" class="btn btn-success">Отправить</button>
      </form>
    </div><!--/row -->
  </div><!--/container -->
</template>
<script>
import axios from 'axios'
export default {
  name: 'CreateMezgorod',
  data: () => {
    return {
      mezgorods: {
        p_o: '',
        p_p: '',
        time_o: '',
        time_p: '',
        count_m: '',
        count_mo: '',
        price: '',
        name_vod: '',
        countgos_nomer_m: ''
      }
    }
  },
  created () { },
  methods: {
    CreateMezgorod () {
      axios.post('https://anharrum.site/api/mezgorods', this.mezgorods)
        .then(response => {
          console.log(response)
          console.log('+++ SUCCESS +++')
          this.$router.push('/mezgorods')
        })
        .catch(e => {
          console.log('+++ ERROR +++')
          this.errors.push(e)
        })
    }
  }
}
</script>
