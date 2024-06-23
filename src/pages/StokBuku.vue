<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Data Stok Buku</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container-fluid">
        <div class="card card-default">
          <div class="card-body">
            <table id="tabel" class="table table-bordered table-striped">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Buku</th>
                  <th>Stok</th>
                  <th>Lokasi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeUnmount } from "vue";
import $ from "jquery";

export default {
  name: "LibraryAppsInputStokBuku",
  setup() {
    let dataTableInstance;

    onMounted(() => {
      dataTableInstance = $("#tabel").DataTable({
        responsive: true,
        autoWidth: true,
        lengthChange: false,
      });
    });

    onBeforeUnmount(() => {
      if (dataTableInstance) {
        dataTableInstance.destroy();
      }
    });
  },
};
</script>
