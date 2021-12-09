<template>
  <el-container>
    <el-aside width="200px">
      <el-menu style="height: 100vh">
        <div style="margin: 0.5rem">
          <img :src="logo" style="width: 20px; height: 20px" />
        </div>
        <!--        <el-sub-menu>ssss</el-sub-menu>-->
        <!--        <el-sub-menu>ssss</el-sub-menu>-->
        <!--        <el-menu-item>ssss</el-menu-item>-->
        <!--        <el-menu-item>-->
        <!--          <el-icon><setting /></el-icon>-->
        <!--          <span>Navigator Four</span>-->
        <!--        </el-menu-item>-->
        <template v-for="(r, index) in routes">
          <el-menu-item :index="index" v-if="r.children.length === 0">
            <el-icon><setting /></el-icon>
            <router-link :to="r.path">{{ r.meta.title }}</router-link>
          </el-menu-item>
          <el-sub-menu :index="index" v-if="r.children.length > 0">
            <template #title>
              <el-icon><setting /></el-icon>
              <router-link :to="r.redirect">{{ r.meta.title }}</router-link>
            </template>
            <el-menu-item :index="index + '' + y" v-for="(rr, y) in r.children">
              <router-link :to="rr.path">{{ rr.meta.title }}</router-link>
            </el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header style="border: #e6e6e6 1px solid">
        <div style="display: flex; justify-content: end">
          <el-dropdown>
            <span class="el-dropdown-link">
              Dropdown List
              <el-icon class="el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>Action 1</el-dropdown-item>
                <el-dropdown-item>Action 2</el-dropdown-item>
                <el-dropdown-item>Action 3</el-dropdown-item>
                <el-dropdown-item disabled>Action 4</el-dropdown-item>
                <el-dropdown-item divided>Action 5</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
        </div>
      </el-header>

      <el-main>
        <div style="margin: 1em">
          <el-breadcrumb separator="/" style="font-size: 1.2em">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item><a href="/">promotion management</a></el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
            <el-breadcrumb-item>promotion detail</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <router-view></router-view>
      </el-main>
      <el-footer>{{ new Date() }}</el-footer>
    </el-container>
  </el-container>
</template>
<script setup lang="ts">
import { Message, Menu, Setting } from '@element-plus/icons'
import { ArrowLeft } from '@element-plus/icons'

import { computed, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import logo from '../assets/logo.png'

const router = useRouter()
const routes = computed(() => {
  return router.getRoutes().filter((r) => {
    return r.redirect
  })
})
onMounted(() => {
  console.log('mounted')
})
</script>
