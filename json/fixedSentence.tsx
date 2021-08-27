import "tailwindcss/tailwind.css";
import { Datas } from "./Datas";

export const fiexdSentence = {
  caution: `本ページの情報は${Datas[0].date}時点のものです。最新の配信状況はU-NEXT公式サイトにてご確認ください。`,
  date: `【${Datas[0].date}：H-NEXT】`,
  comment: (function () {
    return (
      <>
        <p className="text-lg" style={{ paddingBottom: "16px" }}>
          管理人より
        </p>
        <p style={{ paddingBottom: "8px" }}>
          <span style={{ fontWeight: "bold" }}>マジで抜けます</span>
          、ほんと一回見て欲しい。
        </p>
        <p>H-NEXTで見てみてください、よかったらでいいので。</p>
      </>
    );
  })(),
  affiliateLink:
    "https://link-a.net/gate.php?guid=on&mcode=cxz7499d&acode=rxwrcbfvzd6j&itemid=0",
  microCopy: "＼31日間無料 + 1200円分のポイントGET！／",
  hnext: "H-NEXT",
  faleno: "FALENO",
  keywords: "見放題,AV,H-NEXT,U-NEXT,FALENO,お得,30日間無料,VOD",
  url: "https://fal-av-nex.vercel.app",
};
