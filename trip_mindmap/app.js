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
  "日本": ["所有日本", "福岡", "東京", "大阪", "京都", "奈良"],
  "韓國": ["所有韓國", "首爾", "釜山"],
  "台灣": ["所有台灣", "台北", "台南"],
  "泰國": ["所有泰國", "曼谷", "清邁"]
};

const DEFAULT_SPOT_VAULT = [
  {
    id: "vault_fk_1",
    country: "日本",
    region: "福岡",
    title: "🛒 Aeon Shoppers 福岡店 (天神商圈超市)",
    category: "shop",
    cost: "09:00~22:00",
    bgColor: "#bbf7d0",
    url: "https://www.instagram.com/reel/DanBwFgqNkE/",
    mapsUrl: "https://maps.google.com/?q=Aeon+Shoppers+福岡店",
    note: "複合式購物中心！有 DAISO 大創、3COINS、無印良品、ABC MART。附近還有 24h 唐吉訶德天神本店，荷包補給站！"
  },
  {
    id: "vault_fk_2",
    country: "日本",
    region: "福岡",
    title: "⛩️ 博多總鎮守 櫛田神社",
    category: "spot",
    cost: "免費參拜",
    bgColor: "#e0e7ff",
    url: "https://www.crossroadfukuoka.jp/tw/spot/12510",
    mapsUrl: "https://maps.google.com/?q=櫛田神社",
    note: "千年御神木銀杏樹，展示 13 公尺高超震撼「博多祇園山笠神轎」！"
  },
  {
    id: "vault_osaka_1",
    country: "日本",
    region: "大阪",
    title: "🏃‍♂️ 心齋橋 ➔ 道頓堀 固力果跑跑人看板",
    category: "spot",
    cost: "24 小時開放",
    bgColor: "#fef3c7",
    mapsUrl: "https://maps.google.com/?q=道頓堀固力果看板",
    note: "大阪經典必拍地標！旁邊整條心齋橋筋商店街藥妝店與美食超豐富。"
  },
  {
    id: "vault_osaka_2",
    country: "日本",
    region: "大阪",
    title: "🐙 本家大たこ 道頓堀章魚燒",
    category: "food",
    cost: "¥600 / 6顆",
    bgColor: "#fef08a",
    mapsUrl: "https://maps.google.com/?q=本家大たこ",
    note: "大塊章魚肉加上外酥內軟的章魚燒口感，老字號必吃！"
  },
  {
    id: "vault_kyoto_1",
    country: "日本",
    region: "京都",
    title: "⛩️ 伏見稻荷大社（千本鳥居）",
    category: "spot",
    cost: "免費參拜",
    bgColor: "#ffedd5",
    mapsUrl: "https://maps.google.com/?q=伏見稻荷大社",
    note: "延綿不絕的朱紅色千本鳥居，狐狸神雕像守護，清晨去拍照最唯美。"
  },
  {
    id: "vault_kyoto_2",
    country: "日本",
    region: "京都",
    title: "🏯 清水寺 ➔ 三年坂 / 二年坂 漫步",
    category: "spot",
    cost: "拜觀料 ¥400",
    bgColor: "#bbf7d0",
    mapsUrl: "https://maps.google.com/?q=清水寺",
    note: "懸空清水舞台俯瞰京都市景，穿和服漫步傳統石板路古街。"
  },
  {
    id: "vault_nara_1",
    country: "日本",
    region: "奈良",
    title: "🦌 奈良公園（餵小鹿 🍪 仙貝）",
    category: "spot",
    cost: "鹿仙貝 ¥200",
    bgColor: "#dcfce7",
    mapsUrl: "https://maps.google.com/?q=奈良公園",
    note: "買鹿仙貝和小鹿互動鞠躬！注意小鹿搶食時要放慢速度喔。"
  }
];

