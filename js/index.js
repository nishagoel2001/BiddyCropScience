$('#contactForm').submit((evt) => {
  $('#contactSubmit').prop('disabled', true);
  evt.preventDefault();
  $.ajax({
    url: './contactUs.php',
    type: 'POST',
    data: {
      name: $('#contactFullname').val(),
      email: $('#contactEmail').val(),
      phone: $('#contactNumber').val(),
      msg: $('#contactMessage').val(),
    },
    dataType: 'JSON',
    success: (res) => {
      $('#contactSubmit').prop('disabled', false);
      if (res.status) {
        $('#contactForm').trigger('reset');
        alert(
          'Thank you for contacting us. Someone from Biddy Crop Science team will contact you soon.'
        );
        $('#contactForm').trigger('reset');
      } else {
        alert('Oops!! Something went wrong. Please try again..');
      }
    },
  });
});

$('#newsletterForm').submit((evt) => {
  evt.preventDefault();
  $('#newsletterSubmit').prop('disabled', true);
  $.ajax({
    url: './newsletter.php',
    type: 'POST',
    data: {
      email: $('#exampleInputEmail1').val(),
    },
    dataType: 'JSON',
    success: (res) => {
      $('#newsletterSubmit').prop('disabled', false);
      if (res.status) {
        $('#newsletterForm').trigger('reset');
        alert('Thank you for subscribing');
      } else {
        if (res.error.indexOf('Duplicate entry') >= 0)
          alert('Hi!.. You have already subscribed to our newsletter');
        else alert('Oops!! Something went wrong. Please try again..');
      }
    },
  });
});
