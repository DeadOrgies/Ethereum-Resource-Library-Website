var odometer = new Odometer({ 
    el: $('.odometer')[0], 
    value: 1234, 
    theme: 'minimal',
    duration: 3000
  });
  odometer.render();
  
  $('.odometer').text(5445);