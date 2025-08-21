const FLAGS_LIST = `{
  "Asia": {
    "ae": "United Arab Emirates",
    "af": "Afghanistan",
    "am": "Armenia",
    "az": "Azerbaijan",
    "bh": "Bahrain",
    "bn": "Brunei",
    "bt": "Bhutan",
    "cn": "China",
    "cy": "Cyprus",
    "ge": "Georgia",
    "id": "Indonesia",
    "in": "India",
    "iq": "Iraq",
    "ir": "Iran",
    "il": "Israel",
    "jp": "Japan",
    "jo": "Jordan",
    "kg": "Kyrgyzstan",
    "kh": "Cambodia",
    "kp": "North Korea",
    "kr": "South Korea",
    "kw": "Kuwait",
    "kz": "Kazakhstan",
    "la": "Laos",
    "lb": "Lebanon",
    "lk": "Sri Lanka",
    "my": "Malaysia",
    "mv": "Maldives",
    "mm": "Myanmar",
    "mn": "Mongolia",
    "np": "Nepal",
    "om": "Oman",
    "ph": "Philippines",
    "pk": "Pakistan",
    "qa": "Qatar",
    "sa": "Saudi Arabia",
    "sg": "Singapore",
    "sy": "Syria",
    "th": "Thailand",
    "tj": "Tajikistan",
    "tl": "Timor-Leste",
    "tm": "Turkmenistan",
    "tr": "Turkey",
    "tw": "Taiwan",
    "uz": "Uzbekistan",
    "vn": "Vietnam",
    "ye": "Yemen"
  },
  "Oceania": {
    "au": "Australia",
    "fj": "Fiji",
    "ki": "Kiribati",
    "mh": "Marshall Islands",
    "fm": "Micronesia",
    "nr": "Nauru",
    "nz": "New Zealand",
    "pg": "Papua New Guinea",
    "pw": "Palau",
    "ws": "Samoa",
    "sb": "Solomon Islands",
    "to": "Tonga",
    "tv": "Tuvalu",
    "vu": "Vanuatu"
  },
  "Africa": {
    "ao": "Angola",
    "bf": "Burkina Faso",
    "bi": "Burundi",
    "bj": "Benin",
    "bw": "Botswana",
    "cd": "DR Congo (Kinshasa)",
    "cf": "Central African Republic",
    "cg": "Republic of the Congo (Brazzaville)",
    "ci": "Côte d'Ivoire (Ivory Coast)",
    "cv": "Cape Verde (Cabo Verde)",
    "dj": "Djibouti",
    "dz": "Algeria",
    "eg": "Egypt",
    "er": "Eritrea",
    "et": "Ethiopia",
    "ga": "Gabon",
    "gh": "Ghana",
    "gm": "The Gambia",
    "gn": "Guinea",
    "gq": "Equatorial Guinea",
    "gw": "Guinea-Bissau",
    "ke": "Kenya",
    "km": "Comoros",
    "ls": "Lesotho",
    "lr": "Liberia",
    "ly": "Libya",
    "ma": "Morocco",
    "mg": "Madagascar",
    "ml": "Mali",
    "mr": "Mauritania",
    "mu": "Mauritius",
    "mw": "Malawi",
    "mz": "Mozambique",
    "na": "Namibia",
    "ne": "Niger",
    "ng": "Nigeria",
    "rw": "Rwanda",
    "sd": "Sudan",
    "sc": "Seychelles",
    "sl": "Sierra Leone",
    "sn": "Senegal",
    "so": "Somalia",
    "st": "São Tomé and Príncipe",
    "ss": "South Sudan",
    "sz": "Eswatini (Swaziland)",
    "td": "Chad",
    "tg": "Togo",
    "tn": "Tunisia",
    "tz": "Tanzania",
    "ug": "Uganda",
    "za": "South Africa",
    "zm": "Zambia",
    "zw": "Zimbabwe"
  },
  "South America": {
    "ar": "Argentina",
    "bo": "Bolivia",
    "br": "Brazil",
    "cl": "Chile",
    "co": "Colombia",
    "ec": "Ecuador",
    "gy": "Guyana",
    "py": "Paraguay",
    "pe": "Peru",
    "sr": "Suriname",
    "uy": "Uruguay",
    "ve": "Venezuela"
  },
  "North America": {
    "ag": "Antigua and Barbuda",
    "bb": "Barbados",
    "bz": "Belize",
    "ca": "Canada",
    "cr": "Costa Rica",
    "cu": "Cuba",
    "dm": "Dominica",
    "do": "Dominican Republic",
    "gd": "Grenada",
    "gt": "Guatemala",
    "hn": "Honduras",
    "ht": "Haiti",
    "jm": "Jamaica",
    "kn": "Saint Kitts and Nevis",
    "lc": "Saint Lucia",
    "mx": "Mexico",
    "ni": "Nicaragua",
    "pa": "Panama",
    "sv": "El Salvador",
    "tt": "Trinidad and Tobago",
    "us": "United States",
    "vc": "Saint Vincent and the Grenadines"
  },
  "Europe": {
    "ad": "Andorra",
    "al": "Albania",
    "at": "Austria",
    "ba": "Bosnia and Herzegovina",
    "be": "Belgium",
    "bg": "Bulgaria",
    "by": "Belarus",
    "ch": "Switzerland",
    "cz": "Czechia",
    "de": "Germany",
    "dk": "Denmark",
    "ee": "Estonia",
    "es": "Spain",
    "fi": "Finland",
    "fr": "France",
    "gb": "United Kingdom",
    "gr": "Greece",
    "hr": "Croatia",
    "hu": "Hungary",
    "ie": "Ireland",
    "is": "Iceland",
    "it": "Italy",
    "li": "Liechtenstein",
    "lt": "Lithuania",
    "lu": "Luxembourg",
    "lv": "Latvia",
    "mc": "Monaco",
    "md": "Moldova",
    "me": "Montenegro",
    "mk": "North Macedonia",
    "mt": "Malta",
    "nl": "Netherlands",
    "no": "Norway",
    "pl": "Poland",
    "pt": "Portugal",
    "ro": "Romania",
    "rs": "Serbia",
    "ru": "Russia",
    "se": "Sweden",
    "si": "Slovenia",
    "sk": "Slovakia",
    "sm": "San Marino",
    "ua": "Ukraine",
    "va": "Vatican City (Holy See)"
  },
  "Other Territories": {
    "ax": "Åland Islands",
    "ai": "Anguilla",
    "aq": "Antarctica",
    "as": "American Samoa",
    "aw": "Aruba",
    "bl": "Saint Barthélemy",
    "bm": "Bermuda",
    "bq": "Caribbean Netherlands",
    "bv": "Bouvet Island",
    "cc": "Cocos (Keeling) Islands",
    "ck": "Cook Islands",
    "cw": "Curaçao",
    "cx": "Christmas Island",
    "eh": "Western Sahara",
    "eu": "European Union",
    "fk": "Falkland Islands",
    "fo": "Faroe Islands",
    "gf": "French Guiana",
    "gg": "Guernsey",
    "gi": "Gibraltar",
    "gl": "Greenland",
    "gp": "Guadeloupe",
    "gs": "South Georgia",
    "gu": "Guam",
    "hk": "Hong Kong",
    "hm": "Heard Island and McDonald Islands",
    "im": "Isle of Man",
    "io": "British Indian Ocean Territory",
    "je": "Jersey",
    "ky": "Cayman Islands",
    "mf": "Saint Martin",
    "mo": "Macau",
    "mp": "Northern Mariana Islands",
    "mq": "Martinique",
    "ms": "Montserrat",
    "nc": "New Caledonia",
    "nf": "Norfolk Island",
    "nu": "Niue",
    "pn": "Pitcairn Islands",
    "pr": "Puerto Rico",
    "re": "Réunion",
    "sh": "Saint Helena, Ascension and Tristan da Cunha",
    "sj": "Svalbard and Jan Mayen",
    "sx": "Sint Maarten",
    "tc": "Turks and Caicos Islands",
    "tf": "French Southern and Antarctic Lands",
    "tk": "Tokelau",
    "un": "United Nations",
    "vg": "British Virgin Islands",
    "vi": "United States Virgin Islands",
    "wf": "Wallis and Futuna",
    "xk": "Kosovo",
    "yt": "Mayotte"
  },
  "US States": {
    "us-ak": "Alaska",
    "us-al": "Alabama",
    "us-ar": "Arkansas",
    "us-az": "Arizona",
    "us-ca": "California",
    "us-co": "Colorado",
    "us-ct": "Connecticut",
    "us-de": "Delaware",
    "us-fl": "Florida",
    "us-ga": "Georgia",
    "us-hi": "Hawaii",
    "us-ia": "Iowa",
    "us-id": "Idaho",
    "us-il": "Illinois",
    "us-in": "Indiana",
    "us-ks": "Kansas",
    "us-ky": "Kentucky",
    "us-la": "Louisiana",
    "us-ma": "Massachusetts",
    "us-md": "Maryland",
    "us-me": "Maine",
    "us-mi": "Michigan",
    "us-mn": "Minnesota",
    "us-mo": "Missouri",
    "us-ms": "Mississippi",
    "us-mt": "Montana",
    "us-nc": "North Carolina",
    "us-nd": "North Dakota",
    "us-ne": "Nebraska",
    "us-nh": "New Hampshire",
    "us-nj": "New Jersey",
    "us-nm": "New Mexico",
    "us-nv": "Nevada",
    "us-ny": "New York",
    "us-oh": "Ohio",
    "us-ok": "Oklahoma",
    "us-or": "Oregon",
    "us-pa": "Pennsylvania",
    "us-ri": "Rhode Island",
    "us-sc": "South Carolina",
    "us-sd": "South Dakota",
    "us-tn": "Tennessee",
    "us-tx": "Texas",
    "us-ut": "Utah",
    "us-va": "Virginia",
    "us-vt": "Vermont",
    "us-wa": "Washington",
    "us-wi": "Wisconsin",
    "us-wv": "West Virginia",
    "us-wy": "Wyoming"
  }
}`;

