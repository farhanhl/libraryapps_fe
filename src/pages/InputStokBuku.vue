<template>
  <div class="content-wrapper">
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0">Input Mahasiswa</h1>
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
                <label>Buku</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Stok</label>
                <input type="number" class="form-control" />
              </div>
              <div class="form-group">
                <label>Lokasi</label>
                <input type="text" class="form-control" />
              </div>
              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LibraryAppsInputMahasiswa",
};
</script>
