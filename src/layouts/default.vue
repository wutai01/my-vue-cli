<template>
  <div class="shield-admin clearfix">
    <div class="shield-admin-menu">
      <sidebar
        :menus="menu"
        class="sidebar-container"
      />
    </div>
    <div class="shield-admin-body">
      <router-view />
    </div>
  </div>
</template>
<style lang="scss" scoped>
.shield-admin{
  // padding-top: 80px;
  // box-sizing: border-box;
  &-menu{
    width: 230px;
    float: left;
    height: 100vh;
    overflow: hidden;
    background-color: #545c64;
  }
  &-body{
    float: left;
    width: calc(100% - 230px);
    height: calc(100vh - 60px);
    padding-top: 60px;
  }
}
</style>
<script>
import sidebar from './sidebar/index.vue';
import { getMenu } from '@/api/common.js';
export default {
  components: { sidebar },
  data () {
    return {
      menu: []
    };
  },
  mounted () {
    this.getMenu();
  },
  methods: {
    // 菜单获取
    getMenu () {
      getMenu().then((data) => {
        this.menu = data.menu;
      });
    }
  }
};
</script>