class VerticalTimelineAppV17 {
  constructor() {
    this.isReadOnly = this.checkReadOnlyMode();
    this.projects = this.loadProjects();
    this.activeProjectId = this.loadActiveProjectId();
    this.vaultItems = this.loadVaultItems();
    this.countryHierarchy = this.loadCountryHierarchy();
    
    this.selectedCountry = "所有";
    this.selectedRegion = "所有";
    this.currentView = 'mindmap';
    this.zoomLevel = 1.0;
    this.draggedVaultItem = null;
    this.pendingDeleteAction = null;

    this.isPanning = false;
    this.startX = 0;
    this.startY = 0;
    this.scrollLeft = 0;
    this.scrollTop = 0;

    this.initElements();
    this.bindEvents();
    this.render();
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

    this.vaultDrawer = document.getElementById('vaultDrawer');
    this.btnOpenVault = document.getElementById('btnOpenVault');
    this.btnCloseVault = document.getElementById('btnCloseVault');
    this.btnToggleFullVault = document.getElementById('btnToggleFullVault');
    
    this.countryTabsRow = document.getElementById('countryTabsRow');
    this.vaultRegionTabs = document.getElementById('vaultRegionTabs');
    this.regionFilterLabel = document.getElementById('regionFilterLabel');
    this.vaultCardList = document.getElementById('vaultCardList');

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
    const saved = localStorage.getItem('triptree_tl_v17_projects');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return JSON.parse(JSON.stringify(TOKYO_DEMO_PROJECTS));
  }

  loadActiveProjectId() {
    const saved = localStorage.getItem('triptree_tl_v17_active_id');
    if (saved && this.projects.some(p => p.id === saved)) return saved;
    return this.projects[0] ? this.projects[0].id : "proj_fukuoka_demo";
  }

  loadVaultItems() {
    const saved = localStorage.getItem('triptree_spot_vault_items_v17');
    if (saved) {
      try { return JSON.parse(saved); } catch(e){}
    }
    return JSON.parse(JSON.stringify(DEFAULT_SPOT_VAULT));
  }

  loadCountryHierarchy() {
    const saved = localStorage.getItem('triptree_country_hierarchy');
    if (saved) {
      try { return JSON.parse(saved); } catch(e){}
    }
    return JSON.parse(JSON.stringify(DEFAULT_COUNTRY_HIERARCHY));
  }

  saveProjects() {
    if (this.isReadOnly) return;
    localStorage.setItem('triptree_tl_v17_projects', JSON.stringify(this.projects));
    localStorage.setItem('triptree_tl_v17_active_id', this.activeProjectId);
    this.showToast('💾 行程已保存');
  }

  saveVaultData() {
    localStorage.setItem('triptree_spot_vault_items_v17', JSON.stringify(this.vaultItems));
    localStorage.setItem('triptree_country_hierarchy', JSON.stringify(this.countryHierarchy));
  }

  getActiveProject() {
    return this.projects.find(p => p.id === this.activeProjectId) || this.projects[0];
  }

