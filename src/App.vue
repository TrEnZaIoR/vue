<template>
<div class="navbar navbar-default navbar-fixed-top" role="navigation">
    <div class="container">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button> <a class="navbar-brand" href="/"><router-link to="/"></router-link>Касса</a>
      </div>
      <div class="navbar-collapse collapse">
        <ul class="nav navbar-nav navbar-right">
          <li ><router-link to="/">Главная</router-link></li>
          <li ><router-link to="/about">О нас</router-link></li>
          <li ><router-link to="/work">Контакты</router-link></li>
          <li ><router-link to="/prigorods">Расписание пригород</router-link></li>
          <li ><router-link to="/mezgorods">Расписание дальнего следования</router-link></li>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </div>
  <router-view/>
</template>
<style>
</style>
