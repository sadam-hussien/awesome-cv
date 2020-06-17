$(function () {


    // toggle active class on links
    $("header .menu li").on("click", function () {

        $(this).addClass("active").siblings("li").removeClass("active");

        // go to section
        var getData = $(this).data("link");
        $("html, body").animate({

            scrollTop: $("." + getData).offset().top

        },1000);

    });

    $(".toggle_header button").on("click", function () {

        $(this).toggleClass("active");

        $("header").toggleClass("active");

        $(".profile_content").toggleClass("no_content");

    });

    // add active class on menu items when scrolling
    $(window).on("scroll", function () {

        $("section").each(function () {

            if ($(window).scrollTop() >= $(this).offset().top) {

                var getId = $(this).attr("id");

                $("header .menu ul li[data-link="+ getId +"]").addClass("active").siblings().removeClass("active");

            }


        });

    });

    // download btn effect
    let btn = $(".download_btn");

    btn.on("mousemove", function (e) {

        let coor = e.target.getBoundingClientRect();

        let x = e.clientX - coor.left;

        let y = e.clientY - coor.top;

        btn.css("--x", x + "px");

        btn.css("--y", y + "px");


    });


    // init skill progress

    function initprogress(elem) {

        $(window).scroll( function(){

            $(elem).each( function (i) {
        
                var bottom_of_object = $(this).offset().top + $(this).outerHeight() + 30;
                
                var bottom_of_window = $(window).scrollTop() + $(window).height();
        
                /* If the object is completely visible in the window, fade it in */
                if( bottom_of_window > bottom_of_object ){
        
                    $(elem).easyPieChart({
                        lineWidth: 10,
                        barColor: "#3f51b5",
                        trackColor: "rgba(255, 255, 255, .04)",
                        scaleColor: false,
                        onStep: function(from, to, percent) {
                            $(this.el).find('.percent').text(Math.round(percent));
                        }
                        
                    });
        
                }
        
            }); 
        
        });

    };

    initprogress(".main_skills .chart");
    initprogress(".frameworks_skills .chart");
    initprogress(".other_skills .chart");

    // works mixitup
    var mixer = mixitup('.items_wrap');

    // start animating

    // start header
    gsap.from("header .head_area", {
        duration: 1.5,
        opacity: 0,
    });
    gsap.from("header .menu ul li", {
        duration: 1.5,
        delay: 1,
        opacity: 0,
        stagger: .4,
    });
    gsap.from("header .our_social li", {
        duration: 1.5,
        delay: 2,
        opacity: 0,
        stagger: .4,
    });
    // end header

    gsap.from(".main_info .my_name_text", {
        duration: 1.5,
        opacity: 0,
        x: 300,
        y: 300
    });

    gsap.from(".main_info .name", {
        delay: 1.5,
        duration: 1.5,
        opacity: 0,
    });
    
    gsap.from(".main_info .img", {
        delay: 1.5,
        duration: 1.5,
        opacity: 0,
        x: -200,

    });

    gsap.from(".main_info .my_btns button", {
        delay: 2,
        duration: 1,
        opacity: 0,
        stagger: 0.5,

    });

    // title
    var aboutTitle = gsap.from(".about .global_title", {
        duration: 1,
        opacity: 0,
        y: 200,
        paused: true
    });

    var servicesTitle = gsap.from(".services .global_title", {
        duration: 1,
        opacity: 0,
        y: 200,
        paused: true
    });

    var skillsTitle = gsap.from(".skills .global_title", {
        duration: 1,
        opacity: 0,
        y: 200,
        paused: true
    });

    var worksTitle = gsap.from(".works .global_title", {
        duration: 1,
        opacity: 0,
        y: 200,
        paused: true
    });

    var contactTitle = gsap.from(".contact .global_title", {
        duration: 1,
        opacity: 0,
        y: 200,
        paused: true
    });

    function title_anim(ourElement, n, anytween) {

        $(window).on("scroll", function () {

            if ($(this).scrollTop() >= $(ourElement).offset().top - n) {

                anytween.play();

            }

        });
    };

    title_anim($(".about"), 300, aboutTitle);
    title_anim($(".services"), 300, servicesTitle);
    title_anim($(".skills"), 300, skillsTitle);
    title_anim($(".works"), 300, worksTitle);
    title_anim($(".contact"), 300, contactTitle);

    // start findElements function

    // start about section
    var aboutImg = gsap.from(".about .about_img", {
        duration: 1,
        xPercent: -200,
        paused: true
    });
    var aboutname = gsap.from(".about .my_name", {
        duration: 1,
        delay: .8,
        y: 100,
        opacity: 0,
        paused: true
    });
    var aboutp = gsap.from(".about p", {
        duration: 1,
        delay: 1.2,
        xPercent: 120,
        stagger: .4,
        paused: true
    });
    var aboutsocial = gsap.from(".about .our_social li", {
        duration: 1,
        delay: 1.6,
        opacity: 0,
        stagger: .4,
        paused: true
    });
    var aboutbtn = gsap.from(".about .download_btn", {
        duration: 1,
        delay: 1.8,
        opacity: 0,
        y: 100,
        paused: true
    });
    // end about section

    // start services section
    var servicesitem = gsap.from(".services .single_service", {
        duration: 1,
        opacity: 0,
        y: 150,
        stagger: .4,
        paused: true
    });
    // end services section
    
    // start skills
    var skillsmaindefination = gsap.from(".skills .main_skills .skills_defination", {
        duration: 1,
        opacity: 0,
        y: 100,
        paused: true
    });
    var skillsframeworksdefination = gsap.from(".skills .frameworks_skills .skills_defination", {
        duration: 1,
        opacity: 0,
        y: 100,
        paused: true
    });
    var skillsotherdefination = gsap.from(".skills .other_skills .skills_defination", {
        duration: 1,
        opacity: 0,
        y: 100,
        paused: true
    });
    // end skills

    // start works
    var workstabs = gsap.from(".works .tabs li", {
        duration: 1,
        opacity: 0,
        stagger: .4,
        paused: true
    });
    var worksitem = gsap.from(".works .items_wrap .item", {
        duration: 1,
        delay: .7,
        opacity: 0,
        stagger: .4,
        paused: true
    });

    // end works

    function findElements(offsetElement, num, whatween) {

        $(window).on("scroll", function () {

            if ($(this).scrollTop() >= offsetElement.offset().top - num) {

                whatween.play();

            }

        });

    }

    // start about
    findElements($(".about"), 100, aboutImg);
    findElements($(".about"), 100, aboutname);
    findElements($(".about"), 100, aboutp);
    findElements($(".about"), 100, aboutsocial);
    findElements($(".about"), 100, aboutbtn);
    // emd about

    // start services
    findElements($(".services"), 100, servicesitem);
    // end services

    // start skills
    findElements($(".skills"), 100, skillsmaindefination);
    findElements($(".skills"), (-200), skillsframeworksdefination);
    findElements($(".skills"), (-600), skillsotherdefination);
    // end skills

    // start works
    findElements($(".works"), 100, workstabs);
    findElements($(".works"), 100, worksitem);
    // end works

    // end findElements function

    // start skills
    function triggerSkills(offsetElement, num, whatween) {

        $(window).on("scroll", function () {

            if ($(this).scrollTop() >= offsetElement.offset().top - num) {

                whatween.play();

            }

        });

    }
    // end skills

    

});

