//Status Update
function changeText() {
    var num=Math.floor(Math.random() * 6); // returns a random integer from 0 to 4
    const conds = [
        {cond:num == 1, icon:"coffee", task:"Drinking vanilla cold brew"},
        {cond:num == 2, icon:"cookie-bite", task:"Making chocolate chip cookies"},
        {cond:num == 3, icon:"book", task:"Reading Swipe to Unlock"},
        {cond:num == 4, icon:"tv", task:"Watching Friends again"},
        {cond:num == 5, icon:"tv", task:"Watching Pixar film Soul"},
        {cond:true, icon:"music", task:"Listening to Joji"}
    ]
    let {task,icon} = conds.find(x => x.cond);
    document.getElementsByClassName("update")[0].innerHTML = `<i class="fas fa-${icon}"></i> ${task}`
}

//Modal generator
$(function() {
    $('.about').click(function() {
        $('.info').each(function(){
            var xRange = $(window).innerWidth() - 2*$(this).width();
            var yRange = $(window).innerHeight()- 2*$(this).height();
            var ram = Math.random(10) + Math.random(6) + .2;
            var posx = (xRange / $(document).width()) * Math.random() * 100 + ram*8;
            var posy = (yRange / $(document).height()) * Math.random() * 100 + ram*8;
            $(this).css({
                "left": posx + "%" , 
                "top": posy + "%",
                "z-index": Math.floor(Math.random() * 5)
            });
        });
        $('#closeAll').css({
            "left": 80 + "%", 
            "top": 15 + "%",
            "z-index": 100
        });
        $('#bio').css({
            "left": 22 + "%", 
            "top": 25 + "%",
            "z-index": 100
        });
        $('.info').show();
    });
    $(function() {
        $('.info').draggable();
      });
    $('#closeInfo1').click(function() {
        $('#info1').hide();
    });
    $('#closeInfo2').click(function() {
        $('#info2').hide();
    });
    $('#closeInfo3').click(function() {
        $('#info3').hide();
    });
    $('#closeInfo4').click(function() {
        $('#info4').hide();
    });
    $('#closeInfo5').click(function() {
        $('#info5').hide();
    });
    $('#closeBio').click(function() {
        $('#bio').hide();
    });
    $('#closeAll').click(function() {
        $('.info').hide();
    });
});


//Z-index update
function upperInfo(id) {
    var max = findHighestZIndex();
    document.getElementById(id).style.zIndex = max+1;
}

function findHighestZIndex() {
  var elems = document.getElementsByClassName('info');
  var highest = -1
  for (var i = 0; i < elems.length; i++) {
    var zindex = Number.parseInt(
      document.defaultView.getComputedStyle(elems[i], null).getPropertyValue("z-index"),
      10
    );
    if (zindex > highest) {
      highest = zindex;
    }}
  return highest;
}




