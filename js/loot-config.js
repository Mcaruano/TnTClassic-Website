// JavaScript Document

/* JSON READING */
		var section = document.querySelector('section');

/* Load T3 Prio Descending */
    var requestURL7 = 'https://git.reolyze.com/tntclassic/addon-and-backend-interface-scripts/-/raw/master/all-in-one/json/LootConfig_T3Priority_Desc.json';
    var request7 = new XMLHttpRequest();
    request7.open('GET', requestURL7);
    request7.responseType = 'json';
    request7.send();

    request7.onload = function() {
      var raiders = request7.response;
      populateHeader(raiders);
      showRaiders(raiders, "t3-prio-desc");
			//filterByClass();
    }
    
    /* Load T3 Lotto Descending */
			var requestURL8 = 'https://git.reolyze.com/tntclassic/addon-and-backend-interface-scripts/-/raw/master/all-in-one/json/LootConfig_T3Lottery_Desc.json';
			var request8 = new XMLHttpRequest();
			request8.open('GET', requestURL8);
			request8.responseType = 'json';
			request8.send();
    request8.onload = function() {
      var raiders = request8.response;
      //populateHeader(raiders);
      showRaiders(raiders, "t3-lotto-desc");
			//filterByClass();
    }

  /* Load T2.5 Prio Descending */
    var requestURL5 = 'https://git.reolyze.com/tntclassic/addon-and-backend-interface-scripts/-/raw/master/all-in-one/json/LootConfig_T2PT5Priority_Desc.json';
    var request5 = new XMLHttpRequest();
    request5.open('GET', requestURL5);
    request5.responseType = 'json';
    request5.send();

    request5.onload = function() {
      var raiders = request5.response;
      //populateHeader(raiders);
      showRaiders(raiders, "t2pt5-prio-desc");
			//filterByClass();
    }
    
    /* Load T2.5 Lotto Descending */
			var requestURL6 = 'https://git.reolyze.com/tntclassic/addon-and-backend-interface-scripts/-/raw/master/all-in-one/json/LootConfig_T2PT5Lottery_Desc.json';
			var request6 = new XMLHttpRequest();
			request6.open('GET', requestURL6);
			request6.responseType = 'json';
			request6.send();
    request6.onload = function() {
      var raiders = request6.response;
      //populateHeader(raiders);
      showRaiders(raiders, "t2pt5-lotto-desc");
			//filterByClass();
    }

		/* Load T2 Prio Descending */
    var requestURL = 'https://git.reolyze.com/tntclassic/addon-and-backend-interface-scripts/-/raw/master/all-in-one/json/LootConfig_T2Priority_Desc.json';
    var request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();

    request.onload = function() {
      var raiders = request.response;
      //populateHeader(raiders);
      showRaiders(raiders, "t2-prio-desc");
			//filterByClass();
    }
		
		/* Load T2 Lotto Descending */
			var requestURL2 = 'https://git.reolyze.com/tntclassic/addon-and-backend-interface-scripts/raw/master/all-in-one/json/LootConfig_T2Lottery_Desc.json';
			var request2 = new XMLHttpRequest();
			request2.open('GET', requestURL2);
			request2.responseType = 'json';
			request2.send();
    request2.onload = function() {
      var raiders = request2.response;
      //populateHeader(raiders);
      showRaiders(raiders, "t2-lotto-desc");
			//filterByClass();
			
    }
		
		/*		/* Load T1 Lotto Descending */
			var requestURL3 = 'https://git.reolyze.com/tntclassic/addon-and-backend-interface-scripts/raw/master/all-in-one/json/LootConfig_T1Lottery_Desc.json';
			var request3 = new XMLHttpRequest();			
      request3.open('GET', requestURL3);
			request3.responseType = 'json';
			request3.send();
    request3.onload = function() {
      var raiders = request3.response;
      //populateHeader(raiders);
      showRaiders(raiders, "t1-lotto-desc");
			//filterByClass();
	
    }

			/* Load T2 Lotto Descending */
			var requestURL4 = 'https://git.reolyze.com/tntclassic/addon-and-backend-interface-scripts/raw/master/all-in-one/json/LootConfig_T1Priority_Desc.json';
			var request4 = new XMLHttpRequest();
			request4.open('GET', requestURL4);
			request4.responseType = 'json';
			request4.send();
    request4.onload = function() {
      var raiders = request4.response;
      //populateHeader(raiders);
      showRaiders(raiders, "t1-prio-desc");
    }
    
    

    //var $btnSortLottoDesc = $(".sort-lotto-desc");
    /*
    btnSortLottoDesc.on("click", function() {
				$(".card-raider.t2-lotto-desc").show();
				$(".card-raider.t2-prio-desc").hide();
				filterByClass();
		});
		*/
    
    function populateHeader(jsonObj) {
      //var myH1 = document.createElement('span');
      //myH1.textContent = jsonObj['dateModified'];
      document.getElementById("lastUpdated").innerHTML += jsonObj['dateModified'];
      //section.appendChild(myH1);

      //var myPara = document.createElement('span');
      document.getElementById("lastUpdated").innerHTML += ' @ ' +jsonObj['timeModified'];
      //section.appendChild(myPara);

    }

    function showRaiders(jsonObj, sorttype) {
      var tntRaiders = jsonObj['raiders'];
			var sortType = sorttype;

      for(var i = 0; i < tntRaiders.length; i++) {
        var myList2 = document.createElement('ol');
        var myList3 = document.createElement('ol');
				var myList4 = document.createElement('ol');
        var myList5 = document.createElement('ol');
        var myList6 = document.createElement('ol');
        var myList7 = document.createElement('ol');
        var myList8 = document.createElement('ol');
        var myList9 = document.createElement('ol');
        
        var myCharName = document.createElement('div');
        myCharName.setAttribute('class', 'raider-name');
        var myCharClass = document.createElement('div');
        myCharClass.setAttribute('class', 'raider-class');
        var myCharRank = document.createElement('div');
        myCharRank.setAttribute('class', 'raider-rank');
        
        /*
        myH2.textContent = tntRaiders[i].name;
        myPara1.textContent = 'Class: ' + tntRaiders[i].class;
        myPara5.textContext = 'Rank: ' + tntRaiders[i].Rank;
        myPara2.textContent = 'Priority DKP: ' + tntRaiders[i].PriorityDKP;
        myPara3.textContent = 'Lottery DKP: ' + tntRaiders[i].LotteryDKP;
        myPara4.textContent = 'Priority List:';
        */
        myCharName.textContent = tntRaiders[i].name;
				myCharClass.innerHTML = tntRaiders[i].class + " <span class='display-sm'>&nbsp;&nbsp;/&nbsp;&nbsp;&nbsp;" + tntRaiders[i].Rank + "<span>";
        myCharRank.innerHTML = tntRaiders[i].Rank;
        
        /* T1 */
        var prio = tntRaiders[i].T1_PriorityConfig;
        for(var j = 0; j < prio.length; j++) {
          var listItem2 = document.createElement('li');
          listItem2.innerHTML = '<a href="https://classic.wowhead.com/item='+prio[j].ItemID+'" target="_blank" rel="noopener">'+prio[j].ItemName+'</a>';
          myList2.appendChild(listItem2);
          if(prio[j].Quantity > 1){
            listItem2.innerHTML += ' x'+prio[j].Quantity;
          }
        }
				if(prio.length == 0)
					{
						var listItem2 = document.createElement('p');
						listItem2.innerHTML = "<a href='https://classic.wowhead.com/npc=11956' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
						myList2.appendChild(listItem2);
					}
        
        var lott = tntRaiders[i].T1_LotteryConfig;
        for(var j = 0; j < lott.length; j++) {
          var listItem3 = document.createElement('li');
          listItem3.innerHTML = '<a href="https://classic.wowhead.com/item='+lott[j].ItemID+'" target="_blank" rel="noopener">'+lott[j].ItemName+'</a>';
          if(lott[j].Quantity > 1){
            listItem3.innerHTML += ' x'+lott[j].Quantity;
          }
          myList3.appendChild(listItem3);
        }
				if(lott.length == 0)
					{
						var listItem3 = document.createElement('p');
						listItem3.innerHTML = "<a href='https://classic.wowhead.com/npc=11325' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
						myList3.appendChild(listItem3);
					}
				
        /* T2 */
				var t2prio = tntRaiders[i].T2_PriorityConfig;
        for(var j = 0; j < t2prio.length; j++) {
          var listItem4 = document.createElement('li');
          listItem4.innerHTML = '<a href="https://classic.wowhead.com/item='+t2prio[j].ItemID+'" target="_blank" rel="noopener">'+t2prio[j].ItemName+'</a>';
          if(t2prio[j].Quantity > 1){
            listItem4.innerHTML += ' x'+t2prio[j].Quantity;
          }
          myList4.appendChild(listItem4);
        }
				if(t2prio.length == 0)
					{
						var listItem4 = document.createElement('p');
						listItem4.innerHTML = "<a href='https://classic.wowhead.com/item=22736' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
						myList4.appendChild(listItem4);
					}
        
        var t2lott = tntRaiders[i].T2_LotteryConfig;
        for(var j = 0; j < t2lott.length; j++) {
          var listItem5 = document.createElement('li');
          listItem5.innerHTML = '<a href="https://classic.wowhead.com/item='+t2lott[j].ItemID+'" target="_blank" rel="noopener">'+t2lott[j].ItemName+'</a>';
          if(t2lott[j].Quantity > 1){
            listItem5.innerHTML += ' x'+t2lott[j].Quantity;
          }
          myList5.appendChild(listItem5);
        }
				if(t2lott.length == 0)
					{
						var listItem5 = document.createElement('p');
						listItem5.innerHTML = "<a href='https://classic.wowhead.com/item=3173' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
						myList5.appendChild(listItem5);
					}
        
        /* T2.5 */
        var t2pt5prio = tntRaiders[i].T2PT5_PriorityConfig;
        for(var j = 0; j < t2pt5prio.length; j++) {
          var listItem6 = document.createElement('li');
          listItem6.innerHTML = '<a href="https://classic.wowhead.com/item='+t2pt5prio[j].ItemID+'" target="_blank" rel="noopener">'+t2pt5prio[j].ItemName+'</a>';
          if(t2pt5prio[j].Quantity > 1){
            listItem6.innerHTML += ' x'+t2pt5prio[j].Quantity;
          }
          myList6.appendChild(listItem6);
        }
				if(t2pt5prio.length == 0)
					{
						var listItem6 = document.createElement('p');
						listItem6.innerHTML = "<a href='https://classic.wowhead.com/item=22781' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
						myList6.appendChild(listItem6);
					}
        
        var t2pt5lott = tntRaiders[i].T2PT5_LotteryConfig;
        for(var j = 0; j < t2pt5lott.length; j++) {
          var listItem7 = document.createElement('li');
          listItem7.innerHTML = '<a href="https://classic.wowhead.com/item='+t2pt5lott[j].ItemID+'" target="_blank" rel="noopener">'+t2pt5lott[j].ItemName+'</a>';
          if(t2pt5lott[j].Quantity > 1){
            listItem7.innerHTML += ' x'+t2pt5lott[j].Quantity;
          }
          myList7.appendChild(listItem7);
        }
				if(t2pt5lott.length == 0)
					{
						var listItem7 = document.createElement('p');
						listItem7.innerHTML = "<a href='https://classic.wowhead.com/item=6185' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
						myList7.appendChild(listItem7);
          }
        
        
        /* T3 */
        var t3prio = tntRaiders[i].T3_PriorityConfig;
        for(var j = 0; j < t3prio.length; j++) {
          var listItem8 = document.createElement('li');
          listItem8.innerHTML = '<a href="https://classic.wowhead.com/item='+t3prio[j].ItemID+'" target="_blank" rel="noopener">'+t3prio[j].ItemName+'</a>';
          if(t3prio[j].Quantity > 1){
            listItem8.innerHTML += ' x'+t3prio[j].Quantity;
          }
          myList8.appendChild(listItem8);
        }
				if(t3prio.length == 0)
					{
						var listItem8 = document.createElement('p');
						listItem8.innerHTML = "<a href='https://classic.wowhead.com/item=22781' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
						myList8.appendChild(listItem8);
					}
        
        var t3lott = tntRaiders[i].T3_LotteryConfig;
        for(var j = 0; j < t3lott.length; j++) {
          var listItem9 = document.createElement('li');
          listItem9.innerHTML = '<a href="https://classic.wowhead.com/item='+t3lott[j].ItemID+'" target="_blank" rel="noopener">'+t3lott[j].ItemName+'</a>';
          if(t3lott[j].Quantity > 1){
            listItem9.innerHTML += ' x'+t3lott[j].Quantity;
          }
          myList9.appendChild(listItem9);
        }
				if(t3lott.length == 0)
					{
						var listItem9 = document.createElement('p');
						listItem9.innerHTML = "<a href='https://classic.wowhead.com/item=6185' target='_blank' rel='noopener'>ʕ•ᴥ•ʔ</a>";
						myList9.appendChild(listItem9);
          }

        //template
        var template = $('#hidden-template').html();
        var item = $(template).clone();
    

        //changing stuff in the template
        $(item).find('.priority-dkp-value.t1').html(tntRaiders[i].T1_PriorityDKP);
        $(item).find('.lottery-dkp-value.t1').html(tntRaiders[i].T1_LotteryDKP);
				$(item).find('.priority-dkp-value.t2').html(tntRaiders[i].T2_PriorityDKP);
        $(item).find('.lottery-dkp-value.t2').html(tntRaiders[i].T2_LotteryDKP);
        $(item).find('.priority-dkp-value.t2pt5').html(tntRaiders[i].T2PT5_PriorityDKP);
        $(item).find('.lottery-dkp-value.t2pt5').html(tntRaiders[i].T2PT5_LotteryDKP);
        $(item).find('.priority-dkp-value.t3').html(tntRaiders[i].T3_PriorityDKP);
        $(item).find('.lottery-dkp-value.t3').html(tntRaiders[i].T3_LotteryDKP);
        $(item).find('.t1.prio-list').html(myList2);
        $(item).find('.t1.lott-list').html(myList3);
				$(item).find('.t2.prio-list').html(myList4);
        $(item).find('.t2.lott-list').html(myList5);
        $(item).find('.t2pt5.prio-list').html(myList6);
        $(item).find('.t2pt5.lott-list').html(myList7);
        $(item).find('.t3.prio-list').html(myList8);
        $(item).find('.t3.lott-list').html(myList9);
				$(item).find('.card-raider').addClass(sortType);
        $(item).find('.tnt-raider').addClass(tntRaiders[i].class);
        $(item).find('.card-raider').addClass(tntRaiders[i].class);
        //$(item).find('.prio-list').addClass(tntRaiders[i].class);
        //$(item).find('.tnt-raider').append("bleh");
        $(item).find('.raider-info').append(myCharName);
        $(item).find('.raider-info').append(myCharClass);
        $(item).find('.raider-info').append(myCharRank);
        //$(item).find('.raider-info').append("boop");
        $(item).find('.raider-info').addClass(tntRaiders[i].class);
        
        //Append to the source
        $('#raider-list').append(item);

      }
    }


