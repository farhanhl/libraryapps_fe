import "admin-lte/dist/css/adminlte.min.css";
import "admin-lte/plugins/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "admin-lte/plugins/datatables-bs4/css/dataTables.bootstrap4.min.css";
import "admin-lte/plugins/datatables-responsive/css/responsive.bootstrap4.min.css";

import "admin-lte/plugins/jquery/jquery.min.js";
import "admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js";
import "admin-lte/plugins/datatables/jquery.dataTables.min.js";
import "admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js";
import "admin-lte/plugins/datatables-responsive/js/dataTables.responsive.min.js";
import "admin-lte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js";
import "admin-lte/dist/js/adminlte.min.js";
import "admin-lte/plugins/toastr/toastr.min.css";
import "admin-lte/plugins/toastr/toastr.min.js";

import "datatables.net";
import "datatables.net-bs4";
import "datatables.net-responsive";
import "datatables.net-responsive-bs4";

import toastr from "toastr";
import axios from "axios";
import VueAxios from "vue-axios";
import { createRouter, createWebHistory } from "vue-router";
import { createApp, onMounted } from "vue";
import App from "./App.vue";

// Component
import HeaderComponent from "./components/Header.vue";
import FooterComponent from "./components/Footer.vue";

// Pages
import Home from "./pages/Home.vue";
import Buku from "./pages/Buku.vue";
import InputBuku from "./pages/InputBuku.vue";
import Mahasiswa from "./pages/Mahasiswa.vue";
import InputMahasiswa from "./pages/InputMahasiswa.vue";
import StokBuku from "./pages/StokBuku.vue";
import InputStokBuku from "./pages/InputStokBuku.vue";
import Riwayat from "./pages/Riwayat.vue";

toastr.options = {
  closeButton: false,
  debug: false,
  newestOnTop: false,
  progressBar: false,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  onclick: null,
  showDuration: "300",
  hideDuration: "1000",
  timeOut: "5000",
  extendedTimeOut: "1000",
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

const routes = [
  { path: "/", component: Home },
  { path: "/buku/data", component: Buku },
  { path: "/buku/input", component: InputBuku },
  { path: "/mahasiswa/data", component: Mahasiswa },
  { path: "/mahasiswa/input", component: InputMahasiswa },
  { path: "/stokBuku/data", component: StokBuku },
  { path: "/stokBuku/input", component: InputStokBuku },
  { path: "/riwayat", component: Riwayat },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

const app = createApp(App);
app.component("HeaderComponent", HeaderComponent);
app.component("FooterComponent", FooterComponent);
app.use(VueAxios, axios, onMounted);
app.use(router);
app.mount("#app");
