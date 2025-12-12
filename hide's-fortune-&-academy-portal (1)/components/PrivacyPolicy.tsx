import React from 'react';
import { ArrowLeft } from 'lucide-react';

interface PrivacyPolicyProps {
  onBack: () => void;
}

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  return (
    <div className="bg-white rounded-xl shadow-md border border-beige-200 p-6 md:p-8 animate-fade-in-up">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-beige-600 hover:text-beige-800 transition-colors mb-6 text-sm font-bold"
      >
        <ArrowLeft size={16} />
        <span>トップに戻る</span>
      </button>

      <h1 className="text-xl md:text-2xl font-serif font-bold text-gray-800 mb-6 pb-2 border-b border-beige-200">
        プライバシーポリシー
      </h1>

      <div className="space-y-6 text-sm text-gray-600 leading-relaxed font-sans">
        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 font-serif">個人情報の保護</h2>
          <p>
            タロット邸デザイナーズ「Relife」は、お客様のプライバシーに係わる個人情報を保護することに細心の注意を払い取り組みます。
            当館において、お客様ご自身の判断により個人情報をご提供いただく場合がございますが、その情報は必要最小限の 情報とし、その他の情報のご提供につきましてはお客様の判断を尊重いたします。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 font-serif">個人情報の収集</h2>
          <p>
            当サイトでは、必要最小限の個人情報をいただく場合がございます。 その際には、あらかじめ、その目的を提示するものといたします。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 font-serif">個人情報の管理</h2>
          <p>
            タロット邸デザイナーズ「Relife」は、お客様からご提供いただいた個人情報を適切な方法で管理し、お客様の個人情報の紛失や漏洩などが起きぬよう、合理的な措置を講じます。退会後も同様な措置を取る。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 font-serif">個人情報の提供・提示</h2>
          <p className="mb-2">
            タロット邸デザイナーズ「Relife」が、ホームページ上でお客様よりご提供いただいた個人情報は、法令の定める場合などを除き、ご本人様の事前の了解なく第三者に提供・提示されることはありませんが、一部の業務委託者や講座生のワークに提供し、鑑定をさせる場合がございます。
          </p>
          <p className="mb-2">
            次に掲げる場合において、秘密保持義務を課した上、一部の業務委託者や講座生のワークに提供し、個人を特定できる情報を削除することが可能な場合（顔写真等の場合を除く）は該情報を削除の上、鑑定させる場合がございます。
          </p>
          <ul className="list-disc pl-5 space-y-1 bg-beige-50 p-3 rounded-lg border border-beige-100">
            <li>提供の方法に関して</li>
            <li>当館が提携する業務委託者に対し、当館の監督の下、鑑定業務のため開示する場合</li>
            <li>当館の講座生に対し、当館の監督の下、講座の課題又は資料として開示する場合</li>
          </ul>
          <p className="mt-2 text-xs text-gray-500">
            当該写真がご本人の顔などを含まない風景写真や事物の写真である場合は、氏名、生年月日等の個人情報と切り離して開示された場合、写真そのものは、元来は「個人情報」ではないと考えられます。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 font-serif">ご本人様からの問い合わせ</h2>
          <p className="mb-2">
            個人情報に関する請求について<br/>
            当社は、当社が保有する個人情報について、個人情報のご本人から、当社に対し、次に掲げる請求があった場合、個人情報保護法その他の法令に従い、適正にご対応します。この場合において、請求者に対し、手数料を請求する場合がございます。
          </p>
          <ul className="list-disc pl-5 grid grid-cols-1 md:grid-cols-2 gap-1 text-xs mb-3">
            <li>本人の個人情報の開示請求</li>
            <li>本人の個人情報の訂正請求</li>
            <li>本人の個人情報の利用停止請求</li>
            <li>本人の個人情報の利用制限請求</li>
            <li>本人の個人情報の廃棄請求</li>
            <li>監督機関への申し立ての請求</li>
          </ul>
          <p className="mb-1 text-xs font-bold">ただし次に掲げる場合においては、請求に応じることができないことがあります。</p>
          <ul className="list-disc pl-5 text-xs">
            <li>ご本人または第三者の生命、身体、財産に対する権利利益の侵害が生じる場合</li>
            <li>当社の適正な業務の遂行に対し、著しい支障が生じる場合</li>
            <li>法令に違反することとなる場合</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 font-serif">個人情報の廃棄</h2>
          <p>
            当館は、当社が保有する個人情報について、当該個人情報の利用目的が達成された場合には、法令により記録の保存が義務付けられている場合（個人情報保護法第29条等）を除き、遅滞なく当該個人情報を適正に廃棄します。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 font-serif">正確性の確保</h2>
          <p>
            当館は、上記「利用目的」のため必要な範囲内において、個人情報が正確かつ最新の内容であるように努めるものとします。当社に提供した個人情報の内容に変更があったときは、当社に対し、所定の方法により通知するよう、お願いいたします。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 font-serif">要配慮個人情報</h2>
          <p>
            個人情報保護法第２０条第２項において、一定の要配慮個人情報に関しては、取得を制限されておりますが、鑑定業務の性質上、こうした情報を取得される場合もあり、下記に規定されるものとする。
          </p>
          <h3 className="text-sm font-bold mt-2 mb-1">要配慮個人情報の取得</h3>
          <p className="mb-2">
            当館は、次に掲げる特定の個人情報については、法令による場合、ご本人が当館のサービスのご利用に際して任意にご提供された場合、又はご本人からご同意を得た場合を除き、取得しないものとします。
          </p>
          <ul className="list-disc pl-5 text-xs">
            <li>人種</li>
            <li>信条</li>
            <li>社会的身分</li>
            <li>病歴</li>
            <li>犯罪の経歴</li>
            <li>犯罪により害を被った事実</li>
            <li>本人に対して刑事事件に関する手続きが行われたこと</li>
          </ul>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 font-serif">お客様の同意について</h2>
          <p className="mb-2">
            タロット邸デザイナーズ「Relife」は、お客様が当サイトを利用されるにあたり、当サイトの個人情報の取り扱いに対する考えに同意を得ておられるものと考えます。
          </p>
          <p className="mb-2">
            また、当サイトのご利用は、お客様の責任において行われるものとします。
            今後、ここに記載された内容が予告なく改訂される可能性がありますのでご了承下さい。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-gray-800 mb-2 font-serif">責任の有無</h2>
          <p>
            ノウハウをご利用されていかなるトラブル・損害が発生しても、 弊社では一切の責任を負えません。ご了承お願いいたします。
          </p>
        </section>

        <section className="mt-8 pt-6 border-t border-beige-200">
          <p className="font-bold text-center mb-2">お問い合わせ・個人情報の訂正・削除など</p>
          <p className="text-center">タロット邸デザイナーズ「Relife」</p>
          <div className="text-center mt-2 p-3 bg-beige-50 rounded-lg inline-block w-full">
            <p className="text-xs text-gray-500 mb-1">お問い合わせ</p>
            <p className="font-mono text-gray-700 select-all">relife202112@gmail.com</p>
          </div>
        </section>
      </div>
      
      <button 
        onClick={onBack}
        className="w-full mt-8 py-3 bg-beige-100 text-beige-800 rounded-lg hover:bg-beige-200 transition-colors font-bold text-sm"
      >
        トップページに戻る
      </button>
    </div>
  );
};