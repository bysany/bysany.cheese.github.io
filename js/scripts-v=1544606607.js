$(document).ready(function () {

    $(document).on("scroll", function () {

        if ($(document).scrollTop() > 170) {
            $(".cap-box").addClass("cap-box-slide");
            //$(".fly-box-close").css("top","90px");
            //$(".cap-box").css('top','-100px');
            //$(".cap-box.cap-box-slide").css('top','0px');
            //$(".services-main-menu").fadeOut();
            $(".cap-box").addClass("cap-box-mini");
            $(".goontop").fadeIn();

        } else {
            $(".cap-box").removeClass("cap-box-slide");
            //$(".fly-box-close").css("top","20px");
            //$(".cap-box").css('top','25px');
            $(".cap-box-slide").css('top', '-100px');
            //$(".services-main-menu").fadeIn();
            //$(".cap-box").removeClass("cap-box-mini");
            $(".goontop").fadeOut();
        }

        if (($('.scrl').html() * 1) >= $(document).scrollTop()) {
            $('.scrlx').html('down');
        } else {
            $('.scrlx').html('up');
        }

        $('.scrl').html($(document).scrollTop());

        if ($(document).scrollTop() > 0) {
            $(".content-title-box-wrapper").addClass("content-title-box-wrapper-short");
            //$(".cap-box").fadeOut();
        } else {
            $(".content-title-box-wrapper").removeClass("content-title-box-wrapper-short");
            //$(".cap-box").fadeIn();
        }

    });

    $(".showcase-item-marker-bttn").click(function () {
        id = $(this).attr('id').replace("showcase-item", "");
        alert("Необходимо открыть всплывающий блок для товара " + id);
    });


    $(".ib_img").hover(function () {
        id = $(this).attr('id');
        $("#" + id + " .showcase-item").fadeIn(1);
    }, function () {
        $("#" + id + " .showcase-item").fadeOut(1);
    });

    $(".good-item").hover(function () {
        id = $(this).attr('id');
        $("#" + id).addClass('good-item-active');
    }, function () {
        id = $(this).attr('id');
        $("#" + id).removeClass('good-item-active');
    });

    $(".slider-menu-img").hover(function () {
        id = $(this).attr('id');
        $("#" + id).addClass('slider-menu-img-active');
    }, function () {
        id = $(this).attr('id');
        $("#" + id).removeClass('slider-menu-img-active');
    });


    $(".about-box-item").hover(function () {
        $(this).addClass("about-box-item-active");
    }, function () {
        $(this).removeClass("about-box-item-active");
    });


});


function showGood(id) {

    $(".fly-box-bg").fadeIn();
    $(".fly-box").fadeIn();

    $(".fly-box-html").addClass("preloader2");

    $.get("/content/build-good", {id: id},
        function (data) {
            $(".fly-box-html").removeClass("preloader2");
            $(".fly-box-html").html(data);
            $("#good-fly-box").fadeIn();
        }
    );
}


function showMore(id) {

    $(".fly-box-bg").fadeIn();
    $(".fly-box").fadeIn();

    $(".fly-box").addClass("preloader2");

    $.get("/content/build-info", {id: id},
        function (data) {
            $(".fly-box").addClass("fly-box-short");
            $(".fly-box-html").removeClass("preloader2");
            $(".fly-box-html").html(data);
            $("#good-fly-box").fadeIn();
        }
    );
}

function showVac(id) {

    $(".fly-box-bg").fadeIn();
    $(".fly-box").fadeIn();

    $(".fly-box").addClass("preloader2");

    $.get("/content/build-vac", {id: id},
        function (data) {
            $(".fly-box").addClass("fly-box-short");
            $(".fly-box-html").removeClass("preloader2");
            $(".fly-box-html").html(data);
            $("#good-fly-box").fadeIn();
        }
    );
}


function showGlPreloader() {
    $("#glpreloader").fadeIn();
}

function hideGlPreloader() {
    $("#glpreloader").fadeOut();
}

