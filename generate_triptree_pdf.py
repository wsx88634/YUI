# -*- coding: utf-8 -*-
import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

# 1. 註冊繁體中文微軟正黑體 (去除所有無法顯示的 Unicode Emoji emoji，純文字精緻排版)
font_path = "C:/Windows/Fonts/msjh.ttc"
font_bold_path = "C:/Windows/Fonts/msjhbd.ttc"

pdfmetrics.registerFont(TTFont("MSJH", font_path, subfontIndex=0))
if os.path.exists(font_bold_path):
    pdfmetrics.registerFont(TTFont("MSJH-Bold", font_bold_path, subfontIndex=0))
else:
    pdfmetrics.registerFont(TTFont("MSJH-Bold", font_path, subfontIndex=0))

output_pdf = r"g:\我的雲端硬碟\2026 Antigravity\小工具\TripTree_操作使用手冊.pdf"

# 自訂 NumberedCanvas 以顯示總頁碼與頁尾頁首
class NumberedCanvas(canvas.Canvas):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        self._saved_page_states = []

    def showPage(self):
        self._saved_page_states.append(dict(self.__dict__))
        self._startPage()

    def save(self):
        num_pages = len(self._saved_page_states)
        for state in self._saved_page_states:
            self.__dict__.update(state)
            self.draw_page_decorations(num_pages)
            super().showPage()
        super().save()

    def draw_page_decorations(self, page_count):
        self.saveState()
        self.setFont("MSJH", 9)
        self.setFillColor(colors.HexColor("#64748b"))
        
        # 頁首
        self.drawString(36, 810, "TripTree 旅遊階層心智圖 — 好友共用操作與使用指南")
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(36, 802, 559, 802)
        
        # 頁尾
        self.line(36, 45, 559, 45)
        page_text = f"頁碼 {self._pageNumber} / {page_count}"
        self.drawRightString(559, 32, page_text)
        self.drawString(36, 32, "TripTree V29 官方操作手冊 — 專屬行程夾與靈感庫雙引擎")
        self.restoreState()

