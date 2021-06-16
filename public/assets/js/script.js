$.ajaxSetup({
    headers: {
      'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
    }
});
$(".slider").owlCarousel({
    margin: 20,
    loop: false,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0:{
        items:1,
        nav: false
      },
      600:{
        items:2,
        nav: false
      },
      1000:{
        items:3,
        nav: false
      }
    }
  });

  $('.brand-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout: 2000,
    responsive:{
      0:{
        items:3
      },
      600:{
        items:4
      },
      1000:{
        items:5
      }
    }
  });

  $('#click').on('click',function(){
    Swal.fire({
      title : 'Masukkan kode pemilihan',
      input : 'text'
    }).then(function(data) {
        $.ajax({
            url: "voting",
            type: 'post',
            data:{
                code: data.value
            }
        }).done(function() {
            Swal.fire({
            title:  'Voting anda telah masuk',
            icon :  'success'
            });
        });
    });
  });

  $("form").on("change", ".file-upload-field", function(){
    $(this).parent(".file-upload-wrapper").attr("data-text",$(this).val().replace(/.*(\/|\\)/,''));
});

$('#click1').on('click',function(){
    var name = $("#name").val();
    var place = $("#place").val();
    var date = $("#date").val();
    var telephone = $("#telephone").val();
    var address = $("#address").val();
    var visi = $("#visi").val();
    var misi = $("#misi").val();
    var upload = $("#upload").val();

    if(name == '' || place == '' || date == '' || telephone == '' || address == '' || visi == '' || misi == '' || upload == ''  ){
      Swal.fire({
        title: "Error",
        text: "Tolong semua kolom diisi",
        icon: "warning",
        button : "Ok",
      });
    }else{
      Swal.fire({
        title: "Berhasil",
        icon: "success",
        button: "Yesss",
      });

    }
  });