function gotopage(page) {
    $('body,html').animate({scrollTop: $("#" + page).offset().top}, 500);
}

function gotopage2(page, h) {
    $('body,html').animate({scrollTop: $("#" + page).offset().top - h}, 500);
}


function showBoxPreloader(box) {
    $("." + box + " .preloader-x").fadeIn();
}

function hideBoxPreloader(box) {
    $("." + box + " .preloader-x").fadeOut();
}


$(document).ready(function () {
    aboutBoxSetSize();
    $(window).resize(function () {
        aboutBoxSetSize();
    });
});

function aboutBoxSetSize() {
    if ($(window).width() > 670) {
        //$(".about-box-item-content").height($(".about-box-item").width());
    } else {
        //$(".about-box-item-content").height('auto');
    }
}


$(document).ready(function () {

    $(".slider-menu-img").hover(function () {
        $(this).addClass('slider-menu-img-hover');
    }, function () {
        $(this).removeClass('slider-menu-img-hover');
    });

    $(".slider-item-img").hover(function () {
        $(this).addClass('slider-item-img-hover');
    }, function () {
        $(this).removeClass('slider-item-img-hover');
    });

    $(".slider-menu-title").hover(function () {
        $(this).addClass('slider-menu-title-hover');
    }, function () {
        $(this).removeClass('slider-menu-title-hover');
    });


    $(".fly-box-show").click(function () {
        showFlyBox();
    });
    $(".fly-box-close").click(function () {
        hideFlyBox();
    });


    $(".goontop").click(function () {
        goontop();
    });


    $(".mob-menu-bttn").click(function () {
        $(".mob-menu").css("display", "flex");
    });
    $(".close-mob-menu").click(function () {
        $(".mob-menu").css("display", "none");
    });


});


function hideFlyBox() {
    $(".fly-box-bg").css('display', 'none');
    $(".fly-box").css('display', 'none');
}

function showFlyBox() {
    $(".fly-box-bg").css('display', 'block');
    $(".fly-box").css('display', 'flex');
}

