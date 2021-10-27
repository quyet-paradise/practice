var tagBody = document.getElementsByTagName("body")[0];
//console.log(tagBody);

function addClass(el, className){
    var oldClass = el.getAttribute('class');
    var oldClassArr = oldClass.split(" ");  

    if(oldClass){
        var isExistClass = false;
        for (let index = 0; index < oldClassArr.length; index++) {
            if(oldClassArr[index] === className)
            {
                isExistClass = true;
            }else{
                isExistClass = false;
            }             
        }

        if(isExistClass){
            el.setAttribute('class', oldClass);
        }else{
            el.setAttribute('class', oldClass += ' ' + className);
        }
    } else{
        el.setAttribute('class', className);
    }
}

function removeClass(el, className){
    var oldClass = el.getAttribute('class');
    
    if(oldClass){
        var oldClassArr = oldClass.split(' '); 
        var indexDel = oldClassArr.indexOf(className);

        if(indexDel !== -1){
            oldClassArr.splice(indexDel, 1);
            el.setAttribute('class', oldClassArr.join(" "));
        }
    }

}

addClass(tagBody, 'test');
removeClass(tagBody, 'abc');


var dropdownList = Array.from(document.querySelectorAll('.dropdown'));

// for (let index = 0; index < dropdownList.length; index++) {
//     var value = dropdownList[index];
//     callBackFn(value, index);
    
// }
// function callBackFn(value, index){
//     console.log(value, index);
// }

dropdownList.forEach( 
    function(el, index){
        var btn = el.querySelector('.btn');
        // console.log(btn);

        btn.addEventListener('click', function(event){   
            if(el.classList.contains("open")){
                el.classList.remove('open'); 
            }else{
                el.classList.add('open'); 
            }
            
        })
    }
);

var listSelectYear = Array.from(document.querySelectorAll('select[name="year"]'));
console.log(listSelectYear);

for (var index = 0; index < listSelectYear.length; index++) {
    var select = listSelectYear[index];
    console.log(select);

    for (var year = 1970; year < 2020; year++) {
        var option = document.createElement('option');
        option.setAttribute('value', year);
        option.innerText = 'Năm ' + year;

        select.append(option);

        console.log(option);
    }
}

var listSelectCountry = document.querySelector('select[name="country"]');
console.log(listSelectCountry);

var country_list = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas"
		,"Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands"
		,"Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Cape Verde","Cayman Islands","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica"
		,"Cote D Ivoire","Croatia","Cruise Ship","Cuba","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea"
		,"Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana"
		,"Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India"
		,"Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kuwait","Kyrgyz Republic","Laos","Latvia"
		,"Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Mauritania"
		,"Mauritius","Mexico","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Namibia","Nepal","Netherlands","Netherlands Antilles","New Caledonia"
		,"New Zealand","Nicaragua","Niger","Nigeria","Norway","Oman","Pakistan","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal"
		,"Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Satellite","Saudi Arabia","Senegal","Serbia","Seychelles"
		,"Sierra Leone","Singapore","Slovakia","Slovenia","South Africa","South Korea","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","St. Lucia","Sudan"
		,"Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia"
		,"Turkey","Turkmenistan","Turks &amp; Caicos","Uganda","Ukraine","United Arab Emirates","United Kingdom","Uruguay","Uzbekistan","Venezuela","Vietnam","Virgin Islands (US)"
        ,"Yemen","Zambia","Zimbabwe"
];
        
for (var index = 0; index < country_list.length; index++) {
    var option = document.createElement('option');
    option.setAttribute('value', country_list[index]);

    option.innerText = country_list[index];
    listSelectCountry.append(option);  
}

var trElement = document.querySelectorAll('tr td:nth-child(2) a');
var province = [];

console.log(trElement);
for (var index = 0; index < trElement.length; index++) {
    province.push(trElement[index].innerText);
}

console.log(province);




var selectCountry1 = document.querySelector('select[name="country-1"]');
var option1 = Array.from(selectCountry1.querySelectorAll('option'));

// console.log(selectCountry1, option1, option1[0].innerText, option1[0].getAttribute('value'));

var divWrapper = document.createElement("div");
    divWrapper.classList.add("custom-select");
//console.log(divWrapper);

var divSelectted = document.createElement("div");
    divSelectted.classList.add("selected"); 
    divSelectted.setAttribute('value', option1[0].getAttribute('value'));
    divSelectted.innerText = option1[0].innerText;

//console.log(divSelectted);

var ulOptions = document.createElement("ul");
    ulOptions.classList.add("options");

divWrapper.append(divSelectted);
divWrapper.append(ulOptions);
for (var index = 0; index < option1.length; index++) {
    var option = document.createElement('li');
    option.setAttribute('value', option1[index].getAttribute('value'));
    option.innerText = option1[index].innerText;
    ulOptions.append(option);
}
console.log(divWrapper);

var form01 = document.getElementById('form1');
form01.append(divWrapper);