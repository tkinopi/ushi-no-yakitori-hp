'use client'
import { useState } from 'react'

type Tab = 'top' | 'menu' | 'info' | 'reserve'

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>('top')

  const navItems: { key: Tab; label: string }[] = [
    { key: 'top', label: 'トップ' },
    { key: 'menu', label: 'メニュー' },
    { key: 'info', label: '店舗情報' },
    { key: 'reserve', label: 'ご予約' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Header */}
      <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'var(--bg)', borderBottom: '1px solid var(--border)', padding: '0 32px' }}>
        <div className="site-header-inner">
          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span style={{ fontSize: '10px', letterSpacing: '0.25em', color: 'var(--accent)', textTransform: 'uppercase' }}>OSAKA TENNOJI</span>
            <span style={{ fontSize: '20px', fontWeight: 800, letterSpacing: '0.05em', color: 'var(--text)' }}>牛の焼鳥</span>
          </div>
          <nav className="site-nav">
            {navItems.map(item => (
              <button
                key={item.key}
                onClick={() => setActiveTab(item.key)}
                style={{
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '20px 16px',
                  fontSize: '13px',
                  letterSpacing: '0.1em',
                  color: activeTab === item.key ? 'var(--accent)' : 'var(--text-muted)',
                  borderBottom: activeTab === item.key ? '2px solid var(--accent)' : '2px solid transparent',
                  transition: 'all 0.2s',
                  whiteSpace: 'nowrap',
                  fontFamily: 'inherit',
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Content */}
      <main>
        {activeTab === 'top' && <TopSection setActiveTab={setActiveTab} />}
        {activeTab === 'menu' && <MenuSection />}
        {activeTab === 'info' && <InfoSection />}
        {activeTab === 'reserve' && <ReserveSection />}
      </main>

      {/* Footer */}
      <footer style={{ background: 'var(--bg2)', borderTop: '1px solid var(--border)', padding: '40px 32px', textAlign: 'center' }}>
        <p style={{ fontSize: '18px', fontWeight: 800, letterSpacing: '0.05em', marginBottom: '8px' }}>牛の焼鳥</p>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', letterSpacing: '0.05em' }}>〒543-0052 大阪府大阪市天王寺区大道4丁目2−4</p>
        <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginTop: '4px' }}>TEL: 06-6777-9033</p>
        <p style={{ fontSize: '11px', color: 'var(--border)', marginTop: '24px' }}>© 2024 牛の焼鳥</p>
      </footer>
    </div>
  )
}