def build_pdf():
    doc = SimpleDocTemplate(
        output_pdf,
        pagesize=A4,
        leftMargin=36,
        rightMargin=36,
        topMargin=54,
        bottomMargin=54
    )

    styles = getSampleStyleSheet()

    # 色彩定義 (TripTree 主題配色)
    PRIMARY = colors.HexColor("#0f766e")    # 深湖水綠
    SECONDARY = colors.HexColor("#0d9488")  # 亮湖水綠
    ACCENT = colors.HexColor("#0284c7")     # 亮天藍
    BG_LIGHT = colors.HexColor("#f0fdf4")   # 淺綠底色
    BG_CARD = colors.HexColor("#f8fafc")    # 淺灰底色
    TEXT_DARK = colors.HexColor("#1e293b")  # 深灰字
    TEXT_MUTED = colors.HexColor("#475569") # 次要深灰
    BORDER_COLOR = colors.HexColor("#cbd5e1")

    # 自訂段落樣式
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='MSJH-Bold',
        fontSize=22,
        leading=28,
        textColor=colors.white,
        alignment=0
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='MSJH',
        fontSize=11,
        leading=16,
        textColor=colors.HexColor("#ccfbf1"),
        alignment=0
    )

    h1_style = ParagraphStyle(
        'SectionH1',
        parent=styles['Normal'],
        fontName='MSJH-Bold',
        fontSize=15,
        leading=20,
        textColor=PRIMARY,
        spaceBefore=14,
        spaceAfter=8
    )

    h2_style = ParagraphStyle(
        'SectionH2',
        parent=styles['Normal'],
        fontName='MSJH-Bold',
        fontSize=12,
        leading=17,
        textColor=SECONDARY,
        spaceBefore=10,
        spaceAfter=6
    )

    body_style = ParagraphStyle(
        'BodyDark',
        parent=styles['Normal'],
        fontName='MSJH',
        fontSize=10,
        leading=15,
        textColor=TEXT_DARK,
        spaceBefore=4,
        spaceAfter=4
    )

    body_bold = ParagraphStyle(
        'BodyBoldDark',
        parent=body_style,
        fontName='MSJH-Bold'
    )

    bullet_style = ParagraphStyle(
        'BulletText',
        parent=body_style,
        leftIndent=14,
        firstLineIndent=-10,
        spaceBefore=3,
        spaceAfter=3
    )

    tip_style = ParagraphStyle(
        'TipText',
        parent=body_style,
        fontName='MSJH',
        fontSize=9.5,
        leading=14,
        textColor=colors.HexColor("#065f46")
    )

    story = []

    # --- 1. 頁首 Banner 表格 ---
    banner_data = [
        [Paragraph("TripTree 旅遊階層樹狀心智圖 (V29 最新版)", title_style)],
        [Paragraph("輕鬆規劃行程、拖拉自如、本行程專屬景點夾與好友同步分享完全使用手冊", subtitle_style)]
    ]
    banner_table = Table(banner_data, colWidths=[523])
    banner_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), PRIMARY),
        ('TOPPADDING', (0,0), (-1,-1), 16),
        ('BOTTOMPADDING', (0,0), (-1,-1), 16),
        ('LEFTPADDING', (0,0), (-1,-1), 20),
        ('RIGHTPADDING', (0,0), (-1,-1), 20),
    ]))
    story.append(banner_table)
    story.append(Spacer(1, 14))

    # --- 2. 系統導覽與特色說明 ---
    story.append(Paragraph("一、 關於 TripTree：現代化旅遊心智圖系統", h1_style))
    story.append(Paragraph("TripTree 是一個專為自由行新手與自助旅行達人設計的<b>無限階層樹狀旅遊心智圖系統</b>。結合了<b> Markdown 縮排階層</b>、<b>雙向拖曳卡片</b>與<b>本行程專屬景點夾</b>，讓你可以像整理資料夾一樣，自由附屬與調換任意景點、美食與飯店資訊！", body_style))
    
    features_data = [
        [
            Paragraph("<b>核心功能</b>", body_bold),
            Paragraph("<b>最新 V29 特色說明</b>", body_bold)
        ],
        [
            Paragraph("<b>無限層級附屬嵌套</b>", body_style),
            Paragraph("任何行程卡片皆可往下新增附屬子項目（如：Day 1 ➔ 下午時段 ➔ 淺草寺），層層有條理，左側附帶湖水綠縮排導引線。", body_style)
        ],
        [
            Paragraph("<b>本行程專屬景點夾</b>", body_style),
            Paragraph("切換至「本行程專屬景點夾」，系統自動彙整該行程安排的所有景點，並自動過濾日期天數、時段膠囊與行程動作。刪除行程時該資料夾隨之銷毀，靈感庫主庫 100% 獨立安全！", body_style)
        ],
        [
            Paragraph("<b>節點類型精準拆分</b>", body_style),
            Paragraph("獨立區分「📍 景點/目的地」與「⚡ 行程動作/提醒」，行程動作（如：起飛抵達、 Check-in、買票）不會混入景點夾中。", body_style)
        ],
        [
            Paragraph("<b>🎯 鏡頭一鍵定位</b>", body_style),
            Paragraph("在專屬景點夾點擊「定位至心智圖」，畫面自動平移並發光聚焦該景點在行程心智圖中的位置。", body_style)
        ],
        [
            Paragraph("<b>一鍵分享旅伴唯讀網址</b>", body_style),
            Paragraph("提供好友專屬唯讀瀏覽連結，出國當下隨時用手機查看「手機列表視圖」或「階層樹視圖」，防誤刪更安心。", body_style)
        ]
    ]
    t_feat = Table(features_data, colWidths=[130, 393])
    t_feat.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), BG_CARD),
        ('TEXTCOLOR', (0,0), (-1,0), PRIMARY),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ]))
    story.append(t_feat)
    story.append(Spacer(1, 14))

    # --- 3. 四大核心操作攻略 ---
    story.append(Paragraph("二、 新手必學：四大核心操作攻略", h1_style))
    
    story.append(Paragraph("1. 如何新增與管理行程？", h2_style))
    story.append(Paragraph("• <b>新增行程專案</b>：點擊頁面上方「<b>新增行程</b>」按鈕，可建立多個旅遊專案（如：東京5天4夜、福岡3天2夜），支援分頁快速切換。", bullet_style))
    story.append(Paragraph("• <b>新增行程天數 (Day)</b>：在最上方主標題卡片右側，點擊「<b>新增行程天數 (Day)</b>」，快速建立 Day 1、Day 2 等基礎大框架。", bullet_style))
    story.append(Paragraph("• <b>選擇節點類型</b>：新增或編輯卡片時，可精準選擇「📍 景點」、「⚡ 行程動作」、「🍜 美食」、「🏨 住宿」、「🛍️ 購物」與「🚌 交通」。", bullet_style))

    story.append(Spacer(1, 6))
    story.append(Paragraph("2. 雙模式抽屜：全部靈感庫 vs 本行程專屬景點夾", h2_style))
    story.append(Paragraph("• <b>📦 全部景點靈感庫 (主庫)</b>：存放所有備用與收集來的景點卡片，可隨時按地區（天神、博多、心齋橋等）進行過濾與卡片分類編輯。", bullet_style))
    story.append(Paragraph("• <b>📁 本行程專屬景點夾 (行程純淨清單)</b>：切換至此模式，會自動顯示當前行程安排的所有景點。具備「🎯 定位至心智圖」與「從本行程移除」按鈕。", bullet_style))
    story.append(Paragraph("• <b>資料刪除隔離與保護</b>：在行程景點夾點擊刪除，僅將景點從該行程中劃掉，靈感庫主庫資料完好無損；刪除整個行程分頁時，該行程專屬資料夾會隨之刪除，大靈感庫卡片依然 100% 安全。", bullet_style))

    story.append(Spacer(1, 6))
    story.append(Paragraph("3. 拖拉與編輯指定上層位置", h2_style))
    story.append(Paragraph("• <b>滑鼠直接拖拉 (Drag & Drop)</b>：以滑鼠按住卡片不放，拖曳移動到另一個卡片上方放開，即可隨心更改附屬階層位置。", bullet_style))
    story.append(Paragraph("• <b>編輯視窗指定父節點</b>：點擊「編輯」視窗，可在最上方選單直接選取想要歸屬的上層節點，自動重新排版移動。", bullet_style))

    story.append(Spacer(1, 6))
    story.append(Paragraph("4. 備份、分享與 JSON 匯入匯出", h2_style))
    story.append(Paragraph("• <b>產生旅伴唯讀網址</b>：點擊藍色分享連結，複製專為好友打造的唯讀網址，同行夥伴點開只能瀏覽無法修改，防誤刪更安心。", bullet_style))
    story.append(Paragraph("• <b>匯出 / 匯入 JSON 檔案</b>：點擊「匯出 JSON」備份；獲得好友分享的 `[地點]_景點靈感庫.json` 時，點擊「匯入 JSON」即可秒級寫入本地端！", bullet_style))

    story.append(Spacer(1, 14))

    # --- 4. 介面操作速查表 ---
    story.append(Paragraph("三、 常用功能與對應說明表", h1_style))
    
    icons_data = [
        [
            Paragraph("<b>功能區塊</b>", body_bold),
            Paragraph("<b>按鈕 / 功能名稱</b>", body_bold),
            Paragraph("<b>操作對應說明</b>", body_bold)
        ],
        [
            Paragraph("<b>靈感庫頁籤</b>", body_style),
            Paragraph("📦 全部景點靈感庫", body_style),
            Paragraph("瀏覽與編輯跨城市所有景點備份主庫，可隨時手動編輯分類與地區標籤。", body_style)
        ],
        [
            Paragraph("<b>靈感庫頁籤</b>", body_style),
            Paragraph("📁 本行程專屬景點夾", body_style),
            Paragraph("僅顯示當前行程已排入的純淨景點，自動排除日期天數、時段膠囊與行程動作。", body_style)
        ],
        [
            Paragraph("<b>景點夾功能</b>", body_style),
            Paragraph("🎯 定位至心智圖", body_style),
            Paragraph("點擊後畫面上卡片自動發光並流暢平移定位至心智圖中的對應卡片。", body_style)
        ],
        [
            Paragraph("<b>卡片操作</b>", body_style),
            Paragraph("節點類型切換", body_style),
            Paragraph("精準區分📍景點、⚡行程動作、🍜美食、🏨住宿、🛍️購物與🚌交通。", body_style)
        ],
        [
            Paragraph("<b>檔案管理</b>", body_style),
            Paragraph("匯出 / 匯入 JSON", body_style),
            Paragraph("支援將行程與景點庫導出為 JSON 備份檔，或將個人私房行程寫入本地端。", body_style)
        ]
    ]
    t_icons = Table(icons_data, colWidths=[80, 120, 323])
    t_icons.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), BG_CARD),
        ('TEXTCOLOR', (0,0), (-1,0), PRIMARY),
        ('ALIGN', (0,0), (-1,-1), 'LEFT'),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 10),
        ('RIGHTPADDING', (0,0), (-1,-1), 10),
        ('GRID', (0,0), (-1,-1), 0.5, BORDER_COLOR),
    ]))
    story.append(t_icons)
    story.append(Spacer(1, 16))

    # --- 5. 旅伴出發前常見 Q&A ---
    story.append(Paragraph("四、 同行好朋友 Q&A 常見問題", h1_style))
    
    qa_data = [
        [
            Paragraph("<b>Q1: 為什麼「行程動作」（如：桃園起飛 ➔ 抵達）不會出現在「本行程專屬景點夾」裡？</b>", body_bold)
        ],
        [
            Paragraph("因為專屬景點夾定位為「景點清單庫」，系統會自動幫您排除日期天數、時段膠囊、交通與行程動作，確保資料夾裡面只呈現真正需要觀光參觀的純淨景點與美食餐廳！", body_style)
        ],
        [
            Paragraph("<b>Q2: 如果我從「本行程專屬景點夾」點擊「刪除」，靈感庫裡面的景點也會不見嗎？</b>", body_bold)
        ],
        [
            Paragraph("完全不會！在行程景點夾點擊刪除，只會將景點從該行程安排中拿掉，大靈感庫主庫中的卡片依然 100% 完整保留。當您刪除整個行程頁籤時，該專屬資料夾會隨行程銷毀，大靈感庫資料依然絕對安全。", body_style)
        ],
        [
            Paragraph("<b>Q3: 我可以把不同城市的景點同時放在一個系統裡嗎？</b>", body_bold)
        ],
        [
            Paragraph("可以！上方提供分頁標籤按鈕，您可以自由建立「東京自由行」、「福岡美食趣」、「首爾滑雪團」等多個分頁，同時搭配右側景點靈感庫區分地區標籤，旅遊計畫一手掌握！", body_style)
        ]
    ]
    t_qa = Table(qa_data, colWidths=[523])
    t_qa.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), BG_LIGHT),
        ('BACKGROUND', (0,2), (-1,2), BG_LIGHT),
        ('BACKGROUND', (0,4), (-1,4), BG_LIGHT),
        ('TOPPADDING', (0,0), (-1,-1), 8),
        ('BOTTOMPADDING', (0,0), (-1,-1), 8),
        ('LEFTPADDING', (0,0), (-1,-1), 12),
        ('RIGHTPADDING', (0,0), (-1,-1), 12),
        ('LINEBELOW', (0,1), (-1,1), 0.5, BORDER_COLOR),
        ('LINEBELOW', (0,3), (-1,3), 0.5, BORDER_COLOR),
        ('BOX', (0,0), (-1,-1), 0.5, PRIMARY),
    ]))
    story.append(t_qa)
    story.append(Spacer(1, 16))

    # --- 6. 頁腳溫馨提醒框 ---
    tip_data = [
        [Paragraph("【溫馨提醒旅伴】：在出發前，推薦大家可以將行程網址「加入手機瀏覽器書籤（我的最愛）」或「加到手機主畫面（HomeScreen）」，就像在使用專用 App 一樣快速流暢！出門前也可以點「匯出 JSON」保留一份檔案在手機裡隨時備份喔！", tip_style)]
    ]
    t_tip = Table(tip_data, colWidths=[523])
    t_tip.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), colors.HexColor("#ecfdf5")),
        ('BOX', (0,0), (-1,-1), 1, colors.HexColor("#10b981")),
        ('TOPPADDING', (0,0), (-1,-1), 10),
        ('BOTTOMPADDING', (0,0), (-1,-1), 10),
        ('LEFTPADDING', (0,0), (-1,-1), 14),
        ('RIGHTPADDING', (0,0), (-1,-1), 14),
    ]))
    story.append(t_tip)

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF build complete:", output_pdf)

if __name__ == "__main__":
    build_pdf()
