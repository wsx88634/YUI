import os
import sys
from reportlab.lib.pagesizes import A4
from reportlab.platypus import (
    SimpleDocTemplate, Paragraph, Spacer, Image, Table, TableStyle, PageBreak, KeepTogether, HRFlowable
)
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib import colors
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.pdfgen import canvas

# 1. 註冊繁體中文微軟正黑體
font_path = "C:/Windows/Fonts/msjh.ttc"
font_bold_path = "C:/Windows/Fonts/msjhbd.ttc"

pdfmetrics.registerFont(TTFont("MSJH", font_path, subfontIndex=0))
if os.path.exists(font_bold_path):
    pdfmetrics.registerFont(TTFont("MSJH-Bold", font_bold_path, subfontIndex=0))
else:
    pdfmetrics.registerFont(TTFont("MSJH-Bold", font_path, subfontIndex=0))

# 圖片路徑
img_dir = r"C:\Users\yuie.liu\.gemini\antigravity\brain\6a4fd438-e793-40d5-9ea8-f46b52f612b6"
img_conn = os.path.join(img_dir, "gwu637_connection_diagram_1784899453565.jpg")
img_wps = os.path.join(img_dir, "gwu637_wps_setup_1784899848683.jpg")
img_web = os.path.join(img_dir, "gwu637_web_setup_1784899863398.jpg")

