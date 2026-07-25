/**
 * TripTree V2 - 由上而下樹狀心智圖旅遊規劃工具
 */

// 預設 Demo 多行程資料夾資料集
const DEFAULT_PROJECTS = [
  {
    id: "proj_1",
    title: "✈️ 東京 5天4夜自由行心智圖",
    rootNode: {
      id: "root_1",
      title: "🇯🇵 東京 5天4夜自由行",
      category: "root",
      expanded: true,
      bgColor: "#1e293b",
      children: [
        {
          id: "day-1",
          title: "📅 Day 1: 澀谷與原宿潮流探訪",
          category: "day",
          expanded: true,
          bgColor: "#1e293b",
          children: [
            {
              id: "spot-1",
              title: "SHIBUYA SKY 展望台",
              category: "spot",
              url: "https://www.shibuya-scramble-square.com/sky/",
              mapsUrl: "https://maps.google.com/?q=SHIBUYA+SKY",
              imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop",
              cost: "¥2,200",
              bgColor: "#3b0764",
              note: "預約 17:00 觀賞夕陽與黃昏俯瞰澀谷十字路口。",
              children: []
            },
            {
              id: "food-1",
              title: "阿夫利 AFURI 柚子鹽拉麵",
              category: "food",
              url: "https://afuri.com/",
              mapsUrl: "https://maps.google.com/?q=AFURI+Harajuku",
              cost: "¥1,380",
              bgColor: "#7c2d12",
              note: "推薦招牌柚子鹽拉麵與烤叉燒飯！",
              children: []
            }
          ]
        },
        {
          id: "day-2",
          title: "📅 Day 2: 淺草與新宿住宿",
          category: "day",
          expanded: true,
          bgColor: "#1e293b",
          children: [
            {
              id: "hotel-1",
              title: "新宿格拉斯麗飯店 (哥吉拉飯店)",
              category: "hotel",
              mapsUrl: "https://maps.google.com/?q=Hotel+Gracery+Shinjuku",
              cost: "NT$ 4,500/晚",
              bgColor: "#064e3b",
              hotelCheckIn: "15:00",
              hotelCheckOut: "11:00",
              hotelRoomType: "高級雙人房 #BK88219",
              note: "靠近新宿東口，樓下生活機能極佳！",
              children: []
            },
            {
              id: "spot-2",
              title: "淺草寺與雷門",
              category: "spot",
              mapsUrl: "https://maps.google.com/?q=Sensoji+Temple",
              imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500&auto=format&fit=crop",
              bgColor: "#0c4a6e",
              note: "早上 8:30 前到達可避開人潮。",
              children: []
            }
          ]
        }
      ]
    }
  },
  {
    id: "proj_2",
    title: "🇰🇷 首爾 4天3夜美食巡禮",
    rootNode: {
      id: "root_2",
      title: "🇰🇷 首爾 4天3夜美食巡禮",
      category: "root",
      expanded: true,
      bgColor: "#1e293b",
      children: [
        {
          id: "kr-day-1",
          title: "📅 Day 1: 弘大商圈與美食",
          category: "day",
          expanded: true,
          bgColor: "#1e293b",
          children: [
            {
              id: "kr-food-1",
              title: "保承會館 (弘大店 豬肉湯飯)",
              category: "food",
              cost: "₩10,000",
              bgColor: "#831843",
              note: "24小時營業，白湯濃郁必吃！",
              children: []
            }
          ]
        }
      ]
    }
  }
];

class TripAppV2 {
  constructor() {
    this.projects = this.loadProjects();
    this.activeProjectId = this.loadActiveProjectId();
    this.currentView = 'mindmap'; // 'mindmap' | 'outline'

    // Pan variables for canvas
    this.isPanning = false;
    this.startX = 0;
    this.startY = 0;
    this.scrollLeft = 0;
    this.scrollTop = 0;

    this.initElements();
    this.bindEvents();
    this.render();
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

    this.modal = document.getElementById('nodeModal');
    this.nodeForm = document.getElementById('nodeForm');
    this.modalTitle = document.getElementById('modalTitle');
    this.hotelFieldsBox = document.getElementById('hotelFieldsBox');
    this.nodeCategorySelect = document.getElementById('nodeCategory');

    this.colorPickerGrid = document.getElementById('colorPickerGrid');
    this.nodeColorInput = document.getElementById('nodeColor');
    this.nodeColorCustom = document.getElementById('nodeColorCustom');
  }

