<!--侧边栝-->
<template>
  <transition name="el-zoom-in-left">
    <div class="sidebar-container">
      <el-menu
        :default-active="sActiveIndex"
        class="el-menu-vertical-demo"
        :collapse-transition="true"
        :unique-opened="true"
        :default-openeds="aOpenedsIndex"
        @open="handleOpen"
        @close="handleClose"
      >
        <template v-for="(item, index) in menus">
          <el-submenu
            v-if="item.children && item.children.length > 0"
            :key="index"
            :index="''+index"
          >
            <template slot="title">
              <div style="float:left; width: 30px;">
                <i :class="'fa fa-' + item.icon" />
              </div>
              <span class="title">
                {{ item.name }}
              </span>
            </template>
            <el-menu-item
              v-for="(i,idx) in item.children"
              :key="idx"
              :index="index +'-'+idx"
            >
              <div style="float:left; width: 30px;">
                <i :class="'fa fa-' + i.icon" />
              </div>
              <router-link :to="i.url">
                {{ i.name }}
              </router-link>
            </el-menu-item>
          </el-submenu>
          <el-menu-item
            v-else
            :key="index"
            :index="''+index"
            @click="handleNoChildItem"
          >
            <div style="float:left; width: 30px;">
              <i :class="'fa fa-' + item.icon" />
            </div>
            <router-link :to="item.url">
              {{ item.name }}
            </router-link>
          </el-menu-item>
        </template>
      </el-menu>
    </div>
  </transition>
</template>
<style lang="scss" scoped>
.el-zoom-in-left-enter-active,
.el-zoom-in-left-leave-active {
  opacity: 1;
  -webkit-transform: scaleX(1);
  transform: scaleX(1);
  // -webkit-transition: opacity .3s cubic-bezier(.23, 1, .32, 1), -webkit-transform .3s cubic-bezier(.23, 1, .32, 1);
  transition: opacity .3s cubic-bezier(.23, 1, .32, 1), -webkit-transform .3s cubic-bezier(.23, 1, .32, 1);
  transition: transform .3s cubic-bezier(.23, 1, .32, 1), opacity .3s cubic-bezier(.23, 1, .32, 1);
  // transition: transform .3s cubic-bezier(.23, 1, .32, 1), opacity .3s cubic-bezier(.23, 1, .32, 1), -webkit-transform .3s cubic-bezier(.23, 1, .32, 1);
  -webkit-transform-origin: left left;
  transform-origin: left left
}

.el-zoom-in-left-enter,
.el-zoom-in-left-leave-active {
  opacity: 0;
  -webkit-transform: scaleX(0);
  transform: scaleX(0)
}
</style>

<script>
import './index.scss';
export default {
  props: {
    menus: {
      type: Array,
      default: function () {
        return [];
      }
    }
  },
  data () {
    return {
      aOpenedsIndex: [], // 当前展开的index项
      sActiveIndex: '', // 当前选中index
    };
  },
  watch: {
    menus (val) {
      this.$nextTick(() => {
        let url = this.$route.path;
        if (url === '/') {
          let pushUrl = this.menus[0].children && this.menus[0].children.length > 0
            ? this.menus[0].children[0].url : this.menus[0].url;
          this.$router.push(pushUrl);
          this.sActiveIndex = this.menus[0].children && this.menus[0].children.length > 0 ? '0-0' : '0';
        } else {
          this.findUrl(url);
        }
      });
    },
    '$route.path' (val) {
      this.findUrl(val);
    }
  },
  methods: {
    findUrl (url) {
      this.menus.forEach((item, index) => {
        // 路由url为'/' 跳转到菜单第一个
        if (item.url === url) {
          this.sActiveIndex = `${index}`;
        } else {
          if (item.children && item.children.length > 0) {
            item.children.forEach((i, idx) => {
              if (i.url === url) this.sActiveIndex = `${index}-${idx}`;
            });
          }
        }
      });
    },
    handleOpen (val) {
    },
    // 点击没有子菜单的，收起其他菜单的子菜单
    handleNoChildItem () {
      this.aOpenedsIndex = [];
    },
    handleClose () {}
  }
};
</script>
