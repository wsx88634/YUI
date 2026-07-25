/**
 * TripTree V4 - 寬敞排版垂直時間軸 + 手動畫面放大縮小控制
 */

(function clearLegacyCache() {
  localStorage.removeItem('triptree_data');
  localStorage.removeItem('triptree_v2_projects');
  localStorage.removeItem('triptree_tl_projects');
})();

const DEFAULT_TIMELINE_PROJECTS = [
  {
    id: "proj_timeline_1",
    title: "璇璇行程 10/19~10/25",
    rootNode: {
      id: "root_tl1",
      title: "璇璇行程 10/19~10/25",
      category: "root",
      expanded: true,
      bgColor: "#ffffff",
      children: [
        {
          id: "day-1019",
          title: "10/19 到日本",
          category: "day",
          expanded: true,
          bgColor: "#ffffff",
          children: [
            {
              id: "period-am",
              title: "上午",
              category: "period",
              expanded: true,
              bgColor: "#fef3c7",
              children: [
                {
                  id: "act-1",
                  title: "準備行李 ~ 11:00 出門！",
                  category: "spot",
                  cost: "11:00 前",
                  bgColor: "#fef08a",
                  note: "檢查護照、日幣與網卡。",
                  children: []
                }
              ]
            },
            {
              id: "period-noon",
              title: "中午",
              category: "period",
              expanded: true,
              bgColor: "#fef3c7",
              children: [
                {
                  id: "act-2",
                  title: "12:00 到小港機場！",
                  category: "spot",
                  cost: "12:00",
                  bgColor: "#fed7aa",
                  note: "先辦理登機與托運行李。",
                  children: []
                }
              ]
            },
            {
              id: "period-pm",
              title: "下午",
              category: "period",
              expanded: true,
              bgColor: "#fef3c7",
              children: [
                {
                  id: "act-3",
                  title: "15:35 起飛 ➔ 19:30 抵達日本關西機場",
                  category: "spot",
                  bgColor: "#bbf7d0",
                  note: "抵達後依指示前往搭乘南海電鐵。",
                  children: []
                }
              ]
            },
            {
              id: "period-night",
              title: "晚上",
              category: "period",
              expanded: true,
              bgColor: "#fef3c7",
              children: [
                {
                  id: "act-4",
                  title: "搭南海電鐵（依照出關時間搭乘班次）",
                  category: "transit",
                  bgColor: "#dcfce7",
                  children: [
                    {
                      id: "sub-train-1",
                      title: "關西機場站 20:09 ➔ 難波站 20:52",
                      category: "transit",
                      bgColor: "#fef08a",
                      children: []
                    },
                    {
                      id: "sub-train-2",
                      title: "關西機場站 20:26 ➔ 難波站 21:08",
                      category: "transit",
                      bgColor: "#fef08a",
                      children: []
                    }
                  ]
                },
                {
                  id: "act-5",
                  title: "入住【一心齋橋2號店】",
                  category: "hotel",
                  bgColor: "#ffedd5",
                  hotelCheckIn: "21:30",
                  hotelCheckOut: "11:00",
                  hotelRoomType: "心齋橋館 #BK9928",
                  note: "步行地下道至【一心齋橋2號店】",
                  children: [
                    {
                      id: "act-dinner",
                      title: "晚餐：看路上有沒有超商或店家有開隨意吃！！",
                      category: "food",
                      bgColor: "#e0e7ff",
                      children: [
                        { id: "food-sushi", title: "11:00~00:00 藏壽司 道頓堀全球旗艦店", category: "food", bgColor: "#fef08a", children: [] },
                        { id: "food-ramen", title: "24HR 一蘭 道頓堀店別館", category: "food", bgColor: "#fef08a", children: [] },
                        { id: "food-market", title: "黑門市場", category: "spot", bgColor: "#dcfce7", children: [] }
                      ]
                    }
                  ]
                },
                {
                  id: "act-donki",
                  title: "24HR 唐吉訶德 道頓堀店",
                  category: "shop",
                  bgColor: "#fef08a",
                  note: "買零食與藥妝補貨！",
                  children: []
                }
              ]
            }
          ]
        }
      ]
    }
  }
];

class VerticalTimelineAppV4 {
  constructor() {
    this.projects = this.loadProjects();
    this.activeProjectId = this.loadActiveProjectId();
    this.currentView = 'mindmap';
    this.zoomLevel = 1.0;

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

    this.btnZoomIn = document.getElementById('btnZoomIn');
    this.btnZoomOut = document.getElementById('btnZoomOut');
    this.zoomDisplay = document.getElementById('zoomDisplay');

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
    const saved = localStorage.getItem('triptree_tl_v4_projects');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return JSON.parse(JSON.stringify(DEFAULT_TIMELINE_PROJECTS));
  }

