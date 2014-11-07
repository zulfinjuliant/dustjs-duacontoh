$(document).ready(function () {
    var data = {
        "hari": "Hari",
        "tanggal": "Tanggal",
        

    }
    
    var source   = $("#absen-js").html();
    var compiled = dust.compile(source, "index");
    dust.loadSource(compiled);
    
    dust.render("index", data, function(err, out) {
        $("#hasil").html(out);
    });
});
