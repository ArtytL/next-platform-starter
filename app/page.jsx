// app/page.jsx
import Image from 'next/image'
export default function Home() {
  return (
    <main className="home">
      <div className="noise" aria-hidden="true" />

      <div className="container">
        <h1 className="hero">เลือกตั้ง 69</h1>

        <div className="cols">
          <section className="col">
            <h2 className="headline">ตรวจสอบรายละเอียด</h2>
            <p className="sub">ผู้มีสิทธิเลือกตั้ง</p>
            <p className="sub">สมาชิกสภาผู้แทนราษฎร (สส.)</p>

            <a className="cta" href="/voter">
              คลิก
            </a>
          </section>

          <section className="col">
            <h2 className="headline">ตรวจสอบรายละเอียด</h2>
            <p className="sub">ผู้มีสิทธิออกเสียงประชามติ</p>

            <a className="cta" href="/referendum">
              คลิก
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}
