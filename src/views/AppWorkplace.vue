<template>
  <el-container style="height: 100%">
    <el-header>Header</el-header>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