  loadProjects() {
    const saved = localStorage.getItem('triptree_v2_projects');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
  }

  loadActiveProjectId() {
    const saved = localStorage.getItem('triptree_v2_active_id');
    if (saved && this.projects.some(p => p.id === saved)) {
      return saved;
    }
    return this.projects[0] ? this.projects[0].id : "proj_1";
  }

  saveProjects() {
    localStorage.setItem('triptree_v2_projects', JSON.stringify(this.projects));
    localStorage.setItem('triptree_v2_active_id', this.activeProjectId);
    this.showToast('💾 資料已自動保存');
  }

  getActiveProject() {
    return this.projects.find(p => p.id === this.activeProjectId) || this.projects[0];
  }

  bindEvents() {
    // Project Title Edit
    this.tripTitleInput.addEventListener('input', (e) => {
      const proj = this.getActiveProject();
      if (proj) {
        proj.title = e.target.value;
        if (proj.rootNode) proj.rootNode.title = e.target.value;
        this.saveProjects();
        this.renderTabs();
      }
    });

    // View Switcher
    document.getElementById('tabMindmap').addEventListener('click', () => this.switchView('mindmap'));
    document.getElementById('tabOutline').addEventListener('click', () => this.switchView('outline'));

    // Add New Trip Tab
    document.getElementById('btnAddTripTab').addEventListener('click', () => {
      const title = prompt('請輸入新行程資料夾名稱：', '新旅遊行程');
      if (title) {
        const newProjId = 'proj_' + Date.now();
        const newProj = {
          id: newProjId,
          title: title,
          rootNode: {
            id: 'root_' + Date.now(),
            title: title,
            category: 'root',
            expanded: true,
            bgColor: '#1e293b',
            children: []
          }
        };
        this.projects.push(newProj);
        this.activeProjectId = newProjId;
        this.saveProjects();
        this.render();
      }
    });

    // Category Select toggle Hotel fields
    this.nodeCategorySelect.addEventListener('change', (e) => {
      this.hotelFieldsBox.style.display = e.target.value === 'hotel' ? 'flex' : 'none';
    });

    // Color Swatch Selection
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

    // Canvas Panning (Drag)
    this.viewport.addEventListener('mousedown', (e) => {
      if (e.target.closest('.node-card') || e.target.closest('.btn') || e.target.closest('.fab-btn')) return;
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

    // FAB Add
    document.getElementById('fabAdd').addEventListener('click', () => {
      const proj = this.getActiveProject();
      if (proj && proj.rootNode) {
        this.openModalForAdd(proj.rootNode.id);
      }
    });

    // Export / Import / Demo Reset
    document.getElementById('btnExport').addEventListener('click', () => this.exportJSON());
    document.getElementById('btnImport').addEventListener('click', () => document.getElementById('fileImportInput').click());
    document.getElementById('fileImportInput').addEventListener('change', (e) => this.importJSON(e));
    document.getElementById('btnResetDemo').addEventListener('click', () => {
      if (confirm('確定重置為預設多行程範例資料嗎？現有修改將被覆蓋。')) {
        this.projects = JSON.parse(JSON.stringify(DEFAULT_PROJECTS));
        this.activeProjectId = this.projects[0].id;
        this.saveProjects();
        this.render();
      }
    });

    // Modal Form Submit & Cancel
    document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
    document.getElementById('btnCancelModal').addEventListener('click', () => this.closeModal());
    this.nodeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });
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
      this.tripTitleInput.value = proj.title || "✈️ 我的旅遊心智圖";
      if (this.currentView === 'mindmap') this.renderMindmap();
      else this.renderOutline();
    }
  }

  // --- Render Folder Tabs ---
  renderTabs() {
    this.tripTabsBar.innerHTML = '';
    this.projects.forEach(proj => {
      const tab = document.createElement('div');
      tab.className = `folder-tab ${proj.id === this.activeProjectId ? 'active' : ''}`;
      tab.innerHTML = `
        <span>📁 ${this.escapeHtml(proj.title)}</span>
        ${this.projects.length > 1 ? `<span class="tab-close" title="刪除此行程">✕</span>` : ''}
      `;

      tab.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-close')) {
          e.stopPropagation();
          if (confirm(`確定刪除行程資料夾「${proj.title}」？`)) {
            this.projects = this.projects.filter(p => p.id !== proj.id);
            if (this.activeProjectId === proj.id) {
              this.activeProjectId = this.projects[0].id;
            }
            this.saveProjects();
            this.render();
          }
          return;
        }
        this.activeProjectId = proj.id;
        this.saveProjects();
        this.render();
      });

      this.tripTabsBar.appendChild(tab);
    });
  }

  // --- Top-Down Mindmap Tree Positioning Logic ---
  renderMindmap() {
    this.nodesLayer.innerHTML = '';
    this.svgConnectors.innerHTML = '';

    const proj = this.getActiveProject();
    if (!proj || !proj.rootNode) return;
    const root = proj.rootNode;

    const nodePositions = new Map();
    const levelHeight = 170; // Vertical distance between levels
    const cardWidth = 220;
    const cardHeight = 110;
    const siblingGap = 40;
    const startY = 120;
    const startX = 1400; // Center X origin on canvas

    // Top-Down Layout Algorithm: Calculate Widths & Positions
    const calculateSubtreeWidth = (node) => {
      if (!node.children || node.children.length === 0 || node.expanded === false) {
        return cardWidth + siblingGap;
      }
      let totalWidth = 0;
      node.children.forEach(child => {
        totalWidth += calculateSubtreeWidth(child);
      });
      return Math.max(totalWidth, cardWidth + siblingGap);
    };

    const positionSubtree = (node, level, leftX, topY) => {
      const subtreeWidth = calculateSubtreeWidth(node);
      const nodeX = leftX + subtreeWidth / 2 - cardWidth / 2;
      const nodeY = topY;

      nodePositions.set(node.id, { x: nodeX, y: nodeY, node });

      if (node.children && node.children.length > 0 && node.expanded !== false) {
        let childLeftX = leftX;
        node.children.forEach(child => {
          const childWidth = calculateSubtreeWidth(child);
          positionSubtree(child, level + 1, childLeftX, topY + levelHeight);
          childLeftX += childWidth;
        });
      }
    };

    const totalRootWidth = calculateSubtreeWidth(root);
    positionSubtree(root, 0, startX - totalRootWidth / 2, startY);

    // Render Cards & SVG Bezier Lines (From Top to Bottom)
    nodePositions.forEach((pos, id) => {
      const cardEl = this.createNodeCard(pos.node, pos.x, pos.y);
      this.nodesLayer.appendChild(cardEl);

      if (pos.node.children && pos.node.children.length > 0 && pos.node.expanded !== false) {
        pos.node.children.forEach(child => {
          const childPos = nodePositions.get(child.id);
          if (childPos) {
            // Draw line from bottom center of parent to top center of child
            const parentBottomX = pos.x + cardWidth / 2;
            const parentBottomY = pos.y + cardHeight;
            const childTopX = childPos.x + cardWidth / 2;
            const childTopY = childPos.y;

            this.drawSvgTopDownCurve(parentBottomX, parentBottomY, childTopX, childTopY);
          }
        });
      }
    });

    // Center Viewport on Root Node
    setTimeout(() => {
      const rootPos = nodePositions.get(root.id);
      if (rootPos) {
        this.viewport.scrollLeft = rootPos.x - this.viewport.clientWidth / 2 + cardWidth / 2;
        this.viewport.scrollTop = rootPos.y - 60;
      }
    }, 50);
  }

  createNodeCard(node, x, y) {
    const group = document.createElement('div');
    group.className = 'tree-node-group';
    group.style.left = `${x}px`;
    group.style.top = `${y}px`;

    const isRoot = node.category === 'root';
    const isDay = node.category === 'day';

    let icon = '📍';
    if (node.category === 'food') icon = '🍜';
    if (node.category === 'hotel') icon = '🏨';
    if (node.category === 'shop') icon = '🛍️';
    if (node.category === 'transit') icon = '🚌';
    if (isDay) icon = '📅';
    if (isRoot) icon = '🗺️';

    const cardBgColor = node.bgColor || '#1e293b';

    let cardHtml = `
      <div class="node-card ${isRoot ? 'root-node' : ''} ${isDay ? 'category-node' : ''}" style="background-color: ${cardBgColor};">
        <div class="node-header">
          <span class="node-title">${icon} ${this.escapeHtml(node.title)}</span>
          ${node.cost ? `<span class="node-badge">${this.escapeHtml(node.cost)}</span>` : ''}
        </div>
    `;

    // Special Hotel Info Display
    if (node.category === 'hotel' && (node.hotelCheckIn || node.hotelRoomType)) {
      cardHtml += `
        <div class="hotel-badge-box">
          ${node.hotelCheckIn ? `<div>🏨 入住: ${this.escapeHtml(node.hotelCheckIn)} | 退房: ${this.escapeHtml(node.hotelCheckOut || '')}</div>` : ''}
          ${node.hotelRoomType ? `<div>🛏️ ${this.escapeHtml(node.hotelRoomType)}</div>` : ''}
        </div>
      `;
    }

    if (node.imageUrl) {
      cardHtml += `<img class="node-thumb" src="${this.escapeHtml(node.imageUrl)}" alt="thumb" loading="lazy">`;
    }

    if (node.url || node.mapsUrl || node.note) {
      cardHtml += `<div class="node-meta">`;
      if (node.url) cardHtml += `<a href="${this.escapeHtml(node.url)}" target="_blank" class="node-link" onclick="event.stopPropagation()">🔗 網頁連結</a>`;
      if (node.mapsUrl) cardHtml += `<a href="${this.escapeHtml(node.mapsUrl)}" target="_blank" class="node-link" onclick="event.stopPropagation()">🗺️ 地圖</a>`;
      if (node.note) cardHtml += `<div style="font-size:0.75rem; color:var(--text-muted);">${this.escapeHtml(node.note)}</div>`;
      cardHtml += `</div>`;
    }

    cardHtml += `
      <div class="node-actions">
        <button class="btn-mini btn-add-child" title="新增子節點">+</button>
        ${!isRoot ? `<button class="btn-mini btn-edit-node" title="編輯">✏️</button>` : ''}
        ${!isRoot ? `<button class="btn-mini btn-delete-node" title="刪除">🗑️</button>` : ''}
      </div>
    `;

    // Top-Down Collapse Button (Bottom of Card)
    if (node.children && node.children.length > 0) {
      const isExpanded = node.expanded !== false;
      cardHtml += `
        <button class="toggle-btn-bottom" title="${isExpanded ? '收合' : '展開'}">
          ${isExpanded ? '−' : '+'}
        </button>
      `;
    }

    cardHtml += `</div>`;
    group.innerHTML = cardHtml;

    // Toggle Button Event
    const toggleBtn = group.querySelector('.toggle-btn-bottom');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        node.expanded = node.expanded === false ? true : false;
        this.saveProjects();
        this.renderMindmap();
      });
    }

    group.querySelector('.btn-add-child').addEventListener('click', (e) => {
      e.stopPropagation();
      this.openModalForAdd(node.id);
    });

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
        if (confirm(`確定刪除「${node.title}」及其子節點嗎？`)) {
          this.deleteNode(proj.rootNode, node.id);
          this.saveProjects();
          this.render();
        }
      });
    }

    return group;
  }

  // Draw Top-Down Bezier Curve Path
  drawSvgTopDownCurve(x1, y1, x2, y2) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const dy = y2 - y1;
    const cy1 = y1 + dy * 0.5;
    const cy2 = y1 + dy * 0.5;

    const d = `M ${x1} ${y1} C ${x1} ${cy1}, ${x2} ${cy2}, ${x2} ${y2}`;
    path.setAttribute('d', d);
    path.setAttribute('class', 'connector-path');
    this.svgConnectors.appendChild(path);
  }

  // --- Mobile Outline View ---
  renderOutline() {
    this.outlineTree.innerHTML = '';
    const proj = this.getActiveProject();
    if (!proj || !proj.rootNode) return;
    const root = proj.rootNode;

    const rootGroup = document.createElement('div');
    rootGroup.className = 'outline-group';
    rootGroup.innerHTML = `
      <div class="outline-group-header">
        <span>${this.escapeHtml(root.title)}</span>
        <button class="btn btn-primary btn-mini" id="outlineAddDay">+ 新增行程</button>
      </div>
      <div class="outline-items" id="outlineRootItems"></div>
    `;
    this.outlineTree.appendChild(rootGroup);

    document.getElementById('outlineAddDay').addEventListener('click', () => this.openModalForAdd(root.id));

    const itemsContainer = rootGroup.querySelector('#outlineRootItems');
    const renderOutlineNode = (node, container) => {
      if (!node.children) return;
      node.children.forEach(child => {
        const itemCard = document.createElement('div');
        itemCard.className = 'outline-item-card';
        if (child.bgColor) itemCard.style.backgroundColor = child.bgColor;

        let icon = '📍';
        if (child.category === 'food') icon = '🍜';
        if (child.category === 'hotel') icon = '🏨';
        if (child.category === 'day') icon = '📅';

        itemCard.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <strong style="font-size:1rem; color:var(--text-main);">${icon} ${this.escapeHtml(child.title)}</strong>
            ${child.cost ? `<span class="node-badge">${this.escapeHtml(child.cost)}</span>` : ''}
          </div>
          ${child.category === 'hotel' && child.hotelCheckIn ? `<div style="font-size:0.8rem; color:#67e8f9;">🏨 入住: ${this.escapeHtml(child.hotelCheckIn)} | 退房: ${this.escapeHtml(child.hotelCheckOut || '')} (${this.escapeHtml(child.hotelRoomType || '')})</div>` : ''}
          ${child.note ? `<div style="font-size:0.85rem; color:var(--text-muted);">${this.escapeHtml(child.note)}</div>` : ''}
          <div style="display:flex; gap:10px; font-size:0.8rem; margin-top:4px;">
            ${child.url ? `<a href="${this.escapeHtml(child.url)}" target="_blank" class="node-link">🔗 連結</a>` : ''}
            ${child.mapsUrl ? `<a href="${this.escapeHtml(child.mapsUrl)}" target="_blank" class="node-link">🗺️ 地圖</a>` : ''}
          </div>
          <div style="display:flex; justify-content:flex-end; gap:6px; margin-top:6px;">
            <button class="btn btn-mini btn-add-child-outline">+ 子景點</button>
            <button class="btn btn-mini btn-edit-outline">✏️</button>
            <button class="btn btn-mini btn-del-outline">🗑️</button>
          </div>
          <div class="outline-subitems" style="margin-top:8px; padding-left:12px;"></div>
        `;
        container.appendChild(itemCard);

        itemCard.querySelector('.btn-add-child-outline').addEventListener('click', () => this.openModalForAdd(child.id));
        itemCard.querySelector('.btn-edit-outline').addEventListener('click', () => this.openModalForEdit(child));
        itemCard.querySelector('.btn-del-outline').addEventListener('click', () => {
          if (confirm(`確定刪除「${child.title}」？`)) {
            this.deleteNode(root, child.id);
            this.saveProjects();
            this.render();
          }
        });

        renderOutlineNode(child, itemCard.querySelector('.outline-subitems'));
      });
    };
    renderOutlineNode(root, itemsContainer);
  }

  // --- Modal Operations ---
  openModalForAdd(parentId) {
    this.modalTitle.textContent = '新增景點 / 節點';
    this.nodeForm.reset();
    document.getElementById('nodeId').value = '';
    document.getElementById('nodeParentId').value = parentId;
    this.nodeColorInput.value = '#1e293b';
    this.nodeColorCustom.value = '#1e293b';
    this.hotelFieldsBox.style.display = 'none';
    this.modal.classList.add('active');
  }

  openModalForEdit(node) {
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

    // Hotel special fields
    document.getElementById('hotelCheckIn').value = node.hotelCheckIn || '';
    document.getElementById('hotelCheckOut').value = node.hotelCheckOut || '';
    document.getElementById('hotelRoomType').value = node.hotelRoomType || '';
    this.hotelFieldsBox.style.display = node.category === 'hotel' ? 'flex' : 'none';

    // Color fields
    const color = node.bgColor || '#1e293b';
    this.nodeColorInput.value = color;
    this.nodeColorCustom.value = color;

    this.modal.classList.add('active');
  }

  closeModal() { this.modal.classList.remove('active'); }

  handleFormSubmit() {
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
    if (!parent.children) return false;
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
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported && (imported.rootNode || imported.title)) {
          const newId = 'proj_' + Date.now();
          const newProj = {
            id: newId,
            title: imported.title || '匯入行程',
            rootNode: imported.rootNode || imported
          };
          this.projects.push(newProj);
          this.activeProjectId = newId;
          this.saveProjects();
          this.render();
          this.showToast('📥 成功匯入全新行程資料夾！');
        }
      } catch (err) { alert('解析 JSON 檔案失敗'); }
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
  window.appV2 = new TripAppV2();
});
