/**
 * TripTree - 樹狀心智圖旅遊規劃工具
 */

// 預設 Demo 資料庫
const DEMO_DATA = {
  title: "✈️ 東京 5天4夜自由行心智圖",
  rootNode: {
    id: "root",
    title: "🇯🇵 東京 5天4夜自由行",
    category: "root",
    expanded: true,
    children: [
      {
        id: "day-1",
        title: "📅 Day 1: 澀谷與原宿潮流探訪",
        category: "day",
        expanded: true,
        children: [
          {
            id: "spot-1",
            title: "SHIBUYA SKY 展望台",
            category: "spot",
            url: "https://www.shibuya-scramble-square.com/sky/",
            mapsUrl: "https://maps.google.com/?q=SHIBUYA+SKY",
            imageUrl: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=500&auto=format&fit=crop",
            cost: "¥2,200",
            note: "預約 17:00 觀賞夕陽與黃昏俯瞰澀谷十字路口，需提前15分鐘排隊登頂。",
            children: []
          },
          {
            id: "food-1",
            title: "阿夫利 AFURI 柚子鹽拉麵",
            category: "food",
            url: "https://afuri.com/",
            mapsUrl: "https://maps.google.com/?q=AFURI+Harajuku",
            cost: "¥1,380",
            note: "原宿店人潮較多，推薦招牌柚子鹽拉麵與烤叉岸飯！",
            children: []
          }
        ]
      },
      {
        id: "day-2",
        title: "📅 Day 2: 淺草古意與秋葉原動漫",
        category: "day",
        expanded: true,
        children: [
          {
            id: "spot-2",
            title: "淺草寺與雷門",
            category: "spot",
            mapsUrl: "https://maps.google.com/?q=Sensoji+Temple",
            imageUrl: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=500&auto=format&fit=crop",
            note: "早上 8:30 前到達可避開人潮，順便逛仲見世通商店街買人形燒。",
            children: []
          },
          {
            id: "spot-3",
            title: "東京晴空塔 Tokyo Skytree",
            category: "spot",
            url: "https://www.tokyo-skytree.jp/",
            cost: "¥3,100",
            note: "可組合景觀台＋天望迴廊套票，樓下 Solamachi 很好逛。",
            children: []
          }
        ]
      },
      {
        id: "day-3",
        title: "📅 Day 3: 富士山河口湖一日遊",
        category: "day",
        expanded: true,
        children: [
          {
            id: "spot-4",
            title: "新倉山淺間公園 (忠靈塔)",
            category: "spot",
            mapsUrl: "https://maps.google.com/?q=Arakurayama+Sengen+Park",
            imageUrl: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=500&auto=format&fit=crop",
            note: "需爬 398 階梯，經典富士山與五重塔經典取景位置！",
            children: []
          },
          {
            id: "transit-1",
            title: "富士回遊列車 (新宿直達)",
            category: "transit",
            cost: "¥4,130",
            note: "需於搭乘前 30 天在 JR 官網搶訂指定席！",
            children: []
          }
        ]
      }
    ]
  }
};

class TripApp {
  constructor() {
    this.data = this.loadData();
    this.currentView = 'mindmap'; // 'mindmap' | 'outline'
    this.zoomLevel = 1;

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

    this.modal = document.getElementById('nodeModal');
    this.nodeForm = document.getElementById('nodeForm');
    this.modalTitle = document.getElementById('modalTitle');
  }

