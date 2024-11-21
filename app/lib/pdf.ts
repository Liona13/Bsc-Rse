import { PDFDocument, PDFPage, rgb, StandardFonts } from 'pdf-lib'

interface PDFStyles {
  title: {
    font: string
    size: number
    color: [number, number, number]
  }
  heading: {
    font: string
    size: number
    color: [number, number, number]
  }
  subheading: {
    font: string
    size: number
    color: [number, number, number]
  }
  text: {
    font: string
    size: number
    color: [number, number, number]
  }
  link: {
    font: string
    size: number
    color: [number, number, number]
  }
}

export const pdfStyles: PDFStyles = {
  title: {
    font: StandardFonts.HelveticaBold,
    size: 24,
    color: [0.1, 0.1, 0.1]
  },
  heading: {
    font: StandardFonts.HelveticaBold,
    size: 14,
    color: [0.1, 0.1, 0.1]
  },
  subheading: {
    font: StandardFonts.HelveticaBold,
    size: 12,
    color: [0.2, 0.2, 0.2]
  },
  text: {
    font: StandardFonts.Helvetica,
    size: 10,
    color: [0.3, 0.3, 0.3]
  },
  link: {
    font: StandardFonts.Helvetica,
    size: 10,
    color: [0.2, 0.4, 0.8]
  }
}

export class PDFGenerator {
  private doc: PDFDocument
  private currentPage: PDFPage
  private currentY: number
  private fonts: Record<string, any>
  private pageNumber: number
  private readonly margin: number = 50
  private readonly pageHeight: number = 841.890
  private readonly pageWidth: number = 595.276

  constructor(doc: PDFDocument) {
    this.doc = doc
    this.pageNumber = 1
    this.currentPage = doc.addPage([this.pageWidth, this.pageHeight])
    this.currentY = this.pageHeight - this.margin
    this.fonts = {}
  }

  async loadFonts() {
    this.fonts = {
      [StandardFonts.HelveticaBold]: await this.doc.embedFont(StandardFonts.HelveticaBold),
      [StandardFonts.Helvetica]: await this.doc.embedFont(StandardFonts.Helvetica)
    }
  }

  private checkPageBreak(height: number) {
    if (this.currentY - height < this.margin) {
      this.currentPage = this.doc.addPage([this.pageWidth, this.pageHeight])
      this.currentY = this.pageHeight - this.margin
      this.pageNumber++
      this.addPageNumber()
    }
  }

  private addPageNumber() {
    const text = `Page ${this.pageNumber}`
    const font = this.fonts[StandardFonts.Helvetica]
    const textWidth = font.widthOfTextAtSize(text, 8)
    this.currentPage.drawText(text, {
      x: (this.pageWidth - textWidth) / 2,
      y: this.margin / 2,
      size: 8,
      font: font,
      color: rgb(0.5, 0.5, 0.5)
    })
  }

  drawText(text: string, style: keyof PDFStyles, x?: number) {
    const styleConfig = pdfStyles[style]
    const font = this.fonts[styleConfig.font]
    
    this.checkPageBreak(styleConfig.size + 5)
    
    this.currentPage.drawText(text, {
      x: x ?? this.margin,
      y: this.currentY,
      size: styleConfig.size,
      font: font,
      color: rgb(...styleConfig.color)
    })
    
    this.currentY -= styleConfig.size + 5
  }

  drawBulletPoint(text: string, indent: number = 10) {
    const styleConfig = pdfStyles.text
    const font = this.fonts[styleConfig.font]
    
    this.checkPageBreak(styleConfig.size + 5)
    
    // Draw bullet point
    this.currentPage.drawText('•', {
      x: this.margin + indent,
      y: this.currentY,
      size: styleConfig.size,
      font: font,
      color: rgb(...styleConfig.color)
    })
    
    // Draw text
    this.currentPage.drawText(text, {
      x: this.margin + indent + 10,
      y: this.currentY,
      size: styleConfig.size,
      font: font,
      color: rgb(...styleConfig.color)
    })
    
    this.currentY -= styleConfig.size + 5
  }

  addVerticalSpace(space: number) {
    this.currentY -= space
  }

  drawHorizontalLine() {
    this.checkPageBreak(1)
    this.currentPage.drawLine({
      start: { x: this.margin, y: this.currentY },
      end: { x: this.pageWidth - this.margin, y: this.currentY },
      thickness: 1,
      color: rgb(0.9, 0.9, 0.9)
    })
    this.currentY -= 10
  }
} 