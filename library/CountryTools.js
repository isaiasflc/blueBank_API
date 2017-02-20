/**
 * Classe -> CountryTools
 * @desc: Biblioteca de funções para paises
 */

var countries = require('country-data').countries;
var currencies = require('country-data').currencies;
var regions = require('country-data').regions;
var languages = require('country-data').languages;
var callingCountries = require('country-data').callingCountries;

//Lista de países e capitais
exports.GetListAll = function () {
    return [
        {
            ethnical: "afegãne",
            country_name: "Afeganistão",
            country_name_int: "Afghanistan",
            initials: "AF"
        },
        {
            ethnical: "sul-africana",
            country_name: "África do Sul",
            country_name_int: "South Africa",
            initials: "ZA"
        },
        {
            ethnical: "albanesa",
            country_name: "Albânia",
            country_name_int: "Albania",
            initials: "AL"
        },
        {
            ethnical: "alemã",
            country_name: "Alemanha",
            country_name_int: "Germany",
            initials: "DE"
        },
        {
            ethnical: "andorrana",
            country_name: "Andorra",
            country_name_int: "Andorra",
            initials: "AD"
        },
        {
            ethnical: "angolana",
            country_name: "Angola",
            country_name_int: "Angola",
            initials: "AO"
        },
        {
            ethnical: "anguillana",
            country_name: "Anguilla",
            country_name_int: "Anguilla",
            initials: "AI"
        },
        {
            ethnical: "de antártida",
            country_name: "Antártida",
            country_name_int: "Antarctica",
            initials: "AQ"
        },
        {
            ethnical: "antiguana",
            country_name: "Antígua e Barbuda",
            country_name_int: "Antigua & Barbuda",
            initials: "AG"
        },
        {
            ethnical: "saudita",
            country_name: "Arábia Saudita",
            country_name_int: "Saudi Arabia",
            initials: "SA"
        },
        {
            ethnical: "argelina",
            country_name: "Argélia",
            country_name_int: "Algeria",
            initials: "DZ"
        },
        {
            ethnical: "argentina",
            country_name: "Argentina",
            country_name_int: "Argentina",
            initials: "AR"
        },
        {
            ethnical: "armênia",
            country_name: "Armênia",
            country_name_int: "Armenia",
            initials: "AM"
        },
        {
            ethnical: "arubana",
            country_name: "Aruba",
            country_name_int: "Aruba",
            initials: "AW"
        },
        {
            ethnical: "australiana",
            country_name: "Austrália",
            country_name_int: "Australia",
            initials: "AU"
        },
        {
            ethnical: "austríaca",
            country_name: "Áustria",
            country_name_int: "Austria",
            initials: "AT"
        },
        {
            ethnical: "azerbaijano",
            country_name: "Azerbaijão",
            country_name_int: "Azerbaijan",
            initials: "AZ"
        },
        {
            ethnical: "bahamense",
            country_name: "Bahamas",
            country_name_int: "Bahamas",
            initials: "BS"
        },
        {
            ethnical: "barenita",
            country_name: "Bahrein",
            country_name_int: "Bahrain",
            initials: "BH"
        },
        {
            ethnical: "bengali",
            country_name: "Bangladesh",
            country_name_int: "Bangladesh",
            initials: "BD"
        },
        {
            ethnical: "barbadiana",
            country_name: "Barbados",
            country_name_int: "Barbados",
            initials: "BB"
        },
        {
            ethnical: "bielo-russa",
            country_name: "Belarus",
            country_name_int: "Belarus",
            initials: "BY"
        },
        {
            ethnical: "belga",
            country_name: "Bélgica",
            country_name_int: "Belgium",
            initials: "BE"
        },
        {
            ethnical: "belizenha",
            country_name: "Belize",
            country_name_int: "Belize",
            initials: "BZ"
        },
        {
            ethnical: "beninense",
            country_name: "Benin",
            country_name_int: "Benin",
            initials: "BJ"
        },
        {
            ethnical: "bermudiana",
            country_name: "Bermudas",
            country_name_int: "Bermuda",
            initials: "BM"
        },
        {
            ethnical: "boliviana",
            country_name: "Bolívia",
            country_name_int: "Bolivia",
            initials: "BO"
        },
        {
            ethnical: "bósnia",
            country_name: "Bósnia-Herzegóvina",
            country_name_int: "Bosnia & Herzegovina",
            initials: "BA"
        },
        {
            ethnical: "betchuana",
            country_name: "Botsuana",
            country_name_int: "Botswana",
            initials: "BW"
        },
        {
            ethnical: "brasileira",
            country_name: "Brasil",
            country_name_int: "Brazil",
            initials: "BR"
        },
        {
            ethnical: "bruneiana",
            country_name: "Brunei",
            country_name_int: "Brunei",
            initials: "BN"
        },
        {
            ethnical: "búlgara",
            country_name: "Bulgária",
            country_name_int: "Bulgaria",
            initials: "BG"
        },
        {
            ethnical: "burquinês",
            country_name: "Burkina Fasso",
            country_name_int: "Burkina Faso",
            initials: "BF"
        },
        {
            ethnical: "burundinesa",
            country_name: "Burundi",
            country_name_int: "Burundi",
            initials: "BI"
        },
        {
            ethnical: "butanesa",
            country_name: "Butão",
            country_name_int: "Bhutan",
            initials: "BT"
        },
        {
            ethnical: "cabo-verdiana",
            country_name: "Cabo Verde",
            country_name_int: "Cape Verde",
            initials: "CV"
        },
        {
            ethnical: "camaronesa",
            country_name: "Camarões",
            country_name_int: "Cameroon",
            initials: "CM"
        },
        {
            ethnical: "cambojana",
            country_name: "Camboja",
            country_name_int: "Cambodia",
            initials: "KH"
        },
        {
            ethnical: "canadense",
            country_name: "Canadá",
            country_name_int: "Canada",
            initials: "CA"
        },
        {
            ethnical: "canário",
            country_name: "Canárias",
            country_name_int: "Canary Islands",
            initials: "IC"
        },
        {
            ethnical: "cazaque",
            country_name: "Cazaquistão",
            country_name_int: "Kazakhstan",
            initials: "KZ"
        },
        {
            ethnical: "de ceuta e melilla",
            country_name: "Ceuta e Melilla",
            country_name_int: "Ceuta & Melilla",
            initials: "EA"
        },
        {
            ethnical: "chadiana",
            country_name: "Chade",
            country_name_int: "Chad",
            initials: "TD"
        },
        {
            ethnical: "chilena",
            country_name: "Chile",
            country_name_int: "Chile",
            initials: "CL"
        },
        {
            ethnical: "chinesa",
            country_name: "China",
            country_name_int: "China",
            initials: "CN"
        },
        {
            ethnical: "cipriota",
            country_name: "Chipre",
            country_name_int: "Cyprus",
            initials: "CY"
        },
        {
            ethnical: "cingapuriana",
            country_name: "Cingapura",
            country_name_int: "Singapore",
            initials: "SG"
        },
        {
            ethnical: "colombiana",
            country_name: "Colômbia",
            country_name_int: "Colombia",
            initials: "CO"
        },
        {
            ethnical: "comorense",
            country_name: "Comores",
            country_name_int: "Comoros",
            initials: "KM"
        },
        {
            ethnical: "congolesa",
            country_name: "Congo",
            country_name_int: "Congo (Republic)",
            initials: "CG"
        },
        {
            ethnical: "norte-coreano",
            country_name: "Coréia do Norte",
            country_name_int: "North Korea",
            initials: "KP"
        },
        {
            ethnical: "norte-coreana",
            country_name: "Coréia do Sul",
            country_name_int: "South Korea",
            initials: "KR"
        },
        {
            ethnical: "marfinense",
            country_name: "Costa do Marfim",
            country_name_int: "Côte d¿Ivoire",
            initials: "CI"
        },
        {
            ethnical: "costarriquenha",
            country_name: "Costa Rica",
            country_name_int: "Costa Rica",
            initials: "CR"
        },
        {
            ethnical: "croata",
            country_name: "Croácia",
            country_name_int: "Croatia",
            initials: "HR"
        },
        {
            ethnical: "cubana",
            country_name: "Cuba",
            country_name_int: "Cuba",
            initials: "CU"
        },
        {
            ethnical: "curaçauense",
            country_name: "Curaçao",
            country_name_int: "Curaçao",
            initials: "CW"
        },
        {
            ethnical: "chagositano",
            country_name: "Diego Garcia",
            country_name_int: "Diego Garcia",
            initials: "DG"
        },
        {
            ethnical: "dinamarquesa",
            country_name: "Dinamarca",
            country_name_int: "Denmark",
            initials: "DK"
        },
        {
            ethnical: "djibutiana",
            country_name: "Djibuti",
            country_name_int: "Djibouti",
            initials: "DJ"
        },
        {
            ethnical: "dominiquense",
            country_name: "Dominica",
            country_name_int: "Dominica",
            initials: "DM"
        },
        {
            ethnical: "egípcia",
            country_name: "Egito",
            country_name_int: "Egypt",
            initials: "EG"
        },
        {
            ethnical: "salvadorenha",
            country_name: "El Salvador",
            country_name_int: "El Salvador",
            initials: "SV"
        },
        {
            ethnical: "árabe",
            country_name: "Emirados Árabes Unidos",
            country_name_int: "United Arab Emirates",
            initials: "AE"
        },
        {
            ethnical: "equatoriana",
            country_name: "Equador",
            country_name_int: "Ecuador",
            initials: "EC"
        },
        {
            ethnical: "eritreia",
            country_name: "Eritréia",
            country_name_int: "Eritrea",
            initials: "ER"
        },
        {
            ethnical: "eslovaco",
            country_name: "Eslováquia",
            country_name_int: "Slovakia",
            initials: "SK"
        },
        {
            ethnical: "esloveno",
            country_name: "Eslovênia",
            country_name_int: "Slovenia",
            initials: "SI"
        },
        {
            ethnical: "espanhola",
            country_name: "Espanha",
            country_name_int: "Spain",
            initials: "ES"
        },
        {
            ethnical: "norte-americana",
            country_name: "Estados Unidos",
            country_name_int: "United States",
            initials: "US"
        },
        {
            ethnical: "estoniana",
            country_name: "Estônia",
            country_name_int: "Estonia",
            initials: "EE"
        },
        {
            ethnical: "etíope",
            country_name: "Etiópia",
            country_name_int: "Ethiopia",
            initials: "ET"
        },
        {
            ethnical: "fijiana",
            country_name: "Fiji",
            country_name_int: "Fiji",
            initials: "FJ"
        },
        {
            ethnical: "filipina",
            country_name: "Filipinas",
            country_name_int: "Philippines",
            initials: "PH"
        },
        {
            ethnical: "finlandesa",
            country_name: "Finlândia",
            country_name_int: "Finland",
            initials: "FI"
        },
        {
            ethnical: "francesa",
            country_name: "França",
            country_name_int: "France",
            initials: "FR"
        },
        {
            ethnical: "gabonesa",
            country_name: "Gabão",
            country_name_int: "Gabon",
            initials: "GA"
        },
        {
            ethnical: "gambiana",
            country_name: "Gâmbia",
            country_name_int: "Gambia",
            initials: "GM"
        },
        {
            ethnical: "ganense",
            country_name: "Gana",
            country_name_int: "Ghana",
            initials: "GH"
        },
        {
            ethnical: "georgiana",
            country_name: "Geórgia",
            country_name_int: "Georgia",
            initials: "GE"
        },
        {
            ethnical: "gibraltariana",
            country_name: "Gibraltar",
            country_name_int: "Gibraltar",
            initials: "GI"
        },
        {
            ethnical: "inglesa",
            country_name: "Grã-Bretanha (Reino Unido, UK)",
            country_name_int: "United Kingdom",
            initials: "GB"
        },
        {
            ethnical: "granadina",
            country_name: "Granada",
            country_name_int: "Grenada",
            initials: "GD"
        },
        {
            ethnical: "grega",
            country_name: "Grécia",
            country_name_int: "Greece",
            initials: "GR"
        },
        {
            ethnical: "groenlandesa",
            country_name: "Groelândia",
            country_name_int: "Greenland",
            initials: "GL"
        },
        {
            ethnical: "guadalupense",
            country_name: "Guadalupe",
            country_name_int: "Guadeloupe",
            initials: "GP"
        },
        {
            ethnical: "guamês",
            country_name: "Guam (Território dos Estados Unidos)",
            country_name_int: "Guam",
            initials: "GU"
        },
        {
            ethnical: "guatemalteca",
            country_name: "Guatemala",
            country_name_int: "Guatemala",
            initials: "GT"
        },
        {
            ethnical: "guernesiano",
            country_name: "Guernsey",
            country_name_int: "Guernsey",
            initials: "GG"
        },
        {
            ethnical: "guianense",
            country_name: "Guiana",
            country_name_int: "Guyana",
            initials: "GY"
        },
        {
            ethnical: "franco-guianense",
            country_name: "Guiana Francesa",
            country_name_int: "French Guiana",
            initials: "GF"
        },
        {
            ethnical: "guinéu-equatoriano ou equatoguineana",
            country_name: "Guiné",
            country_name_int: "Guinea",
            initials: "GN"
        },
        {
            ethnical: "guinéu-equatoriano",
            country_name: "Guiné Equatorial",
            country_name_int: "Equatorial Guinea",
            initials: "GQ"
        },
        {
            ethnical: "guineense",
            country_name: "Guiné-Bissau",
            country_name_int: "Guinea-Bissau",
            initials: "GW"
        },
        {
            ethnical: "haitiana",
            country_name: "Haiti",
            country_name_int: "Haiti",
            initials: "HT"
        },
        {
            ethnical: "holandês",
            country_name: "Holanda",
            country_name_int: "Netherlands",
            initials: "NL"
        },
        {
            ethnical: "hondurenha",
            country_name: "Honduras",
            country_name_int: "Honduras",
            initials: "HN"
        },
        {
            ethnical: "hong-konguiana ou chinesa",
            country_name: "Hong Kong",
            country_name_int: "Hong Kong",
            initials: "HK"
        },
        {
            ethnical: "húngara",
            country_name: "Hungria",
            country_name_int: "Hungary",
            initials: "HU"
        },
        {
            ethnical: "iemenita",
            country_name: "Iêmen",
            country_name_int: "Yemen",
            initials: "YE"
        },
        {
            ethnical: "da ilha bouvet",
            country_name: "Ilha Bouvet",
            country_name_int: "Bouvet Island",
            initials: "BV"
        },
        {
            ethnical: "da ilha de ascensão",
            country_name: "Ilha de Ascensão",
            country_name_int: "Ascension Island",
            initials: "AC"
        },
        {
            ethnical: "da ilha de clipperton",
            country_name: "Ilha de Clipperton",
            country_name_int: "Clipperton Island",
            initials: "CP"
        },
        {
            ethnical: "manês",
            country_name: "Ilha de Man",
            country_name_int: "Isle of Man",
            initials: "IM"
        },
        {
            ethnical: "natalense",
            country_name: "Ilha Natal",
            country_name_int: "Christmas Island",
            initials: "CX"
        },
        {
            ethnical: "pitcairnense",
            country_name: "Ilha Pitcairn",
            country_name_int: "Pitcairn Islands",
            initials: "PN"
        },
        {
            ethnical: "reunionense",
            country_name: "Ilha Reunião",
            country_name_int: "Réunion",
            initials: "RE"
        },
        {
            ethnical: "alandês",
            country_name: "Ilhas Aland",
            country_name_int: "Åland Islands",
            initials: "AX"
        },
        {
            ethnical: "caimanês",
            country_name: "Ilhas Cayman",
            country_name_int: "Cayman Islands",
            initials: "KY"
        },
        {
            ethnical: "coquense",
            country_name: "Ilhas Cocos",
            country_name_int: "Cocos (Keeling) Islands",
            initials: "CC"
        },
        {
            ethnical: "cookense",
            country_name: "Ilhas Cook",
            country_name_int: "Cook Islands",
            initials: "CK"
        },
        {
            ethnical: "faroense",
            country_name: "Ilhas Faroes",
            country_name_int: "Faroe Islands",
            initials: "FO"
        },
        {
            ethnical: "das ilhas geórgia do sul e sandwich do sul",
            country_name: "Ilhas Geórgia do Sul e Sandwich do Sul",
            country_name_int: "South Georgia & South Sandwich Islands",
            initials: "GS"
        },
        {
            ethnical: "das ilhas heard e mcdonald",
            country_name: "Ilhas Heard e McDonald (Território da Austrália)",
            country_name_int: "Heard & McDonald Islands",
            initials: "HM"
        },
        {
            ethnical: "malvinense",
            country_name: "Ilhas Malvinas",
            country_name_int: "Falkland Islands (Islas Malvinas)",
            initials: "FK"
        },
        {
            ethnical: "norte-marianense",
            country_name: "Ilhas Marianas do Norte",
            country_name_int: "Northern Mariana Islands",
            initials: "MP"
        },
        {
            ethnical: "marshallino",
            country_name: "Ilhas Marshall",
            country_name_int: "Marshall Islands",
            initials: "MH"
        },
        {
            ethnical: "das ilhas menores afastadas",
            country_name: "Ilhas Menores dos Estados Unidos",
            country_name_int: "U.S. Outlying Islands",
            initials: "UM"
        },
        {
            ethnical: "norfolquino",
            country_name: "Ilhas Norfolk",
            country_name_int: "Norfolk Island",
            initials: "NF"
        },
        {
            ethnical: "salomônico",
            country_name: "Ilhas Salomão",
            country_name_int: "Solomon Islands",
            initials: "SB"
        },
        {
            ethnical: "seichelense",
            country_name: "Ilhas Seychelles",
            country_name_int: "Seychelles",
            initials: "SC"
        },
        {
            ethnical: "toquelauano",
            country_name: "Ilhas Tokelau",
            country_name_int: "Tokelau",
            initials: "TK"
        },
        {
            ethnical: "turquês",
            country_name: "Ilhas Turks e Caicos",
            country_name_int: "Turks & Caicos Islands",
            initials: "TC"
        },
        {
            ethnical: "virginense",
            country_name: "Ilhas Virgens (Estados Unidos)",
            country_name_int: "U.S. Virgin Islands",
            initials: "VI"
        },
        {
            ethnical: "virginense",
            country_name: "Ilhas Virgens (Inglaterra)",
            country_name_int: "British Virgin Islands",
            initials: "VG"
        },
        {
            ethnical: "indiano",
            country_name: "Índia",
            country_name_int: "India",
            initials: "IN"
        },
        {
            ethnical: "indonésia",
            country_name: "Indonésia",
            country_name_int: "Indonesia",
            initials: "ID"
        },
        {
            ethnical: "iraniano",
            country_name: "Irã",
            country_name_int: "Iran",
            initials: "IR"
        },
        {
            ethnical: "iraquiana",
            country_name: "Iraque",
            country_name_int: "Iraq",
            initials: "IQ"
        },
        {
            ethnical: "irlandesa",
            country_name: "Irlanda",
            country_name_int: "Ireland",
            initials: "IE"
        },
        {
            ethnical: "islandesa",
            country_name: "Islândia",
            country_name_int: "Iceland",
            initials: "IS"
        },
        {
            ethnical: "israelense",
            country_name: "Israel",
            country_name_int: "Israel",
            initials: "IL"
        },
        {
            ethnical: "italiana",
            country_name: "Itália",
            country_name_int: "Italy",
            initials: "IT"
        },
        {
            ethnical: "jamaicana",
            country_name: "Jamaica",
            country_name_int: "Jamaica",
            initials: "JM"
        },
        {
            ethnical: "japonesa",
            country_name: "Japão",
            country_name_int: "Japan",
            initials: "JP"
        },
        {
            ethnical: "canalina",
            country_name: "Jersey",
            country_name_int: "Jersey",
            initials: "JE"
        },
        {
            ethnical: "jordaniana",
            country_name: "Jordânia",
            country_name_int: "Jordan",
            initials: "JO"
        },
        {
            ethnical: "kiribatiana",
            country_name: "Kiribati",
            country_name_int: "Kiribati",
            initials: "KI"
        },
        {
            ethnical: "kosovar",
            country_name: "Kosovo",
            country_name_int: "Kosovo",
            initials: "XK"
        },
        {
            ethnical: "kuwaitiano",
            country_name: "Kuait",
            country_name_int: "Kuwait",
            initials: "KW"
        },
        {
            ethnical: "laosiana",
            country_name: "Laos",
            country_name_int: "Laos",
            initials: "LA"
        },
        {
            ethnical: "lesota",
            country_name: "Lesoto",
            country_name_int: "Lesotho",
            initials: "LS"
        },
        {
            ethnical: "letão",
            country_name: "Letônia",
            country_name_int: "Latvia",
            initials: "LV"
        },
        {
            ethnical: "libanesa",
            country_name: "Líbano",
            country_name_int: "Lebanon",
            initials: "LB"
        },
        {
            ethnical: "liberiana",
            country_name: "Libéria",
            country_name_int: "Liberia",
            initials: "LR"
        },
        {
            ethnical: "líbia",
            country_name: "Líbia",
            country_name_int: "Libya",
            initials: "LY"
        },
        {
            ethnical: "liechtensteiniense",
            country_name: "Liechtenstein",
            country_name_int: "Liechtenstein",
            initials: "LI"
        },
        {
            ethnical: "lituana",
            country_name: "Lituânia",
            country_name_int: "Lithuania",
            initials: "LT"
        },
        {
            ethnical: "luxemburguesa",
            country_name: "Luxemburgo",
            country_name_int: "Luxembourg",
            initials: "LU"
        },
        {
            ethnical: "macauense",
            country_name: "Macau",
            country_name_int: "Macau",
            initials: "MO"
        },
        {
            ethnical: "macedônio",
            country_name: "Macedônia (República Yugoslava)",
            country_name_int: "Macedonia (FYROM)",
            initials: "MK"
        },
        {
            ethnical: "malgaxe",
            country_name: "Madagascar",
            country_name_int: "Madagascar",
            initials: "MG"
        },
        {
            ethnical: "malaia",
            country_name: "Malásia",
            country_name_int: "Malaysia",
            initials: "MY"
        },
        {
            ethnical: "malauiano",
            country_name: "Malaui",
            country_name_int: "Malawi",
            initials: "MW"
        },
        {
            ethnical: "maldívia",
            country_name: "Maldivas",
            country_name_int: "Maldives",
            initials: "MV"
        },
        {
            ethnical: "malinesa",
            country_name: "Mali",
            country_name_int: "Mali",
            initials: "ML"
        },
        {
            ethnical: "maltesa",
            country_name: "Malta",
            country_name_int: "Malta",
            initials: "MT"
        },
        {
            ethnical: "marroquina",
            country_name: "Marrocos",
            country_name_int: "Morocco",
            initials: "MA"
        },
        {
            ethnical: "martiniquense",
            country_name: "Martinica",
            country_name_int: "Martinique",
            initials: "MQ"
        },
        {
            ethnical: "mauriciana",
            country_name: "Maurício",
            country_name_int: "Mauritius",
            initials: "MU"
        },
        {
            ethnical: "mauritana",
            country_name: "Mauritânia",
            country_name_int: "Mauritania",
            initials: "MR"
        },
        {
            ethnical: "maiotense",
            country_name: "Mayotte",
            country_name_int: "Mayotte",
            initials: "YT"
        },
        {
            ethnical: "mexicana",
            country_name: "México",
            country_name_int: "Mexico",
            initials: "MX"
        },
        {
            ethnical: "micronésia",
            country_name: "Micronésia",
            country_name_int: "Micronesia",
            initials: "FM"
        },
        {
            ethnical: "moçambicana",
            country_name: "Moçambique",
            country_name_int: "Mozambique",
            initials: "MZ"
        },
        {
            ethnical: "moldavo",
            country_name: "Moldova",
            country_name_int: "Moldova",
            initials: "MD"
        },
        {
            ethnical: "monegasca",
            country_name: "Mônaco",
            country_name_int: "Monaco",
            initials: "MC"
        },
        {
            ethnical: "mongol",
            country_name: "Mongólia",
            country_name_int: "Mongolia",
            initials: "MN"
        },
        {
            ethnical: "montenegra",
            country_name: "Montenegro",
            country_name_int: "Montenegro",
            initials: "ME"
        },
        {
            ethnical: "montserratiano",
            country_name: "Montserrat",
            country_name_int: "Montserrat",
            initials: "MS"
        },
        {
            ethnical: "birmanês",
            country_name: "Myanma",
            country_name_int: "Myanmar (Burma)",
            initials: "MM"
        },
        {
            ethnical: "namíbia",
            country_name: "Namíbia",
            country_name_int: "Namibia",
            initials: "NA"
        },
        {
            ethnical: "nauruana",
            country_name: "Nauru",
            country_name_int: "Nauru",
            initials: "NR"
        },
        {
            ethnical: "nepalesa",
            country_name: "Nepal",
            country_name_int: "Nepal",
            initials: "NP"
        },
        {
            ethnical: "nicaraguense",
            country_name: "Nicarágua",
            country_name_int: "Nicaragua",
            initials: "NI"
        },
        {
            ethnical: "nigerina",
            country_name: "Níger",
            country_name_int: "Niger",
            initials: "NE"
        },
        {
            ethnical: "nigeriana",
            country_name: "Nigéria",
            country_name_int: "Nigeria",
            initials: "NG"
        },
        {
            ethnical: "niueana",
            country_name: "Niue",
            country_name_int: "Niue",
            initials: "NU"
        },
        {
            ethnical: "norueguesa",
            country_name: "Noruega",
            country_name_int: "Norway",
            initials: "NO"
        },
        {
            ethnical: "caledônia",
            country_name: "Nova Caledônia",
            country_name_int: "New Caledonia",
            initials: "NC"
        },
        {
            ethnical: "neozelandesa",
            country_name: "Nova Zelândia",
            country_name_int: "New Zealand",
            initials: "NZ"
        },
        {
            ethnical: "omani",
            country_name: "Omã",
            country_name_int: "Oman",
            initials: "OM"
        },
        {
            ethnical: "dos países baixos caribenhos",
            country_name: "Países Baixos Caribenhos",
            country_name_int: "Caribbean Netherlands",
            initials: "BQ"
        },
        {
            ethnical: "palauense",
            country_name: "Palau",
            country_name_int: "Palau",
            initials: "PW"
        },
        {
            ethnical: "palestino",
            country_name: "Palestina",
            country_name_int: "Palestine",
            initials: "PS"
        },
        {
            ethnical: "zona do canal do panamá",
            country_name: "Panamá",
            country_name_int: "Panama",
            initials: "PA"
        },
        {
            ethnical: "pauásia",
            country_name: "Papua-Nova Guiné",
            country_name_int: "Papua New Guinea",
            initials: "PG"
        },
        {
            ethnical: "paquistanesa",
            country_name: "Paquistão",
            country_name_int: "Pakistan",
            initials: "PK"
        },
        {
            ethnical: "paraguaia",
            country_name: "Paraguai",
            country_name_int: "Paraguay",
            initials: "PY"
        },
        {
            ethnical: "peruana",
            country_name: "Peru",
            country_name_int: "Peru",
            initials: "PE"
        },
        {
            ethnical: "franco-polinésia",
            country_name: "Polinésia Francesa",
            country_name_int: "French Polynesia",
            initials: "PF"
        },
        {
            ethnical: "polonesa",
            country_name: "Polônia",
            country_name_int: "Poland",
            initials: "PL"
        },
        {
            ethnical: "portorriquenha",
            country_name: "Porto Rico",
            country_name_int: "Puerto Rico",
            initials: "PR"
        },
        {
            ethnical: "portuguesa",
            country_name: "Portugal",
            country_name_int: "Portugal",
            initials: "PT"
        },
        {
            ethnical: "catarense",
            country_name: "Qatar",
            country_name_int: "Qatar",
            initials: "QA"
        },
        {
            ethnical: "queniano",
            country_name: "Quênia",
            country_name_int: "Kenya",
            initials: "KE"
        },
        {
            ethnical: "quirguiz",
            country_name: "Quirguistão",
            country_name_int: "Kyrgyzstan",
            initials: "KG"
        },
        {
            ethnical: "centro-africana",
            country_name: "República Centro-Africana",
            country_name_int: "Central African Republic",
            initials: "CF"
        },
        {
            ethnical: "congolesa",
            country_name: "República Democrática do Congo",
            country_name_int: "Congo (DRC)",
            initials: "CD"
        },
        {
            ethnical: "dominicana",
            country_name: "República Dominicana",
            country_name_int: "Dominican Republic",
            initials: "DO"
        },
        {
            ethnical: "tcheco",
            country_name: "República Tcheca",
            country_name_int: "Czech Republic",
            initials: "CZ"
        },
        {
            ethnical: "romena",
            country_name: "Romênia",
            country_name_int: "Romania",
            initials: "RO"
        },
        {
            ethnical: "ruandesa",
            country_name: "Ruanda",
            country_name_int: "Rwanda",
            initials: "RW"
        },
        {
            ethnical: "russa",
            country_name: "Rússia (antiga URSS) - Federação Russa",
            country_name_int: "Russia",
            initials: "RU"
        },
        {
            ethnical: "saariano",
            country_name: "Saara Ocidental",
            country_name_int: "Western Sahara",
            initials: "EH"
        },
        {
            ethnical: "pedro-miquelonense",
            country_name: "Saint-Pierre e Miquelon",
            country_name_int: "St. Pierre & Miquelon",
            initials: "PM"
        },
        {
            ethnical: "samoana",
            country_name: "Samoa Americana",
            country_name_int: "American Samoa",
            initials: "AS"
        },
        {
            ethnical: "samoano",
            country_name: "Samoa Ocidental",
            country_name_int: "Samoa",
            initials: "WS"
        },
        {
            ethnical: "samarinês",
            country_name: "San Marino",
            country_name_int: "San Marino",
            initials: "SM"
        },
        {
            ethnical: "helenense",
            country_name: "Santa Helena",
            country_name_int: "St. Helena",
            initials: "SH"
        },
        {
            ethnical: "santa-lucense",
            country_name: "Santa Lúcia",
            country_name_int: "St. Lucia",
            initials: "LC"
        },
        {
            ethnical: "são-bartolomeense",
            country_name: "São Bartolomeu",
            country_name_int: "St. Barthélemy",
            initials: "BL"
        },
        {
            ethnical: "são-cristovense",
            country_name: "São Cristóvão e Névis",
            country_name_int: "St. Kitts & Nevis",
            initials: "KN"
        },
        {
            ethnical: "são-martinhense",
            country_name: "São Martim",
            country_name_int: "St. Martin",
            initials: "MF"
        },
        {
            ethnical: "são-martinhense",
            country_name: "São Martinho",
            country_name_int: "Sint Maarten",
            initials: "SX"
        },
        {
            ethnical: "são-tomense",
            country_name: "São Tomé e Príncipe",
            country_name_int: "São Tomé & Príncipe",
            initials: "ST"
        },
        {
            ethnical: "sao-vicentino",
            country_name: "São Vicente e Granadinas",
            country_name_int: "St. Vincent & Grenadines",
            initials: "VC"
        },
        {
            ethnical: "senegalesa",
            country_name: "Senegal",
            country_name_int: "Senegal",
            initials: "SN"
        },
        {
            ethnical: "leonesa",
            country_name: "Serra Leoa",
            country_name_int: "Sierra Leone",
            initials: "SL"
        },
        {
            ethnical: "sérvia",
            country_name: "Sérvia",
            country_name_int: "Serbia",
            initials: "RS"
        },
        {
            ethnical: "síria",
            country_name: "Síria",
            country_name_int: "Syria",
            initials: "SY"
        },
        {
            ethnical: "somali",
            country_name: "Somália",
            country_name_int: "Somalia",
            initials: "SO"
        },
        {
            ethnical: "cingalesa",
            country_name: "Sri Lanka",
            country_name_int: "Sri Lanka",
            initials: "LK"
        },
        {
            ethnical: "suazi",
            country_name: "Suazilândia",
            country_name_int: "Swaziland",
            initials: "SZ"
        },
        {
            ethnical: "sudanesa",
            country_name: "Sudão",
            country_name_int: "Sudan",
            initials: "SD"
        },
        {
            ethnical: "sul-sudanês",
            country_name: "Sudão do Sul",
            country_name_int: "South Sudan",
            initials: "SS"
        },
        {
            ethnical: "sueca",
            country_name: "Suécia",
            country_name_int: "Sweden",
            initials: "SE"
        },
        {
            ethnical: "suíça",
            country_name: "Suíça",
            country_name_int: "Switzerland",
            initials: "CH"
        },
        {
            ethnical: "surinamesa",
            country_name: "Suriname",
            country_name_int: "Suriname",
            initials: "SR"
        },
        {
            ethnical: "svalbardense",
            country_name: "Svalbard",
            country_name_int: "Svalbard & Jan Mayen",
            initials: "SJ"
        },
        {
            ethnical: "tadjique",
            country_name: "Tadjiquistão",
            country_name_int: "Tajikistan",
            initials: "TJ"
        },
        {
            ethnical: "tailandesa",
            country_name: "Tailândia",
            country_name_int: "Thailand",
            initials: "TH"
        },
        {
            ethnical: "taiwanês",
            country_name: "Taiwan",
            country_name_int: "Taiwan",
            initials: "TW"
        },
        {
            ethnical: "tanzaniana",
            country_name: "Tanzânia",
            country_name_int: "Tanzania",
            initials: "TZ"
        },
        {
            ethnical: "do território britânico do oceano índico",
            country_name: "Território Britânico do Oceano índico",
            country_name_int: "British Indian Ocean Territory",
            initials: "IO"
        },
        {
            ethnical: "do territórios do sul da frança",
            country_name: "Territórios do Sul da França",
            country_name_int: "French Southern Territories",
            initials: "TF"
        },
        {
            ethnical: "timorense",
            country_name: "Timor-Leste",
            country_name_int: "Timor-Leste",
            initials: "TL"
        },
        {
            ethnical: "togolesa",
            country_name: "Togo",
            country_name_int: "Togo",
            initials: "TG"
        },
        {
            ethnical: "tonganesa",
            country_name: "Tonga",
            country_name_int: "Tonga",
            initials: "TO"
        },
        {
            ethnical: "trinitário-tobagense",
            country_name: "Trinidad e Tobago",
            country_name_int: "Trinidad & Tobago",
            initials: "TT"
        },
        {
            ethnical: "tristanita",
            country_name: "Tristão da Cunha",
            country_name_int: "Tristan da Cunha",
            initials: "TA"
        },
        {
            ethnical: "tunisiana",
            country_name: "Tunísia",
            country_name_int: "Tunisia",
            initials: "TN"
        },
        {
            ethnical: "turcomana",
            country_name: "Turcomenistão",
            country_name_int: "Turkmenistan",
            initials: "TM"
        },
        {
            ethnical: "turca",
            country_name: "Turquia",
            country_name_int: "Turkey",
            initials: "TR"
        },
        {
            ethnical: "tuvaluana",
            country_name: "Tuvalu",
            country_name_int: "Tuvalu",
            initials: "TV"
        },
        {
            ethnical: "ucraniana",
            country_name: "Ucrânia",
            country_name_int: "Ukraine",
            initials: "UA"
        },
        {
            ethnical: "ugandense",
            country_name: "Uganda",
            country_name_int: "Uganda",
            initials: "UG"
        },
        {
            ethnical: "uruguaia",
            country_name: "Uruguai",
            country_name_int: "Uruguay",
            initials: "UY"
        },
        {
            ethnical: "uzbeque",
            country_name: "Uzbequistão",
            country_name_int: "Uzbekistan",
            initials: "UZ"
        },
        {
            ethnical: "vanuatuense",
            country_name: "Vanuatu",
            country_name_int: "Vanuatu",
            initials: "VU"
        },
        {
            ethnical: "vaticano",
            country_name: "Vaticano",
            country_name_int: "Vatican City",
            initials: "VA"
        },
        {
            ethnical: "venezuelana",
            country_name: "Venezuela",
            country_name_int: "Venezuela",
            initials: "VE"
        },
        {
            ethnical: "vietnamita",
            country_name: "Vietnã",
            country_name_int: "Vietnam",
            initials: "VN"
        },
        {
            ethnical: "wallis-futunense",
            country_name: "Wallis e Futuna",
            country_name_int: "Wallis & Futuna",
            initials: "WF"
        },
        {
            ethnical: "zambiana",
            country_name: "Zâmbia",
            country_name_int: "Zambia",
            initials: "ZM"
        },
        {
            ethnical: "zimbabuana",
            country_name: "Zimbábue",
            country_name_int: "Zimbabwe",
            initials: "ZW"
        }]
}


//Lista de países e capitais
exports.GetListAllWithPhoneCode = function () {
   return countries.all
}


