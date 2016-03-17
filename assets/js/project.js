function OpenProject(button) {

    var id = $(button).data('target');
    var $project = $(button).closest('.project');

    var scrollTop = $(window).scrollTop();
    var distanceTop = $project.offset().top;

    var projectTop = distanceTop - scrollTop; 
    var projectLeft = $project.offset().left;
    var projectHeight = $project.innerHeight();
    var projectWidth = $project.innerWidth();
    var projectHtml = '';

    modal = $('#project');

    if (id=="Morocco") {
        projectHtml = '';
        projectHtml += '<span class="icon-close"><i class="pe-7s-close-circle"></i></span>';
        projectHtml += '<div>';
        projectHtml += '<div class="project-details">';
        projectHtml += '<div class="container">';
        projectHtml += '<div class="project-title">';
        projectHtml += '<h5>Morocco<span>.</span></h5>';
        projectHtml += '<h2>2014</h2>';
        projectHtml += '<div class="separator-container">';
        projectHtml += '<div class="separator line-separator">∎</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="row">';
        projectHtml += '<div class="col-md-4">';
        projectHtml += '<div class="project-text">';
        projectHtml += '<p>The Kingdom of Morocco is the most westerly of the North African countries known as the Maghreb - the "Arab West". It has Atlantic and Mediterranean coastlines, a rugged mountain interior and a history of independence not shared by its neighbours.</p>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="col-md-8">';
        projectHtml += '<div class="row">';
        projectHtml += AddImage('mor4.jpg');
        projectHtml += AddImage('mor3.jpg');
        projectHtml += AddImage('mor2.jpg');
        projectHtml += AddImage('mor1.jpg');
        projectHtml += AddImage('mor6.jpg');
        projectHtml += AddImage('mor7.jpg');
        projectHtml += AddImage('mor8.jpg');
        projectHtml += AddImage('mor9.jpg');
        projectHtml += AddImage('mor10.jpg');
        projectHtml += AddImage('mor11.jpg');
        projectHtml += AddImage('mor12.jpg');
        projectHtml += AddImage('mor13.jpg');
        projectHtml += AddImage('mor14.jpg');
        projectHtml += AddImage('mor15.jpg');
        projectHtml += AddImage('mor16.jpg');
        projectHtml += AddImage('mor17.jpg'); 
        projectHtml += AddImage('mor18.jpg');
        projectHtml += AddImage('mor19.jpg');
        projectHtml += AddImage('mor20.jpg');
        projectHtml += AddImage('mor21.jpg');
        projectHtml += AddImage('mor22.jpg');
        projectHtml += AddImage('mor23.jpg');
        projectHtml += AddImage('mor24.jpg');
        projectHtml += AddImage('mor25.jpg');
        projectHtml += AddImage('mor26.jpg'); 
        projectHtml += AddImage('mor27.jpg');
        projectHtml += AddImage('mor28.jpg');
        projectHtml += AddImage('mor29.jpg');
        projectHtml += AddImage('mor30.jpg');
        projectHtml += AddImage('mor5.jpg');
        projectHtml += AddImage('mor31.jpg');
        projectHtml += AddImage('mor32.jpg');
        projectHtml += AddImage('mor33.jpg');
        projectHtml += AddImage('mor34.jpg');
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
    }

    if (id=="Cardiff") {
        projectHtml = '';
        projectHtml += '<span class="icon-close"><i class="pe-7s-close-circle"></i></span>';
        projectHtml += '<div>';
        projectHtml += '<div class="project-details">';
        projectHtml += '<div class="container">';
        projectHtml += '<div class="project-title">';
        projectHtml += '<h5>Cardiff<span>.</span></h5>';
        projectHtml += '<h2>2014</h2>';
        projectHtml += '<div class="separator-container">';
        projectHtml += '<div class="separator line-separator">∎</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="row">';
        projectHtml += '<div class="col-md-4">';
        projectHtml += '<div class="project-text">';
        projectHtml += '<p>Rugged beaches have developed in the mainly low lying and reclaimed marshland on top of a Triassic landscape, on the coastal region of southern Wales.</p>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="col-md-8">';
        projectHtml += '<div class="row">';
        projectHtml += AddImage('car4.jpg');
        projectHtml += AddImage('car3.jpg');
        projectHtml += AddImage('car5.jpg');
        projectHtml += AddImage('car2.jpg');
        projectHtml += AddImage('car1.jpg');
        projectHtml += AddImage('car7.jpg');
        projectHtml += AddImage('car8.jpg');
        projectHtml += AddImage('car9.jpg');
        projectHtml += AddImage('car10.jpg');
        projectHtml += AddImage('car11.jpg');
        projectHtml += AddImage('car12.jpg');
        projectHtml += AddImage('car13.jpg'); 
        projectHtml += AddImage('car14.jpg');
        projectHtml += AddImage('car15.jpg');
        projectHtml += AddImage('car16.jpg');
        projectHtml += AddImage('car17.jpg');
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
    }

    if (id=="Experimental") {
        projectHtml = '';
        projectHtml += '<span class="icon-close"><i class="pe-7s-close-circle"></i></span>';
        projectHtml += '<div>';
        projectHtml += '<div class="project-details">';
        projectHtml += '<div class="container">';
        projectHtml += '<div class="project-title">';
        projectHtml += '<h5>Experimental<span>.</span></h5>';
        projectHtml += '<h2></h2>';
        projectHtml += '<div class="separator-container">';
        projectHtml += '<div class="separator line-separator">∎</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="row">';
        projectHtml += '<div class="col-md-4">';
        projectHtml += '<div class="project-text">';
        projectHtml += '<p>A collection of my various experimental and abstract pictures.</p>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="col-md-8">';
        projectHtml += '<div class="row">';
        projectHtml += AddImage('exp2.jpg');
        projectHtml += AddImage('exp3.jpg');
        projectHtml += AddImage('exp4.jpg');
        projectHtml += AddImage('exp5.jpg');
        projectHtml += AddImage('exp6.jpg');
        projectHtml += AddImage('exp7.jpg');
        projectHtml += AddImage('exp8.jpg');
        projectHtml += AddImage('exp9.jpg');
        projectHtml += AddImage('exp10.jpg');
        projectHtml += AddImage('exp11.jpg');
        projectHtml += AddImage('exp12.jpg');
        projectHtml += AddImage('exp13.jpg'); 
        projectHtml += AddImage('exp14.jpg');
        projectHtml += AddImage('exp15.jpg');
        projectHtml += AddImage('exp16.jpg');
        projectHtml += AddImage('exp17.jpg');
        projectHtml += AddImage('exp18.jpg');
        projectHtml += AddImage('exp19.jpg');
        projectHtml += AddImage('exp20.jpg');
        projectHtml += AddImage('exp21.jpg');
        projectHtml += AddImage('exp22.jpg');
        projectHtml += AddImage('exp23.jpg');
        projectHtml += AddImage('exp24.jpg');
        projectHtml += AddImage('exp25.jpg');
        projectHtml += AddImage('exp26.jpg');
        projectHtml += AddImage('exp27.jpg');
        projectHtml += AddImage('exp28.jpg');
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
    }

    if (id=="Thailand-Laos") {
        projectHtml = '';
        projectHtml += '<span class="icon-close"><i class="pe-7s-close-circle"></i></span>';
        projectHtml += '<div>';
        projectHtml += '<div class="project-details">';
        projectHtml += '<div class="container">';
        projectHtml += '<div class="project-title">';
        projectHtml += '<h5>Thailand & Laos<span>.</span></h5>';
        projectHtml += '<h2>2011</h2>';
        projectHtml += '<div class="separator-container">';
        projectHtml += '<div class="separator line-separator">∎</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="row">';
        projectHtml += '<div class="col-md-4">';
        projectHtml += '<div class="project-text">';
        projectHtml += '<p>Thailand and the laidback river lifestyle of Laos is a voyage of discovery, taking in the bright lights and tourist trails in Thailand, the age old charms of Luang Prabang in Laos and the temples of Vientiane I traveled down the mighty Mekong River and become immersed in the tranquillity of remote villages and friendly locals along the way.</p>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="col-md-8">';
        projectHtml += '<div class="row">';
        projectHtml += AddImage('thai2.jpg');
        projectHtml += AddImage('thai3.jpg');
        projectHtml += AddImage('thai4.jpg');
        projectHtml += AddImage('thai5.jpg');
        projectHtml += AddImage('thai6.jpg');
        projectHtml += AddImage('thai7.jpg');
        projectHtml += AddImage('thai9.jpg');
        projectHtml += AddImage('thai10.jpg');
        projectHtml += AddImage('thai11.jpg');
        projectHtml += AddImage('thai12.jpg');
        projectHtml += AddImage('thai15.jpg');
        projectHtml += AddImage('thai16.jpg');
        projectHtml += AddImage('thai17.jpg');
        projectHtml += AddImage('thai19.jpg');
        projectHtml += AddImage('thai20.jpg');
        projectHtml += AddImage('thai21.jpg');
        projectHtml += AddImage('thai22.jpg');
        projectHtml += AddImage('thai23.jpg');
        projectHtml += AddImage('thai24.jpg');
        projectHtml += AddImage('thai25.jpg');
        projectHtml += AddImage('thai26.jpg');
        projectHtml += AddImage('thai27.jpg');
        projectHtml += AddImage('thai28.jpg');
        projectHtml += AddImage('thai29.jpg');
        projectHtml += AddImage('thai30.jpg');
        projectHtml += AddImage('thai31.jpg');
        projectHtml += AddImage('thai32.jpg');
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
    }

    if (id=="Black-N-White") {
        projectHtml = '';
        projectHtml += '<span class="icon-close"><i class="pe-7s-close-circle"></i></span>';
        projectHtml += '<div>';
        projectHtml += '<div class="project-details">';
        projectHtml += '<div class="container">';
        projectHtml += '<div class="project-title">';
        projectHtml += '<h5>Black N White<span>.</span></h5>';
        projectHtml += '<h2></h2>';
        projectHtml += '<div class="separator-container">';
        projectHtml += '<div class="separator line-separator">∎</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="row">';
        projectHtml += '<div class="col-md-4">';
        projectHtml += '<div class="project-text">';
        projectHtml += '<p>A collection of some of my black and white photography.</p>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="col-md-8">';
        projectHtml += '<div class="row">';
        projectHtml += AddImage('bnw21.jpg');
        projectHtml += AddImage('bnw2.jpg');
        projectHtml += AddImage('bnw3.jpg');
        projectHtml += AddImage('bnw4.jpg');
        projectHtml += AddImage('bnw7.jpg');
        projectHtml += AddImage('bnw8.jpg');
        projectHtml += AddImage('bnw9.jpg');
        projectHtml += AddImage('bnw10.jpg');
        projectHtml += AddImage('bnw11.jpg');
        projectHtml += AddImage('bnw12.jpg');
        projectHtml += AddImage('bnw13.jpg');
        projectHtml += AddImage('bnw14.jpg'); 
        projectHtml += AddImage('bnw15.jpg');
        projectHtml += AddImage('bnw16.jpg');
        projectHtml += AddImage('bnw18.jpg');
        projectHtml += AddImage('bnw19.jpg');
        projectHtml += AddImage('bnw20.jpg');
        projectHtml += AddImage('bnw1.jpg');
        projectHtml += AddImage('bnw22.jpg'); 
        projectHtml += AddImage('bnw23.jpg');
        projectHtml += AddImage('bnw24.jpg');
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
    }

    if (id=="Cambodia") {
        projectHtml = '';
        projectHtml += '<span class="icon-close"><i class="pe-7s-close-circle"></i></span>';
        projectHtml += '<div>';
        projectHtml += '<div class="project-details">';
        projectHtml += '<div class="container">';
        projectHtml += '<div class="project-title">';
        projectHtml += '<h5>Cambodia<span>.</span></h5>';
        projectHtml += '<h2>2013</h2>';
        projectHtml += '<div class="separator-container">';
        projectHtml += '<div class="separator line-separator">∎</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="row">';
        projectHtml += '<div class="col-md-4">';
        projectHtml += '<div class="project-text">';
        projectHtml += '<p>In 2013 I travelled to Cambodia. Cambodia\'s ancient name is "Kambuja". In 802 AD, Jayavarman II declared himself "King" and marked the beginning of the Khmer Empire which flourished for over 600 years, allowing successive kings to dominate much of Southeast Asia and accumulate immense power and wealth. The Indianized kingdom built monumental temples including Angkor Wat, now a World Heritage Site, and facilitated the spread of first Hinduism, then Buddhism to much of Southeast Asia. After the fall of Angkor to Ayutthaya in the 15th century, Cambodia was then ruled as a vassal between its neighbours.</p>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="col-md-8">';
        projectHtml += '<div class="row">';
        projectHtml += AddImage('cam1.jpg');
        projectHtml += AddImage('cam2.jpg');
        projectHtml += AddImage('cam3.jpg');
        projectHtml += AddImage('cam4.jpg');
        projectHtml += AddImage('cam5.jpg');
        projectHtml += AddImage('cam6.jpg');
        projectHtml += AddImage('cam7.jpg');
        projectHtml += AddImage('cam8.jpg');
        projectHtml += AddImage('cam9.jpg');
        projectHtml += AddImage('cam10.jpg');
        projectHtml += AddImage('cam11.jpg');
        projectHtml += AddImage('cam12.jpg');
        projectHtml += AddImage('cam13.jpg');
        projectHtml += AddImage('cam14.jpg');
        projectHtml += AddImage('cam15.jpg');
        projectHtml += AddImage('cam16.jpg'); 
        projectHtml += AddImage('cam17.jpg');
        projectHtml += AddImage('cam18.jpg');
        projectHtml += AddImage('cam19.jpg');
        projectHtml += AddImage('cam20.jpg');
        projectHtml += AddImage('cam32.jpg');
        projectHtml += AddImage('cam33.jpg');
        projectHtml += AddImage('cam34.jpg');
        projectHtml += AddImage('cam35.jpg');
        projectHtml += AddImage('cam36.jpg');
        projectHtml += AddImage('cam37.jpg');
        projectHtml += AddImage('cam38.jpg');
        projectHtml += AddImage('cam39.jpg');
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
    }

    if (id=="Autumn") {
        projectHtml = '';
        projectHtml += '<span class="icon-close"><i class="pe-7s-close-circle"></i></span>';
        projectHtml += '<div>';
        projectHtml += '<div class="project-details">';
        projectHtml += '<div class="container">';
        projectHtml += '<div class="project-title">';
        projectHtml += '<h5>Autumn<span>.</span></h5>';
        projectHtml += '<h2>2014</h2>';
        projectHtml += '<div class="separator-container">';
        projectHtml += '<div class="separator line-separator">∎</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="row">';
        projectHtml += '<div class="col-md-4">';
        projectHtml += '<div class="project-text">';
        projectHtml += '<p>Formerly green leaves turn to brilliant shades of yellow, orange, and red. These color changes are the result of transformations in leaf pigments. The green pigment in leaves is chlorophyll. Chlorophyll absorbs red and blue light from the sunlight that falls on leaves.</p>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="col-md-8">';
        projectHtml += '<div class="row">';
        projectHtml += AddImage('aut31.jpg');
        projectHtml += AddImage('aut5.jpg');
        projectHtml += AddImage('aut1.jpg');
        projectHtml += AddImage('aut4.jpg');
        projectHtml += AddImage('aut2.jpg');
        projectHtml += AddImage('aut7.jpg');
        projectHtml += AddImage('aut8.jpg');
        projectHtml += AddImage('aut9.jpg');
        projectHtml += AddImage('aut10.jpg');
        projectHtml += AddImage('aut11.jpg');
        projectHtml += AddImage('aut12.jpg');
        projectHtml += AddImage('aut32.jpg');
        projectHtml += AddImage('aut33.jpg');
        projectHtml += AddImage('aut34.jpg');
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
    }

    if (id=="Bangkok") {
        projectHtml = '';
        projectHtml += '<span class="icon-close"><i class="pe-7s-close-circle"></i></span>';
        projectHtml += '<div>';
        projectHtml += '<div class="project-details">';
        projectHtml += '<div class="container">';
        projectHtml += '<div class="project-title">';
        projectHtml += '<h5>Bangkok<span>.</span></h5>';
        projectHtml += '<h2>2011</h2>';
        projectHtml += '<div class="separator-container">';
        projectHtml += '<div class="separator line-separator">∎</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="row">';
        projectHtml += '<div class="col-md-4">';
        projectHtml += '<div class="project-text">';
        projectHtml += '<p>Bangkok traces its roots to a small trading post during the Ayutthaya Kingdom in the 15th century, which eventually grew in size and became the site of two capital cities: Thonburi in 1768 and Rattanakosin in 1782. Bangkok was at the heart of Siam\'s (as Thailand used to be known) modernization, during the later 19th century, as the country faced pressures from the West. The city was the centre of Thailand\'s political struggles, throughout the 20th century, as the country abolished absolute monarchy, adopted constitutional rule and underwent numerous coups and several uprisings. The city grew rapidly during the 1960s through the 1980s and now exerts a significant impact among Thailand\'s politics, economy, education, media and modern society.</p>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="col-md-8">';
        projectHtml += '<div class="row">';
        projectHtml += AddImage('bank2.jpg');
        projectHtml += AddImage('bank3.jpg');
        projectHtml += AddImage('bank4.jpg');
        projectHtml += AddImage('bank.jpg');
        projectHtml += AddImage('bank5.jpg');
        projectHtml += AddImage('bank6.jpg');
        projectHtml += AddImage('bank7.jpg');
        projectHtml += AddImage('bank8.jpg');
        projectHtml += AddImage('bank9.jpg');
        projectHtml += AddImage('bank10.jpg');
        projectHtml += AddImage('bank11.jpg');
        projectHtml += AddImage('bank12.jpg'); 
        projectHtml += AddImage('bank13.jpg');
        projectHtml += AddImage('bank14.jpg');
        projectHtml += AddImage('bank15.jpg');
        projectHtml += AddImage('bank16.jpg');
        projectHtml += AddImage('bank17.jpg');
        projectHtml += AddImage('bank18.jpg');
        projectHtml += AddImage('bank19.jpg');
        projectHtml += AddImage('bank20.jpg');
        projectHtml += AddImage('bank21.jpg'); 
        projectHtml += AddImage('bank22.jpg');
        projectHtml += AddImage('bank23.jpg');
        projectHtml += AddImage('bank24.jpg');
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
    }

    if (id=="Wales") {
        projectHtml = '';
        projectHtml += '<span class="icon-close"><i class="pe-7s-close-circle"></i></span>';
        projectHtml += '<div>';
        projectHtml += '<div class="project-details">';
        projectHtml += '<div class="container">';
        projectHtml += '<div class="project-title">';
        projectHtml += '<h5>Wales<span>.</span></h5>';
        projectHtml += '<h2>2012</h2>';
        projectHtml += '<div class="separator-container">';
        projectHtml += '<div class="separator line-separator">∎</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="row">';
        projectHtml += '<div class="col-md-4">';
        projectHtml += '<div class="project-text">';
        projectHtml += '<p>Wales is in the south-western part of the United Kingdom. From the east land border with England, by the Bristol Channel. Most  of Wales is mountainous with its highest peak - Snowdon, 1,085 meters above sea level.</p>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="col-md-8">';
        projectHtml += '<div class="row">';
        projectHtml += AddImage('wal12.jpg');
        projectHtml += AddImage('wal5.jpg');
        projectHtml += AddImage('wal3.jpg');
        projectHtml += AddImage('wal11.jpg');
        projectHtml += AddImage('wal4.jpg');
        projectHtml += AddImage('wal13.jpg');
        projectHtml += AddImage('wal14.jpg');
        projectHtml += AddImage('wal15.jpg');
        projectHtml += AddImage('wal16.jpg');
        projectHtml += AddImage('wal17.jpg');
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
    }

    if (id=="Sussex") {
        projectHtml = '';
        projectHtml += '<span class="icon-close"><i class="pe-7s-close-circle"></i></span>';
        projectHtml += '<div>';
        projectHtml += '<div class="project-details">';
        projectHtml += '<div class="container">';
        projectHtml += '<div class="project-title">';
        projectHtml += '<h5>Sussex<span>.</span></h5>';
        projectHtml += '<h2>2012</h2>';
        projectHtml += '<div class="separator-container">';
        projectHtml += '<div class="separator line-separator">∎</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="row">';
        projectHtml += '<div class="col-md-4">';
        projectHtml += '<div class="project-text">';
        projectHtml += '<p>Sussex has three main geographic sub-regions, each oriented approximately east to west. In the south-west of the county lies the fertile and densely populated coastal plain. North of this lie the rolling chalk hills of the South Downs, beyond which lies the well-wooded Sussex Weald.</p>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '<div class="col-md-8">';
        projectHtml += '<div class="row">';
        projectHtml += AddImage('sus17.jpg');
        projectHtml += AddImage('sus1.jpg');
        projectHtml += AddImage('sus3.jpg');
        projectHtml += AddImage('sus5.jpg');
        projectHtml += AddImage('sus2.jpg');
        projectHtml += AddImage('sus7.jpg');
        projectHtml += AddImage('sus8.jpg');
        projectHtml += AddImage('sus9.jpg');
        projectHtml += AddImage('sus10.jpg');
        projectHtml += AddImage('sus12.jpg');
        projectHtml += AddImage('sus14.jpg');
        projectHtml += AddImage('sus15.jpg'); 
        projectHtml += AddImage('sus16.jpg');
        projectHtml += AddImage('sus18.jpg');
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
        projectHtml += '</div>';
    }

    $(modal).html(projectHtml);

    $(modal).css({
     'top'  :    projectTop,
     'left' :    projectLeft, 
     'width' :   projectWidth,
     'height' :  projectHeight,
     'z-index'  : '1032'
    });

    $(modal).addClass('has-background');

    setTimeout(function(){
       $(modal).addClass('open');
    },30);

    setTimeout(function(){
       $('body').addClass('noscroll');
       $(modal).addClass('scroll');
    },1000);

    $('.icon-close').click(function(){
      $project_content = $(this).closest('.project-content');
      $project_content.removeClass('open scroll');
      
      $('body').removeClass("noscroll");
      //$('a').removeClass('no-opacity');
        setTimeout(function(){
            $project_content.removeClass('has-background');
            setTimeout(function(){    
                $project_content.removeAttr('style');     
            }, 450); 
        },500);
    });
} 

function AddImage(filename) {
    var imageHtml = '';
    imageHtml += '<div class="col-md-6">';
    imageHtml += '<div class="project-image">';
    imageHtml += '<img src="assets/img/imgsm/' + filename + '" onclick="OpenLightbox(\'assets/img/imglg/' + filename+'\',\''+'dummy caption'+'\'); return false" />';
    imageHtml += '</div>';
    imageHtml += '</div>';
    return imageHtml;
}
