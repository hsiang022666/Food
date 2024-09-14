const data = [
    {
        "id": 1,
        "name": "Cloud 9 Cafe",
        "city": "台北 信義區",
        "country": "台灣",
        "entry_price": "$100-300",
        "address": "台北市信義區莊敬路208號1樓",
        "opening_time": "11:00 AM",
        "closing_time": "9:00 PM",
        "service":"內用 · 外帶 · 外送",
        "phone":"02-2720 4179",
        "categories": [
            "早午餐",
            "推薦"
        ],
        "images":[
            "https://img.onl/MzfAYG",
            "https://img.onl/Kagbi",
            "https://img.onl/uQ41is",
            "https://img.onl/jlnEH0"
        ],
        "introduction":"捷運世貿站的Cloud 9 Cafe吃早午餐，雖然餐廳位在信義區但價格卻很平實，入內低消只要100元就可以待很久。這邊離北醫和四四南村都很近，加上不限時、不收服務費，附近公司、學生還有看展的民眾都很愛來這裡聚餐。",
        "rating":"4.6",
        "title":[
            "餐點超級推薦「松露野菇燉飯」，松露很豪邁、奶香濃郁。",
            "義大利麵跟比薩都挺美味的，上菜速度也很快。",
            "第一次來這間，炸魚意外的超好吃!義大利麵的口味及香氣十足。"
        ],
        "author":[
            "James Milner",
            "Bob Chen",
            "柯 PEKO"
        ],
        "coordinates": {
            "lat": 25.0362344,
            "lon": 121.5419255
        }
        
    },
    {
        "id": 2,
        "name": "三味食堂",
        "city": "台北 萬華區",
        "country": "台灣",
        "entry_price": "$150-300",
        "address": "台北市萬華區貴陽街二段116號",
        "opening_time": "11:20-14:30",
        "closing_time": "17:10-21:00PM",
        "service":"內用 · 外帶 · (X)外送",
        "phone":"02-2389 2211",
        "categories": [
            "最受歡迎",
            "壽司",
            "推薦"
        ],
        "images":[
            "https://img.onl/lYGG3g",
            "https://bigshark.tw/wp-content/uploads/2023/04/0T1A3149.jpg",
            "https://img.onl/55yOeZ",
            "https://img.onl/ipku6o",
            "https://img.onl/2xAwzn"
        ],
        "introduction":"西門町_巨無霸的鮭魚生魚片握壽司。",
        "coordinates": {
            "lat": 25.0398867,
            "lon": 121.5000722
        }
    },
    {
        "id": 3,
        "name": "Chaup ! 轉角冰",
        "city": "台北市 文山區",
        "country": "台灣",
        "entry_price": "$90-150",
        "address": "台北市文山區景興路42巷8弄1號",
        "opening_time": "12:00 AM",
        "closing_time": "20:00 PM",
        "service":"內用 · 外帶 · (X)外送",
        "phone":"02-2932 1337",
        "categories": [
            "最受歡迎",
            "甜點/冰品",
            "推薦"
        ],
        "images":[
            "https://img.onl/XMBi7o",
            "https://img.onl/o4grwi",
            "https://img.onl/DrLspr",
            "https://img.onl/Qa48do"
        ],
        "introduction":"位於世新大學附近巷弄美食，轉角冰捷運景美站，超級低調巷弄，氛圍走日式氛圍小店。",
        "coordinates": {
            "lat": 24.9971577,
            "lon": 121.5401225
        }
    },
    {
        "id": 4,
        "name": "CAMPUS CAFE",
        "city": "台北市 大安區",
        "country": "台灣",
        "entry_price": "$300-400",
        "address": "台北市大安區忠孝東路三段203號",
        "opening_time": "11:00 AM",
        "closing_time": "21:00 PM",
        "service":"內用 · 外帶 · 外送",
        "phone":"02-2751 6021",
        "categories": [
            "早午餐"
        ],
        "images":[
            "https://img.onl/kmQUYq",
            "https://img.onl/aEoFFT",
            "https://img.onl/7wwWEe",
            "https://img.onl/qLPhmt",
            "https://img.onl/FevSyr"
        ],
        "introduction":"美式校園風格餐廳，可見大學的旗幟徽章等裝置，另外還有大型的投影布幕可以觀賞球賽。",
        "coordinates": {
            "lat": 25.041901,
            "lon": 121.5391063
        }
    },
    {
        "id": 5,
        "name": "富士咖哩FujiCurry",
        "city": "台北市 大安區",
        "country": "台灣",
        "entry_price": "$200-400",
        "address": "台北市大安區臥龍街153號",
        "opening_time": "11:30-15:00",
        "closing_time": "17:00-20:30 PM",
        "service":"內用 · 外帶 · 外送",
        "phone":"02-2737 2903",
        "categories": [
            "最受歡迎",
            "咖哩",
            "推薦"
        ],
        "images":[
            "https://img.onl/Leb21h",
            "https://img.onl/fWZJMc",
            "https://img.onl/MtPKX8"
        ],
        "introduction":"六張犁_人氣咖哩，店裡最主打的是咖哩飯，不過也有特殊的富士布丁，不少人推薦當飯後甜點！",
        "coordinates": {
            "lat": 25.0183661,
            "lon": 121.5484234
        }
    },
    {
        "id": 6,
        "name": "咖啡這件小事",
        "city": "台北市 文山區",
        "country": "台灣",
        "entry_price": "$60-200",
        "address": "台北市文山區試院路58號之5號",
        "opening_time": "9:00 AM",
        "closing_time": "7:00 PM",
        "service":"內用 · 外帶 · (X)外送",
        "phone":"0930-645510",
        "categories": [
            "甜品/冰品"
        ],
        "images":[
            "https://img.onl/E9KPrl",
            "https://img.onl/2o5Y11",
            "https://img.onl/Hmn5pp",
            "https://img.onl/hejbAY"
        ],
        "introduction":"景美_一間下午茶咖啡館以咖啡飲品&甜點等下午茶類品項為主。",
        "coordinates": {
            "lat": 24.989553,
            "lon": 121.5467678
        }
    }
    ,
    {
        "id": 7,
        "name": "L&E Brunch",
        "city": "新北市 永和區",
        "country": "台灣",
        "entry_price": "$100-200",
        "address": "新北市永和區信義路113號",
        "opening_time": "10:00 AM",
        "closing_time": "22:00 PM",
        "service":"內用 · 外帶 · 外送",
        "phone":"02-2925 7500",
        "categories": [
            "最受歡迎",
            "早午餐"
        ],
        "images":[
            "https://img.onl/C997JH",
            "https://img.onl/bTJvmg",
            "https://img.onl/B5M8Dc",
            "https://img.onl/d7VdBx"
        ],
        "introduction":"最厲害的餐點就是炭燒系列的漢堡，麵包香烤到有烙痕而且整個漢堡都充滿炭烤的香氣，讓每一口的層次相較於一般漢堡更為豐富。",
        "coordinates": {
            "lat": 25.014754,
            "lon": 121.5096785
        }
    },
    {
        "id": 8,
        "name": "Mr. 雪腐｜公館店",
        "city": "台北市 中正區",
        "country": "台灣",
        "entry_price": "$100-170",
        "address": "台北市中正區羅斯福路三段244巷21號",
        "opening_time": "12:30 AM",
        "closing_time": "22:00 PM",
        "service":"內用 · 外帶 · 外送",
        "phone":"02-236 35200",
        "categories": [
            "最受歡迎",
            "甜點/冰品"
        ],
        "images":[
            "https://img.onl/rwf9Uf",
            "https://img.onl/Pk16b",
            "https://img.onl/gaX8yY",
            "https://img.onl/z5ZUKK"
        ],
        "coordinates": {
            "lat": 25.016654,
            "lon":121.5278764
        },
        "introduction":"冰是雪花冰，也有賣飲料。",
    },
    {
        "id": 9,
        "name": "布娜飛比利時餐酒館",
        "city": "新北市 板橋區",
        "country": "台灣",
        "entry_price": "$300-1000",
        "address": "新北市板橋區縣民大道二段273號",
        "opening_time": "11:30 AM",
        "closing_time": "00:00 PM",
        "service":"內用 · 外帶 · 外送",
        "phone":"02-8969 1766",
        "categories": [
            "餐酒館"
        ],
        "images":[
            "https://img.onl/fW6puG",
            "https://img.onl/oz4AFP",
            "https://img.onl/JAY0Z",
            "https://img.onl/2Saevf"
        ],
        "introduction":"餐點選擇多樣化，經典排餐、美式早午餐、義式燉飯、手工石頭窯烤披薩，適合朋友一起聚餐",
        "coordinates": {
            "lat": 25.0175921,
            "lon": 121.4692916
        }
    },
    {
        "id": 10,
        "name": "辛殿麻辣鍋｜松江店",
        "city": "台北市 中山區",
        "country": "台灣",
        "entry_price": "$598-698",
        "address": "台北市中山區松江路129-4號",
        "opening_time": "11:30 AM",
        "closing_time": "01:30 PM",
        "service":"內用 · 外帶 · (X)外送",
        "phone":"02-2503 7667",
        "categories": [
            "最受歡迎",
            "火鍋"
        ],
        "images":[
            "https://img.onl/i7mm4M",
            "https://img.onl/7VCF2d",
            "https://img.onl/q0IeN7",
            "https://img.onl/KsZKfk"

        ],
        "introduction":"台北人氣麻辣鍋店之一，正宗川味麻辣鍋，標榜以手作拌炒的方式炒出鍋底使用的香料，並且提供高檔食材，要讓饕客吃到美味。",
        "coordinates": {
            "lat": 25.0539109,
            "lon": 121.5306816
        }
    },
    {
        "id": 11,
        "name": "雞湯大叔｜忠孝店",
        "city": "台北市 大安區",
        "country": "台灣",
        "entry_price": "$298-398",
        "address": "台北市大安區光復南路200巷9號",
        "opening_time": "11:30 AM",
        "closing_time": "00:30 AM",
        "service":"內用 · 外帶 · 外送",
        "phone":"02-2775 4408",
        "categories": [
            "最受歡迎",
            "火鍋"
        ],
        "images":[
            "https://img.onl/GkYxuk",
            "https://img.onl/IyJqYW",
            "https://img.onl/Yq8Qud",
            "https://img.onl/Gv0PxF"

        ],
        "introduction":"只為湯控而生的火鍋品牌的餐廳，主打湯頭有蔬果雞湯、白蘭地燉雞湯，及季節限定湯頭。",
        "coordinates": {
            "lat": 25.0418715,
            "lon": 121.5531832
        }
    },
    {
        "id": 12,
        "name": "銀兔湯咖哩",
        "city": "台北市 中山區",
        "country": "台灣",
        "entry_price": "$210-360",
        "address": "台北市中山區中山北路一段140巷23號",
        "opening_time": "11:30 AM",
        "closing_time": "21:00 AM",
        "service":"內用 · 外帶 · 外送",
        "phone":"02-2100 2555",
        "categories": [
            "推薦",
            "咖哩"
        ],
        "images":[
            "https://img.onl/mOzbs",
            "https://img.onl/LqstfY",
            "https://img.onl/Yq8Qud",
            "https://img.onl/1M8EdC"

        ],
        "introduction":"吃咖哩配厚切牛排!!餐點裡還有滿滿的蔬菜和蛋，牛排的口感扎實又香氣十足，白米飯使用的是台東的台梗9號，白飯上還會鋪上一層起司，吃起來非常滿足！",
        "coordinates": {
            "lat": 25.0515087,
            "lon": 121.5186962
        }
    },
    {
        "id": 13,
        "name": "Chinese Whispers",
        "city": "台北市 大安區",
        "country": "台灣",
        "entry_price": "$298-1500",
        "address": "台北市大安區仁愛路四段345巷2弄11號",
        "opening_time": "17:30 PM",
        "closing_time": "02:00 AM",
        "service":"內用 · 外帶 · (X)外送",
        "phone":"02-2778 3988",
        "categories": [
            "推薦",
            "餐酒館"
        ],
        "images":[
            "https://img.onl/g7BkJI",
            "https://img.onl/4HTsEQ",
            "https://img.onl/BQ5kwc",
            "https://img.onl/O836DV",
            "https://img.onl/ORKyYs",
            "https://img.onl/J2hA5b"
        ],
        "introduction":"有多款創意調酒，餐點也都有一定水準，微醺也能享受美食。走英倫工業風的裝潢風格，用餐空間寬敞舒適，也有大包廂可供選擇。這裡除了可以經典調酒外，更多的是別具創意巧思的特色調酒。",
        "coordinates": {
            "lat": 25.038586,
            "lon": 121.5508424
        }
    },
    {
        "id": 14,
        "name": "隱士",
        "city": "台北市 大安區",
        "country": "台灣",
        "entry_price": "$300-1000",
        "address": "台北市大安區光復南路240巷51號",
        "opening_time": "18:00 PM",
        "closing_time": "02:00 AM",
        "service":"內用 · 外帶 · 外送",
        "phone":"0963-588568",
        "categories": [
            "推薦",
            "餐酒館"
        ],
        "images":[
            "https://img.onl/2bhgrG",
            "https://img.onl/VhbNmq",
            "https://img.onl/BQ5kwc",
            "https://img.onl/UXzzHp",
            "https://img.onl/EPX6OP",
            "https://img.onl/kKNkoo"
        ],
        "introduction":"店名將道家哲學”小隱於野，中隱於市，大隱於朝”改為” 小隱於野，大飲於士”，期望打造現代人的心靈淨土，畢竟歸隱山林、入仕為官都相對遙遠，半繁忙半賦閒偶爾小酌一杯較實際|自創調酒清香淡雅很順口。",
        "coordinates": {
            "lat": 25.0406726,
            "lon": 121.5546594
        }
    }
    
]
export default data;