let categorized = false
category = "Asia"

let flags = JSON.parse(FLAGS_LIST);

let answerBtns = document.querySelectorAll(".answer-1, .answer-2, .answer-3, .answer-4");
let has_pressed = false;

function pickFlag(category) {
  var flag_obj_keys = Object.keys(category);
  var flag_ran_key = flag_obj_keys[Math.floor(Math.random() *flag_obj_keys.length)];
  my_flag = category[flag_ran_key];
  document.getElementsByClassName("flag")[0].style.backgroundImage = `url('https://flagcdn.com/w320/${flag_ran_key}.png')`;
  if (flag_ran_key === "np" || flag_ran_key === "ch" || flag_ran_key === "va") {
    document.getElementsByClassName("flag")[0].style.transform = "scale(0.5)";
  }
  else {
    document.getElementsByClassName("flag")[0].style.transform = "scale(1)";
  }
  return my_flag
}

function randomizeMCQAnswers(category) {
  let answers = []
  while (answers.length < 3) {
    var answer_obj_keys = Object.keys(category);
    var answer_ran_key = answer_obj_keys[Math.floor(Math.random() *answer_obj_keys.length)];
    if (!answers.includes(category[answer_ran_key]) && category[answer_ran_key] !== my_flag) {
      answers.push(category[answer_ran_key]);
    }
  }
  return answers
}

