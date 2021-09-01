
//choose courses
    $('.reservation-choose .stretched-link').on('click', function() {
    //aria-expanded
    let isExpanded = $(this).attr('aria-expanded');
    //console.log(isExpanded);
    let browseWidth = window.innerWidth;
  
    if(isExpanded === 'true'){ //展開
      //border-4 border-info
      //手機版適合 需要調整
      //$('.reservation-choose .card').removeClass('border-3').removeClass('border-secondary').hide(); 
      if(browseWidth <= 768){
      $('.reservation-choose .card').hide();
    }
      $('.reservation-choose .stretched-link').addClass('disabled');
      $(this).removeClass('disabled');
      $(this).parent().parent().parent().parent().addClass('border-4').addClass('border-secondary').show();
    }else{
      $('.reservation-choose .card').removeClass('border-4').removeClass('border-secondary');
      $('.choose').addClass('d-none');
      $('.reservation-choose .stretched-link').removeClass('disabled');
      $('.reservation-choose .card').removeClass('border-4').removeClass('border-secondary').show();
    }
  });
  
  
  //切換文字效果
  $('.course-pick').on('click', function() {
    const courseType = $(this).attr('data-tag'); //getAttribute
    const courseChosen = $(this).attr('data-card');
      //切換選擇項目
      $('.swiper-slide .card').removeClass('border-4').removeClass('border-white');
      $('.swiper-slide .check').addClass('opacity-5');
  
      if(courseType == 'first' || courseChosen == 'first'){
        $('#card1').addClass('border-4').addClass('border-white');
        $('#card1 .check').removeClass('opacity-5');
        
      }else if(courseType == 'short' || courseChosen == 'short'){
        $('#card2').addClass('border-4').addClass('border-white');
        $('#card2 .check').removeClass('opacity-5');
        
      }else if(courseType == 'long' || courseChosen == 'long'){
        $('#card3').addClass('border-4').addClass('border-white');
        $('#card3 .check').removeClass('opacity-5');
        
      }
  
  
    //切換標題名稱 
    $('.course-name').removeClass('.d-block').addClass('d-none');
    //console.log(courseType);
    if(courseType == 'first' || courseChosen == 'first'){
      $('#text1').removeClass('d-none').addClass('d-block');
    }else if(courseType == 'short' || courseChosen == 'short'){
      $('#text2').removeClass('d-none').addClass('d-block');
    }else if(courseType == 'long' || courseChosen == 'long'){
      $('#text3').removeClass('d-none').addClass('d-block');
    }
    render();
  
  })