  bindEvents() {
    this.btnZoomIn.addEventListener('click', () => this.setZoom(this.zoomLevel + 0.15));
    this.btnZoomOut.addEventListener('click', () => this.setZoom(this.zoomLevel - 0.15));
    this.zoomDisplay.addEventListener('click', () => this.setZoom(1.0));

    this.btnOpenVault.addEventListener('click', () => {
      this.vaultDrawer.classList.add('open');
      this.renderVault();
    });
    this.btnCloseVault.addEventListener('click', () => {
      this.vaultDrawer.classList.remove('open', 'expanded-full');
    });

    this.btnToggleFullVault.addEventListener('click', () => {
      this.vaultDrawer.classList.toggle('expanded-full');
      const isFull = this.vaultDrawer.classList.contains('expanded-full');
      this.btnToggleFullVault.textContent = isFull ? '📐 恢復側邊抽屜' : '📖 展開全螢幕';
    });

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
        this.colorPickerGrid.querySelectorAll('.color-swatch').forEach(s => s.classList.remove('active'));
        swatch.classList.add('active');
        const color = swatch.getAttribute('data-color');
        this.nodeColorInput.value = color;
        this.nodeColorCustom.value = color;
      }
    });

    this.nodeColorCustom.addEventListener('input', (e) => {
      this.nodeColorInput.value = e.target.value;
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

    this.vaultCardList.innerHTML = '';
    let filtered = this.vaultItems;

    if (this.selectedCountry !== '所有') {
      filtered = filtered.filter(item => (item.country === this.selectedCountry || (!item.country && this.selectedCountry === '日本')));
    }

    if (this.selectedRegion !== '所有' && !this.selectedRegion.startsWith('所有')) {
      filtered = filtered.filter(item => item.region === this.selectedRegion);
    }

    if (filtered.length === 0) {
      this.vaultCardList.innerHTML = `<div style="text-align:center; color:#94a3b8; padding:24px; font-size:0.9rem;">【${this.selectedCountry} - ${this.selectedRegion}】目前無景點小卡，可在上方輸入框新增！</div>`;
      return;
    }

    filtered.forEach(item => {
      const card = document.createElement('div');
      card.className = 'vault-item-card';
      card.setAttribute('draggable', 'true');
      if (item.bgColor) card.style.backgroundColor = item.bgColor;

      card.innerHTML = `
        <div class="vault-card-header">
          <span class="vault-card-title">${this.escapeHtml(item.title)}</span>
          <div style="display:flex; align-items:center; gap:6px;">
            <span class="node-badge" style="font-size:0.75rem;">📍 ${this.escapeHtml(item.region || '景點')}</span>
            <div class="vault-action-group">
              <button class="vault-action-btn btn-edit-vault" data-id="${item.id}" title="編輯此景點小卡">✏️ 編輯</button>
              <button class="vault-action-btn btn-delete-vault" data-id="${item.id}" title="刪除此景點小卡">🗑️ 刪除</button>
            </div>
          </div>
        </div>
        ${item.cost ? `<div style="font-size:0.8rem; color:#0f766e; font-weight:700;">💰 ${this.escapeHtml(item.cost)}</div>` : ''}
        ${item.note ? `<div style="font-size:0.82rem; color:#475569; font-weight:600; line-height:1.35;">${this.escapeHtml(item.note)}</div>` : ''}
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
    document.getElementById('tabMindmap').classList.toggle('active', view === 'mindmap');
    document.getElementById('tabOutline').classList.toggle('active', view === 'outline');

    if (view === 'mindmap') {
      this.viewport.style.display = 'block';
      this.outlineView.style.display = 'none';
      this.renderMindmap();
    } else {
      this.viewport.style.display = 'none';
      this.outlineView.style.display = 'block';
      this.renderOutline();
    }
  }

  render() {
    this.renderTabs();
    const proj = this.getActiveProject();
    if (proj) {
      this.tripTitleInput.value = proj.title || "🏮 福岡 3 天 2 夜 櫛田神社輕旅行";
      if (this.currentView === 'mindmap') this.renderMindmap();
      else this.renderOutline();
    }
  }

  renderTabs() {
    this.tripTabsBar.innerHTML = '';
    this.projects.forEach(proj => {
      const tab = document.createElement('div');
      tab.className = `folder-tab ${proj.id === this.activeProjectId ? 'active' : ''}`;
      tab.innerHTML = `
        <span>📁 ${this.escapeHtml(proj.title)}</span>
        ${(!this.isReadOnly && this.projects.length > 1) ? `<span class="tab-close">✕</span>` : ''}
      `;
      tab.addEventListener('click', (e) => {
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
      <h1 class="md-root-title">🏮 ${this.escapeHtml(root.title)}</h1>
      ${!this.isReadOnly ? `<button class="md-add-btn" style="background:#ffffff; color:#0f766e; border:none; padding:6px 14px; font-weight:800;" data-action="add-day" data-parent="${root.id}">➕ 新增行程天數 (Day)</button>` : ''}
    `;
    container.appendChild(banner);

    // 2. Render Day Nodes
    if (root.children && root.children.length > 0) {
      root.children.forEach((dayNode) => {
        const dayEl = document.createElement('div');
        dayEl.className = 'md-tree-day';
        dayEl.setAttribute('data-id', dayNode.id);

        let dayHeaderHtml = `
          <div class="md-day-header">
            <div class="md-day-title">
              <span>📅</span>
              <span>${this.escapeHtml(dayNode.title)}</span>
            </div>
            ${!this.isReadOnly ? `
              <div style="display:flex; gap:6px; align-items:center;">
                <button class="md-add-btn" data-action="add-period" data-parent="${dayNode.id}">➕ 新增時段</button>
                <button class="mobile-action-btn btn-edit-spot" data-id="${dayNode.id}" title="編輯天數標題">✏️</button>
                <button class="mobile-action-btn btn-del-spot" data-id="${dayNode.id}" title="刪除整天">🗑️</button>
              </div>
            ` : ''}
          </div>
        `;

        let dayBodyHtml = `<div class="md-period-list">`;

        if (dayNode.children && dayNode.children.length > 0) {
          dayNode.children.forEach(periodNode => {
            dayBodyHtml += `
              <div class="md-tree-period" data-id="${periodNode.id}">
                <div class="md-period-header">
                  <span class="md-period-title">🕒 ${this.escapeHtml(periodNode.title)}</span>
                  ${!this.isReadOnly ? `
                    <div style="display:flex; gap:6px; align-items:center;">
                      <button class="md-add-btn" data-action="add-spot" data-parent="${periodNode.id}">➕ 新增景點</button>
                      <button class="mobile-action-btn btn-edit-spot" data-id="${periodNode.id}" title="編輯時段名稱">✏️</button>
                      <button class="mobile-action-btn btn-del-spot" data-id="${periodNode.id}" title="刪除時段">🗑️</button>
                    </div>
                  ` : ''}
                </div>
                <div class="md-spot-list">
            `;

            if (periodNode.children && periodNode.children.length > 0) {
              periodNode.children.forEach(spotNode => {
                dayBodyHtml += this.renderMarkdownSpotCard(spotNode);
              });
            } else {
              dayBodyHtml += `<div style="color:#94a3b8; font-size:0.86rem; padding:8px 4px;">（目前無景點，可直接將右側靈感庫卡片拖拉至此處）</div>`;
            }

            dayBodyHtml += `</div></div>`;
          });
        } else {
          dayBodyHtml += `<div style="color:#94a3b8; font-size:0.9rem; text-align:center; padding:16px;">可點擊上方「➕ 新增時段」或從右側景點靈感庫中將卡片拖拉放至此日期中...</div>`;
        }

        dayBodyHtml += `</div>`;
        dayEl.innerHTML = dayHeaderHtml + dayBodyHtml;
        container.appendChild(dayEl);

        // Bind Drag & Drop for Day Node
        this.bindNodeDragDrop(dayEl, dayNode);

        // Bind Drag & Drop for Period Nodes inside this Day
        dayEl.querySelectorAll('.md-tree-period').forEach(periodEl => {
          const pid = periodEl.getAttribute('data-id');
          const pNode = this.findNode(root, pid);
          if (pNode) this.bindNodeDragDrop(periodEl, pNode);
        });
      });
    } else {
      const emptyBox = document.createElement('div');
      emptyBox.className = 'md-tree-day';
      emptyBox.style.textAlign = 'center';
      emptyBox.style.color = '#64748b';
      emptyBox.innerHTML = `目前行程尚無任何天數，請點擊上方「➕ 新增行程天數 (Day)」開始安排行程！`;
      container.appendChild(emptyBox);
    }

    this.nodesLayer.appendChild(container);
    this.bindMarkdownTreeEvents(container, root);
  }

  renderMarkdownSpotCard(spotNode) {
    let icon = '📍';
    if (spotNode.category === 'food') icon = '🍜';
    if (spotNode.category === 'hotel') icon = '🏨';
    if (spotNode.category === 'transit') icon = '🚌';
    if (spotNode.category === 'shop') icon = '🛍️';

    let html = `
      <div class="md-tree-spot" style="${spotNode.bgColor ? `background-color:${spotNode.bgColor};` : ''}" data-id="${spotNode.id}">
        <div class="md-spot-header">
          <span class="md-spot-title">${icon} ${this.escapeHtml(spotNode.title)}</span>
          <div style="display:flex; gap:6px; align-items:center;">
            ${spotNode.cost ? `<span class="node-badge">${this.escapeHtml(spotNode.cost)}</span>` : ''}
            ${!this.isReadOnly ? `
              <button class="mobile-action-btn btn-edit-spot" data-id="${spotNode.id}" title="編輯景點">✏️</button>
              <button class="mobile-action-btn btn-del-spot" data-id="${spotNode.id}" title="刪除景點">🗑️</button>
            ` : ''}
          </div>
        </div>
    `;

    if (spotNode.category === 'hotel' && (spotNode.hotelCheckIn || spotNode.hotelRoomType)) {
      html += `
        <div class="mobile-hotel-box">
          ${spotNode.hotelCheckIn ? `<div>🏨 ${this.escapeHtml(spotNode.hotelCheckIn)} | ${this.escapeHtml(spotNode.hotelCheckOut || '')}</div>` : ''}
          ${spotNode.hotelRoomType ? `<div>🛏️ ${this.escapeHtml(spotNode.hotelRoomType)}</div>` : ''}
        </div>
      `;
    }

    if (spotNode.imageUrl) {
      html += `<img class="node-thumb" src="${this.escapeHtml(spotNode.imageUrl)}" alt="thumb" loading="lazy">`;
    }

    if (spotNode.note) {
      html += `<div class="mobile-note-box">${this.escapeHtml(spotNode.note)}</div>`;
    }

    if (spotNode.mapsUrl || spotNode.url) {
      html += `<div class="mobile-btn-group" style="margin-top:4px;">`;
      if (spotNode.mapsUrl) html += `<a href="${this.escapeHtml(spotNode.mapsUrl)}" target="_blank" class="mobile-action-btn" style="background:#e0f2fe; color:#0369a1; border-color:#bae6fd;">🗺️ 開啟 Google 地圖</a>`;
      if (spotNode.url) html += `<a href="${this.escapeHtml(spotNode.url)}" target="_blank" class="mobile-action-btn">🔗 官方網站</a>`;
      html += `</div>`;
    }

    html += `</div>`;
    return html;
  }

  bindNodeDragDrop(element, targetNode) {
    if (this.isReadOnly) return;
    element.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.stopPropagation();
      element.classList.add('drag-over-target');
    });
    element.addEventListener('dragleave', (e) => {
      e.stopPropagation();
      element.classList.remove('drag-over-target');
    });
    element.addEventListener('drop', (e) => {
      e.preventDefault();
      e.stopPropagation();
      element.classList.remove('drag-over-target');
      if (this.draggedVaultItem) {
        this.insertVaultItemIntoNode(this.draggedVaultItem, targetNode);
        this.draggedVaultItem = null;
      }
    });
  }

  bindMarkdownTreeEvents(container, root) {
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
        const action = btn.getAttribute('data-action');
        const parentId = btn.getAttribute('data-parent');
        if (action === 'add-day') {
          this.openModalForAdd(root.id);
        } else if (action === 'add-period' || action === 'add-spot') {
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
    let icon = '📍';
    if (spotNode.category === 'food') icon = '🍜';
    if (spotNode.category === 'hotel') icon = '🏨';
    if (spotNode.category === 'transit') icon = '🚌';
    if (spotNode.category === 'shop') icon = '🛍️';

    let itemHtml = `
      <div class="mobile-spot-item" style="${spotNode.bgColor ? `background-color:${spotNode.bgColor};` : ''}" data-id="${spotNode.id}">
        <div class="mobile-spot-top">
          <span class="mobile-spot-title">${icon} ${this.escapeHtml(spotNode.title)}</span>
          ${spotNode.cost ? `<span class="node-badge">${this.escapeHtml(spotNode.cost)}</span>` : ''}
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

  openModalForAdd(parentId) {
    if (this.isReadOnly) return;
    this.modalTitle.textContent = '新增景點 / 節點';
    this.nodeForm.reset();
    document.getElementById('nodeId').value = '';
    document.getElementById('nodeParentId').value = parentId;
    this.nodeColorInput.value = '#ffffff';
    this.nodeColorCustom.value = '#ffffff';
    this.hotelFieldsBox.style.display = 'none';
    this.modal.classList.add('active');
  }

  openModalForEdit(node) {
    if (this.isReadOnly) return;
    this.modalTitle.textContent = '編輯景點資訊';
    document.getElementById('nodeId').value = node.id;
    document.getElementById('nodeParentId').value = '';
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
    this.modal.classList.add('active');
  }

  closeModal() { this.modal.classList.remove('active'); }

  handleFormSubmit() {
    if (this.isReadOnly) return;
    const id = document.getElementById('nodeId').value;
    const parentId = document.getElementById('nodeParentId').value;
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

    if (id) {
      const node = this.findNode(proj.rootNode, id);
      if (node) Object.assign(node, nodeData);
    } else {
      const newId = 'node_' + Date.now();
      const parentNode = this.findNode(proj.rootNode, parentId) || proj.rootNode;
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
        if (imported && (imported.rootNode || imported.title)) {
          const newId = 'proj_tl_' + Date.now();
          const newProj = {
            id: newId,
            title: imported.title || '匯入行程',
            rootNode: imported.rootNode || imported
          };
          this.projects.push(newProj);
          this.activeProjectId = newId;
          this.saveProjects();
          this.render();
          this.showToast('📥 成功匯入全新行程！');
        }
      } catch (err) {}
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
