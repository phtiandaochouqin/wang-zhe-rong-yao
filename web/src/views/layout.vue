<template>
    <div class="all-container">
    <div class="topbar">
      <img src="@/assets/logo.png" height="30" />
      <div class="topbar-title">
        <div class="topbar-title1">王者荣耀</div>
        <div class="topbar-title2">团队成就更多</div>
      </div>
      <button class="now-download" type="button">立即下载</button>
    </div>
    <div class="nav-menu">
      <router-link :class="{ active: $route.path == '/main' }" to="/"
        >首页</router-link
      >
      <router-link to="/">攻略中心</router-link>
      <router-link to="/">赛事中心</router-link>
    </div>
    <router-view/>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$setColor1: #f09a37;
$setColor1-2: #e99b39;
$setColor2: #666;
$setColor3: #fff;
.all-container {
  .topbar {
    background:url('../assets/images/index.png') no-repeat 0 -715px;
    display: flex;
    position: sticky;
    top: 0;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1rem;
    padding-right: 1rem;
    align-items: center;
    z-index: 1000;
    .topbar-title {
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      flex: 1;
      .topbar-title1 {
        color: $setColor3;
      }
      .topbar-title2 {
        color: $setColor2;
        font-size: 0.6154rem;
      }
    }
    .now-download {
      font-size: 0.9231rem;
      border: none;
      border-radius: 0.1538rem;
      padding: 0.2rem 0.6rem;
      background-color: $setColor1-2;
    }
  }
  .nav-menu {
    background-color: $setColor1-2;
    padding-bottom: 0.5rem;
    padding-top: 1rem;
    display: flex;
    justify-content: space-around;
    a {
      color: $setColor3;
      padding-bottom: 0.2rem;
      text-decoration: none;
      &.active {
        border-bottom: 3px solid $setColor3;
      }
    }
  }
}
</style>