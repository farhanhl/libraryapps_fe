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
                <label>NIM</label>
                <input type="number" class="form-control" />
              </div>
              <div class="form-group">
                <label>Nama</label>
                <input type="text" class="form-control" />
              </div>
              <div class="form-group">
                <label>Jenis Kelamin</label>
                <select class="form-control">
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
              <div class="form-group">
                <label>Status</label>
                <select class="form-control">
                  <option value="true">Aktif</option>
                  <option value="false">Tidak Aktif</option>
                </select>
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
