-- MySQL dump 10.13  Distrib 8.0.32, for macos13 (arm64)
--
-- Host: appworks-mysql-1.cwsergwzdswh.us-east-1.rds.amazonaws.com    Database: mailex
-- ------------------------------------------------------
-- Server version	8.0.33

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `countries` (
  `code` char(2) NOT NULL,
  `country_name` varchar(50) NOT NULL,
  `alpha3_code` char(3) NOT NULL,
  `lat` decimal(10,7) DEFAULT NULL,
  `lng` decimal(10,7) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES ('AD','Andorra','AND',42.5462450,1.6015540),('AE','United Arab Emirates','ARE',23.4240760,53.8478180),('AF','Afghanistan','AFG',33.9391100,67.7099530),('AG','Antigua and Barbuda','ATG',17.0608160,-61.7964280),('AI','Anguilla','AIA',18.2205540,-63.0686150),('AL','Albania','ALB',41.1533320,20.1683310),('AM','Armenia','ARM',40.0690990,45.0381890),('AO','Angola','AGO',-11.2026920,17.8738870),('AQ','Antarctica','ATA',-75.2509730,-0.0713890),('AR','Argentina','ARG',-38.4160970,-63.6166720),('AS','American Samoa','ASM',-14.2709720,-170.1322170),('AT','Austria','AUT',47.5162310,14.5500720),('AU','Australia','AUS',-25.2743980,133.7751360),('AW','Aruba','ABW',12.5211100,-69.9683380),('AZ','Azerbaijan','AZE',40.1431050,47.5769270),('BA','Bosnia and Herzegovina','BIH',43.9158860,17.6790760),('BB','Barbados','BRB',13.1938870,-59.5431980),('BD','Bangladesh','BGD',23.6849940,90.3563310),('BE','Belgium','BEL',50.5038870,4.4699360),('BF','Burkina Faso','BFA',12.2383330,-1.5615930),('BG','Bulgaria','BGR',42.7338830,25.4858300),('BH','Bahrain','BHR',25.9304140,50.6377720),('BI','Burundi','BDI',-3.3730560,29.9188860),('BJ','Benin','BEN',9.3076900,2.3158340),('BM','Bermuda','BMU',32.3213840,-64.7573700),('BN','Brunei','BRN',4.5352770,114.7276690),('BO','Bolivia','BOL',-16.2901540,-63.5886530),('BR','Brazil','BRA',-14.2350040,-51.9252800),('BS','Bahamas','BHS',25.0342800,-77.3962800),('BT','Bhutan','BTN',27.5141620,90.4336010),('BV','Bouvet Island','BVT',-54.4231990,3.4131940),('BW','Botswana','BWA',-22.3284740,24.6848660),('BY','Belarus','BLR',53.7098070,27.9533890),('BZ','Belize','BLZ',17.1898770,-88.4976500),('CA','Canada','CAN',56.1303660,-106.3467710),('CC','Cocos [Keeling] Islands','CCK',-12.1641650,96.8709560),('CD','Democratic Republic of the Congo','COD',-4.0383330,21.7586640),('CF','Central African Republic','CAF',6.6111110,20.9394440),('CG','Republic of the Congo','COG',-0.2280210,15.8276590),('CH','Switzerland','CHE',46.8181880,8.2275120),('CI','Ivory Coast','CIV',7.5399890,-5.5470800),('CK','Cook Islands','COK',-21.2367360,-159.7776710),('CL','Chile','CHL',-35.6751470,-71.5429690),('CM','Cameroon','CMR',7.3697220,12.3547220),('CN','China','CHN',35.8616600,104.1953970),('CO','Colombia','COL',4.5708680,-74.2973330),('CR','Costa Rica','CRI',9.7489170,-83.7534280),('CU','Cuba','CUB',21.5217570,-77.7811670),('CV','Cape Verde','CPV',16.0020820,-24.0131970),('CX','Christmas Island','CXR',-10.4475250,105.6904490),('CY','Cyprus','CYP',35.1264130,33.4298590),('CZ','Czech Republic','CZE',49.8174920,15.4729620),('DE','Germany','DEU',51.1656910,10.4515260),('DJ','Djibouti','DJI',11.8251380,42.5902750),('DK','Denmark','DNK',56.2639200,9.5017850),('DM','Dominica','DMA',15.4149990,-61.3709760),('DO','Dominican Republic','DOM',18.7356930,-70.1626510),('DZ','Algeria','DZA',28.0338860,1.6596260),('EC','Ecuador','ECU',-1.8312390,-78.1834060),('EE','Estonia','EST',58.5952720,25.0136070),('EG','Egypt','EGY',26.8205530,30.8024980),('EH','Western Sahara','ESH',24.2155270,-12.8858340),('ER','Eritrea','ERI',15.1793840,39.7823340),('ES','Spain','ESP',40.4636670,-3.7492200),('ET','Ethiopia','ETH',9.1450000,40.4896730),('FI','Finland','FIN',61.9241100,25.7481510),('FJ','Fiji','FJI',-16.5781930,179.4144130),('FK','Falkland Islands','FLK',-51.7962530,-59.5236130),('FM','Micronesia','FSM',7.4255540,150.5508120),('FO','Faroe Islands','FRO',61.8926350,-6.9118060),('FR','France','FRA',46.2276380,2.2137490),('GA','Gabon','GAB',-0.8036890,11.6094440),('GB','United Kingdom','GBR',55.3780510,-3.4359730),('GD','Grenada','GRD',12.2627760,-61.6041710),('GE','Georgia','GEO',42.3154070,43.3568920),('GF','French Guiana','GUF',3.9338890,-53.1257820),('GG','Guernsey','GGY',49.4656910,-2.5852780),('GH','Ghana','GHA',7.9465270,-1.0231940),('GI','Gibraltar','GIB',36.1377410,-5.3453740),('GL','Greenland','GRL',71.7069360,-42.6043030),('GM','Gambia','GMB',13.4431820,-15.3101390),('GN','Guinea','GIN',9.9455870,-9.6966450),('GP','Guadeloupe','GLP',16.9959710,-62.0676410),('GQ','Equatorial Guinea','GNQ',1.6508010,10.2678950),('GR','Greece','GRC',39.0742080,21.8243120),('GS','South Georgia and the South Sandwich Islands','SGS',-54.4295790,-36.5879090),('GT','Guatemala','GTM',15.7834710,-90.2307590),('GU','Guam','GUM',13.4443040,144.7937310),('GW','Guinea-Bissau','GNB',11.8037490,-15.1804130),('GY','Guyana','GUY',4.8604160,-58.9301800),('HK','Hong Kong','HKG',22.3964280,114.1094970),('HM','Heard Island and McDonald Islands','HMD',-53.0818100,73.5041580),('HN','Honduras','HND',15.1999990,-86.2419050),('HR','Croatia','HRV',45.1000000,15.2000000),('HT','Haiti','HTI',18.9711870,-72.2852150),('HU','Hungary','HUN',47.1624940,19.5033040),('ID','Indonesia','IDN',-0.7892750,113.9213270),('IE','Ireland','IRL',53.4129100,-8.2438900),('IL','Israel','ISR',31.0460510,34.8516120),('IM','Isle of Man','IMN',54.2361070,-4.5480560),('IN','India','IND',20.5936840,78.9628800),('IO','British Indian Ocean Territory','IOT',-6.3431940,71.8765190),('IQ','Iraq','IRQ',33.2231910,43.6792910),('IR','Iran','IRN',32.4279080,53.6880460),('IS','Iceland','ISL',64.9630510,-19.0208350),('IT','Italy','ITA',41.8719400,12.5673800),('JE','Jersey','JEY',49.2144390,-2.1312500),('JM','Jamaica','JAM',18.1095810,-77.2975080),('JO','Jordan','JOR',30.5851640,36.2384140),('JP','Japan','JPN',36.2048240,138.2529240),('KE','Kenya','KEN',-0.0235590,37.9061930),('KG','Kyrgyzstan','KGZ',41.2043800,74.7660980),('KH','Cambodia','KHM',12.5656790,104.9909630),('KI','Kiribati','KIR',-3.3704170,-168.7340390),('KM','Comoros','COM',-11.8750010,43.8722190),('KN','Saint Kitts and Nevis','KNA',17.3578220,-62.7829980),('KP','North Korea','PRK',40.3398520,127.5100930),('KR','South Korea','KOR',35.9077570,127.7669220),('KW','Kuwait','KWT',29.3116600,47.4817660),('KY','Cayman Islands','CYM',19.5134690,-80.5669560),('KZ','Kazakhstan','KAZ',48.0195730,66.9236840),('LA','Laos','LAO',19.8562700,102.4954960),('LB','Lebanon','LBN',33.8547210,35.8622850),('LC','Saint Lucia','LCA',13.9094440,-60.9788930),('LI','Liechtenstein','LIE',47.1660000,9.5553730),('LK','Sri Lanka','LKA',7.8730540,80.7717970),('LR','Liberia','LBR',6.4280550,-9.4294990),('LS','Lesotho','LSO',-29.6099880,28.2336080),('LT','Lithuania','LTU',55.1694380,23.8812750),('LU','Luxembourg','LUX',49.8152730,6.1295830),('LV','Latvia','LVA',56.8796350,24.6031890),('LY','Libya','LBY',26.3351000,17.2283310),('MA','Morocco','MAR',31.7917020,-7.0926200),('MC','Monaco','MCO',43.7502980,7.4128410),('MD','Moldova','MDA',47.4116310,28.3698850),('ME','Montenegro','MNE',42.7086780,19.3743900),('MG','Madagascar','MDG',-18.7669470,46.8691070),('MH','Marshall Islands','MHL',7.1314740,171.1844780),('MK','Macedonia','MKD',41.6086350,21.7452750),('ML','Mali','MLI',17.5706920,-3.9961660),('MM','Myanmar [Burma]','MMR',21.9139650,95.9562230),('MN','Mongolia','MNG',46.8624960,103.8466560),('MO','Macao','MAC',22.1987450,113.5438730),('MP','Northern Mariana Islands','MNP',17.3308300,145.3846900),('MQ','Martinique','MTQ',14.6415280,-61.0241740),('MR','Mauritania','MRT',21.0078900,-10.9408350),('MS','Montserrat','MSR',16.7424980,-62.1873660),('MT','Malta','MLT',35.9374960,14.3754160),('MU','Mauritius','MUS',-20.3484040,57.5521520),('MV','Maldives','MDV',3.2027780,73.2206800),('MW','Malawi','MWI',-13.2543080,34.3015250),('MX','Mexico','MEX',23.6345010,-102.5527840),('MY','Malaysia','MYS',4.2104840,101.9757660),('MZ','Mozambique','MOZ',-18.6656950,35.5295620),('NC','New Caledonia','NCL',-20.9043050,165.6180420),('NE','Niger','NER',17.6077890,8.0816660),('NF','Norfolk Island','NFK',-29.0408350,167.9547120),('NG','Nigeria','NGA',9.0819990,8.6752770),('NI','Nicaragua','NIC',12.8654160,-85.2072290),('NL','Netherlands','NLD',52.1326330,5.2912660),('NO','Norway','NOR',60.4720240,8.4689460),('NP','Nepal','NPL',28.3948570,84.1240080),('NR','Nauru','NRU',-0.5227780,166.9315030),('NU','Niue','NIU',-19.0544450,-169.8672330),('NZ','New Zealand','NZL',-40.9005570,174.8859710),('OM','Oman','OMN',21.5125830,55.9232550),('PA','Panama','PAN',8.5379810,-80.7821270),('PE','Peru','PER',-9.1899670,-75.0151520),('PF','French Polynesia','PYF',-17.6797420,-149.4068430),('PG','Papua New Guinea','PNG',-6.3149930,143.9555500),('PH','Philippines','PHL',12.8797210,121.7740170),('PK','Pakistan','PAK',30.3753210,69.3451160),('PL','Poland','POL',51.9194380,19.1451360),('PM','Saint Pierre and Miquelon','SPM',46.9419360,-56.2711100),('PN','Pitcairn Islands','PCN',-24.7036150,-127.4393080),('PR','Puerto Rico','PRI',18.2208330,-66.5901490),('PS','Palestine','PSE',31.9521620,35.2331540),('PT','Portugal','PRT',39.3998720,-8.2244540),('PW','Palau','PLW',7.5149800,134.5825200),('PY','Paraguay','PRY',-23.4425030,-58.4438320),('QA','Qatar','QAT',25.3548260,51.1838840),('RE','Réunion','REU',-21.1151410,55.5363840),('RO','Romania','ROU',45.9431610,24.9667600),('RS','Serbia','SRB',44.0165210,21.0058590),('RU','Russia','RUS',61.5240100,105.3187560),('RW','Rwanda','RWA',-1.9402780,29.8738880),('SA','Saudi Arabia','SAU',23.8859420,45.0791620),('SB','Solomon Islands','SLB',-9.6457100,160.1561940),('SC','Seychelles','SYC',-4.6795740,55.4919770),('SD','Sudan','SDN',12.8628070,30.2176360),('SE','Sweden','SWE',60.1281610,18.6435010),('SG','Singapore','SGP',1.3520830,103.8198360),('SH','Saint Helena','SHN',-24.1434740,-10.0306960),('SI','Slovenia','SVN',46.1512410,14.9954630),('SJ','Svalbard and Jan Mayen','SJM',77.5536040,23.6702720),('SK','Slovakia','SVK',48.6690260,19.6990240),('SL','Sierra Leone','SLE',8.4605550,-11.7798890),('SM','San Marino','SMR',43.9423600,12.4577770),('SN','Senegal','SEN',14.4974010,-14.4523620),('SO','Somalia','SOM',5.1521490,46.1996160),('SR','Suriname','SUR',3.9193050,-56.0277830),('ST','São Tomé and Príncipe','STP',0.1863600,6.6130810),('SV','El Salvador','SLV',13.7941850,-88.8965300),('SY','Syria','SYR',34.8020750,38.9968150),('SZ','Swaziland','SWZ',-26.5225030,31.4658660),('TC','Turks and Caicos Islands','TCA',21.6940250,-71.7979280),('TD','Chad','TCD',15.4541660,18.7322070),('TF','French Southern Territories','ATF',-49.2803660,69.3485570),('TG','Togo','TGO',8.6195430,0.8247820),('TH','Thailand','THA',15.8700320,100.9925410),('TJ','Tajikistan','TJK',38.8610340,71.2760930),('TK','Tokelau','TKL',-8.9673630,-171.8558810),('TL','East Timor','TLS',-8.8742170,125.7275390),('TM','Turkmenistan','TKM',38.9697190,59.5562780),('TN','Tunisia','TUN',33.8869170,9.5374990),('TO','Tonga','TON',-21.1789860,-175.1982420),('TR','Turkey','TUR',38.9637450,35.2433220),('TT','Trinidad and Tobago','TTO',10.6918030,-61.2225030),('TV','Tuvalu','TUV',-7.1095350,177.6493300),('TW','Taiwan','TWN',23.6978100,120.9605150),('TZ','Tanzania','TZA',-6.3690280,34.8888220),('UA','Ukraine','UKR',48.3794330,31.1655800),('UG','Uganda','UGA',1.3733330,32.2902750),('US','United States','USA',37.0902400,-95.7128910),('UY','Uruguay','URY',-32.5227790,-55.7658350),('UZ','Uzbekistan','UZB',41.3774910,64.5852620),('VA','Vatican City','VAT',41.9029160,12.4533890),('VC','Saint Vincent and the Grenadines','VCT',12.9843050,-61.2872280),('VE','Venezuela','VEN',6.4237500,-66.5897300),('VG','British Virgin Islands','VGB',18.4206950,-64.6399680),('VI','U.S. Virgin Islands','VIR',18.3357650,-64.8963350),('VN','Vietnam','VNM',14.0583240,108.2771990),('VU','Vanuatu','VUT',-15.3767060,166.9591580),('WF','Wallis and Futuna','WLF',-13.7687520,-177.1560970),('WS','Samoa','WSM',-13.7590290,-172.1046290),('XK','Kosovo','XKX',42.6026360,20.9029770),('YE','Yemen','YEM',15.5527270,48.5163880),('YT','Mayotte','MYT',-12.8275000,45.1662440),('ZA','South Africa','ZAF',-30.5594820,22.9375060),('ZM','Zambia','ZMB',-13.1338970,27.8493320),('ZW','Zimbabwe','ZWE',-19.0154380,29.1548570);
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images`
--

DROP TABLE IF EXISTS `images`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `images` (
  `id` int NOT NULL AUTO_INCREMENT,
  `mail_id` int DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `mail_id` (`mail_id`),
  CONSTRAINT `images_ibfk_1` FOREIGN KEY (`mail_id`) REFERENCES `mails` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images`
--

LOCK TABLES `images` WRITE;
/*!40000 ALTER TABLE `images` DISABLE KEYS */;
/*!40000 ALTER TABLE `images` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `languages`
--

DROP TABLE IF EXISTS `languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `languages` (
  `code` varchar(10) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `languages`
--

LOCK TABLES `languages` WRITE;
/*!40000 ALTER TABLE `languages` DISABLE KEYS */;
INSERT INTO `languages` VALUES ('af','Afrikaans'),('ak','Twi (Akan)'),('am','Amharic'),('ar','Arabic'),('as','Assamese'),('ay','Aymara'),('az','Azerbaijani'),('be','Belarusian'),('bg','Bulgarian'),('bho','Bhojpuri'),('bm','Bambara'),('bn','Bengali'),('bs','Bosnian'),('ca','Catalan'),('ceb','Cebuano'),('ckb','Kurdish (Sorani)'),('co','Corsican'),('cs','Czech'),('cy','Welsh'),('da','Danish'),('de','German'),('doi','Dogri'),('dv','Dhivehi'),('ee','Ewe'),('el','Greek'),('en','English'),('eo','Esperanto'),('es','Spanish'),('et','Estonian'),('eu','Basque'),('fa','Persian'),('fi','Finnish'),('fil','Filipino (Tagalog)'),('fr','French'),('fy','Frisian'),('ga','Irish'),('gd','Scots Gaelic'),('gl','Galician'),('gn','Guarani'),('gom','Konkani'),('gu','Gujarati'),('ha','Hausa'),('haw','Hawaiian'),('he','Hebrew'),('hi','Hindi'),('hmn','Hmong'),('hr','Croatian'),('ht','Haitian Creole'),('hu','Hungarian'),('hy','Armenian'),('id','Indonesian'),('ig','Igbo'),('ilo','Ilocano'),('is','Icelandic'),('it','Italian'),('ja','Japanese'),('jv','Javanese'),('ka','Georgian'),('kk','Kazakh'),('km','Khmer'),('kn','Kannada'),('ko','Korean'),('kri','Krio'),('ku','Kurdish'),('ky','Kyrgyz'),('la','Latin'),('lb','Luxembourgish'),('lg','Luganda'),('ln','Lingala'),('lo','Lao'),('lt','Lithuanian'),('lus','Mizo'),('lv','Latvian'),('mai','Maithili'),('mg','Malagasy'),('mi','Maori'),('mk','Macedonian'),('ml','Malayalam'),('mn','Mongolian'),('mni-Mtei','Meiteilon (Manipuri)'),('mr','Marathi'),('ms','Malay'),('mt','Maltese'),('my','Myanmar (Burmese)'),('ne','Nepali'),('nl','Dutch'),('no','Norwegian'),('nso','Sepedi'),('ny','Nyanja (Chichewa)'),('om','Oromo'),('or','Odia (Oriya)'),('pa','Punjabi'),('pl','Polish'),('ps','Pashto'),('pt','Portuguese (Portugal, Brazil)'),('qu','Quechua'),('ro','Romanian'),('ru','Russian'),('rw','Kinyarwanda'),('sa','Sanskrit'),('sd','Sindhi'),('si','Sinhala (Sinhalese)'),('sk','Slovak'),('sl','Slovenian'),('sm','Samoan'),('sn','Shona'),('so','Somali'),('sq','Albanian'),('sr','Serbian'),('st','Sesotho'),('su','Sundanese'),('sv','Swedish'),('sw','Swahili'),('ta','Tamil'),('te','Telugu'),('tg','Tajik'),('th','Thai'),('ti','Tigrinya'),('tk','Turkmen'),('tl','Tagalog (Filipino)'),('tr','Turkish'),('ts','Tsonga'),('tt','Tatar'),('ug','Uyghur'),('uk','Ukrainian'),('ur','Urdu'),('uz','Uzbek'),('vi','Vietnamese'),('xh','Xhosa'),('yi','Yiddish'),('yo','Yoruba'),('zh-CN','Chinese (Simplified)'),('zh-TW','Chinese (Traditional)'),('zu','Zulu');
/*!40000 ALTER TABLE `languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `mails`
--

DROP TABLE IF EXISTS `mails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `mails` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sender_id` int DEFAULT NULL,
  `receiver_id` int DEFAULT NULL,
  `content` text,
  `status` enum('arrived','sending','draft') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT 'draft',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `sent_at` timestamp NULL DEFAULT NULL,
  `arrived_at` timestamp NULL DEFAULT NULL,
  `subject` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `sender_id` (`sender_id`),
  KEY `receiver_id` (`receiver_id`),
  CONSTRAINT `mails_ibfk_1` FOREIGN KEY (`sender_id`) REFERENCES `users` (`id`),
  CONSTRAINT `mails_ibfk_2` FOREIGN KEY (`receiver_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=381 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `mails`
--

LOCK TABLES `mails` WRITE;
/*!40000 ALTER TABLE `mails` DISABLE KEYS */;
INSERT INTO `mails` VALUES (1,3,18,'最近，我感到壓力非常大，這影響了我的學習和日常生活。\n\n我發現當我站在學校的頂樓時，那裡的風特別大，似乎能帶走我心中的一部分重擔。站在那裡，我會深深地呼吸，試圖讓自己平靜下來。但是，即使是這樣的短暫逃避，也不能徹底解決我的壓力問題。\n  \n我認為我的壓力來源於學業負擔和對未來的不確定感。我努力學習，但有時候感覺無法跟上。我擔心自己的表現不足以滿足期望，這讓我感到焦慮和沮喪。\n\n我希望能和您談談，或許您能提供一些指導或建議來幫助我應對這些壓力。我非常尊重您的意見，並且相信您的經驗和知識可以幫助我找到解決問題的方法。\n','sending','2023-12-02 18:48:00','2023-12-08 05:05:17','2023-12-08 05:05:17','頂樓風好大2','2023-12-08 05:05:17'),(2,3,18,'首先，我想對您表示最深的歉意。在提交我的稿件後，我反思了我的工作，並意識到它遠未達到我應該達到的標準，也沒有達到您作為我的導師所期望的水平。\n\n在撰寫過程中，我面臨了一些挑戰，包括[具體問題，如時間管理不當、對主題的理解不足等]。然而，這並不能成為我未能提交高質量工作的藉口。我明白，作為一名學生，我應該對我的學習負全責，並且在遇到困難時應該主動尋求幫助。\n\n我承認我的稿件不足，並且我理解這可能給您帶來了額外的工作負擔，為此我感到非常抱歉。我重視您對我的學術成長的影響，並深刻意識到我需要在自我管理和學術寫作方面做出改進。\n\n為了糾正這一情況，我計劃[具體的改進計劃，例如，更多地研究主題、提高時間管理技能、尋求寫作指導等]。我希望能有機會與您討論如何改善我的工作，並且如果可能的話，我會非常感激能夠重新提交經過修訂的稿件。\n\n再次對於我未能達到預期標準表示歉意，並感謝您對我的耐心和指導。','sending','2023-12-02 18:52:09','2023-12-08 05:47:29','2023-12-09 05:47:29','Paper Manuscript','2023-12-08 05:47:29'),(3,3,17,'<p>aa親愛的日本朋友，最近我常常回想起我們一起度過的時光。我學習日語的過程中經常想起您給我的建議，非常感激。希望有機會再次訪問日本，並且再次見到您。</p>','sending','2023-12-03 03:11:20','2023-12-08 07:02:24','2023-12-09 04:40:44','懷念過去的時光','2023-12-08 07:02:24'),(4,3,17,'您好，我最近在研究日本文化，特別是傳統節慶和習俗方面的知識。我對這個主題非常感興趣，希望您能分享一些您親身經歷的故事和見解。','sending','2023-12-03 03:11:33','2023-12-08 05:02:30','2023-12-09 02:40:50','日本文化研究','2023-12-08 05:02:29'),(5,3,17,'<p>Hi~</p><p>我正在計劃我的下一次日本之旅，非常期待再次體驗日本的美妙風景和文化。如果您有任何推薦的地方，請務必告訴我。</p>','sending','2023-12-03 03:11:42','2023-12-07 20:43:40','2023-12-08 18:21:59','日本之旅1','2023-12-07 20:43:39'),(6,3,19,'<p>a親wfjkjjjjsdfsadfdsf愛的高中同學，好久不見了。我最近在回憶我們高中時代的點點滴滴，感到非常懷念。希望有機會能和你一起重溫舊地，共度美好時光。</p>','sending','2023-12-03 03:11:51','2023-12-08 05:48:58','2023-12-09 05:48:58','懷念高中時光','2023-12-08 05:48:58'),(7,3,19,'<p>sdddaflsdvvaf k我在準備一個高中時代的聚會計劃，希望能邀請您和其他同學參加。我們可以分享各自的近況，重溫舊夢。</p>','sending','2023-12-03 03:11:58','2023-12-08 06:11:06','2023-12-09 06:11:06','高中同學會','2023-12-08 06:11:06'),(8,3,19,'<p>最aaad近我在整理舊照片，發現了我們高中時代的一些珍貴瞬間。這些回憶讓我感到無比的溫馨和感激。希望你近況ff良好。</p>','sending','2023-12-03 03:12:09','2023-12-08 06:12:26','2023-12-08 06:12:26','舊照片','2023-12-08 06:12:25'),(9,3,19,'<blockquote>hk4jklsdasjfkl;asdjfl;kasjfkla;shk4jklsdasjfkl;asdjfl;kasjfkla;shk4jklsdasjfkl;asdjfl;kasjfkla;shk4jklsdasjfkl;asdjfl;kasjfkla;<strong>shk4jklsdasjfkl;asdjfl;kasjfkla;shk4jklsdasjfkl;asdjfl;kasjfkla;shk4jklsdasjfkl;asdjfl;kasjfkla;shk4jklsdasjfkl;as</strong>djfl;kasjfkla;shk4jklsdasjfkl;asdjfl;kasjfkla;shk4jklsdasjfkl;asdjfl;kasjfkla;shk4jklsdasjfkl;asdjfl;kasjfkla;shk4jklsdasjfkl;asdjfl;kasjfkla;shk4jklsdasjfkl;asdjfl;kasjfkla;s</blockquote><blockquote>skdajfkasdjfaskdfjdas;lkf</blockquote><p><span style=\"color: rgb(230, 0, 0);\">asds</span>adsdfa</p><h1><span style=\"color: rgb(230, 0, 0);\">asdfasf</span></h1><p>jkjk</p>','sending','2023-12-07 14:44:46','2023-12-08 05:49:56','2023-12-08 05:49:56',' 測試','2023-12-08 05:49:56'),(10,3,19,'<p>hjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p><p><br></p><p>hjkhjhjsdfs</p><p>hjkhjhjsdfshjkhjhjsdfshjkhjhjsdfs</p>','sending','2023-12-07 16:09:27','2023-12-08 05:32:41','2023-12-08 05:32:41','預dskfs','2023-12-08 05:32:41'),(11,3,18,'<p>7238472839471892374</p>','sending','2023-12-07 16:12:48','2023-12-08 23:16:58','2023-12-09 23:16:58','預設標題sadfs','2023-12-08 23:16:58'),(12,3,18,'<p>iiiiiii,m,maasssqqqqq;kldsfkl;</p><p>d</p><p><br></p><p><br></p><p>asddasfasdf</p>','draft','2023-12-07 16:14:39',NULL,NULL,'a標題sadfadsf','2023-12-10 00:54:12'),(13,3,17,'<p>fdsafsdafdfa</p>','sending','2023-12-07 16:15:51','2023-12-07 20:41:00','2023-12-08 18:19:20','asdftestasdf','2023-12-07 20:41:00'),(14,3,19,'<p>1341342asdjfkasf</p>','sending','2023-12-07 16:17:00','2023-12-08 05:31:47','2023-12-08 05:31:47','123sdafasf','2023-12-08 05:31:47'),(15,3,19,'<p><strong>iiii</strong><span class=\"ql-cursor\">﻿</span>kdsjfksdfsadkfjaskdfzzzzzfffjkkkjkjasdfasdfasdfdsfasdfasdf</p>','sending','2023-12-07 16:17:04','2023-12-07 20:37:41','2023-12-07 20:37:41','123sdafasf','2023-12-07 20:37:41'),(23,17,3,'<p>kjsdfklasdjf;klasjdf</p>','sending','2023-12-07 21:49:14','2023-12-07 21:53:23','2023-12-08 19:31:43','季fdsss','2023-12-07 21:53:23'),(24,3,17,'<blockquote>測試<strong>134<span class=\"ql-cursor\">﻿</span></strong></blockquote>','sending','2023-12-08 04:50:02','2023-12-08 07:00:09',NULL,'預設','2023-12-08 07:00:09'),(25,3,17,'<h1>555adfakdfjakslfjaskjfsafdfasdf</h1>','sending','2023-12-08 04:51:12','2023-12-08 06:58:55',NULL,'預設sjdfajsdfk','2023-12-08 06:58:54'),(26,3,17,'<p>sdfsdaf</p>','sending','2023-12-08 04:52:09','2023-12-08 06:18:20','2023-12-09 03:56:40','預d設標題','2023-12-08 06:18:20'),(27,19,3,'<p>test1</p>','sending','2023-12-08 04:55:32','2023-12-08 05:00:26','2023-12-08 05:00:26','test1','2023-12-08 05:00:26'),(28,3,19,'<p>sdfasfdasdfafndskj njsdjsadjfhjsadhfjafjf j jahsjjashdjkfjfh</p>','sending','2023-12-08 05:28:23','2023-12-08 05:28:50','2023-12-08 05:28:50','預kkk','2023-12-08 05:28:50'),(29,3,19,'<p><strong>jdfakjfkdasjfajsdfdsajfkdjsklfjaksdlfjklasdf</strong></p><p>afjljdlkajflkjsdklfja</p>','sending','2023-12-08 06:02:26','2023-12-08 06:02:48','2023-12-08 06:02:48','預設標題dsajfkas','2023-12-08 06:02:47'),(45,3,17,'<p>jkjkjk</p>','sending','2023-12-08 23:21:55','2023-12-08 23:22:10','2023-12-09 23:22:10','ttset','2023-12-08 23:22:09'),(46,3,17,'<p>hjhjhjkhjkhjk</p>','sending','2023-12-08 23:25:19','2023-12-08 23:25:40','2023-12-09 21:04:00','ttset1','2023-12-08 23:25:40'),(47,3,17,'<p>99999fdgdfgsdfg</p>','sending','2023-12-08 23:27:12','2023-12-10 00:01:59','2023-12-11 00:01:59','ttsetjhjh','2023-12-10 00:01:58'),(48,3,17,'<p>asdfasdfasdfasdfasdfa</p>','sending','2023-12-09 00:10:08','2023-12-10 02:57:07','2023-12-11 00:35:27','標題dd','2023-12-10 02:57:07'),(49,3,19,'','draft','2023-12-09 00:20:21',NULL,NULL,'標題,m,m,','2023-12-09 00:20:21'),(84,3,19,'<p>asdfasfsaf</p>','sending','2023-12-09 08:48:08','2023-12-09 08:48:33','2023-12-10 08:48:33','標題asdas','2023-12-09 08:48:33'),(85,3,19,'<p>asdzzzzzzzzz</p>','sending','2023-12-09 08:49:32','2023-12-09 08:49:57','2023-12-10 08:49:57','標題asdfasd','2023-12-09 08:49:56'),(210,3,17,'<p>dffdf</p>','sending','2023-12-10 03:22:00','2023-12-10 07:26:08','2023-12-11 05:04:28','qqq標題','2023-12-10 07:26:08'),(215,19,3,'<p>asdfsdafasdfsdaf</p>','sending','2023-12-10 08:58:21','2023-12-10 08:58:21','2023-12-10 08:59:19','標題fdjgk;sdjfg','2023-12-10 08:58:21'),(216,3,19,'<p>sdfkjfklsdjfklsadjfkl;sdajfkl;sadfsdsafsdafdasfasdfdsfsdafsdfsdfsadfdsafsdafdsafsdf</p>','sending','2023-12-10 09:07:46','2023-12-10 09:07:46','2023-12-10 09:08:44','測試飛機','2023-12-10 09:07:46'),(217,19,3,'<p>我要看飛機</p>','sending','2023-12-10 10:05:34','2023-12-10 10:05:34','2023-12-10 10:06:31','我要看飛機','2023-12-10 10:05:34'),(218,3,19,'<p>asjdfkjsadklfjlksadfsaf</p>','sending','2023-12-11 08:31:24','2023-12-11 08:31:27','2023-12-11 08:32:24','標題sdjfdlksafd','2023-12-11 08:31:27'),(219,17,3,'<p>今天日本真的好熱</p><p>雖然我根本就不在日本</p><p>哈哈</p><p>片你的</p>','sending','2023-12-11 11:00:25','2023-12-11 11:01:12','2023-12-12 08:39:32','今天好熱','2023-12-11 11:01:12'),(220,3,19,'<p>kdjafkdjakfjsadfjasfasdfadfadfs</p>','draft','2023-12-11 15:04:21',NULL,NULL,'測試','2023-12-14 11:09:57'),(298,18,3,'','draft','2023-12-14 04:05:48',NULL,NULL,'標題','2023-12-14 04:05:48'),(299,18,3,'','draft','2023-12-14 04:05:53',NULL,NULL,'標題','2023-12-14 04:05:53'),(300,18,3,'','draft','2023-12-14 04:06:52',NULL,NULL,'標題','2023-12-14 04:06:52'),(301,18,3,'','draft','2023-12-14 04:07:22',NULL,NULL,'標題','2023-12-14 04:07:22'),(302,18,36,'','draft','2023-12-14 08:55:50',NULL,NULL,'你們已成為好友，開始寄信吧！','2023-12-14 08:55:50'),(303,18,40,'','draft','2023-12-14 08:59:35',NULL,NULL,'你們已成為好友，開始寄信吧！','2023-12-14 08:59:35'),(304,18,45,'<h2>What\'s the most impactful act of kindness you\'ve experienced?</h2><br>erre','','2023-12-14 09:30:06',NULL,NULL,'Daily Topic','2023-12-14 09:30:06'),(305,18,41,'<h2>What rule do you wish they would introduce into your favorite sport?</h2><br>sadfdsafasfsaf','','2023-12-14 09:34:05',NULL,NULL,'Daily Topic','2023-12-14 09:34:05'),(306,18,43,'<h2>What rule do you wish they would introduce into your favorite sport?</h2><p><br></p><p>sadfdsafasfsafdddddddddqqq</p>','draft','2023-12-14 09:34:13',NULL,NULL,'Daily Topic','2023-12-14 09:42:55'),(307,18,43,'<p>asfsaasdfjaadfaafsfsadfasdf]]</p><p><br></p><p><br></p><p>ddd</p>','draft','2023-12-14 10:01:50',NULL,NULL,'標題jjsjfjsa777','2023-12-14 10:55:43'),(308,18,43,'<h2>What\'s the most impactful act of kindness you\'ve experienced?</h2><p><br></p><p>erre</p>','sending','2023-12-14 10:09:53','2023-12-14 10:50:25','2023-12-18 07:46:17','Daily Topic','2023-12-14 10:50:25'),(309,18,45,'','draft','2023-12-14 11:06:56',NULL,NULL,'標題','2023-12-14 11:06:56'),(310,18,45,'<p>asdfafjaksfjaksdjf;asjdfldksajflksajfkljffffffjjjffffff</p>','draft','2023-12-14 11:06:57',NULL,NULL,'標題jjsjfjsa777','2023-12-14 11:08:29'),(311,3,17,'<p>fasfasfsafafsafsadfxcfdsafas</p>','draft','2023-12-14 11:15:26',NULL,NULL,'標題asfsdfa','2023-12-14 11:15:50'),(312,3,17,'<p>sfafjdajsfsfasfasfaf</p>','draft','2023-12-14 11:16:01',NULL,NULL,'標題afasfsaf','2023-12-14 11:16:56'),(313,3,17,'<p>hhhhhhhhhhhhhhhjksdjfdksafnnnnn</p>','draft','2023-12-14 11:17:52',NULL,NULL,'標題3sqqq','2023-12-14 11:19:00'),(355,3,109,'<h2>What\'s the most difficult decision you\'ve ever had to make?</h2><br>afdsafasfsadfasfasfda','draft','2023-12-14 12:47:16',NULL,NULL,'Daily Topic','2023-12-14 12:47:16'),(356,3,109,'<p><strong>safjsadfasfasfasfsdaf</strong></p><p><br></p><p><br></p><p><strong>asdf33</strong></p>','draft','2023-12-14 12:47:19',NULL,NULL,'你們已成為好友，開始寄信吧！','2023-12-14 12:47:52'),(357,3,109,'<p>sdafsdafsadfasf</p>','draft','2023-12-14 12:47:55',NULL,NULL,'標題asdfsfasf','2023-12-14 12:48:03'),(358,3,19,'<p>sfjsadflkjsadkfljasfasfasfas</p>','draft','2023-12-14 12:49:27',NULL,NULL,'標題dfjklsajfasf','2023-12-14 12:49:37'),(359,3,19,'<p>sdafjhsafhalsfasfasfasfasfa</p>','draft','2023-12-14 12:50:13',NULL,NULL,'標題sjafsdfasf','2023-12-14 12:50:23'),(360,3,19,'<p>sdafjasdfsadlfjaskfasfasfasf</p>','sending','2023-12-14 12:50:48','2023-12-14 12:51:20','2023-12-14 12:52:18','標題jfafsksdfasfdsa22','2023-12-14 12:51:20'),(361,3,19,'<p>djddjjdjdjd</p>','draft','2023-12-14 12:51:34',NULL,NULL,'標題sadsaadfs','2023-12-14 12:51:42'),(362,19,3,'<p>asdfasdfasfasfa</p>','sending','2023-12-14 13:33:12','2023-12-14 13:33:29','2023-12-14 13:34:27','標題dfkjasdkl;asfsa','2023-12-14 13:33:29'),(363,3,46,'<p>asdjklfjasdklfasdfasdfasdf</p>','sending','2023-12-14 13:37:10','2023-12-14 13:37:47','2023-12-22 08:52:37','你們已成為好友，開始寄信吧！','2023-12-14 13:37:46'),(364,3,96,'<h2>What’s the noblest endeavor a person can dedicate their life to?</h2><br>hfkashsdkjfasdfasfs','draft','2023-12-14 13:37:18',NULL,NULL,'Daily Topic','2023-12-14 13:37:18'),(365,3,19,'<p>dasfasdfasdfasd</p>','sending','2023-12-14 13:38:02','2023-12-14 13:38:21','2023-12-14 13:39:19','標題sdfjkdfas','2023-12-14 13:38:21'),(366,3,35,'<p>jkljkljkljkljjl</p>','draft','2023-12-15 04:12:27',NULL,NULL,'你們已成為好友，開始寄信吧！','2023-12-15 04:13:19'),(367,3,35,'<h2>How do you think individual actions impact global challenges?</h2><p>m,m,m,.m,.m</p><p>jkdjskl;aasf</p>','draft','2023-12-15 04:12:36',NULL,NULL,'Daily Topic','2023-12-15 04:13:05'),(368,3,19,'<p>asdfafsafdasf</p>','sending','2023-12-15 04:13:25','2023-12-15 04:13:36','2023-12-15 04:14:33','標題sfadasdf','2023-12-15 04:13:35'),(373,3,98,'','draft','2023-12-15 05:54:08',NULL,NULL,'你們已成為好友，開始寄信吧！','2023-12-15 05:54:08'),(374,3,22,'<h2>What kind of challenges are you facing these days?</h2><p><br></p><p>sdffasdasfasdfalfsajfkljfdsfa</p>','draft','2023-12-15 05:54:11',NULL,NULL,'Daily Topic','2023-12-15 05:54:24'),(375,3,19,'<p>sadfasdfdasf</p>','sending','2023-12-15 05:54:28','2023-12-15 05:54:48','2023-12-15 05:55:45','標題dasfasdfsadf','2023-12-15 05:54:48'),(376,3,19,'<p>hhhhhhhh</p>','sending','2023-12-15 05:55:49','2023-12-15 05:56:00','2023-12-15 05:56:57','標題hhhhhh','2023-12-15 05:56:00'),(377,3,98,'<p>jhjhjkhj</p>','draft','2023-12-15 07:13:52',NULL,NULL,'你們已成為好友，開始寄信吧！','2023-12-15 07:14:16'),(378,3,17,'<h2>What\'s the biggest misconception people have about you?</h2><br>hhjhjhjhjhjh','draft','2023-12-15 07:13:59',NULL,NULL,'Daily Topic','2023-12-15 07:13:59'),(379,3,19,'<p>jhjhjkhjhjkh</p>','sending','2023-12-15 07:14:20','2023-12-15 07:14:32','2023-12-15 07:15:29','標題hhhjkhjkh','2023-12-15 07:14:31'),(380,3,109,'<p>asdfasdfasdfasf</p>','sending','2023-12-15 07:31:24','2023-12-15 07:32:22','2023-12-19 02:23:01','標題adjkfasjfl','2023-12-15 07:32:22');
/*!40000 ALTER TABLE `mails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `id` int NOT NULL AUTO_INCREMENT,
  `user_id` int DEFAULT NULL,
  `type` varchar(50) DEFAULT NULL,
  `content` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_languages`
--

DROP TABLE IF EXISTS `user_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_languages` (
  `user_id` int NOT NULL,
  `language_code` varchar(10) NOT NULL,
  `proficiency_level` enum('beginner','elementary','intermediate','proficient','native') DEFAULT NULL,
  PRIMARY KEY (`user_id`,`language_code`),
  KEY `language_code` (`language_code`),
  CONSTRAINT `user_languages_ibfk_1` FOREIGN KEY (`language_code`) REFERENCES `languages` (`code`),
  CONSTRAINT `user_languages_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_languages`
--

LOCK TABLES `user_languages` WRITE;
/*!40000 ALTER TABLE `user_languages` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_preferred_age_range`
--

DROP TABLE IF EXISTS `user_preferred_age_range`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_preferred_age_range` (
  `user_id` int NOT NULL,
  `age_range_start` int DEFAULT NULL,
  `age_range_end` int DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_preferred_age_range`
--

LOCK TABLES `user_preferred_age_range` WRITE;
/*!40000 ALTER TABLE `user_preferred_age_range` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_preferred_age_range` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_preferred_countries`
--

DROP TABLE IF EXISTS `user_preferred_countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_preferred_countries` (
  `user_id` int NOT NULL,
  `country_code` char(2) NOT NULL,
  PRIMARY KEY (`user_id`,`country_code`),
  KEY `country_code` (`country_code`),
  CONSTRAINT `user_preferred_countries_ibfk_1` FOREIGN KEY (`country_code`) REFERENCES `countries` (`code`),
  CONSTRAINT `user_preferred_countries_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_preferred_countries`
--

LOCK TABLES `user_preferred_countries` WRITE;
/*!40000 ALTER TABLE `user_preferred_countries` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_preferred_countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_preferred_languages`
--

DROP TABLE IF EXISTS `user_preferred_languages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_preferred_languages` (
  `user_id` int NOT NULL,
  `language_code` varchar(10) NOT NULL,
  PRIMARY KEY (`user_id`,`language_code`),
  KEY `language_code` (`language_code`),
  CONSTRAINT `user_preferred_languages_ibfk_1` FOREIGN KEY (`language_code`) REFERENCES `languages` (`code`),
  CONSTRAINT `user_preferred_languages_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_preferred_languages`
--

LOCK TABLES `user_preferred_languages` WRITE;
/*!40000 ALTER TABLE `user_preferred_languages` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_preferred_languages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `age` int DEFAULT NULL,
  `country_code` char(2) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `gender` enum('male','female','others') CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `profile_content` text,
  `password` varchar(80) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `provider` varchar(50) DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `card_content` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `country_code` (`country_code`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`country_code`) REFERENCES `countries` (`code`)
) ENGINE=InnoDB AUTO_INCREMENT=115 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (3,'lytt925','ytli.tw@gmail.com','2023-11-30 11:39:26',23,'TW','male','Outdoor enthusiast and wildlife photographer with a deep commitment to nature conservation','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-11 12:25:57','Hello! I\'m an avid outdoor enthusiast and wildlife photographer. My passion lies in capturing the untamed beauty of nature through my lens. I\'ve trekked through various national parks and have a special love for the majestic landscapes of the Rockies. Photography for me is not just a hobby, it\'s a way to preserve fleeting moments of natural wonder. I\'m also deeply involved in conservation efforts, advocating for the protection of wildlife and natural habitats. Join me in celebrating the beauty of the wild!'),(17,'hyw','hyw@gmail.com','2023-12-02 17:25:12',23,'JP','male','Creative web developer blending technology and art, with a passion for teaching coding.','$2b$10$CHfoq7N78DTgFDDidnrWoeTMYlsSEGhl3zzcBtvR7Nz6u3mvx.xRO','native','2023-12-14 01:20:17','Greetings! I\'m a professional web developer with a knack for creating sleek and user-friendly websites. My journey in the tech world started over a decade ago, and since then, I\'ve honed my skills in various programming languages and design principles. I\'m particularly interested in the intersection of technology and art, striving to blend aesthetics with functionality. In my free time, I mentor aspiring coders, sharing my knowledge and experiences. Let\'s connect and explore the limitless possibilities of the digital world together!'),(18,'tren','tren@gmail.com','2023-12-02 17:27:06',45,'TW','male','A full-stack professor using grad-student ascent to improve others\' recognition of psychoinformatics','$2b$10$6Pjd0TbIZNA3yRCkrQugFea/iGJ4xfiYep8CZFHF2V4u6jDBuelCe','native','2023-12-14 09:09:24','Hello! I am a professor specializing in psychoinformatics, an exciting field where psychology meets the power of big data and computational methods. My work focuses on understanding human behavior and mental processes through digital footprints and neuroinformatics. I explore how technology can enhance mental health diagnostics, therapy, and cognitive research. In my lectures, I emphasize the ethical implications of data use and the potential of AI in psychological research. I\'m passionate about bridging the gap between traditional psychology and cutting-edge technology, and I actively collaborate with multidisciplinary teams to innovate in the field of mental health. Join me in exploring the fascinating intersection of the human mind and technology!'),(19,'JeterH','bo.chiao@gmail.com','2023-12-02 18:16:43',30,'TW','male','Amateur astronomer and dedicated physics teacher, fascinated by the mysteries of the cosmos.','$2b$10$RxZJ/pv5hJ3HuKPQHR6KxuaBWeMGN8YwlmDMWELELuJ6tE21SqGuy','native','2023-12-11 15:05:07','I\'m an enthusiastic amateur astronomer and a physics teacher. My fascination with the cosmos fuels my nightly stargazing and my eagerness to share the wonders of the universe with my students. I specialize in making complex astronomical concepts accessible and exciting. Whether it\'s discussing the latest space mission or unraveling the mysteries of black holes, I\'m always eager to learn and share. Join me for a journey through the stars and the marvels of physics!'),(20,'homerhds','homderhds@gmail.com','2023-12-02 18:17:43',22,'TW','male','Nutritionist and fitness coach dedicated to promoting healthy living through diet and exercise.','$2b$10$gVaDj3OfhgON1MAxQbU7peUPyHACznU.Jy12zNnQ9tWTZkSFtGS6u','native','2023-12-11 12:27:21','Hello! As a professional nutritionist and fitness coach, my mission is to promote healthy living through balanced diets and regular exercise. I believe in the power of food as medicine and enjoy creating nutritious meal plans tailored to individual needs. My fitness routines are designed to be both effective and enjoyable. I\'m committed to helping people achieve their health goals and enjoy a better quality of life. Join me on this journey to wellness and discover the joy of healthy living!'),(22,'mayyam','mayyam@gmail.com','2023-12-02 18:27:17',22,'TW','female','Cultural anthropologist exploring global human societies and their rich, diverse traditions.','$2b$10$.o9EzLb9nmRA5BpzF1jX0OqV16CN3RJs9QekvLrJ1Pu.43lWm0tyG','native','2023-12-11 12:27:22','As a cultural anthropologist, I explore the diverse tapestry of human societies around the world. My fieldwork has taken me from remote villages to bustling urban centers, where I study traditions, languages, and social dynamics. I\'m fascinated by the richness of cultural diversity and committed to its preservation and understanding. My writings and lectures aim to bridge cultural gaps and promote a deeper appreciation of our shared humanity. Join me in exploring the fascinating aspects of different cultures and the stories they tell.'),(23,'SkyTraveler','sky.traveler@example.com','2023-12-11 11:57:36',29,'US','female','Avid traveler and photography enthusiast. Love exploring new cultures.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:32','Hi! I\'m SkyTraveler, a 29-year-old travel fanatic from the US. Photography is my passion, and I love capturing the essence of every place I visit. My travels have taken me to over 30 countries, and I\'m always ready for the next adventure. I\'m here to share my travel stories and tips, and to connect with fellow wanderers. Let\'s explore the world together!'),(35,'TechWizard','tech.wizard@example.net','2023-12-11 12:10:55',35,'GB','male','Tech geek, love all things gadgets and coding. Big fan of open-source.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:32','Hello! I\'m TechWizard, a 35-year-old tech enthusiast from the UK. My world revolves around the latest gadgets, coding, and the magic of open-source. With over 15 years in software development, I\'ve seen the industry evolve and love to discuss tech trends, challenges, and innovations. Join me in exploring the fascinating world of technology!'),(36,'GreenThumb','green.thumb@example.org','2023-12-11 12:10:55',41,'CA','female','Passionate gardener and advocate for sustainable living.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:33','I\'m GreenThumb, a 41-year-old gardening guru from Canada. My garden is my sanctuary, and I believe in the power of plants to heal and inspire. I\'m deeply committed to sustainable living and environmental conservation. Through my posts, I hope to inspire others to embrace the green lifestyle and to share my knowledge on organic gardening, eco-friendly practices, and the joy of growing your own food.'),(37,'BookBard','book.bard@example.co','2023-12-11 12:10:55',26,'AU','male','A literature lover and aspiring author. Obsessed with classic novels.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:33','Greetings, I\'m BookBard, a 26-year-old literary enthusiast from Australia. My life is a blend of words and imagination, deeply influenced by classic and contemporary literature. As an aspiring author, I love dissecting themes, characters, and narratives. Join me in deep dives into literary masterpieces, discussions about hidden gems, and my journey in crafting my first novel.'),(38,'FitnessFreak','fitness.freak@example.io','2023-12-11 12:10:55',30,'IN','female','Fitness trainer and yoga instructor. Believer in holistic wellness.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:34','Hey there, I\'m FitnessFreak, a 30-year-old fitness trainer and yoga instructor from India. My approach to fitness is all about balance and holistic wellness. I specialize in creating personalized fitness plans that integrate physical training with mindfulness and nutrition. Join my community to get tips on staying fit, healthy recipes, and insights into a balanced lifestyle.'),(39,'CodeMaster','code.master@example.com','2023-12-11 12:13:57',32,'US','male','Full-stack developer and blockchain enthusiast.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:34','Hello, I\'m CodeMaster, a 32-year-old software developer from the US with a passion for full-stack development and blockchain technology. My career spans over a decade in tech, and I\'m constantly exploring new programming languages and frameworks. I enjoy sharing knowledge and discussing the future of decentralized technologies. Join me on this journey through the world of coding and blockchain!'),(40,'NatureNurturer','nature.nurturer@example.net','2023-12-11 12:13:57',38,'GB','female','Wildlife biologist and nature photographer.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:34','Hi there! I\'m NatureNurturer, a 38-year-old wildlife biologist and photographer from the UK. My life is dedicated to understanding and preserving the natural world. With my camera, I capture the beauty of wildlife and share stories about biodiversity conservation. Join me to explore the wonders of nature and learn about efforts to protect our planet’s precious wildlife.'),(41,'GourmetGuru','gourmet.guru@example.org','2023-12-11 12:13:57',45,'FR','female','Chef and food critic with a love for culinary arts.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:35','Bonjour! I\'m GourmetGuru, a 45-year-old professional chef and food critic from France. My passion lies in the art of cooking and the joy of tasting. With over 20 years in the culinary world, I have a wealth of recipes and reviews to share. From haute cuisine to street food, join me on a delicious journey through the world of gastronomy.'),(42,'SpaceSleuth','space.sleuth@example.co','2023-12-11 12:13:57',29,'RU','male','Astrophysicist and avid stargazer.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:35','Greetings! I am SpaceSleuth, a 29-year-old astrophysicist from Russia. My fascination with the cosmos drives my research and stargazing adventures. I am passionate about unraveling the mysteries of the universe and sharing my findings with fellow astronomy enthusiasts. Join me as we gaze at the stars and ponder the wonders of our incredible universe.'),(43,'MelodyMaestro','melody.maestro@example.io','2023-12-11 12:13:57',34,'DE','male','Classical musician and composer.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:36','Hallo! I\'m MelodyMaestro, a 34-year-old classical musician and composer from Germany. My life revolves around creating symphonies and exploring the depths of musical expression. I have performed in various orchestras and enjoy composing pieces that evoke emotion and tell stories. Join me in the celebration of classical music and the journey through its timeless beauty.'),(44,'ArtisticSoul','artistic.soul@example.com','2023-12-11 12:16:31',28,'IT','female','Painter and art historian.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:36','Ciao! I\'m ArtisticSoul, a 28-year-old painter and art historian from Italy. My passion lies in the beauty of classical and contemporary art. I love exploring art galleries, studying the history behind artworks, and creating my own paintings. Join me as we discover the stories behind famous masterpieces and celebrate the joy of creating art.'),(45,'DigitalNomad','digital.nomad@example.net','2023-12-11 12:16:31',33,'NZ','male','Freelance writer and world traveler.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:37','Hello! I\'m DigitalNomad, a 33-year-old freelance writer and adventurer from New Zealand. I combine my love for travel with a digital lifestyle, exploring the world while sharing stories and experiences. From bustling cities to remote landscapes, join me as we discover diverse cultures and the beauty of the globe.'),(46,'EcoWarrior','eco.warrior@example.org','2023-12-11 12:16:31',36,'BR','female','Environmental activist and blogger.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:37','Olá! I\'m EcoWarrior, a 36-year-old environmental activist and blogger from Brazil. My life is dedicated to advocating for the Earth and raising awareness about climate change. I believe in a sustainable future and love sharing tips on eco-friendly living. Join me in making a positive impact on our planet!'),(47,'HistoryBuff','history.buff@example.co','2023-12-11 12:16:31',40,'EG','male','Historian specializing in ancient civilizations.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:38','Hi, I\'m HistoryBuff, a 40-year-old historian from Egypt with a fascination for ancient civilizations. My expertise lies in uncovering the past and connecting it with our present. From the pyramids to the pharaohs, join me as we delve into the mysteries of ancient history and explore its relevance today.'),(48,'QuantumQuirk','quantum.quirk@example.io','2023-12-11 12:16:31',31,'JP','female','Quantum physicist and tech innovator.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:38','こんにちは (Konnichiwa)! I\'m QuantumQuirk, a 31-year-old quantum physicist and tech innovator from Japan. My work involves exploring the peculiarities of quantum mechanics and its applications in technology. I enjoy demystifying complex scientific concepts and discussing the future of tech innovation. Join me on this fascinating journey into the quantum realm!'),(49,'CulinaryCrafter','culinary.crafter@example.com','2023-12-11 12:16:31',27,'ES','female','Pastry chef and food blogger.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:38','¡Hola! I\'m CulinaryCrafter, a 27-year-old pastry chef and food blogger from Spain. My world is filled with the aroma of fresh pastries and creative baking. I love experimenting with new recipes and sharing delightful culinary creations. Join me as we indulge in the art of pastry and explore sweet treats from around the world.'),(50,'UrbanExplorer','urban.explorer@example.net','2023-12-11 12:16:31',39,'US','male','Architect and urban planning enthusiast.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:39','Hello, I\'m UrbanExplorer, a 39-year-old architect and urban planner from the USA. My passion lies in designing sustainable cities and exploring urban landscapes. From historical architecture to modern cityscapes, join me as we uncover the stories behind urban development and envision the future of our cities.'),(51,'MindfulMaven','mindful.maven@example.org','2023-12-11 12:16:31',42,'IN','female','Yoga instructor and mindfulness coach.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:39','Namaste! I\'m MindfulMaven, a 42-year-old yoga instructor and mindfulness coach from India. My approach to wellness combines yoga, meditation, and mindful living. I believe in the transformative power of mindfulness and enjoy guiding others on their journey to inner peace. Join me in exploring the path to holistic well-being.'),(52,'TechTinkerer','tech.tinkerer@example.co','2023-12-11 12:16:31',29,'KR','male','Robotics engineer and AI enthusiast.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:40','안녕하세요 (Annyeonghaseyo)! I\'m TechTinkerer, a 29-year-old robotics engineer and AI enthusiast from South Korea. My work involves designing intelligent machines and exploring the possibilities of artificial intelligence. I\'m passionate about the future of robotics and enjoy discussing the ethical implications of AI. Join me as we explore the exciting world of robotics and AI.'),(53,'SustainabilitySteward','sustainability.steward@example.io','2023-12-11 12:16:31',37,'SE','female','Environmental scientist and renewable energy advocate.','$2b$10$mWAsUTeHSzrBL2a0OSXxwuCttghcL3bAD5GyrIyxPj/7HRjVkmCre','native','2023-12-13 20:48:40','Hej! I\'m SustainabilitySteward, a 37-year-old environmental scientist and advocate for renewable energy from Sweden. My focus is on sustainable development and finding solutions to environmental challenges. I\'m dedicated to promoting green energy and sustainable practices. Join me as we work towards a more sustainable and greener future.'),(96,'ZephyrX9','zephyrx9@example.com','2023-12-14 12:44:06',28,'US','male','Extreme sports enthusiast and travel blogger.','password123','native','2023-12-14 12:44:06','Hello! I\'m ZephyrX9, a 28-year-old adrenaline junkie from the USA. My passion is for extreme sports and exploring new destinations. I share my thrilling adventures and travel experiences, from skydiving to mountain biking. Join me as I chase the wind and seek out the world’s most exciting adventures.'),(97,'LunaMystic','lunamystic@example.net','2023-12-14 12:44:06',34,'BR','female','Astrologer and spiritual guide.','password123','native','2023-12-14 12:44:06','Olá! I\'m LunaMystic, a 34-year-old astrologer from Brazil. I explore the mystical realms of astrology and spirituality. Through my readings and guidance, I aim to bring insight and harmony into the lives of others. Join me in uncovering the mysteries of the stars and the spiritual journey within.'),(98,'PixelPanda42','pixelpanda42@example.org','2023-12-14 12:44:06',22,'JP','female','Digital artist and anime fan.','password123','native','2023-12-14 12:44:06','こんにちは! I\'m PixelPanda42, a 22-year-old digital artist from Japan. My world is filled with vibrant colors and imaginative characters, heavily influenced by anime culture. I create digital art that captures whimsical stories and fantastical worlds. Join me in celebrating the beauty of digital creation and anime-inspired art.'),(99,'RetroRover','retrorover@example.co','2023-12-14 12:44:06',37,'GB','male','Vintage car collector and restorer.','password123','native','2023-12-14 12:44:06','Cheers! I\'m RetroRover, a 37-year-old vintage car enthusiast from the UK. My passion is restoring classic cars to their former glory. I share stories of my restoration projects, tips for car maintenance, and the joy of cruising in a piece of history. Join me in reviving the golden age of automobiles.'),(100,'AquaAzul','aquazul@example.io','2023-12-14 12:44:06',30,'ES','female','Marine biologist and ocean conservation advocate.','password123','native','2023-12-14 12:44:06','¡Hola! I\'m AquaAzul, a 30-year-old marine biologist from Spain. My life’s work is dedicated to studying marine ecosystems and advocating for ocean conservation. I share insights into marine life, the importance of preserving our oceans, and the beauty beneath the waves.'),(101,'FlameWielder','flamewielder@example.com','2023-12-14 12:44:06',25,'AU','male','Firefighter and emergency response volunteer.','password123','native','2023-12-14 12:44:06','G\'day! I\'m FlameWielder, a 25-year-old firefighter from Australia. I face the heat to protect and serve my community. My experiences as a firefighter and emergency responder are filled with challenges and rewards. Join me as I share stories from the front lines and tips on fire safety and preparedness.'),(102,'FrostByte67','frostbyte67@example.net','2023-12-14 12:44:06',29,'CA','female','Cybersecurity expert and ethical hacker.','password123','native','2023-12-14 12:44:06','Hi there, I\'m FrostByte67, a 29-year-old cybersecurity professional from Canada. I specialize in ethical hacking and protecting digital assets. I share insights into the world of cybersecurity, tips on digital safety, and my adventures in ethical hacking.'),(103,'EchoWanderer','echowanderer@example.org','2023-12-14 12:44:06',33,'ZA','male','Wildlife photographer and safari guide.','password123','native','2023-12-14 12:44:06','Molo! I\'m EchoWanderer, a 33-year-old wildlife photographer and safari guide from South Africa. My passion is capturing the untamed beauty of wildlife and sharing the wonders of nature. Join me as I take you on a visual safari through Africa’s majestic landscapes and its incredible fauna.'),(104,'QuantumQuill','quantumquill@example.co','2023-12-14 12:44:06',27,'IN','female','Physicist and science communicator.','password123','native','2023-12-14 12:44:06','Namaste! I\'m QuantumQuill, a 27-year-old physicist from India. My world revolves around unraveling the mysteries of quantum physics and making science accessible to all. I share fascinating insights into the world of physics, the latest scientific discoveries, and my journey as a woman in STEM.'),(105,'SkyScribe','skyscribe@example.com','2023-12-14 12:45:56',31,'NO','male','Travel writer and northern lights chaser.','password123','native','2023-12-14 12:45:56','Hei! I\'m SkyScribe, a 31-year-old travel writer from Norway. My passion is chasing the northern lights and sharing the beauty of the Arctic. Join me as I document my journeys to the far north, capturing the magic of the aurora borealis and the wonders of polar landscapes.'),(106,'RhythmRider','rhythm.rider@example.net','2023-12-14 12:45:56',29,'JM','female','Music producer and DJ specializing in reggae and dancehall.','password123','native','2023-12-14 12:45:56','Hey! I\'m RhythmRider, a 29-year-old music producer and DJ from Jamaica. My beats are all about reggae and dancehall vibes. I love to create and spin tracks that get people moving. Follow me for the latest in Caribbean music, behind-the-scenes of music production, and my DJing adventures.'),(107,'InkIllusionist','ink.illusionist@example.org','2023-12-14 12:45:56',35,'KR','male','Tattoo artist and body art enthusiast.','password123','native','2023-12-14 12:45:56','안녕하세요! I\'m InkIllusionist, a 35-year-old tattoo artist from South Korea. My art is about transforming skin into a canvas of beautiful, meaningful designs. Join me as I share my journey in the world of tattoos, tips on body art, and stories behind the ink.'),(108,'QuantumQuest','quantum.quest@example.co','2023-12-14 12:45:56',32,'DE','female','Research scientist in quantum computing.','password123','native','2023-12-14 12:45:56','Hallo! I\'m QuantumQuest, a 32-year-old research scientist from Germany. I\'m at the forefront of quantum computing, exploring the potentials of this revolutionary technology. Follow my quest as I delve into the complex world of quantum mechanics and its applications in modern computing.'),(109,'EcoWarriorX','eco.warriorx@example.io','2023-12-14 12:45:56',27,'NZ','male','Environmental activist and blogger.','password123','native','2023-12-14 12:45:56','Kia ora! I\'m EcoWarriorX, a 27-year-old environmental activist from New Zealand. I\'m dedicated to fighting climate change and promoting sustainable living. Join me as I share my journey in environmental advocacy, tips for eco-friendly living, and the latest in sustainability news.'),(110,'StarGazer22','stargazer22@example.com','2023-12-14 12:45:56',40,'US','female','Astronomer and educator.','password123','native','2023-12-14 12:45:56','Hi there, I\'m StarGazer22, a 40-year-old astronomer from the USA. My passion is exploring the cosmos and teaching others about the wonders of the universe. Follow my stargazing adventures and get insights into the latest astronomical discoveries and events.'),(111,'UrbanMythos','urban.mythos@example.net','2023-12-14 12:45:56',38,'GB','male','Writer and researcher in urban legends and folklore.','password123','native','2023-12-14 12:45:56','Hello! I\'m UrbanMythos, a 38-year-old writer and folklore enthusiast from the UK. I delve into urban legends and myths, uncovering the stories and histories behind them. Join me as I explore the mysteries and cultural tales of cities around the world.'),(112,'CircuitSage','circuit.sage@example.org','2023-12-14 12:45:56',34,'JP','female','Electronics engineer and tech blogger.','password123','native','2023-12-14 12:45:56','こんにちは! I\'m CircuitSage, a 34-year-old electronics engineer from Japan. My world revolves around creating innovative electronic solutions and sharing tech insights. Follow my blog for the latest in electronics engineering, DIY tech projects, and insights into the evolving world of technology.'),(113,'ZenGardener','zen.gardener@example.co','2023-12-14 12:45:56',45,'CN','male','Landscape artist and zen garden designer.','password123','native','2023-12-14 12:45:56','你好! I\'m ZenGardener, a 45-year-old landscape artist from China. My art is creating tranquil and harmonious zen gardens. Join me as I share the philosophy and beauty of zen gardening, tips on creating peaceful outdoor spaces, and the art of landscape design.'),(114,'aaaaa','aaaaaa@gmail.com','2023-12-14 13:36:52',343,'AQ','others','sadfasdfafsaf','$2b$10$dg0X1T52LWBbJhND5Rq9e.4GlmoIaGshwX3P8eKQ9ZuuDQCDV6Vrq','native','2023-12-14 13:36:52',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users_hobbies`
--

DROP TABLE IF EXISTS `users_hobbies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users_hobbies` (
  `user_id` int NOT NULL,
  `hobby_name` varchar(50) NOT NULL,
  PRIMARY KEY (`user_id`,`hobby_name`),
  CONSTRAINT `users_hobbies_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users_hobbies`
--

LOCK TABLES `users_hobbies` WRITE;
/*!40000 ALTER TABLE `users_hobbies` DISABLE KEYS */;
/*!40000 ALTER TABLE `users_hobbies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mailex'
--
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-01-05 22:42:34
