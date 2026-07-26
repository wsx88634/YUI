# 小工具（專案藍圖）

> 本檔為跨 Agent 通用的專案藍圖（AGENTS.md 開放標準）。任何 Agent 的每個 session 都應先讀本檔＋`handoff.md`。

## 專案簡介
存放與開發各類實用工具與小型專案的集合資料夾，包含 IOGEAR 說明書產生器、NotebookLM Quiz Hub、Space Shooter 遊戲、TripTree 旅遊心智圖等。

## 關鍵時程
- 2026-07-25：專案完成 L1 與 L3 基礎建設初始化。
- 2026-07-26：完成 TripTree V18 景點靈感庫架構與實體物理防重疊動態排版引擎升級。
- 2026-07-26：完成 TripTree V24 智能解析引擎 (Smart Fetch) 導入、UI 懸浮彈窗美化與嚴重錯誤修復。
- 2026-07-26：完成 TripTree V26 獨立節點無限層級嵌套、雙向拖拉附屬與編輯父節點切換。
- 2026-07-26：完成 TripTree V27 手機版完全自適應置中、防負座標裁切，並生成官方無缺字 PDF 操作手冊。
- 2026-07-26：完成 TripTree V28 雙重持久化自動備份 (localStorage + sessionStorage) 與離場事件防遺失保護。

## 目標與路線圖
- [x] 專案基礎建設初始化 (L1 + L3)
- [x] 完成旅遊樹狀心智圖規劃工具 (TripTree)
- [x] 完成 TripTree V18 景點靈感庫主軸與實體 DOM 物理高度/寬度防重疊佈局引擎
- [x] 完成 TripTree V24 智能解析引擎 (Wikipedia API) 與 UI 微調美化
- [x] 完成 TripTree V26 獨立節點與無限層級階層附屬結構
- [x] 完成 TripTree V27 手機版絕對置中修正與官方無缺字 PDF 操作手冊
- [x] 完成 TripTree V28 雙重持久化備份機制與離場自動儲存
- [ ] 依需要擴充與維護各項小工具專案

## 資料夾結構
```
小工具/
├── IOGEAR_GWU637_Setup_Guide.html
├── IOGEAR_GWU637_操作設定指南.pdf
├── TripTree_操作使用手冊.pdf
├── generate_pdf_manual.py
├── generate_triptree_pdf.py
├── notebooklm-quiz-hub/
├── space_shooter/
└── trip_mindmap/
    ├── index.html
    ├── styles.css
    └── app.js
```

## 同步層級（本專案初始化至第 3 層級）

| 層級 | 平台 | 位置 | 讀取時機 |
|------|------|------|---------|
| L1 | 本地（GDrive） | `agents.md`＋`handoff.md` | 每個 session |
| L2 | GitHub | wsx88634/YUI | 指定時 |
| L3 | Obsidian | `小工具/專案工作流程.md` | 有需要時 |

## 工作約定
- 任何 Agent、任何電腦：**開工先讀 `handoff.md`，收工必更新 `handoff.md`**
- 修改共用檔案前先讀最新內容，避免覆蓋其他 Agent 的變更
- 所有回應與文件使用繁體中文
- 修改前先確認計畫，優先保留原有資料結構
