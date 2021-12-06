<template>
  <router-view />
  <!-- <span class="header1">Kanban Board</span
  ><span class="header2">:Project tracker</span>
  <div class="tables">
    <div class="box"><span class="topic">TO DO</span></div>
    <div class="box"><span class="topic">DOING</span></div>
    <div class="box"><span class="topic">DONE</span></div>
  </div> -->
</template>

<style>
.tables {
  display: flex;
}

.box {
  display: flex;
  width: 30%;
  height: auto;
  border: solid 10px white;
  background-color: #ecf5f8;
  justify-content: center;
}

.topic {
  text-align: center;
  background-color: hsl(199deg 17% 46%);
  color: white;
  width: 100%;
  height: 60px;
  font-size: 35px;
  padding-top: 5%;
}

.header1 {
  color: #acbbc3;
  font-size: 50px;
}
.header2 {
  color: #3a515c;
  font-size: 50px;
}
</style>
