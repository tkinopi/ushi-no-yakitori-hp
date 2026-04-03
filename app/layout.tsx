import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '牛の焼鳥 | 大阪天王寺・寺田町の炭火焼鳥',
  description: '大阪市天王寺区寺田町にある炭火焼鳥の名店。',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  )
}
