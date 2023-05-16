<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { cloneDeep } from 'lodash';
import homeTabIcon from '@/assets/icons/tab-home.png';
// import appTabIcon from '@/assets/icons/tab-app.png'
import hikerTabIcon from '@//assets/icons/tab-hiker.png';
import commentTabIcon from '@/assets/icons/tab-comment.png';
import browseTabIcon from '@/assets/icons/tab-browse.png';
import settingTabIcon from '@/assets/icons/tab-setting.png';

interface TabItem {
  name: string;
  routeName: string;
  path: string;
  icon: string;
  selected: boolean;
}

const route = useRoute();
const router = useRouter();

const tabList = ref([
  {
    name: '主页',
    routeName: 'Home',
    path: '/',
    icon: homeTabIcon,
    selected: true,
  },
  /*{
    name: '应用',
    routeName: 'App',
    path: '/',
    icon: appTabIcon,
    selected: false,
  },*/
  {
    name: '海阔视界',
    routeName: 'HikerView',
    path: '/hiker-view',
    icon: hikerTabIcon,
    selected: false,
  },
  /*{
    name: '论坛',
    routeName: 'Discuss',
    path: '/discuss',
    icon: commentTabIcon,
    selected: false,
  },*/
  /*{
    name: '浏览器',
    routeName: 'Browse',
    path: '/browse',
    icon: browseTabIcon,
    selected: false,
  },*/
  {
    name: '设置',
    routeName: 'Setting',
    path: '/setting',
    icon: settingTabIcon,
    selected: false,
  },
]);

onMounted(() => {
  if (typeof route.name === 'string') createSelected(route.name);
});

const pathTo = (item: TabItem) => {
  if (route.name !== item.routeName) router.push(item.path);
  createSelected(item.routeName);
};

const createSelected = (name: string | null) => {
  const newList = cloneDeep(tabList.value);
  newList.map((tab) => {
    tab.selected = tab.routeName === name;
  });
  tabList.value = newList;
};
</script>

<template>
  <div
    v-for="(item, index) in tabList"
    :key="index"
    :class="`toolbar-tabs-icon-box flex items-center justify-center ${
      item.selected ? 'toolbar-tabs-icon-box-selected shadow-lg' : ''
    }`"
    @click="pathTo(item)"
  >
    <img class="toolbar-tabs-icon" :src="item.icon" :alt="`tab-${index}`" />
  </div>
</template>

<style scoped lang="less">
.toolbar-tabs-icon-box {
  width: 36px;
  height: 36px;
  margin: 0 12px;
  cursor: pointer;
  border-radius: 8px;
  .toolbar-tabs-icon {
    width: 24px;
    height: 24px;
    -webkit-user-drag: none;
  }
}
.toolbar-tabs-icon-box-selected {
  background-color: #e9f0f4;
  .toolbar-tabs-icon {
    width: 20px;
    height: 20px;
    animation: tabBounce 0.8s infinite;
  }
}
@keyframes tabBounce {
  0% {
    transform: translate(0px, -1px);
  }
  50% {
    transform: translate(0px, 1px);
  }
  100% {
    transform: translate(0px, -1px);
  }
}
</style>
