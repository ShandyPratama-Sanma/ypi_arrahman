$(document).ready(function(){

    $(".modal-bg").click(function(){
        var gambar = $(this).data("img");
        $("#modalBackground").attr("src", gambar);
        $("#backgroundModal").modal("show");
    });

    $(".modal-img").click(function(){
        var gambar = $(this).attr("src");
        $("#modalImage").attr("src", gambar);
        $("#imageModal").modal("show");
    });
    
});