/* CHECK BOXES STUFF */


$(document).ready(function(){
      $('a[href="#uncheck"]').click(function(){
        $(".filter-class-warrior").prop("checked", false);
        $(".filter-class-priest").prop("checked", false);
        $(".filter-class-mage").prop("checked", false);
        $(".filter-class-rogue").prop("checked", false);
        $(".filter-class-hunter").prop("checked", false);
        $(".filter-class-paladin").prop("checked", false);
        $(".filter-class-warlock").prop("checked", false);
        $(".filter-class-druid").prop("checked", false);
        
        $(".card-raider.Warrior").hide();
        $(".card-raider.Priest").hide();
        $(".card-raider.Mage").hide();
        $(".card-raider.Rogue").hide();
        $(".card-raider.Hunter").hide();
        $(".card-raider.Paladin").hide();
        $(".card-raider.Warlock").hide();
        $(".card-raider.Druid").hide();
				
				updateStorage();
      }); 
      
      $('a[href="#check"]').click(function(){
        $(".filter-class-warrior").prop("checked", true);
        $(".filter-class-priest").prop("checked", true);
        $(".filter-class-mage").prop("checked", true);
        $(".filter-class-rogue").prop("checked", true);
        $(".filter-class-hunter").prop("checked", true);
        $(".filter-class-paladin").prop("checked", true);
        $(".filter-class-warlock").prop("checked", true);
        $(".filter-class-druid").prop("checked", true);
        
        /*
        $(".card-raider.Warrior").show();
        $(".card-raider.Priest").show();
        $(".card-raider.Mage").show();
        $(".card-raider.Rogue").show();
        $(".card-raider.Hunter").show();
        $(".card-raider.Paladin").show();
        $(".card-raider.Warlock").show();
        $(".card-raider.Druid").show();
        */
        $(".card-raider.Warrior").hide();
        $(".card-raider.Priest").hide();
        $(".card-raider.Mage").hide();
        $(".card-raider.Rogue").hide();
        $(".card-raider.Hunter").hide();
        $(".card-raider.Paladin").hide();
        $(".card-raider.Warlock").hide();
        $(".card-raider.Druid").hide();
        
        var dropdownValue = $("#dropdown-sort").val();
        //alert("Check all check: "+dropdownValue);
        filterByClass(dropdownValue);
				updateStorage();
      }); 
    });


	var formValues = JSON.parse(localStorage.getItem('formValues')) || {};
	var $checkboxes = $("#filter-by-class :checkbox");
	var $button = $("#filter-by-class button");

	function allChecked(){
		return $checkboxes.length === $checkboxes.filter(":checked").length;
	}
