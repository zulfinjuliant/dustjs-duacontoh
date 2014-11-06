$(document).ready(function () {
    var data = {
        "judul": "Makanan dan Minuman", 
        "makanans" : [{ "makanan":"Roti Pisang" },{ "makanan":"Kue Tar" },{ "makanan":"Pisang Coklat" }],
        "minumans" : [{ "minuman":"Es Teh"},{ "minuman":"Es Buah" },{"minuman":"Es Cincau"}]
    }
    
    var source   = $("#dustjs-templeting").html();
    var compiled = dust.compile(source, "index");
    dust.loadSource(compiled);
    
    dust.render("index", data, function(err, out) {
        $("#output").html(out);
    });
});
