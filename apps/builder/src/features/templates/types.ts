export type TemplateProps = {
  name: string
  emoji: string
  fileName: string
  description: string
  category?: 'marketing' | 'product' | 'ai'
  isComingSoon?: boolean
  isNew?: boolean
  backgroundColor?: string
}