  loadActiveProjectId() {
    const saved = localStorage.getItem('triptree_tl_v4_active_id');
    if (saved && this.projects.some(p => p.id === saved)) return saved;
    return this.projects[0] ? this.projects[0].id : "proj_timeline_1";
  }

  saveProjects() {
    localStorage.setItem('triptree_tl_v4_projects', JSON.stringify(this.projects));
    localStorage.setItem('triptree_tl_v4_active_id', this.activeProjectId);
    this.showToast('💾 行程已保存');
  }

  getActiveProject() {
    return this.projects.find(p => p.id === this.activeProjectId) || this.projects[0];
  }

  bindEvents() {
    // Zoom Controls
    this.btnZoomIn.addEventListener('click', () => this.setZoom(this.zoomLevel + 0.15));
    this.btnZoomOut.addEventListener('click', () => this.setZoom(this.zoomLevel - 0.15));
    this.zoomDisplay.addEventListener('click', () => this.setZoom(1.0));

    // Ctrl + Wheel Zoom
    this.viewport.addEventListener('wheel', (e) => {
      if (e.ctrlKey) {
        e.preventDefault();
        const delta = e.deltaY < 0 ? 0.1 : -0.1;
        this.setZoom(this.zoomLevel + delta);
      }
    }, { passive: false });

    this.tripTitleInput.addEventListener('input', (e) => {
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

    document.getElementById('btnAddTripTab').addEventListener('click', () => {
      const title = prompt('請輸入新行程名稱：', '新行程 10/19~10/25');
      if (title) {
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
            children: []
          }
        };
        this.projects.push(newProj);
        this.activeProjectId = newProjId;
        this.saveProjects();
        this.render();
      }
    });

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
      const proj = this.getActiveProject();
      if (proj && proj.rootNode) this.openModalForAdd(proj.rootNode.id);
    });

    document.getElementById('btnExport').addEventListener('click', () => this.exportJSON());
    document.getElementById('btnImport').addEventListener('click', () => document.getElementById('fileImportInput').click());
    document.getElementById('fileImportInput').addEventListener('change', (e) => this.importJSON(e));
    
    document.getElementById('btnResetDemo').addEventListener('click', () => {
      localStorage.clear();
      this.projects = JSON.parse(JSON.stringify(DEFAULT_TIMELINE_PROJECTS));
      this.activeProjectId = this.projects[0].id;
      this.saveProjects();
      this.render();
      this.showToast('✨ 已重置為圖片範例！');
    });

    document.getElementById('modalClose').addEventListener('click', () => this.closeModal());
    document.getElementById('btnCancelModal').addEventListener('click', () => this.closeModal());
    this.nodeForm.addEventListener('submit', (e) => {
      e.preventDefault();
      this.handleFormSubmit();
    });
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
      this.tripTitleInput.value = proj.title || "璇璇行程 10/19~10/25";
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
        ${this.projects.length > 1 ? `<span class="tab-close">✕</span>` : ''}
      `;
      tab.addEventListener('click', (e) => {
        if (e.target.classList.contains('tab-close')) {
          e.stopPropagation();
          if (confirm(`確定刪除行程「${proj.title}」？`)) {
            this.projects = this.projects.filter(p => p.id !== proj.id);
            if (this.activeProjectId === proj.id) this.activeProjectId = this.projects[0].id;
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

  // --- Generous Spacing Vertical Timeline Layout (寬敞利落不擠在一塊) ---
  renderMindmap() {
    this.nodesLayer.innerHTML = '';
    this.svgConnectors.innerHTML = '';
    const proj = this.getActiveProject();
    if (!proj || !proj.rootNode) return;
    const root = proj.rootNode;

    const nodePositions = new Map();
    const mainTrunkX = 450;
    let currentY = 180; // 頂部與主幹留出空間

    nodePositions.set(root.id, { x: mainTrunkX - 160, y: 40, node: root });

    // 大間距引出計算
    const layoutChildren = (parent, parentX, parentY, indentLevel) => {
      if (!parent.children || parent.children.length === 0 || parent.expanded === false) return;

      parent.children.forEach(child => {
        let childX = parentX + 240; // 預設廣闊的 X 軸水平縮排距離
        let childY = currentY;

        if (child.category === 'day') {
          childX = mainTrunkX + 160;
        } else if (child.category === 'period') {
          childX = parentX + 160;
        } else if (indentLevel >= 2) {
          childX = parentX + 250;
        }

        nodePositions.set(child.id, { x: childX, y: childY, node: child });

        // 垂直 Y 軸高度加大到 145px (利落寬廣，絕不重疊擁擠)
        currentY += 145;

        layoutChildren(child, childX, childY, indentLevel + 1);
      });
    };

    layoutChildren(root, mainTrunkX, 40, 0);

    const maxY = Math.max(currentY + 120, 1200);
    this.drawMainTrunkLine(mainTrunkX, 100, mainTrunkX, maxY);

    // Draw Connectors
    nodePositions.forEach((pos, id) => {
      const cardEl = this.createNodeCard(pos.node, pos.x, pos.y);
      this.nodesLayer.appendChild(cardEl);

      if (id !== root.id) {
        const parentNode = this.findParentNode(root, id);
        if (parentNode) {
          const parentPos = nodePositions.get(parentNode.id);
          if (parentPos) {
            let startX = parentPos.x + 140;
            let startY = parentPos.y + 24;

            if (parentNode.id === root.id) {
              startX = mainTrunkX;
              startY = pos.y + 24;
            }

            this.drawStepArrowLine(startX, startY, pos.x, pos.y + 24);
          }
        }
      }
    });

    setTimeout(() => {
      this.viewport.scrollLeft = mainTrunkX - 300;
      this.viewport.scrollTop = 0;
    }, 50);
  }

  createNodeCard(node, x, y) {
    const group = document.createElement('div');
    group.className = 'tree-node-group';
    group.style.left = `${x}px`;
    group.style.top = `${y}px`;

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
          <div class="node-actions" style="margin-left:10px;">
            <button class="btn-mini btn-add-child">+</button>
            <button class="btn-mini btn-edit-node">✏️</button>
          </div>
        </div>
      `;
    } else if (isPeriod) {
      cardHtml = `
        <div class="period-pill-card" style="background-color:${cardBgColor};">
          <span>🕒 ${this.escapeHtml(node.title)}</span>
          <div class="node-actions" style="margin-left:8px;">
            <button class="btn-mini btn-add-child">+</button>
            <button class="btn-mini btn-edit-node">✏️</button>
          </div>
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
            ${node.hotelCheckIn ? `<div>🏨 入住: ${this.escapeHtml(node.hotelCheckIn)} | 退房: ${this.escapeHtml(node.hotelCheckOut || '')}</div>` : ''}
            ${node.hotelRoomType ? `<div>🛏️ ${this.escapeHtml(node.hotelRoomType)}</div>` : ''}
          </div>
        `;
      }

      if (node.imageUrl) cardHtml += `<img class="node-thumb" src="${this.escapeHtml(node.imageUrl)}" alt="thumb" loading="lazy">`;

      if (node.url || node.mapsUrl || node.note) {
        cardHtml += `<div class="node-meta">`;
        if (node.url) cardHtml += `<a href="${this.escapeHtml(node.url)}" target="_blank" class="node-link" onclick="event.stopPropagation()">🔗 網頁連結</a>`;
        if (node.mapsUrl) cardHtml += `<a href="${this.escapeHtml(node.mapsUrl)}" target="_blank" class="node-link" onclick="event.stopPropagation()">🗺️ 地圖</a>`;
        if (node.note) cardHtml += `<div style="font-size:0.78rem; color:#475569; font-weight:600;">${this.escapeHtml(node.note)}</div>`;
        cardHtml += `</div>`;
      }

      cardHtml += `
        <div class="node-actions">
          <button class="btn-mini btn-add-child">+</button>
          <button class="btn-mini btn-edit-node">✏️</button>
          <button class="btn-mini btn-delete-node">🗑️</button>
        </div>
      `;

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
        if (confirm(`確定刪除「${node.title}」？`)) {
          this.deleteNode(proj.rootNode, node.id);
          this.saveProjects();
          this.render();
        }
      });
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

  drawStepArrowLine(x1, y1, x2, y2) {
    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const midX = x1 + 35;
    const d = `M ${x1} ${y1} H ${midX} V ${y2} H ${x2 - 10}`;
    path.setAttribute('d', d);
    path.setAttribute('class', 'connector-path-timeline');
    group.appendChild(path);

    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    arrow.setAttribute('points', `${x2},${y2} ${x2 - 10},${y2 - 6} ${x2 - 10},${y2 + 6}`);
    arrow.setAttribute('fill', '#0f766e');
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

        itemCard.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <strong style="font-size:1rem;">${icon} ${this.escapeHtml(child.title)}</strong>
            ${child.cost ? `<span class="node-badge">${this.escapeHtml(child.cost)}</span>` : ''}
          </div>
          ${child.category === 'hotel' && child.hotelCheckIn ? `<div style="font-size:0.8rem; color:#0369a1;">🏨 入住: ${this.escapeHtml(child.hotelCheckIn)} | 退房: ${this.escapeHtml(child.hotelCheckOut || '')} (${this.escapeHtml(child.hotelRoomType || '')})</div>` : ''}
          ${child.note ? `<div style="font-size:0.85rem; color:#475569; font-weight:600;">${this.escapeHtml(child.note)}</div>` : ''}
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

  openModalForAdd(parentId) {
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
  window.appTimelineV4 = new VerticalTimelineAppV4();
});
