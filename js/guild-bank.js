// JavaScript Document

/* JSON READING */
    var requestURL = 'https://git.reolyze.com/tntclassic/addon-and-backend-interface-scripts/raw/master/all-in-one/json/BankInventory.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
      var raiders = request.response;
      populateHeader(raiders);
      showStockedItems(raiders);
    }
    
    function populateHeader(jsonObj) {
      document.getElementById("lastUpdated").innerHTML += jsonObj['dateModified'];
      document.getElementById("lastUpdated").innerHTML += ' @ ' +jsonObj['timeModified'];
      document.getElementById("bank-gold").innerHTML += jsonObj['totalGold']+ 'g';
    }

    function showStockedItems(jsonObj) {
      var stockedItems = jsonObj['itemsBeingStocked'];
      //alert(stockedItems.length);
      for(var i = 0; i < stockedItems.length; i++) {
        //var myList2 = document.createElement('ol');
        
        var bankItemName = document.createElement('div');
        bankItemName.setAttribute('class', 'bank-item-name');
        var bankItemQty = document.createElement('div');
        bankItemQty.setAttribute('class', 'bank-item-qty');

        bankItemName.innerHTML = '<a href="https://classic.wowhead.com/item='+stockedItems[i].ItemID+'" target="_blank" rel="noopener">'+stockedItems[i].Name+'</a> x '+stockedItems[i].Quantity;
				//bankItemQty.innerHTML = stockedItems[i].Quantity;
        
        //template
        var template = $('#hidden-template').html();
        var item = $(template).clone();
    

        //changing stuff in the template
        //$(item).find('.tnt-raider').addClass(tntRaiders[i].class);
        $(item).find('.item-info').append(bankItemName);
        $(item).find('.item-info').append(bankItemQty);
        
        //Append to the source
        $('#guild-bank-list').append(item);

      }
      
      
      //var sellItems = jsonObj['itemsBeingSold'];
      var sellItems = jsonObj['itemsBeingSold'];
      //alert(sellItems.length);
      for(var j = 0; j < sellItems.length; j++) {
        var sellItemName = document.createElement('div');
        sellItemName.setAttribute('class', 'sell-item-name');
        var sellItemQty = document.createElement('div');
        sellItemQty.setAttribute('class', 'sell-item-qty');
        
        //alert(sellItems[j].Name);
        sellItemName.innerHTML = '<a href="https://classic.wowhead.com/item='+sellItems[j].ItemID+'" target="_blank" rel="noopener">'+sellItems[j].Name+'</a> x '+sellItems[j].Quantity;
				//sellItemQty.innerHTML = sellItems[j].Quantity;
        
        //template
        var template2 = $('#hidden-template').html();
        var item2 = $(template2).clone();
    

        //changing stuff in the template
        //$(item).find('.tnt-raider').addClass(tntRaiders[i].class);
        $(item2).find('.item-info').append(sellItemName);
        //$(item2).find('.item-info').append(sellItemQty);
        
        //Append to the source
        $('#guild-sell-list').append(item2);
      }
    }