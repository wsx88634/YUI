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

const DEFAULT_COUNTRY_HIERARCHY = {
  "所有": ["所有"],
  "日本": ["所有日本", "福岡", "天神", "博多", "祇園", "渡邊通", "六本松", "小倉", "宗像", "久留米", "由布院", "福岡機場", "東京", "大阪", "京都", "奈良"],
  "韓國": ["所有韓國", "首爾", "釜山"],
  "台灣": ["所有台灣", "台北", "台南"],
  "泰國": ["所有泰國", "曼谷", "清邁"]
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
    this.countryHierarchy = this.loadCountryHierarchy();
    this.recentColors = this.loadRecentColors();
    
    this.selectedCountry = "所有";
    this.selectedRegion = "所有";
    this.selectedCategory = "all";
    this.selectedMainCategory = "all";
    this.currentView = 'mindmap';
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
    this.vaultRegionTabs = document.getElementById('vaultRegionTabs');
    this.regionFilterLabel = document.getElementById('regionFilterLabel');
    this.vaultCategoryTabs = document.getElementById('vaultCategoryTabs');
    this.vaultCardList = document.getElementById('vaultCardList');
    this.mainCategoryChips = document.getElementById('mainCategoryChips');

    this.vaultQuickInput = document.getElementById('vaultQuickInput');
    this.vaultTargetRegion = document.getElementById('vaultTargetRegion');
    this.btnGenVaultCard = document.getElementById('btnGenVaultCard');
    this.btnAddRegionTag = document.getElementById('btnAddRegionTag');

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
      const existIdx = items.findIndex(it => it.id === defaultItem.id || (it.url && defaultItem.url && it.url.split('?')[0] === defaultItem.url.split('?')[0]));
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

  loadCountryHierarchy() {
    let saved = localStorage.getItem('triptree_country_hierarchy');
    if (!saved) {
      try { saved = sessionStorage.getItem('triptree_country_hierarchy'); } catch(e){}
    }
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed && typeof parsed === 'object') return parsed;
      } catch(e){}
    }
    return JSON.parse(JSON.stringify(DEFAULT_COUNTRY_HIERARCHY));
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
      const countryJson = JSON.stringify(this.countryHierarchy);
      localStorage.setItem('triptree_spot_vault_items_v17', vaultJson);
      localStorage.setItem('triptree_country_hierarchy', countryJson);
      sessionStorage.setItem('triptree_spot_vault_items_v17', vaultJson);
      sessionStorage.setItem('triptree_country_hierarchy', countryJson);
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
        this.switchView('vault');
      });
    }

    if (this.tabVault) {
      this.tabVault.addEventListener('click', () => {
        this.switchView('vault');
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
    const tabVault = document.getElementById('tabVault');
    if (tabVault) tabVault.addEventListener('click', () => this.switchView('vault'));

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
      if (this.vaultAiBox) this.vaultAiBox.style.display = 'block';
      if (this.vaultFilterBar) this.vaultFilterBar.style.display = 'flex';
    }

    // 確保所有卡片中出現過的地區都自動動態加入地區選單按鈕中
    if (this.vaultItems && Array.isArray(this.vaultItems)) {
      this.vaultItems.forEach(item => {
        const country = item.country || "日本";
        const region = item.region;
        if (region && region !== "所有" && !region.startsWith("所有")) {
          if (!this.countryHierarchy[country]) {
            this.countryHierarchy[country] = [`所有${country}`, region];
          } else if (!this.countryHierarchy[country].includes(region)) {
            this.countryHierarchy[country].push(region);
          }
        }
      });
    }

    this.countryTabsRow.innerHTML = '';
    const countries = Object.keys(this.countryHierarchy);
    countries.forEach(country => {
      const chip = document.createElement('button');
      chip.className = `country-chip ${country === this.selectedCountry ? 'active' : ''}`;
      let flag = '🌏';
      if (country === '日本') flag = '🇯🇵';
      if (country === '韓國') flag = '🇰🇷';
      if (country === '台灣') flag = '🇹🇼';
      if (country === '泰國') flag = '🇹🇭';
      chip.textContent = `${flag} ${country}`;
      
      chip.addEventListener('click', () => {
        this.selectedCountry = country;
        this.selectedRegion = "所有";
        this.renderVault();
      });
      this.countryTabsRow.appendChild(chip);
    });

    this.vaultRegionTabs.innerHTML = '';
    const regions = this.countryHierarchy[this.selectedCountry] || ["所有"];
    this.regionFilterLabel.textContent = `📍 【${this.selectedCountry}】地區選單：`;

    regions.forEach(reg => {
      const chip = document.createElement('button');
      chip.className = `region-chip ${reg === this.selectedRegion ? 'active' : ''}`;
      chip.textContent = reg.startsWith('所有') ? '🌐 全部地區' : `📍 ${reg}`;
      chip.addEventListener('click', () => {
        this.selectedRegion = reg;
        this.renderVault();
      });
      this.vaultRegionTabs.appendChild(chip);
    });

    // 🏷️ 渲染靈感庫類型標籤選單
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

    this.vaultCardList.innerHTML = '';
    let filtered = this.vaultItems;

    if (this.selectedCountry !== '所有') {
      filtered = filtered.filter(item => (item.country === this.selectedCountry || (!item.country && this.selectedCountry === '日本')));
    }

    if (this.selectedRegion !== '所有' && !this.selectedRegion.startsWith('所有')) {
      filtered = filtered.filter(item => item.region === this.selectedRegion);
    }

    if (this.selectedCategory && this.selectedCategory !== 'all' && this.selectedCategory !== '所有') {
      filtered = filtered.filter(item => inferCategory(item) === this.selectedCategory);
    }

    if (this.vaultSearchKeyword && this.vaultSearchKeyword.trim()) {
      const kw = this.vaultSearchKeyword.trim().toLowerCase();
      filtered = filtered.filter(item => {
        const full = `${item.title || ''} ${item.note || ''} ${item.region || ''} ${item.cost || ''} ${item.category || ''}`.toLowerCase();
        return full.includes(kw);
      });
    }

    if (this.vaultItemsCount) {
      this.vaultItemsCount.textContent = `共 ${filtered.length} 個景點`;
    }

    if (filtered.length === 0) {
      const catMeta = getCategoryMeta(this.selectedCategory);
      const catName = this.selectedCategory !== 'all' ? `【${catMeta.icon} ${catMeta.label}】` : '';
      const kwNotice = this.vaultSearchKeyword ? `，且無符合「${this.vaultSearchKeyword}」之項目` : '';
      this.vaultCardList.innerHTML = `<div style="grid-column: 1/-1; text-align:center; color:#94a3b8; padding:36px 16px; font-size:0.95rem; font-weight:600;">【${this.selectedCountry} - ${this.selectedRegion}】${catName}${kwNotice} 目前無景點小卡。可在上方搜尋其他關鍵字或手動新增！</div>`;
      return;
    }

    filtered.forEach(item => {
      const catMeta = getCategoryMeta(item);
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
            ${item.region ? `<span class="region-badge">📍 ${this.escapeHtml(item.region)}</span>` : ''}
            <div class="vault-action-group">
              <button class="vault-action-btn btn-edit-vault" data-id="${item.id}" title="編輯此景點小卡">✏️ 編輯</button>
              <button class="vault-action-btn btn-delete-vault" data-id="${item.id}" title="刪除此景點小卡">🗑️ 刪除</button>
            </div>
          </div>
        </div>
        ${item.cost ? `<div style="font-size:0.8rem; color:#0f766e; font-weight:700;">💰 ${this.escapeHtml(item.cost)}</div>` : ''}
        ${item.note ? `<div style="font-size:0.82rem; color:#334155; font-weight:600; line-height:1.4; white-space:pre-line; word-break:break-word; margin-top:2px;">${this.escapeHtml(item.note)}</div>` : ''}
        <div class="vault-card-footer">
          <div style="display:flex; gap:8px;">
            ${item.mapsUrl ? `<a href="${this.escapeHtml(item.mapsUrl)}" target="_blank" class="node-link" style="font-size:0.78rem;">🗺️ 地圖</a>` : ''}
            ${item.url ? `<a href="${this.escapeHtml(item.url)}" target="_blank" class="node-link" style="font-size:0.78rem;">🔗 連結</a>` : ''}
          </div>
          <button class="vault-copy-btn" data-id="${item.id}">📍 放至指定日期</button>
        </div>
      `;

      card.addEventListener('dragstart', (e) => {
        this.draggedVaultItem = item;
        e.dataTransfer.setData('text/plain', JSON.stringify(item));
      });

      card.querySelector('.vault-copy-btn').addEventListener('click', () => {
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
    document.getElementById('mvRegion').value = item.region || '';
    document.getElementById('mvTitle').value = item.title || '';
    document.getElementById('mvCategory').value = item.category || 'spot';
    document.getElementById('mvCost').value = item.cost || '';
    document.getElementById('mvMapsUrl').value = item.mapsUrl || '';
    document.getElementById('mvUrl').value = item.url || '';
    document.getElementById('mvNote').value = item.note || '';

    this.manualVaultModal.classList.add('active');
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
    this.currentView = view;
    const tabMindmap = document.getElementById('tabMindmap');
    const tabOutline = document.getElementById('tabOutline');
    const tabVault = document.getElementById('tabVault');
    if (tabMindmap) tabMindmap.classList.toggle('active', view === 'mindmap');
    if (tabOutline) tabOutline.classList.toggle('active', view === 'outline');
    if (tabVault) tabVault.classList.toggle('active', view === 'vault');

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
      else this.renderOutline();
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
