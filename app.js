function searchContext(){
    let first_text=document.getElementById("input-text").value;
    let text=first_text.split(' ')[0];
    // console.log(first_text);
    // document.getElementById("input-text").value="";
    text=text.toLowerCase();
    if(text=='tourist' || text== 'place' || text=='places' || text=='best' || text=='tourists' || text=='gate' || text=='bandra' || text=='gateway' || text=='cst' || text=='flora' || text=='asiatic' || text=='chhatrapati' || text=='city' || text=='tour')
    {
       window.open("city-tour.html","_self");
    }
    else if(text=='shopping' || text=='mall' || text=='shoppings' || text=='malls' || text=='palladium' || text=='phoenix' || text=='infiniti' || text=='korum' || text=='infinity' || text=='inorbit' || text=='growls' || text=='growl' || text=='oberio' || text=='oberoi' || text=='rcity' || text=='r')
    {
        window.open('shoppingmall.html','_self');
    }
    else if(text=='temple' || text=='temples' || text=='mandir' || text=='siddhivinayak' || text=='church' || text=='mosque' || text=='masjid' || text=='mumba' || text=='hindu' || text=='babulnath')
    {
        window.open('religious.html','_self')
    }
    else if(text=='resort' || text=='top' || text=='resorts' || text=='waterpark' ||text=='water' || text=='waterkingdom' || text=='great' || text=='asel' || text=='essel' || text=='imagica')
    {
        window.open('waterpark.html','_self');
    }
    else if(text=='market' || text=='local' || text=='fs' || text=='chor' || text=='bazaar' || text=='profit' || text=='crawford' || text=='link' || text=='fashion' || text=='markets' || text=='causeway' || text=='zaveri' || text=='kala')
    {
        window.open('localmarket.html','_self')
    }
    else if(text=='hotel' || text=='hotels' || text=='rooms' || text=='room' || text=='5' || text=='4' || text=='3')
    {
        window.open('5starhotel.html','_self');
    }
    else{
        window.open("error.html",'_self');
    }
}