import Link from "next/link"

export default function Award() {
  return (
    <>
      <section className="award-section pt_100 pb_100">
            <div className="auto-container">
                <div className="sec-title centred pb_60">
                    <span className="sub-title mb_14">AWARDED BY THE BEST</span>
                    <h2>Globally Awarded</h2>
                </div>
                <div className="table-outer">
                    <table className="award-table">
                        <tbody>
                            <tr>
                                <td>01</td>
                                <td><h3><Link href="/">The Best Trading Platform, UK</Link></h3></td>
                                <td><span>x1</span></td>
                                <td><figure className="image-box"><Link href="/"><img src="assets/images/icons/Award_1.png" alt=""/></Link></figure></td>
                                <td>2023</td>
                            </tr>
                            <tr>
                                <td>02</td>
                                <td><h3><Link href="/">The Best Trading Platform, UK</Link></h3></td>
                                <td><span>x4</span></td>
                                <td><figure className="image-box"><Link href="/"><img src="assets/images/icons/AWARD_3.png" alt=""/></Link></figure></td>
                                <td>2022</td>
                            </tr>
                            <tr>
                                <td>03</td>
                                <td><h3><Link href="/">The Best Trading Platform, London</Link></h3></td>
                                <td><span>x4</span></td>
                                <td><figure className="image-box"><Link href="/"><img src="assets/images/icons/Award_5.png" alt=""/></Link></figure></td>
                                <td>2018</td>
                            </tr>
                        </tbody>    
                    </table>
                </div>
            </div>
        </section>
    </>
  )
}
