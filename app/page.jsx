import Image from 'next/image'

export default function Home() {
  return (
    <main className="home">
      <div className="wrap">
        <h1 className="title">เลือกตั้ง 69</h1>

        <div className="grid">
          {/* กล่องที่ 1 */}
          <div className="card">
            <div className="cardTitle">ตรวจสอบรายละเอียด</div>
            <div className="cardSub">
              ผู้มีสิทธิเลือกตั้ง<br />
              สมาชิกสภาผู้แทนราษฎร (ส.ส.)
            </div>

            <a href="/voter" className="imgBtn">
              <Image
                src="/btn-check.png"
                alt="ตรวจสอบสิทธิเลือกตั้ง"
                width={280}
                height={90}
                priority
              />
            </a>
          </div>

          {/* กล่องที่ 2 */}
          <div className="card">
            <div className="cardTitle">ตรวจสอบรายละเอียด</div>
            <div className="cardSub">
              ผู้มีสิทธิออกเสียงประชามติ
            </div>

            <a href="/referendum" className="imgBtn">
              <Image
                src="/btn-referendum.png"
                alt="ตรวจสอบสิทธิประชามติ"
                width={280}
                height={90}
              />
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
