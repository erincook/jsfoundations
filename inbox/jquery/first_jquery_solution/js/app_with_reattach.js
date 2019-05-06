$(function() {
  $('#addHome').removeClass('btn-danger').addClass('btn-success');
  $('.jumbotron').addClass('text-center');

  var $newLink = $('<br><br><a id="zillowLink" href="http://www.zillow.com">Visit Zillow.com<a>');
  $newLink.appendTo('body');
  $('#zillowLink').attr("target", "_blank");
  var $value = $('#zillowLink').attr('href');
  console.log($value);

  $('#homes tbody').on('click', 'tr', removeHome);

  //detaching homes from the DOM in order to keep the data, pushing to an empty array
  var detachedHomes = [];

  function removeHome() {
    $(this).fadeOut(1000, function(){

      detachedHomes.push($(this).detach());
      console.log(detachedHomes);
    });
  }

  var cells = $('#homes thead tr').children();
  cells.eq(0).css('color', 'blue');
  cells.eq(4).css('color', 'green');


  var newHomes = [
      {address: "27569 Cedarwood Drive", sf: "2,535", bedrooms: 3, baths: 2.5, price: "$496,500"},
      {address: "316 Annandale Drive", sf: "1,326", bedrooms: 4, baths: 2, price: "$275,000"},
      {address: "251 Grandview Road", sf: "3,800", bedrooms: 3, baths: 2, price: "$699,900"},
      {address: "28571 Manitoba", sf: "2,960", bedrooms: 4, baths: 3.5, price: "$775,000"}
  ];

//initializing a counter for the if/else conditional below.
  var counter = 0;

  $('#addHome').on('click', function(evt) {
    addHome();
    // console.log(this);
    // console.log(evt);
  });


  function addHome(){
    console.log("Appending");
    if(counter < newHomes.length){
      var $test = $('<tr><td>' + newHomes[counter].address + '</td><td>' + newHomes[counter].sf + '</td><td>' + newHomes[counter].bedrooms + '</td><td>' + newHomes[counter].baths + '</td><td>' + newHomes[counter].price + '</td><td><button class="btn btn-xs btn-danger">Remove</button></td></tr>');
    
      $test.appendTo('#homes tbody');   
      counter++;
      console.log(counter);
    } else {
      $('#addHome').prop("disabled", true);
      console.log("No more homes to add");
    }
  };

  //adding a button to add the detached homes
  var $addDetachedButton = $('<div><button id="addDetached" class="btn btn-danger">Add Deleted Homes</button></div>');
  $addDetachedButton.appendTo('body');

  $('#addDetached').on('click', function(evt) {
    addDetached();
  });


  // var detachCounter = 0;

  function addDetached(){
    console.log("Appending Detached");
    // console.log(detachedHomes[0][0]);
    var $detachArray = detachedHomes[0][0];
    var $attrChange = $($detachArray).css('display', '');
    console.log($attrChange[0]);
    $('#homes tbody').append($detachArray);

    // var $test = $('<tr><td>' + detachedHomes[detachCounter].address + '</td><td>' + detachedHomes[detachCounter].sf + '</td><td>' + detachedHomes[detachCounter].bedrooms + '</td><td>' + detachedHomes[detachCounter].baths + '</td><td>' + detachedHomes[detachCounter].price + '</td><td><button class="btn btn-xs btn-danger">Remove</button></td></tr>');
    
    // var $test = detachedHomes[0];

    //   $test.appendTo('#homes tbody');   
    //   detachCounter++;
    //   console.log(detachCounter);
  };




});