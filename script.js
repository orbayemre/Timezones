setInterval(() => {
    var tokyoTime = moment.tz("Asia/Tokyo");
    var santiagoTime = moment.tz("America/Santiago");
    var istanbulTime = moment.tz("Europe/Istanbul");
    var stockholmTime = moment.tz("Europe/Stockholm");
    var houstonTime = moment.tz("Etc/GMT+6");
    var rioTime = moment.tz("Etc/GMT+3");
    var newDelhiTime = moment.tz("Asia/Kolkata");
    var berlinTime = moment.tz("Europe/Berlin");
    var melbourneTime = moment.tz("Australia/Melbourne");
    var capeTownTime = moment.tz("Etc/GMT-2");
    var montrealTime = moment.tz("America/Montreal");
    var cairoTime = moment.tz("Africa/Cairo");
    var miamiTime = moment.tz("Etc/GMT+5");
    var budapestTime = moment.tz("Europe/Budapest");
    var islamabadTime = moment.tz("Etc/GMT-5");
    var londonTime = moment.tz("Europe/London");
    var lagosTime = moment.tz("Africa/Lagos");
    var singaporeTime = moment.tz("Asia/Singapore");
    var lisbonTime = moment.tz("Europe/Lisbon");
    var shanghaiTime = moment.tz("Asia/Shanghai");
    var dubaiTime = moment.tz("Asia/Dubai");
    var newYorkTime = moment.tz("America/New_York");
    var bakuTime = moment.tz("Asia/Baku");
    var romeTime = moment.tz("Europe/Rome");
    var moscowTime = moment.tz("Europe/Moscow");
    var barcelonaTime = moment.tz("Etc/GMT-1");
    var losAngelesTime = moment.tz("America/Los_Angeles");
    var jeddahTime = moment.tz("Etc/GMT-3");

    $('#tokyo .hour').html(tokyoTime.format("HH")+":"+tokyoTime.format("mm")+":"+tokyoTime.format("ss"));
    $('#tokyo .date').html(tokyoTime.format("ddd.")+","+tokyoTime.format("Do")+" "+tokyoTime.format("MMMM"));

    $('#santiago .hour').html(santiagoTime.format("HH")+":"+santiagoTime.format("mm")+":"+santiagoTime.format("ss"));
    $('#santiago .date').html(santiagoTime.format("ddd.")+","+santiagoTime.format("Do")+" "+santiagoTime.format("MMMM"));

    $('#istanbul .hour').html(istanbulTime.format("HH")+":"+istanbulTime.format("mm")+":"+istanbulTime.format("ss"));
    $('#istanbul .date').html(istanbulTime.format("ddd.")+","+istanbulTime.format("Do")+" "+istanbulTime.format("MMMM"));

    $('#stockholm .hour').html(stockholmTime.format("HH")+":"+stockholmTime.format("mm")+":"+stockholmTime.format("ss"));
    $('#stockholm .date').html(stockholmTime.format("ddd.")+","+stockholmTime.format("Do")+" "+stockholmTime.format("MMMM"));

    $('#houston .hour').html(houstonTime.format("HH")+":"+houstonTime.format("mm")+":"+houstonTime.format("ss"));
    $('#houston .date').html(houstonTime.format("ddd.")+","+houstonTime.format("Do")+" "+houstonTime.format("MMMM"));

    $('#rio .hour').html(rioTime.format("HH")+":"+rioTime.format("mm")+":"+rioTime.format("ss"));
    $('#rio .date').html(rioTime.format("ddd.")+","+rioTime.format("Do")+" "+rioTime.format("MMMM"));

    $('#newDelhi .hour').html(newDelhiTime.format("HH")+":"+newDelhiTime.format("mm")+":"+newDelhiTime.format("ss"));
    $('#newDelhi .date').html(newDelhiTime.format("ddd.")+","+newDelhiTime.format("Do")+" "+newDelhiTime.format("MMMM"));

    $('#berlin .hour').html(berlinTime.format("HH")+":"+berlinTime.format("mm")+":"+berlinTime.format("ss"));
    $('#berlin .date').html(berlinTime.format("ddd.")+","+berlinTime.format("Do")+" "+berlinTime.format("MMMM"));
    
    $('#melbourne .hour').html(melbourneTime.format("HH")+":"+melbourneTime.format("mm")+":"+melbourneTime.format("ss"));
    $('#melbourne .date').html(melbourneTime.format("ddd.")+","+melbourneTime.format("Do")+" "+melbourneTime.format("MMMM"));

    $('#capeTown .hour').html(capeTownTime.format("HH")+":"+capeTownTime.format("mm")+":"+capeTownTime.format("ss"));
    $('#capeTown .date').html(capeTownTime.format("ddd.")+","+capeTownTime.format("Do")+" "+capeTownTime.format("MMMM"));
    
    $('#montreal .hour').html(montrealTime.format("HH")+":"+montrealTime.format("mm")+":"+montrealTime.format("ss"));
    $('#montreal .date').html(montrealTime.format("ddd.")+","+montrealTime.format("Do")+" "+montrealTime.format("MMMM"));
    
    $('#cairo .hour').html(cairoTime.format("HH")+":"+cairoTime.format("mm")+":"+cairoTime.format("ss"));
    $('#cairo .date').html(cairoTime.format("ddd.")+","+cairoTime.format("Do")+" "+cairoTime.format("MMMM"));
    
    $('#miami .hour').html(miamiTime.format("HH")+":"+miamiTime.format("mm")+":"+miamiTime.format("ss"));
    $('#miami .date').html(miamiTime.format("ddd.")+","+miamiTime.format("Do")+" "+miamiTime.format("MMMM"));
    
    $('#budapest .hour').html(budapestTime.format("HH")+":"+budapestTime.format("mm")+":"+budapestTime.format("ss"));
    $('#budapest .date').html(budapestTime.format("ddd.")+","+budapestTime.format("Do")+" "+budapestTime.format("MMMM"));
    
    $('#islamabad .hour').html(islamabadTime.format("HH")+":"+islamabadTime.format("mm")+":"+islamabadTime.format("ss"));
    $('#islamabad .date').html(islamabadTime.format("ddd.")+","+islamabadTime.format("Do")+" "+islamabadTime.format("MMMM"));
    
    $('#london .hour').html(londonTime.format("HH")+":"+londonTime.format("mm")+":"+londonTime.format("ss"));
    $('#london .date').html(londonTime.format("ddd.")+","+londonTime.format("Do")+" "+londonTime.format("MMMM"));
    
    $('#lagos .hour').html(lagosTime.format("HH")+":"+lagosTime.format("mm")+":"+lagosTime.format("ss"));
    $('#lagos .date').html(lagosTime.format("ddd.")+","+lagosTime.format("Do")+" "+lagosTime.format("MMMM"));
    
    $('#singapore .hour').html(singaporeTime.format("HH")+":"+singaporeTime.format("mm")+":"+singaporeTime.format("ss"));
    $('#singapore .date').html(singaporeTime.format("ddd.")+","+singaporeTime.format("Do")+" "+singaporeTime.format("MMMM"));
    
    $('#lisbon .hour').html(lisbonTime.format("HH")+":"+lisbonTime.format("mm")+":"+lisbonTime.format("ss"));
    $('#lisbon .date').html(lisbonTime.format("ddd.")+","+lisbonTime.format("Do")+" "+lisbonTime.format("MMMM"));
    
    $('#shanghai .hour').html(shanghaiTime.format("HH")+":"+shanghaiTime.format("mm")+":"+shanghaiTime.format("ss"));
    $('#shanghai .date').html(shanghaiTime.format("ddd.")+","+shanghaiTime.format("Do")+" "+shanghaiTime.format("MMMM"));
    
    $('#dubai .hour').html(dubaiTime.format("HH")+":"+dubaiTime.format("mm")+":"+dubaiTime.format("ss"));
    $('#dubai .date').html(dubaiTime.format("ddd.")+","+dubaiTime.format("Do")+" "+dubaiTime.format("MMMM"));
    
    $('#newYork .hour').html(newYorkTime.format("HH")+":"+newYorkTime.format("mm")+":"+newYorkTime.format("ss"));
    $('#newYork .date').html(newYorkTime.format("ddd.")+","+newYorkTime.format("Do")+" "+newYorkTime.format("MMMM"));
    
    $('#baku .hour').html(bakuTime.format("HH")+":"+bakuTime.format("mm")+":"+bakuTime.format("ss"));
    $('#baku .date').html(bakuTime.format("ddd.")+","+bakuTime.format("Do")+" "+bakuTime.format("MMMM"));
    
    $('#rome .hour').html(romeTime.format("HH")+":"+romeTime.format("mm")+":"+romeTime.format("ss"));
    $('#rome .date').html(romeTime.format("ddd.")+","+romeTime.format("Do")+" "+romeTime.format("MMMM"));
    
    $('#moscow .hour').html(moscowTime.format("HH")+":"+moscowTime.format("mm")+":"+moscowTime.format("ss"));
    $('#moscow .date').html(moscowTime.format("ddd.")+","+moscowTime.format("Do")+" "+moscowTime.format("MMMM"));
    
    $('#barcelona .hour').html(barcelonaTime.format("HH")+":"+barcelonaTime.format("mm")+":"+barcelonaTime.format("ss"));
    $('#barcelona .date').html(barcelonaTime.format("ddd.")+","+moscowTime.format("Do")+" "+barcelonaTime.format("MMMM"));
    
    $('#losAngeles .hour').html(losAngelesTime.format("HH")+":"+losAngelesTime.format("mm")+":"+losAngelesTime.format("ss"));
    $('#losAngeles .date').html(losAngelesTime.format("ddd.")+","+losAngelesTime.format("Do")+" "+losAngelesTime.format("MMMM"));
    
    $('#jeddah .hour').html(jeddahTime.format("HH")+":"+jeddahTime.format("mm")+":"+jeddahTime.format("ss"));
    $('#jeddah .date').html(jeddahTime.format("ddd.")+","+jeddahTime.format("Do")+" "+jeddahTime.format("MMMM"));
}, 1000);