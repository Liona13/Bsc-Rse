'use client'

import { PDFDocument } from 'pdf-lib'
import { siteConfig } from '@/config/site'
import { resumeConfig } from '@/config/resume'
import { PDFGenerator } from '@/lib/pdf'

export async function generateResume() {
  const pdfDoc = await PDFDocument.create()
  const generator = new PDFGenerator(pdfDoc)
  await generator.loadFonts()

  // Header Section
  generator.drawText(siteConfig.name, 'title')
  generator.drawText(resumeConfig.title, 'text')
  generator.addVerticalSpace(20)

  // Contact Info
  const contactInfo = [
    siteConfig.links.email,
    resumeConfig.phone,
    resumeConfig.location,
    siteConfig.links.linkedin,
    siteConfig.links.github
  ]

  contactInfo.forEach(info => {
    if (info) {
      generator.drawText(info, 'text')
    }
  })

  // Summary Section
  generator.addVerticalSpace(20)
  generator.drawText('SUMMARY', 'heading')
  generator.addVerticalSpace(10)
  generator.drawText(resumeConfig.summary, 'text')

  // Skills Section
  generator.addVerticalSpace(30)
  generator.drawText('SKILLS', 'heading')
  generator.addVerticalSpace(10)

  Object.entries(resumeConfig.skills).forEach(([category, skills]) => {
    generator.drawText(`${category.charAt(0).toUpperCase() + category.slice(1)}:`, 'subheading')
    skills.forEach(skill => {
      generator.drawBulletPoint(skill)
    })
    generator.addVerticalSpace(5)
  })

  // Experience Section
  generator.addVerticalSpace(30)
  generator.drawText('PROFESSIONAL EXPERIENCE', 'heading')
  generator.addVerticalSpace(10)

  resumeConfig.experience.forEach(exp => {
    generator.drawText(`${exp.title} - ${exp.company}`, 'subheading')
    generator.drawText(`${exp.period} | ${exp.location}`, 'text')
    generator.addVerticalSpace(5)
    exp.achievements.forEach(achievement => {
      generator.drawBulletPoint(achievement)
    })
    generator.addVerticalSpace(10)
  })

  // Education Section
  generator.addVerticalSpace(30)
  generator.drawText('EDUCATION', 'heading')
  generator.addVerticalSpace(10)

  resumeConfig.education.forEach(edu => {
    generator.drawText(edu.degree, 'subheading')
    generator.drawText(`${edu.school} | ${edu.period}`, 'text')
    generator.drawText(`${edu.location} | GPA: ${edu.gpa}`, 'text')
    generator.addVerticalSpace(5)
    edu.achievements.forEach(achievement => {
      generator.drawBulletPoint(achievement)
    })
    generator.addVerticalSpace(10)
  })

  // Certifications Section
  generator.addVerticalSpace(30)
  generator.drawText('CERTIFICATIONS', 'heading')
  generator.addVerticalSpace(10)

  resumeConfig.certifications.forEach(cert => {
    generator.drawText(`${cert.name} - ${cert.issuer}`, 'subheading')
    generator.drawText(`${cert.date} | ID: ${cert.id}`, 'text')
    generator.addVerticalSpace(10)
  })

  // Languages Section
  generator.addVerticalSpace(30)
  generator.drawText('LANGUAGES', 'heading')
  generator.addVerticalSpace(10)

  resumeConfig.languages.forEach(lang => {
    generator.drawText(`${lang.name} - ${lang.level}`, 'text')
  })

  // Add horizontal line before footer
  generator.addVerticalSpace(20)
  generator.drawHorizontalLine()
  generator.addVerticalSpace(10)

  // Footer with website and date
  generator.drawText(`Generated on ${new Date().toLocaleDateString()}`, 'text')
  generator.drawText(siteConfig.url, 'link')

  const pdfBytes = await pdfDoc.save()
  return pdfBytes
}

export async function downloadResume() {
  try {
    const pdfBytes = await generateResume()
    const blob = new Blob([pdfBytes], { type: 'application/pdf' })
    const url = window.URL.createObjectURL(blob)
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${siteConfig.name.replace(/\s+/g, '_')}_Resume.pdf`)
    document.body.appendChild(link)
    link.click()
    link.remove()
    window.URL.revokeObjectURL(url)
  } catch (error) {
    console.error('Error downloading resume:', error)
    throw error
  }
} 