function TopSection({ setActiveTab }: { setActiveTab: (tab: Tab) => void }) {
  return (
    <div>
      {/* Hero */}
      <section className="hero-grid" style={{ minHeight: '80vh', alignItems: 'stretch' }}>
        <div className="hero-pad" style={{ padding: '80px 48px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'var(--bg)' }}>
          <p style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '20px' }}>
            Charcoal Grilled Skewers · Osaka Tennoji
          </p>
          <h1 className="hero-title" style={{ color: 'var(--text)', marginBottom: '24px' }}>
            炭火で焼く、<br />本物の旨さ。
          </h1>
          <p style={{ fontSize: '15px', lineHeight: 1.9, color: 'var(--text-muted)', maxWidth: '380px', marginBottom: '40px' }}>
            牛・豚・鶏、それぞれの部位が持つ旨みを引き出す炭火の技。
            寺田町に根付いた焼鳥職人が、一本一本丁寧に焼き上げます。
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={() => setActiveTab('reserve')}
              style={{
                background: 'var(--accent)',
                color: '#fff',
                border: 'none',
                padding: '14px 32px',
                fontSize: '14px',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                fontFamily: 'inherit',
                whiteSpace: 'nowrap',
              }}
            >
              ご予約はこちら
            </button>
            <button
              onClick={() => setActiveTab('menu')}
              style={{
                background: 'none',
                color: 'var(--text)',
                border: '1px solid var(--border)',
                padding: '14px 32px',
                fontSize: '14px',
                letterSpacing: '0.1em',
                cursor: 'pointer',
                fontFamily: 'inherit',
                whiteSpace: 'nowrap',
              }}
            >
              メニューを見る
            </button>
          </div>
        </div>
        <div className="hero-deco" style={{ background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '80px', marginBottom: '16px' }}>🔥</div>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', letterSpacing: '0.2em' }}>炭火焼鳥</p>
          </div>
          {/* Decorative elements */}
          <div style={{ position: 'absolute', top: '20px', right: '20px', width: '60px', height: '60px', border: '1px solid var(--border)', borderRadius: '50%' }} />
          <div style={{ position: 'absolute', bottom: '40px', left: '30px', width: '30px', height: '30px', background: 'var(--accent)', opacity: 0.3, borderRadius: '50%' }} />
        </div>
      </section>

      {/* Rating Bar */}
      <section style={{ background: 'var(--accent)', padding: '20px 32px' }}>
        <div className="info-bar">
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '32px', fontWeight: 800, color: '#fff' }}>4.9</span>
            <div>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)', letterSpacing: '0.1em' }}>Google評価</p>
              <p style={{ fontSize: '12px', color: 'rgba(255,255,255,0.8)' }}>★★★★★ 237件のクチコミ</p>
            </div>
          </div>
          <div style={{ color: '#fff', fontSize: '13px', letterSpacing: '0.05em' }}>
            大阪市天王寺区 · 寺田町駅徒歩2分
          </div>
          <div style={{ color: '#fff', fontSize: '13px' }}>
            ランチ 11:30〜 / ディナー 17:00〜23:00
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="main-pad" style={{ paddingTop: '80px' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>OUR PRIDE</p>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px', fontWeight: 800, letterSpacing: '0.05em' }}>こだわり</h2>
        <div className="grid-3">
          {[
            { emoji: '🥩', title: '牛・豚・鶏 三種の串', desc: '国産牛のテール・ハラミから、希少な豚串、厳選し�鶏まで。三種の旨みが一度に楽しめる、他にはない焼鳥体験。' },
            { emoji: '🪵', title: '備長炭の炭火焼き', desc: '職人が備長炭の火加減を見極めながら丁寧に焼き上げます。外はカリッと、中はジューシーな仕上がり。' },
            { emoji: '🍚', title: 'ランチも充実', desc: '爆タンカレーや丼物など、ランチタイムも充実のメニュー。11:30からオープン。地元のリピーターに愛される味。' },
          ].map((f, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '32px 24px' }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{f.emoji}</div>
              <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '12px', letterSpacing: '0.05em' }}>{f.title}</h3>
              <p style={{ fontSize: '13px', lineHeight: 1.8, color: 'var(--text-muted)' }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Reviews */}
      <section className="main-pad" style={{ paddingTop: '60px' }}>
        <p style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>VOICES</p>
        <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '40px', fontWeight: 800, letterSpacing: '0.05em' }}>お客様の声</h2>
        <div className="grid-2">
          {[
            { text: '何を食べても全て美味しかったです！妻も子供もまた行きたいと言ってました。リピ確定です！！', name: 'たかのり様' },
            { text: '接客も丁寧で、牛串・豚串・鶏を一度に楽しめる希少なお店。テールの塩焼きは国産牛ならではの旨さでした！', name: '東峰将史様' },
          ].map((r, i) => (
            <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '28px 24px' }}>
              <p style={{ fontSize: '13px', lineHeight: 1.9, color: 'var(--text-muted)', marginBottom: '16px' }}>「{r.text}」</p>
              <p style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em' }}>— {r.name}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

function MenuSection() {
  const categories = [
    {
      name: '牛串',
      items: [
        { name: '牛テール 塩焼き', price: '¥580', desc: '国産牛のテールを備長炭でじっくり焼き上げた看板メニュー' },
        { name: 'ハラミ串', price: '¥480', desc: '柔らかく旨みたっぷりの牛ハラミ' },
        { name: '和牛串', price: '¥550', desc: '厳選和牛の旨みをシンプルに' },
        { name: 'ユッケ', price: '¥680', desc: '新鮮な牛肉を使ったユッケ' },
      ],
    },
    {
      name: '鶏串',
      items: [
        { name: 'つくね 月見ダレ', price: '¥380', desc: '人気No.1。月見ダレで食べる絶品つくね' },
        { name: 'もも串', price: '¥320', desc: '定番の鶏もも串' },
        { name: 'ねぎま', price: '¥320', desc: '鶏肉と長ねぎの黄金コンビ' },
        { name: 'つなぎ（希少部位）', price: '¥420', desc: '心臓付近の希少部位。コリコリ食感が癖になる' },
      ],
    },
    {
      name: 'ランチ',
      items: [
        { name: '爆タンカレー', price: '¥980', desc: '牛すじのカレーに柔らかすぉ肉と味玉が乗った絶品ランチ' },
        { name: '焼鳥丼', price: '¥850', desc: '当日の焼鳥を使った丼。ランチ限定' },
        { name: '冷麺', price: '¥750', desc: '自家製スープの本格冷麺' },
        { name: '小鉢ランチセット', price: '¥1,000', desc: 'もやしナムル・スープ・ご飯・白菜漬物付き' },
      ],
    },
    {
      name: 'ドリンク',
      items: [
        { name: 'ビール（生）', price: '¥600', desc: '冷え�ビールと焼鳥の相性は最高' },
        { name: '焼酎（芋/麦）', price: '¥480', desc: 'ロック・水割り・お湯割りから' },
        { name: 'ハイボール', price: '¥450', desc: 'すっきり飲みやすいハイボール' },
        { name: 'ソフトドリンク', price: '¥350', desc: 'ウーロン茶・コーラ・ジュース' },
      ],
    },
  ]

  return (
    <div className="main-pad" style={{ paddingTop: '60px' }}>
      <p style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>MENU</p>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '8px', fontWeight: 800, letterSpacing: '0.05em' }}>メニュー</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '48px' }}>※価格は税込表示。メニューは変わる場合があります。</p>

      {categories.map((cat, ci) => (
        <div key={ci} style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '20px' }}>
            <div style={{ width: '3px', height: '24px', background: 'var(--accent)' }} />
            <h3 style={{ fontSize: '18px', fontWeight: 600, letterSpacing: '0.1em' }}>{cat.name}</h3>
          </div>
          <div className="grid-2-menu" style={{ border: '1px solid var(--border)' }}>
            {cat.items.map((item, ii) => (
              <div key={ii} style={{ padding: '20px 24px', background: 'var(--card)', borderBottom: '1px solid var(--border)', borderRight: ii % 2 === 0 ? '1px solid var(--border)' : undefined }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '6px' }}>
                  <span style={{ fontSize: '15px', fontWeight: 500 }}>{item.name}</span>
                  <span style={{ fontSize: '15px', color: 'var(--accent)', whiteSpace: 'nowrap', marginLeft: '12px' }}>{item.price}</span>
                </div>
                <p style={{ fontSize: '12px', color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

function InfoSection() {
  const hours = [
    { day: '月曜日', time: '11:30〜14:30 / 17:00〜23:00' },
    { day: '火曜日', time: '11:30〜14:30 / 17:00〜23:00' },
    { day: '水曜日', time: '11:30〜14:30 / 17:00〜23:00' },
    { day: '木曜日', time: '11:30〜14:30 / 17:00〜23:00' },
    { day: '金曜日', time: '11:30〜14:30 / 17:00〜23:00' },
    { day: '土曜日', time: '11:30〜14:30 / 17:00〜23:00' },
    { day: '日曜日', time: '11:30〜14:30 / 17:00〜23:00' },
  ]

  return (
    <div className="main-pad" style={{ paddingTop: '60px' }}>
      <p style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>ACCESS</p>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '48px', fontWeight: 800, letterSpacing: '0.05em' }}>店舗情報・アクセス</h2>

      <div className="grid-2">
        {/* Info */}
        <div>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.05em', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>基本情報</h3>
            {[
              { label: '店名', value: '牛の焼鳥' },
              { label: '住所', value: '〒543-0052\n大阪府大阪市天王寺区大道4丁目2−4' },
              { label: '電話番号', value: '06-6777-9033' },
              { label: '最寄り駅', value: 'JR大阪環状線・大和路線「寺田町駅」徒歩2分' },
              { label: 'イートイン', value: 'あり（カウンター・テーブル席）' },
              { label: 'テイクアウト', value: 'あり' },
              { label: '宅配', value: 'あり' },
            ].map((info, i) => (
              <div key={i} style={{ display: 'flex', gap: '16px', marginBottom: '16px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', color: 'var(--accent)', letterSpacing: '0.1em', minWidth: '80px', flexShrink: 0 }}>{info.label}</span>
                <span style={{ fontSize: '13px', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{info.value}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Hours */}
        <div>
          <div style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '32px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.05em', borderBottom: '1px solid var(--border)', paddingBottom: '12px' }}>営業時間</h3>
            {hours.map((h, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid var(--border)', flexWrap: 'wrap', gap: '8px' }}>
                <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>{h.day}</span>
                <span style={{ fontSize: '13px' }}>{h.time}</span>
              </div>
            ))}
          </div>

          {/* Map placeholder */}
          <div style={{ marginTop: '16px', background: 'var(--card)', border: '1px solid var(--border)', padding: '24px', textAlign: 'center' }}>
            <p style={{ fontSize: '12px', color: 'var(--text-muted)', marginBottom: '12px' }}>Google マップで開く</p>
            <a
              href="https://maps.google.com/maps?q=牛の焼鳥+大阪市天王寺区大道4丁目2-4"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: '#fff',
                padding: '12px 24px',
                fontSize: '13px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
              }}
            >
              地図で確認する
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

function ReserveSection() {
  return (
    <div className="main-pad" style={{ paddingTop: '60px' }}>
      <p style={{ fontSize: '11px', letterSpacing: '0.3em', color: 'var(--accent)', textTransform: 'uppercase', marginBottom: '12px', textAlign: 'center' }}>RESERVE</p>
      <h2 className="section-title" style={{ textAlign: 'center', marginBottom: '12px', fontWeight: 800, letterSpacing: '0.05em' }}>ご予約・お問い合わせ</h2>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '13px', marginBottom: '48px' }}>
        お電話またはTabelogよりご予約いただけます。
      </p>

      <div className="contact-grid" style={{ maxWidth: '800px', margin: '0 auto' }}>
        {[
          {
            icon: '📞',
            title: 'お電話でのご予約',
            desc: '06-6777-9033\n\n受付時間: 11:00〜23:00\n（定休日なし）',
            action: 'tel:06-6777-9033',
            label: '電話をかける',
          },
          {
            icon: '🍽',
            title: 'ネット予約（Tabelog）',
            desc: '食べログからご予約いただけます。\n\n日時・人数を選んでかんたん予約。\n24時間受付。',
            action: 'https://tabelog.com/osaka/A2701/A270103/27140813/',
            label: 'Tabelog で予約',
          },
        ].map((c, i) => (
          <div key={i} style={{ background: 'var(--card)', border: '1px solid var(--border)', padding: '40px 28px', textAlign: 'center' }}>
            <div style={{ fontSize: '48px', marginBottom: '16px' }}>{c.icon}</div>
            <h3 style={{ fontSize: '15px', fontWeight: 600, marginBottom: '16px', letterSpacing: '0.05em' }}>{c.title}</h3>
            <p style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '24px', whiteSpace: 'pre-line' }}>{c.desc}</p>
            <a
              href={c.action}
              target={c.action.startsWith('http') ? '_blank' : undefined}
              rel={c.action.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                display: 'inline-block',
                background: 'var(--accent)',
                color: '#fff',
                padding: '12px 28px',
                fontSize: '13px',
                textDecoration: 'none',
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
              }}
            >
              {c.label}
            </a>
          </div>
        ))}
      </div>

      {/* Note */}
      <div style={{ maxWidth: '800px', margin: '32px auto 0', background: 'var(--card)', border: '1px solid var(--border)', padding: '24px 28px' }}>
        <h3 style={{ fontSize: '14px', fontWeight: 600, marginBottom: '12px', color: 'var(--accent)' }}>ご来店に関するご注意</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {[
            'お席はご用意の都合上、4名様以上のご来店はご予約をお勧めします。',
            'アレルギーも方はご予約時にお知らせください。',
            'ランチ・ディナー共に混雑することいます。事前はご予約を推奨しております。',
          ].map((note, i) => (
            <li key={i} style={{ fontSize: '13px', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '8px', paddingLeft: '16px', position: 'relative' }}>
              <span style={{ position: 'absolute', left: 0, color: 'var(--accent)' }}>·</span>
              {note}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
