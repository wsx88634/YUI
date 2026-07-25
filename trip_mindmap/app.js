/**
 * TripTree V14 - 國家與地區二級分類、完美無縫向量連線與全彈窗美化 (V14 Master Engine)
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

// 預設國家與地區二級階層 (Default Country Hierarchy)
const DEFAULT_COUNTRY_HIERARCHY = {
  "所有": ["所有"],
  "日本": ["所有日本", "福岡", "東京", "大阪", "京都", "奈良"],
  "韓國": ["所有韓國", "首爾", "釜山"],
  "台灣": ["所有台灣", "台北", "台南"],
  "泰國": ["所有泰國", "曼谷", "清邁"]
};

// 預設景點靈感庫 (Preset Spot Vault)
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

class VerticalTimelineAppV14 {
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

    // 📦 Vault Drawer Elements
    this.vaultDrawer = document.getElementById('vaultDrawer');
    this.btnOpenVault = document.getElementById('btnOpenVault');
    this.btnCloseVault = document.getElementById('btnCloseVault');
    this.btnToggleFullVault = document.getElementById('btnToggleFullVault');
    
    // 🌐 國家與地區二級分類元素
    this.countryTabsRow = document.getElementById('countryTabsRow');
    this.vaultRegionTabs = document.getElementById('vaultRegionTabs');
    this.regionFilterLabel = document.getElementById('regionFilterLabel');
    this.vaultCardList = document.getElementById('vaultCardList');

    this.vaultQuickInput = document.getElementById('vaultQuickInput');
    this.vaultTargetRegion = document.getElementById('vaultTargetRegion');
    this.btnGenVaultCard = document.getElementById('btnGenVaultCard');
    this.btnAddRegionTag = document.getElementById('btnAddRegionTag');

    // ✨ Modals
    this.newTripModal = document.getElementById('newTripModal');
    this.newTripForm = document.getElementById('newTripForm');
    this.btnCloseNewTripModal = document.getElementById('btnCloseNewTripModal');
    this.btnCancelNewTrip = document.getElementById('btnCancelNewTrip');
    this.newTripStartDateInput = document.getElementById('newTripStartDate');

    this.placementModal = document.getElementById('placementModal');
    this.btnClosePlacementModal = document.getElementById('btnClosePlacementModal');
    this.placementSpotTargetName = document.getElementById('placementSpotTargetName');
    this.placementOptionsList = document.getElementById('placementOptionsList');

    // ✨ Add Region Modal
    this.addRegionModal = document.getElementById('addRegionModal');
    this.addRegionForm = document.getElementById('addRegionForm');
    this.btnCloseAddRegionModal = document.getElementById('btnCloseAddRegionModal');
    this.btnCancelAddRegion = document.getElementById('btnCancelAddRegion');

    // ✨ Confirm Delete Modal
    this.confirmDeleteModal = document.getElementById('confirmDeleteModal');
    this.confirmDeleteText = document.getElementById('confirmDeleteText');
    this.btnCloseConfirmDeleteModal = document.getElementById('btnCloseConfirmDeleteModal');
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
    const saved = localStorage.getItem('triptree_tl_v14_projects');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return JSON.parse(JSON.stringify(TOKYO_DEMO_PROJECTS));
  }

  loadActiveProjectId() {
    const saved = localStorage.getItem('triptree_tl_v14_active_id');
    if (saved && this.projects.some(p => p.id === saved)) return saved;
    return this.projects[0] ? this.projects[0].id : "proj_fukuoka_demo";
  }

  loadVaultItems() {
    const saved = localStorage.getItem('triptree_spot_vault_items_v14');
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
    localStorage.setItem('triptree_tl_v14_projects', JSON.stringify(this.projects));
    localStorage.setItem('triptree_tl_v14_active_id', this.activeProjectId);
    this.showToast('💾 行程已保存');
  }

  saveVaultData() {
    localStorage.setItem('triptree_spot_vault_items_v14', JSON.stringify(this.vaultItems));
    localStorage.setItem('triptree_country_hierarchy', JSON.stringify(this.countryHierarchy));
  }

  getActiveProject() {
    return this.projects.find(p => p.id === this.activeProjectId) || this.projects[0];
  }

  bindEvents() {
    this.btnZoomIn.addEventListener('click', () => this.setZoom(this.zoomLevel + 0.15));
    this.btnZoomOut.addEventListener('click', () => this.setZoom(this.zoomLevel - 0.15));
    this.zoomDisplay.addEventListener('click', () => this.setZoom(1.0));

    // 📦 Vault Drawer
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

    // ✨ 2. 開啟新增地區 Modal 視窗 (取代 Prompt)
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

    // ✨ 2. 自訂刪除確認 Modal 綁定 (取代 Confirm)
    this.btnCloseConfirmDeleteModal.addEventListener('click', () => this.confirmDeleteModal.classList.remove('active'));
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

    // ✨ 新增行程 Modal 綁定
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

  // ✨ 2. 自訂 Modal 確認視窗觸發器 (取代原生 confirm)
  triggerCustomConfirm(msgText, onConfirmCallback) {
    this.confirmDeleteText.textContent = msgText;
    this.pendingDeleteAction = onConfirmCallback;
    this.confirmDeleteModal.classList.add('active');
  }

  // --- 🌐 3. 渲染國家與地區二級階層分類與景點庫 ---
  renderVault() {
    // 1. 渲染國家標籤 (Country Chips)
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

    // 2. 渲染對應國家的地區標籤 (Region Chips)
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

    // 3. 篩選景點卡片 (支援國家與地區雙重過濾)
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
          <span class="node-badge" style="font-size:0.75rem;">📍 ${this.escapeHtml(item.region || '景點')}</span>
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

      this.vaultCardList.appendChild(card);
    });
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
    targetNode.children.push({
      id: 'spot_' + Date.now(),
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

  // --- 📐 1. 完美無縫向量連線引擎 (徹底修復箭頭分離與連線斷掉跑版問題) ---
  renderMindmap() {
    this.nodesLayer.innerHTML = '';
    this.svgConnectors.innerHTML = '';
    const proj = this.getActiveProject();
    if (!proj || !proj.rootNode) return;
    const root = proj.rootNode;

    const nodePositions = new Map();
    const mainTrunkX = 350;
    let currentY = 160;

    const COL_DAY_X = 460;
    const COL_PERIOD_X = 520;
    const COL_SPOT_X = 760;
    const COL_SUB1_X = 1110;
    const COL_SUB2_X = 1460;

    nodePositions.set(root.id, { x: mainTrunkX - 160, y: 40, category: 'root', node: root });

    const processTree = (node, level) => {
      if (!node.children || node.children.length === 0 || node.expanded === false) return;

      node.children.forEach(child => {
        let childX = COL_SUB1_X;
        if (child.category === 'day') childX = COL_DAY_X;
        else if (child.category === 'period') childX = COL_PERIOD_X;
        else if (level === 2) childX = COL_SPOT_X;
        else if (level === 3) childX = COL_SUB1_X;
        else if (level >= 4) childX = COL_SUB2_X;

        const childY = currentY;
        nodePositions.set(child.id, { x: childX, y: childY, category: child.category, node: child });

        let deltaY = 145;
        if (child.note && child.note.length > 20) deltaY = 175;
        if (child.category === 'day') deltaY = 85;

        currentY += deltaY;

        processTree(child, level + 1);
      });
    };

    processTree(root, 0);

    const maxY = Math.max(currentY + 150, 1400);
    this.drawMainTrunkLine(mainTrunkX, 100, mainTrunkX, maxY);

    // 1. 建立所有 DOM 節點
    const renderedNodesMap = new Map();
    nodePositions.forEach((pos, id) => {
      const cardEl = this.createNodeCard(pos.node, pos.x, pos.y);
      this.nodesLayer.appendChild(cardEl);
      renderedNodesMap.set(id, { element: cardEl, pos: pos });
    });

    // 2. 量測精準幾何座標並繪製完美的無縫向量連線
    requestAnimationFrame(() => {
      setTimeout(() => {
        this.svgConnectors.innerHTML = '';
        this.drawMainTrunkLine(mainTrunkX, 100, mainTrunkX, maxY);

        nodePositions.forEach((pos, id) => {
          if (id !== root.id) {
            const parentNode = this.findParentNode(root, id);
            if (parentNode) {
              const parentItem = renderedNodesMap.get(parentNode.id);
              const childItem = renderedNodesMap.get(id);

              if (parentItem && childItem) {
                const pEl = parentItem.element;
                const cEl = childItem.element;

                // 量測真正的物理寬度與高度
                const parentW = pEl.offsetWidth || 260;
                const parentH = pEl.offsetHeight || 50;
                const childH = cEl.offsetHeight || 50;

                let startX = parentItem.pos.x + parentW;
                let startY = parentItem.pos.y + (parentH / 2);

                if (parentNode.category === 'day' && childItem.pos.category === 'period') {
                  startX = parentItem.pos.x + 30;
                  startY = parentItem.pos.y + parentH;
                } else if (parentNode.id === root.id) {
                  startX = mainTrunkX;
                  startY = childItem.pos.y + (childH / 2);
                }

                // 目標點：節點卡片的正左邊緣 (No offset misalignment!)
                const targetX = childItem.pos.x;
                const targetY = childItem.pos.y + (childH / 2);

                this.drawCleanOrthogonalConnector(startX, startY, targetX, targetY, parentNode.category === 'day');
              }
            }
          }
        });
      }, 25);
    });

    setTimeout(() => {
      this.viewport.scrollLeft = mainTrunkX - 200;
      this.viewport.scrollTop = 0;
    }, 50);
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
              <button class="btn-mini btn-add-child">+</button>
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
            <button class="btn-mini btn-add-child">+</button>
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

  // 📐 1. 完美無縫咬合向量折線繪製函式 (No Gap! No Arrow Misalignment!)
  drawCleanOrthogonalConnector(x1, y1, x2, y2, isDayToPeriod = false) {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');

    const arrowSize = 8;
    const lineEndX = x2 - arrowSize;

    let d = '';
    if (isDayToPeriod) {
      d = `M ${x1} ${y1} V ${y2} H ${lineEndX}`;
    } else {
      // 保證從父節點右側向右走 Channel (預設 35px)，再轉折
      const channelX = Math.min(x1 + 35, lineEndX - 20);
      d = `M ${x1} ${y1} H ${channelX} V ${y2} H ${lineEndX}`;
    }

    path.setAttribute('d', d);
    path.setAttribute('class', 'connector-path-timeline');
    group.appendChild(path);

    // 終點實心箭頭點 (剛好與 lineEndX 咬合，終點尖端在 x2)
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
            ${!this.isReadOnly ? `<button class="btn btn-mini btn-add-child-outline" style="background:rgba(255,255,255,0.2); color:#fff; border:none;">+</button>` : ''}
          </div>
        `;

        let dayBodyHtml = `<div class="mobile-day-body">`;

        if (dayNode.children && dayNode.children.length > 0) {
          dayNode.children.forEach(periodNode => {
            dayBodyHtml += `
              <div class="mobile-period-block">
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
          dayBodyHtml += `<div style="color:#94a3b8; font-size:0.9rem; text-align:center; padding:12px;">點擊 + 按鈕開始新增景點...</div>`;
        }

        dayBodyHtml += `</div>`;
        dayCard.innerHTML = dayHeaderHtml + dayBodyHtml;
        container.appendChild(dayCard);

        const addDayChildBtn = dayCard.querySelector('.btn-add-child-outline');
        if (addDayChildBtn) {
          addDayChildBtn.addEventListener('click', () => this.openModalForAdd(dayNode.id));
        }

        this.bindMobileSpotEvents(dayCard, root);
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
          <button class="mobile-action-btn btn-add-spot-sub" data-id="${spotNode.id}">+ 子景點</button>
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
    cardEl.querySelectorAll('.btn-add-spot-sub').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openModalForAdd(btn.getAttribute('data-id'));
      });
    });

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
  window.appTimelineV14 = new VerticalTimelineAppV14();
});
