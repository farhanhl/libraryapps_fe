<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Input Buku</h1>
          </div>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="container-fluid">
        <div class="card card-default">
          <div class="card-body">
            <form action="">
              <div class="form-group">
                <label>Judul</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Penerbit</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Tahun Terbit</label>
                <input type="number" class="form-control" />
              </div>
              <button type="button" class="btn btn-primary" @click="showToast">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
import toastr from "toastr";
export default {
  name: "LibraryAppsInputBuku",
  methods: {
    showToast() {
      toastr.success(
        "Lorem ipsum dolor sit amet, consetetur sadipscing elitr.",
        "Toast Title"
      );
    },
  },
};
</script>
