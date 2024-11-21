'use client'

import { PDFDocument, rgb, StandardFonts } from 'pdf-lib'
import { siteConfig } from '@/config/site'

interface ExperienceItem {
  role: string
  company: string
  period: string
  details: string[]
}

interface EducationItem {
  degree: string
  school: string
  period: string
  details: string[]
}

type ContentItem = string | ExperienceItem | EducationItem

interface Section {
  title: string
  content: ContentItem[]
}

function isExperienceItem(item: ContentItem): item is ExperienceItem {
  return typeof item === 'object' && 'role' in item && 'company' in item
}

function isEducationItem(item: ContentItem): item is EducationItem {
  return typeof item === 'object' && 'degree' in item && 'school' in item
}

export async function generateResume() {
  // Create a new PDF document
  const pdfDoc = await PDFDocument.create()
  const page = pdfDoc.addPage([595.276, 841.890]) // A4 size
  const { width, height } = page.getSize()
  
  // Get fonts
  const helveticaBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold)
  const helvetica = await pdfDoc.embedFont(StandardFonts.Helvetica)
  
  // Colors
  const primary = rgb(1, 1, 1)
  const secondary = rgb(0.5, 0.5, 0.5)
  
  // Header
  page.drawText(siteConfig.name, {
    x: 50,
    y: height - 50,
    size: 24,
    font: helveticaBold,
    color: primary,
  })
  
  page.drawText('Senior Software Engineer', {
    x: 50,
    y: height - 80,
    size: 14,
    font: helvetica,
    color: secondary,
  })
  
  // Contact Info
  const contactInfo = [
    siteConfig.links.email,
    siteConfig.links.linkedin,
    siteConfig.links.github,
  ]
  
  contactInfo.forEach((info, index) => {
    page.drawText(info, {
      x: 50,
      y: height - 110 - (index * 20),
      size: 10,
      font: helvetica,
      color: secondary,
    })
  })
  
  // Sections
  const sections: Section[] = [
    {
      title: 'Professional Experience',
      content: [
        {
          role: 'Senior Software Engineer',
          company: 'TechCorp Inc.',
          period: '2020 - Present',
          details: [
            'Led development of microservices architecture serving 1M+ users',
            'Reduced application load time by 40% through optimization',
            'Mentored 5 junior developers and established code review practices',
          ],
        } as ExperienceItem,
        // Add more experiences...
      ],
    },
    {
      title: 'Education',
      content: [
        {
          degree: 'Master of Science in Computer Science',
          school: 'Stanford University',
          period: '2015 - 2017',
          details: [
            'GPA: 3.9/4.0',
            'Specialization in AI and Machine Learning',
          ],
        },
        // Add more education...
      ],
    },
    {
      title: 'Skills',
      content: [
        'Frontend: React, Next.js, TypeScript, Tailwind CSS',
        'Backend: Node.js, Python, PostgreSQL, MongoDB',
        'DevOps: AWS, Docker, CI/CD, Kubernetes',
        'Other: System Design, Data Structures, Algorithms',
      ],
    },
  ]
  
  let currentY = height - 160
  
  sections.forEach(section => {
    // Section Title
    page.drawText(section.title, {
      x: 50,
      y: currentY,
      size: 16,
      font: helveticaBold,
      color: primary,
    })
    
    currentY -= 30
    
    // Section Content
    if (Array.isArray(section.content)) {
      section.content.forEach(item => {
        if (typeof item === 'string') {
          page.drawText(item, {
            x: 70,
            y: currentY,
            size: 10,
            font: helvetica,
            color: secondary,
          })
          currentY -= 20
        } else if (isExperienceItem(item)) {
          page.drawText(item.role, {
            x: 70,
            y: currentY,
            size: 12,
            font: helveticaBold,
            color: primary,
          })
          currentY -= 20
          
          page.drawText(`${item.company} | ${item.period}`, {
            x: 70,
            y: currentY,
            size: 10,
            font: helvetica,
            color: secondary,
          })
          currentY -= 20
        } else if (isEducationItem(item)) {
          page.drawText(item.degree, {
            x: 70,
            y: currentY,
            size: 12,
            font: helveticaBold,
            color: primary,
          })
          currentY -= 20
          
          page.drawText(`${item.school} | ${item.period}`, {
            x: 70,
            y: currentY,
            size: 10,
            font: helvetica,
            color: secondary,
          })
          currentY -= 20
        }

        if ('details' in item && Array.isArray(item.details)) {
          item.details.forEach(detail => {
            page.drawText(`• ${detail}`, {
              x: 90,
              y: currentY,
              size: 10,
              font: helvetica,
              color: secondary,
            })
            currentY -= 20
          })
        }
        currentY -= 10
      })
    }
    currentY -= 20
  })
  
  // Generate PDF bytes
  const pdfBytes = await pdfDoc.save()
  return pdfBytes
}

export function downloadResume() {
  generateResume().then(pdfBytes => {
    const blob = new Blob([pdfBytes], { type: 'application/pdf' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${siteConfig.name.replace(/\s+/g, '_')}_Resume.pdf`)
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
  })
} 