output_pdf = r"g:\我的雲端硬碟\2026 Antigravity\小工具\IOGEAR_GWU637_操作設定指南.pdf"

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
        self.drawString(36, 810, "IOGEAR GWU637 通用無線網絡轉接器 — 操作與設定指南")
        self.setStrokeColor(colors.HexColor("#cbd5e1"))
        self.setLineWidth(0.5)
        self.line(36, 802, 559, 802)
        
        # 頁尾
        self.line(36, 45, 559, 45)
        page_text = f"頁碼 {self._pageNumber} / {page_count}"
        self.drawRightString(559, 32, page_text)
        self.drawString(36, 32, "版權所有 © 2026 IOGEAR / 說明書精簡繁體中文版")
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

    # 色彩定義
    PRIMARY = colors.HexColor("#0f172a")
    SECONDARY = colors.HexColor("#1e3a8a")
    ACCENT = colors.HexColor("#2563eb")
    BG_LIGHT = colors.HexColor("#f8fafc")
    TEXT_DARK = colors.HexColor("#1e293b")

    # 自訂樣式
    title_style = ParagraphStyle(
        'DocTitle',
        parent=styles['Normal'],
        fontName='MSJH-Bold',
        fontSize=20,
        leading=24,
        textColor=colors.white,
        alignment=0
    )

    subtitle_style = ParagraphStyle(
        'DocSubtitle',
        parent=styles['Normal'],
        fontName='MSJH',
        fontSize=11,
        leading=15,
        textColor=colors.HexColor("#93c5fd")
    )

    h1_style = ParagraphStyle(
        'H1',
        parent=styles['Normal'],
        fontName='MSJH-Bold',
        fontSize=14,
        leading=18,
        textColor=SECONDARY,
        spaceBefore=14,
        spaceAfter=8
    )

    body_style = ParagraphStyle(
        'BodyTextCustom',
        parent=styles['Normal'],
        fontName='MSJH',
        fontSize=10,
        leading=15,
        textColor=TEXT_DARK,
        spaceAfter=6
    )

    step_title_style = ParagraphStyle(
        'StepTitle',
        parent=styles['Normal'],
        fontName='MSJH-Bold',
        fontSize=10.5,
        leading=14,
        textColor=PRIMARY
    )

    step_desc_style = ParagraphStyle(
        'StepDesc',
        parent=styles['Normal'],
        fontName='MSJH',
        fontSize=9.5,
        leading=14,
        textColor=colors.HexColor("#475569")
    )

    caption_style = ParagraphStyle(
        'ImgCaption',
        parent=styles['Normal'],
        fontName='MSJH',
        fontSize=9,
        leading=12,
        textColor=colors.HexColor("#64748b"),
        alignment=1,
        spaceBefore=4,
        spaceAfter=10
    )

    table_header_style = ParagraphStyle(
        'TableHeader',
        parent=styles['Normal'],
        fontName='MSJH-Bold',
        fontSize=9.5,
        leading=13,
        textColor=PRIMARY
    )

    table_cell_style = ParagraphStyle(
        'TableCell',
        parent=styles['Normal'],
        fontName='MSJH',
        fontSize=9,
        leading=13,
        textColor=TEXT_DARK
    )

    story = []

    # 1. 頁頭 Banner Box (用表格包覆)
    header_data = [
        [
            Paragraph("<b>IOGEAR GWU637 操作與設定指南</b>", title_style),
            Paragraph("<b>GWU637</b><br/>USER MANUAL", ParagraphStyle('Badge', fontName='MSJH-Bold', fontSize=10, textColor=colors.white, alignment=1))
        ],
        [
            Paragraph("Ethernet-to-Wi-Fi Universal Wireless Adapter 快速圖文教學手冊", subtitle_style),
            ""
        ]
    ]

    header_table = Table(header_data, colWidths=[380, 143])
    header_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,-1), SECONDARY),
        ('PADDING', (0,0), (-1,-1), 12),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
        ('SPAN', (0,1), (1,1)),
        ('BOTTOMPADDING', (0,1), (-1,1), 12),
    ]))
    story.append(header_table)
    story.append(Spacer(1, 14))

    # 2. 產品概述與接線圖
    story.append(Paragraph("1. 產品簡介與硬體連接示意圖", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=ACCENT, spaceAfter=8))
    
    intro_text = (
        "<b>IOGEAR GWU637</b> 是一台通用型的以太網轉 Wi-Fi 無線轉接器。機能主要將僅有有線網口（RJ-45）的設備"
        "（如智慧電視、印表機、舊型遊戲機、IP 攝影機等）轉換為無線連接，輕鬆連入您家中的 Wi-Fi 網絡。"
    )
    story.append(Paragraph(intro_text, body_style))

    if os.path.exists(img_conn):
        story.append(Image(img_conn, width=500, height=200))
        story.append(Paragraph("圖 1：GWU637 轉接器與有線設備、無線路由器之連接架構圖", caption_style))

    story.append(Spacer(1, 10))

    # 3. 方案一：WPS 快速連線
    story.append(Paragraph("2. 設定方案一：WPS 一鍵快速連線（推薦）", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=ACCENT, spaceAfter=8))

    if os.path.exists(img_wps):
        story.append(Image(img_wps, width=500, height=190))
        story.append(Paragraph("圖 2：WPS 按鍵一鍵自動配對流程圖", caption_style))

    wps_steps = [
        ("步驟 1：供電與網線連接", "使用隨附的 USB 線插入轉接器供電，並將 RJ-45 網路線插入電腦或智慧電視的以太網口。"),
        ("步驟 2：觸發 GWU637 的 WPS 鍵", "長按 GWU637 設備上的 WPS 按鈕約 <b>3～5 秒</b>，觀察面板上的 WPS/Reset 指示燈開始閃爍。"),
        ("步驟 3：觸發路由器的 WPS 鍵", "在 <b>2 分鐘內</b>，按下您家中無線路由器上的 WPS 按鈕。兩台設備將自動配對並建立連線。")
    ]

    for num, (title, desc) in enumerate(wps_steps, 1):
        step_table_data = [
            [
                Paragraph(f"<b>{num}</b>", ParagraphStyle('NumStyle', fontName='MSJH-Bold', fontSize=11, textColor=colors.white, alignment=1)),
                Paragraph(f"<b>{title}</b><br/>{desc}", step_desc_style)
            ]
        ]
        t = Table(step_table_data, colWidths=[24, 499])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (0,0), ACCENT),
            ('BACKGROUND', (1,0), (1,0), BG_LIGHT),
            ('PADDING', (0,0), (-1,-1), 6),
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('BOX', (1,0), (1,0), 0.5, colors.HexColor("#e2e8f0")),
        ]))
        story.append(t)
        story.append(Spacer(1, 4))

    story.append(PageBreak())

    # 4. 方案二：網頁手動設定
    story.append(Paragraph("3. 設定方案二：網頁介面手動設定（無 WPS 時使用）", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=ACCENT, spaceAfter=8))

    if os.path.exists(img_web):
        story.append(Image(img_web, width=500, height=190))
        story.append(Paragraph("圖 3：透過電腦瀏覽器登入 192.168.1.252 手動掃描與設定 Wi-Fi", caption_style))

    web_steps = [
        ("1. 設定電腦靜態 IP (Static IP)", "將電腦以網線連接 GWU637，並停用電腦 Wi-Fi。將電腦以太網路卡設定固定 IP：<br/><b>IP 位址：</b><code>192.168.1.3</code> | <b>子網路遮罩：</b><code>255.255.255.0</code>"),
        ("2. 開啟瀏覽器並登入管理頁面", "開啟電腦瀏覽器（推薦 Safari / Edge），在網址列輸入 <code>192.168.1.252</code>。<br/><b>預設帳號：</b><code>admin</code> | <b>預設密碼：</b><code>admin</code>"),
        ("3. 進行無線網絡掃描 (Site Survey)", "進入控制頁面後點擊「Site Survey」，掃描選擇您家中的 Wi-Fi SSID，輸入 Wi-Fi 密碼後點擊 Connect 連線。"),
        ("4. 恢復電腦網路為自動取得 IP (DHCP)", "設定成功後，務必將電腦網路卡恢復為「自動取得 IP 位址 (DHCP)」，即可恢復正常連網狀態！")
    ]

    for num, (title, desc) in enumerate(web_steps, 1):
        step_table_data = [
            [
                Paragraph(f"<b>{num}</b>", ParagraphStyle('NumStyle2', fontName='MSJH-Bold', fontSize=11, textColor=colors.white, alignment=1)),
                Paragraph(f"<b>{title}</b><br/>{desc}", step_desc_style)
            ]
        ]
        t = Table(step_table_data, colWidths=[24, 499])
        t.setStyle(TableStyle([
            ('BACKGROUND', (0,0), (0,0), SECONDARY),
            ('BACKGROUND', (1,0), (1,0), BG_LIGHT),
            ('PADDING', (0,0), (-1,-1), 6),
            ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
            ('BOX', (1,0), (1,0), 0.5, colors.HexColor("#e2e8f0")),
        ]))
        story.append(t)
        story.append(Spacer(1, 4))

    story.append(Spacer(1, 10))

    # 5. LED 指示燈說明
    story.append(Paragraph("4. LED 指示燈狀態對照表", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=ACCENT, spaceAfter=8))

    led_data = [
        [Paragraph("指示燈", table_header_style), Paragraph("狀態 (State)", table_header_style), Paragraph("說明與代表意義", table_header_style)],
        [Paragraph("<b>WPS / Reset</b>", table_cell_style), Paragraph("常亮 (Solid)", table_cell_style), Paragraph("設備正在執行恢復出廠預設值 (Reset)", table_cell_style)],
        [Paragraph("", table_cell_style), Paragraph("閃爍 (Blinking)", table_cell_style), Paragraph("WPS 功能啟用中，正在搜尋配對路由器", table_cell_style)],
        [Paragraph("", table_cell_style), Paragraph("熄滅 (Off)", table_cell_style), Paragraph("WPS 未啟用 / 處於正常運作狀態", table_cell_style)],
        [Paragraph("<b>WLAN (無線)</b>", table_cell_style), Paragraph("閃爍 (Blinking)", table_cell_style), Paragraph("無線網路正常傳輸 / 接收封包資料中", table_cell_style)],
        [Paragraph("", table_cell_style), Paragraph("熄滅 (Off)", table_cell_style), Paragraph("未連線至無線網路或 WLAN 關閉", table_cell_style)],
        [Paragraph("<b>Ethernet (有線)</b>", table_cell_style), Paragraph("閃爍 (Blinking)", table_cell_style), Paragraph("與有線設備（如電腦/電視）資料傳輸中", table_cell_style)],
        [Paragraph("", table_cell_style), Paragraph("熄滅 (Off)", table_cell_style), Paragraph("未檢測到有線網線連接", table_cell_style)],
    ]

    led_table = Table(led_data, colWidths=[120, 120, 283])
    led_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (-1,0), colors.HexColor("#f1f5f9")),
        ('GRID', (0,0), (-1,-1), 0.5, colors.HexColor("#cbd5e1")),
        ('PADDING', (0,0), (-1,-1), 5),
        ('SPAN', (0,1), (0,3)),
        ('SPAN', (0,4), (0,5)),
        ('SPAN', (0,6), (0,7)),
        ('VALIGN', (0,0), (-1,-1), 'MIDDLE'),
    ]))
    story.append(led_table)

    story.append(Spacer(1, 10))

    # 6. 重置與故障排除
    story.append(Paragraph("5. 恢復出廠設定與疑難排解 (Troubleshooting)", h1_style))
    story.append(HRFlowable(width="100%", thickness=1.5, color=ACCENT, spaceAfter=8))

    reset_box_data = [
        [
            Paragraph("<b>🔄 恢復出廠設定 (Factory Reset)</b><br/>"
                      "• <b>一般重置：</b>通電狀態下按住 Reset 鈕 3～5 秒，至 WPS 燈常亮後放開。<br/>"
                      "• <b>強制深度重置：</b>拔下電源線 -> 按住 Reset 鈕不放 -> 插上電源 -> 等待 Port 燈亮起後放開。", table_cell_style),
            Paragraph("<b>⚠️ 常見問題排解</b><br/>"
                      "• <b>無法登入 192.168.1.252：</b>確認已停用電腦 Wi-Fi，且網卡固定 IP 設為 <code>192.168.1.3</code>。<br/>"
                      "• <b>相容性限制：</b>本設備不支援企業級驗證 (Enterprise Wi-Fi) 及部分 Mesh Wi-Fi 網狀系統。", table_cell_style)
        ]
    ]

    reset_table = Table(reset_box_data, colWidths=[255, 268])
    reset_table.setStyle(TableStyle([
        ('BACKGROUND', (0,0), (0,0), colors.HexColor("#eff6ff")),
        ('BACKGROUND', (1,0), (1,0), colors.HexColor("#fffbebf8")),
        ('BOX', (0,0), (0,0), 1, colors.HexColor("#bfdbfe")),
        ('BOX', (1,0), (1,0), 1, colors.HexColor("#fde68a")),
        ('PADDING', (0,0), (-1,-1), 8),
        ('VALIGN', (0,0), (-1,-1), 'TOP'),
    ]))
    story.append(reset_table)

    doc.build(story, canvasmaker=NumberedCanvas)
    print("PDF successfully generated at:", output_pdf)

if __name__ == "__main__":
    build_pdf()
