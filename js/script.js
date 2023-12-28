
  (function ($){


    $(document).ready(function (){

      $(".mobile_menu").click(function(){
        
          $(".NavigationPages ul").fadeToggle();
        });


        // Owl Carousel Incluide


        // AOS Animation js Active
        AOS.init();

        // Progress bar active 
        $('#jq1').LineProgressbar({
          percentage: 95,
          fillBackgroundColor: '#1dd881',
          backgroundColor: '#1a5555',
          radius: '10px',
          height: '10px',
          width: '100%',
          duration: 2000,
        });


        $('#jq2').LineProgressbar({
          percentage: 89,
          fillBackgroundColor: '#1dd881',
          backgroundColor: '#1a5555',
          radius: '10px',
          height: '10px',
          width: '100%',
          duration: 2000,
        });


        $('#jq3').LineProgressbar({
          percentage: 63,
          fillBackgroundColor: '#1dd881',
          backgroundColor: '#1a5555',
          radius: '10px',
          height: '10px',
          width: '100%',
          duration: 2000,
        });


        $('#jq4').LineProgressbar({
          percentage: 51,
          fillBackgroundColor: '#1dd881',
          backgroundColor: '#1a5555',
          radius: '10px',
          height: '10px',
          width: '100%',
          ShowProgressCount:true,
          duration: 2000,
        });



        $('#jq5').LineProgressbar({
          percentage: 32,
          fillBackgroundColor: '#1dd881',
          backgroundColor: '#1a5555',
          radius: '10px',
          height: '10px',
          width: '100%',
          duration: 2000,
        });


        // page progerssssssssssssss
        $(function(){

          $('#Page-Progress').progress({
            innerBg:'#1a5555',
            size:'6px',
            wapperBg:'#1dd881',
            duration:'.7s',
          });
        
        });

        // cursor animation 


        $('#serialcursor').serialcursor({
          stateDataAttr: 'data-serialcursor-state',
          strokeColor: 'rgba(255, 255, 255, .4)',
          strokeWidth: 1,
          noiseScale: 150,
          noiseRange: 4,
          htmlCursor: '<div id="serialcursor"></div>',
          htmlInner: '<canvas id="serialcursor-inner"></canvas>',
          htmlPointer: '<div id="serialcursor-pointer"></div>',
          htmlGrab:
            '<div id="serialcursor-pointer-grab">'+
              '<svg class="sub-icon is-left" xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15">'+
                '<path d="M6.42,14.68A1,1,0,1,0,7.9,13.27L2.43,7.5,7.9,1.73a1,1,0,0,0,0-1.45,1,1,0,0,0-1.44,0L.28,6.8a1,1,0,0,0,0,1.4Z"/>'+
              '</svg>'+
              '<svg class="sub-icon is-right" xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15">'+
                '<path d="M1.77.32A1,1,0,0,0,.28,1.73L5.75,7.5.28,13.27a1,1,0,1,0,1.49,1.41L7.9,8.2a1,1,0,0,0,0-1.4Z"/>'+
              '</svg>'+
            '</div>'
        });










    });











  })(jQuery)


