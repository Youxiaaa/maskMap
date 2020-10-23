let list = document.querySelector('.listClass');
let countySel = document.querySelector('.countySelClass');
let townSel = document.querySelector('.townSelClass');
let searchBtn = document.querySelector('.searchBtn');
let mapChange = document.querySelector('.mapChangeBtn');

//宣告行政區域// 好累幹  阿我就不會其他方法嘛
let taipeiTown = [
    '中正區','大同區','中山區','松山區','大安區','萬華區','信義區','士林區','北投區','內湖區','南港區','文山區'
];
let newtaipeiTown = [
    '萬里區','金山區','板橋區','汐止區','深坑區','石碇區','瑞芳區','平溪區','雙溪區','貢寮區','新店區','坪林區','烏來區','永和區','中和區','土城區','三峽區','樹林區','鶯歌區','三重區','新莊區','泰山區','林口區','蘆洲區','五股區','八里區','淡水區','三芝區','石門區'
];
let keelungTown = [
    '中正區','七堵區','暖暖區','仁愛區','中山區','安樂區','信義區'
];
let taoyuanTown = [
    '桃園區','龜山區','八德區','大溪區','蘆竹區','大園區','中壢區','龍潭區','平鎮區','楊梅區','新屋區','觀音區','復興區'
];
let hsinchuCityTown = [
    '東區','北區','香山區'
];
let hsinchuTown =[
    '竹北市','關西鎮','新埔鎮','竹東鎮','湖口鄉','橫山鄉','新豐鄉','芎林鄉','寶山鄉','北埔鄉','峨眉鄉','尖石鄉','五峰鄉'
];
let miaoliTown = [
    '苗栗市','頭份市','苑裡鎮','通霄鎮','竹南鎮','後龍鎮','卓蘭鎮','大湖鄉','公館鄉','銅鑼鄉','南莊鄉','頭屋鄉','三義鄉','西湖鄉','造橋鄉','三灣鄉','獅潭鄉','泰安鄉'
];
let taichungTown = [
    '中區','東區','南區','西區','北區','北屯區','西屯區','南屯區','太平區','大里區','霧峰區','烏日區','豐原區','后里區','石岡區','東勢區','和平區','新社區','潭子區','大雅區','神岡區','大肚區','沙鹿區','龍井區','梧棲區','清水區','大甲區','外埔區','大安區'
];
let nantouTown = [
    '南投市','草屯鎮','埔里鎮','竹山鎮','集集鎮','名間鄉','鹿谷鄉','中寮鄉','魚池鄉','國姓鄉','水里鄉','信義鄉','仁愛鄉'
];
let changhuaTown = [
    '彰化市','和美鎮','鹿港鎮','員林市','溪湖鎮','田中鎮','北斗鎮','二林鎮'
];
let yunlinTown = [
    '斗六市','斗南鎮','虎尾鎮','西螺鎮','土庫鎮','北港鎮','古坑鄉','大埤鄉','莿桐鄉','林內鄉','二崙鄉','崙背鄉','麥寮鄉','東勢鄉','褒忠鄉','臺西鄉','元長鄉','四湖鄉','口湖鄉','水林鄉'
];
let chiayiCityTown = [
    '東區','西區'
];
let chiayiTown = [
    '太保市','朴子市','布袋鎮','大林鎮','民雄鄉','溪口鄉','新港鄉','六腳鄉','東石鄉','義竹鄉','鹿草鄉','水上鄉','中埔鄉','竹崎鄉','梅山鄉','番路鄉','大埔鄉','阿里山鄉'
];
let tainanTown = [
    '新營區','鹽水區','柳營區','後壁區','白河區','東山區','佳里區','學甲區','北門區','將軍區','七股區','西港區','麻豆區','官田區','六甲區','大內區','下營區','東區','南區','中西區','北區','安平區','安南區','新化區','新市區','善化區','安定區','山上區','玉井區','楠西區','左鎮區','南化區','永康區','仁德區','歸仁區','關廟區','龍崎區','安南區'
];
let kaohsiungTown = [
    '鹽埕區','鼓山區','左營區','楠梓區','三民區','新興區','前金區','苓雅區','前鎮區','旗津區','小港區','鳳山區','林園區','大寮區','大樹區','大社區','仁武區','鳥松區','岡山區','橋頭區','燕巢區','田寮區','阿蓮區','路竹區','湖內區','茄萣區','永安區','彌陀區','梓官區','旗山區','美濃區','六龜區','甲仙區','杉林區','內門區','茂林區','桃源區','那瑪夏區'
];
let pingtungTown = [
    '屏東市','潮州鎮','東港鎮','恆春鎮','萬丹鄉','長治鄉','麟洛鄉','九如鄉','里港鄉','鹽埔鄉','高樹鄉','萬巒鄉','內埔鄉','竹田鄉','新埤鄉','枋寮鄉','新園鄉','崁頂鄉','林邊鄉','南州鄉','佳冬鄉','琉球鄉','車城鄉','滿州鄉','枋山鄉','三地門鄉','霧臺鄉','瑪家鄉','泰武鄉','來義鄉','春日鄉','獅子鄉','牡丹鄉'
];
let yilanTown = [
    '宜蘭市','羅東鎮','蘇澳鎮','頭城鎮','礁溪鄉','壯圍鄉','員山鄉','冬山鄉','五結鄉','三星鄉','大同鄉','南澳鄉'
];
let hualienTown = [
    '花蓮市','鳳林鎮','玉里鎮','新城鄉','吉安鄉','壽豐鄉','光復鄉','豐濱鄉','瑞穗鄉','富里鄉','秀林鄉','萬榮鄉','卓溪鄉'
];
let taitungTown = [
    '臺東市','成功鎮','關山鎮','卑南鄉','大武鄉','太麻里鄉','東河鄉','長濱鄉','鹿野鄉','池上鄉','綠島鄉','延平鄉','海端鄉','達仁鄉','金峰鄉','蘭嶼鄉'
];
let penghuTown = [
    '馬公市','湖西鄉','白沙鄉','西嶼鄉','望安鄉','七美鄉'
];
let kinmenTown = [
    '金城鎮','金湖鎮','金沙鎮','金寧鄉','烈嶼鄉','烏坵鄉'
];
let lienchiangTown = [
    '南竿鄉','北竿鄉','莒光鄉','東引鄉'
];

