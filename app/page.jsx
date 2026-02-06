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
              <div className="btnImgWrap">
                <Image
                  src="/red-button.png"
                  alt="ปุ่มตรวจสอบสิทธิเลือกตั้ง"
                  fill
                  sizes="320px"
                  style={{ objectFit: 'contain' }}
                  priority
                />
              </div>
            </a>
          </div>

          {/* กล่องที่ 2 */}
          <div className="card">
            <div className="cardTitle">ตรวจสอบรายละเอียด</div>
            <div className="cardSub">
              ผู้มีสิทธิออกเสียงประชามติ
            </div>

            <a href="/referendum" className="imgBtn">
              <div className="btnImgWrap">
                <Image
                  src="/red-button.png"
                  alt="ปุ่มตรวจสอบสิทธิประชามติ"
                  fill
                  sizes="320px"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
