function updateBooks() {
  $.each(info, function(i,p) {
    $('#booklist').append($('<h4></h4>').val(p).html(p));
    // console.log($('#booklist').text());
  });
}
