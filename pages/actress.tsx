import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import ReviewStar from "../components/ReviewStar";
import { actressList } from "../json/actressList";
import { fiexdSentence } from "../json/fixedSentence";

const Actress: NextPage = () => {
  return (
    <Layout
      title={`${fiexdSentence.date}H-NEXTで見れるFALENO女優まとめ`}
      description={`H-NEXTで見れるFALENO女優まとめ`}
      keyword={fiexdSentence.keywords}
      url={`${fiexdSentence.url}/actress`}
      type="article"
    >
      <h1 className="text-xl sm:text-2xl text-gray-600">{`${fiexdSentence.date}H-NEXTで見れる、FALENO女優まとめ【${actressList.length}人】`}</h1>
      <div className="py-4 sm:px-4">
        <p>{fiexdSentence.caution}</p>
      </div>
      <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
        <span className="py-1 text-sm">{fiexdSentence.microCopy}</span>
        <a
          className="py-3 px-8 text-xl text-white bg-pink-500 hover:bg-pink-400 rounded transition"
          href={fiexdSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          H-NEXTで見る
        </a>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6 w-11/12">
        {actressList.map((content) => {
          return (
            <div key={content.actressName}>
              <Link href={`/actress/${content.pageUrl}`}>
                <a className="text-blue-500 hover:opacity-90 border-b border-blue-500">
                  {content.actressName}
                </a>
              </Link>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col justify-center items-center py-4 cursor-pointer">
        <span className="py-1 text-sm">{fiexdSentence.microCopy}</span>
        <a
          className="py-3 px-8 text-xl text-white bg-pink-500 hover:bg-pink-400 rounded transition"
          href={fiexdSentence.affiliateLink}
          rel="nofollow noopener noreferrer"
          target="_blank"
        >
          H-NEXTで見る
        </a>
      </div>
    </Layout>
  );
};

export default Actress;