// Load image (drag and drop)
$(document).ready(function () {

    // Load image (form)
    var input = document.querySelector('#avafile');
    input.addEventListener('change', function (ev) {
        showBoxPreloader('file_drag_area')
        var files = ev.target.files;
        var file = files[0];
        var formData = new FormData();
        formData.append('ava', file);
        $.ajax({
            url: "/profile/default/add-avatar",
            method: "POST",
            data: formData,
            contentType: false,
            cache: false,
            processData: false,
            success: function (data) {
                $('.file_drag_area_img').html("<img src='" + data + "'>");
                hideBoxPreloader('file_drag_area')
            }
        })
    })


    $('.file_drag_area').on('dragover', function () {
        if ($(".demo-basic-wrapper").css("display") == 'none') {
            $(this).addClass('file_drag_over');
        }
        return false;
    });
    $('.file_drag_area').on('dragleave', function () {
        if ($(".demo-basic-wrapper").css("display") == 'none') {
            $(this).removeClass('file_drag_over');
        }
        return false;
    });
    $('.file_drag_area').on('drop', function (e) {
        if ($(".demo-basic-wrapper").css("display") == 'none') {
            showBoxPreloader('file_drag_area')
            e.preventDefault();
            $(this).removeClass('file_drag_over');
            var formData = new FormData();
            var files_list = e.originalEvent.dataTransfer.files;
            var file = files_list[0];
            //console.log(file['type']);

            var formats = ['image/jpeg', 'image/png', 'image/gif'];
            console.log(formats.indexOf(file['type']));
            var toReturn = true;
            if (file['size'] > 1048576 * 2) {
                showAlert("Файл не должен быть больше 2 MB");
                toReturn = false;
            } else if (formats.indexOf(file['type']) == -1) {
                showAlert("Недопустимый формат файла");
                toReturn = false;
            }

            if (toReturn) {
                formData.append('ava', file);
                $.ajax({
                    url: "/profile/default/add-avatar",
                    method: "POST",
                    data: formData,
                    contentType: false,
                    cache: false,
                    processData: false,
                    success: function (data) {
                        $('.file_drag_area_img').html("<img src='" + data + "'>");
                        $(".file_drag_area_img img").mousedown(function () {
                            return false;
                        });
                        useAvatar(data);
                        $(".cropie-bttn").removeClass("cropie-bttn-hide");
                        hideBoxPreloader('file_drag_area')
                    }
                })
            } else {
                hideBoxPreloader('file_drag_area')
            }
        }
    });


    // Croper
    var mc = $('#croppie-ava-box').croppie({
        enableExif: true,
        viewport: {
            width: 300,
            height: 300,
            type: 'square'
        },
        boundary: {
            width: 360,
            height: 360
        }
    });
    // Open croper
    $('.show-croppie').on('click', function () {
        $.get("/profile/default/get-avatar", {action: ""},
            function (dataImg) {
                mc.croppie('bind', {url: '/cloud/avatars/' + dataImg});
                $(".demo-basic-wrapper").css("display", "block");
            }
        );
    });
    // Disallow drag image avatar
    $(".file_drag_area_img img").mousedown(function () {
        return false;
    });
    // Crop image
    $('.crop-image').on('click', function () {
        showBoxPreloader('file_drag_area')
        mc.croppie('result', {
            type: 'rawcanvas',
            format: 'jpeg',
            circle: false,
        }).then(function (canvas) {
            $(".file_drag_area_img").html("<img src='" + canvas.toDataURL() + "'>")
            mc.croppie('bind');
            console.log(canvas.toDataURL());
            $.post("/site/save-crop", {
                    img: canvas.toDataURL(),
                },
                function (data) {
                    $(".demo-basic-wrapper").css("display", "none");
                    $(".file_drag_area_img img").mousedown(function () {
                        return false;
                    });
                    useAvatar(canvas.toDataURL());
                    hideBoxPreloader('file_drag_area')
                }
            );

        });
    });
    // Open default load file window
    $('.load-file-bttn').on('click', function () {
        $('#avafile').click();
    });
    // Close cropie box
    $('.close-demo-basic').on('click', function () {
        mc.croppie('bind');
        $(".demo-basic-wrapper").css("display", "none");
    });


});


function showAlert(txt) {
    $(".alert-box span").html(txt);
    $(".alert-box").fadeIn();
    setTimeout(hideAlert, 3000);
}

function hideAlert() {
    $(".alert-box").fadeOut();
}


function useAvatar(data) {
    $(".aaa-avatar a").html("<img src='" + data + "'>");
}
1
$("#phone1").mask("+375 (99) 9999999", {
    completed: function () {
        alert("Вы ввели номер: " + this.val());
    }
});
/*1
$(function () {
    $("#phone1").mask("+375 ( 99 ) 9999999");
});*/
2
$("#date").mask("99.99.9999", {placeholder: "дд.мм.гггг"});
$("#index").mask("999999", {placeholder: " "});
3
$("#phone3").mask("8(999) 999-9999", {
    completed: function () {
        alert("Вы ввели номер: " + this.val());
    }
});
4
$("#number").mask("0.9?9");
5
$.mask.definitions['~'] = '[+-]';
$("#number2").mask("~9.99");
$.mask.definitions['h'] = '[A-Fa-f0-9]';
$("#color").mask("#hhhhhh");

$(function () {
    function maskPhone() {
        var country = $('#country option:selected').val();
        switch (country) {
            case "ru":
                $("#phone").mask("+7(999) 999-99-99");
                break;
            case "ua":
                $("#phone").mask("+380(999) 999-99-99");
                break;
            case "by":
                $("#phone").mask("+375(999) 999-99-99");
                break;
        }
    }

    maskPhone();
    $('#country').change(function () {
        maskPhone();
    });
});


function goontop() {
    $('body,html').animate({scrollTop: $(".goontop").height()}, 500);
}




