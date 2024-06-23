<template>
  <body class="hold-transition sidebar-mini">
    <div class="wrapper">
      <HeaderComponent />
      <router-view></router-view>
      <FooterComponent />
    </div>
  </body>
</template>

<script>
export default {
  name: "App",
};
</script>
