<template>
  <el-container style="height: 100%">
    <el-header>Call Center</el-header>
    <el-container>
      <el-aside>
        <IncidentList />
      </el-aside>
      <el-main style="display: flex; padding: 0px">
        <AppChat style="width: 70%" />
        <IncidentInfo style="width: 30%" />
      </el-main>
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