/*
	function updateButtonStatus(){
		$button.text(allChecked()? "Uncheck all" : "Check all");
	}
*/

	function handleButtonClick(){
		$checkboxes.prop("checked", allChecked()? false : true)
		//filterByClass();
	}

	function updateStorage(){
		$checkboxes.each(function(){
			formValues[this.id] = this.checked;
		});

		//formValues["buttonText"] = $button.text();
		localStorage.setItem("formValues", JSON.stringify(formValues));
	}
/*
	$button.on("click", function() {
		handleButtonClick();
		updateButtonStatus();
	});
*/

	$checkboxes.on("change", function(){
		//updateButtonStatus();
		updateStorage();
    //alert("Change");
    var dropdownValue = $("#dropdown-sort").val();
    filterByClass(dropdownValue);
	});

$(function() {
	//initChecks();
  
});


$(document).ready(function(){
initChecks();
});

setTimeout(function(){
 initSortBy();
    var dropdownValue = $("#dropdown-sort").val();
    filterByClass(dropdownValue);
  
}, 600);

	$button.text(formValues["buttonText"]);
	
	function initChecks(){
			// On page load
		$.each(formValues, function(key, value) {
		$("#" + key).prop('checked', value);
		//alert("init?");
    

		});
	}		
    function filterByClass(sortTypeVal)
      {	
          if($('.filter-class-warrior').is(":checked")){
						switch(sortTypeVal) {
							case "1":
								$(".card-raider.t2-prio-desc.Warrior").show();
								break;
							case "2":
								$(".card-raider.t2-lotto-desc.Warrior").show();
								break;
              case "3":
								$(".card-raider.t1-prio-desc.Warrior").show();
								break;
							case "4":
								$(".card-raider.t1-lotto-desc.Warrior").show();
								break;
              case "5":
								$(".card-raider.t2pt5-prio-desc.Warrior").show();
								break;
							case "6":
								$(".card-raider.t2pt5-lotto-desc.Warrior").show();
								break;
              case "7":
								$(".card-raider.t3-prio-desc.Warrior").show();
								break;
							case "8":
								$(".card-raider.t3-lotto-desc.Warrior").show();
								break;
						}
					}
          else
              $(".card-raider.Warrior").hide();
      
        
    if($('.filter-class-priest').is(":checked")){
      //alert("fbc check 1: priest checked");
      //alert("fbc check 2: "+sortTypeVal);
            switch(sortTypeVal) {
              case "1":
								$(".card-raider.t2-prio-desc.Priest").show();
                //alert("priest prio t2 desc");
								break;
							case "2":
								$(".card-raider.t2-lotto-desc.Priest").show();
								break;
              case "3":
								$(".card-raider.t1-prio-desc.Priest").show();
								break;
							case "4":
								$(".card-raider.t1-lotto-desc.Priest").show();
								break;
              case "5":
                //alert("priest prio t2.5");
								$(".card-raider.t2pt5-prio-desc.Priest").show();
								break;
							case "6":
                 //alert("priest lotto t2.5");
								$(".card-raider.t2pt5-lotto-desc.Priest").show();
								break;
              case "7":
								$(".card-raider.t3-prio-desc.Priest").show();
								break;
							case "8":
								$(".card-raider.t3-lotto-desc.Priest").show();
								break;
						}    
					}
            else {
              //alert ("I shouldn't see this for this test case");
                $(".card-raider.Priest").hide();
						}

          if($('.filter-class-mage').is(":checked")){
            switch(sortTypeVal) {
							case "1":
								$(".card-raider.t2-prio-desc.Mage").show();
								break;
							case "2":
								$(".card-raider.t2-lotto-desc.Mage").show();
								break;
              case "3":
								$(".card-raider.t1-prio-desc.Mage").show();
								break;
							case "4":
								$(".card-raider.t1-lotto-desc.Mage").show();
								break;
              case "5":
								$(".card-raider.t2pt5-prio-desc.Mage").show();
								break;
							case "6":
								$(".card-raider.t2pt5-lotto-desc.Mage").show();
								break;
              case "7":
								$(".card-raider.t3-prio-desc.Mage").show();
								break;
							case "8":
								$(".card-raider.t3-lotto-desc.Mage").show();
								break;
						}
          }   
            else
                $(".card-raider.Mage").hide();

          if($('.filter-class-rogue').is(":checked")){
            switch(sortTypeVal) {
							case "1":
								$(".card-raider.t2-prio-desc.Rogue").show();
								break;
							case "2":
								$(".card-raider.t2-lotto-desc.Rogue").show();
								break;
              case "3":
								$(".card-raider.t1-prio-desc.Rogue").show();
								break;
							case "4":
								$(".card-raider.t1-lotto-desc.Rogue").show();
								break;
              case "5":
								$(".card-raider.t2pt5-prio-desc.Rogue").show();
								break;
							case "6":
								$(".card-raider.t2pt5-lotto-desc.Rogue").show();
								break;
              case "7":
								$(".card-raider.t3-prio-desc.Rogue").show();
								break;
							case "8":
								$(".card-raider.t3-lotto-desc.Rogue").show();
								break;
						}
          }
            else
                $(".card-raider.Rogue").hide();

          if($('.filter-class-hunter').is(":checked")){
            switch(sortTypeVal) {
							case "1":
								$(".card-raider.t2-prio-desc.Hunter").show();
								break;
							case "2":
								$(".card-raider.t2-lotto-desc.Hunter").show();
								break;
              case "3":
								$(".card-raider.t1-prio-desc.Hunter").show();
								break;
							case "4":
								$(".card-raider.t1-lotto-desc.Hunter").show();
								break;
              case "5":
								$(".card-raider.t2pt5-prio-desc.Hunter").show();
								break;
							case "6":
								$(".card-raider.t2pt5-lotto-desc.Hunter").show();
								break;
              case "7":
								$(".card-raider.t3-prio-desc.Hunter").show();
								break;
							case "8":
								$(".card-raider.t3-lotto-desc.Hunter").show();
								break;
						}
          }   
            else
                $(".card-raider.Hunter").hide();

          if($('.filter-class-paladin').is(":checked")){
            switch(sortTypeVal) {
							case "1":
								$(".card-raider.t2-prio-desc.Paladin").show();
								break;
							case "2":
								$(".card-raider.t2-lotto-desc.Paladin").show();
								break;
              case "3":
								$(".card-raider.t1-prio-desc.Paladin").show();
								break;
							case "4":
								$(".card-raider.t1-lotto-desc.Paladin").show();
								break;
              case "5":
								$(".card-raider.t2pt5-prio-desc.Paladin").show();
								break;
							case "6":
								$(".card-raider.t2pt5-lotto-desc.Paladin").show();
								break;
              case "7":
								$(".card-raider.t3-prio-desc.Paladin").show();
								break;
							case "8":
								$(".card-raider.t3-lotto-desc.Paladin").show();
								break;
						}
            
          }   
            else
                $(".card-raider.Paladin").hide();

          if($('.filter-class-warlock').is(":checked")){
            switch(sortTypeVal) {
							case "1":
								$(".card-raider.t2-prio-desc.Warlock").show();
								break;
							case "2":
								$(".card-raider.t2-lotto-desc.Warlock").show();
								break;
              case "3":
								$(".card-raider.t1-prio-desc.Warlock").show();
								break;
							case "4":
								$(".card-raider.t1-lotto-desc.Warlock").show();
								break;
              case "5":
								$(".card-raider.t2pt5-prio-desc.Warlock").show();
								break;
							case "6":
								$(".card-raider.t2pt5-lotto-desc.Warlock").show();
								break;
              case "7":
								$(".card-raider.t3-prio-desc.Warlock").show();
								break;
							case "8":
								$(".card-raider.t3-lotto-desc.Warlock").show();
								break;
						}
          }   
            else
                $(".card-raider.Warlock").hide();
          
        if($('.filter-class-druid').is(":checked")){
          switch(sortTypeVal) {
							case "1":
								$(".card-raider.t2-prio-desc.Druid").show();
								break;
							case "2":
								$(".card-raider.t2-lotto-desc.Druid").show();
								break;
              case "3":
								$(".card-raider.t1-prio-desc.Druid").show();
								break;
							case "4":
								$(".card-raider.t1-lotto-desc.Druid").show();
								break;
              case "5":
								$(".card-raider.t2pt5-prio-desc.Druid").show();
								break;
							case "6":
								$(".card-raider.t2pt5-lotto-desc.Druid").show();
								break;
              case "7":
								$(".card-raider.t3-prio-desc.Druid").show();
								break;
							case "8":
								$(".card-raider.t3-lotto-desc.Druid").show();
								break;
						}
        }   
            else
                $(".card-raider.Druid").hide();
      }

