/**
 * TripTree V17 - 終極實體 DOM 物理樹狀重排引擎 (Physical Tree Layout Engine)
 */

const TOKYO_DEMO_PROJECTS = [
  {
    id: "proj_fukuoka_demo",
    title: "🏮 福岡 3 天 2 夜 櫛田神社輕旅行",
    rootNode: {
      id: "root_fukuoka",
      title: "🏮 福岡 3 天 2 夜 櫛田神社輕旅行",
      category: "root",
      expanded: true,
      bgColor: "#ffffff",
      children: [
        {
          id: "fk-day-1",
          title: "Day 1: 10/20 博多車站 ➔ 櫛田神社 ➔ 中洲屋台",
          category: "day",
          expanded: true,
          bgColor: "#ffffff",
          children: [
            {
              id: "fk-d1-am",
              title: "上午 / 中午",
              category: "period",
              expanded: true,
              bgColor: "#fef3c7",
              children: [
                {
                  id: "fk-act-flight",
                  title: "福岡機場 (FUK) ➔ 搭地下鐵直達博多站",
                  category: "transit",
                  cost: "5 分鐘直達",
                  bgColor: "#dcfce7",
                  note: "福岡機場離市區超近，搭乘地下鐵僅需 5 分鐘！",
                  children: []
                }
              ]
            },
            {
              id: "fk-d1-pm",
              title: "下午",
              category: "period",
              expanded: true,
              bgColor: "#fef3c7",
              children: [
                {
                  id: "fk-act-kushida",
                  title: "⛩️ 博多總鎮守「櫛田神社」",
                  category: "spot",
                  cost: "免費參拜",
                  bgColor: "#e0e7ff",
                  url: "https://www.crossroadfukuoka.jp/tw/spot/12510",
                  mapsUrl: "https://maps.google.com/?q=櫛田神社",
                  imageUrl: "https://www.crossroadfukuoka.jp/storage/tourism_attractions/12510/responsive_images/4jz3eLXD7vlsC5mkI0SE8kwFzjCjK6tgsbBcPQ1Y__1673_1115.jpg",
                  note: "千年御神木銀杏樹，展示 13 公尺高超震撼「博多祇園山笠神轎」，祈求長壽與生意興隆！",
                  children: [
                    {
                      id: "fk-act-ramen",
                      title: "🍜 博多一双 拉麵（極濃豚骨湯頭）",
                      category: "food",
                      cost: "¥900",
                      bgColor: "#fef08a",
                      note: "被譽為「博多豚骨拉麵的泡沫系天花板」！",
                      children: []
                    }
                  ]
                }
              ]
            },
            {
              id: "fk-d1-night",
              title: "晚上",
              category: "period",
              expanded: true,
              bgColor: "#fef3c7",
              children: [
                {
                  id: "fk-act-yatai",
                  title: "中洲屋台街 🍢（體驗在地屋台攤販文化）",
                  category: "food",
                  bgColor: "#ffedd5",
                  note: "河畔邊享受關東煮、明太子玉子燒與串燒！",
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    id: "proj_tokyo_demo",
    title: "🗼 東京 5 天 4 夜自由行 經典心智圖",
    rootNode: {
      id: "root_tokyo",
      title: "🗼 東京 5 天 4 夜自由行 經典心智圖",
      category: "root",
      expanded: true,
      bgColor: "#ffffff",
      children: [
        {
          id: "day-1",
          title: "Day 1: 10/20 成田機場 ➔ 淺草 ➔ 上野",
          category: "day",
          expanded: true,
          bgColor: "#ffffff",
          children: [
            {
              id: "d1-am",
              title: "上午",
              category: "period",
              expanded: true,
              bgColor: "#fef3c7",
              children: [
                {
                  id: "d1-act-flight",
                  title: "08:50 桃園起飛 ➔ 13:15 抵達成田機場",
                  category: "spot",
                  cost: "08:50~13:15",
                  bgColor: "#bbf7d0",
                  note: "出關後前往 B1 樓層購買 Skyliner 車票。",
                  children: []
                }
              ]
            },
            {
              id: "d1-pm",
              title: "下午",
              category: "period",
              expanded: true,
              bgColor: "#fef3c7",
              children: [
                {
                  id: "d1-act-skyliner",
                  title: "搭乘 Skyliner 特急（成田機場 ➔ 京成上野站）",
                  category: "transit",
                  cost: "41 分鐘直達",
                  bgColor: "#dcfce7",
                  note: "車程僅需 41 分鐘，舒適又快速！",
                  children: []
                }
              ]
            },
            {
              id: "d1-night",
              title: "晚上",
              category: "period",
              expanded: true,
              bgColor: "#fef3c7",
              children: [
                {
                  id: "d1-act-hotel",
                  title: "入住【上野雷門大飯店】",
                  category: "hotel",
                  bgColor: "#ffedd5",
                  hotelCheckIn: "15:00 入住",
                  hotelCheckOut: "11:00 退房",
                  hotelRoomType: "高級雙人房 #TK8829",
                  note: "出站步行 3 分鐘即達，交通超方便。",
                  children: [
                    {
                      id: "d1-act-sensoji",
                      title: "淺草寺雷門漫步 ➔ 拍大提燈 🏮",
                      category: "spot",
                      bgColor: "#e0e7ff",
                      mapsUrl: "https://maps.google.com",
                      children: [
                        {
                          id: "d1-act-ichiran",
                          title: "晚餐：一蘭拉麵 淺草店（豚骨拉麵）",
                          category: "food",
                          cost: "¥1,100",
                          bgColor: "#fef08a",
                          children: []
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  }
];

const DEFAULT_LOCATION_HIERARCHY = {
  "日本": {
    "所有縣市": ["全部日本"],
    "福岡縣": ["全部福岡縣", "博多", "天神", "中洲", "太宰府", "門司港", "小倉", "大濠公園", "百道濱", "絲島", "柳川", "能古島", "志賀島", "中央區", "渡邊通", "祇園", "六本松", "福岡機場", "久留米", "宗像", "西新"],
    "大分縣": ["全部大分縣", "由布院", "別府", "大分市區", "日田", "豐後高田", "宇佐"],
    "熊本縣": ["全部熊本縣", "熊本市區", "阿蘇", "黑川溫泉"],
    "佐賀縣": ["全部佐賀縣", "武雄", "嬉野", "鳥栖", "唐津", "呼子", "有田", "佐賀市區", "吉野里", "鹿島"],
    "長崎縣": ["全部長崎縣", "長崎市區", "豪斯登堡", "佐世保", "九十九島"],
    "宮崎縣": ["全部宮崎縣", "高千穗"],
    "東京都": ["全部東京都", "新宿", "澀谷", "銀座", "淺草", "秋葉原"],
    "大阪府": ["全部大阪府", "心齋橋/難波", "梅田", "天王寺", "環球影城"],
    "京都府": ["全部京都府", "祇園/清水寺", "嵐山", "伏見稻荷"]
  },
  "韓國": {
    "所有區域": ["全部韓國"],
    "首爾特別市": ["全部首爾", "弘大", "明洞", "聖水洞", "江南"],
    "釜山廣域市": ["全部釜山", "海雲台", "西面", "南浦洞", "廣安里"]
  },
  "台灣": {
    "所有縣市": ["全部台灣"],
    "台北市": ["全部台北", "信義區", "西門町", "大稻埕", "士林"],
    "台南市": ["全部台南", "中西區", "安平", "神農街"]
  },
  "泰國": {
    "所有地區": ["全部泰國"],
    "曼谷": ["全部曼谷", "暹羅", "素坤逸", "河濱"],
    "清邁": ["全部清邁", "古城區", "寧曼路"]
  }
};

const DEFAULT_SPOT_VAULT = [
  {
    "id": "v_fukuoka_1_66fb328d",
    "country": "日本",
    "region": "天神",
    "title": "RINGO 天神地下街店 (蘋果派)",
    "category": "food",
    "cost": "蘋果派 450円",
    "bgColor": "#fe9000",
    "url": "https://www.instagram.com/reel/Da1vwEvpD_M/",
    "mapsUrl": "https://maps.google.com/?q=RINGO+天神地下街店",
    "note": "📍福岡県福岡市中央区天神2丁目天神地下街西4番街\n⏰09:00–21:00\n🚇西鐵福岡(天神)站步行3分鐘\n✨派皮酥脆，現場開放式廚房現做奶油香。"
  },
  {
    "id": "v_fukuoka_2_ee34b1dc",
    "country": "日本",
    "region": "六本松",
    "title": "六本松 爐端燒銀鮭朝食",
    "category": "food",
    "cost": "朝食",
    "bgColor": "#ff6b6b",
    "url": "https://www.instagram.com/p/DZZAmi3zagW/",
    "mapsUrl": "https://maps.google.com/?q=福岡+六本松+爐端燒",
    "note": "📍福岡六本松\n✨全預約制。薄鹽炭香厚切銀鮭、鰻魚釜鍋飯、高湯泡飯與滿滿熱情互動。"
  },
  {
    "id": "v_fukuoka_3_7d6a3e7c",
    "country": "日本",
    "region": "福岡機場",
    "title": "福岡機場免稅店必買伴手禮",
    "category": "shop",
    "cost": "依商品而定",
    "bgColor": "#a29bfe",
    "url": "https://www.instagram.com/p/DZOoRRYB3ru/",
    "mapsUrl": "https://maps.google.com/?q=福岡機場免稅店",
    "note": "📍福岡機場國際線免稅店\n✨Butter Butler海鹽奶油費南雪、Amanberry草莓貓舌餅、Press Butter Sand、茅乃舍高湯包一次購齊。"
  },
  {
    "id": "v_fukuoka_4_71f9d373",
    "country": "日本",
    "region": "福岡",
    "title": "福岡10天自由行行程與機票攻略",
    "category": "spot",
    "cost": "機票約$9000",
    "bgColor": "#45b7d1",
    "url": "https://www.instagram.com/p/DX6y-06P-m2/",
    "mapsUrl": "https://maps.google.com/?q=福岡",
    "note": "✨10天九千廉航機票與自由行高CP值景點規劃攻略。"
  },
  {
    "id": "v_fukuoka_5_326d26d2",
    "country": "日本",
    "region": "博多",
    "title": "島本明太子 (明太子麵包)",
    "category": "food",
    "cost": "伴手禮",
    "bgColor": "#ff6b6b",
    "url": "https://www.instagram.com/p/DYwtbKgJ5yI/",
    "mapsUrl": "https://maps.google.com/?q=島本明太子+福岡",
    "note": "📍福岡\n✨福岡必買名產島本明太子，特色鮮美明太子與明太子法式麵包。"
  },
  {
    "id": "v_fukuoka_6_22023b1a",
    "country": "日本",
    "region": "博多",
    "title": "KOKUNEKO 博多デイトス店 (黑貓甜點)",
    "category": "food",
    "cost": "1,080円~3,240円",
    "bgColor": "#fe9000",
    "url": "https://www.instagram.com/p/DXl6j3Tk3kV/",
    "mapsUrl": "https://maps.google.com/?q=KOKUNEKO+博多デイトス店",
    "note": "📍博多駅中央街1-1 博多デイトス みやげもん市場\n⏰08:00–21:00\n✨博多站直結黑貓主題甜點，黑糖奶油貓舌餅與費南雪。"
  },
  {
    "id": "v_fukuoka_7_514f2670",
    "country": "日本",
    "region": "博多",
    "title": "博多らぁめん いちむじん 呉服町店",
    "category": "food",
    "cost": "拉麵 900円~1240円",
    "bgColor": "#ff6b6b",
    "url": "https://www.instagram.com/p/DaZ949MS6KE/",
    "mapsUrl": "https://maps.google.com/?q=いちむじん+呉服町",
    "note": "📍福岡県福岡市博多区上呉服町11-211\n⏰11:00〜15:00, 17:00〜20:50\n✨明太子、高菜、漬物無限量免費吃到飽！必點明太豚骨叉燒拉麵。"
  },
  {
    "id": "v_fukuoka_8_e61d046c",
    "country": "日本",
    "region": "赤坂",
    "title": "Cafe Bimi 珈琲美美",
    "category": "food",
    "cost": "咖啡甜點",
    "bgColor": "#fe9000",
    "url": "https://www.instagram.com/p/Da-iUcdBMpt/",
    "mapsUrl": "https://maps.google.com/?q=Cafe+Bimi+珈琲美美",
    "note": "📍福岡県福岡市中央区赤坂２丁目６−27\n✨1977年創業老字號法蘭絨手沖咖啡，香濃醇厚與果乾磅蛋糕。"
  },
  {
    "id": "v_fukuoka_9_458cba84",
    "country": "日本",
    "region": "宗像",
    "title": "アミューズメントパーク万代 宗像店",
    "category": "spot",
    "cost": "10円起",
    "bgColor": "#4ecdc4",
    "url": "https://www.instagram.com/p/DaxB1xiulec/",
    "mapsUrl": "https://maps.google.com/?q=アミューズメントパーク万代+宗像店",
    "note": "📍福岡県宗像市徳重2丁目4-1\n⏰10:00〜23:00\n✨280台超大型夾娃娃遊樂中心，包含10圓娃娃機與台灣彈珠台。"
  },
  {
    "id": "v_fukuoka_10_d04fe57d",
    "country": "日本",
    "region": "博多",
    "title": "福岡熱門預約制爐端燒",
    "category": "food",
    "cost": "晚餐",
    "bgColor": "#ff6b6b",
    "url": "https://www.instagram.com/p/DakjBxjSNmN/",
    "mapsUrl": "https://maps.google.com/?q=福岡+爐端燒",
    "note": "📍福岡博多\n✨超人氣爆紅炭火爐端燒料理。"
  },
  {
    "id": "v_fukuoka_11_c43ee18c",
    "country": "日本",
    "region": "博多",
    "title": "藤う那 鰻魚飯 (Fujiuna)",
    "category": "food",
    "cost": "鰻魚飯",
    "bgColor": "#ff6b6b",
    "url": "https://www.instagram.com/p/DZSRrm9hhv6/",
    "mapsUrl": "https://maps.google.com/?q=藤う那+鰻魚飯",
    "note": "📍博多区博多駅東2-2-10\n✨Tabelog高分博多站前鰻魚老店，口感無敵鬆軟、特濃醬汁白飯。"
  },
  {
    "id": "v_fukuoka_12_5b1e3334",
    "country": "日本",
    "region": "久留米",
    "title": "252マルダイラーメン (濃郁海蝦冷麵)",
    "category": "food",
    "cost": "880円起",
    "bgColor": "#fe9000",
    "url": "https://www.instagram.com/p/DaNQzR_yUUO/",
    "mapsUrl": "https://maps.google.com/?q=252マルダイラーメン+久留米",
    "note": "📍久留米市通町107-7\n⏰11:00〜15:00, 18:00〜23:00 (木休)\n✨鮮魚批發直送，濃厚鮮蝦高湯冷麵、蝦醬炒飯與醃生蝦。"
  },
  {
    "id": "v_fukuoka_13_9a725e04",
    "country": "日本",
    "region": "天神",
    "title": "丸福バーム (焦糖布蕾年輪蛋糕)",
    "category": "food",
    "cost": "540円",
    "bgColor": "#fe9000",
    "url": "https://www.instagram.com/p/DWlWrb_krq1/",
    "mapsUrl": "https://maps.google.com/?q=大丸福岡天神店",
    "note": "📍大丸福岡天神店 本館8階\n⏰10:00〜19:00\n✨日售2400個現烤焦糖脆皮、濃郁卡士達年輪蛋糕。"
  },
  {
    "id": "v_fukuoka_14_b1fe2531",
    "country": "日本",
    "region": "博多",
    "title": "櫛田神社 (梳子御守)",
    "category": "spot",
    "cost": "參拜/御守",
    "bgColor": "#45b7d1",
    "url": "https://www.instagram.com/p/DYmMhUbxSUy/",
    "mapsUrl": "https://maps.google.com/?q=櫛田神社+福岡",
    "note": "📍福岡 櫛田神社\n✨博多總鎮守，必買限定木刻「梳子御守」（保佑消除煩惱與美麗），建議早上去衝。"
  },
  {
    "id": "v_fukuoka_15_79996f1c",
    "country": "日本",
    "region": "西中洲",
    "title": "Pain Stock 西中洲 (明太子法國麵包)",
    "category": "food",
    "cost": "麵包",
    "bgColor": "#fe9000",
    "url": "https://www.instagram.com/p/DY9ujKQKCg7/",
    "mapsUrl": "https://maps.google.com/?q=Pain+Stock+西中洲",
    "note": "📍福岡市中央区西中洲6-17\n✨福岡麵包界頂級代表，自養酵母與必買爆款明太子法國麵包。"
  },
  {
    "id": "v_fukuoka_16_e6e14417",
    "country": "日本",
    "region": "博多",
    "title": "il FORNO del Mignon 博多站小可頌",
    "category": "food",
    "cost": "可頌",
    "bgColor": "#fe9000",
    "url": "https://www.instagram.com/p/DY9ujKQKCg7/",
    "mapsUrl": "https://maps.google.com/?q=il+FORNO+del+Mignon+博多",
    "note": "📍博多車站站內\n✨超人氣排隊名店，現烤原味、巧克力、地瓜迷你小可頌。"
  },
  {
    "id": "v_fukuoka_17_bbe21c25",
    "country": "日本",
    "region": "南區",
    "title": "bouquca bakery (極厚法式吐司)",
    "category": "food",
    "cost": "麵包",
    "bgColor": "#fe9000",
    "url": "https://www.instagram.com/p/DY9ujKQKCg7/",
    "mapsUrl": "https://maps.google.com/?q=bouquca+bakery+福岡",
    "note": "📍福岡県福岡市南区塩原1-19-31\n✨超厚法式吐司，外脆內軟香濃美味。"
  },
  {
    "id": "v_fukuoka_18_af84c7dc",
    "country": "日本",
    "region": "藥院",
    "title": "THE ROOTS neighborhood bakery",
    "category": "food",
    "cost": "麵包",
    "bgColor": "#fe9000",
    "url": "https://www.instagram.com/p/DY9ujKQKCg7/",
    "mapsUrl": "https://maps.google.com/?q=THE+ROOTS+neighborhood+bakery",
    "note": "📍福岡市中央区薬院4-18-7\n✨隱藏在藥院大人系質感麵包店，適合搭配葡萄酒品嚐。"
  },
  {
    "id": "v_fukuoka_19_02b5603c",
    "country": "日本",
    "region": "六本松",
    "title": "AMAM DACOTAN 六本松本店",
    "category": "food",
    "cost": "麵包",
    "bgColor": "#fe9000",
    "url": "https://www.instagram.com/p/DY9ujKQKCg7/",
    "mapsUrl": "https://maps.google.com/?q=AMAM+DACOTAN+六本松",
    "note": "📍福岡県福岡市中央区六本松3丁目7-6\n✨童話童趣風造型麵包店，生厚泡芙與各類絕美餡料麵包。"
  },
  {
    "id": "v_fukuoka_20_ab1104d4",
    "country": "日本",
    "region": "天神",
    "title": "The Full Full Hakata (天神明太子麵包)",
    "category": "food",
    "cost": "麵包",
    "bgColor": "#fe9000",
    "url": "https://www.instagram.com/p/DY9ujKQKCg7/",
    "mapsUrl": "https://maps.google.com/?q=The+Full+Full+Hakata",
    "note": "📍福岡県福岡市中央区天神3丁目3-5\n✨天神排隊名店，每日限量的現烤明太子法國麵包。"
  },
  {
    "id": "v_fukuoka_21_f85d0018",
    "country": "日本",
    "region": "由布院",
    "title": "由布院湯之坪街道 (動漫IP天堂一日遊)",
    "category": "spot",
    "cost": "觀光一日遊",
    "bgColor": "#4ecdc4",
    "url": "https://www.instagram.com/p/DXl8HJrCQKG/",
    "mapsUrl": "https://maps.google.com/?q=由布院湯之坪街道",
    "note": "📍大分縣由布市湯布院町\n✨近郊療癒小鎮，集合龍貓吉卜力、史努比、米菲兔、哈利波特專賣店。"
  },
  {
    "id": "v_fukuoka_22_fe0d0f37",
    "country": "日本",
    "region": "福岡",
    "title": "福岡在地寶藏美食清單 (燒肉/拉麵/海鮮)",
    "category": "food",
    "cost": "美食行程",
    "bgColor": "#ff6b6b",
    "url": "https://www.instagram.com/p/DWlWl-vkv3Y/",
    "mapsUrl": "https://maps.google.com/?q=福岡美食",
    "note": "📍福岡市區\n✨在地人推薦不踩雷 7 家隱藏版拉麵、燒肉與居酒屋。"
  },
  {
    "id": "v_fukuoka_23_19869db1",
    "country": "日本",
    "region": "博多",
    "title": "Yagura 矢倉 (80歲爺爺豬排丼)",
    "category": "food",
    "cost": "900円",
    "bgColor": "#ff6b6b",
    "url": "https://www.instagram.com/p/DXQp1Kaxtzb/",
    "mapsUrl": "https://maps.google.com/?q=福岡市博多区博多駅前2丁目9-28+Yagura",
    "note": "📍福岡県福岡市博多区博多駅前2丁目9-28\n⏰11:30–18:30\n✨隱藏大樓內的高CP值古早味豬排丼，附茶與烏龍麵。"
  },
  {
    "id": "v_fukuoka_24_7ff3a649",
    "country": "日本",
    "region": "天神",
    "title": "Donki 福岡天神本店 巨無霸醬油糰子",
    "category": "food",
    "cost": "小吃",
    "bgColor": "#fe9000",
    "url": "https://www.instagram.com/p/DZSYo8JyLL4/",
    "mapsUrl": "https://maps.google.com/?q=唐吉訶德+福岡天神本店",
    "note": "📍唐吉訶德福岡天神本店門口\n✨特大巨無霸現烤醬油日式燒糰子。"
  },
  {
    "id": "v_fukuoka_25_tanga_kokura",
    "country": "日本",
    "region": "小倉",
    "title": "小倉 旦過市場 (自選大學丼/昭和美食街)",
    "category": "food",
    "cost": "小吃 / 大學丼",
    "url": "https://www.instagram.com/p/Db2pHGVjNnp/",
    "mapsUrl": "https://maps.google.com/?q=旦過市場+小倉",
    "note": "📍福岡縣北九州市小倉北區魚町4丁目\n⏰各攤位約10:00-18:00\n🚇JR小倉站步行10分鐘\n✨北九州的廚房！必玩「大學堂自選丼飯」：買碗白飯沿途挑生魚片、炸物鋪成專屬海鮮熟食丼，還有小倉魚板與肉烏龍麵。"
  },
  {
    "id": "v_fukuoka_26_ichimujin_watanabe",
    "country": "日本",
    "region": "渡邊通",
    "title": "いちむじん 渡邊通店 (明太子山藥冷麵/雞南蠻)",
    "category": "food",
    "cost": "950円~1200円",
    "url": "https://www.instagram.com/reel/DcTLOXsJTNZ/",
    "mapsUrl": "https://maps.google.com/?q=博多らぁめん+いちむじん+渡辺通",
    "note": "📍福岡市中央區渡辺通\n⏰11:00–24:00 (營業至深夜0點)\n🚇地鐵渡邊通站步行3分鐘\n✨明太子、辛子高菜、漬物無限量免費吃到飽！夏天必點「明太山藥泥冷麵 (蘭王蛋黃)」與超巨汁多「明太塔塔醬炸雞南蠻」、一口餃子。"
  },
  {
    "id": "v_fukuoka_27_kawaya_gion",
    "country": "日本",
    "region": "祇園",
    "title": "かわ屋 祇園店 (博多名物捲雞皮居酒屋)",
    "category": "food",
    "cost": "串燒 150円起",
    "url": "https://www.instagram.com/reel/DaP_px4ThVG/",
    "mapsUrl": "https://maps.google.com/?q=かわ屋+祇園店",
    "note": "📍福岡県福岡市博多区祇園町2-8 Liens祇園ビル\n⏰17:00–01:00\n🚇地鐵祇園站步行2分鐘\n✨博多排隊名店！反覆烤製去油六天的「名物招牌捲雞皮串」，外酥內嫩鹹甜多汁，店員氣氛熱情超有活力。"
  },
  {
    "id": "v_fukuoka_28_imonne_hakata",
    "country": "日本",
    "region": "博多",
    "title": "Imonne Hakata (現包Q彈麻糬冰淇淋)",
    "category": "food",
    "cost": "約 550円",
    "url": "https://www.instagram.com/reel/DbapLR9yQio/",
    "mapsUrl": "https://maps.google.com/?q=Imonne+Hakata+KITTE博多",
    "note": "📍福岡市博多區博多站中央街9-1 (KITTE博多 1樓超市對面)\n⏰10:00–21:00\n🚇JR博多站直結\n✨超療癒現場手包現做！外皮極致軟Q拉絲麻糬包裹冰淇淋，推薦香草櫻花粉、開心果搭配巧克力粉。"
  },
  {
    "id": "v_fukuoka_29_taiko_sushi",
    "country": "日本",
    "region": "福岡機場",
    "title": "大河壽司 (福岡機場旁 超高CP值厚切鮪魚迴轉壽司)",
    "category": "food",
    "cost": "1,500円~3,000円",
    "url": "https://www.instagram.com/reel/DY7HWyATWcK/",
    "mapsUrl": "https://maps.google.com/?q=大河すし+福岡",
    "note": "📍福岡市博多區 (近福岡機場)\n⏰11:00–21:30\n✨在地人激推超高CP值迴轉壽司！厚切鮪魚份量巨大又鮮甜，生魚片油脂豐富，出入機場前後順遊必吃。"
  },
  {
    "id": "v_fukuoka_30_mojiko_retro",
    "country": "日本",
    "region": "門司港",
    "title": "門司港懷舊區 (大正浪漫洋樓群)",
    "category": "spot",
    "cost": "免費散策 (部分展館約300円)",
    "url": "https://www.mojiko.info/",
    "mapsUrl": "https://maps.google.com/?q=門司港懷舊",
    "note": "📍福岡縣北九州市門司區港町\n🚇JR門司港站出站即達\n✨保留明治大正時期紅磚洋樓建築群。必訪景點：舊門司稅關、國際友好紀念圖書館、藍翼門司吊橋（會定時開啟閉合的戀人聖地吊橋）。"
  },
  {
    "id": "v_fukuoka_31_curry_honpo",
    "country": "日本",
    "region": "門司港",
    "title": "伽哩本舖 門司港懷舊店 (焗烤燒咖哩)",
    "category": "food",
    "cost": "約 1,100円 ~ 1,600円",
    "url": "https://tabelog.com/fukuoka/A4004/A400501/40000030/",
    "mapsUrl": "https://maps.google.com/?q=伽哩本舖+門司港",
    "note": "📍福岡縣北九州市門司區港町9-2\n⏰11:00–20:00\n✨門司港發祥代表名物！熱鐵鍋烘烤的濃郁咖哩飯，表層鋪滿厚牽絲起司、中間敲入半熟生雞蛋，推薦海鮮燒咖哩與招牌牛絞肉燒咖哩。"
  },
  {
    "id": "v_fukuoka_32_kokura_castle",
    "country": "日本",
    "region": "小倉",
    "title": "小倉城 & 勝山公園 (天守閣與櫻花名所)",
    "category": "spot",
    "cost": "天守閣門票 350円",
    "url": "https://www.kokura-castle.jp/",
    "mapsUrl": "https://maps.google.com/?q=小倉城",
    "note": "📍福岡縣北九州市小倉北區城內2-1\n⏰09:00–20:00\n🚇JR西小倉站步行10分鐘\n✨細川忠興建造之四層五階唐造式名城！天守閣頂樓可360度俯瞰小倉街景，春季勝山公園滿開數百株櫻花，夜晚有燈光秀點綴。"
  },
  {
    "id": "v_fukuoka_33_sarakurayama",
    "country": "日本",
    "region": "小倉",
    "title": "皿倉山夜景 (新日本三大夜景/纜車)",
    "category": "spot",
    "cost": "往返纜車約 1,230円",
    "url": "http://www.sarakurayama-cablecar.co.jp/",
    "mapsUrl": "https://maps.google.com/?q=皿倉山展望台",
    "note": "📍福岡縣北九州市八幡東區大字尾倉1481-1\n🚇JR八幡站轉乘免費接駁巴士\n✨被評為「價值百億美金」的新日本三大夜景！搭乘登山斜坡纜車與單軌電車直達標高622公尺山頂，飽覽洞海灣與北九州工業繁華星海。"
  },
  {
    "id": "v_fukuoka_34_sukesan_udon",
    "country": "日本",
    "region": "小倉",
    "title": "資さんうどん 魚町店 (北九州靈魂烏龍麵)",
    "category": "food",
    "cost": "約 600円 ~ 900円",
    "url": "https://www.sukesanudon.com/",
    "mapsUrl": "https://maps.google.com/?q=資さんうどん+魚町店",
    "note": "📍福岡縣北九州市小倉北區魚町2丁目6-1\n⏰24小時營業！\n🚇JR小倉站步行5分鐘\n✨北九州代表國民美食！招牌必點「肉＆牛蒡天婦羅烏龍麵（肉ごぼ天うどん）」，配上特製軟Q烏龍麵與高湯，還有外帶秒殺的甜糯牡丹餅 (ぼた餅)！"
  },
  {
    "id": "v_fukuoka_35_karato_market",
    "country": "日本",
    "region": "門司港",
    "title": "唐戶市場 (海鮮馬市/百円握壽司海膽丼)",
    "category": "food",
    "cost": "每貫握壽司 100円 ~ 500円",
    "url": "https://www.karatoichiba.com/",
    "mapsUrl": "https://maps.google.com/?q=唐戶市場",
    "note": "📍山口縣下關市唐戶町5-50 (門司港搭渡輪5分鐘即達)\n⏰週五六日及假日限定馬市 (09:00–15:00)\n✨門司港順遊必訪！攤位現捏黑鮪魚大腹、新鮮海膽、甜蝦、炸河豚與河豚生魚片，買好端到海邊木棧道吹海風享受！"
  },
  {
    "id": "v_fukuoka_36_dazaifu_tenmangu",
    "country": "日本",
    "region": "太宰府",
    "title": "太宰府天滿宮 (學問之神與隈研吾御本殿)",
    "category": "spot",
    "cost": "境內免費參觀",
    "url": "https://www.dazaifutenmangu.or.jp/",
    "mapsUrl": "https://maps.google.com/?q=太宰府天滿宮",
    "note": "📍福岡縣太宰府市宰府4丁目7-1\n🚇西鐵太宰府站步行5分鐘\n✨全日本天滿宮總本社，祭祀學問之神菅原道真。必走心字池三座太鼓橋洗滌心靈、摸御神牛開智慧，現正展出建築大師隈研吾設計的「漂浮森林仮殿」。"
  },
  {
    "id": "v_fukuoka_37_kasanoya",
    "country": "日本",
    "region": "太宰府",
    "title": "かさの家 傘之家 (太宰府現烤梅枝餅)",
    "category": "food",
    "cost": "每個約 150円",
    "url": "http://www.kasanoya.com/",
    "mapsUrl": "https://maps.google.com/?q=かさの家+太宰府",
    "note": "📍福岡縣太宰府市宰府2-7-24 (表參道)\n⏰09:00–18:00\n✨表參道最具人氣排隊名店！剛烤出爐餅皮外脆內軟糯，表面烙印梅花圖騰，微甜紅豆餡入口溫潤不膩，每月17日與25日還有限定艾草梅枝餅。"
  },
  {
    "id": "v_fukuoka_38_dazaifu_starbucks",
    "country": "日本",
    "region": "太宰府",
    "title": "太宰府星巴克 (隈研吾自然木條建築藝術)",
    "category": "spot",
    "cost": "咖啡飲品約 500円",
    "url": "https://store.starbucks.co.jp/detail-1058/",
    "mapsUrl": "https://maps.google.com/?q=星巴克+太宰府天滿宮表參道店",
    "note": "📍福岡縣太宰府市宰府3-2-43\n⏰08:00–20:00\n✨名列全球最美星巴克之一！由隈研吾操刀設計，運用2,000根純杉木條斜向交錯延伸，營造如森林鳥巢般的通透光影流動感。"
  },
  {
    "id": "v_fukuoka_39_fukuoka_tower",
    "country": "日本",
    "region": "百道濱",
    "title": "福岡塔 (日本最高海濱塔/360度展望台)",
    "category": "spot",
    "cost": "成人門票 800円",
    "url": "https://www.fukuokatower.co.jp/",
    "mapsUrl": "https://maps.google.com/?q=福岡塔",
    "note": "📍福岡市早良區百道濱2丁目3-26\n⏰09:30–22:00\n🚇地鐵西新站轉公車或博多站公車直達\n✨高達234公尺的鏡面海濱塔！展望室俯瞰博多灣夕陽與海濱夜景，設有戀人聖地合掌點燈心型拱門，塔身每晚隨季節呈現櫻花、萬聖節與聖誕光雕秀。"
  },
  {
    "id": "v_fukuoka_40_ohori_park",
    "country": "日本",
    "region": "大濠公園",
    "title": "大濠公園 & 福岡市美術館 (水景天鵝船/草間彌生南瓜)",
    "category": "spot",
    "cost": "公園免費 (天鵝船約1,000円)",
    "url": "https://www.ohorikouen.jp/",
    "mapsUrl": "https://maps.google.com/?q=大濠公園",
    "note": "📍福岡市中央區大濠公園\n🚇地鐵大濠公園站直通\n✨以杭州西湖為藍本的都會水景綠洲，環湖步道長2公里，可踩天鵝船漫遊。園內「福岡市美術館」戶外常設展出草間彌生黃底黑波點大南瓜！"
  },
  {
    "id": "v_fukuoka_41_kushida_shrine",
    "country": "日本",
    "region": "博多",
    "title": "櫛田神社 (博多總鎮守/常設巨型山笠神轎)",
    "category": "spot",
    "cost": "免費參觀",
    "url": "https://www.crossroadfukuoka.jp/spot/10705",
    "mapsUrl": "https://maps.google.com/?q=櫛田神社",
    "note": "📍福岡市博多區上川端町1-41\n🚇地鐵祇園站或中洲川端站步行5分鐘\n✨博多居民的心靈寄託「御櫛田先生」！境內常設高達十餘公尺的華麗「博多祇園山笠飾山」，還有千年夫婦銀杏樹與力石挑戰區。"
  },
  {
    "id": "v_fukuoka_42_nanzoin",
    "country": "日本",
    "region": "福岡",
    "title": "南藏院 (世界最大青銅釋迦涅槃像/開運聖地)",
    "category": "spot",
    "cost": "免費參拜 (進入佛像體內參觀 500円)",
    "url": "https://nanzoin.net/",
    "mapsUrl": "https://maps.google.com/?q=南藏院",
    "note": "📍福岡縣糟屋郡篠栗町大字篠栗839-1\n🚇JR福北豐線城戶南藏院前站步行3分鐘\n✨全長41公尺、高11公尺的世界最大青銅臥佛！住持曾多次中樂透頭獎而成為日本知名金運開運聖地，環境清幽古木參天。"
  },
  {
    "id": "v_fukuoka_43_teamlab_forest",
    "country": "日本",
    "region": "百道濱",
    "title": "teamLab Forest Fukuoka (光影互動數位森林)",
    "category": "spot",
    "cost": "成人門票約 2,200円",
    "url": "https://www.teamlab.art/zh-hant/e/forest/",
    "mapsUrl": "https://maps.google.com/?q=teamLab+Forest+Fukuoka",
    "note": "📍福岡市中央區地行濱2-2-6 (BOSS E·ZO FUKUOKA 5樓)\n⏰11:00–20:00\n🚇地鐵唐人町站步行15分鐘 (福岡巨蛋旁)\n✨以「捕捉與收集的森林」及「運動森林」為主題的夢幻沉浸式數位藝術，可用手機App捕捉光影動物並建立專屬圖鑑。"
  },
  {
    "id": "v_fukuoka_44_lalaport_gundam",
    "country": "日本",
    "region": "博多",
    "title": "三井LaLaport福岡 (實物大RX-93ff牛鋼彈)",
    "category": "spot",
    "cost": "免費觀賞 (商場購物餐飲另計)",
    "url": "https://mitsui-shopping-park.com/lalaport/fukuoka/",
    "mapsUrl": "https://maps.google.com/?q=LaLaport+福岡",
    "note": "📍福岡市博多區那珂6丁目23-1\n🚇JR竹下站步行9分鐘或博多站搭公車直達\n✨全高24.8公尺的實物大 ν(Nu)鋼彈立像！白天定時頭部手部動態展示，夜晚搭配背景大型巨幕聲光投影秀，館內有九州最大GUNDAM PARK。"
  },
  {
    "id": "v_fukuoka_45_motsunabe_oishi",
    "country": "日本",
    "region": "博多",
    "title": "牛腸鍋 大石 住吉店 (もつ鍋 おおいし)",
    "category": "food",
    "cost": "人均約 3,000円 ~ 4,500円",
    "url": "http://www.motu-oishi.com/",
    "mapsUrl": "https://maps.google.com/?q=もつ鍋+おおいし+住吉店",
    "note": "📍福岡市博多區住吉4丁目8-21\n⏰17:00–23:00 (週二公休，需預約)\n✨在地人心目中的牛腸鍋殿堂！以四種秘傳味噌調製的甘醇湯底最受歡迎，嚴選頂級國產牛小腸彈牙無腥味，收尾必加強棒麵 (Champon) 煮吸飽精華高湯！"
  },
  {
    "id": "v_fukuoka_46_motsunabe_maedaya",
    "country": "日本",
    "region": "博多",
    "title": "博多牛腸鍋 前田屋 總本店 (博多もつ鍋 前田屋)",
    "category": "food",
    "cost": "人均約 2,500円 ~ 4,000円",
    "url": "https://motsunabe-maedaya.com/",
    "mapsUrl": "https://maps.google.com/?q=博多もつ鍋+前田屋+総本店",
    "note": "📍福岡市博多區博多站前3-26-5\n⏰11:00–14:30, 17:00–24:00\n🚇JR博多站博多口步行5分鐘\n✨眾多日本職棒球星與藝人常訪名店！招牌「和牛牛腸鍋（醬油/味噌）」清爽回甘，必點小菜「胡麻鯖魚 (ゴマサバ)」與「炙燒明太子」。"
  },
  {
    "id": "v_fukuoka_47_mizutaki_nagano",
    "country": "日本",
    "region": "中洲",
    "title": "水炊雞肉鍋 長野 (百年老字號 水たき 長野)",
    "category": "food",
    "cost": "套餐約 3,300円起",
    "url": "https://tabelog.com/fukuoka/A4001/A400102/40000010/",
    "mapsUrl": "https://maps.google.com/?q=水たき+長野",
    "note": "📍福岡市博多區店屋町3-27\n⏰12:00–22:00 (週日公休，強烈建議提前1個月電話預約)\n✨福岡最經典百年水炊鍋老舖！清澄濃郁的母雞高湯先喝一碗暖胃，特製特軟雞肉球佐特調柚子醋，最後高湯煮成蛋花雜炊粥令人難忘。"
  },
  {
    "id": "v_fukuoka_48_hanamidori",
    "country": "日本",
    "region": "博多",
    "title": "博多 華味鳥 博多站前店 (銘柄雞水炊鍋料理)",
    "category": "food",
    "cost": "午餐約 1,800円 / 晚餐約 4,500円",
    "url": "https://www.hanamidori.net/",
    "mapsUrl": "https://maps.google.com/?q=博多華味鳥+博多駅前店",
    "note": "📍福岡市博多區博多站前3-23-17\n⏰11:30–14:00, 17:00–23:00\n🚇JR博多站步行3分鐘\n✨九州代表性連鎖名店，使用專屬養殖場「華味鳥」銘柄雞，肉質鮮嫩彈牙多汁，沾特製柑橘醋品嚐極度爽口，觀光客初訪水炊鍋首選。"
  },
  {
    "id": "v_fukuoka_49_ichiran_honten",
    "country": "日本",
    "region": "中洲",
    "title": "一蘭拉麵 總本社 (12層紅燈籠地標旗艦店)",
    "category": "food",
    "cost": "天然豚骨拉麵 980円起",
    "url": "https://ichiran.com/shop/kyushu/sohonten/",
    "mapsUrl": "https://maps.google.com/?q=一蘭+本社総本店",
    "note": "📍福岡市博多區中洲5-3-2\n⏰24小時營業！\n🚇地鐵中洲川端站2號出口直達\n✨整棟樓掛滿紅燈籠的一蘭全球總部！1樓為全日本唯一的「一蘭屋台館」，2樓為招牌味集中座位，拍照打卡與深夜宵夜第一名點。"
  },
  {
    "id": "v_fukuoka_50_hakata_issou",
    "country": "日本",
    "region": "博多",
    "title": "博多一雙 博多站東本店 (豚骨卡布奇諾拉麵)",
    "category": "food",
    "cost": "拉麵 800円起",
    "url": "http://www.hakata-issou.com/",
    "mapsUrl": "https://maps.google.com/?q=博多一雙+博多駅東本店",
    "note": "📍福岡市博多區博多站東3-1-6\n⏰11:00–24:00\n🚇JR博多站筑紫口步行6分鐘\n✨被譽為「拉麵界卡布奇諾」的超高人氣排隊王！三口高溫大鍋熬出濃厚脂泡（豚骨泡沫），湯頭濃醇甘甜，搭配極細直麵與炙燒叉燒令人回味。"
  },
  {
    "id": "v_fukuoka_51_shin_shin_tenjin",
    "country": "日本",
    "region": "天神",
    "title": "博多拉麵 Shin-Shin 天神本店 (清爽派豚骨排隊名店)",
    "category": "food",
    "cost": "博多Shin-Shin拉麵 760円",
    "url": "http://www.hakata-shinshin.com/",
    "mapsUrl": "https://maps.google.com/?q=博多らーめん+Shin-Shin+天神本店",
    "note": "📍福岡市中央區天神3丁目2-19\n⏰11:00–03:00 (營業至凌晨3點！)\n🚇地鐵天神站步行4分鐘\n✨日本藝人天團爭相造訪！牆上滿滿簽名板。豚骨結合佐賀古產雞骨與大量鮮蔬熬煮，湯頭純郁且順口不油膩，招牌一口餃子與炒拉麵也是必點！"
  },
  {
    "id": "v_fukuoka_52_mentaiju",
    "country": "日本",
    "region": "天神",
    "title": "元祖博多明太子飯 (元祖博多めんたい重)",
    "category": "food",
    "cost": "明太子重約 1,880円起",
    "url": "https://www.mentaiju.com/",
    "mapsUrl": "https://maps.google.com/?q=元祖博多めんたい重",
    "note": "📍福岡市中央區西中洲6-15\n⏰07:00–22:30 (早餐時段即開門！)\n🚇地鐵中洲川端站步行5分鐘\n✨日本第一間明太子料理專門店！高級漆器木盒盛裝熱白飯與海苔，鋪上昆布手工醃製的完整肥美明太子，淋上特製辣醬汁，早午餐排隊首選。"
  },
  {
    "id": "v_fukuoka_53_nakasu_yatai",
    "country": "日本",
    "region": "中洲",
    "title": "中洲屋台街 (那珂川河畔 昭和風居酒屋路邊攤)",
    "category": "food",
    "cost": "小吃每道約 600円 ~ 1,200円",
    "url": "https://yokanavi.com/yatai/",
    "mapsUrl": "https://maps.google.com/?q=中洲屋台街",
    "note": "📍福岡市博多區中洲1丁目 (那珂川通)\n⏰18:00–01:00 (各攤位營業時間不同，雨天可能休息)\n✨福岡越夜越熱鬧的經典風景！紅色布簾下品嚐炭火烤雞串、明太子煎蛋捲、關東煮與豚骨拉麵，體驗跟在地人並肩小酌的濃厚人情味。"
  },
  {
    "id": "v_fukuoka_54_yanagibashi",
    "country": "日本",
    "region": "渡邊通",
    "title": "柳橋連合市場 (博多的廚房/海鮮熟食市場)",
    "category": "food",
    "cost": "熟食小吃 200円 ~ 1,000円",
    "url": "https://yanagibashi-rengo.com/",
    "mapsUrl": "https://maps.google.com/?q=柳橋連合市場",
    "note": "📍福岡市中央區春吉1丁目5-1\n⏰08:00–17:00 (週日公休)\n🚇地鐵渡邊通站步行4分鐘\n✨昭和大正風情老市場！鮮魚店提供現切厚片刺身丼與海膽，必吃吉田鮮魚店、高木製菓的軟Q紅豆大福、以及現炸牛蒡魚板天婦羅。"
  },
  {
    "id": "v_fukuoka_55_itoshima_futamigaura",
    "country": "日本",
    "region": "絲島",
    "title": "櫻井二見之浦 夫婦岩 (海中純白鳥居/夕陽百選)",
    "category": "spot",
    "cost": "免費參觀",
    "url": "https://kanko-itoshima.jp/spot/futamigaura/",
    "mapsUrl": "https://maps.google.com/?q=櫻井二見之浦+夫婦岩",
    "note": "📍福岡縣絲島市志摩櫻井4433-1\n🚇JR筑前前原站轉乘公車或自駕約30分鐘\n✨絲島最經典地標！蔚藍玄界灘中矗立著神聖的白色大鳥居，與注連繩緊繫的夫婦岩相映成趣，夏至傍晚夕陽沉入兩岩之間更名列日本夕日百選。"
  },
  {
    "id": "v_fukuoka_56_itoshima_swing",
    "country": "日本",
    "region": "絲島",
    "title": "絲島椰子樹鞦韆 (活魚茶屋ざうお海灘)",
    "category": "spot",
    "cost": "免費拍照",
    "url": "https://kanko-itoshima.jp/",
    "mapsUrl": "https://maps.google.com/?q=ヤシの木ブランコ+絲島",
    "note": "📍福岡市西區小田79-6 (活魚茶屋ざうお本店前海灘)\n✨IG超火熱的無敵海景盪鞦韆！兩根高聳向海延伸的天然椰子樹架起鞦韆，背景是一望無際的蔚藍大海與白色沙灘，隨手一拍就是度假大片。"
  },
  {
    "id": "v_fukuoka_57_yanagawa_punting",
    "country": "日本",
    "region": "柳川",
    "title": "柳川觀光遊船 (水鄉人力擺渡扁舟巡禮)",
    "category": "spot",
    "cost": "乘船票約 1,600円 ~ 1,800円 (約70分鐘)",
    "url": "https://www.yanagawakk.co.jp/",
    "mapsUrl": "https://maps.google.com/?q=柳川遊船",
    "note": "📍福岡縣柳川市三橋町下百町1-6\n⏰09:00–17:00\n🚇西鐵柳川站步行3分鐘\n✨日本著名水鄉威尼斯！船夫頭戴斗笠手撐長竹篙，邊吟唱北原白秋民謠、邊熟練彎腰穿越石橋與垂柳花徑，四季各有不同水鄉風貌。"
  },
  {
    "id": "v_fukuoka_58_motoyoshiya_eel",
    "country": "日本",
    "region": "柳川",
    "title": "元祖 本吉屋 (300年傳統蒸籠鰻魚飯)",
    "category": "food",
    "cost": "特蒸籠鰻魚飯約 4,500円",
    "url": "https://www.motoyoshiya.jp/",
    "mapsUrl": "https://maps.google.com/?q=本吉屋+柳川",
    "note": "📍福岡縣柳川市旭町69\n⏰10:30–20:00 (週一公休)\n🚇西鐵柳川站步行10分鐘\n✨創立於天和元年(1681年)的蒸籠鰻魚飯創始鼻祖！白飯淋秘傳濃醇甜醬拌勻後鋪上香烤肥嫩蒲燒鰻與細蛋絲，置入杉木蒸籠再蒸透，香氣極致撲鼻！"
  },
  {
    "id": "v_shop_kawabata_d382f1",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "中洲",
    "category": "shop",
    "title": "川端通商店街 (博多最古老拱廊商街)",
    "cost": "自由逛街 / 小吃 300~1000円",
    "bgColor": "#10b981",
    "url": "https://www.hakata.or.jp/",
    "mapsUrl": "https://maps.google.com/?q=川端通商店街",
    "note": "📍福岡市博多区上川端町\n⏰約10:00–20:00 (依店家而定)\n🚇地鐵中洲川端站直結\n✨博多最古老的有頂拱廊商店街，全長超過400公尺，直接連通櫛田神社與博多座。常年展示壯觀的「博多祇園山笠」八番山笠神輿！必嚐老字號「川端善哉」烤麻糬紅豆湯圓、各式和菓子與平民居酒屋。"
  },
  {
    "id": "v_shop_shintencho_a91c2b",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "天神",
    "category": "shop",
    "title": "新天町商店街 (天神大鐘琴老牌商街)",
    "cost": "自由逛街 / 平價餐飲",
    "bgColor": "#10b981",
    "url": "https://www.shintencho.or.jp/",
    "mapsUrl": "https://maps.google.com/?q=新天町商店街",
    "note": "📍福岡市中央区天神2丁目9\n⏰10:00–20:00\n🚇西鐵福岡(天神)站步行1分鐘\n✨戰後福岡復興的代表性拱廊商街，中心廣場有全日本最大的機械大鐘琴塔「Merkur Tower」，整點會鳴鐘報時與人偶表演。聚集老牌書店、綠茶茶舖、博多烏龍麵、服飾精品與和食定食。"
  },
  {
    "id": "v_shop_tenjinchikagai_e4510c",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "天神",
    "category": "shop",
    "title": "天神地下街 (九州最大歐風地下商街)",
    "cost": "自由逛街 / 甜點 400~1500円",
    "bgColor": "#10b981",
    "url": "https://www.tenchika.com/",
    "mapsUrl": "https://maps.google.com/?q=天神地下街",
    "note": "📍福岡市中央区天神2丁目地下1-3号\n⏰10:00–20:00 (餐飲至21:00)\n🚇地鐵天神站 / 天神南站直接貫穿\n✨全九州規模最大的地下購物商街，全長590公尺，以19世紀南歐石板街道與鑄鐵藤蔓拱頂精心打造，氛圍極致優雅。串連所有天神各大百貨，聚集流行時裝、文具雜貨、BAKE/RINGO等超人氣甜點排隊名店。"
  },
  {
    "id": "v_shop_nishijin_b87431",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "西新",
    "category": "shop",
    "title": "西新商店街 (傳統大八車庶民美食街)",
    "cost": "平民小吃 100~800円",
    "bgColor": "#10b981",
    "url": "https://nishijin.fukuoka.jp/",
    "mapsUrl": "https://maps.google.com/?q=西新商店街",
    "note": "📍福岡市早良区西新\n⏰午後開始最熱鬧 (約13:00–18:00)\n🚇地鐵空港線西新站步行1分鐘\n✨福岡最富市井人情味的庶民廚房！最具特色的是午後街中央整排擺攤的「大八車小販 (リヤカー部隊)」，販售自家現摘蔬菜、手作醬菜、蒸地瓜與魚丸。沿途還有蜂樂饅頭、鯛魚燒、排隊炸雞與古早味生活雜貨。"
  },
  {
    "id": "v_shop_tojinmachi_c198a2",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "大濠公園",
    "category": "shop",
    "title": "唐人町商店街 (大濠公園旁昭和人情街)",
    "cost": "小吃 150~600円",
    "bgColor": "#10b981",
    "url": "https://www.tojinmachi.net/",
    "mapsUrl": "https://maps.google.com/?q=唐人町商店街",
    "note": "📍福岡市中央区唐人町1丁目\n⏰10:00–19:00\n🚇地鐵唐人町站出站即達\n✨緊鄰大濠公園與福岡巨蛋，擁有數百年歷史的下町傳統拱頂商街。黑門市集、老字號豆腐店、現炸牛肉可樂餅、手工黑糖饅頭與家庭式洋食。看球賽或散步大濠公園前後必訪的溫馨補給站。"
  },
  {
    "id": "v_shop_yanagibashi_f72381",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "渡邊通",
    "category": "shop",
    "title": "柳橋連合市場 (昭和生鮮海鮮美食街)",
    "cost": "海鮮丼 1000~2000円 / 炸物 150円",
    "bgColor": "#10b981",
    "url": "https://yanagibashi-rengo.com/",
    "mapsUrl": "https://maps.google.com/?q=柳橋連合市場",
    "note": "📍福岡市中央区春吉1丁目5-1\n⏰08:00–17:00 (週日公休)\n🚇地鐵渡邊通站步行約5分鐘\n✨被譽為「博多的廚房」！全長約100公尺的有頂商街，昭和風情濃厚，集結新鮮博多灣漁獲、現炸高湯天婦羅肉餅、明太子專門店與和菓子老店「原口商店」。市場內藏有多家平價海鮮丼與立吞生魚片小店。"
  },
  {
    "id": "v_shop_minoshima_91e0a4",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "博多",
    "category": "shop",
    "title": "美野島商店街 (昭和懷舊深度老街)",
    "cost": "百元熟食便當 / 炸物 100~500円",
    "bgColor": "#10b981",
    "url": "https://www.crossroadfukuoka.jp/spot/13217",
    "mapsUrl": "https://maps.google.com/?q=美野島商店街",
    "note": "📍福岡市博多区美野島2丁目\n⏰午後傍晚最熱鬧\n🚇從博多站搭巴士約8分鐘 (美野島一丁目站)\n✨遠離觀光喧囂、在地福岡人的寶藏老街！完整保留昭和年代的木造店舖與招牌，肉鋪現炸熱騰騰的可樂餅、古早味日式惣菜熟食、超平價百元便當、老派喫茶店，極具生活氣息與復古拍照氛圍。"
  },
  {
    "id": "v_shop_uomachi_a3481f",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "小倉",
    "category": "shop",
    "title": "魚町銀天街 (日本第一座拱廊天幕商街)",
    "cost": "自由逛街 / 美食 500~1500円",
    "bgColor": "#10b981",
    "url": "https://uomachi.or.jp/",
    "mapsUrl": "https://maps.google.com/?q=魚町銀天街",
    "note": "📍北九州市小倉北区魚町\n⏰10:00–20:00 (餐飲至深夜)\n🚇JR小倉站小倉城口步行3分鐘\n✨1951年誕生、全日本第一座「アーケード (有蓋天幕拱廊)」發祥地！商街綿延四通八達，直通旦過市場。必訪「辻利茶舖」宇治抹茶聖代冰品、「シロヤ (白頭鷲)」排隊煉乳法式小麵包，還有小倉發祥炒烏龍麵。"
  },
  {
    "id": "v_shop_tanga_89d31c",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "小倉",
    "category": "shop",
    "title": "旦過市場 (小倉百年食之寶庫)",
    "cost": "大學丼 / 小吃 500~1200円",
    "bgColor": "#10b981",
    "url": "https://tanga-ichiba.jp/",
    "mapsUrl": "https://maps.google.com/?q=旦過市場",
    "note": "📍北九州市小倉北区魚町4丁目\n⏰10:00–18:00 (週日休攤較多)\n🚇北九州單軌電車旦過站旁\n✨大正時代延續至今、被稱作「北九州的廚房」。最熱門體驗是在館內買一碗白飯，沿途挑選各攤新鮮生魚片、關東煮黑輪、炙燒牛肉組合成專屬「大學丼」！雖然經歷修復，但仍保留滿滿熱情活力。"
  },
  {
    "id": "v_shop_mojiko_sakae_7718e2",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "門司港",
    "category": "shop",
    "title": "門司港榮町銀天街 (大正大正昭和復古街)",
    "cost": "逛街 / 咖啡小食 300~1000円",
    "bgColor": "#10b981",
    "url": "https://sakaemachi.info/",
    "mapsUrl": "https://maps.google.com/?q=門司港栄町銀天街",
    "note": "📍北九州市門司区栄町\n⏰10:00–18:00\n🚇JR門司港站步行約8分鐘\n✨門司港懷舊區旁充滿人情味的昭和拱廊老街。避開觀光人潮，這裡藏著在地人才知道的燒咖哩小店、純喫茶店「梅月」、手作工藝選物、老書店與章魚燒小攤，散發溫暖寧靜的大正海港日常風情。"
  },
  {
    "id": "v_shop_yunotsubo_d91024",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "由布院",
    "category": "shop",
    "title": "由布院湯之坪街道 (九州第一名渡假散策街)",
    "cost": "散策小吃 300~1500円",
    "bgColor": "#10b981",
    "url": "https://www.yufuin.gr.jp/",
    "mapsUrl": "https://maps.google.com/?q=湯の坪街道",
    "note": "📍大分県由布市湯布院町川上\n⏰約09:30–17:30 (傍晚店家較早打烊)\n🚇JR由布院站出站步行約5分鐘直通\n✨全九州超人氣童話風商店街！沿著潺潺清流直通金鱗湖，抬頭可見由布岳美景。必吃排隊「金賞可樂餅」、B-Speak 生乳捲、Snoopy 茶屋、Miffy 森林麵包店、由布院布丁銅鑼燒與手作木工陶藝店。"
  },
  {
    "id": "v_shop_takegawara_41a89c",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "別府",
    "category": "shop",
    "title": "別府竹瓦小路商店街 (登錄文化財木造拱廊)",
    "cost": "溫泉泡湯 300円 / 散策免費",
    "bgColor": "#10b981",
    "url": "https://www.city.beppu.oita.jp/sisetu/shougyou/takegawara.html",
    "mapsUrl": "https://maps.google.com/?q=竹瓦小路アーケード",
    "note": "📍大分県別府市元町\n⏰全天開放 (周邊店家至深夜)\n🚇JR別府站東口步行約8分鐘\n✨建於1921年、日本現存最古老的木造拱廊拱頂商店街！已被指定為日本登錄有形文化財。木造透光格子天棚充滿大正浪漫氛圍，穿過小路即可抵達百年地熱「竹瓦溫泉」，是造訪別府溫泉鄉必拍之經典古街道。"
  },
  {
    "id": "v_shop_beppu_ginza_a0182f",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "別府",
    "category": "shop",
    "title": "別府 Sol Paseo 銀座 (天狗守護熱鬧拱廊街)",
    "cost": "居酒屋 / 冷麵 800~2000円",
    "bgColor": "#10b981",
    "url": "https://www.beppu-navi.jp/",
    "mapsUrl": "https://maps.google.com/?q=ソルパセオ銀座",
    "note": "📍大分県別府市北浜1丁目\n⏰全天 (白天購物、傍晚居酒屋熱鬧)\n🚇JR別府站東口步行約5分鐘\n✨別府市區最繁華熱鬧的拱頂商店街，入口懸掛著巨大避邪「別府天狗神輿面具」！商街內聚集傳統大分鄉土料理、別府冷麵、關東煮酒場、居酒屋、溫泉饅頭與藥妝伴手禮，越夜越有活力。"
  },
  {
    "id": "v_shop_beppu_ekimae_7781ca",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "別府",
    "category": "shop",
    "title": "べっぷ駅市場 (高架下昭和懷舊熟食街)",
    "cost": "熟食炸雞小吃 100~600円",
    "bgColor": "#10b981",
    "url": "https://beppu-eki-ichiba.com/",
    "mapsUrl": "https://maps.google.com/?q=べっぷ駅市場",
    "note": "📍大分県別府市中央町6-22\n⏰08:00–18:00 (週日休攤較多)\n🚇JR別府站高架下直達步行2分鐘\n✨緊鄰鐵路高架下的昭和復古生活市集。名物「別府炸雞天婦羅 (とり天)」、現捏紅豆萩餅、剛出爐的魚板天婦羅、新鮮水果蔬菜。攤商親切熱情，最能感受別府庶民柴米油鹽與溫暖人情味。"
  },
  {
    "id": "v_shop_galleria_takemachi_e3391b",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "大分市區",
    "category": "shop",
    "title": "大分ガレリア竹町 (西日本最寬穹頂商街)",
    "cost": "自由逛街 / 餐飲 500~2000円",
    "bgColor": "#10b981",
    "url": "https://galleria-takemachi.com/",
    "mapsUrl": "https://maps.google.com/?q=ガレリア竹町",
    "note": "📍大分県大分市中央町1丁目\n⏰10:00–20:00 (餐飲至深夜)\n🚇JR大分站府內中央口步行約6分鐘\n✨西日本最寬敞的大型拱廊商街之一！開閉式玻璃圓頂長廊、巨大的葡萄牙帆船裝置藝術紀念中日交流史。商街寬達數十公尺，乾淨明亮，匯集特色咖啡館、大分縣產海鮮居酒屋、時裝雜貨與手工烘焙。"
  },
  {
    "id": "v_shop_centporta_chuo_5518dc",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "大分市區",
    "category": "shop",
    "title": "セントポルタ中央町 (大分車站前核心繁華街)",
    "cost": "自由逛街 / 特產伴手禮",
    "bgColor": "#10b981",
    "url": "https://centporta.jp/",
    "mapsUrl": "https://maps.google.com/?q=セントポルタ中央町",
    "note": "📍大分県大分市中央町2丁目\n⏰10:00–21:00\n🚇JR大分站正前方步行2分鐘\n✨從大分車站前延伸而出、大分市最主要的購物商街！明亮的綠意挑高天幕，免受日曬雨淋。聚集各大品牌藥妝、大分乾香菇/柑橘特產名物店、平價拉麵與連鎖餐飲，是暢遊大分市中心的必經樞紐。"
  },
  {
    "id": "v_shop_hita_mameda_6619ef",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "日田",
    "category": "shop",
    "title": "日田豆田町商店街 (九州小京都江戶天領古街)",
    "cost": "日田木屐 1000~3000円 / 鰻魚飯 2500円",
    "bgColor": "#10b981",
    "url": "https://oidehita.com/archives/mamedamachi",
    "mapsUrl": "https://maps.google.com/?q=豆田町商店街",
    "note": "📍大分県日田市豆田町\n⏰09:30–17:00\n🚇JR日田站步行約15分鐘\n✨江戶時代作為幕府直轄天領繁榮的古都商街，完整保存白壁土藏與黑瓦屋舍！沿街盛產手工日田杉木屐、百年味噌醬油「原次郎左衛門」、日田羊羹老店，以及著名的日田蒸籠鰻魚飯（戶山鰻魚）。"
  },
  {
    "id": "v_shop_bungotakada_showa_b0021c",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "豐後高田",
    "category": "shop",
    "title": "豐後高田 昭和之町 (時光倒流昭和30年代老街)",
    "cost": "柑仔店零食 50~300円 / 懷舊展館 600円",
    "bgColor": "#10b981",
    "url": "https://www.showanomachi.com/",
    "mapsUrl": "https://maps.google.com/?q=豊後高田+昭和の町",
    "note": "📍大分県豊後高田市高田\n⏰10:00–17:00\n🚇從JR宇佐站搭巴士約10分鐘\n✨完美重現日本昭和30年代黃金歲月的復古主題商街！由新町、中央通等數條老商店街組成。沿途有古早味柑仔店、老肉舖現炸可樂餅、昭和老爺巴士巡迴，以及珍貴的童玩博物館，拍照散策超有風味。"
  },
  {
    "id": "v_shop_iwataya_fuk_9102",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "天神",
    "category": "shop",
    "title": "岩田屋本店 (九州最老牌頂級名品百貨)",
    "cost": "國際精品 / 化妝品 / B2甜點",
    "bgColor": "#10b981",
    "url": "https://www.iwataya-mitsukoshi.mistore.jp/iwataya.html",
    "mapsUrl": "https://maps.google.com/?q=岩田屋本店",
    "note": "📍福岡市中央区天神2丁目5-35\n⏰10:00–20:00\n🚇西鐵福岡(天神)站步行3分鐘\n✨創立於1754年、九州最具代表性的老字號高級百貨！本館與新館林立，集結 Hermès、Chanel、Celine、Gucci 等頂級奢華精品專櫃與頂級保養美妝。B2地下美食街是福岡高級甜點與頂級伴手禮天花板。"
  },
  {
    "id": "v_shop_mitsukoshi_fuk_8812",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "天神",
    "category": "shop",
    "title": "福岡三越 (車站共構老牌貴婦百貨)",
    "cost": "百貨專櫃 / 市區機場免稅店",
    "bgColor": "#10b981",
    "url": "https://www.iwataya-mitsukoshi.mistore.jp/mitsukoshi.html",
    "mapsUrl": "https://maps.google.com/?q=福岡三越",
    "note": "📍福岡市中央区天神2丁目1-1\n⏰10:00–20:00\n🚇西鐵天神站與天神高速巴士總站直結共構\n✨地理位置最核心！交通最無敵的車站百貨。9樓設有「福岡市區機場型免稅店 (Duty Free)」，在市區買好可直接到福岡機場出境提領。地下二樓食品街「ラ・カーヴ (La Cave)」匯集日本各地名酒、法式甜點與頂級惣菜。"
  },
  {
    "id": "v_shop_daimaru_fuk_3310",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "天神",
    "category": "shop",
    "title": "大丸福岡天神店 (雙塔綠蔭中庭購物地標)",
    "cost": "百貨精品 / 外國人退稅服務",
    "bgColor": "#10b981",
    "url": "https://www.daimaru-fukuoka.jp/",
    "mapsUrl": "https://maps.google.com/?q=大丸福岡天神店",
    "note": "📍福岡市中央区天神1丁目4-1\n⏰10:00–20:00\n🚇地鐵天神南站直通 / 西鐵天神站步行3分鐘\n✨由「本館」與「東館 Elgala (エルガーラ)」兩棟雄偉雙塔組成，中央貫穿歐風綠蔭走廊「Passage 廣場」，常有市集與音樂演奏。化妝品專櫃陣容齊全，國際大牌林立，並設有外國遊客專屬退稅服務中心。"
  },
  {
    "id": "v_shop_parco_fuk_7721",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "天神",
    "category": "shop",
    "title": "福岡 PARCO (動漫周邊與日系流行潮流殿堂)",
    "cost": "流行服飾 / 動漫文創 500~5000円",
    "bgColor": "#10b981",
    "url": "https://fukuoka.parco.jp/",
    "mapsUrl": "https://maps.google.com/?q=福岡PARCO",
    "note": "📍福岡市中央区天神2丁目11-1\n⏰10:00–20:30 (餐飲至22:00)\n🚇地鐵空港線天神站7號出口直通\n✨年輕人與動漫迷最瘋狂的潮流百貨！8樓是吉伊卡哇專賣店 (Chiikawa)、迪士尼商店、CAPCOM 專賣店、動漫周邊 Animate、Kiddy Land；B1 有極樂排隊美食街「Oishii Kome 極味屋漢堡排」！"
  },
  {
    "id": "v_shop_minatenjin_5502",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "天神",
    "category": "shop",
    "title": "mina天神 (九州最大UNIQLO與GU旗艦館)",
    "cost": "平價日系服飾 / 生活雜貨",
    "bgColor": "#10b981",
    "url": "https://www.mina-tenjin.com/",
    "mapsUrl": "https://maps.google.com/?q=mina天神",
    "note": "📍福岡市中央区天神4丁目3-8\n⏰10:00–20:00\n🚇地鐵天神站步行3分鐘\n✨2023年全新改裝大升級！坐擁「全九州最大規模的 UNIQLO 旗艦店」與「全九州最大 GU」，還有大型無印良品、Loft、JINS 眼鏡、Seria 百元商店，是採買高質感平價服飾與生活雜貨的最強一站式商場。"
  },
  {
    "id": "v_shop_solaria_plaza_4420",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "天神",
    "category": "shop",
    "title": "索拉利亞廣場 SOLARIA PLAZA (挑高中庭女性時尚)",
    "cost": "流行時裝 / 景觀餐廳",
    "bgColor": "#10b981",
    "url": "https://solariaplaza.com/",
    "mapsUrl": "https://maps.google.com/?q=ソラリアプラザ",
    "note": "📍福岡市中央区天神2丁目2-43\n⏰10:00–20:30 (餐廳至23:00)\n🚇西鐵福岡(天神)站直結\n✨以壯觀挑高中庭與優雅採光聞名的高質感女性時尚商場。進駐眾多日系輕熟女時裝品牌、精緻飾品配件、美妝雜貨，頂樓6-7樓擁有豐富的異國美食景觀餐廳與人氣早午餐咖啡館。"
  },
  {
    "id": "v_shop_hakata_hankyu_1109",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "博多",
    "category": "shop",
    "title": "博多阪急百貨 (博多站共構名媛甜點百貨)",
    "cost": "化妝品 / 伴手禮 / 外國人5%優惠",
    "bgColor": "#10b981",
    "url": "https://www.hankyu-dept.co.jp/hakata/",
    "mapsUrl": "https://maps.google.com/?q=博多阪急",
    "note": "📍福岡市博多区博多駅中央街1-1\n⏰10:00–20:00\n🚇JR博多站直通共構\n✨博多車站門戶最具代表性百貨！地下 B1「うまちか！(Umachika)」是九州伴手禮終極戰區，CLUB HARIE 年輪蛋糕、Sugar Butter Tree 等排隊名點一應俱全。憑外國護照可先至服務台兌換 95折 (5% OFF) 優惠券！"
  },
  {
    "id": "v_shop_amu_hakata_2290",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "博多",
    "category": "shop",
    "title": "AMU PLAZA 博多 (九州最大車站購物地標)",
    "cost": "潮流服飾 / Hands / 頂樓展望台",
    "bgColor": "#10b981",
    "url": "https://www.jrhakatacity.com/",
    "mapsUrl": "https://maps.google.com/?q=アミュプラザ博多",
    "note": "📍福岡市博多区博多駅中央街1-1\n⏰10:00–20:00 (餐廳11:00–23:00)\n🚇JR博多站直通\n✨日本最大規模車站共構複合商場之一！1-8樓進駐 Hands、寶可夢中心 (Pokémon Center)、流行服飾；9-10樓「City Dining Kuten」匯聚40多間九州最強美食名店；頂樓「燕之杜廣場」擁有免費展望台與鐵道神社。"
  },
  {
    "id": "v_shop_kitte_hakata_6610",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "博多",
    "category": "shop",
    "title": "KITTE 博多 / 博多丸井 (站前流行女鞋與平價美食)",
    "cost": "日系雜貨 / 餐廳居酒屋",
    "bgColor": "#10b981",
    "url": "https://kitte-hakata.jp/",
    "mapsUrl": "https://maps.google.com/?q=KITTE博多",
    "note": "📍福岡市博多区博多駅中央街9-1\n⏰10:00–21:00 (餐廳11:00–23:00)\n🚇JR博多站博多口步行1分鐘 (2樓有連通天橋)\n✨地標巨大「紅心眼金郵筒」！1-7樓為博多丸井百貨 (OIOI)，以舒適好穿的日系女鞋、包包與生活雜貨聞名。B1與9-10樓「うまいと (Umai to)」美食街匯聚超多平價特色拉麵、炸豬排、牛舌與居酒屋。"
  },
  {
    "id": "v_shop_canal_city_3389",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "博多",
    "category": "shop",
    "title": "博多運河城 (全方位綜合娛樂水舞購物商城)",
    "cost": "逛街 / 免費水舞秀 / 拉麵競技場",
    "bgColor": "#10b981",
    "url": "https://canalcity.co.jp/",
    "mapsUrl": "https://maps.google.com/?q=キャナルシティ博多",
    "note": "📍福岡市博多区住吉1丁目2\n⏰10:00–21:00 (餐廳至23:00)\n🚇地鐵櫛田神社前站步行3分鐘 / 博多站步行約10分鐘\n✨「城中之城」曲線前衛建築！中央人工運河定時上演壯觀水舞音樂光雕秀。內有集結全日本頂級拉麵的「拉麵競技場」、九州最大 Alpen Fukuoka 戶外運動旗艦店、Sanrio 專賣店、無印良品與大型免稅店。"
  },
  {
    "id": "v_shop_lalaport_fuk_9901",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "博多",
    "category": "shop",
    "title": "LaLaport 福岡 (實體等身大ν鋼彈話題商城)",
    "cost": "鋼彈打卡 / 親子娛樂 / 購物",
    "bgColor": "#10b981",
    "url": "https://mitsui-shopping-park.com/lalaport/fukuoka/",
    "mapsUrl": "https://maps.google.com/?q=ららぽーと福岡",
    "note": "📍福岡市博多区那珂6丁目23-1\n⏰10:00–21:00\n🚇JR竹下站步行9分鐘 / 博多站搭直達巴士約20分鐘\n✨正門矗立24.8公尺高「1:1 實體等身大 ν鋼彈」超震撼地標！日夜有不同燈光音效機甲展演。館內設有 GUNDAM PARK 鋼彈基地、KidZania 兒童職業體驗城、九州特色大型美食廣場，親子旅遊必踩景點。"
  },
  {
    "id": "v_shop_markis_momochi_7781",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "百道濱",
    "category": "shop",
    "title": "MARK IS 福岡百道 (海濱百道巨蛋旁大型商場)",
    "cost": "休閒服飾 / 超市 / 景觀散策",
    "bgColor": "#10b981",
    "url": "https://mec-markis.jp/fukuoka-momochi/",
    "mapsUrl": "https://maps.google.com/?q=マークイズ福岡ももち",
    "note": "📍福岡市中央区地行浜2丁目2-1\n⏰10:00–21:00\n🚇地鐵唐人町站步行約10分鐘 / 鄰近福岡PayPay巨蛋\n✨福岡西區海濱最大規模的家庭休閒購物中心！與福岡巨蛋有專用天橋連接，集合大型電影院、NITORI宜得利家居、大型超市 HalloDay、Uniqlo 與多家海景咖啡廳，看球賽演唱會或遊覽福岡塔必逛。"
  },
  {
    "id": "v_shop_izutsuya_kokura_1204",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "小倉",
    "category": "shop",
    "title": "小倉井筒屋本店 (北九州唯一百年老字號百貨)",
    "cost": "名牌精品 / 北九州銘菓伴手禮",
    "bgColor": "#10b981",
    "url": "https://www.izutsuya.co.jp/storelist/kokura/",
    "mapsUrl": "https://maps.google.com/?q=小倉井筒屋",
    "note": "📍北九州市小倉北区船場町1-1\n⏰10:00–19:00\n🚇JR小倉站步行8分鐘 / 緊鄰小倉城與紫川畔\n✨創立於1935年，北九州地區唯一的正統老字號高級百貨！由本館與新館兩座大樓組成。環境優雅寧靜，專櫃包含國際精品、高端美妝、小倉特產工藝與地酒伴手禮，散步小倉城後體驗尊榮購物。"
  },
  {
    "id": "v_shop_amu_kokura_5583",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "小倉",
    "category": "shop",
    "title": "AMU PLAZA 小倉 (小倉新幹線車站共構百貨)",
    "cost": "站前購物 / 北九州特產伴手禮",
    "bgColor": "#10b981",
    "url": "https://www.amuplaza.jp/",
    "mapsUrl": "https://maps.google.com/?q=アミュプラザ小倉",
    "note": "📍北九州市小倉北区浅野1丁目1-1\n⏰10:00–20:00 (餐廳11:00–22:00)\n🚇JR小倉站直通共構\n✨與新幹線、在來線及北九州單軌電車零距離直通！東館與西館匯集流行時裝、帽子飾品、日系雜貨。地下與1樓「小倉銘品藏」匯聚門司港燒咖哩調理包、明太子、小倉銘菓，搭車前後補貨最首選。"
  },
  {
    "id": "v_shop_saintcity_kokura_3401",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "小倉",
    "category": "shop",
    "title": "SAINTcity (小倉站前超大型LOFT與平價時尚)",
    "cost": "生活雜貨 / GU / 無印良品",
    "bgColor": "#10b981",
    "url": "https://saintcity.net/",
    "mapsUrl": "https://maps.google.com/?q=セントシティ",
    "note": "📍北九州市小倉北区京町3丁目1-1\n⏰10:00–20:00\n🚇JR小倉站小倉城口天橋直連步行1分鐘\n✨小倉站前最醒目的地標購物大樓！擁有北九州最大規模的「LOFT」(佔據整層6樓，文具美妝與生活創意雜貨極為豐富)，還有大型無印良品、UNIQLO、GU、家電館，是採購生活雜貨的超強基地。"
  },
  {
    "id": "v_shop_theoutlets_kitakyushu_6620",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "小倉",
    "category": "shop",
    "title": "THE OUTLETS KITAKYUSHU (九州最大美式Outlet)",
    "cost": "名牌折扣 3~7折 / 親子休閒",
    "bgColor": "#10b981",
    "url": "https://the-outlets-kitakyushu.aeonmall.com/",
    "mapsUrl": "https://maps.google.com/?q=THE+OUTLETS+KITAKYUSHU",
    "note": "📍北九州市八幡東区東田4丁目1-1\n⏰10:00–20:00\n🚇JR鹿兒島本線「太空世界站 (Space World)」出站步行2分鐘\n✨九州規模最大的開放式大型 Outlet 購物中心！進駐近170家國內外知名運動戶外品牌 (Nike, Adidas, Mont-bell) 與時尚精品折扣店。園區綠意開闊，連通永旺夢樂城八幡東，適合安排半天尋寶血拼。"
  },
  {
    "id": "v_gmap_240dc5fc",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "熊本市區",
    "title": "加藤神社 (熊本城境內最佳天守閣眺望點)",
    "category": "spot",
    "cost": "免費參觀",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=加藤神社+熊本",
    "note": "📍熊本県熊本市中央区本丸2-1\n⏰06:00–17:00\n🚇熊本市電「熊本城・市役所前」站步行約10分鐘\n✨奉祀戰國名將加藤清正，位於熊本城本丸旁，是仰望熊本城大天守與小天守的絕佳私房攝影視角。"
  },
  {
    "id": "v_gmap_89ba35b0",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "熊本市區",
    "title": "熊本城稻荷神社 (熊本千本鳥居祈福名所)",
    "category": "spot",
    "cost": "免費參觀",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=熊本城稲荷神社",
    "note": "📍熊本県熊本市中央区本丸3-13\n⏰境內全日開放 (社務所 09:00–17:00)\n🚇熊本市電「市役所前」站步行約3分鐘\n✨加藤清正建造熊本城時作為守護神勸請而來，以醒目的紅色朱塗千本鳥居、祈求五穀豐收、商業繁盛與厄除開運聞名。"
  },
  {
    "id": "v_gmap_f5f40a07",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "黑川溫泉",
    "title": "黑川溫泉街 (米其林二星秘湯溫泉手形巡禮)",
    "category": "spot",
    "cost": "露天入湯手形約 1,500円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=黑川溫泉",
    "note": "📍熊本県阿蘇郡南小国町満願寺黒川\n⏰各露天風呂開放時間約 08:30–21:00\n🚗阿蘇站轉乘巴士約50分鐘 / 租車自駕前往\n✨米其林二星綠色指南推薦！保留江戶時代懷舊山峽風貌，購買木製入湯手形可任選三家露天風呂泡湯，散步於清幽溪流與燈籠木造建築間。"
  },
  {
    "id": "v_gmap_7b4896bd",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "熊本市區",
    "title": "上通商店街 (熊本文青咖啡與洋風拱廊商街)",
    "category": "shop",
    "cost": "依各店消費",
    "bgColor": "#a29bfe",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=上通商店街+熊本",
    "note": "📍熊本県熊本市中央区上通町\n⏰約10:00–20:00 (各店不同)\n🚇熊本市電「通町筋」站下車即達\n✨全長約600公尺，挑高歐風採光圓拱頂。氣氛高雅且文藝，匯集老字號書店、洋服精品、風格咖啡館、古道具店與藥妝服飾。"
  },
  {
    "id": "v_gmap_9ca23f12",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "熊本市區",
    "title": "下通商店街 (熊本規模最大熱鬧拱廊商業街)",
    "category": "shop",
    "cost": "依各店消費",
    "bgColor": "#a29bfe",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=下通商店街+熊本",
    "note": "📍熊本県熊本市中央区下通\n⏰約10:00–21:00 (餐飲居酒屋營業至深夜)\n🚇熊本市電「通町筋」站或「花畑町」站\n✨熊本最大繁華街！寬15公尺、長達511公尺的巨大遮雨拱廊，藥妝店(松本清/大國)、唐吉訶德、蜂樂饅頭、生馬肉料理、拉麵店與服飾百貨林立。"
  },
  {
    "id": "v_gmap_021aaacf",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "熊本市區",
    "title": "AMU PLAZA 熊本 (JR熊本站直通旗艦商場/立體瀑布花園)",
    "category": "shop",
    "cost": "依各店消費",
    "bgColor": "#a29bfe",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=アミュプラザくまもと",
    "note": "📍熊本県熊本市西区春日3-15-26\n⏰商場 10:00–20:00 / 餐廳 11:00–22:00\n🚇JR「熊本站」白川口出站直通\n✨2021年全新開幕！中庭擁有高達10公尺的超震撼室內立體水景瀑布與綠意花園，進駐Bic Camera、Uniqlo、肥後よかもん市場美食街與九州伴手禮專區。"
  },
  {
    "id": "v_gmap_b3770f74",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "熊本市區",
    "title": "水前寺成趣園 (桃山式回遊庭園/小富士山造景)",
    "category": "spot",
    "cost": "門票 成人400円 / 中小學生200円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=水前寺成趣園",
    "note": "📍熊本県熊本市中央区水前寺公園8-1\n⏰08:30–17:00 (3–10月至18:00)\n🚇熊本市電「水前寺公園」站步行約4分鐘\n✨江戶初期熊本藩主細川忠利所建名園。引阿蘇伏流水造池，庭園造景比照東海道五十三次，最經典的是宛如富士山的迷你人造圓丘「水前寺富士」，景色秀麗優雅。"
  },
  {
    "id": "v_gmap_b527cc7a",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "熊本市區",
    "title": "熊本熊廣場 (部長辦公室/Kumamon見面會)",
    "category": "spot",
    "cost": "免費入場 (見面會建議提早排隊)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=くまモンスクエア",
    "note": "📍熊本県熊本市中央区手取本町8-2 テトリアくまもとビル1F\n⏰10:00–19:00 (表演場次請查官網)\n🚇熊本市電「水道町」站步行1分鐘\n✨熊本熊營業部長的大本營！可參觀部長專屬辦公桌合影留念，觀看酷萌的本尊現場舞蹈表演，並選購熊本熊限定周邊商品與特色甜點。"
  },
  {
    "id": "v_gmap_ed690fc1",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "阿蘇",
    "title": "草千里之濱 (阿蘇壯闊火山口綠色原野/騎馬體驗)",
    "category": "spot",
    "cost": "免費參觀 / 騎馬體驗約 1,500円起",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=草千里ヶ浜",
    "note": "📍熊本県阿蘇市赤水\n⏰全天開放 (阿蘇火山博物館 09:00–17:00)\n🚗阿蘇站轉乘產交巴士直達「草千里阿蘇火山博物館前」\n✨阿蘇最具代表性的絕景！烏帽子岳北麓直徑一公里的廣大雙重火口盆地，翠綠草原中有著雨水形成的雙水池，放牧的馬群悠閒吃草，背後是冒著白煙的阿蘇中岳。"
  },
  {
    "id": "v_gmap_9da84e0c",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "阿蘇",
    "title": "阿蘇中岳火山口 (世界最大級活火山噴煙奇觀)",
    "category": "spot",
    "cost": "阿蘇山火山口接駁車單程約 600円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=阿蘇山火口",
    "note": "📍熊本県阿蘇市黒川\n⏰08:30–17:30 (火山瓦斯濃度過高或警戒時會管制管制)\n🚗阿蘇火口接駁車自阿蘇山上廣場搭乘約5分鐘\n✨世界上少數能近距離觀察活火山口的壯闊景點！直徑超過600公尺、深130公尺的火山口中湧動著翡翠碧綠色的強酸熱水，白色硫磺蒸氣不斷升騰，極度震撼。"
  },
  {
    "id": "v_gmap_de45dc1f",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "熊本市區",
    "title": "SAKURA MACHI 櫻町熊本 (複合巨型商業設施/巨型熊本熊天台)",
    "category": "shop",
    "cost": "依各店消費",
    "bgColor": "#a29bfe",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=SAKURA+MACHI+Kumamoto",
    "note": "📍熊本県熊本市中央区桜町3-10\n⏰10:00–20:00 (餐廳至22:00)\n🚇熊本市電「辛島町」站步行約2分鐘 / 熊本櫻町巴士總站共構\n✨與熊本主要客運轉運站結合的超大型地標購物中心！頂樓空中花園座落著約4公尺高的超大熊本熊塑像，商場集結敘敘苑、熊本拉麵、百貨專櫃與TOHO影城。"
  },
  {
    "id": "v_gmap_e45f0fae",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "熊本市區",
    "title": "櫻之馬場 城彩苑 (江戶時代城下町美食街/湧々座)",
    "category": "food",
    "cost": "散策免費 / 櫻之小路各店消費",
    "bgColor": "#ff6b6b",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=桜の馬場+城彩苑",
    "note": "📍熊本県熊本市中央区二の丸1-1-1\n⏰櫻之小路名店街 09:00–18:00 (餐廳至 21:00)\n🚇熊本市電「熊本城・市役所前」站步行約5分鐘\n✨熊本城腳下的江戶復古風城下町！集結23間精選美食伴手禮名店，必吃現炸馬肉可樂餅、辛子蓮根、陣太鼓軟霜淇淋與太平燕，並設有歷史文化體驗館「湧々座」。"
  },
  {
    "id": "v_gmap_2f976cf8",
    "country": "日本",
    "prefecture": "熊本縣",
    "region": "熊本市區",
    "title": "熊本城 (日本三大名城/黑色武者返天守閣)",
    "category": "spot",
    "cost": "門票 成人850円 / 中小學生300円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=熊本城",
    "note": "📍熊本県熊本市中央区本丸1-1\n⏰09:00–17:00 (最後入場 16:30)\n🚇熊本市電「熊本城・市役所前」站步行約5分鐘\n✨日本三大名城之一，戰國武將加藤清正築造。以易守難攻的獨特石垣「武者返」與黑色木造外觀震撼世人，天守閣已於震後完整修復開放，內部展示現代化多媒體歷史展覽。"
  },
  {
    "id": "v_gmap_e3fa7564",
    "country": "日本",
    "prefecture": "佐賀縣",
    "region": "唐津",
    "title": "七釜 (七ツ釜/玄界灘柱狀節理海蝕洞)",
    "category": "spot",
    "cost": "免費參觀 / 呼子觀光船烏賊號約 2,000円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=七ツ釜+佐賀",
    "note": "📍佐賀県唐津市屋形石\n⏰全天開放 (觀光船約 09:30–16:30)\n🚗JR唐津站出發自駕車程約25分鐘\n✨國家天然紀念物！玄界灘怒濤侵蝕玄武岩形成的七個巨型天然海蝕洞穴。斷崖峭壁由柱狀節理構成，壯麗奇異，亦可自呼子港搭乘觀光船穿梭入洞。"
  },
  {
    "id": "v_gmap_74c36a51",
    "country": "日本",
    "prefecture": "佐賀縣",
    "region": "嬉野",
    "title": "嬉野溫泉街 (日本三大美肌之湯/嬉野溫泉足湯湯宿)",
    "category": "spot",
    "cost": "公眾浴場約 400–800円 / 足湯免費",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=嬉野溫泉",
    "note": "📍佐賀県嬉野市嬉野町\n⏰西博爾德溫泉 06:00–22:00\n🚇西九州新幹線「嬉野溫泉站」出站即達\n✨日本三大美肌溫泉之一！富含碳酸氫鈉，泉質柔潤滑順如絲，泡完全身光滑潤澤。溫泉街沿河而建，必嚐入口即化的嬉野溫泉湯豆腐與嬉野茶。"
  },
  {
    "id": "v_gmap_89119f3a",
    "country": "日本",
    "prefecture": "佐賀縣",
    "region": "唐津",
    "title": "虹之松原 (日本三大松原/百萬黑松林與唐津漢堡)",
    "category": "spot",
    "cost": "免費散策 / 唐津漢堡約 500円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=虹の松原",
    "note": "📍佐賀県唐津市浜玉町浜崎\n⏰全天開放\n🚇JR筑肥線「虹之松原站」出站即達\n✨日本三大松原之一！沿唐津灣弧形綿延約4.5公里、寬500公尺，由初代唐津藩主種植的一百萬棵黑松林組成。森林中央停車場旁有超人氣餐車「唐津漢堡」。"
  },
  {
    "id": "v_gmap_6b9d1051",
    "country": "日本",
    "prefecture": "佐賀縣",
    "region": "佐賀市區",
    "title": "佐賀縣立佐賀城本丸歷史館 (日本最大規模木造復原建築)",
    "category": "spot",
    "cost": "免費入場 (自由募捐)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=佐賀城本丸歴史館",
    "note": "📍佐賀県佐賀市城内2-18-1\n⏰09:30–18:00\n🚇JR「佐賀站」搭乘市營巴士至「佐賀城跡」站下車\n✨忠實還原江戶幕末時期佐賀藩本丸御殿，鋪設多達700塊榻榻米，室內開闊古雅。館內透過高科技與全景模型生動介紹鍋島直正與佐賀藩近代化歷史。"
  },
  {
    "id": "v_gmap_540d79bf",
    "country": "日本",
    "prefecture": "佐賀縣",
    "region": "武雄",
    "title": "御船山樂園 (武雄鍋島四季花園/teamLab光影盛典)",
    "category": "spot",
    "cost": "日景門票約 600円 (季節/點燈活動變更)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=御船山楽園",
    "note": "📍佐賀県武雄市武雄町大字武雄4100\n⏰08:00–17:00 (夜間點燈活動時段另訂)\n🚇JR「武雄溫泉站」搭乘巴士或計程車約5分鐘\n✨佔地50萬平方公尺的雄偉回遊式庭園，背靠形似唐船的御船山斷崖。春季20萬株杜鵑與櫻花盛開，秋季楓紅如燃，夏季至秋季舉辦全球聞名的 teamLab 森林數位藝術展。"
  },
  {
    "id": "v_gmap_f773ca1b",
    "country": "日本",
    "prefecture": "佐賀縣",
    "region": "呼子",
    "title": "呼子朝市 (日本三大朝市/活跳透抽呼子イカ)",
    "category": "spot",
    "cost": "免費逛街 / 烏賊套餐約 2,500–3,500円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=呼子朝市",
    "note": "📍佐賀県唐津市呼子町呼子 朝市通り\n⏰07:30–12:00 (元旦除外全年無休)\n🚗JR唐津站搭乘昭和巴士約30分鐘至「呼子」\n✨日本三大朝市之一！約200公尺的朝市通擺滿在地漁婦攤位，販售現剖海膽、一夜干烏賊與蔬果。必吃透明晶亮、口感甘甜爽脆的呼子生烏賊刺身與烏賊燒賣！"
  },
  {
    "id": "v_gmap_b3b3d17d",
    "country": "日本",
    "prefecture": "佐賀縣",
    "region": "有田",
    "title": "有田瓷器公園 (德國茲溫格宮宮殿/有田燒陶瓷體驗)",
    "category": "spot",
    "cost": "入園免費 (展示館部分收費)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=有田ポーセリンパーク",
    "note": "📍佐賀県西松浦郡有田町戸矢乙340-28\n⏰09:00–17:00\n🚇JR「有田站」轉搭計程車約8分鐘\n✨將德國德勒斯登的「茲溫格宮」在有田等比例重現！巴洛克風格庭園與壯麗宮殿超好拍，館內展出珍貴古有田燒外銷歐洲瓷器，並有手捏陶、彩繪體驗工坊與清酒藏。"
  },
  {
    "id": "v_gmap_f1ba539f",
    "country": "日本",
    "prefecture": "佐賀縣",
    "region": "唐津",
    "title": "唐津城 (舞鶴城天守閣/俯瞰唐津灣與虹之松原)",
    "category": "spot",
    "cost": "天守閣 成人500円 / 中小學生250円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=唐津城",
    "note": "📍佐賀県唐津市東城内8-1\n⏰09:00–17:00\n🚇JR「唐津站」搭乘市內巴士至「唐津城入口」下車\n✨由唐津初代藩主寺澤廣高築城，因左右延伸的松原形如展翅白鶴而又名「舞鶴城」。登上5層天守閣展望台，可360度俯瞰湛藍唐津灣、玄界灘島嶼與壯麗的虹之松原。"
  },
  {
    "id": "v_gmap_98846eae",
    "country": "日本",
    "prefecture": "佐賀縣",
    "region": "吉野里",
    "title": "吉野里歷史公園 (日本最大彌生時代環壕聚落國營公園)",
    "category": "spot",
    "cost": "門票 成人460円 / 中學生以下免費",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=吉野ヶ里歴史公園",
    "note": "📍佐賀県神埼郡吉野ヶ里町田手1843\n⏰09:00–17:00 (6–8月至18:00)\n🚇JR長崎本線「吉野里公園站」或「神埼站」步行約15分鐘\n✨被認為是魏志倭人傳中「邪馬台國」有力候選地的巨大考古遺址！完整復原主祭殿、望樓、豎穴住居與墳丘墓，園區綠草如茵，還有草地滾大球與彌生工藝體驗。"
  },
  {
    "id": "v_gmap_06b62e93",
    "country": "日本",
    "prefecture": "佐賀縣",
    "region": "鹿島",
    "title": "祐德稻荷神社 (日本三大稻荷/懸造朱紅神殿與奧之院)",
    "category": "spot",
    "cost": "境內免費 (博物館300円)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=祐徳稲荷神社",
    "note": "📍佐賀県鹿島市古枝乙1855\n⏰境內全天開放\n🚇JR「肥前鹿島站」轉搭祐德巴士約10分鐘直達\n✨與伏見稻荷、笠間稻荷並稱「日本三大稻荷」。朱紅色本殿依山而建，採用如清水寺般的懸造結構，氣勢磅礴金碧輝煌。參道兩側鳥居林立直通奧之院，眺望有明海全景。"
  },
  {
    "id": "v_gmap_62439e19",
    "country": "日本",
    "prefecture": "宮崎縣",
    "region": "高千穗",
    "title": "高千穗峽 (真名井瀑布/玄武岩峽谷划船絕景)",
    "category": "spot",
    "cost": "峽谷步道免費 / 划船約 4,100–5,100円/艘 (需先上網預約)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=高千穂峡",
    "note": "📍宮崎県西臼杵郡高千穂町三田井御塩井\n⏰全天開放 (租船 08:30–17:00)\n🚗高千穗巴士總站搭乘計程車約5分鐘 / 租車自駕前往\n✨日本國家名勝天然紀念物！阿蘇火山碎屑流經五瀨川急劇冷卻形成的柱狀節理懸崖，高達80至100公尺。「真名井瀑布」飛瀉入翡翠碧綠溪水，划木舟穿越其間宛如仙境。"
  },
  {
    "id": "v_gmap_742243fd",
    "country": "日本",
    "prefecture": "宮崎縣",
    "region": "高千穗",
    "title": "高千穗神社 (神話之鄉千年古杉/每晚傳統夜神樂)",
    "category": "spot",
    "cost": "境內免費 / 高千穗神樂觀賞約 1,000円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=高千穂神社",
    "note": "📍宮崎県西臼杵郡高千穂町大字三田井1037\n⏰境內全日開放 / 觀光夜神樂每晚 20:00–21:00\n🚇高千穗巴士總站步行約15分鐘\n✨高千穗八十八社的總社，創建約1900年。境內樹齡800年的「秩父杉」與祈求姻緣家庭圓滿的「夫婦杉」參天聳立。神樂殿每晚演出精選四齣重要無形民俗文化財「高千穗神樂」。"
  },
  {
    "id": "v_gmap_46d14b32",
    "country": "日本",
    "prefecture": "宮崎縣",
    "region": "高千穗",
    "title": "天安河原 (天岩戶神話發源地/堆石祈願神秘幽谷)",
    "category": "spot",
    "cost": "免費參觀",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=天安河原",
    "note": "📍宮崎県西臼杵郡高千穂町岩戸\n⏰全天開放 (建議白天前往)\n🚗天岩戶神社西本宮步行約10分鐘 (沿岩戶川溪谷步道)\n✨日本神話中太陽神天照大神隱身於天岩戶時，八百萬神明聚會商議對策的巨大仰慕窟洞穴。洞穴周圍遍佈參拜信眾堆疊的祈願石堆，流水潺潺、氣氛空靈肅穆且充滿強大能量。"
  },
  {
    "id": "v_gmap_f0c0fc15",
    "country": "日本",
    "prefecture": "宮崎縣",
    "region": "高千穗",
    "title": "高千穗鐵道 天空小火車 (高千穗あまてらす鉄道/高空鐵橋吹泡泡)",
    "category": "spot",
    "cost": "車票 成人1,800円 / 兒童1,100円 (現場預約)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=高千穂あまてらす鉄道",
    "note": "📍宮崎県西臼杵郡高千穂町三田井1425-1 (舊高千穗站)\n⏰09:40–15:40 (每30–40分鐘一班)\n🚇高千穗巴士總站步行約10分鐘\n✨利用舊高千穗線廢棄鐵道打造的露天無頂觀光小火車！行駛至離溪谷底高達105公尺的「高千穗高架鐵橋」時會停下，列車長會吹出夢幻七彩泡泡，橋中央地板透明鏤空，刺激壯觀！"
  },
  {
    "id": "v_gmap_1401d1f2",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "長崎市區",
    "title": "稻佐山山頂展望台 (世界新三大夜景/長崎千萬美景)",
    "category": "spot",
    "cost": "展望台免費 / 稻佐山空中纜車往返 1,250円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=稲佐山山頂展望台",
    "note": "📍長崎県長崎市稲佐町364\n⏰展望台 09:00–22:00 (屋頂24小時)\n🚠長崎纜車「淵神社站」搭乘約5分鐘直達山頂\n✨名列「世界新三大夜景」與「日本新三大夜景」！標高333公尺，俯瞰長崎港灣地形與依山而建的萬家燈火，地板更鑲嵌發光蓄光石，宛如銀河漫步。"
  },
  {
    "id": "v_gmap_9d86785f",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "長崎市區",
    "title": "長崎平和公園 (和平祈念像/祈求世界和平歷史巡禮)",
    "category": "spot",
    "cost": "公園免費參觀",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=長崎平和公園",
    "note": "📍長崎県長崎市松山町9\n⏰全天開放\n🚇長崎路面電車「平和公園」站下車步行約3分鐘\n✨坐落於原子彈落下中心地北側小丘上。北村西望創作的高9.7公尺青銅「和平祈念像」，右手指天象徵原爆威脅，左手平伸祈禱世界和平，閉目為罹難者祈福。"
  },
  {
    "id": "v_gmap_db632bcf",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "長崎市區",
    "title": "AMU PLAZA長崎 (JR長崎站直通新館旗艦商場)",
    "category": "shop",
    "cost": "依各店消費",
    "bgColor": "#a29bfe",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=アミュプラザ長崎",
    "note": "📍長崎県長崎市尾上町1-1\n⏰商場 10:00–20:00 / 餐廳 11:00–22:00\n🚇JR長崎站出站即達 / 路面電車「長崎站前」站\n✨西九州新幹線通車擴建新館！匯集長崎特色伴手禮（福砂屋/文明堂長崎蛋糕、長崎強棒麵）、BEAMS、無印良品、各國時裝專櫃與長崎海鮮居酒屋美食街。"
  },
  {
    "id": "v_gmap_4d5d4d30",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "長崎市區",
    "title": "長崎新地中華街 (日本三大中華街/長崎什錦麵皿烏龍)",
    "category": "food",
    "cost": "餐點約 800–1,500円",
    "bgColor": "#ff6b6b",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=長崎新地中華街",
    "note": "📍長崎県長崎市新地町\n⏰約11:00–21:00 (各餐廳不同)\n🚇長崎路面電車「新地中華街」站步行約1分鐘\n✨與橫濱、神戶並列日本三大中華街。東西南北四座朱紅琉璃瓦牌坊林立，聚集江山樓、會樂園等名店，必吃濃厚豚骨雞湯底的長崎雜燴麵(Champon)與酥脆皿烏龍。"
  },
  {
    "id": "v_gmap_1602df61",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "長崎市區",
    "title": "長崎浜町商店街 (長崎最大拱廊步行購物街/濱屋百貨)",
    "category": "shop",
    "cost": "依各店消費",
    "bgColor": "#a29bfe",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=浜町アーケード+長崎",
    "note": "📍長崎県長崎市浜町\n⏰約10:00–20:00\n🚇長崎路面電車「觀光通」站或「思案橋」站即達\n✨長崎市民最愛的購物中心地「濱町拱廊」！擁有在地唯一的濱屋百貨、吉宗茶碗蒸老店、唐吉訶德、松本清、各類和菓子與文具服飾店，雨天漫步購物首選。"
  },
  {
    "id": "v_gmap_d01f1080",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "長崎市區",
    "title": "哥拉巴園 (Glover Garden/普契尼蝴蝶夫人故居/心形石)",
    "category": "spot",
    "cost": "門票 成人620円 / 高中生310円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=グラバー園",
    "note": "📍長崎県長崎市南山手町8-1\n⏰08:00–18:00 (夜間點燈時段延長至20:30)\n🚇長崎路面電車「大浦天主堂」站步行約7分鐘\n✨世界文化遺產！保存日本現存最古老木造洋風建築舊哥拉巴住宅。俯瞰長崎港壯麗海景，據傳歌劇《蝴蝶夫人》即以此為背景，園內步道隱藏兩顆「愛心石」吸引無數遊客打卡尋找。"
  },
  {
    "id": "v_gmap_26e93a03",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "長崎市區",
    "title": "大浦天主堂 (日本最古老木造歌德天主教堂/國寶建築)",
    "category": "spot",
    "cost": "門票 成人1,000円 / 國高中生400円 (含吉利支丹博物館)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=大浦天主堂",
    "note": "📍長崎県長崎市南山手町5-3\n⏰08:30–17:30\n🚇長崎路面電車「大浦天主堂」站步行約5分鐘\n✨日本唯一被指定為國寶的西洋建築，亦為世界文化遺產「長崎與天草潛伏基督徒遺產」核心。1864年為紀念日本二十六聖人所建，哥德式尖塔與法國進口百年彩繪玻璃令人肅穆凝神。"
  },
  {
    "id": "v_gmap_86e00eb7",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "九十九島",
    "title": "九十九島動植物園 森きらら (九十九島萌物動物園/日本最大玫瑰園)",
    "category": "spot",
    "cost": "門票 成人830円 / 兒童210円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=九十九島動植物園+森きらら",
    "note": "📍長崎県佐世保市船越町2172\n⏰09:00–17:00 (最後入園 16:30)\n🚌佐世保站搭乘市營巴士約30分鐘至「動植物園前」\n✨坐落於眺望九十九島的高台上。擁有日本最大的戶外企鵝館（可在天幕走廊仰望企鵝飛翔），還有超萌長頸鹿、小貓熊，以及日本規模頂級的日本庭園與玫瑰園。"
  },
  {
    "id": "v_gmap_ebf96cda",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "佐世保",
    "title": "天主教三浦町教會 (佐世保地標/白灰歌德式哥德雙塔教堂)",
    "category": "spot",
    "cost": "免費參觀 (彌撒時間除外)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=カトリック三浦町教会",
    "note": "📍長崎県佐世保市三浦町4-25\n⏰09:00–17:00\n🚇JR「佐世保站」出站步行約3分鐘即可看見高台上教堂\n✨佐世保象徵地標！1931年建造的歌德式美麗灰白色天主教堂，二戰時為躲避美軍空襲曾塗黑外牆偽裝而幸運躲過戰火。站在高台樓梯前仰拍雙塔是經典取景構圖。"
  },
  {
    "id": "v_gmap_bd47ea8e",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "佐世保",
    "title": "戶尾市場 (佐世保防空洞市場/とんねる横丁昭和風情)",
    "category": "food",
    "cost": "依各攤消費",
    "bgColor": "#ff6b6b",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=戸尾市場",
    "note": "📍長崎県佐世保市戸尾町5-8\n⏰約09:00–18:00\n🚇JR「佐世保站」步行約8分鐘\n✨佐世保的市民廚房！最著名的是利用二戰防空洞穴改建而成的「隧道橫丁(とんねる横丁)」，一整排岩壁洞穴內販售新鮮漁獲海鮮、炭烤、魚板與乾貨，極具昭和復古在地風情。"
  },
  {
    "id": "v_gmap_682eaaf2",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "佐世保",
    "title": "佐世保五番街 (佐世保港海景商場/佐世保漢堡名店)",
    "category": "shop",
    "cost": "依各店消費 / 漢堡約 800–1,200円",
    "bgColor": "#a29bfe",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=させぼ五番街",
    "note": "📍長崎県佐世保市新港町2-1\n⏰商場 10:00–20:00 / 餐廳 11:00–22:00\n🚇JR「佐世保站」港口側出口步行約1分鐘\n✨緊鄰佐世保港口的美式海濱露天購物商場！戶外露台可迎著海風眺望大船入港，商場進駐星巴克、大創、無印良品，以及佐世保漢堡必吃名店「Hikari」！"
  },
  {
    "id": "v_gmap_5b90da78",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "佐世保",
    "title": "佐世保四之町商店街 (日本最長連貫直線拱廊商店街)",
    "category": "shop",
    "cost": "依各店消費",
    "bgColor": "#a29bfe",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=四ヶ町商店街+佐世保",
    "note": "📍長崎県佐世保市本島町\n⏰約10:00–20:00\n🚇松浦鐵道「佐世保中央站」出站即達 / JR佐世保站步行約10分鐘\n✨直線連貫長達1公里（960公尺），為全日本直線距離最長的連貫遮雨拱廊商店街！街道寬敞，進駐蜂之家泡芙、Big Man佐世保漢堡、松本清、玉屋百貨與在地服飾雜貨。"
  },
  {
    "id": "v_gmap_a3ef37f6",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "九十九島",
    "title": "九十九島海鮮市場 (九十九島牡蠣現烤/長崎伴手禮館)",
    "category": "food",
    "cost": "烤牡蠣約 1,000–2,000円",
    "bgColor": "#ff6b6b",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=九十九島海鮮市場",
    "note": "📍長崎県佐世保市鹿子前町1058-1\n⏰09:00–18:00\n🚌佐世保站搭乘巴士至「九十九島珍珠海洋遊覽區」下車\n✨位於九十九島遊船碼頭旁！秋冬季可品嚐肉質緊實甘甜的「九十九島小顆烤牡蠣」，店內提供長崎飛魚高湯、長崎蛋糕、九十九島仙貝與各類新鮮生猛海產伴手禮。"
  },
  {
    "id": "v_gmap_a0a52b62",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "九十九島",
    "title": "九十九島水族館 海洋kirara (海豚表演/夢幻水母交響樂廳)",
    "category": "spot",
    "cost": "門票 成人1,470円 / 4歲–中學生730円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=九十九島水族館海きらら",
    "note": "📍長崎県佐世保市鹿子前町1008番地\n⏰09:00–18:00 (11–2月至17:00)\n🚌佐世保站搭乘公車約25分鐘至「九十九島珍珠海洋遊覽區」\n✨以九十九島海域生態為主題的美麗水族館！擁有日本少見的戶外無頂九十九島灣大水槽、超近距離海豚空中拋球特技表演，以及伴隨交響樂暗室發光的超療癒水母展示廳。"
  },
  {
    "id": "v_gmap_a8bd260a",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "九十九島",
    "title": "九十九島遊覽船 (未來號/珍珠皇后號海島巡禮)",
    "category": "spot",
    "cost": "船票 成人1,500円 / 兒童750円 (航程約50分鐘)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=九十九島遊覧船",
    "note": "📍長崎県佐世保市鹿子前町1008番地\n⏰約10:00–15:00 (每小時一班)\n🚌佐世保站搭乘公車約25分鐘至「九十九島珍珠海洋遊覽區」\n✨搭乘優雅的白色「珍珠皇后號」或帥氣的海賊木造船「未來號」，航行穿梭於208座翡翠綠色小島與錯綜複雜的海灣峽道間，吹著海風飽覽世界級海島峽灣奇景。"
  },
  {
    "id": "v_gmap_724ce25b",
    "country": "日本",
    "prefecture": "長崎縣",
    "region": "豪斯登堡",
    "title": "豪斯登堡 (九州最大歐洲荷蘭主題樂園/夜間光之王國)",
    "category": "spot",
    "cost": "一日通票 成人約 7,400円 (含所有遊樂設施與夜景)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=ハウステンボス",
    "note": "📍長崎県佐世保市ハウステンボス町1-1\n⏰09:00–21:00 (週末至22:00)\n🚇JR大村線「豪斯登堡站」出站過橋直達\n✨日本單一主題樂園面積最大（為東京迪士尼1.5倍）！完整還原荷蘭中世紀宮殿、運河與風車鬱金香花海。夜間1,300萬盞燈光打造出全球最大級「光之王國」，震撼無比。"
  },
  {
    "id": "v_gmap_58e4554d",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "宇佐",
    "title": "九州自然動物園 African Safari (叢林野獸巴士餵食獅子大象)",
    "category": "spot",
    "cost": "門票 成人2,600円 / 叢林巴士乘車費 1,300円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=アフリカンサファリ+大分",
    "note": "📍大分県宇佐市安心院町南畑2-1755-1\n⏰09:00–16:30 (冬季 10:00–16:00)\n🚌JR別府站西口搭乘龜之井巴士約50分鐘直達\n✨日本最大的野生動物園之一！搭乘特殊鐵籠造型「叢林巴士(Jungle Bus)」，手持長夾親手餵食散步在草原上的凶猛獅子、黑熊與巨大非洲象，震撼難忘，亦有水豚互動區！"
  },
  {
    "id": "v_gmap_98cf3fd1",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "別府",
    "title": "別府海地獄 (國指定名勝/Tiffany藍鈷藍熱泉地獄蒸布丁)",
    "category": "spot",
    "cost": "門票 成人450円 / 七大地獄通票 2,200円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=海地獄",
    "note": "📍大分県別府市大字鉄輪559-1\n⏰08:00–17:00\n🚌JR別府站西口搭乘龜之井巴士至「海地獄前」下車\n✨別府地獄巡禮之首、國家指定名勝！約1200年前鶴見岳爆發形成，泉水因富含硫酸鐵而呈現出不可思議的湛藍夢幻湖色。必嚐地獄高溫蒸氣煮出的「極樂饅頭」與濃厚「地獄蒸布丁」。"
  },
  {
    "id": "v_gmap_7cf850b9",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "由布院",
    "title": "金鱗湖 (由布院晨霧仙境/湖中水上鳥居)",
    "category": "spot",
    "cost": "免費參觀",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=金鱗湖",
    "note": "📍大分県由布市湯布院町川上1561-1\n⏰全天開放 (清晨晨霧最美)\n🚇JR由布院站出站沿湯之坪街道步行約20分鐘\n✨由布院地標名所！湖底同時湧出清水與高溫溫泉，秋冬清晨湖面常飄起濃白如仙境的朝霧。夕陽西下時湖面反射波光粼粼如金色魚鱗因而得名，湖畔有著名的天祖神社水上鳥居。"
  },
  {
    "id": "v_gmap_82c65da0",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "由布院",
    "title": "湯布院花卉村 (Yufuin Floral Village/英倫童話村與貓頭鷹森林)",
    "category": "spot",
    "cost": "村莊免費參觀 / 貓頭鷹之森門票約 700円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=湯布院フローラルヴィレッジ",
    "note": "📍大分県由布市湯布院町川上1503-3\n⏰09:30–17:30\n🚇JR由布院站步行約15分鐘 (湯之坪街道中段)\n✨以英國科茨沃爾德(Cotswolds)鄉村為原型打造的迷你童話小鎮！黃色矮牆石屋、藤蔓鮮花，進駐魔女宅急便麵包店、彼得兔、笑笑羊周邊，並設有貓咪咖啡館與貓頭鷹撫摸體驗。"
  },
  {
    "id": "v_gmap_efa6d234",
    "country": "日本",
    "prefecture": "大分縣",
    "region": "由布院",
    "title": "湯布院昭和館 (穿越時空昭和三十年代復古老街博物館)",
    "category": "spot",
    "cost": "門票 成人800円 / 中小學生400円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=湯布院昭和館",
    "note": "📍大分県由布市湯布院町川上1561-1\n⏰09:00–17:00\n🚇JR由布院站沿湯之坪街道步行約15分鐘\n✨完整重現昭和30年代（1955年代）日本平民生活街景！館內逼真重現復古柑仔店、黑膠唱片行、老戲院、醫生診所、昭和客廳與教室，每件展品都是真正的古董，懷舊氛圍拉滿。"
  },
  {
    "id": "v_gmap_f199d27c",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "博多",
    "title": "牛雜鍋 一藤 (博多頂級濃厚白味噌牛腸鍋名店)",
    "category": "food",
    "cost": "人均約 3,000–5,000円",
    "bgColor": "#ff6b6b",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=もつ鍋一藤+博多",
    "note": "📍福岡県福岡市博多区博多駅前2-4-16\n⏰17:00–23:00 (週末提供午餐)\n🚇JR博多站博多口步行約3分鐘\n✨福岡當地人極力推薦的頂級牛腸鍋！堅持選用日本國產黑毛和牛小腸，招牌「特製白味噌湯底」混合信州白味噌與福岡甜味噌，湯頭醇厚回甘，滿滿膠原蛋白！"
  },
  {
    "id": "v_gmap_02defd38",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "博多",
    "title": "FUK COFFEE (福岡旅行航空主題人氣特色咖啡館)",
    "category": "food",
    "cost": "咖啡甜點約 600–1,200円",
    "bgColor": "#fe9000",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=FUK+COFFEE",
    "note": "📍福岡市博多区祇園町6-22 (大濠公園、百道濱皆有分店)\n⏰08:00–20:00\n🚇地下鐵「祇園站」或「中洲川端站」步行約5分鐘\n✨以福岡機場代碼「FUK」與旅行飛行登機證為概念設計的超人氣潮牌咖啡館！招牌焦糖布丁搭配飛機造型餅乾與精緻拿鐵拉花，周邊行李牌與T恤也是熱門伴手禮。"
  },
  {
    "id": "v_gmap_fd745653",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "小倉",
    "title": "京町銀天街 (小倉站前昭和風情商店街/居酒屋與烏龍麵)",
    "category": "shop",
    "cost": "依各店消費",
    "bgColor": "#a29bfe",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=京町銀天街",
    "note": "📍福岡県北九州市小倉北区京町\n⏰約10:00–20:00 (居酒屋營業至深夜)\n🚇JR「小倉站」小倉城口出站步行約1分鐘\n✨緊鄰魚町銀天街與小倉站前！保留濃厚昭和風情的拱廊街，是當地通勤族與居民覓食的心臟地帶。林立資先生烏龍麵分店、辻利茶鋪、居酒屋、平民咖啡與藥妝雜貨。"
  },
  {
    "id": "v_gmap_78fcb0f5",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "小倉",
    "title": "北九州河畔步行街 (RIVERWALK KITAKYUSHU/小倉城旁複合商場)",
    "category": "shop",
    "cost": "依各店消費",
    "bgColor": "#a29bfe",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=リバーウォーク北九州",
    "note": "📍福岡県北九州市小倉北区室町1-1-1\n⏰商場 10:00–20:00 / 餐廳 11:00–22:00\n🚇JR「西小倉站」步行約3分鐘 / JR「小倉站」步行約10分鐘\n✨由知名建築師捷迪設計，鮮豔幾何外觀與紫川水岸、小倉城古蹟交相輝映。商場內有NHK、北九州藝術劇場、GAP、星巴克與眾多日系服飾美食，露台可絕佳角度合影小倉城！"
  },
  {
    "id": "v_gmap_7f70ab0c",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "小倉",
    "title": "小倉城庭園 (小笠原藩江戶武家屋敷池泉回遊庭園)",
    "category": "spot",
    "cost": "門票 成人350円 / 中高生200円 (可與小倉城買聯票)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=小倉城庭園",
    "note": "📍福岡県北九州市小倉北区城内1-2\n⏰09:00–18:00 (11–3月至17:00)\n🚇JR「西小倉站」步行約8分鐘 / JR「小倉站」步行約15分鐘\n✨江戶時代小倉藩主小笠原家下屋敷遺址。重現典雅的武家書院造建築與池泉回遊式日本庭園，書院一部分懸伸於池面之上。設有茶道體驗室，可靜心品嚐抹茶與和菓子。"
  },
  {
    "id": "v_gmap_86db1391",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "門司港",
    "title": "藍翼橋 (門司港 藍翼門司吊橋/戀人聖地開橋秀)",
    "category": "spot",
    "cost": "免費參觀",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=ブルーウィングもじ",
    "note": "📍福岡県北九州市門司区港町4-1\n⏰整點開橋 (10:00–16:00 每日開橋6次，每次約20分鐘)\n🚇JR「門司港站」出站步行約5分鐘\n✨日本唯一的行人專用步行跳開式吊橋！每次開橋時兩端橋面以60度角揚起，水波映照藍天浪漫無比。被評選為「戀人聖地」，傳說情侶在橋合攏後攜手走過便能白頭偕老。"
  },
  {
    "id": "v_gmap_7875eb7b",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "門司港",
    "title": "九州鐵道紀念館 (鐵道迷必訪/實體蒸汽火車與迷你列車駕駛)",
    "category": "spot",
    "cost": "門票 成人300円 / 中小學生150円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=九州鉄道記念館",
    "note": "📍福岡県北九州市門司区清滝2-3-29\n⏰09:00–17:00 (最後入館 16:30)\n🚇JR「門司港站」出站步行約3分鐘即達\n✨利用明治時代舊九州鐵道本社紅磚洋館改建。戶外展出9輛珍貴歷史火車車輛（SL蒸汽機關車、國鐵特急寢台車），室內有超擬真電車模擬駕駛儀，戶外還有迷你鐵道公園可親自開火車！"
  },
  {
    "id": "v_gmap_b60203f9",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "博多",
    "title": "真言宗 東長寺 (博多千年古剎/日本最大木造大佛與地獄極樂巡禮)",
    "category": "spot",
    "cost": "免費參觀 (大佛參拜費 50円)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=東長寺+博多",
    "note": "📍福岡県福岡市博多区御供所町2-4\n⏰09:00–16:45\n🚇福岡市地下鐵「祇園站」1號出口即達\n✨弘法大師空海自唐朝歸國後於西元806年創建的日本最古密教寺院！二樓供奉高10.8公尺的「福岡大佛」（日本最大木造釋迦坐像），佛座下方設有漆黑神祕的「地獄極樂通道」體驗。"
  },
  {
    "id": "v_gmap_1ce2cdde",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "百道濱",
    "title": "BOSS E · ZO FUKUOKA (福岡PayPay巨蛋旁巨型數位娛樂中心)",
    "category": "spot",
    "cost": "各設施獨立購票 (絕叫滑梯約 1,000円起)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=BOSS+E+ZO+FUKUOKA",
    "note": "📍福岡県福岡市中央区地行浜2-2-6 (PayPay巨蛋旁)\n⏰11:00–20:00 (週末 10:00–20:00)\n🚇地下鐵「唐人町站」步行約15分鐘 / 西鐵巴士「PayPay巨蛋」站\n✨福岡全新娛樂地標！樓頂設有驚險刺激的日本首座屋頂絕叫懸空滑梯「絕景三兄弟」，館內有 teamLab Forest 森林數位美術館、V-World AREA 虛擬VR競技與王貞治棒球紀念館。"
  },
  {
    "id": "v_gmap_1c4a6fed",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "太宰府",
    "title": "九州國立博物館 (日本第四座國立博物館/流線雙曲面玻璃綠建築)",
    "category": "spot",
    "cost": "常設展 成人700円 / 大學生350円 / 高中以下免費",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=九州国立博物館",
    "note": "📍福岡県太宰府市石坂4-7-2\n⏰09:30–17:00 (週五週六夜間開館至 20:00，週一休)\n🚇西鐵太宰府站出站，經太宰府天滿宮參道隧道手扶梯約10分鐘\n✨日本繼東京、京都、奈良之後的第四大國立博物館。波浪造型雙曲面玻璃巨型建築映照青山，以「從亞洲歷史角度看日本文化形成」為主題，一樓設有免費開放的亞洲各國互動文化體驗區「あじっぱ」。"
  },
  {
    "id": "v_gmap_40928f24",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "能古島",
    "title": "能古島海島公園 (博多灣離岸花海小島/四季盛開彩虹花田)",
    "category": "spot",
    "cost": "門票 成人1,500円 / 中小學生800円 / 渡輪單程 230円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=のこのしまアイランドパーク",
    "note": "📍福岡県福岡市西区能古島1624\n⏰09:00–17:30 (週日節慶至 18:30)\n🚢姪浜渡船場搭乘渡輪約10分鐘抵達能古島，轉搭西鐵公車約13分鐘\n✨漂浮於博多灣的自然花海樂園！春季油菜花與櫻花、夏季向日葵、秋季50萬株波斯菊與冬季水仙花在藍天碧海的背景下盛開。園內還有昭和懷舊商店街、陶藝體驗與能古烏龍麵。"
  },
  {
    "id": "v_gmap_e7482131",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "絲島",
    "title": "白絲瀑布 (絲島避暑名所/流水素麵與山女魚鹽烤)",
    "category": "spot",
    "cost": "免費參觀 / 流水素麵約 600円 / 釣魚體驗約 3,000円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=白糸の滝+糸島",
    "note": "📍福岡県糸島市白糸460-6\n⏰09:00–17:00\n🚗JR「筑前前原站」自駕車程約25分鐘 / 夏季有白絲瀑布專線巴士\n✨落差24公尺、水流如白絲垂落的絕美避暑勝地！瀑布旁佇立著樹齡300年的縣指定天然紀念物「萬年龍杉」。夏季必玩竹筒流水麵（流水素麵）、垂釣山女魚並現場炭火鹽烤，極度清涼療癒。"
  },
  {
    "id": "v_gmap_0e0a6def",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "中央區",
    "title": "福岡市動植物園 (中央區南公園/空中迴廊看長頸鹿與溫室花園)",
    "category": "spot",
    "cost": "共通門票 成人600円 / 高中生300円 / 國中以下免費",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=福岡市動植物園",
    "note": "📍福岡県福岡市中央区南公園1-1\n⏰09:00–17:00 (週一休館)\n🚇福岡市地下鐵七隈線「櫻坂站」步行約15分鐘 / 西鐵巴士「動物園前」\n✨福岡市中心綠洲！動物園與植物園透過空中天橋互相連通，展示長頸鹿、亞洲象、小貓熊與企鵝等百餘種動物；植物園擁有九州最大規模的大溫室，種植熱帶果樹與仙人掌，四季花團錦簇。"
  },
  {
    "id": "v_gmap_c256d1d9",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "太宰府",
    "title": "寶滿宮 竈門神社 (太宰府結緣名所/片山正通設計絕美櫻花御守處)",
    "category": "spot",
    "cost": "境內免費參觀",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=宝満宮竈門神社",
    "note": "📍福岡県太宰府市大字内山883\n⏰08:30–18:00 (境內全天開放)\n🚌西鐵太宰府站搭乘社區巴士「まほろば号」約10分鐘直達\n✨擁有1350年以上歷史的超人氣姻緣結社！位於寶滿山麓，由知名室內設計師片山正通操刀設計的現代極簡粉色神札授與所美如藝術館，秋季更是福岡頂級紅葉隧道名所，亦因鬼滅之刃聖地巡禮爆紅。"
  },
  {
    "id": "v_gmap_b5026c5e",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "絲島",
    "title": "櫻井二見浦 夫婦岩 (絲島白色海中鳥居/日本夕陽百選絕景)",
    "category": "spot",
    "cost": "免費參觀",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=桜井二見ヶ浦+夫婦岩",
    "note": "📍福岡県糸島市志摩桜井\n⏰全天開放 (黃昏夕陽時段最美)\n🚗JR「九大學研都市站」搭乘昭和巴士或自駕約30分鐘\n✨絲島最標誌性的明信片絕景！蔚藍海面上佇立著純白色大鳥居，後方以注連繩相繫的大小兩塊巨石「夫婦岩」象徵結緣與夫妻圓滿。入選日本夕陽百選與日本海灘百選，夏至前後太陽正好從兩岩間沈入海平線。"
  },
  {
    "id": "v_gmap_1d95021c",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "志賀島",
    "title": "海洋世界海之中道 (九州海域全景水槽/露天海豚海獅秀)",
    "category": "spot",
    "cost": "門票 成人2,500円 / 中小學生1,200円 / 幼兒700円",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=マリンワールド海の中道",
    "note": "📍福岡県福岡市東区大字西戸崎18-28\n⏰09:30–17:30\n🚇JR香椎線「海之中道站」出站步行約5分鐘 / 博多碼頭搭渡輪直達\n✨以「九州之海」為主題的現代化大型水族館！擁有水深7公尺的黑潮大水槽，再現350種不同海洋生物。戶外表演池背倚博多灣湛藍海景，海豚與海獅的默契特技躍水表演精彩絕倫！"
  },
  {
    "id": "v_gmap_c4ac2734",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "博多",
    "title": "福岡麵包超人兒童博物館 (博多Riverain室內主題樂園)",
    "category": "spot",
    "cost": "門票 1,800–2,200円 (1歲以上均一價，贈紀念品)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=福岡アンパンマンこどもミュージアム",
    "note": "📍福岡県福岡市博多区下川端町3-1 博多リバレインモール 5F・6F\n⏰10:00–17:00 (最後入場 16:00)\n🚇地下鐵「中洲川端站」直通\n✨專為親子家庭打造的夢幻室內樂園！玻璃天頂通風明亮不受雨天影響。設有麵包超人現場歌舞秀、果醬爺爺手作麵包坊（販售全角色造型現烤麵包）與多樣趣味滑梯體驗區。"
  },
  {
    "id": "v_gmap_1c4e5631",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "大濠公園",
    "title": "福岡城 (福岡城跡/黑田官兵衛長政名城/舞鶴公園天守台)",
    "category": "spot",
    "cost": "城跡散策免費 / 福岡城探訪館免費",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=福岡城跡",
    "note": "📍福岡県福岡市中央区城内1\n⏰全天開放 (三之丸三層櫓內部定時開放)\n🚇地下鐵機場線「赤坂站」或「大濠公園站」步行約8分鐘\n✨戰國軍師黑田官兵衛與其子黑田長政花費7年建成的百萬石名城，因黑田家發祥地岡山備前福岡而將此地命名為「福岡」。登上天守台石垣遺址，可將整個福岡市區天際線與大濠公園盡收眼底。"
  },
  {
    "id": "v_gmap_67169f5d",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "大濠公園",
    "title": "舞鶴公園 (福岡第一櫻花名所/春季櫻花祭夜間點燈)",
    "category": "spot",
    "cost": "免費參觀 (櫻花祭夜間點燈特定區域除外)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=舞鶴公園+福岡",
    "note": "📍福岡県福岡市中央区城内1-4\n⏰全天開放\n🚇地下鐵機場線「大濠公園站」或「赤坂站」步行約5分鐘\n✨與大濠公園相鄰，圍繞福岡城跡而建的歷史休閒公園。園內種植約1,000棵染井吉野櫻，春天落櫻如雪、倒映於古城護城河上，是福岡最著名的賞櫻野餐勝地。"
  },
  {
    "id": "v_gmap_3f93fd17",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "博多",
    "title": "住吉神社 (日本三大住吉神社之首/相撲古代力士像祈福)",
    "category": "spot",
    "cost": "境內免費參觀",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=住吉神社+福岡",
    "note": "📍福岡県福岡市博多区住吉3-1-51\n⏰09:00–17:00 (境內全天開放)\n🚇JR「博多站」博多口步行約10分鐘 / 渡邊通站步行約12分鐘\n✨全日本2129座住吉神社的起源始祖古社！本殿被指定為國家重要文化財，採用最古老神社建築樣式「住吉造」。社內有摸了能帶來力量與幸運的「古代力士像」，祈求航海安全與身心除穢開運。"
  },
  {
    "id": "v_gmap_f24fc133",
    "country": "日本",
    "prefecture": "福岡縣",
    "region": "柳川",
    "title": "柳川川下り 柳川遊船 (水鄉泛舟/船夫撐蒿竹竿唱歌穿橋)",
    "category": "spot",
    "cost": "乘船票 成人約 1,600–1,800円 / 兒童半價 (航程約60–70分鐘)",
    "bgColor": "#38ef7d",
    "url": "",
    "mapsUrl": "https://maps.google.com/?q=柳川川下り",
    "note": "📍福岡県柳川市三橋町高畠 (松月乘船場等各處碼頭)\n⏰09:00–17:00 (約每半小時一班)\n🚇西鐵天神大牟田線「西鐵柳川站」出站步行約3分鐘抵達碼頭\n✨九州威尼斯「柳川」必體驗！頭戴斗笠的船夫手持單支長竹竿靈巧撐船，穿梭於垂柳依依的江戶時代人工護城河，沿途吟唱傳統民謠並低頭巧過極窄古橋。下船後必吃剛出爐的「蒸籠鰻魚飯」！"
  }
];

// 🏷️ 全域專屬固定類型標籤與卡片底色色彩設定字典 (清晰濃郁版)
const CATEGORY_CONFIG = {
  all: { id: 'all', label: '全部類型', icon: '🌐', className: 'chip-all cat-all', bg: '#f1f5f9', cardBg: '#ffffff', color: '#334155', border: '#cbd5e1' },
  food: { id: 'food', label: '美食', icon: '🍜', className: 'chip-food cat-food', bg: '#ffffff', cardBg: '#ffedd5', color: '#9a3412', border: '#fdba74' },
  hotel: { id: 'hotel', label: '住宿', icon: '🏨', className: 'chip-hotel cat-hotel', bg: '#ffffff', cardBg: '#e0e7ff', color: '#312e81', border: '#a5b4fc' },
  spot: { id: 'spot', label: '景點', icon: '📍', className: 'chip-spot cat-spot', bg: '#ffffff', cardBg: '#dcfce7', color: '#14532d', border: '#86efac' },
  shop: { id: 'shop', label: '購物', icon: '🛍️', className: 'chip-shop cat-shop', bg: '#ffffff', cardBg: '#fce7f3', color: '#831843', border: '#f472b6' },
  transit: { id: 'transit', label: '交通', icon: '🚌', className: 'chip-transit cat-transit', bg: '#ffffff', cardBg: '#fef3c7', color: '#78350f', border: '#fcd34d' },
  action: { id: 'action', label: '動作', icon: '⚡', className: 'chip-action cat-action', bg: '#ffffff', cardBg: '#f3e8ff', color: '#581c87', border: '#d8b4fe' },
  day: { id: 'day', label: '天數', icon: '📅', className: 'chip-day cat-day', bg: '#ffffff', cardBg: '#ffffff', color: '#334155', border: '#cbd5e1' },
  period: { id: 'period', label: '時段', icon: '🕒', className: 'chip-period cat-period', bg: '#ffffff', cardBg: '#f0fdfa', color: '#0f766e', border: '#99f6e4' }
};

function inferPrefecture(item) {
  if (!item) return '福岡縣';
  if (item.prefecture && item.prefecture !== '所有' && item.prefecture !== '所有縣市' && item.prefecture !== '全部') {
    return item.prefecture;
  }
  const reg = item.region || '';
  const title = item.title || '';
  const note = item.note || '';
  const full = `${reg} ${title} ${note}`.toLowerCase();

  if (full.includes('宮崎') || full.includes('高千穗') || full.includes('高千穂')) return '宮崎縣';
  if (full.includes('由布院') || full.includes('湯布院') || full.includes('別府') || full.includes('大分') || full.includes('日田') || full.includes('豐後高田') || full.includes('宇佐')) return '大分縣';
  if (full.includes('熊本') || full.includes('阿蘇') || full.includes('黑川') || full.includes('城彩苑') || full.includes('水前寺') || full.includes('草千里')) return '熊本縣';
  if (full.includes('佐賀') || full.includes('武雄') || full.includes('嬉野') || full.includes('鳥栖') || full.includes('唐津') || full.includes('呼子') || full.includes('有田') || full.includes('吉野里') || full.includes('祐德') || full.includes('七釜') || full.includes('七ツ釜')) return '佐賀縣';
  if (full.includes('長崎') || full.includes('豪斯登堡') || full.includes('佐世保') || full.includes('九十九島') || full.includes('哥拉巴') || full.includes('稻佐山') || full.includes('大浦天主堂')) return '長崎縣';
  if (full.includes('東京') || full.includes('新宿') || full.includes('澀谷') || full.includes('銀座') || full.includes('淺草') || full.includes('秋葉原')) return '東京都';
  if (full.includes('大阪') || full.includes('心齋橋') || full.includes('難波') || full.includes('梅田')) return '大阪府';
  if (full.includes('京都') || full.includes('清水寺') || full.includes('嵐山')) return '京都府';
  if (full.includes('首爾') || full.includes('弘大') || full.includes('明洞')) return '首爾特別市';
  if (full.includes('釜山') || full.includes('海雲台')) return '釜山廣域市';
  if (full.includes('台北') || full.includes('西門') || full.includes('信義')) return '台北市';
  if (full.includes('台南') || full.includes('安平')) return '台南市';
  if (full.includes('曼谷')) return '曼谷';
  if (full.includes('清邁')) return '清邁';

  // 預設為福岡縣 (包含博多、天神、中洲、太宰府、門司港、小倉、絲島、柳川等)
  return '福岡縣';
}

function inferCategory(item) {
  if (typeof item === 'string') return item;
  if (!item) return 'spot';
  if (item.category && item.category !== 'undefined' && item.category !== '') return item.category;
  
  const text = ((item.title || '') + ' ' + (item.note || '') + ' ' + (item.cost || '') + ' ' + (item.region || '')).toLowerCase();
  if (['拉麵', '麵', '朝食', '食', '咖啡', '甜點', '燒', '章魚', '鰻魚', '明太子', '派', '餅', '肉', '居酒屋', '料理', '丼', '牛排', '餐', '吃', '飯'].some(k => text.includes(k))) return 'food';
  if (['飯店', '酒店', '民宿', '旅館', 'hotel', 'inn', 'resort', 'check-in', '入住', '退房'].some(k => text.includes(k))) return 'hotel';
  if (['超市', 'shoppers', '免稅店', '唐吉訶德', 'donki', '伴手禮', '買', '商店街', '百貨', '市場', 'outlet', '商場'].some(k => text.includes(k))) return 'shop';
  if (['機場', '車站', '地鐵', '西鐵', 'jr', '巴士', '航廈', '班次', '搭乘', '出關', '登機', '高鐵', '航線'].some(k => text.includes(k))) return 'transit';
  if (['提醒', '注意事項', '領取', '換匯', '網卡', 'esim', '保險', '填寫', '集合', '集合點'].some(k => text.includes(k))) return 'action';
  
  return 'spot';
}

function getCategoryMeta(catOrItem) {
  if (!catOrItem) return CATEGORY_CONFIG['spot'];
  let key = 'spot';
  if (typeof catOrItem === 'string') {
    key = catOrItem.toLowerCase().trim();
  } else if (typeof catOrItem === 'object') {
    key = inferCategory(catOrItem);
  }
  return CATEGORY_CONFIG[key] || CATEGORY_CONFIG['spot'];
}

class VerticalTimelineAppV17 {
  constructor() {
    this.isReadOnly = this.checkReadOnlyMode();
    this.projects = this.loadProjects();
    this.activeProjectId = this.loadActiveProjectId();
    this.vaultItems = this.loadVaultItems();
    this.locationHierarchy = this.loadLocationHierarchy();
    this.recentColors = this.loadRecentColors();
    
    this.selectedCountry = "日本";
    this.selectedPrefecture = "所有縣市";
    this.selectedRegion = "所有";
    this.selectedCategory = "all";
    this.selectedMainCategory = "all";
    this.currentView = 'mindmap';
    this.lastPlanView = 'mindmap';
    this.zoomLevel = 1.0;
    this.draggedVaultItem = null;
    this.pendingDeleteAction = null;
    this.vaultMode = 'vault'; // 'vault' or 'trip_folder'

    this.isPanning = false;
    this.startX = 0;
    this.startY = 0;
    this.scrollLeft = 0;
    this.scrollTop = 0;

    this.initElements();
    this.bindEvents();
    this.render();
    if (!this.isReadOnly) {
      this.saveProjects();
      this.saveVaultData();
    }
  }

  checkReadOnlyMode() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('mode') === 'readonly' || urlParams.get('view') === 'readonly';
  }

  initElements() {
    this.viewport = document.getElementById('mindmapViewport');
    this.canvas = document.getElementById('mindmapCanvas');
    this.svgConnectors = document.getElementById('svgConnectors');
    this.nodesLayer = document.getElementById('nodesLayer');
    this.outlineView = document.getElementById('outlineView');
    this.outlineTree = document.getElementById('outlineTree');
    this.tripTitleInput = document.getElementById('tripTitleInput');
    this.tripTabsBar = document.getElementById('tripTabsBar');

    this.btnZoomIn = document.getElementById('btnZoomIn');
    this.btnZoomOut = document.getElementById('btnZoomOut');
    this.zoomDisplay = document.getElementById('zoomDisplay');

    this.vaultView = document.getElementById('vaultView');
    this.tabVault = document.getElementById('tabVault');
    this.btnOpenVault = document.getElementById('btnOpenVault');
    this.btnBackToPlan = document.getElementById('btnBackToPlan');
    this.btnFloatingBackToPlan = document.getElementById('btnFloatingBackToPlan');
    this.vaultSearchInput = document.getElementById('vaultSearchInput');
    this.btnVaultSearchClear = document.getElementById('btnVaultSearchClear');
    this.vaultItemsCount = document.getElementById('vaultItemsCount');
    this.btnToggleAiBox = document.getElementById('btnToggleAiBox');
    this.vaultSearchKeyword = '';
    
    this.btnModeVault = document.getElementById('btnModeVault');
    this.btnModeTripFolder = document.getElementById('btnModeTripFolder');
    this.vaultAiBox = document.getElementById('vaultAiBox');
    this.vaultFilterBar = document.getElementById('vaultFilterBar');

    this.countryTabsRow = document.getElementById('countryTabsRow');
    this.vaultPrefectureTabs = document.getElementById('vaultPrefectureTabs');
    this.prefectureFilterLabel = document.getElementById('prefectureFilterLabel');
    this.btnAddPrefectureTag = document.getElementById('btnAddPrefectureTag');
    this.vaultRegionTabs = document.getElementById('vaultRegionTabs');
    this.regionFilterLabel = document.getElementById('regionFilterLabel');
    this.btnAddRegionTag = document.getElementById('btnAddRegionTag');
    this.vaultCategoryTabs = document.getElementById('vaultCategoryTabs');
    this.vaultCardList = document.getElementById('vaultCardList');
    this.mainCategoryChips = document.getElementById('mainCategoryChips');

    this.vaultQuickInput = document.getElementById('vaultQuickInput');
    this.vaultTargetRegion = document.getElementById('vaultTargetRegion');
    this.btnGenVaultCard = document.getElementById('btnGenVaultCard');

    this.mvPrefecture = document.getElementById('mvPrefecture');
    this.btnOpenManualVaultModal = document.getElementById('btnOpenManualVaultModal');
    this.manualVaultModal = document.getElementById('manualVaultModal');
    this.manualVaultForm = document.getElementById('manualVaultForm');
    this.btnCloseManualVaultModal = document.getElementById('btnCloseManualVaultModal');
    this.btnCancelManualVault = document.getElementById('btnCancelManualVault');

    this.newTripModal = document.getElementById('newTripModal');
    this.newTripForm = document.getElementById('newTripForm');
    this.btnCloseNewTripModal = document.getElementById('btnCloseNewTripModal');
    this.btnCancelNewTrip = document.getElementById('btnCancelNewTrip');
    this.newTripStartDateInput = document.getElementById('newTripStartDate');

    this.renameTripModal = document.getElementById('renameTripModal');
    this.renameTripForm = document.getElementById('renameTripForm');
    this.renameTripTitleInput = document.getElementById('renameTripTitleInput');
    this.renameTripIdInput = document.getElementById('renameTripId');
    this.btnCloseRenameTripModal = document.getElementById('btnCloseRenameTripModal');
    this.btnCancelRenameTrip = document.getElementById('btnCancelRenameTrip');

    this.placementModal = document.getElementById('placementModal');
    this.btnClosePlacementModal = document.getElementById('btnClosePlacementModal');
    this.placementSpotTargetName = document.getElementById('placementSpotTargetName');
    this.placementOptionsList = document.getElementById('placementOptionsList');

    this.addRegionModal = document.getElementById('addRegionModal');
    this.addRegionForm = document.getElementById('addRegionForm');
    this.btnCloseAddRegionModal = document.getElementById('btnCloseAddRegionModal');
    this.btnCancelAddRegion = document.getElementById('btnCancelAddRegion');

    this.confirmDeleteModal = document.getElementById('confirmDeleteModal');
    this.confirmDeleteText = document.getElementById('confirmDeleteText');
    this.btnCancelConfirmDelete = document.getElementById('btnCancelConfirmDelete');
    this.btnExecuteConfirmDelete = document.getElementById('btnExecuteConfirmDelete');

    this.modal = document.getElementById('nodeModal');
    this.nodeForm = document.getElementById('nodeForm');
    this.modalTitle = document.getElementById('modalTitle');
    this.hotelFieldsBox = document.getElementById('hotelFieldsBox');
    this.nodeCategorySelect = document.getElementById('nodeCategory');

    this.colorPickerGrid = document.getElementById('colorPickerGrid');
    this.nodeColorInput = document.getElementById('nodeColor');
    this.nodeColorCustom = document.getElementById('nodeColorCustom');

    if (this.isReadOnly) {
      document.body.classList.add('readonly-mode');
      document.getElementById('readonlyBanner').style.display = 'flex';
    }
  }

  loadProjects() {
    let saved = localStorage.getItem('triptree_tl_v17_projects');
    if (!saved) {
      try { saved = sessionStorage.getItem('triptree_tl_v17_projects'); } catch(e){}
    }
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed;
      } catch (e) {}
    }
    return JSON.parse(JSON.stringify(TOKYO_DEMO_PROJECTS));
  }

  loadActiveProjectId() {
    let saved = localStorage.getItem('triptree_tl_v17_active_id');
    if (!saved) {
      try { saved = sessionStorage.getItem('triptree_tl_v17_active_id'); } catch(e){}
    }
    if (saved && this.projects.some(p => p.id === saved)) return saved;
    return this.projects[0] ? this.projects[0].id : "proj_fukuoka_demo";
  }

  loadVaultItems() {
    let saved = localStorage.getItem('triptree_spot_vault_items_v17');
    if (!saved) {
      try { saved = sessionStorage.getItem('triptree_spot_vault_items_v17'); } catch(e){}
    }
    let items = [];
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) items = parsed;
      } catch(e){}
    }
    // 清洗過濾完全無文字與無標題之損毀卡片
    items = items.filter(it => {
      if (!it) return false;
      const hasTitle = it.title && it.title.trim().length > 0;
      const hasNote = it.note && it.note.trim().length > 0;
      const hasUrl = it.url && it.url.trim().length > 0;
      if (!hasTitle && !hasNote && !hasUrl) return false;
      if (!hasTitle && hasNote) {
        it.title = it.note.trim().split('\n')[0].substring(0, 25);
      }
      return true;
    });

    // 自動融入並修復最新分析之 IG 景點卡片 (確保既有儲存中空的貼文卡片能自動被中文詳細內容覆蓋)
    DEFAULT_SPOT_VAULT.forEach(defaultItem => {
      const existIdx = items.findIndex(it => it.id === defaultItem.id || (it.title && defaultItem.title && it.title.trim() === defaultItem.title.trim()) || (it.url && defaultItem.url && it.url.split('?')[0] === defaultItem.url.split('?')[0]));
      if (existIdx >= 0) {
        if (!items[existIdx].title || !items[existIdx].title.trim() || items[existIdx].title.startsWith('📍 貼文') || items[existIdx].title.startsWith('貼文')) {
          items[existIdx] = defaultItem;
        }
      } else {
        items.unshift(defaultItem);
      }
    });
    if (items.length === 0) items = JSON.parse(JSON.stringify(DEFAULT_SPOT_VAULT));
    return items;
  }

  loadLocationHierarchy() {
    let saved = localStorage.getItem('triptree_location_hierarchy_v3');
    if (!saved) {
      try { saved = sessionStorage.getItem('triptree_location_hierarchy_v3'); } catch(e){}
    }
    let hierarchy = JSON.parse(JSON.stringify(DEFAULT_LOCATION_HIERARCHY));
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object' && parsed['日本'] && !Array.isArray(parsed['日本'])) {
          hierarchy = parsed;
          // 自動補入新預設大區與小區，確保既有快取也能立即擁有新加入之區域
          Object.keys(DEFAULT_LOCATION_HIERARCHY).forEach(country => {
            if (!hierarchy[country]) {
              hierarchy[country] = DEFAULT_LOCATION_HIERARCHY[country];
            } else {
              Object.keys(DEFAULT_LOCATION_HIERARCHY[country]).forEach(pref => {
                if (!hierarchy[country][pref]) {
                  hierarchy[country][pref] = DEFAULT_LOCATION_HIERARCHY[country][pref];
                } else {
                  DEFAULT_LOCATION_HIERARCHY[country][pref].forEach(reg => {
                    if (!hierarchy[country][pref].includes(reg)) {
                      hierarchy[country][pref].push(reg);
                    }
                  });
                }
              });
            }
          });
          return hierarchy;
        }
      } catch(e){}
    }
    return hierarchy;
  }

  loadRecentColors() {
    let saved = localStorage.getItem('triptree_recent_colors');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) return parsed.slice(0, 6);
      } catch(e){}
    }
    return ['#ffffff', '#fef3c7', '#bbf7d0', '#dcfce7', '#e0e7ff', '#fecdd3'];
  }

  saveRecentColors() {
    try {
      localStorage.setItem('triptree_recent_colors', JSON.stringify(this.recentColors));
    } catch(e){}
  }

  addRecentColor(color) {
    if (!color || typeof color !== 'string') return;
    color = color.trim().toLowerCase();
    this.recentColors = this.recentColors.filter(c => c.toLowerCase() !== color);
    this.recentColors.unshift(color);
    if (this.recentColors.length > 6) {
      this.recentColors = this.recentColors.slice(0, 6);
    }
    this.saveRecentColors();
    this.renderRecentColors();
  }

  renderRecentColors() {
    const grid = document.getElementById('recentColorsGrid');
    if (!grid) return;
    grid.innerHTML = '';
    const currentColor = (this.nodeColorInput ? this.nodeColorInput.value : '').toLowerCase();

    for (let i = 0; i < 6; i++) {
      const color = this.recentColors[i] || '#ffffff';
      const swatch = document.createElement('div');
      swatch.className = 'recent-color-swatch' + (color.toLowerCase() === currentColor ? ' active' : '');
      swatch.setAttribute('data-color', color);
      swatch.style.backgroundColor = color;
      if (color.toLowerCase() === '#ffffff') swatch.style.borderColor = '#cbd5e1';
      swatch.title = `使用此歷史顏色: ${color}`;
      grid.appendChild(swatch);
    }
  }

  updateActiveColorSwatches(selectedColor) {
    if (!selectedColor) return;
    const colorLower = selectedColor.toLowerCase();

    if (this.colorPickerGrid) {
      this.colorPickerGrid.querySelectorAll('.color-swatch').forEach(s => {
        const sc = (s.getAttribute('data-color') || '').toLowerCase();
        s.classList.toggle('active', sc === colorLower);
      });
    }

    const recentGrid = document.getElementById('recentColorsGrid');
    if (recentGrid) {
      recentGrid.querySelectorAll('.recent-color-swatch').forEach(s => {
        const sc = (s.getAttribute('data-color') || '').toLowerCase();
        s.classList.toggle('active', sc === colorLower);
      });
    }
  }

  saveProjects() {
    if (this.isReadOnly) return;
    try {
      const projectsJson = JSON.stringify(this.projects);
      localStorage.setItem('triptree_tl_v17_projects', projectsJson);
      localStorage.setItem('triptree_tl_v17_active_id', this.activeProjectId);
      sessionStorage.setItem('triptree_tl_v17_projects', projectsJson);
      sessionStorage.setItem('triptree_tl_v17_active_id', this.activeProjectId);
      this.showToast('💾 行程已自動保存');
    } catch(e) {
      console.error('行程保存失敗：', e);
    }
  }

  saveVaultData() {
    if (this.isReadOnly) return;
    try {
      const vaultJson = JSON.stringify(this.vaultItems);
      const locationJson = JSON.stringify(this.locationHierarchy);
      localStorage.setItem('triptree_spot_vault_items_v17', vaultJson);
      localStorage.setItem('triptree_location_hierarchy_v3', locationJson);
      sessionStorage.setItem('triptree_spot_vault_items_v17', vaultJson);
      sessionStorage.setItem('triptree_location_hierarchy_v3', locationJson);
    } catch(e) {
      console.error('靈感庫保存失敗：', e);
    }
  }

  getActiveProject() {
    return this.projects.find(p => p.id === this.activeProjectId) || this.projects[0];
  }

  bindEvents() {
    window.addEventListener('beforeunload', () => {
      this.saveProjects();
      this.saveVaultData();
    });
    window.addEventListener('pagehide', () => {
      this.saveProjects();
      this.saveVaultData();
    });
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768 && this.zoomLevel !== 1.0) {
        this.setZoom(1.0);
      }
    });
    this.btnZoomIn.addEventListener('click', () => this.setZoom(this.zoomLevel + 0.15));
    this.btnZoomOut.addEventListener('click', () => this.setZoom(this.zoomLevel - 0.15));
    this.zoomDisplay.addEventListener('click', () => this.setZoom(1.0));

    if (this.btnOpenVault) {
      this.btnOpenVault.addEventListener('click', () => {
        if (this.currentView === 'vault') {
          this.switchView(this.lastPlanView || 'mindmap');
        } else {
          this.switchView('vault');
        }
      });
    }

    if (this.tabVault) {
      this.tabVault.addEventListener('click', () => {
        if (this.currentView === 'vault') {
          this.switchView(this.lastPlanView || 'mindmap');
        } else {
          this.switchView('vault');
        }
      });
    }

    if (this.btnBackToPlan) {
      this.btnBackToPlan.addEventListener('click', () => {
        this.switchView(this.lastPlanView || 'mindmap');
      });
    }

    if (this.btnFloatingBackToPlan) {
      this.btnFloatingBackToPlan.addEventListener('click', () => {
        this.switchView(this.lastPlanView || 'mindmap');
      });
    }

    if (this.vaultSearchInput) {
      this.vaultSearchInput.addEventListener('input', (e) => {
        this.vaultSearchKeyword = e.target.value;
        if (this.btnVaultSearchClear) {
          this.btnVaultSearchClear.style.display = this.vaultSearchKeyword ? 'flex' : 'none';
        }
        this.renderVault();
      });
    }

    if (this.btnVaultSearchClear) {
      this.btnVaultSearchClear.addEventListener('click', () => {
        this.vaultSearchInput.value = '';
        this.vaultSearchKeyword = '';
        this.btnVaultSearchClear.style.display = 'none';
        this.renderVault();
      });
    }

    if (this.btnToggleAiBox && this.vaultAiBox) {
      this.btnToggleAiBox.addEventListener('click', () => {
        const isHidden = this.vaultAiBox.style.display === 'none';
        this.vaultAiBox.style.display = isHidden ? 'block' : 'none';
        const txt = this.btnToggleAiBox.querySelector('.btn-text');
        if (txt) txt.textContent = isHidden ? '收合智能建卡 ▴' : '貼文智能建卡 ▾';
      });
    }

    if (this.btnModeVault && this.btnModeTripFolder) {
      this.btnModeVault.addEventListener('click', () => {
        this.vaultMode = 'vault';
        this.btnModeVault.classList.add('active');
        this.btnModeTripFolder.classList.remove('active');
        this.renderVault();
      });
      this.btnModeTripFolder.addEventListener('click', () => {
        this.vaultMode = 'trip_folder';
        this.btnModeTripFolder.classList.add('active');
        this.btnModeVault.classList.remove('active');
        this.renderVault();
      });
    }

    this.btnOpenManualVaultModal.addEventListener('click', () => {
      document.getElementById('mvEditingId').value = '';
      document.getElementById('mvModalTitle').innerHTML = '<span>✍️</span> 手動新增至景點靈感庫';
      document.getElementById('mvSubmitBtn').innerHTML = '✨ 存入靈感庫';
      this.manualVaultForm.reset();
      this.manualVaultModal.classList.add('active');
    });
    this.btnCloseManualVaultModal.addEventListener('click', () => this.manualVaultModal.classList.remove('active'));
    this.btnCancelManualVault.addEventListener('click', () => this.manualVaultModal.classList.remove('active'));

    this.manualVaultForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const editingId = document.getElementById('mvEditingId').value;
      const country = document.getElementById('mvCountry').value;
      const region = document.getElementById('mvRegion').value.trim();
      const title = document.getElementById('mvTitle').value.trim();

      if (!this.countryHierarchy[country]) this.countryHierarchy[country] = [`所有${country}`];
      if (!this.countryHierarchy[country].includes(region)) {
        this.countryHierarchy[country].push(region);
      }

      if (editingId) {
        // 修改既存靈感景點
        const target = this.vaultItems.find(v => v.id === editingId);
        if (target) {
          target.country = country;
          target.region = region;
          target.title = title;
          target.category = document.getElementById('mvCategory').value;
          target.cost = document.getElementById('mvCost').value.trim();
          target.mapsUrl = document.getElementById('mvMapsUrl').value.trim();
          target.url = document.getElementById('mvUrl').value.trim();
          target.note = document.getElementById('mvNote').value.trim();
        }
        this.showToast(`💾 已成功修改【${title}】！`);
      } else {
        // 新建靈感景點
        const newSpot = {
          id: 'vault_' + Date.now(),
          country: country,
          region: region,
          title: title,
          category: document.getElementById('mvCategory').value,
          cost: document.getElementById('mvCost').value.trim(),
          mapsUrl: document.getElementById('mvMapsUrl').value.trim(),
          url: document.getElementById('mvUrl').value.trim(),
          note: document.getElementById('mvNote').value.trim(),
          bgColor: '#e0e7ff'
        };
        this.vaultItems.unshift(newSpot);
        this.showToast(`✨ 已成功新增【${title}】至靈感庫！`);
      }

      this.selectedCountry = country;
      this.selectedRegion = region;

      this.saveVaultData();
      this.manualVaultModal.classList.remove('active');
      this.renderVault();
    });

    this.btnAddRegionTag.addEventListener('click', () => {
      this.addRegionModal.classList.add('active');
    });
    this.btnCloseAddRegionModal.addEventListener('click', () => this.addRegionModal.classList.remove('active'));
    this.btnCancelAddRegion.addEventListener('click', () => this.addRegionModal.classList.remove('active'));

    this.addRegionForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const country = document.getElementById('addRegionCountrySelect').value;
      const regionName = document.getElementById('newRegionNameInput').value.trim();

      if (regionName) {
        if (!this.countryHierarchy[country]) this.countryHierarchy[country] = [`所有${country}`];
        if (!this.countryHierarchy[country].includes(regionName)) {
          this.countryHierarchy[country].push(regionName);
        }

        this.selectedCountry = country;
        this.selectedRegion = regionName;
        this.saveVaultData();
        this.addRegionModal.classList.remove('active');
        document.getElementById('newRegionNameInput').value = '';
        this.renderVault();
        this.showToast(`✨ 已成功在【${country}】加入地區【${regionName}】！`);
      }
    });

    this.btnCancelConfirmDelete.addEventListener('click', () => this.confirmDeleteModal.classList.remove('active'));
    this.btnExecuteConfirmDelete.addEventListener('click', () => {
      if (this.pendingDeleteAction) {
        this.pendingDeleteAction();
        this.pendingDeleteAction = null;
      }
      this.confirmDeleteModal.classList.remove('active');
    });

    this.btnGenVaultCard.addEventListener('click', () => {
      const val = this.vaultQuickInput.value.trim();
      if (!val) { alert('請先輸入網址或景點名稱！'); return; }
      
      const region = this.vaultTargetRegion.value;
      const isUrl = val.startsWith('http://') || val.startsWith('https://');

      let newSpot = {
        id: 'vault_' + Date.now(),
        country: '日本',
        region: region,
        title: isUrl ? (val.includes('instagram') ? '📸 IG 驚喜推薦景點' : '🔗 網路精選景點') : '📍 ' + val,
        category: 'spot',
        cost: '門票/消費標註',
        bgColor: '#e0e7ff',
        url: isUrl ? val : '',
        mapsUrl: `https://maps.google.com/?q=${encodeURIComponent(val)}`,
        note: isUrl ? `來自網址：${val}` : `貼上新增之景點`
      };

      this.vaultItems.unshift(newSpot);
      this.saveVaultData();
      this.vaultQuickInput.value = '';
      this.renderVault();
      this.showToast(`✨ 成功將【${newSpot.title}】存入景點靈感庫！`);
    });

    document.getElementById('btnAddTripTab').addEventListener('click', () => {
      if (this.isReadOnly) return;
      const today = new Date().toISOString().split('T')[0];
      this.newTripStartDateInput.value = today;
      document.getElementById('newTripTitle').value = '東京 5 天 4 夜自由行';
      document.getElementById('newTripDays').value = '5';
      this.newTripModal.classList.add('active');
    });

    this.btnCloseNewTripModal.addEventListener('click', () => this.newTripModal.classList.remove('active'));
    this.btnCancelNewTrip.addEventListener('click', () => this.newTripModal.classList.remove('active'));

    if (this.btnCloseRenameTripModal) {
      this.btnCloseRenameTripModal.addEventListener('click', () => this.renameTripModal.classList.remove('active'));
    }
    if (this.btnCancelRenameTrip) {
      this.btnCancelRenameTrip.addEventListener('click', () => this.renameTripModal.classList.remove('active'));
    }
    if (this.renameTripForm) {
      this.renameTripForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const id = this.renameTripIdInput.value;
        const newTitle = this.renameTripTitleInput.value.trim();
        if (!newTitle) return;

        const proj = this.projects.find(p => p.id === id);
        if (proj) {
          proj.title = newTitle;
          if (proj.rootNode) proj.rootNode.title = newTitle;
          if (this.tripTitleInput && proj.id === this.activeProjectId) {
            this.tripTitleInput.value = newTitle;
          }
          this.saveProjects();
          this.render();
          this.showToast(`✨ 行程名稱已修改為「${newTitle}」！`);
        }
        this.renameTripModal.classList.remove('active');
      });
    }

    this.newTripForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const title = document.getElementById('newTripTitle').value.trim();
      const startDateStr = this.newTripStartDateInput.value;
      const daysCount = Math.max(1, parseInt(document.getElementById('newTripDays').value) || 3);

      const startDate = startDateStr ? new Date(startDateStr) : new Date();

      const newDaysChildren = [];
      for (let i = 0; i < daysCount; i++) {
        const currentDate = new Date(startDate);
        currentDate.setDate(startDate.getDate() + i);
        const m = currentDate.getMonth() + 1;
        const d = currentDate.getDate();
        const dayTitle = `Day ${i + 1}: ${m}/${d}`;

        newDaysChildren.push({
          id: `day_${Date.now()}_${i}`,
          title: dayTitle,
          category: 'day',
          expanded: true,
          bgColor: '#ffffff',
          children: [
            { id: `p_${Date.now()}_${i}_am`, title: '上午', category: 'period', expanded: true, bgColor: '#fef3c7', children: [] },
            { id: `p_${Date.now()}_${i}_pm`, title: '下午', category: 'period', expanded: true, bgColor: '#fef3c7', children: [] },
            { id: `p_${Date.now()}_${i}_night`, title: '晚上', category: 'period', expanded: true, bgColor: '#fef3c7', children: [] }
          ]
        });
      }

      const newProjId = 'proj_tl_' + Date.now();
      const newProj = {
        id: newProjId,
        title: title,
        rootNode: {
          id: 'root_tl_' + Date.now(),
          title: title,
          category: 'root',
          expanded: true,
          bgColor: '#ffffff',
          children: newDaysChildren
        }
      };

      this.projects.push(newProj);
      this.activeProjectId = newProjId;
      this.saveProjects();
      this.newTripModal.classList.remove('active');
      this.render();
      this.showToast(`🎉 成功自動生成 ${daysCount} 天行程與早中晚分支！`);
    });

    this.btnClosePlacementModal.addEventListener('click', () => this.placementModal.classList.remove('active'));

    this.viewport.addEventListener('wheel', (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.1 : -0.1;
        this.setZoom(this.zoomLevel + delta);
      }
    }, { passive: false });

    const btnShareCompanion = document.getElementById('btnShareCompanion');
    if (btnShareCompanion) {
      btnShareCompanion.addEventListener('click', () => this.shareCompanionLink());
    }

    this.tripTitleInput.addEventListener('input', (e) => {
      if (this.isReadOnly) return;
      const proj = this.getActiveProject();
      if (proj) {
        proj.title = e.target.value;
        if (proj.rootNode) proj.rootNode.title = e.target.value;
        this.saveProjects();
        this.renderTabs();
      }
    });

    document.getElementById('tabMindmap').addEventListener('click', () => this.switchView('mindmap'));
    document.getElementById('tabOutline').addEventListener('click', () => this.switchView('outline'));

    this.nodeCategorySelect.addEventListener('change', (e) => {
      this.hotelFieldsBox.style.display = e.target.value === 'hotel' ? 'flex' : 'none';
    });

    this.colorPickerGrid.addEventListener('click', (e) => {
      const swatch = e.target.closest('.color-swatch');
      if (swatch) {
        const color = swatch.getAttribute('data-color');
        this.nodeColorInput.value = color;
        this.nodeColorCustom.value = color;
        this.updateActiveColorSwatches(color);
      }
    });

    const recentGrid = document.getElementById('recentColorsGrid');
    if (recentGrid) {
      recentGrid.addEventListener('click', (e) => {
        const swatch = e.target.closest('.recent-color-swatch');
        if (swatch) {
          const color = swatch.getAttribute('data-color');
          this.nodeColorInput.value = color;
          this.nodeColorCustom.value = color;
          this.updateActiveColorSwatches(color);
        }
      });
    }

    this.nodeColorCustom.addEventListener('input', (e) => {
      const color = e.target.value;
      this.nodeColorInput.value = color;
      this.updateActiveColorSwatches(color);
    });

    this.nodeColorCustom.addEventListener('change', (e) => {
      const color = e.target.value;
      this.addRecentColor(color);
    });

    this.viewport.addEventListener('mousedown', (e) => {
      if (e.target.closest('.tree-node-group') || e.target.closest('.btn') || e.target.closest('.fab-btn') || e.target.closest('.zoom-controls-widget')) return;
      this.isPanning = true;
      this.startX = e.pageX - this.viewport.offsetLeft;
      this.startY = e.pageY - this.viewport.offsetTop;
      this.scrollLeft = this.viewport.scrollLeft;
      this.scrollTop = this.viewport.scrollTop;
    });

    this.viewport.addEventListener('mouseleave', () => this.isPanning = false);
    this.viewport.addEventListener('mouseup', () => this.isPanning = false);
    this.viewport.addEventListener('mousemove', (e) => {
      if (!this.isPanning) return;
      e.preventDefault();
      const x = e.pageX - this.viewport.offsetLeft;
      const y = e.pageY - this.viewport.offsetTop;
      this.viewport.scrollLeft = this.scrollLeft - (x - this.startX) * 1.2;
      this.viewport.scrollTop = this.scrollTop - (y - this.startY) * 1.2;
    });

    document.getElementById('fabAdd').addEventListener('click', () => {
      if (this.isReadOnly) return;
      const proj = this.getActiveProject();
      if (proj && proj.rootNode) this.openModalForAdd(proj.rootNode.id);
    });

    document.getElementById('btnExport').addEventListener('click', () => this.exportJSON());
    document.getElementById('btnImport').addEventListener('click', () => document.getElementById('fileImportInput').click());
    document.getElementById('fileImportInput').addEventListener('change', (e) => this.importJSON(e));
    
    document.getElementById('btnResetDemo').addEventListener('click', () => {
      if (this.isReadOnly) return;
      this.triggerCustomConfirm('確定要重置為最新範例資料嗎？（您的改動將會清空）', () => {
        localStorage.clear();
        this.projects = JSON.parse(JSON.stringify(TOKYO_DEMO_PROJECTS));
        this.activeProjectId = this.projects[0].id;
        this.vaultItems = JSON.parse(JSON.stringify(DEFAULT_SPOT_VAULT));
        this.countryHierarchy = JSON.parse(JSON.stringify(DEFAULT_COUNTRY_HIERARCHY));
        this.saveProjects();
        this.saveVaultData();
        this.render();
        this.showToast('✨ 已重置載入最新行程範例！');
      });
    });

    document.getElementById('nodeCategory').addEventListener('change', (e) => {
      const cat = e.target.value;
      this.hotelFieldsBox.style.display = (cat === 'hotel') ? 'flex' : 'none';
      const meta = getCategoryMeta(cat);
      if (meta && meta.cardBg) {
        this.nodeColorInput.value = meta.cardBg;
        this.nodeColorCustom.value = meta.cardBg;
        this.updateActiveColorSwatches(meta.cardBg);
      }
    });

    document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
    document.getElementById('btnCancelModal').addEventListener('click', () => this.closeModal());
    this.nodeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });
  }

  triggerCustomConfirm(msgText, onConfirmCallback) {
    this.confirmDeleteText.textContent = msgText;
    this.pendingDeleteAction = onConfirmCallback;
    this.confirmDeleteModal.classList.add('active');
  }

  renderVault() {
    if (this.vaultMode === 'trip_folder') {
      if (this.vaultAiBox) this.vaultAiBox.style.display = 'none';
      if (this.vaultFilterBar) this.vaultFilterBar.style.display = 'none';
      this.renderTripFolder();
      return;
    } else {
      if (this.vaultAiBox) this.vaultAiBox.style.display = 'none'; // keep collapsed by default
      if (this.vaultFilterBar) this.vaultFilterBar.style.display = 'flex';
    }

    const country = this.selectedCountry || "日本";
    const countryData = this.locationHierarchy[country] || { "所有縣市": ["全部"] };

    // 1. 🌏 渲染國家清單
    if (this.countryTabsRow) {
      this.countryTabsRow.innerHTML = '';
      const countries = Object.keys(this.locationHierarchy);
      countries.forEach(c => {
        const chip = document.createElement('button');
        chip.className = `country-chip ${c === this.selectedCountry ? 'active' : ''}`;
        let flag = '🌏';
        if (c === '日本') flag = '🇯🇵';
        if (c === '韓國') flag = '🇰🇷';
        if (c === '台灣') flag = '🇹🇼';
        if (c === '泰國') flag = '🇹🇭';
        chip.textContent = `${flag} ${c}`;
        
        chip.addEventListener('click', () => {
          this.selectedCountry = c;
          this.selectedPrefecture = "所有縣市";
          this.selectedRegion = "所有小區";
          this.renderVault();
        });
        this.countryTabsRow.appendChild(chip);
      });
    }

    // 2. 🗺️ 渲染大區域 / 縣市清單 (主要地點)
    if (this.vaultPrefectureTabs) {
      this.vaultPrefectureTabs.innerHTML = '';
      const prefectures = Object.keys(countryData);
      if (this.prefectureFilterLabel) {
        this.prefectureFilterLabel.textContent = `🗺️ 【${country}】大區域(縣市)：`;
      }

      prefectures.forEach(pref => {
        const chip = document.createElement('button');
        chip.className = `prefecture-chip ${pref === this.selectedPrefecture ? 'active' : ''}`;
        
        let icon = '📍';
        if (pref.startsWith('所有')) icon = '🌐';
        else if (pref.includes('福岡')) icon = '🗾';
        else if (pref.includes('大分')) icon = '♨️';
        else if (pref.includes('熊本')) icon = '🐻';
        else if (pref.includes('佐賀')) icon = '🏯';
        else if (pref.includes('長崎')) icon = '🌊';
        else if (pref.includes('東京')) icon = '🗼';
        else if (pref.includes('大阪')) icon = '🐙';
        else if (pref.includes('京都')) icon = '⛩️';

        chip.textContent = pref.startsWith('所有') ? `🌐 全部${country}` : `${icon} ${pref}`;
        chip.addEventListener('click', () => {
          this.selectedPrefecture = pref;
          this.selectedRegion = "所有小區";
          this.renderVault();
        });
        this.vaultPrefectureTabs.appendChild(chip);
      });
    }

    // 3. 📍 渲染小地區 / 街區商圈清單 (詳細地點)
    if (this.vaultRegionTabs) {
      this.vaultRegionTabs.innerHTML = '';
      const currentPref = this.selectedPrefecture;
      let subRegions = [];

      if (!currentPref || currentPref.startsWith('所有')) {
        if (this.regionFilterLabel) this.regionFilterLabel.textContent = `📍 街區 (小區)：`;
        subRegions = ["所有小區"];
      } else {
        if (this.regionFilterLabel) this.regionFilterLabel.textContent = `📍 【${currentPref}】小街區：`;
        subRegions = countryData[currentPref] || [`全部${currentPref}`];
      }

      subRegions.forEach(reg => {
        const chip = document.createElement('button');
        chip.className = `region-chip ${reg === this.selectedRegion ? 'active' : ''}`;
        chip.textContent = (reg.startsWith('所有') || reg.startsWith('全部')) ? `🌐 全部小區` : `📍 ${reg}`;
        chip.addEventListener('click', () => {
          this.selectedRegion = reg;
          this.renderVault();
        });
        this.vaultRegionTabs.appendChild(chip);
      });
    }

    // 4. 🏷️ 渲染靈感庫類型標籤選單
    if (this.vaultCategoryTabs) {
      this.vaultCategoryTabs.innerHTML = '';
      const filterCategories = ['all', 'food', 'hotel', 'spot', 'shop', 'transit', 'action'];
      filterCategories.forEach(catKey => {
        const meta = getCategoryMeta(catKey);
        const chip = document.createElement('button');
        chip.className = `category-chip ${meta.className} ${this.selectedCategory === catKey ? 'active' : ''}`;
        chip.innerHTML = `${meta.icon} ${meta.label}`;
        chip.addEventListener('click', () => {
          this.selectedCategory = catKey;
          this.renderVault();
        });
        this.vaultCategoryTabs.appendChild(chip);
      });
    }

    // 5. 🔍 景點過濾邏輯 (國家 ➔ 大區域/縣市 ➔ 小地區/街區 ➔ 類型 ➔ 關鍵字)
    this.vaultCardList.innerHTML = '';
    let filtered = this.vaultItems;

    // (1) 國家過濾
    if (this.selectedCountry !== '所有') {
      filtered = filtered.filter(item => (item.country === this.selectedCountry || (!item.country && this.selectedCountry === '日本')));
    }

    // (2) 大區域/縣市過濾
    if (this.selectedPrefecture && this.selectedPrefecture !== '所有' && !this.selectedPrefecture.startsWith('所有')) {
      filtered = filtered.filter(item => inferPrefecture(item) === this.selectedPrefecture);
    }

    // (3) 小地區/街區過濾
    if (this.selectedRegion && this.selectedRegion !== '所有' && !this.selectedRegion.startsWith('所有') && !this.selectedRegion.startsWith('全部')) {
      filtered = filtered.filter(item => item.region === this.selectedRegion);
    }

    // (4) 類型過濾
    if (this.selectedCategory && this.selectedCategory !== 'all' && this.selectedCategory !== '所有') {
      filtered = filtered.filter(item => inferCategory(item) === this.selectedCategory);
    }

    // (5) 搜尋關鍵字過濾
    if (this.vaultSearchKeyword && this.vaultSearchKeyword.trim()) {
      const kw = this.vaultSearchKeyword.trim().toLowerCase();
      filtered = filtered.filter(item => {
        const full = `${item.title || ''} ${item.note || ''} ${item.region || ''} ${inferPrefecture(item)} ${item.cost || ''} ${item.category || ''}`.toLowerCase();
        return full.includes(kw);
      });
    }

    if (this.vaultItemsCount) {
      this.vaultItemsCount.textContent = `共 ${filtered.length} 個景點`;
    }

    if (filtered.length === 0) {
      const catMeta = getCategoryMeta(this.selectedCategory);
      const catName = this.selectedCategory !== 'all' ? `【${catMeta.icon} ${catMeta.label}】` : '';
      const prefText = (!this.selectedPrefecture || this.selectedPrefecture.startsWith('所有')) ? '' : ` - ${this.selectedPrefecture}`;
      const regText = (!this.selectedRegion || this.selectedRegion.startsWith('所有') || this.selectedRegion.startsWith('全部')) ? '' : ` - ${this.selectedRegion}`;
      const kwNotice = this.vaultSearchKeyword ? `，且無符合「${this.vaultSearchKeyword}」之項目` : '';
      this.vaultCardList.innerHTML = `<div style="grid-column: 1/-1; text-align:center; color:#94a3b8; padding:36px 16px; font-size:0.95rem; font-weight:600;">【${this.selectedCountry}${prefText}${regText}】${catName}${kwNotice} 目前無景點小卡。可在上方搜尋其他關鍵字或手動新增！</div>`;
      return;
    }

    // 6. 渲染卡片畫廊
    filtered.forEach(item => {
      const catMeta = getCategoryMeta(item);
      const prefName = inferPrefecture(item);
      const card = document.createElement('div');
      card.className = `vault-item-card card-cat-${catMeta.id}`;
      card.setAttribute('draggable', 'true');
      const rawTitle = item.title || item.name || item.spotName || '';
      const displayTitle = rawTitle.trim() !== '' 
        ? rawTitle.trim() 
        : (item.note && item.note.trim() ? item.note.trim().split('\n')[0].substring(0, 25) : (item.url ? '📍 貼文 ' + item.url.split('?')[0].split('/').filter(Boolean).pop() : '📍 未命名景點'));

      card.innerHTML = `
        <div class="vault-card-header">
          <span class="vault-card-title" style="color: #0f172a; font-weight: 800;">${this.escapeHtml(displayTitle)}</span>
          <div style="display:flex; align-items:center; gap:6px; flex-wrap:wrap;">
            <span class="category-badge ${catMeta.className}">${catMeta.icon} ${catMeta.label}</span>
            <span class="prefecture-badge">🗺️ ${this.escapeHtml(prefName)}</span>
            ${item.region ? `<span class="region-badge">📍 ${this.escapeHtml(item.region)}</span>` : ''}
            <div class="vault-action-group">
              <button class="vault-action-btn btn-edit-vault" data-id="${item.id}" title="編輯此景點小卡">✏️ 編輯</button>
              <button class="vault-action-btn btn-delete-vault" data-id="${item.id}" title="刪除此景點小卡">🗑️ 刪除</button>
            </div>
          </div>
        </div>
        ${item.cost ? `<div style="font-size:0.84rem; color:#b45309; font-weight:800; margin-top:2px;">💰 ${this.escapeHtml(item.cost)}</div>` : ''}
        ${item.note ? `<div style="font-size:0.84rem; color:#334155; font-weight:600; line-height:1.45; white-space:pre-wrap; word-break:break-all; margin-top:4px;">${this.escapeHtml(item.note)}</div>` : ''}
        <div class="vault-card-footer" style="margin-top:10px; display:flex; justify-content:space-between; align-items:center; gap:8px; flex-wrap:wrap;">
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            ${item.mapsUrl ? `<a href="${this.escapeHtml(item.mapsUrl)}" target="_blank" class="node-link" style="font-size:0.8rem; padding:5px 12px; font-weight:700;">🗺️ 地圖</a>` : ''}
            ${item.url ? `<a href="${this.escapeHtml(item.url)}" target="_blank" class="node-link" style="font-size:0.8rem; padding:5px 12px; font-weight:700;">🔗 連結</a>` : ''}
          </div>
          <button class="vault-action-btn btn-assign-day" data-id="${item.id}" style="font-size:0.8rem; padding:6px 12px; background:#0284c7; color:#fff; border:none; border-radius:6px; cursor:pointer; font-weight:700;">📍 放至指定日期</button>
        </div>
      `;

      card.addEventListener('dragstart', (e) => {
        this.draggedVaultItem = item;
        e.dataTransfer.setData('application/json', JSON.stringify(item));
        e.dataTransfer.effectAllowed = 'copy';
      });

      card.querySelector('.btn-assign-day').addEventListener('click', (e) => {
        e.stopPropagation();
        this.openPlacementModal(item);
      });

      card.querySelector('.btn-edit-vault').addEventListener('click', (e) => {
        e.stopPropagation();
        this.openEditVaultModal(item);
      });

      card.querySelector('.btn-delete-vault').addEventListener('click', (e) => {
        e.stopPropagation();
        this.triggerCustomConfirm(`確定要從靈感庫中刪除【${item.title}】嗎？此動作無法復原。`, () => {
          this.vaultItems = this.vaultItems.filter(v => v.id !== item.id);
          this.saveVaultData();
          this.renderVault();
          this.showToast(`🗑️ 已成功刪除【${item.title}】`);
        });
      });

      this.vaultCardList.appendChild(card);
    });
  }

  renderTripFolder() {
    this.vaultCardList.innerHTML = '';
    const proj = this.getActiveProject();
    if (!proj || !proj.rootNode) {
      this.vaultCardList.innerHTML = `<div style="text-align:center; color:#94a3b8; padding:24px;">目前尚未選擇任何行程項目。</div>`;
      return;
    }

    const isExcludedFromTripFolder = (n) => {
      if (!n) return true;
      const cat = n.category;
      if (cat === 'day' || cat === 'period' || cat === 'root' || cat === 'action' || cat === 'transit') return true;
      const title = n.title || '';
      if (title.startsWith('Day ') || title.includes('Day')) return true;
      if (['上午', '下午', '晚上', '全天', '深夜'].some(t => title.includes(t)) && title.length <= 6) return true;
      if (['起飛', '抵達', 'Check-in', 'check in', '辦理入住', '出關', '登機', '搭乘'].some(t => title.includes(t))) return true;
      return false;
    };

    const spots = [];
    const traverse = (node, dayTitle = "", periodTitle = "") => {
      let d = dayTitle;
      let p = periodTitle;
      if (node.category === 'day' || (node.title && (node.title.startsWith('Day ') || node.title.includes('Day')))) {
        d = node.title;
      } else if (node.category === 'period' || (node.title && ['上午', '下午', '晚上', '全天', '深夜'].some(t => node.title.includes(t)) && node.title.length <= 6)) {
        p = node.title;
      }
      
      if (!isExcludedFromTripFolder(node)) {
        spots.push({ node, dayTitle: d, periodTitle: p });
      }

      if (node.children) {
        node.children.forEach(child => traverse(child, d, p));
      }
    };
    traverse(proj.rootNode);

    const header = document.createElement('div');
    header.className = 'trip-folder-header';
    header.innerHTML = `
      <div class="trip-folder-title">
        <span>📁 【${this.escapeHtml(proj.title)}】專屬景點清單</span>
        <span style="font-size:0.8rem; background:#bbf7d0; color:#14532d; padding:2px 8px; border-radius:10px; font-weight:800;">共 ${spots.length} 個安排</span>
      </div>
      <div style="font-size:0.8rem; color:#15803d; margin-top:6px; line-height:1.4;">
        💡 這裡彙整本行程中安排的所有景點（已自動排除日期與時段標籤）。刪除行程時本資料夾隨之刪除，完全不影響大景點靈感庫！
      </div>
    `;
    this.vaultCardList.appendChild(header);

    if (spots.length === 0) {
      const emptyMsg = document.createElement('div');
      emptyMsg.style.cssText = "text-align:center; color:#94a3b8; padding:24px; font-size:0.88rem; grid-column:1 / -1;";
      emptyMsg.textContent = "此行程目前尚未排入任何景點卡片！可以切換回「📦 全部景點靈感庫」將景點拖拉近來。";
      this.vaultCardList.appendChild(emptyMsg);
      return;
    }

    spots.forEach(({ node, dayTitle, periodTitle }) => {
      const catMeta = getCategoryMeta(node);
      const card = document.createElement('div');
      card.className = `vault-item-card card-cat-${catMeta.id}`;
      card.style.borderLeft = `5px solid ${catMeta.border}`;

      card.innerHTML = `
        <div class="vault-card-header" style="display:flex; flex-direction:column; align-items:flex-start; gap:6px; width:100%;">
          ${(dayTitle || periodTitle) ? `
            <div style="font-size:0.75rem; background:#fef3c7; color:#92400e; font-weight:800; padding:3px 8px; border-radius:6px; width:100%; box-sizing:border-box; word-break:break-all;">
              📅 ${this.escapeHtml(dayTitle || '')} ${periodTitle ? '➔ ' + this.escapeHtml(periodTitle) : ''}
            </div>
          ` : ''}
          <div style="display:flex; align-items:center; justify-content:space-between; width:100%; gap:6px; flex-wrap:wrap;">
            <div class="vault-card-title" style="font-size:0.98rem; font-weight:800; color:#1e293b; line-height:1.4; word-break:break-all;">
              ${catMeta.icon} ${this.escapeHtml(node.title)}
            </div>
            <span class="category-badge ${catMeta.className}">${catMeta.icon} ${catMeta.label}</span>
          </div>
        </div>
        ${node.cost ? `<div style="font-size:0.8rem; color:#0f766e; font-weight:700; margin-top:2px;">💰 ${this.escapeHtml(node.cost)}</div>` : ''}
        ${node.note ? `<div style="font-size:0.82rem; color:#475569; font-weight:600; line-height:1.35; margin-top:4px; word-break:break-all;">${this.escapeHtml(node.note)}</div>` : ''}
        <div class="vault-card-footer" style="margin-top:8px; display:flex; gap:8px; flex-wrap:wrap; justify-content:space-between; align-items:center;">
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            <button class="btn-locate-mindmap" data-id="${node.id}" style="font-size:0.78rem; padding:5px 10px; background:#e0f2fe; color:#0369a1; border:1px solid #bae6fd; border-radius:6px; cursor:pointer; font-weight:700;">🎯 定位至心智圖</button>
            ${node.mapsUrl ? `<a href="${this.escapeHtml(node.mapsUrl)}" target="_blank" class="node-link" style="font-size:0.78rem; padding:5px 10px;">🗺️ 地圖</a>` : ''}
          </div>
          <button class="btn-remove-from-trip" data-id="${node.id}" style="font-size:0.78rem; padding:5px 10px; background:#fef2f2; color:#b91c1c; border:1px solid #fca5a5; border-radius:6px; cursor:pointer; font-weight:700;">🗑️ 從本行程移除</button>
        </div>
      `;

      card.querySelector('.btn-locate-mindmap').addEventListener('click', (e) => {
        e.stopPropagation();
        const targetEl = document.querySelector(`[data-id="${node.id}"]`);
        if (targetEl) {
          targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
          targetEl.classList.add('mindmap-node-highlight');
          setTimeout(() => targetEl.classList.remove('mindmap-node-highlight'), 2000);
          this.showToast(`🎯 已將鏡頭定位至【${node.title}】！`);
        }
      });

      card.querySelector('.btn-remove-from-trip').addEventListener('click', (e) => {
        e.stopPropagation();
        this.triggerCustomConfirm(`確定要從行程「${proj.title}」中移除【${node.title}】嗎？（靈感庫中資料不受影響）`, () => {
          this.deleteNode(proj.rootNode, node.id);
          this.saveProjects();
          this.render();
          this.renderVault();
          this.showToast(`🗑️ 已從本行程中移除【${node.title}】`);
        });
      });

      this.vaultCardList.appendChild(card);
    });
  }

  openEditVaultModal(item) {
    document.getElementById('mvEditingId').value = item.id;
    document.getElementById('mvModalTitle').innerHTML = '<span>✏️</span> 編輯景點靈感卡片';
    document.getElementById('mvSubmitBtn').innerHTML = '💾 儲存修改';
    
    document.getElementById('mvCountry').value = item.country || '日本';
    if (this.mvPrefecture) this.mvPrefecture.value = item.prefecture || inferPrefecture(item);
      document.getElementById('mvRegion').value = item.region || '';
    document.getElementById('mvTitle').value = item.title || '';
    document.getElementById('mvCategory').value = item.category || 'spot';
    document.getElementById('mvCost').value = item.cost || '';
    document.getElementById('mvMapsUrl').value = item.mapsUrl || '';
    document.getElementById('mvUrl').value = item.url || '';
    document.getElementById('mvNote').value = item.note || '';

    this.manualVaultModal.classList.add('active');
  }

  openAssignDayModal(item) {
    this.openPlacementModal(item);
  }

  openPlacementModal(item) {
    if (this.isReadOnly) return;
    const proj = this.getActiveProject();
    if (!proj || !proj.rootNode) return;

    const days = proj.rootNode.children ? proj.rootNode.children.filter(c => c.category === 'day') : [];
    if (days.length === 0) {
      alert('請先在行程中創建至少一天行程！');
      return;
    }

    this.placementSpotTargetName.textContent = `請選擇要將【${item.title}】放置在哪一天哪個時段：`;
    this.placementOptionsList.innerHTML = '';

    days.forEach((day) => {
      const periods = day.children ? day.children.filter(c => c.category === 'period') : [];
      if (periods.length > 0) {
        periods.forEach(p => {
          const btn = document.createElement('button');
          btn.className = 'placement-btn';
          btn.innerHTML = `
            <span>📅 ${this.escapeHtml(day.title)} ➔ 🕒 ${this.escapeHtml(p.title)}</span>
            <span style="color:#0d9488;">＋ 放入此處</span>
          `;
          btn.addEventListener('click', () => {
            this.insertVaultItemIntoNode(item, p);
            this.placementModal.classList.remove('active');
          });
          this.placementOptionsList.appendChild(btn);
        });
      } else {
        const btn = document.createElement('button');
        btn.className = 'placement-btn';
        btn.innerHTML = `
          <span>📅 ${this.escapeHtml(day.title)}</span>
          <span style="color:#0d9488;">＋ 放入此處</span>
        `;
        btn.addEventListener('click', () => {
          this.insertVaultItemIntoNode(item, day);
          this.placementModal.classList.remove('active');
        });
        this.placementOptionsList.appendChild(btn);
      }
    });

    this.placementModal.classList.add('active');
  }

  insertVaultItemIntoNode(item, targetNode) {
    if (!targetNode.children) targetNode.children = [];
    
    // 使用隨機數確保 ID 絕對不重複 (解決快速點擊重複生成相同 Date.now 的 BUG)
    const uniqueId = 'spot_' + Date.now() + '_' + Math.floor(Math.random() * 1000);
    
    targetNode.children.push({
      id: uniqueId,
      title: item.title,
      category: item.category || 'spot',
      cost: item.cost || '',
      bgColor: item.bgColor || '#e0e7ff',
      url: item.url || '',
      mapsUrl: item.mapsUrl || '',
      note: item.note || '',
      expanded: true,
      children: []
    });

    this.saveProjects();
    this.render();
    this.showToast(`🎉 成功將【${item.title}】加入 ${targetNode.title}！`);
  }

  shareCompanionLink() {
    const baseUrl = window.location.origin + window.location.pathname;
    const readonlyUrl = `${baseUrl}?mode=readonly`;
    
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(readonlyUrl).then(() => {
        alert(`🎉 旅伴唯讀網址已成功複製！\n\n網址：\n${readonlyUrl}\n\n您可直接貼給旅伴，他們點開後只能檢視瀏覽與點擊地圖，無法修改您的行程！`);
      });
    } else {
      prompt('請複製以下「旅伴唯讀網址」給您的同行夥伴：', readonlyUrl);
    }
  }

  setZoom(level) {
    this.zoomLevel = Math.max(0.4, Math.min(2.2, level));
    this.canvas.style.transform = `scale(${this.zoomLevel})`;
    this.zoomDisplay.textContent = `${Math.round(this.zoomLevel * 100)}%`;
  }

  switchView(view) {
    if (view === 'mindmap' || view === 'outline') {
      this.lastPlanView = view;
    }
    this.currentView = view;
    const tabMindmap = document.getElementById('tabMindmap');
    const tabOutline = document.getElementById('tabOutline');
    const tabVault = document.getElementById('tabVault');
    if (tabMindmap) tabMindmap.classList.toggle('active', view === 'mindmap');
    if (tabOutline) tabOutline.classList.toggle('active', view === 'outline');
    if (tabVault) tabVault.classList.toggle('active', view === 'vault');

    // 動態切換頂部導航列「景點靈感庫 / 返回排行程」按鈕外觀與文字
    if (this.btnOpenVault) {
      if (view === 'vault') {
        this.btnOpenVault.innerHTML = `<span>🌲</span> <span class="btn-text">返回排行程</span>`;
        this.btnOpenVault.title = "返回排行程頁面";
        this.btnOpenVault.classList.add('is-back-mode');
      } else {
        this.btnOpenVault.innerHTML = `<span>📦</span> <span class="btn-text">景點靈感庫</span>`;
        this.btnOpenVault.title = "開啟景點資料庫 / 靈感庫";
        this.btnOpenVault.classList.remove('is-back-mode');
      }
    }

    if (view === 'mindmap') {
      this.viewport.style.display = 'block';
      this.outlineView.style.display = 'none';
      if (this.vaultView) this.vaultView.style.display = 'none';
      this.renderMindmap();
    } else if (view === 'outline') {
      this.viewport.style.display = 'none';
      this.outlineView.style.display = 'block';
      if (this.vaultView) this.vaultView.style.display = 'none';
      this.renderOutline();
    } else if (view === 'vault') {
      this.viewport.style.display = 'none';
      this.outlineView.style.display = 'none';
      if (this.vaultView) this.vaultView.style.display = 'block';
      this.renderVault();
    }
    this.applyMainCategoryFilter();
  }

  renderMainCategoryFilter() {
    if (!this.mainCategoryChips) return;
    this.mainCategoryChips.innerHTML = '';

    const categories = ['all', 'food', 'hotel', 'spot', 'shop', 'transit', 'action'];
    categories.forEach(catKey => {
      const meta = getCategoryMeta(catKey);
      const chip = document.createElement('button');
      chip.className = `main-cat-chip ${meta.className} ${this.selectedMainCategory === catKey ? 'active' : ''}`;
      chip.innerHTML = `${meta.icon} ${meta.label}`;
      chip.addEventListener('click', () => {
        this.selectedMainCategory = catKey;
        this.renderMainCategoryFilter();
        this.applyMainCategoryFilter();
      });
      this.mainCategoryChips.appendChild(chip);
    });
  }

  applyMainCategoryFilter() {
    const cat = this.selectedMainCategory;
    if (!cat || cat === 'all') {
      document.querySelectorAll('.md-tree-card, .mobile-spot-item').forEach(el => {
        el.classList.remove('is-category-dimmed', 'is-category-matched');
      });
      return;
    }

    // In Mindmap Tree
    document.querySelectorAll('.md-tree-card').forEach(el => {
      const id = el.getAttribute('data-id');
      const proj = this.getActiveProject();
      if (!proj || !proj.rootNode) return;
      const node = this.findNode(proj.rootNode, id);
      if (!node) return;

      if (node.category === 'root') return;

      if (node.category === 'day' || node.category === 'period') {
        el.classList.remove('is-category-dimmed', 'is-category-matched');
      } else if (node.category === cat) {
        el.classList.remove('is-category-dimmed');
        el.classList.add('is-category-matched');
      } else {
        el.classList.remove('is-category-matched');
        el.classList.add('is-category-dimmed');
      }
    });

    // In Mobile Outline
    document.querySelectorAll('.mobile-spot-item').forEach(el => {
      const id = el.getAttribute('data-id');
      const proj = this.getActiveProject();
      if (!proj || !proj.rootNode) return;
      const node = this.findNode(proj.rootNode, id);
      if (!node) return;

      if (node.category === cat) {
        el.classList.remove('is-category-dimmed');
        el.classList.add('is-category-matched');
      } else {
        el.classList.remove('is-category-matched');
        el.classList.add('is-category-dimmed');
      }
    });
  }

  render() {
    this.renderTabs();
    this.renderMainCategoryFilter();
    const proj = this.getActiveProject();
    if (proj) {
      this.tripTitleInput.value = proj.title || "🏮 福岡 3 天 2 夜 櫛田神社輕旅行";
      if (this.currentView === 'mindmap') this.renderMindmap();
      else if (this.currentView === 'outline') this.renderOutline();
      else if (this.currentView === 'vault') this.renderVault();
      this.applyMainCategoryFilter();
    }
  }

  promptRenameTrip(proj) {
    if (!proj || this.isReadOnly) return;
    if (this.renameTripModal && this.renameTripTitleInput && this.renameTripIdInput) {
      this.renameTripIdInput.value = proj.id;
      this.renameTripTitleInput.value = proj.title || '';
      this.renameTripModal.classList.add('active');
      setTimeout(() => {
        this.renameTripTitleInput.focus();
        this.renameTripTitleInput.select();
      }, 100);
    }
  }

  renderTabs() {
    this.tripTabsBar.innerHTML = '';
    this.projects.forEach(proj => {
      const tab = document.createElement('div');
      tab.className = `folder-tab ${proj.id === this.activeProjectId ? 'active' : ''}`;
      tab.innerHTML = `
        <span class="tab-title-text" title="雙擊可修改行程名稱">📁 ${this.escapeHtml(proj.title)}</span>
        ${!this.isReadOnly ? `
          <span class="tab-edit" title="修改行程名稱">✏️</span>
          ${this.projects.length > 1 ? `<span class="tab-close" title="刪除行程">✕</span>` : ''}
        ` : ''}
      `;
      tab.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-edit')) {
          e.stopPropagation();
          this.promptRenameTrip(proj);
          return;
        }
        if (e.target.classList.contains('tab-close')) {
          e.stopPropagation();
          this.triggerCustomConfirm(`確定要刪除行程「${proj.title}」？`, () => {
            this.projects = this.projects.filter(p => p.id !== proj.id);
            if (this.activeProjectId === proj.id) this.activeProjectId = this.projects[0].id;
            this.saveProjects();
            this.render();
          });
          return;
        }
        this.activeProjectId = proj.id;
        this.saveProjects();
        this.render();
      });

      tab.addEventListener('dblclick', (e) => {
        if (this.isReadOnly) return;
        e.stopPropagation();
        this.promptRenameTrip(proj);
      });

      this.tripTabsBar.appendChild(tab);
    });
  }

  // ==========================================================================
  // 📐 V17 終極實體 DOM 物理高度量測佈局引擎 (Physical Tree Layout Engine)
  // 徹底解決重疊，且 100% 保持心智圖「父子水平對齊」的優美樹狀結構！
  // ==========================================================================
  // ==========================================================================
  // 📐 V25 絕美 Markdown 階層式心智圖 (Hierarchical Markdown Tree Layout)
  // 將原本難以在手機與電腦上瀏覽的 2D 畫布重構為「層層向下」的 Markdown 樹狀文檔
  // 同時支援靈感庫拖放 (Drag & Drop) 及全部節點的編輯/刪除/新增功能
  // ==========================================================================
  renderMindmap() {
    if (window.innerWidth <= 768) {
      this.setZoom(1.0);
    }
    this.nodesLayer.style = '';
    this.nodesLayer.innerHTML = '';
    this.svgConnectors.innerHTML = '';
    const proj = this.getActiveProject();
    if (!proj || !proj.rootNode) return;
    const root = proj.rootNode;

    const container = document.createElement('div');
    container.className = 'md-tree-container';

    // 1. Root Title Header Banner
    const banner = document.createElement('div');
    banner.className = 'md-root-banner';
    banner.innerHTML = `
      <h1 class="md-root-title" style="cursor:pointer;" title="點擊修改行程名稱">
        🏮 ${this.escapeHtml(root.title)} ${!this.isReadOnly ? `<span style="font-size:1rem; opacity:0.85; margin-left:6px;">✏️</span>` : ''}
      </h1>
      ${!this.isReadOnly ? `<button class="md-add-btn" style="background:#ffffff; color:#0f766e; border:none; padding:6px 14px; font-weight:800;" data-action="add-child" data-parent="${root.id}">➕ 新增行程天數 (Day)</button>` : ''}
    `;
    if (!this.isReadOnly) {
      const rootTitleEl = banner.querySelector('.md-root-title');
      if (rootTitleEl) {
        rootTitleEl.addEventListener('click', () => this.promptRenameTrip(proj));
      }
    }
    container.appendChild(banner);

    // 2. 遞迴渲染無限層級樹狀卡片
    if (root.children && root.children.length > 0) {
      root.children.forEach(childNode => {
        const childEl = this.renderMarkdownTreeNode(childNode, 1, root);
        container.appendChild(childEl);
      });
    } else {
      const emptyBox = document.createElement('div');
      emptyBox.className = 'md-tree-card level-day';
      emptyBox.style.textAlign = 'center';
      emptyBox.style.color = '#64748b';
      emptyBox.innerHTML = `目前行程尚無任何項目，請點擊上方「➕ 新增行程天數 (Day)」開始安排行程！`;
      container.appendChild(emptyBox);
    }

    this.nodesLayer.appendChild(container);
    this.bindMarkdownTreeEvents(container, root);

    // viewport 重設於正中央最頂部，無須往右滾動
    setTimeout(() => {
      this.viewport.scrollLeft = 0;
      this.viewport.scrollTop = 0;
    }, 10);
  }

  renderMarkdownTreeNode(node, level, root) {
    const catMeta = getCategoryMeta(node);
    let icon = catMeta.icon;

    let cardClass = 'md-tree-card';
    if (level === 1) cardClass += ' level-day';
    else if (level === 2) cardClass += ' level-period';
    else cardClass += ` level-spot card-cat-${catMeta.id}`;

    const cardEl = document.createElement('div');
    cardEl.className = cardClass;
    cardEl.setAttribute('data-id', node.id);
    if (!this.isReadOnly && node.category !== 'root') {
      cardEl.setAttribute('draggable', 'true');
    }

    let html = `
      <div class="md-card-header">
        <span class="md-card-title">${icon} ${this.escapeHtml(node.title)}</span>
        <div style="display:flex; gap:6px; align-items:center; flex-wrap:wrap;">
          ${node.category !== 'day' && node.category !== 'period' && node.category !== 'root' ? `<span class="category-badge ${catMeta.className}">${catMeta.icon} ${catMeta.label}</span>` : ''}
          ${node.cost ? `<span class="node-badge">💰 ${this.escapeHtml(node.cost)}</span>` : ''}
          ${!this.isReadOnly ? `
            <button class="md-add-btn" data-action="add-child" data-parent="${node.id}" title="在此卡片底下附屬新增卡片">➕ 附屬新增</button>
            <button class="mobile-action-btn btn-move-up" data-id="${node.id}" title="向上調整同層排序">⬆️</button>
            <button class="mobile-action-btn btn-move-down" data-id="${node.id}" title="向下調整同層排序">⬇️</button>
            <button class="mobile-action-btn btn-edit-spot" data-id="${node.id}" title="編輯或更動附屬位置">✏️</button>
            <button class="mobile-action-btn btn-del-spot" data-id="${node.id}" title="刪除此項目">🗑️</button>
          ` : ''}
        </div>
      </div>
    `;

    if (node.category === 'hotel' && (node.hotelCheckIn || node.hotelRoomType)) {
      html += `
        <div class="mobile-hotel-box">
          ${node.hotelCheckIn ? `<div>🏨 ${this.escapeHtml(node.hotelCheckIn)} | ${this.escapeHtml(node.hotelCheckOut || '')}</div>` : ''}
          ${node.hotelRoomType ? `<div>🛏️ ${this.escapeHtml(node.hotelRoomType)}</div>` : ''}
        </div>
      `;
    }

    if (node.imageUrl) {
      html += `<img class="node-thumb" src="${this.escapeHtml(node.imageUrl)}" alt="thumb" loading="lazy">`;
    }

    if (node.note) {
      html += `<div class="mobile-note-box">${this.escapeHtml(node.note)}</div>`;
    }

    if (node.mapsUrl || node.url) {
      html += `<div class="mobile-btn-group" style="margin-top:4px;">`;
      if (node.mapsUrl) html += `<a href="${this.escapeHtml(node.mapsUrl)}" target="_blank" class="mobile-action-btn" style="background:#e0f2fe; color:#0369a1; border-color:#bae6fd;">🗺️ Google 地圖</a>`;
      if (node.url) html += `<a href="${this.escapeHtml(node.url)}" target="_blank" class="mobile-action-btn">🔗 官方網站</a>`;
      html += `</div>`;
    }

    cardEl.innerHTML = html;

    // 綁定 Drag & Drop (支援從靈感庫拖入 & 樹狀卡片之間拖曳移動附屬位置)
    this.bindNodeDragDrop(cardEl, node, root);

    // 遞迴渲染子節點 (往後縮排顯示附屬關係)
    if (node.children && node.children.length > 0) {
      const childrenContainer = document.createElement('div');
      childrenContainer.className = 'md-children-list';
      node.children.forEach(child => {
        const childEl = this.renderMarkdownTreeNode(child, level + 1, root);
        childrenContainer.appendChild(childEl);
      });
      cardEl.appendChild(childrenContainer);
    }

    return cardEl;
  }

  isNodeDescendant(parent, targetId) {
    if (!parent || !parent.children) return false;
    for (let child of parent.children) {
      if (child.id === targetId) return true;
      if (this.isNodeDescendant(child, targetId)) return true;
    }
    return false;
  }

  findParentNode(current, targetId) {
    if (!current || !current.children) return null;
    for (let child of current.children) {
      if (child.id === targetId) return current;
      const found = this.findParentNode(child, targetId);
      if (found) return found;
    }
    return null;
  }

  moveNodeToNewParent(root, nodeId, newParentId) {
    const node = this.findNode(root, nodeId);
    const oldParent = this.findParentNode(root, nodeId);
    const newParent = this.findNode(root, newParentId);
    if (!node || !oldParent || !newParent) return;
    if (oldParent.id === newParentId) return;

    oldParent.children = oldParent.children.filter(c => c.id !== nodeId);
    if (!newParent.children) newParent.children = [];
    newParent.children.push(node);
    newParent.expanded = true;

    this.saveProjects();
    this.render();
    this.showToast(`🎉 已將【${node.title}】移動附屬至【${newParent.title}】底下！`);
  }

  moveSiblingNode(root, nodeId, direction) {
    const parent = this.findParentNode(root, nodeId);
    if (!parent || !parent.children) return;

    const idx = parent.children.findIndex(c => c.id === nodeId);
    if (idx === -1) return;

    if (direction === 'up' && idx > 0) {
      const temp = parent.children[idx];
      parent.children[idx] = parent.children[idx - 1];
      parent.children[idx - 1] = temp;
      this.saveProjects();
      this.render();
      this.showToast(`⬆️ 已將「${temp.title}」向上調整順序！`);
    } else if (direction === 'down' && idx < parent.children.length - 1) {
      const temp = parent.children[idx];
      parent.children[idx] = parent.children[idx + 1];
      parent.children[idx + 1] = temp;
      this.saveProjects();
      this.render();
      this.showToast(`⬇️ 已將「${temp.title}」向下調整順序！`);
    }
  }

  reorderNodeRelative(root, sourceId, targetId, position) {
    const sourceNode = this.findNode(root, sourceId);
    const oldParent = this.findParentNode(root, sourceId);
    const targetNode = this.findNode(root, targetId);
    const targetParent = this.findParentNode(root, targetId);

    if (!sourceNode || !oldParent || !targetNode || !targetParent) return;

    // Remove from old parent
    oldParent.children = oldParent.children.filter(c => c.id !== sourceId);

    // Find target index in targetParent
    let targetIdx = targetParent.children.findIndex(c => c.id === targetId);
    if (targetIdx === -1) {
      targetParent.children.push(sourceNode);
    } else {
      if (position === 'after') {
        targetIdx += 1;
      }
      targetParent.children.splice(targetIdx, 0, sourceNode);
    }

    this.saveProjects();
    this.render();
    const posText = position === 'before' ? '上方' : '下方';
    this.showToast(`🎉 已將【${sourceNode.title}】移動至【${targetNode.title}】的${posText}！`);
  }

  insertVaultItemAsSibling(vaultItem, targetNode, position, root) {
    const targetParent = this.findParentNode(root, targetNode.id);
    if (!targetParent) {
      this.insertVaultItemIntoNode(vaultItem, targetNode);
      return;
    }

    const newNode = {
      id: 'spot_' + Date.now(),
      title: vaultItem.title,
      category: vaultItem.category || 'spot',
      cost: vaultItem.cost || '',
      note: vaultItem.note || '',
      imageUrl: vaultItem.imageUrl || '',
      mapsUrl: vaultItem.mapsUrl || '',
      url: vaultItem.url || '',
      bgColor: vaultItem.bgColor || '#ffffff',
      expanded: true,
      children: []
    };

    let targetIdx = targetParent.children.findIndex(c => c.id === targetNode.id);
    if (targetIdx === -1) {
      targetParent.children.push(newNode);
    } else {
      if (position === 'after') targetIdx += 1;
      targetParent.children.splice(targetIdx, 0, newNode);
    }

    this.saveProjects();
    this.render();
    const posText = position === 'before' ? '上方' : '下方';
    this.showToast(`🎉 已將【${vaultItem.title}】加入至【${targetNode.title}】的${posText}！`);
  }

  bindNodeDragDrop(element, targetNode, root) {
    if (this.isReadOnly) return;

    if (element.getAttribute('draggable') === 'true') {
      element.addEventListener('dragstart', (e) => {
        e.stopPropagation();
        this.draggedTreeNode = targetNode;
        this.draggedVaultItem = null;
        element.classList.add('is-dragging');
      });
      element.addEventListener('dragend', (e) => {
        e.stopPropagation();
        this.draggedTreeNode = null;
        element.classList.remove('is-dragging');
        document.querySelectorAll('.drop-target-before, .drop-target-after, .drop-target-inside, .drag-over-target').forEach(el => {
          el.classList.remove('drop-target-before', 'drop-target-after', 'drop-target-inside', 'drag-over-target');
        });
      });
    }

    const cleanClasses = (el) => {
      el.classList.remove('drop-target-before', 'drop-target-after', 'drop-target-inside', 'drag-over-target');
    };

    element.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();

      cleanClasses(element);

      const rect = element.getBoundingClientRect();
      const offsetY = e.clientY - rect.top;
      const height = rect.height;

      if (offsetY < height * 0.35) {
        element.classList.add('drop-target-before');
      } else if (offsetY > height * 0.65) {
        element.classList.add('drop-target-after');
      } else {
        element.classList.add('drop-target-inside');
      }
    });

    element.addEventListener('dragleave', (e) => {
      e.stopPropagation();
      cleanClasses(element);
    });

    element.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();

      const rect = element.getBoundingClientRect();
      const offsetY = e.clientY - rect.top;
      const height = rect.height;

      let position = 'inside';
      if (offsetY < height * 0.35) position = 'before';
      else if (offsetY > height * 0.65) position = 'after';

      cleanClasses(element);

      if (this.draggedVaultItem) {
        if (position === 'before' || position === 'after') {
          this.insertVaultItemAsSibling(this.draggedVaultItem, targetNode, position, root);
        } else {
          this.insertVaultItemIntoNode(this.draggedVaultItem, targetNode);
        }
        this.draggedVaultItem = null;
      } else if (this.draggedTreeNode) {
        const sourceId = this.draggedTreeNode.id;
        const targetId = targetNode.id;
        if (sourceId === targetId) return;

        if (this.isNodeDescendant(this.draggedTreeNode, targetId)) {
          this.showToast('⚠️ 不能將卡片移動附屬至其自己的子項目底下喔！');
          return;
        }

        if (position === 'before' || position === 'after') {
          this.reorderNodeRelative(root, sourceId, targetId, position);
        } else {
          this.moveNodeToNewParent(root, sourceId, targetId);
        }
        this.draggedTreeNode = null;
      }
    });
  }

  bindMarkdownTreeEvents(container, root) {
    container.querySelectorAll('.btn-move-up').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        this.moveSiblingNode(root, id, 'up');
      });
    });

    container.querySelectorAll('.btn-move-down').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        this.moveSiblingNode(root, id, 'down');
      });
    });

    container.querySelectorAll('.btn-edit-spot').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const node = this.findNode(root, id);
        if (node) this.openModalForEdit(node);
      });
    });

    container.querySelectorAll('.btn-del-spot').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const node = this.findNode(root, id);
        if (node) {
          this.triggerCustomConfirm(`確定刪除「${node.title}」？`, () => {
            this.deleteNode(root, id);
            this.saveProjects();
            this.render();
          });
        }
      });
    });

    container.querySelectorAll('.md-add-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const parentId = btn.getAttribute('data-parent');
        if (parentId) {
          this.openModalForAdd(parentId);
        }
      });
    });
  }

  createNodeCard(node, x, y) {
    const group = document.createElement('div');
    group.className = 'tree-node-group';
    group.style.left = `${x}px`;
    group.style.top = `${y}px`;

    group.addEventListener('dragover', (e) => {
      e.preventDefault();
      group.classList.add('drag-over-target');
    });
    group.addEventListener('dragleave', () => group.classList.remove('drag-over-target'));
    group.addEventListener('drop', (e) => {
      e.preventDefault();
      group.classList.remove('drag-over-target');
      if (this.draggedVaultItem) {
        this.insertVaultItemIntoNode(this.draggedVaultItem, node);
        this.draggedVaultItem = null;
      }
    });

    const isRoot = node.category === 'root';
    const isDay = node.category === 'day';
    const isPeriod = node.category === 'period';
    const cardBgColor = node.bgColor || (isDay ? '#ffffff' : (isPeriod ? '#fef3c7' : '#ffffff'));

    let cardHtml = '';

    if (isRoot) {
      cardHtml = `<div class="root-header-box"><div class="root-header-title">${this.escapeHtml(node.title)}</div></div>`;
    } else if (isDay) {
      cardHtml = `
        <div class="day-hex-card" style="background-color:${cardBgColor};">
          <span>📅 ${this.escapeHtml(node.title)}</span>
          ${!this.isReadOnly ? `
            <div class="node-actions" style="margin-left:10px;">
              <button class="btn-mini btn-add-child">+</button>
              <button class="btn-mini btn-edit-node">✏️</button>
            </div>
          ` : ''}
        </div>
      `;
    } else if (isPeriod) {
      cardHtml = `
        <div class="period-pill-card" style="background-color:${cardBgColor};">
          <span>🕒 ${this.escapeHtml(node.title)}</span>
          ${!this.isReadOnly ? `
            <div class="node-actions" style="margin-left:8px;">
              <button class="btn-mini btn-edit-node">✏️</button>
            </div>
          ` : ''}
        </div>
      `;
    } else {
      let icon = '📍';
      if (node.category === 'food') icon = '🍜';
      if (node.category === 'hotel') icon = '🏨';
      if (node.category === 'transit') icon = '🚌';
      if (node.category === 'shop') icon = '🛍️';

      cardHtml = `
        <div class="node-card" style="background-color:${cardBgColor};">
          <div class="node-header">
            <span class="node-title">${icon} ${this.escapeHtml(node.title)}</span>
            ${node.cost ? `<span class="node-badge">${this.escapeHtml(node.cost)}</span>` : ''}
          </div>
      `;

      if (node.category === 'hotel' && (node.hotelCheckIn || node.hotelRoomType)) {
        cardHtml += `
          <div class="hotel-badge-box">
            ${node.hotelCheckIn ? `<div>🏨 ${this.escapeHtml(node.hotelCheckIn)} | ${this.escapeHtml(node.hotelCheckOut || '')}</div>` : ''}
            ${node.hotelRoomType ? `<div>🛏️ ${this.escapeHtml(node.hotelRoomType)}</div>` : ''}
          </div>
        `;
      }

      if (node.imageUrl) cardHtml += `<img class="node-thumb" src="${this.escapeHtml(node.imageUrl)}" alt="thumb" loading="lazy">`;

      if (node.url || node.mapsUrl || node.note) {
        cardHtml += `<div class="node-meta">`;
        if (node.url) cardHtml += `<a href="${this.escapeHtml(node.url)}" target="_blank" class="node-link" onclick="event.stopPropagation()">🔗 網頁連結</a>`;
        if (node.mapsUrl) cardHtml += `<a href="${this.escapeHtml(node.mapsUrl)}" target="_blank" class="node-link" onclick="event.stopPropagation()">🗺️ 地圖導覽</a>`;
        if (node.note) cardHtml += `<div style="font-size:0.78rem; color:#475569; font-weight:600;">${this.escapeHtml(node.note)}</div>`;
        cardHtml += `</div>`;
      }

      if (!this.isReadOnly) {
        cardHtml += `
          <div class="node-actions">
            <button class="btn-mini btn-edit-node">✏️</button>
            <button class="btn-mini btn-delete-node">🗑️</button>
          </div>
        `;
      }

      if (node.children && node.children.length > 0) {
        const isExpanded = node.expanded !== false;
        cardHtml += `<button class="toggle-btn-side">${isExpanded ? '−' : '+'}</button>`;
      }

      cardHtml += `</div>`;
    }

    group.innerHTML = cardHtml;

    const toggleBtn = group.querySelector('.toggle-btn-side');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        node.expanded = node.expanded === false ? true : false;
        this.saveProjects();
        this.renderMindmap();
      });
    }

    if (!this.isReadOnly) {
      const addBtn = group.querySelector('.btn-add-child');
      if (addBtn) {
        addBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openModalForAdd(node.id);
        });
      }

      const editBtn = group.querySelector('.btn-edit-node');
      if (editBtn) {
        editBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          this.openModalForEdit(node);
        });
      }

      const deleteBtn = group.querySelector('.btn-delete-node');
      if (deleteBtn) {
        deleteBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          const proj = this.getActiveProject();
          this.triggerCustomConfirm(`確定刪除「${node.title}」？`, () => {
            this.deleteNode(proj.rootNode, node.id);
            this.saveProjects();
            this.render();
          });
        });
      }
    }

    return group;
  }

  drawMainTrunkLine(x, y1, x2, y2) {
    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', x); line.setAttribute('y1', y1);
    line.setAttribute('x2', x2); line.setAttribute('y2', y2);
    line.setAttribute('class', 'timeline-main-trunk');
    this.svgConnectors.appendChild(line);
  }

  drawCleanOrthogonalConnector(x1, y1, x2, y2, isDayToPeriod = false) {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    const arrowSize = 8;
    const lineEndX = x2 - arrowSize;

    let d = '';
    if (isDayToPeriod) {
      d = `M ${x1} ${y1} V ${y2} H ${lineEndX}`;
    } else {
      const channelX = Math.min(x1 + 35, lineEndX - 20);
      d = `M ${x1} ${y1} H ${channelX} V ${y2} H ${lineEndX}`;
    }

    path.setAttribute('d', d);
    path.setAttribute('class', 'connector-path-timeline');
    group.appendChild(path);

    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    arrow.setAttribute('points', `${x2},${y2} ${lineEndX},${y2 - 6} ${lineEndX},${y2 + 6}`);
    arrow.setAttribute('fill', '#0d9488');
    group.appendChild(arrow);

    this.svgConnectors.appendChild(group);
  }

  findParentNode(current, targetId) {
    if (!current.children) return null;
    for (const child of current.children) {
      if (child.id === targetId) return current;
      const found = this.findParentNode(child, targetId);
      if (found) return found;
    }
    return null;
  }

  renderOutline() {
    this.outlineTree.innerHTML = '';
    const proj = this.getActiveProject();
    if (!proj || !proj.rootNode) return;
    const root = proj.rootNode;

    const container = document.createElement('div');
    container.className = 'mobile-itinerary-container';

    if (root.children && root.children.length > 0) {
      root.children.forEach(dayNode => {
        const dayCard = document.createElement('div');
        dayCard.className = 'mobile-day-card';

        let dayHeaderHtml = `
          <div class="mobile-day-header">
            <span>📅 ${this.escapeHtml(dayNode.title)}</span>
          </div>
        `;

        let dayBodyHtml = `<div class="mobile-day-body">`;

        if (dayNode.children && dayNode.children.length > 0) {
          dayNode.children.forEach(periodNode => {
            dayBodyHtml += `
              <div class="mobile-period-block" data-id="${periodNode.id}">
                <div class="mobile-period-tag">🕒 ${this.escapeHtml(periodNode.title)}</div>
                <div class="mobile-spot-list">
            `;

            if (periodNode.children && periodNode.children.length > 0) {
              periodNode.children.forEach(spotNode => {
                dayBodyHtml += this.renderMobileSpotItem(spotNode);
              });
            }

            dayBodyHtml += `</div></div>`;
          });
        } else {
          dayBodyHtml += `<div style="color:#94a3b8; font-size:0.9rem; text-align:center; padding:12px;">使用景點靈感庫「📍 放至指定日期」或直接拖放把景點加入此處...</div>`;
        }

        dayBodyHtml += `</div>`;
        dayCard.innerHTML = dayHeaderHtml + dayBodyHtml;
        container.appendChild(dayCard);

        this.bindMobileSpotEvents(dayCard, root);
        this.bindNodeDragDrop(dayCard, dayNode);
        dayCard.querySelectorAll('.mobile-period-block').forEach(pEl => {
          const pid = pEl.getAttribute('data-id');
          const pNode = this.findNode(root, pid);
          if (pNode) this.bindNodeDragDrop(pEl, pNode);
        });
      });
    }

    this.outlineTree.appendChild(container);
  }

  renderMobileSpotItem(spotNode) {
    const catMeta = getCategoryMeta(spotNode);
    let icon = catMeta.icon;

    let itemHtml = `
      <div class="mobile-spot-item card-cat-${catMeta.id}" style="border-left: 4.5px solid ${catMeta.border};" data-id="${spotNode.id}">
        <div class="mobile-spot-top">
          <span class="mobile-spot-title">${icon} ${this.escapeHtml(spotNode.title)}</span>
          <div style="display:flex; gap:6px; align-items:center;">
            <span class="category-badge ${catMeta.className}">${catMeta.icon} ${catMeta.label}</span>
            ${spotNode.cost ? `<span class="node-badge">💰 ${this.escapeHtml(spotNode.cost)}</span>` : ''}
          </div>
        </div>
    `;

    if (spotNode.category === 'hotel' && (spotNode.hotelCheckIn || spotNode.hotelRoomType)) {
      itemHtml += `
        <div class="mobile-hotel-box">
          ${spotNode.hotelCheckIn ? `<div>🏨 ${this.escapeHtml(spotNode.hotelCheckIn)} | ${this.escapeHtml(spotNode.hotelCheckOut || '')}</div>` : ''}
          ${spotNode.hotelRoomType ? `<div>🛏️ ${this.escapeHtml(spotNode.hotelRoomType)}</div>` : ''}
        </div>
      `;
    }

    if (spotNode.imageUrl) {
      itemHtml += `<img class="node-thumb" src="${this.escapeHtml(spotNode.imageUrl)}" alt="thumb" loading="lazy">`;
    }

    if (spotNode.note) {
      itemHtml += `<div class="mobile-note-box">${this.escapeHtml(spotNode.note)}</div>`;
    }

    if (spotNode.mapsUrl || spotNode.url || !this.isReadOnly) {
      itemHtml += `<div class="mobile-btn-group">`;
      if (spotNode.mapsUrl) itemHtml += `<a href="${this.escapeHtml(spotNode.mapsUrl)}" target="_blank" class="mobile-action-btn" style="background:#e0f2fe; color:#0369a1; border-color:#bae6fd;">🗺️ 開啟 Google 地圖</a>`;
      if (spotNode.url) itemHtml += `<a href="${this.escapeHtml(spotNode.url)}" target="_blank" class="mobile-action-btn">🔗 官方網站</a>`;

      if (!this.isReadOnly) {
        itemHtml += `
          <button class="mobile-action-btn btn-edit-spot" data-id="${spotNode.id}">✏️</button>
          <button class="mobile-action-btn btn-del-spot" data-id="${spotNode.id}">🗑️</button>
        `;
      }
      itemHtml += `</div>`;
    }

    if (spotNode.children && spotNode.children.length > 0) {
      itemHtml += `<div class="mobile-subspot-list">`;
      spotNode.children.forEach(sub => {
        itemHtml += this.renderMobileSpotItem(sub);
      });
      itemHtml += `</div>`;
    }

    itemHtml += `</div>`;
    return itemHtml;
  }

  bindMobileSpotEvents(cardEl, root) {
    cardEl.querySelectorAll('.btn-edit-spot').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const node = this.findNode(root, id);
        if (node) this.openModalForEdit(node);
      });
    });

    cardEl.querySelectorAll('.btn-del-spot').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const id = btn.getAttribute('data-id');
        const node = this.findNode(root, id);
        if (node) {
          this.triggerCustomConfirm(`確定刪除「${node.title}」？`, () => {
            this.deleteNode(root, id);
            this.saveProjects();
            this.render();
          });
        }
      });
    });
  }

  populateParentSelect(selectedParentId, excludeNodeId = null) {
    const select = document.getElementById('nodeParentSelect');
    if (!select) return;
    select.innerHTML = '';
    const proj = this.getActiveProject();
    if (!proj || !proj.rootNode) return;

    const addOption = (node, indent, isRoot = false) => {
      if (excludeNodeId && node.id === excludeNodeId) return;
      const option = document.createElement('option');
      option.value = node.id;
      let icon = isRoot ? '🏮' : node.category === 'day' ? '📅' : node.category === 'period' ? '🕒' : '📍';
      option.textContent = `${indent}${icon} ${node.title}`;
      select.appendChild(option);

      if (node.children && node.children.length > 0) {
        node.children.forEach(child => {
          addOption(child, indent + '　　', false);
        });
      }
    };

    addOption(proj.rootNode, '', true);
    select.value = selectedParentId || proj.rootNode.id;
  }

  openModalForAdd(parentId) {
    if (this.isReadOnly) return;
    this.modalTitle.textContent = '新增景點 / 節點';
    this.nodeForm.reset();
    document.getElementById('nodeId').value = '';
    document.getElementById('nodeParentId').value = parentId;
    this.populateParentSelect(parentId, null);
    document.getElementById('nodeCategory').value = 'spot';
    const spotMeta = getCategoryMeta('spot');
    const color = spotMeta.cardBg || '#f0fdf4';
    this.nodeColorInput.value = color;
    this.nodeColorCustom.value = color;
    this.renderRecentColors();
    this.updateActiveColorSwatches(color);
    this.hotelFieldsBox.style.display = 'none';
    this.modal.classList.add('active');
  }

  openModalForEdit(node) {
    if (this.isReadOnly) return;
    this.modalTitle.textContent = '編輯景點資訊 / 更動附屬位置';
    document.getElementById('nodeId').value = node.id;
    const currentParent = this.findParentNode(this.getActiveProject().rootNode, node.id);
    const pId = currentParent ? currentParent.id : '';
    document.getElementById('nodeParentId').value = pId;
    this.populateParentSelect(pId, node.id);
    document.getElementById('nodeCategory').value = node.category || 'spot';
    document.getElementById('nodeTitle').value = node.title || '';
    document.getElementById('nodeUrl').value = node.url || '';
    document.getElementById('nodeMapsUrl').value = node.mapsUrl || '';
    document.getElementById('nodeImageUrl').value = node.imageUrl || '';
    document.getElementById('nodeCost').value = node.cost || '';
    document.getElementById('nodeNote').value = node.note || '';

    document.getElementById('hotelCheckIn').value = node.hotelCheckIn || '';
    document.getElementById('hotelCheckOut').value = node.hotelCheckOut || '';
    document.getElementById('hotelRoomType').value = node.hotelRoomType || '';
    this.hotelFieldsBox.style.display = node.category === 'hotel' ? 'flex' : 'none';

    const color = node.bgColor || '#ffffff';
    this.nodeColorInput.value = color;
    this.nodeColorCustom.value = color;
    this.renderRecentColors();
    this.updateActiveColorSwatches(color);
    this.modal.classList.add('active');
  }

  closeModal() { this.modal.classList.remove('active'); }

  handleFormSubmit() {
    if (this.isReadOnly) return;
    const id = document.getElementById('nodeId').value;
    const selectEl = document.getElementById('nodeParentSelect');
    const selectedParentId = selectEl && selectEl.value ? selectEl.value : document.getElementById('nodeParentId').value;
    const proj = this.getActiveProject();

    const nodeData = {
      category: document.getElementById('nodeCategory').value,
      title: document.getElementById('nodeTitle').value,
      url: document.getElementById('nodeUrl').value,
      mapsUrl: document.getElementById('nodeMapsUrl').value,
      imageUrl: document.getElementById('nodeImageUrl').value,
      cost: document.getElementById('nodeCost').value,
      note: document.getElementById('nodeNote').value,
      bgColor: this.nodeColorInput.value,
      hotelCheckIn: document.getElementById('hotelCheckIn').value,
      hotelCheckOut: document.getElementById('hotelCheckOut').value,
      hotelRoomType: document.getElementById('hotelRoomType').value
    };

    if (nodeData.bgColor) {
      this.addRecentColor(nodeData.bgColor);
    }

    if (id) {
      const node = this.findNode(proj.rootNode, id);
      if (node) {
        Object.assign(node, nodeData);
        const currentParent = this.findParentNode(proj.rootNode, id);
        if (currentParent && currentParent.id !== selectedParentId) {
          const targetParent = this.findNode(proj.rootNode, selectedParentId);
          if (targetParent && !this.isNodeDescendant(node, targetParent.id)) {
            currentParent.children = currentParent.children.filter(c => c.id !== id);
            if (!targetParent.children) targetParent.children = [];
            targetParent.children.push(node);
            targetParent.expanded = true;
          }
        }
      }
    } else {
      const newId = 'node_' + Date.now();
      const parentNode = this.findNode(proj.rootNode, selectedParentId) || proj.rootNode;
      if (!parentNode.children) parentNode.children = [];
      parentNode.children.push({ id: newId, ...nodeData, expanded: true, children: [] });
      parentNode.expanded = true;
    }

    this.saveProjects();
    this.closeModal();
    this.render();
  }

  findNode(current, id) {
    if (current.id === id) return current;
    if (current.children) {
      for (const child of current.children) {
        const found = this.findNode(child, id);
        if (found) return found;
      }
    }
    return null;
  }

  deleteNode(parent, targetId) {
    if (this.isReadOnly || !parent.children) return false;
    const index = parent.children.findIndex(c => c.id === targetId);
    if (index !== -1) {
      parent.children.splice(index, 1);
      return true;
    }
    for (const child of parent.children) {
      if (this.deleteNode(child, targetId)) return true;
    }
    return false;
  }

  exportJSON() {
    const proj = this.getActiveProject();
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(proj, null, 2));
    const a = document.createElement('a');
    a.setAttribute("href", dataStr);
    a.setAttribute("download", `TripTree_${proj.title || 'travel'}.json`);
    document.body.appendChild(a);
    a.click();
    a.remove();
    this.showToast('📤 行程 JSON 已匯出');
  }

  importJSON(e) {
    if (this.isReadOnly) return;
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        let importedCount = 0;
        let importedProjCount = 0;

        // 1. 處理景點靈感庫匯入 (vaultItems 或 項目陣列)
        let incomingVaultItems = [];
        if (Array.isArray(imported)) {
          incomingVaultItems = imported;
        } else if (imported && Array.isArray(imported.vaultItems)) {
          incomingVaultItems = imported.vaultItems;
        }

        if (incomingVaultItems.length > 0) {
          if (!Array.isArray(this.vaultItems)) this.vaultItems = [];
          incomingVaultItems.forEach(item => {
            if (!item.title || !item.title.trim()) {
              item.title = item.name || item.spotName || (item.note ? item.note.trim().split('\n')[0].substring(0, 25) : (item.url ? '📍 景點 ' + item.url.split('?')[0].split('/').filter(Boolean).pop() : '📍 景點卡片'));
            }
            if (!item.id) item.id = 'v_imp_' + Date.now() + '_' + Math.random().toString(36).substring(2, 7);
            const existIdx = this.vaultItems.findIndex(v => v.id === item.id);
            if (existIdx >= 0) {
              this.vaultItems[existIdx] = item;
            } else {
              this.vaultItems.unshift(item);
            }
            importedCount++;
          });

          if (imported.countryHierarchy && typeof imported.countryHierarchy === 'object') {
            this.countryHierarchy = { ...this.countryHierarchy, ...imported.countryHierarchy };
          }

          this.saveVaultData();
          this.renderVault();
        }

        // 2. 處理行程專案匯入 (projects 或 rootNode)
        let incomingProjects = [];
        if (imported && Array.isArray(imported.projects)) {
          incomingProjects = imported.projects;
        } else if (imported && imported.rootNode) {
          incomingProjects = [{
            id: 'proj_tl_' + Date.now(),
            title: imported.title || '匯入行程',
            rootNode: imported.rootNode
          }];
        } else if (imported && imported.title && !imported.vaultItems && !incomingVaultItems.length) {
          incomingProjects = [{
            id: 'proj_tl_' + Date.now(),
            title: imported.title || '匯入行程',
            rootNode: imported.rootNode || imported
          }];
        }

        if (incomingProjects.length > 0) {
          incomingProjects.forEach(proj => {
            const newId = proj.id || ('proj_tl_' + Date.now() + '_' + Math.random().toString(36).substring(2, 5));
            proj.id = newId;
            this.projects.push(proj);
            this.activeProjectId = newId;
            importedProjCount++;
          });
          this.saveProjects();
          this.render();
        }

        // 重置 input 允許重複選取相同檔案
        e.target.value = '';

        if (importedCount > 0 && importedProjCount > 0) {
          this.showToast(`📥 成功匯入 ${importedProjCount} 個行程與 ${importedCount} 個景點靈感庫卡片！`);
        } else if (importedCount > 0) {
          this.showToast(`📥 成功匯入 ${importedCount} 個景點靈感庫卡片！`);
        } else if (importedProjCount > 0) {
          this.showToast(`📥 成功匯入全新行程！`);
        } else {
          this.showToast('⚠️ 未辨識出有效的行程或景點靈感庫資料');
        }
      } catch (err) {
        console.error('匯入 JSON 失敗：', err);
        e.target.value = '';
        this.showToast('❌ JSON 檔案格式錯誤，無法匯入');
      }
    };
    reader.readAsText(file);
  }

  showToast(msg) {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = msg;
    container.appendChild(toast);
    setTimeout(() => toast.remove(), 3000);
  }

  escapeHtml(str) {
    if (!str) return '';
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.appTimelineV17 = new VerticalTimelineAppV17();
});
