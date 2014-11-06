$(document).ready(function () {

    //definisikan variabel yang akan di panggil
    var data = {
        "halo":"Halo Apa Kabar",
        "salam":"Selamat Anda Sudah Berhasil Belajar Dust.JS"
    }
    //definisikan id dari template HTML
    var source   = $("#halodunia").html();

    //definisikan source di atas buat di compile
    var compiled = dust.compile(source, "index");
    dust.loadSource(compiled);

    //untuk merender dan dijadikan hasil output
    dust.render("index", data, function(err, out) {
        $("#output-disini").html(out); // tampil di tag <div id="output-disini"></div>
    });
});
