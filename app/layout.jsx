// app/layout.jsx
import '../styles/globals.css'

export const metadata = {
  title: 'เลือกตั้ง 69',
  description: 'ระบบตรวจสอบสิทธิเลือกตั้ง',
}

export default function RootLayout({ children }) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  )
}
