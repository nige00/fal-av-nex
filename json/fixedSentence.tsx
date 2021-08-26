import "tailwindcss/tailwind.css";
import {Datas} from "./Datas"

export const fiexdSentence = {
  caution:
    `本ページの情報は${Datas[0].date}時点のものです。最新の配信状況はU-NEXT公式サイトにてご確認ください。`,
  date: `【${Datas[0].date}：H-NEXT】`,
  comment: (function () {
    return (
      <>
        <p className="text-lg" style={{ paddingBottom: "16px" }}>
          管理人より
        </p>
        <p style={{ paddingBottom: "8px" }}>
          <span style={{ fontWeight: "bold" }}>マジで抜けます</span>
          、これ見放題なのはヤバいです。
        </p>
        <p>ぜひ見ましょう、よかったらでいいので。</p>
      </>
    );
  })(),
  affiliateLink:
    "https://lp.hnext.jp/browse/maker/AMK0003813?utm_source=linka&utm_medium=a_n&utm_campaign=a_n_title_adult",
  microCopy: "＼31日間無料 + 1200円分のポイントGET！／",
  hnext: "H-NEXT",
  faleno: "FALENO",
  keywords: "見放題,AV,H-NEXT,U-NEXT,FALENO,お得,30日間無料,VOD",
  url: "https://fal-av-nex.vercel.app",
};
