<template>
  <el-container style="max-height: 100vh">
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