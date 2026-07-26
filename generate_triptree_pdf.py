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
        self.drawString(36, 32, "TripTree V27 官方操作手冊 — 專為旅遊規劃與靈感收納打造")
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
        [Paragraph("TripTree 旅遊階層樹狀心智圖", title_style)],
        [Paragraph("輕鬆規劃行程、拖拉自如、靈感收納與好友同步分享的完全使用手冊", subtitle_style)]
    ]
    banner_table = Table(banner_data, colWidths=[523])
    banner_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), PRIMARY),
        ('TOPPADDING', (0,0), (-1,-1), 16),
        ('BOTTOMPADDING', (0,0), (-1,-1), 16),
        ('LEFTPADDING', (0,0), (-1,-1), 20),
        ('RIGHTPADDING', (0,0), (-1,-1), 20),
        ('CORNERPAD', (0,0), (-1,-1), 0),
    ]))
    story.append(banner_table)
    story.append(Spacer(1, 14))

    # --- 2. 系統導覽與特色說明 ---
    story.append(Paragraph("一、 關於 TripTree：現代化旅遊心智圖工具", h1_style))
    story.append(Paragraph("TripTree 是一個專為自由行新手與自助旅行達人設計的<b>無限階層樹狀旅遊心智圖系統</b>。與傳統以「格子或時間表」為主的行程軟體不同，TripTree 結合了<b> Markdown 縮排階層</b>與<b>拖曳卡片式管理</b>，讓你可以像整理資料夾一樣，自由附屬與調換任意景點、美食與飯店資訊！", body_style))
    
    features_data = [
        [
            Paragraph("<b>特色優勢</b>", body_bold),
            Paragraph("<b>功能說明</b>", body_bold)
        ],
        [
            Paragraph("<b>無限層級附屬嵌套</b>", body_style),
            Paragraph("任何行程卡片都可以再往下新增子項目（例如：Day 1 ➔ 下午時段 ➔ 淺草寺 ➔ 買手信），層層有條理，左側附帶湖水綠導引線。", body_style)
        ],
        [
            Paragraph("<b>雙向自由拖拉 (Drag & Drop)</b>", body_style),
            Paragraph("支援滑鼠直接拖移卡片附屬到其他卡片底下，亦可將右側「景點靈感庫」的備份卡片拖入行程中。", body_style)
        ],
        [
            Paragraph("<b>靈感庫 (Vault) 資料夾收納</b>", body_style),
            Paragraph("可為景點加註地區標籤（如：福岡、東京、必吃美食），隨時全螢幕展開或側邊抽出查詢，行程不漏勾。", body_style)
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
    story.append(Paragraph("• <b>附屬新增子景點/活動</b>：任何一張卡片的右上角都有「<b>附屬新增</b>」按鈕，點擊後即可在該卡片底下建立時段、景點、美食或飯店，並自動往右縮排。", bullet_style))

    story.append(Spacer(1, 6))
    story.append(Paragraph("2. 如何拖移或修改卡片的上層位置？ (兩種極速手法)", h2_style))
    story.append(Paragraph("• <b>方法 A：滑鼠直接拖拉 (Drag & Drop)</b><br/>以滑鼠按住任何一張卡片不放，拖曳移動到行程樹中另一張卡片的上方放開，系統會立即將該卡片附屬成為目標卡片的子項目！", bullet_style))
    story.append(Paragraph("• <b>方法 B：編輯選單指定附屬父節點</b><br/>點擊卡片上的「<b>編輯</b>」按鈕，在彈出視窗最上方可看見「<b>指定附屬在哪一個卡片/節點底下</b>」下拉選單。此選單會以縮排呈現完整結構，選擇想歸屬的對象後送出，立刻幫您把整串卡片搬移到新位置。", bullet_style))

    story.append(Spacer(1, 6))
    story.append(Paragraph("3. 右側「景點靈感庫」使用秘技", h2_style))
    story.append(Paragraph("• <b>側邊抽屜 / 全螢幕展示</b>：點擊頂部列的「<b>景點庫</b>」按鈕可打開側邊抽屜；點擊視窗上的「<b>全螢幕顯示 / 隱藏</b>」按鈕，可切換至卡片網格並排模式，瀏覽再多靈感也不擠。", bullet_style))
    story.append(Paragraph("• <b>極速拖入行程表</b>：在靈感庫看到想要的景點時，可直接用滑鼠將卡片拉入左側樹狀行程中；也可以點擊卡片上的「<b>加入</b>」將景點快速安插進指定的行程段落！", bullet_style))

    story.append(Spacer(1, 6))
    story.append(Paragraph("4. 行程備份、分享給旅伴與匯入", h2_style))
    story.append(Paragraph("• <b>產生旅伴唯讀網址</b>：點擊上方藍色的連結圖示按鈕，會產生一串專為好朋友打造的唯讀網址。朋友點開後只能瀏覽無法修改，不再擔心行程誤操作。", bullet_style))
    story.append(Paragraph("• <b>匯出 JSON 備份</b>：隨時點擊「匯出 JSON」將整個行程與靈感庫儲存到電腦中保存。", bullet_style))
    story.append(Paragraph("• <b>匯入 JSON 檔案</b>：同伴傳送行程備份檔給您時，點擊「匯入 JSON」即可快速載入完整旅遊計畫！", bullet_style))

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
            Paragraph("<b>頂部導覽列</b>", body_style),
            Paragraph("景點庫 (Vault)", body_style),
            Paragraph("滑出右側景點靈感抽屜，可分類管理所有口袋名單景點與餐廳。", body_style)
        ],
        [
            Paragraph("<b>頂部導覽列</b>", body_style),
            Paragraph("旅伴分享連結", body_style),
            Paragraph("複製「唯讀版」專屬連結傳給同行夥伴，打開直接用手機閱讀行程。", body_style)
        ],
        [
            Paragraph("<b>工具切換列</b>", body_style),
            Paragraph("雙模式切換", body_style),
            Paragraph("切換「Markdown 階層樹狀視圖」與「手機列表視圖」，隨場景選擇最佳觀看模式。", body_style)
        ],
        [
            Paragraph("<b>卡片操作</b>", body_style),
            Paragraph("附屬新增 (子節點)", body_style),
            Paragraph("在目前選取的卡片下方建立新卡片，支援景點、美食、時段、交通與住宿分類。", body_style)
        ],
        [
            Paragraph("<b>卡片操作</b>", body_style),
            Paragraph("編輯與刪除", body_style),
            Paragraph("開啟美化版無外框編輯彈窗（可調上層父卡片）；刪除卡片前會跳出二次提醒安全彈窗。", body_style)
        ],
        [
            Paragraph("<b>檔案管理</b>", body_style),
            Paragraph("匯出 / 匯入 JSON", body_style),
            Paragraph("支援隨時將整個行程專案儲存成 JSON 檔案備份，或載入夥伴分享的行程檔。", body_style)
        ]
    ]
    t_icons = Table(icons_data, colWidths=[80, 110, 333])
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
            Paragraph("<b>Q1: 在國外手機打開看起來會不置中或排版跑掉嗎？</b>", body_bold)
        ],
        [
            Paragraph("完全不會！TripTree 採用 100% 自適應區塊排版，在手機瀏覽器打開無論橫放豎放皆會自動對齊畫面中央，且無須左右拉動捲軸，亦可隨時切換到「手機列表視圖」呈現純淨清爽的直列清單。", body_style)
        ],
        [
            Paragraph("<b>Q2: 如果我不小心按到刪除，整個天數底下的行程會不見嗎？</b>", body_bold)
        ],
        [
            Paragraph("為保護旅遊心血，刪除任何卡片時系統一定會跳出明確的防護確認彈窗。若選擇刪除父卡片，其附屬在其底下的所有子景點也將一併移除，因此修改結構時建議多利用「拖拉」或「指定附屬位置」進行調整。", body_style)
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
