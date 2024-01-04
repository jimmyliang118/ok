 var rule = {
    title:'88看球',
    host:'http://www.88kanqiu.win',
    url:'/fyclassfyfilter',
	filterable:1,//是否启用分类筛选,
	filter_url:'{{fl.class}}',
    filter:{ },
	
	class_name:'NBA&CBA&英超&西甲&意甲&德甲&法甲', 
    class_url:'match/1/live&match/2/live&match/8/live&match/9/live&match/10/live&match/14/live&match/15/live', 
	//class_parse:'.nav-pills li;a&&Text;a&&href;/(\\d+)/',
		
    headers:{
        'User-Agent':'PC_UA'
    },
    timeout:5000,
    play_parse:true,
    lazy:'',
    limit:6,
    double:false,
    推荐:'*',
    //一级:'.list-group .group-game-item;.d-none&&Text;img&&src;.btn&&Text;a&&href',
	
	"date": ".list-group-item.live-list-group-time .date",
	 	
	一级: '.list-group .group-game-item;.d-none&&Text;img&&src;.btn&&Text;a&&href;date&&Text', 
 
    
	二级:{
	    "title":".game-info-container&&Text;.customer-navbar-nav li&&Text",
	    "img":"img&&src",
	    "desc":";;;div.team-name:eq(0)&&Text;div.team-name:eq(1)&&Text",
	    "content":"div.game-time&&Text",
	    "tabs":"js:TABS=['实时直播']",
	    // "lists":"js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab){let m3u=data;let d=m3u.map(function(it){return it.name+'$'+play_url+it.url});LISTS.push(d)});"
	   // "lists":"js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab){let m3u=data;let d=m3u.map(function(it){return it.name+'$'+it.url});LISTS.push(d)});"
		//"lists":"js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab){let m3u=data.links;let d=m3u.map(function(it){return it.name+'$'+play_url+it.url});LISTS.push(d)});"
		// "lists": "js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab) {let m3u = data.links;let names = {};let d = m3u.map(function(item) {return item.name + '$' + (play_url+item.url); });d = d.filter(function(str) {let [name, url] = str.split('$');if(names[name]) {return false;} else {names[name] = true;return true;}});d = d.filter(function(str) {let [name, url] = str.split('$');if(name.includes('全球线路X')) {return false;} else {return true;}});d.sort(function(a, b) {return b.localeCompare(a);});LISTS.push(d.reverse())})"
		
		//最终版不删除国际线路
		// "lists": "js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab) {let m3u = data.links;let names = {};let d = m3u.map(function(item) {return item.name + '$' + (play_url+item.url); });d = d.filter(function(str) {let [name, url] = str.split('$');if(names[name]) {return false;} else {names[name] = true;return true;}});d.sort(function(a, b) {return b.localeCompare(a);});LISTS.push(d.reverse())})"
		"lists": "js:LISTS=[];input=input+'-url';let html=request(input);let data=JSON.parse(html);TABS.forEach(function(tab) {let m3u = data.links;let names = {};let d = m3u.map(function(item) {return item.name + '$' + (play_url+item.url); });d = d.filter(function(str) {let [name, url] = str.split('$');if(names[name]) {return false;} else {names[name] = true;return true;}});d = d.filter(function(str) {let [name, url] = str.split('$');if(name.includes('全球线路X')) {return false;} else {return true;}});LISTS.push(d)})"
	 		
		
	},
	 
	
	
	
	
	
	
	
	
	
	
	
	
	
    搜索:'',
}

 