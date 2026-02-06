// app/page.jsx
import Image from 'next/image'

export default function Home() {
  return (
    <main className="home">
      <div className="watermark" aria-hidden="true" />

      <div className="wrap">
        <h1 className="title">เลือกตั้ง 69</h1>

        <div className="grid">
          <section className="card">
            <div className="cardTitle">ตรวจสอบรายละเอียด</div>
            <div className="cardSub">
              ผู้มีสิทธิเลือกตั้ง<br />
              สมาชิกสภาผู้แทนราษฎร (ส.ส.)
            </div>

            <a href="/voter" className="imgBtn" aria-label="ไปหน้าตรวจสอบผู้มีสิทธิเลือกตั้ง">
              <span className="btnImgWrap">
                <Image
                  src="/red-button.png"
                  alt=""
                  fill
                  sizes="(max-width: 820px) 260px, 320px"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </span>
            </a>
          </section>

          <section className="card">
            <div className="cardTitle">ตรวจสอบรายละเอียด</div>
            <div className="cardSub">ผู้มีสิทธิออกเสียงประชามติ</div>

            <a href="/referendum" className="imgBtn" aria-label="ไปหน้าตรวจสอบผู้มีสิทธิประชามติ">
              <span className="btnImgWrap">
                <Image
                  src="/red-button.png"
                  alt=""
                  fill
                  sizes="(max-width: 820px) 260px, 320px"
                  style={{ objectFit: 'contain' }}
                />
              </span>
            </a>
          </section>
        </div>
      </div>
    </main>
  )
}