//監聽//
countySel.addEventListener('change',updateTownSel,false);
searchBtn.addEventListener('click',updateList,false);
mapChange.addEventListener('click',changeMap,false);

defaultList();

defaultMap();

// 預設地圖 //
function defaultMap(){
    let map = L.map('map', {
        center: [24.8813708,121.2893547],
        zoom: 16
    });
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    var greenIcon = new L.Icon({
        iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
        shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
    
    let markers = new L.MarkerClusterGroup().addTo(map);
    let xml = new XMLHttpRequest();
    xml.open('get','https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json',true);
    xml.send(null);
    xml.onload = function(){
        let countySel = document.querySelector('.countySelClass').value;
        let townSel = document.querySelector('.townSelClass').value;
        let data = JSON.parse(xml.responseText).features;
        for(let i = 0 ; i < data.length ; i++){
            markers.addLayer(L.marker([data[i].geometry.coordinates[1],data[i].geometry.coordinates[0]]).bindPopup('<p class="h4">'+data[i].properties.name+'</p><p>'+ data[i].properties.address +'</p><p><a href="tel:" class="text-info h5">'+ data[i].properties.phone +'</a></p>'+ '<p class="h6">成人口罩 : <span class="h4 text-info">'+ data[i].properties.mask_adult +'</span></p><p class="h6">兒童口罩 : <span class="h4 text-info">'+ data[i].properties.mask_child +'</span></p><small class="text-secondary">最後更新時間 :</small><small class="text-secondary">'+ data[i].properties
            .updated +'</small>'));
            map.addLayer(markers);
        }
    }
}

// 預設畫面功能 //
function defaultList(){
    let xml = new XMLHttpRequest();
    xml.open('get','https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json',true);
    xml.send();
    xml.onload = function(){
        let data = JSON.parse(xml.response).features;
        let str = '';
        for(let i = 0 ; i < data.length ; i++){
            if(data[i].properties.county === '桃園市' && data[i].properties.town === '大溪區'){
                str += 
                `
                <div class="col-lg-4 my-2">
                <div class="card h-100" >
                <div class="card-body">
                    <h5 class="card-title h1">${data[i].properties.name}</h5>
                    <small class="card-subtitle text-muted"> 最後更新時間 ：${data[i].properties.updated}</small>
                    <p class="card-text">地址 : <span class="h5">${data[i].properties.address}<span></p>
                    <p class="card-text">電話 : <span class="h5"><a href="tel:" class="telColor">${data[i].properties.phone}</a></span></p>
                    <p class="card-text">成人口罩 : <span class="h3 maskAdult-color">${data[i].properties.mask_adult}</span></p>
                    <p class="card-text">兒童口罩 : <span class="h3 maskChild-color">${data[i].properties.mask_child}</span></p>
                    <a href="https://www.google.com.tw/maps/search/${data[i].properties.name}/@${data[i].geometry.coordinates[1]},${data[i].geometry.coordinates[0]},17.03z?hl=zh-TW" target="_blank" class="card-link btn">Google地圖連結</a>
                </div>
                </div>
                </div>
                `;
            };
        };
        list.innerHTML = str;
    };
};

// 過濾行政區域功能 //
function updateTownSel(e){
    let countyData = e.target.value;
    if(countyData === '臺北市'){
        let str = '';
        let taipeiLen = taipeiTown.length;
        for(let i = 0 ; i < taipeiLen ; i++){
            str += 
            `
            <option value="${taipeiTown[i]}">
            ${taipeiTown[i]}
            </option>
            `
        }
        townSel.innerHTML = str;
    }else if(countyData === '新北市'){
        let str = '';
        let areaLen = newtaipeiTown.length;
        for(let i = 0 ; i < areaLen ; i++){
            str += 
            `
            <option value="${newtaipeiTown[i]}">
            ${newtaipeiTown[i]}
            </option>
            `
        }
        townSel.innerHTML = str;
    }else if(countyData === '基隆市'){
        let str = '';
        for(let i = 0 ; i < keelungTown.length ; i++){
            str += 
            `
            <option value="${keelungTown[i]}">
            ${keelungTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '桃園市'){
        let str = '';
        for(let i = 0 ; i < taoyuanTown.length ; i++){
            str += 
            `
            <option value="${taoyuanTown[i]}">
            ${taoyuanTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '新竹市'){
        let str = '';
        for(let i = 0 ; i < hsinchuCityTown.length ; i++){
            str += 
            `
            <option value="${hsinchuCityTown[i]}">
            ${hsinchuCityTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '新竹縣'){
        let str = '';
        for(let i = 0 ; i < hsinchuTown.length ; i++){
            str += 
            `
            <option value="${hsinchuTown[i]}">
            ${hsinchuTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '苗栗縣'){
        let str = '';
        for(let i = 0 ; i < miaoliTown.length ; i++){
            str += 
            `
            <option value="${miaoliTown[i]}">
            ${miaoliTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '臺中市'){
        let str = '';
        for(let i = 0 ; i < taichungTown.length ; i++){
            str += 
            `
            <option value="${taichungTown[i]}">
            ${taichungTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '南投縣'){
        let str = '';
        for(let i = 0 ; i < nantouTown.length ; i++){
            str += 
            `
            <option value="${nantouTown[i]}">
            ${nantouTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '彰化縣'){
        let str = '';
        for(let i = 0 ; i < changhuaTown.length ; i++){
            str += 
            `
            <option value="${changhuaTown[i]}">
            ${changhuaTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '雲林縣'){
        let str = '';
        for(let i = 0 ; i < yunlinTown.length ; i++){
            str += 
            `
            <option value="${yunlinTown[i]}">
            ${yunlinTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '嘉義市'){
        let str = '';
        for(let i = 0 ; i < chiayiCityTown.length ; i++){
            str += 
            `
            <option value="${chiayiCityTown[i]}">
            ${chiayiCityTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '嘉義縣'){
        let str = '';
        for(let i = 0 ; i < chiayiTown.length ; i++){
            str += 
            `
            <option value="${chiayiTown[i]}">
            ${chiayiTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '臺南市'){
        let str = '';
        for(let i = 0 ; i < tainanTown.length ; i++){
            str += 
            `
            <option value="${tainanTown[i]}">
            ${tainanTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '高雄市'){
        let str = '';
        for(let i = 0 ; i < kaohsiungTown.length ; i++){
            str += 
            `
            <option value="${kaohsiungTown[i]}">
            ${kaohsiungTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '屏東縣'){
        let str = '';
        for(let i = 0 ; i < pingtungTown.length ; i++){
            str += 
            `
            <option value="${pingtungTown[i]}">
            ${pingtungTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str; 
    }else if(countyData === '宜蘭縣'){
        let str = '';
        for(let i = 0 ; i < yilanTown.length ; i++){
            str += 
            `
            <option value="${yilanTown[i]}">
            ${yilanTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str; 
    }else if(countyData === '花蓮縣'){
        let str = '';
        for(let i = 0 ; i < hualienTown.length ; i++){
            str += 
            `
            <option value="${hualienTown[i]}">
            ${hualienTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str; 
    }else if(countyData === '臺東縣'){
        let str = '';
        for(let i = 0 ; i < taitungTown.length ; i++){
            str += 
            `
            <option value="${taitungTown[i]}">
            ${taitungTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str;
    }else if(countyData === '澎湖縣'){
        let str = '';
        for(let i = 0 ; i < penghuTown.length ; i++){
            str += 
            `
            <option value="${penghuTown[i]}">
            ${penghuTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str; 
    }else if(countyData === '金門縣'){
        let str = '';
        for(let i = 0 ; i < kinmenTown.length ; i++){
            str += 
            `
            <option value="${kinmenTown[i]}">
            ${kinmenTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str; 
    }else if(countyData === '連江縣'){
        let str = '';
        for(let i = 0 ; i < lienchiangTown.length ; i++){
            str += 
            `
            <option value="${lienchiangTown[i]}">
            ${lienchiangTown[i]}
            </option>
            `
        };
        townSel.innerHTML = str; 
    }
}

// 更新清單 //
function updateList(e){
    let countySel = document.querySelector('.countySelClass').value;
    let townSel = document.querySelector('.townSelClass').value;
    let xhr = new XMLHttpRequest();
    xhr.open('get','https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json',true);
    xhr.send(null);
    xhr.onload = function(){
        let data = JSON.parse(xhr.responseText).features;
        let dataLen = data.length;
        let str = '';
        for(let i = 0 ; i < dataLen ; i++){
            if(data[i].properties.county === countySel && data[i].properties.town === townSel){

                str +=
                `
                <div class="col-lg-4 my-2">
                <div class="card h-100" >
                <div class="card-body">
                    <h5 class="card-title h1">${data[i].properties.name}</h5>
                    <small class="card-subtitle text-muted"> 最後更新時間 ：${data[i].properties.updated}</small>
                    <p class="card-text">地址 : <span class="h5">${data[i].properties.address}<span></p>
                    <p class="card-text">電話 : <span class="h5"><a href="tel:" class="telColor">${data[i].properties.phone}</a></span></p>
                    <p class="card-text">成人口罩 : <span class="h3 maskAdult-color">${data[i].properties.mask_adult}</span></p>
                    <p class="card-text">兒童口罩 : <span class="h3 maskChld-color">${data[i].properties.mask_child}</span></p>
                    <a href="https://www.google.com.tw/maps/search/${data[i].properties.name}/@${data[i].geometry.coordinates[1]},${data[i].geometry.coordinates[0]},17.03z?hl=zh-TW" target="_blank" class="card-link btn">Google地圖連結</a>
                </div>
                </div>
                </div>
                `
            };
        };
        list.innerHTML = str;
        window.scroll(0,0);
        // changeMapLocation();
    };
};

// 切換地圖模式 //
function changeMap(){
    let listArea = document.querySelector('#listArea');
    let mapArea = document.querySelector('#map');
    if(listArea.className.match('d-block')){
        listArea.className = 'd-none';
        mapArea.className = 'd-block';
        document.querySelector('.mapChangeBtn').textContent = '切換成清單';
    }else{
        listArea.className = 'd-block';
        mapArea.className = 'd-none';
        document.querySelector('.mapChangeBtn').textContent = '切換成地圖';
    };
};

// function changeMapLocation(){
//     let xml = new XMLHttpRequest();
//     xml.open('get','https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json',true);
//     xml.send(null);
//     xml.onload = function(){
//         let data = JSON.parse(xml.responseText).features;
//         let dataLen = data.length;
//         let countySel = document.querySelector('.countySelClass').value;
//         let townSel = document.querySelector('.townSelClass').value;
//         for(let i = 0 ; i < dataLen ; i++){
//             if(data[i].properties.county === countySel && data[i].properties.town === townSel){
//                  let map = L.map('map', {
//                      center: [data[i].geometry.coordinates[1],data[].geometry.coordinates[0]],
//                      zoom: 16
//                  });
                
//                  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//                      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//                  }).addTo(map);
                
//                  var greenIcon = new L.Icon({
//                      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
//                      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
//                      iconSize: [25, 41],
//                      iconAnchor: [12, 41],
//                      popupAnchor: [1, -34],
//                      shadowSize: [41, 41]
//                    });
                
//                  let markers = new L.MarkerClusterGroup().addTo(map);
//             }
//         }
//     }
// }