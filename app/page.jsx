// app/page.tsx
export default function Home() {
  return (
    <main className="home">
      {/* optional watermark pattern */}
      <div className="watermark" aria-hidden="true" />

      <div className="wrap">
        <h1 className="title">เลือกตั้ง 69</h1>

        <div className="grid">
          <section className="card">
            <h2 className="cardTitle">ตรวจสอบรายละเอียด</h2>
            <p className="cardSub">ผู้มีสิทธิเลือกตั้ง</p>
            <p className="cardSub">สมาชิกสภาผู้แทนราษฎร (สส.)</p>

            <a className="btn" href="/voter">
              คลิก
            </a>
          </section>

          <section className="card">
            <h2 className="cardTitle">ตรวจสอบรายละเอียด</h2>
            <p className="cardSub">ผู้มีสิทธิออกเสียงประชามติ</p>

            <a className="btn" href="/referendum">
              คลิก
            </a>
          </section>
        </div>
      </div>
    </main>
  );
}