function selectCategory(has_category) {
  if (has_category === false) {
    var category_obj_keys = Object.keys(flags);
    var category_ran_key = category_obj_keys[Math.floor(Math.random() *category_obj_keys.length)];
    return flags[category_ran_key];
  }
  else{
    return flags[category]
  }
}
function generateMCQ(has_category) {
  has_pressed = false;
  answerBtns.forEach((btn) => {
    btn.style.setProperty("--after-bg-color", "#1CB0F6");
  });

  var selected_category = selectCategory(has_category)
  var my_flag = pickFlag(selected_category);
  var answers = randomizeMCQAnswers(selected_category);

  var correct_answer_index = Math.floor(Math.random() * 4);
  answers.splice(correct_answer_index, 0, my_flag);

  answerBtns.forEach((btn, index) => {
    btn.textContent = answers[index];
  });
}

generateMCQ(categorized);

// Resize button shit
const resizeBtn = document.querySelector("[data-resize-btn]");
resizeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  document.body.classList.toggle("sb-expanded");
});

// Category button shit
const categoryBtns = document.querySelectorAll("[data-category-btn]");
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    categoryBtns.forEach((b) => b.classList.remove("selected"));
    this.classList.add("selected");
    category = this.getAttribute("data-category-btn");
    categorized = true
    generateMCQ()
  });
});

const randomizeBtn = document.querySelector("[data-randomize-btn]");
randomizeBtn.addEventListener("click", function (e) {
  e.preventDefault();
  categoryBtns.forEach((b) => b.classList.remove("selected"));
  this.classList.add("selected");
  categorized = false;
  generateMCQ()
});

// Answer button shit
answerBtns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();
    if (has_pressed === false){
      has_pressed = true;
      if (my_flag === this.textContent){
        this.style.setProperty("--after-bg-color", "green");
      }
    else {
      this.style.setProperty("--after-bg-color", "red");
      answerBtns.forEach((b) => {
        if (b.textContent === my_flag) {
          b.style.setProperty("--after-bg-color", "green");
        }
      });
    }
    }
  });
});

// Answer next button shit
const nextBtn = document.querySelector(".next");
nextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  generateMCQ();
});