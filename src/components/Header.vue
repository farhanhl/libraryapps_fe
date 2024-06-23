<template>
  <nav class="main-header navbar navbar-expand navbar-white navbar-light">
    <ul class="navbar-nav">
      <li class="nav-item">
        <a class="nav-link" data-widget="pushmenu" href="#" role="button"
          ><i class="fas fa-bars"></i
        ></a>
      </li>
    </ul>
  </nav>
  <aside class="main-sidebar sidebar-dark-primary elevation-4">
    <router-link to="/" class="brand-link" style="text-decoration: none">
      <span class="brand-text font-weight-light">Library Apps</span>
    </router-link>

    <div class="sidebar">
      <nav class="mt-2">
        <ul
          class="nav nav-pills nav-sidebar flex-column"
          data-widget="treeview"
          role="menu"
          data-accordion="false"
        >
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-book"></i>
              <p>
                Buku
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  to="/buku/data"
                  class="nav-link"
                  active-class="active"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>Data Buku</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/buku/input"
                  class="nav-link"
                  active-class="active"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>Input Buku</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-user-friends"></i>
              <p>
                Mahasiswa
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  to="/mahasiswa/data"
                  class="nav-link"
                  active-class="active"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>Data Mahasiswa</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/mahasiswa/input"
                  class="nav-link"
                  active-class="active"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>Input Mahasiswa</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-book-open"></i>
              <p>
                Stok Buku
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <router-link
                  to="/stokbuku/data"
                  class="nav-link"
                  active-class="active"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>Data Stok Buku</p>
                </router-link>
              </li>
              <li class="nav-item">
                <router-link
                  to="/stokbuku/input"
                  class="nav-link"
                  active-class="active"
                >
                  <i class="far fa-circle nav-icon"></i>
                  <p>Input Stok Buku</p>
                </router-link>
              </li>
            </ul>
          </li>
          <li class="nav-item">
            <router-link to="/riwayat" class="nav-link" active-class="active">
              <i class="nav-icon fas fa-list"></i>
              <p>Riwayat Peminjaman</p>
            </router-link>
          </li>
        </ul>
      </nav>
    </div>
  </aside>
</template>

<script>
export default {
  name: "LibraryAppsHeader",
};
</script>