  loadData() {
    const saved = localStorage.getItem('triptree_data');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error('Failed to parse saved data', e);
      }
    }
    return JSON.parse(JSON.stringify(DEMO_DATA));
  }

  saveData() {
    localStorage.setItem('triptree_data', JSON.stringify(this.data));
    this.showToast('💾 資料已自動保存');
  }

  bindEvents() {
    // Trip Title Change
    this.tripTitleInput.addEventListener('input', (e) => {
      this.data.title = e.target.value;
      this.saveData();
    });

    // View Switcher
    document.getElementById('tabMindmap').addEventListener('click', () => this.switchView('mindmap'));
    document.getElementById('tabOutline').addEventListener('click', () => this.switchView('outline'));

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
      const walkX = (x - this.startX) * 1.2;
      const walkY = (y - this.startY) * 1.2;
      this.viewport.scrollLeft = this.scrollLeft - walkX;
      this.viewport.scrollTop = this.scrollTop - walkY;
    });

    // FAB Add
    document.getElementById('fabAdd').addEventListener('click', () => {
      this.openModalForAdd(this.data.rootNode.id);
    });

    // Import / Export / Reset
    document.getElementById('btnExport').addEventListener('click', () => this.exportJSON());
    document.getElementById('btnImport').addEventListener('click', () => document.getElementById('fileImportInput').click());
    document.getElementById('fileImportInput').addEventListener('change', (e) => this.importJSON(e));
    document.getElementById('btnResetDemo').addEventListener('click', () => {
      if (confirm('確定重置為預設日本東京範例行程嗎？現有修改將被覆蓋。')) {
        this.data = JSON.parse(JSON.stringify(DEMO_DATA));
        this.saveData();
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
    this.tripTitleInput.value = this.data.title || "✈️ 我的旅遊心智圖";
    if (this.currentView === 'mindmap') {
      this.renderMindmap();
    } else {
      this.renderOutline();
    }
  }

  // --- Mindmap Tree Positioning Logic ---
  renderMindmap() {
    this.nodesLayer.innerHTML = '';
    this.svgConnectors.innerHTML = '';

    const root = this.data.rootNode;
    if (!root) return;

    // Calculate layout coordinates for nodes
    const nodePositions = new Map();
    let currentY = 100;
    const levelWidth = 280; // Distance between tree levels
    const startX = 150;

    const layoutNode = (node, level, startY) => {
      let nodeY = startY;
      
      if (node.children && node.children.length > 0 && node.expanded !== false) {
        let childY = startY;
        node.children.forEach(child => {
          childY = layoutNode(child, level + 1, childY);
        });
        // Center parent relative to children
        const firstChildY = nodePositions.get(node.children[0].id).y;
        const lastChildY = nodePositions.get(node.children[node.children.length - 1].id).y;
        nodeY = (firstChildY + lastChildY) / 2;
      } else {
        childY = startY + 120; // vertical spacing
      }

      const posX = startX + level * levelWidth;
      nodePositions.set(node.id, { x: posX, y: nodeY, node });
      return Math.max(nodeY + 120, currentY);
    };

    // First Pass: Layout positions
    const calculatePositions = (node, level, startY) => {
      let yCursor = startY;
      if (!node.children || node.children.length === 0 || node.expanded === false) {
        nodePositions.set(node.id, { x: startX + level * levelWidth, y: yCursor, node });
        return yCursor + 130;
      }

      const childYPositions = [];
      node.children.forEach(child => {
        yCursor = calculatePositions(child, level + 1, yCursor);
        childYPositions.push(nodePositions.get(child.id).y);
      });

      const avgY = (childYPositions[0] + childYPositions[childYPositions.length - 1]) / 2;
      nodePositions.set(node.id, { x: startX + level * levelWidth, y: avgY, node });
      return yCursor;
    };

    calculatePositions(root, 0, 100);

    // Second Pass: Render DOM Cards & SVG lines
    nodePositions.forEach((pos, id) => {
      const cardEl = this.createNodeCard(pos.node, pos.x, pos.y);
      this.nodesLayer.appendChild(cardEl);

      // Draw Lines to Children
      if (pos.node.children && pos.node.children.length > 0 && pos.node.expanded !== false) {
        pos.node.children.forEach(child => {
          const childPos = nodePositions.get(child.id);
          if (childPos) {
            this.drawSvgCurve(pos.x + 220, pos.y + 35, childPos.x, childPos.y + 35);
          }
        });
      }
    });

    // Center view on root node initially
    setTimeout(() => {
      const rootPos = nodePositions.get(root.id);
      if (rootPos) {
        this.viewport.scrollLeft = rootPos.x - this.viewport.clientWidth / 3;
        this.viewport.scrollTop = rootPos.y - this.viewport.clientHeight / 3;
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
    
    let categoryIcon = '📍';
    if (node.category === 'food') categoryIcon = '🍜';
    if (node.category === 'hotel') categoryIcon = '🏨';
    if (node.category === 'shop') categoryIcon = '🛍️';
    if (node.category === 'transit') categoryIcon = '🚌';
    if (isDay) categoryIcon = '📅';
    if (isRoot) categoryIcon = '🗺️';

    let cardHtml = `
      <div class="node-card ${isRoot ? 'root-node' : ''} ${isDay ? 'category-node' : ''}">
        <div class="node-header">
          <span class="node-title">${categoryIcon} ${this.escapeHtml(node.title)}</span>
          ${node.cost ? `<span class="node-badge">${this.escapeHtml(node.cost)}</span>` : ''}
        </div>
    `;

    if (node.imageUrl) {
      cardHtml += `<img class="node-thumb" src="${this.escapeHtml(node.imageUrl)}" alt="thumb" loading="lazy">`;
    }

    if (node.url || node.mapsUrl || node.note) {
      cardHtml += `<div class="node-meta">`;
      if (node.url) {
        cardHtml += `<a href="${this.escapeHtml(node.url)}" target="_blank" class="node-link" onclick="event.stopPropagation()">🔗 網頁連結</a>`;
      }
      if (node.mapsUrl) {
        cardHtml += `<a href="${this.escapeHtml(node.mapsUrl)}" target="_blank" class="node-link" onclick="event.stopPropagation()">🗺️ 地圖</a>`;
      }
      if (node.note) {
        cardHtml += `<div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${this.escapeHtml(node.note)}</div>`;
      }
      cardHtml += `</div>`;
    }

    // Actions
    cardHtml += `
      <div class="node-actions">
        <button class="btn-mini btn-add-child" title="新增子節點">+</button>
        ${!isRoot ? `<button class="btn-mini btn-edit-node" title="編輯">✏️</button>` : ''}
        ${!isRoot ? `<button class="btn-mini btn-delete-node" title="刪除">🗑️</button>` : ''}
      </div>
    `;

    // Expand/Collapse Toggle Button
    if (node.children && node.children.length > 0) {
      const isExpanded = node.expanded !== false;
      cardHtml += `
        <button class="toggle-btn" title="${isExpanded ? '收合' : '展開'}">
          ${isExpanded ? '−' : '+'}
        </button>
      `;
    }

    cardHtml += `</div>`;
    group.innerHTML = cardHtml;

    // Event Listeners on Card
    const cardEl = group.querySelector('.node-card');
    
    // Toggle Button
    const toggleBtn = group.querySelector('.toggle-btn');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        node.expanded = node.expanded === false ? true : false;
        this.saveData();
        this.renderMindmap();
      });
    }

    // Add Child Button
    group.querySelector('.btn-add-child').addEventListener('click', (e) => {
      e.stopPropagation();
      this.openModalForAdd(node.id);
    });

    // Edit Node
    const editBtn = group.querySelector('.btn-edit-node');
    if (editBtn) {
      editBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        this.openModalForEdit(node);
      });
    }

    // Delete Node
    const deleteBtn = group.querySelector('.btn-delete-node');
    if (deleteBtn) {
      deleteBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (confirm(`確定刪除「${node.title}」及其子節點嗎？`)) {
          this.deleteNode(this.data.rootNode, node.id);
          this.saveData();
          this.render();
        }
      });
    }

    return group;
  }

  // Draw Smooth Bezier Curve Path
  drawSvgCurve(x1, y1, x2, y2) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    const dx = x2 - x1;
    const cx1 = x1 + dx * 0.5;
    const cx2 = x1 + dx * 0.5;

    const d = `M ${x1} ${y1} C ${cx1} ${y1}, ${cx2} ${y2}, ${x2} ${y2}`;
    path.setAttribute('d', d);
    path.setAttribute('class', 'connector-path');
    this.svgConnectors.appendChild(path);
  }

  // --- Mobile Outline View ---
  renderOutline() {
    this.outlineTree.innerHTML = '';
    const root = this.data.rootNode;
    if (!root) return;

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

    document.getElementById('outlineAddDay').addEventListener('click', () => {
      this.openModalForAdd(root.id);
    });

    const itemsContainer = rootGroup.querySelector('#outlineRootItems');

    const renderOutlineNode = (node, container) => {
      if (!node.children) return;

      node.children.forEach(child => {
        const itemCard = document.createElement('div');
        itemCard.className = 'outline-item-card';

        let icon = '📍';
        if (child.category === 'food') icon = '🍜';
        if (child.category === 'day') icon = '📅';
        if (child.category === 'hotel') icon = '🏨';

        itemCard.innerHTML = `
          <div style="display:flex; justify-content:space-between; align-items:center;">
            <strong style="font-size:1rem; color:var(--text-main);">${icon} ${this.escapeHtml(child.title)}</strong>
            ${child.cost ? `<span class="node-badge">${this.escapeHtml(child.cost)}</span>` : ''}
          </div>
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
            this.deleteNode(this.data.rootNode, child.id);
            this.saveData();
            this.render();
          }
        });

        const subContainer = itemCard.querySelector('.outline-subitems');
        renderOutlineNode(child, subContainer);
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
    this.modal.classList.add('active');
  }

  closeModal() {
    this.modal.classList.remove('active');
  }

  handleFormSubmit() {
    const id = document.getElementById('nodeId').value;
    const parentId = document.getElementById('nodeParentId').value;

    const nodeData = {
      category: document.getElementById('nodeCategory').value,
      title: document.getElementById('nodeTitle').value,
      url: document.getElementById('nodeUrl').value,
      mapsUrl: document.getElementById('nodeMapsUrl').value,
      imageUrl: document.getElementById('nodeImageUrl').value,
      cost: document.getElementById('nodeCost').value,
      note: document.getElementById('nodeNote').value
    };

    if (id) {
      // Edit mode
      const node = this.findNode(this.data.rootNode, id);
      if (node) {
        Object.assign(node, nodeData);
      }
    } else {
      // Add mode
      const newId = 'node_' + Date.now();
      const parentNode = this.findNode(this.data.rootNode, parentId) || this.data.rootNode;
      if (!parentNode.children) parentNode.children = [];

      parentNode.children.push({
        id: newId,
        ...nodeData,
        expanded: true,
        children: []
      });
      parentNode.expanded = true;
    }

    this.saveData();
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

  // --- JSON Export / Import ---
  exportJSON() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(this.data, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `TripTree_${this.data.title || 'travel'}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
    this.showToast('📤 行程 JSON 已匯出');
  }

  importJSON(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const imported = JSON.parse(event.target.result);
        if (imported && imported.rootNode) {
          this.data = imported;
          this.saveData();
          this.render();
          this.showToast('📥 成功匯入行程資料！');
        } else {
          alert('匯入的 JSON 格式不符合規格。');
        }
      } catch (err) {
        alert('解析 JSON 檔案失敗。');
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
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
  }
}

// Launch application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new TripApp();
});