/* DROP DOWN SORT STUFF */

$(document).ready(function(){
     
		//var value = document.getElementById('dropdown-sort').value;
		//alert(value);
  

		$("#dropdown-sort").change(function () {
				//var selectedText = $(this).find("option:selected").text();
				var selectedValue = $(this).val();
				//alert("Selected Text: " + selectedText + " Value: " + selectedValue);
			
				sortBy(selectedValue);
		});
	
  
  
	
	
	
});

function sortBy(sortTypeValue)
      {
          if(sortTypeValue == 1){
              //alert("Sort by T2 Prio")
              $(".card-raider.t2pt5-lotto-desc").hide();
							$(".card-raider.t2pt5-prio-desc").hide();
							$(".card-raider.t2-lotto-desc").hide();
							$(".card-raider.t2-prio-desc").show();
              $(".card-raider.t1-lotto-desc").hide();
							$(".card-raider.t1-prio-desc").hide();
              $(".card-raider.t3-lotto-desc").hide();
							$(".card-raider.t3-prio-desc").hide();
							filterByClass("1");
					}
          if(sortTypeValue == 2){
              //alert("Sort by T2 Lotto")
              $(".card-raider.t2pt5-lotto-desc").hide();
							$(".card-raider.t2pt5-prio-desc").hide();
							$(".card-raider.t2-lotto-desc").show();
							$(".card-raider.t2-prio-desc").hide();
              $(".card-raider.t1-lotto-desc").hide();
							$(".card-raider.t1-prio-desc").hide();
              $(".card-raider.t3-lotto-desc").hide();
							$(".card-raider.t3-prio-desc").hide();
							filterByClass("2");
					}
          if(sortTypeValue == 3){
              //alert("Sort by T1 Prio")
              $(".card-raider.t2pt5-lotto-desc").hide();
							$(".card-raider.t2pt5-prio-desc").hide();
							$(".card-raider.t2-lotto-desc").hide();
							$(".card-raider.t2-prio-desc").hide();
              $(".card-raider.t1-lotto-desc").hide();
							$(".card-raider.t1-prio-desc").show();
              $(".card-raider.t3-lotto-desc").hide();
							$(".card-raider.t3-prio-desc").hide();
							filterByClass("3");
					}
          if(sortTypeValue == 4){
              //alert("Sort by T1 Lotto")
              $(".card-raider.t3-lotto-desc").hide();
							$(".card-raider.t3-prio-desc").hide();
              $(".card-raider.t2pt5-lotto-desc").hide();
							$(".card-raider.t2pt5-prio-desc").hide();
							$(".card-raider.t2-lotto-desc").hide();
							$(".card-raider.t2-prio-desc").hide();
              $(".card-raider.t1-lotto-desc").show();
							$(".card-raider.t1-prio-desc").hide();
            
							filterByClass("4");
					}
          if(sortTypeValue == 5){
                //alert("Sort by T2.5 Prio")
                $(".card-raider.t3-lotto-desc").hide();
                $(".card-raider.t3-prio-desc").hide();
                $(".card-raider.t2pt5-lotto-desc").hide();
                $(".card-raider.t2pt5-prio-desc").show();
                $(".card-raider.t2-lotto-desc").hide();
                $(".card-raider.t2-prio-desc").hide();
                $(".card-raider.t1-lotto-desc").hide();
                $(".card-raider.t1-prio-desc").hide();
                filterByClass("5");
            }
          if(sortTypeValue == 6){
                //alert("Sort by T2.5 Lotto")
                $(".card-raider.t3-lotto-desc").hide();
                $(".card-raider.t3-prio-desc").hide();
                $(".card-raider.t2pt5-lotto-desc").show();
                $(".card-raider.t2pt5-prio-desc").hide();
                $(".card-raider.t2-lotto-desc").hide();
                $(".card-raider.t2-prio-desc").hide();
                $(".card-raider.t1-lotto-desc").hide();
                $(".card-raider.t1-prio-desc").hide();
                filterByClass("6");
            }
        if(sortTypeValue == 7){
                $(".card-raider.t3-lotto-desc").hide();
                $(".card-raider.t3-prio-desc").show();
                $(".card-raider.t2pt5-lotto-desc").hide();
                $(".card-raider.t2pt5-prio-desc").hide();
                $(".card-raider.t2-lotto-desc").hide();
                $(".card-raider.t2-prio-desc").hide();
                $(".card-raider.t1-lotto-desc").hide();
                $(".card-raider.t1-prio-desc").hide();
                filterByClass("7");
            }
        if(sortTypeValue == 8){
                $(".card-raider.t3-lotto-desc").show();
                $(".card-raider.t3-prio-desc").hide();
                $(".card-raider.t2pt5-lotto-desc").hide();
                $(".card-raider.t2pt5-prio-desc").hide();
                $(".card-raider.t2-lotto-desc").hide();
                $(".card-raider.t2-prio-desc").hide();
                $(".card-raider.t1-lotto-desc").hide();
                $(".card-raider.t1-prio-desc").hide();
                filterByClass("8");
            }
      }

	function initSortBy(){
      $(".card-raider.t3-prio-desc").hide();
			$(".card-raider.t3-lotto-desc").hide();
     $(".card-raider.t2pt5-prio-desc").hide();
			$(".card-raider.t2pt5-lotto-desc").hide();
      $(".card-raider.t2-prio-desc").hide();
			$(".card-raider.t2-lotto-desc").hide();
      $(".card-raider.t1-prio-desc").hide();
      $(".card-raider.t1-lotto-desc").hide();
    $(".tnt-raider.v2 ").show();
		}
