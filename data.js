const SETS = [
  ["SV1S","スカーレットex"],
  ["SV1V","バイオレットex"],
  ["SV1a","トリプレットビート"],
  ["SV2P","スノーハザード"],
  ["SV2D","クレイバースト"],
  ["SV2a","ポケモンカード151"],
  ["SV3","黒炎の支配者"],
  ["SV3a","レイジングサーフ"],
  ["SV4K","古代の咆哮"],
  ["SV4M","未来の一閃"],
  ["SV4a","シャイニートレジャーex"],
  ["SV5K","ワイルドフォース"],
  ["SV5M","サイバージャッジ"],
  ["SV5a","クリムゾンヘイズ"],
  ["SV6","変幻の仮面"],
  ["SV6a","ナイトワンダラー"],
  ["SV7","ステラミラクル"],
  ["SV7a","楽園ドラゴーナ"],
  ["SV8","超電ブレイカー"],
  ["SV8a","テラスタルフェスex"],
  ["SV9","バトルパートナーズ"],
  ["SV9a","熱風のアリーナ"],
  ["SV10","ロケット団の栄光"],
  ["SV11B","ブラックボルト"],
  ["SV11W","ホワイトフレア"]
];

function emptyCards(count){
  return Array.from({length: count}, (_, i) => `画像準備中 ${String(i+1).padStart(2,"0")}`);
}
const CARD_IMAGES = {
  "SV1S スカーレットex|AR|オリーニョ":"images/sv/sv1s-079-olynyo.webp",
  "SV1S スカーレットex|AR|グレンアルマ":"images/sv/sv1s-080-gurenarma.webp",
  "SV1S スカーレットex|AR|ウミディグダ":"images/sv/sv1s-081-umidigda.webp",
  "SV1S スカーレットex|AR|ヘイラッシャ":"images/sv/sv1s-082-heirassha.webp",
  "SV1S スカーレットex|AR|ラルトス":"images/sv/sv1s-083-ralts.webp",
  "SV1S スカーレットex|AR|キルリア":"images/sv/sv1s-084-kirlia.webp",
  "SV1S スカーレットex|AR|パピモッチ":"images/sv/sv1s-085-papimocchi.webp",
  "SV1S スカーレットex|AR|リオル":"images/sv/sv1s-086-riolu.webp",
  "SV1S スカーレットex|AR|メグロコ":"images/sv/sv1s-087-meguroko.webp",
  "SV1S スカーレットex|AR|ガケガニ":"images/sv/sv1s-088-gakegani.webp",
  "SV1S スカーレットex|AR|ドドゲザン":"images/sv/sv1s-089-dodogezan.webp",
  "SV1S スカーレットex|AR|ムックル":"images/sv/sv1s-090-mukkuru.webp",

  "SV1S スカーレットex|SR|ギャラドスex":"images/sv/sv1s-091-gyarados-ex.webp",
  "SV1S スカーレットex|SR|サーナイトex":"images/sv/sv1s-092-sarnaite-ex-sr.webp",
  "SV1S スカーレットex|SR|イダイナキバex":"images/sv/sv1s-093-idainakiba-ex-sr.webp",
  "SV1S スカーレットex|SR|コライドンex":"images/sv/sv1s-094-koraidon-ex-sr.webp",
  "SV1S スカーレットex|SR|ドクロッグex":"images/sv/sv1s-095-dokurog-ex.webp",
  "SV1S スカーレットex|SR|パフュートンex":"images/sv/sv1s-096-pafyuton-ex.webp",
  "SV1S スカーレットex|SR|ジニア":"images/sv/sv1s-097-jinia-sr.webp",
  "SV1S スカーレットex|SR|スター団のしたっぱ":"images/sv/sv1s-098-star-dan-no-shitappa.webp",
  "SV1S スカーレットex|SR|博士の研究 オーリム博士":"images/sv/sv1s-099-hakase-no-kenkyu.webp",
  "SV1S スカーレットex|SR|ボタン":"images/sv/sv1s-100-botan-sr.webp",

  "SV1S スカーレットex|SAR|サーナイトex":"images/sv/sv1s-101-sarnaite-ex-sar.webp",
  "SV1S スカーレットex|SAR|イダイナキバex":"images/sv/sv1s-102-idainakiba-ex-sar.webp",
  "SV1S スカーレットex|SAR|コライドンex":"images/sv/sv1s-103-koraidon-ex-sar.webp",
  "SV1S スカーレットex|SAR|ジニア":"images/sv/sv1s-104-jinia-sar.webp",
  "SV1S スカーレットex|SAR|ボタン":"images/sv/sv1s-105-botan-sar.webp",

  "SV1S スカーレットex|UR|コライドンex":"images/sv/sv1s-106-koraidon-ex-ur.webp",
  "SV1S スカーレットex|UR|ネストボール":"images/sv/sv1s-107-nest-ball-ur.webp",
  "SV1S スカーレットex|UR|基本闘エネルギー":"images/sv/sv1s-108-fighting-energy-ur.webp",

  "SV1V バイオレットex|AR|タマンチュラ":"images/sv/sv1v-079-tamanchura.webp",
  "SV1V バイオレットex|AR|ノノクラゲ":"images/sv/sv1v-080-nonokurage.webp",
  "SV1V バイオレットex|AR|スコヴィラン":"images/sv/sv1v-081-scovillain.webp",
  "SV1V バイオレットex|AR|ヤドン":"images/sv/sv1v-082-yadon.webp",
  "SV1V バイオレットex|AR|ウデッポウ":"images/sv/sv1v-083-udeppou.webp",
  "SV1V バイオレットex|AR|パチリス":"images/sv/sv1v-084-pachirisu.webp",
  "SV1V バイオレットex|AR|パーモット":"images/sv/sv1v-085-paamot.webp",
  "SV1V バイオレットex|AR|スリープ":"images/sv/sv1v-086-sleepe.webp",
  "SV1V バイオレットex|AR|ボチ":"images/sv/sv1v-087-bochi.webp",
  "SV1V バイオレットex|AR|マフィティフ":"images/sv/sv1v-088-mafityf.webp",
  "SV1V バイオレットex|AR|オトシドリ":"images/sv/sv1v-089-otoshidori.webp",
  "SV1V バイオレットex|AR|ホシガリス":"images/sv/sv1v-090-hoshigarisu.webp",

  "SV1V バイオレットex|SR|ワナイダーex":"images/sv/sv1v-091-wanaider-ex-sr.webp",
  "SV1V バイオレットex|SR|ウインディex":"images/sv/sv1v-092-windie-ex-sr.webp",
  "SV1V バイオレットex|SR|ジバコイルex":"images/sv/sv1v-093-jibacoil-ex-sr.webp",
  "SV1V バイオレットex|SR|ミライドンex":"images/sv/sv1v-094-miraidon-ex-sr.webp",
  "SV1V バイオレットex|SR|ジュペッタex":"images/sv/sv1v-095-jupetta-ex-sr.webp",
  "SV1V バイオレットex|SR|テツノワダチex":"images/sv/sv1v-096-tetsunowadachi-ex-sr.webp",
  "SV1V バイオレットex|SR|カエデ":"images/sv/sv1v-097-kaede-sr.webp",
  "SV1V バイオレットex|SR|博士の研究 フトゥー博士":"images/sv/sv1v-098-hakase-no-kenkyu-futuu-sr.webp",
  "SV1V バイオレットex|SR|ペパー":"images/sv/sv1v-099-pepper-sr.webp",
  "SV1V バイオレットex|SR|ミモザ":"images/sv/sv1v-100-mimosa-sr.webp",

  "SV1V バイオレットex|SAR|ワナイダーex":"images/sv/sv1v-101-wanaider-ex-sar.webp",
  "SV1V バイオレットex|SAR|ミライドンex":"images/sv/sv1v-102-miraidon-ex-sar.webp",
  "SV1V バイオレットex|SAR|テツノワダチex":"images/sv/sv1v-103-tetsunowadachi-ex-sar.webp",
  "SV1V バイオレットex|SAR|ペパー":"images/sv/sv1v-104-pepper-sar.webp",
  "SV1V バイオレットex|SAR|ミモザ":"images/sv/sv1v-105-mimosa-sar.webp",

   "SV1a トリプレットビート|SAR|マスカーニャex":"images/sv/sv1a-mascarna-ex-sar.webp",
  "SV1a トリプレットビート|SAR|ラウドボーンex":"images/sv/sv1a-loudbone-ex-sar.webp",
  "SV1a トリプレットビート|SAR|ウェーニバルex":"images/sv/sv1a-wanival-ex-sar.webp",
  "SV1a トリプレットビート|SAR|キハダ":"images/sv/sv1a-kihada-sar.webp",
  "SV1a トリプレットビート|SAR|ボスの指令 ゲーチス":"images/sv/sv1a-boss-gechisu-sar.webp",
  "SV2D クレイバースト|SAR|イーユイex":"images/sv/sv2d-iiyui-ex-sar.webp",
  "SV2D クレイバースト|SAR|デカヌチャンex":"images/sv/sv2d-dekanuchan-ex-sar.webp",
  "SV2D クレイバースト|SAR|ディンルーex":"images/sv/sv2d-dinlu-ex-sar.webp",
  "SV2D クレイバースト|SAR|サワロ":"images/sv/sv2d-sawaro-sar.webp",
  "SV2D クレイバースト|SAR|ナンジャモ":"images/sv/sv2d-nanjamo-sar.webp",
  "SV2P スノーハザード|SAR|チオンジェンex":"images/sv/sv2p-chionjen-ex-sar.webp",
  "SV2P スノーハザード|SAR|パオジアンex":"images/sv/sv2p-paodjian-ex-sar.webp",
  "SV2P スノーハザード|SAR|イキリンコex":"images/sv/sv2p-ikirinko-ex-sar.webp",
  "SV2P スノーハザード|SAR|グルーシャ":"images/sv/sv2p-grusha-sar.webp",
  "SV2P スノーハザード|SAR|ピーニャ":"images/sv/sv2p-pinya-sar.webp",
  "SV2a ポケモンカード151|SAR|フシギバナex":"images/sv/sv2a-fushigibana-ex-sar.webp",
  "SV2a ポケモンカード151|SAR|リザードンex":"images/sv/sv2a-lizardon-ex-sar.webp",
  "SV2a ポケモンカード151|SAR|カメックスex":"images/sv/sv2a-kamex-ex-sar.webp",
  "SV2a ポケモンカード151|SAR|フーディンex":"images/sv/sv2a-foodin-ex-sar.webp",
  "SV2a ポケモンカード151|SAR|サンダーex":"images/sv/sv2a-thunder-ex-sar.webp",
  "SV2a ポケモンカード151|SAR|ミュウex":"images/sv/sv2a-mew-ex-sar.webp",
  "SV2a ポケモンカード151|SAR|エリカの招待":"images/sv/sv2a-erika-no-shoutai-sar.webp",
  "SV2a ポケモンカード151|SAR|サカキのカリスマ":"images/sv/sv2a-sakaki-no-charisma-sar.webp",
  "SV3 黒炎の支配者|SAR|コオリッポex":"images/sv/sv3-koorippo-ex-sar.webp",
  "SV3 黒炎の支配者|SAR|リザードンex":"images/sv/sv3-lizardon-ex-sar.webp",
  "SV3 黒炎の支配者|SAR|ブロロロームex":"images/sv/sv3-brororoom-ex-sar.webp",
  "SV3 黒炎の支配者|SAR|ピジョットex":"images/sv/sv3-pigeot-ex-sar.webp",
  "SV3 黒炎の支配者|SAR|オモダカ":"images/sv/sv3-omodaka-sar.webp",
  "SV3 黒炎の支配者|SAR|ポピー":"images/sv/sv3-poppy-sar.webp",
  "SV3a レイジングサーフ|SAR|ガブリアスex":"images/sv/sv3a-gaburias-ex-sar.webp",
  "SV3a レイジングサーフ|SAR|カプ・コケコex":"images/sv/sv3a-kapu-kokeko-ex-sar.webp",
  "SV3a レイジングサーフ|SAR|サーフゴーex":"images/sv/sv3a-surfgo-ex-sar.webp",
  "SV3a レイジングサーフ|SAR|チリ":"images/sv/sv3a-chili-sar.webp",
  "SV3a レイジングサーフ|SAR|パラソルおねえさん":"images/sv/sv3a-parasol-oneesan-sar.webp",
  "SV4M 未来の一閃|SAR|テツノカイナex":"images/sv/sv4m-tetsunokaina-ex-sar.webp",
  "SV4M 未来の一閃|SAR|テツノブジンex":"images/sv/sv4m-tetsunobujin-ex-sar.webp",
  "SV4M 未来の一閃|SAR|チルタリスex":"images/sv/sv4m-tyltalis-ex-sar.webp",
  "SV4M 未来の一閃|SAR|フトゥー博士のシナリオ":"images/sv/sv4m-futuu-scenario-sar.webp",
  "SV4M 未来の一閃|SAR|リップ":"images/sv/sv4m-lip-sar.webp",
  "SV4K 古代の咆哮|SAR|グソクムシャex":"images/sv/sv4k-gusokumusha-ex-sar.webp",
  "SV4K 古代の咆哮|SAR|スナノケガワex":"images/sv/sv4k-sunanokegawa-ex-sar.webp",
  "SV4K 古代の咆哮|SAR|トドロクツキex":"images/sv/sv4k-todorokutsuki-ex-sar.webp",
  "SV4K 古代の咆哮|SAR|オーリム博士の気迫":"images/sv/sv4k-orim-kihaku-sar.webp",
  "SV4K 古代の咆哮|SAR|メロコ":"images/sv/sv4k-meloco-sar.webp",
  "SV4a シャイニートレジャーex|SAR|ミュウex":"images/sv/sv4a-mew-ex-sar.webp",
  "SV4a シャイニートレジャーex|SAR|サーナイトex":"images/sv/sv4a-sarnaite-ex-sar.webp",
  "SV4a シャイニートレジャーex|SAR|リザードンex":"images/sv/sv4a-lizardon-ex-sar.webp",
  "SV4a シャイニートレジャーex|SAR|ナンジャモ":"images/sv/sv4a-nanjamo-sar.webp",
  "SV4a シャイニートレジャーex|SAR|ネモ":"images/sv/sv4a-nemo-sar.webp",
  "SV4a シャイニートレジャーex|SAR|ネルケ":"images/sv/sv4a-nelke-sar.webp",
  "SV4a シャイニートレジャーex|SAR|ペパー":"images/sv/sv4a-pepper-sar.webp",
  "SV4a シャイニートレジャーex|SAR|ボタン":"images/sv/sv4a-botan-sar.webp",
  "SV5M サイバージャッジ|SAR|テツノイサハex":"images/sv/sv5m-tetsunoisaha-ex-sar.webp",
  "SV5M サイバージャッジ|SAR|テツノカシラex":"images/sv/sv5m-tetsunokashira-ex-sar.webp",
  "SV5M サイバージャッジ|SAR|テツノイワオex":"images/sv/sv5m-tetsunoiwao-ex-sar.webp",
  "SV5M サイバージャッジ|SAR|セイジ":"images/sv/sv5m-seiji-sar.webp",
  "SV5M サイバージャッジ|SAR|ベルのまごころ":"images/sv/sv5m-bell-no-magokoro-sar.webp",
  "SV5K ワイルドフォース|SAR|ウガツホムラex":"images/sv/sv5k-ugatsuhomura-ex-sar.webp",
  "SV5K ワイルドフォース|SAR|ウネルミナモex":"images/sv/sv5k-unelminamo-ex-sar.webp",
  "SV5K ワイルドフォース|SAR|タケルライコex":"images/sv/sv5k-takeruraiko-ex-sar.webp",
  "SV5K ワイルドフォース|SAR|ビワ":"images/sv/sv5k-biwa-sar.webp",
  "SV5K ワイルドフォース|SAR|マツバの確信":"images/sv/sv5k-matsuba-no-kakushin-sar.webp",
  "SV5a クリムゾンヘイズ|SAR|ヤバソチャex":"images/sv/sv5a-yabasocha-ex-sar.webp",
  "SV5a クリムゾンヘイズ|SAR|ゲッコウガex":"images/sv/sv5a-gekkouga-ex-sar.webp",
  "SV5a クリムゾンヘイズ|SAR|ガチグマ アカツキex":"images/sv/sv5a-gachiguma-akatsuki-ex-sar.webp",
  "SV5a クリムゾンヘイズ|SAR|サザレ":"images/sv/sv5a-sazare-sar.webp",
  "SV5a クリムゾンヘイズ|SAR|スイレンのお世話":"images/sv/sv5a-suiren-no-osewa-sar.webp",
  "SV6 変幻の仮面|SAR|オーガポンみどりのめんex":"images/sv/sv6-ogerpon-midori-ex-sar.webp",
  "SV6 変幻の仮面|SAR|オーガポンかまどのめんex":"images/sv/sv6-ogerpon-kamado-ex-sar.webp",
  "SV6 変幻の仮面|SAR|オーガポンいどのめんex":"images/sv/sv6-ogerpon-ido-ex-sar.webp",
  "SV6 変幻の仮面|SAR|オーガポンいしずえのめんex":"images/sv/sv6-ogerpon-ishizue-ex-sar.webp",
  "SV6 変幻の仮面|SAR|ゼイユ":"images/sv/sv6-zeiyu-sar.webp",
  "SV6 変幻の仮面|SAR|スグリ":"images/sv/sv6-suguri-sar.webp",
  "SV6a ナイトワンダラー|SAR|モモワロウex":"images/sv/sv6a-momowarou-ex-sar.webp",
  "SV6a ナイトワンダラー|SAR|キチキギスex":"images/sv/sv6a-kichikigisu-ex-sar.webp",
  "SV6a ナイトワンダラー|SAR|アンズ":"images/sv/sv6a-anzu-sar.webp",
  "SV6a ナイトワンダラー|SAR|カシオペア":"images/sv/sv6a-cassiopeia-sar.webp",
  "SV6a ナイトワンダラー|SAR|モモワロウ":"images/sv/sv6a-momowarou-sar.webp",
  "SV7 ステラミラクル|SAR|カミツオロチex":"images/sv/sv7-kamitsuorochi-ex-sar.webp",
  "SV7 ステラミラクル|SAR|デンチュラex":"images/sv/sv7-denchura-ex-sar.webp",
  "SV7 ステラミラクル|SAR|バウッツェルex":"images/sv/sv7-bowtzel-ex-sar.webp",
  "SV7 ステラミラクル|SAR|テラパゴスex":"images/sv/sv7-terapagos-ex-sar.webp",
  "SV7 ステラミラクル|SAR|タロ":"images/sv/sv7-taro-sar.webp",
  "SV7 ステラミラクル|SAR|ブライア":"images/sv/sv7-briar-sar.webp",
  "SV7a 楽園ドラゴーナ|SAR|ラティアスex":"images/sv/sv7a-latias-ex-sar.webp",
  "SV7a 楽園ドラゴーナ|SAR|ブリジュラスex":"images/sv/sv7a-briduras-ex-sar.webp",
  "SV7a 楽園ドラゴーナ|SAR|アローラ ナッシーex":"images/sv/sv7a-alola-nassy-ex-sar.webp",
  "SV7a 楽園ドラゴーナ|SAR|カキツバタ":"images/sv/sv7a-kakitsubata-sar.webp",
  "SV7a 楽園ドラゴーナ|SAR|ルチアのアピール":"images/sv/sv7a-luchia-appeal-sar.webp",
  "SV8 超電ブレイカー|SAR|アイアントex":"images/sv/sv8-aiant-ex-sar.webp",
  "SV8 超電ブレイカー|SAR|ミロカロスex":"images/sv/sv8-milokaross-ex-sar.webp",
  "SV8 超電ブレイカー|SAR|ピカチュウex":"images/sv/sv8-pikachu-ex-sar.webp",
  "SV8 超電ブレイカー|SAR|サザンドラex":"images/sv/sv8-sazandora-ex-sar.webp",
  "SV8 超電ブレイカー|SAR|シトロンの機転":"images/sv/sv8-citron-kiten-sar.webp",
  "SV8 超電ブレイカー|SAR|ミカンのまなざし":"images/sv/sv8-mikan-manazashi-sar.webp",
  "SV8a テラスタルフェスex|SAR|リーフィアex":"images/sv/sv8a-leafia-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|オーガポン みどりのめんex":"images/sv/sv8a-ogerpon-midori-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|ブースターex":"images/sv/sv8a-booster-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|ソウブレイズex":"images/sv/sv8a-soublades-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|オーガポン かまどのめんex":"images/sv/sv8a-ogerpon-kamado-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|シャワーズex":"images/sv/sv8a-showers-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|グレイシアex":"images/sv/sv8a-glacia-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|イルカマンex":"images/sv/sv8a-irukaman-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|オーガポン いどのめんex":"images/sv/sv8a-ogerpon-ido-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|サンダースex":"images/sv/sv8a-thunders-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|テツノカイナex":"images/sv/sv8a-tetsunokaina-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|エーフィex":"images/sv/sv8a-eifie-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|ニンフィアex":"images/sv/sv8a-nymphia-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|テツノブジンex":"images/sv/sv8a-tetsunobujin-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|テツノカシラex":"images/sv/sv8a-tetsunokashira-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|スナノケガワex":"images/sv/sv8a-sunanokegawa-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|オーガポン いしずえのめんex":"images/sv/sv8a-ogerpon-ishizue-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|ブラッキーex":"images/sv/sv8a-blacky-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|トドロクツキex":"images/sv/sv8a-todorokutsuki-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|モモワロウex":"images/sv/sv8a-momowarou-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|サーフゴーex":"images/sv/sv8a-surfgo-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|ドラパルトex":"images/sv/sv8a-dragapult-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|タケルライコex":"images/sv/sv8a-takeruraiko-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|イーブイex":"images/sv/sv8a-eevee-ex-224-sar.webp",
  "SV8a テラスタルフェスex|SAR|イーブイex":"images/sv/sv8a-eevee-ex-225-sar.webp",
  "SV8a テラスタルフェスex|SAR|ガチグマ アカツキex":"images/sv/sv8a-gachiguma-akatsuki-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|テラパゴスex":"images/sv/sv8a-terapagos-ex-sar.webp",
  "SV8a テラスタルフェスex|SAR|アカマツ":"images/sv/sv8a-akamatsu-sar.webp",
  "SV8a テラスタルフェスex|SAR|アンズの秘技":"images/sv/sv8a-anzu-higi-sar.webp",
  "SV8a テラスタルフェスex|SAR|カキツバタ":"images/sv/sv8a-kakitsubata-sar.webp",
  "SV8a テラスタルフェスex|SAR|スグリ":"images/sv/sv8a-suguri-sar.webp",
  "SV8a テラスタルフェスex|SAR|タロ":"images/sv/sv8a-taro-sar.webp",
  "SV8a テラスタルフェスex|SAR|ネリネ":"images/sv/sv8a-nerine-sar.webp",
  "SV9 バトルパートナーズ|SAR|ボルケニオンex":"images/sv/sv9-volcanion-ex-sar.webp",
  "SV9 バトルパートナーズ|SAR|ナンジャモのハラバリーex":"images/sv/sv9-nanjamo-harabary-ex-sar.webp",
  "SV9 バトルパートナーズ|SAR|リーリエのピッピex":"images/sv/sv9-lillie-pippi-ex-sar.webp",
  "SV9 バトルパートナーズ|SAR|Nのゾロアークex":"images/sv/sv9-n-zoroark-ex-sar.webp",
  "SV9 バトルパートナーズ|SAR|ホップのザシアンex":"images/sv/sv9-hop-zacian-ex-sar.webp",
  "SV9 バトルパートナーズ|SAR|ボーマンダex":"images/sv/sv9-bohmenda-ex-sar.webp",
  "SV9a 熱風のアリーナ|SAR|メガヤンマex":"images/sv/sv9a-megayanma-ex-sar.webp",
  "SV9a 熱風のアリーナ|SAR|ヒビキのホウオウex":"images/sv/sv9a-hibiki-hooh-ex-sar.webp",
  "SV9a 熱風のアリーナ|SAR|シロナのガブリアスex":"images/sv/sv9a-shirona-gaburias-ex-sar.webp",
  "SV9a 熱風のアリーナ|SAR|ペパーのマフィティフex":"images/sv/sv9a-pepper-mafityf-ex-sar.webp",
  "SV9a 熱風のアリーナ|SAR|ヒビキの冒険":"images/sv/sv9a-hibiki-bouken-sar.webp",
  "SV10 ロケット団の栄光|SAR|ロケット団のファイヤーex":"images/sv/sv10-rocket-fire-ex-sar.webp",
  "SV10 ロケット団の栄光|SAR|ロケット団のミュウツーex":"images/sv/sv10-rocket-mewtwo-ex-sar.webp",
  "SV10 ロケット団の栄光|SAR|ロケット団のニドキングex":"images/sv/sv10-rocket-nidoking-ex-sar.webp",
  "SV10 ロケット団の栄光|SAR|ロケット団のクロバットex":"images/sv/sv10-rocket-crobat-ex-sar.webp",
  "SV10 ロケット団の栄光|SAR|ロケット団のアテナ":"images/sv/sv10-rocket-athena-sar.webp",
  "SV10 ロケット団の栄光|SAR|ロケット団のサカキ":"images/sv/sv10-rocket-sakaki-sar.webp",
  "SV11B ブラックボルト|SAR|ジャローダex":"images/sv/sv11b-jaroda-ex-sar.webp",
  "SV11B ブラックボルト|SAR|キュレムex":"images/sv/sv11b-kyurem-ex-sar.webp",
  "SV11B ブラックボルト|SAR|ゼクロムex":"images/sv/sv11b-zekrom-ex-sar.webp",
  "SV11B ブラックボルト|SAR|メロエッタex":"images/sv/sv11b-meloetta-ex-sar.webp",
  "SV11B ブラックボルト|SAR|ドリュウズex":"images/sv/sv11b-doryuzu-ex-sar.webp",
  "SV11B ブラックボルト|SAR|ゲノセクトex":"images/sv/sv11b-genesect-ex-sar.webp",
  "SV11B ブラックボルト|SAR|Nの筋書き":"images/sv/sv11b-n-sujigaki-sar.webp",
  "SV11W ホワイトフレア|SAR|エルフーンex":"images/sv/sv11w-elfuun-ex-sar.webp",
  "SV11W ホワイトフレア|SAR|レシラムex":"images/sv/sv11w-reshiram-ex-sar.webp",
  "SV11W ホワイトフレア|SAR|ケルディオex":"images/sv/sv11w-keldeo-ex-sar.webp",
  "SV11W ホワイトフレア|SAR|ブルンゲルex":"images/sv/sv11w-burungel-ex-sar.webp",
  "SV11W ホワイトフレア|SAR|サザンドラex":"images/sv/sv11w-sazandora-ex-sar.webp",
  "SV11W ホワイトフレア|SAR|バッフロンex":"images/sv/sv11w-buffron-ex-sar.webp",
  "SV11W ホワイトフレア|SAR|トウコ":"images/sv/sv11w-touko-sar.webp",
  "SV1V バイオレットex|UR|ミライドンex":"images/sv/sv1v-106-miraidon-ex-ur.webp",
  "SV1V バイオレットex|UR|ふしぎなアメ":"images/sv/sv1v-107-fushigina-ame-ur.webp",
  "SV1V バイオレットex|UR|基本雷エネルギー":"images/sv/sv1v-108-lightning-energy-ur.webp",
  
  "SV1a トリプレットビート|AR|トロピウス":"images/sv/sv1a-074-tropius.webp",
  "SV1a トリプレットビート|AR|ニャオハ":"images/sv/sv1a-075-nyahoja.webp",
  "SV1a トリプレットビート|AR|ニャローテ":"images/sv/sv1a-076-nyarote.webp",
  "SV1a トリプレットビート|AR|カエンジシ":"images/sv/sv1a-077-kaenjishi.webp",
  "SV1a トリプレットビート|AR|ホゲータ":"images/sv/sv1a-078-hogeta.webp",
  "SV1a トリプレットビート|AR|アチゲータ":"images/sv/sv1a-079-achigator.webp",
  "SV1a トリプレットビート|AR|コイキング":"images/sv/sv1a-080-koiking.webp",
  "SV1a トリプレットビート|AR|クワッス":"images/sv/sv1a-081-kuwassu.webp",
  "SV1a トリプレットビート|AR|ウェルカモ":"images/sv/sv1a-082-welkamo.webp",
  "SV1a トリプレットビート|AR|ムウマージ":"images/sv/sv1a-083-mumage.webp",
  "SV1a トリプレットビート|AR|パルデア ケンタロス":"images/sv/sv1a-084-paldea-kentauros.webp",
  "SV1a トリプレットビート|AR|パルデア ウパー":"images/sv/sv1a-085-paldea-wooper.webp",
  "SV2D クレイバースト|AR|ヘラクロス":"images/sv/sv2d-072-heracross.webp",
  "SV2D クレイバースト|AR|ヒノヤコマ":"images/sv/sv2d-073-hinoyakoma.webp",
  "SV2D クレイバースト|AR|ライチュウ":"images/sv/sv2d-074-raichu.webp",
  "SV2D クレイバースト|AR|スナバァ":"images/sv/sv2d-075-sunabaa.webp",
  "SV2D クレイバースト|AR|カヌチャン":"images/sv/sv2d-076-kanuchan.webp",
  "SV2D クレイバースト|AR|ナカヌチャン":"images/sv/sv2d-077-nakanuchan.webp",
  "SV2D クレイバースト|AR|コジオ":"images/sv/sv2d-078-kojio.webp",
  "SV2D クレイバースト|AR|バンギラス":"images/sv/sv2d-079-bangiras.webp",
  "SV2D クレイバースト|AR|タギングル":"images/sv/sv2d-080-taggingul.webp",
  "SV2D クレイバースト|AR|イッカネズミ":"images/sv/sv2d-081-ikkanezumi.webp",
  "SV2D クレイバースト|AR|カラミンゴ":"images/sv/sv2d-082-karamingo.webp",
  "SV2D クレイバースト|AR|リキキリン":"images/sv/sv2d-083-rikikirin.webp",
  "SV2P スノーハザード|AR|アノクサ":"images/sv/sv2p-072-anokusa.webp",
  "SV2P スノーハザード|AR|マリル":"images/sv/sv2p-073-maril.webp",
  "SV2P スノーハザード|AR|コオリッポ":"images/sv/sv2p-074-koorippo.webp",
  "SV2P スノーハザード|AR|セビエ":"images/sv/sv2p-075-sebie.webp",
  "SV2P スノーハザード|AR|セゴール":"images/sv/sv2p-076-segohru.webp",
  "SV2P スノーハザード|AR|セグレイブ":"images/sv/sv2p-077-seglaive.webp",
  "SV2P スノーハザード|AR|ゴチミル":"images/sv/sv2p-078-gothimiru.webp",
  "SV2P スノーハザード|AR|ベラカス":"images/sv/sv2p-079-beracas.webp",
  "SV2P スノーハザード|AR|ウソッキー":"images/sv/sv2p-080-usokkie.webp",
  "SV2P スノーハザード|AR|ミミズズ":"images/sv/sv2p-081-mimizuzu.webp",
  "SV2P スノーハザード|AR|ココガラ":"images/sv/sv2p-082-kokogara.webp",
  "SV2P スノーハザード|AR|ノココッチ":"images/sv/sv2p-083-nokokocchi.webp",
  "SV2a ポケモンカード151|AR|フシギダネ":"images/sv/sv2a-166-fushigidane.webp",
  "SV2a ポケモンカード151|AR|フシギソウ":"images/sv/sv2a-167-fushigisou.webp",
  "SV2a ポケモンカード151|AR|ヒトカゲ":"images/sv/sv2a-168-hitokage.webp",
  "SV2a ポケモンカード151|AR|リザード":"images/sv/sv2a-169-lizardo.webp",
  "SV2a ポケモンカード151|AR|ゼニガメ":"images/sv/sv2a-170-zenigame.webp",
  "SV2a ポケモンカード151|AR|カメール":"images/sv/sv2a-171-kameil.webp",
  "SV2a ポケモンカード151|AR|キャタピー":"images/sv/sv2a-172-caterpie.webp",
  "SV2a ポケモンカード151|AR|ピカチュウ":"images/sv/sv2a-173-pikachu.webp",
  "SV2a ポケモンカード151|AR|ニドキング":"images/sv/sv2a-174-nidoking.webp",
  "SV2a ポケモンカード151|AR|コダック":"images/sv/sv2a-175-koduck.webp",
  "SV2a ポケモンカード151|AR|ニョロゾ":"images/sv/sv2a-176-nyorozo.webp",
  "SV2a ポケモンカード151|AR|ゴーリキー":"images/sv/sv2a-177-goriky.webp",
  "SV2a ポケモンカード151|AR|モンジャラ":"images/sv/sv2a-178-mongjara.webp",
  "SV2a ポケモンカード151|AR|バリヤード":"images/sv/sv2a-179-bariyado.webp",
  "SV2a ポケモンカード151|AR|オムナイト":"images/sv/sv2a-180-omnite.webp",
  "SV2a ポケモンカード151|AR|カビゴン":"images/sv/sv2a-181-kabigon.webp",
  "SV2a ポケモンカード151|AR|ハクリュー":"images/sv/sv2a-182-hakuryu.webp",
  "SV2a ポケモンカード151|AR|ミュウツー":"images/sv/sv2a-183-mewtwo.webp",
  "SV3 黒炎の支配者|AR|クサイハナ":"images/sv/sv3-109-kusaihana.webp",
  "SV3 黒炎の支配者|AR|キュウコン":"images/sv/sv3-110-kyukon.webp",
  "SV3 黒炎の支配者|AR|イルカマン":"images/sv/sv3-111-irukaman.webp",
  "SV3 黒炎の支配者|AR|ハラバリー":"images/sv/sv3-112-harabary.webp",
  "SV3 黒炎の支配者|AR|ピィ":"images/sv/sv3-113-pii.webp",
  "SV3 黒炎の支配者|AR|ヨーギラス":"images/sv/sv3-114-yogiras.webp",
  "SV3 黒炎の支配者|AR|デルビル":"images/sv/sv3-115-derubiru.webp",
  "SV3 黒炎の支配者|AR|ハッサム":"images/sv/sv3-116-hassam.webp",
  "SV3 黒炎の支配者|AR|ブロロン":"images/sv/sv3-117-broron.webp",
  "SV3 黒炎の支配者|AR|ポッポ":"images/sv/sv3-118-poppo.webp",
  "SV3 黒炎の支配者|AR|ピジョン":"images/sv/sv3-119-pigeon.webp",
  "SV3 黒炎の支配者|AR|グルトン":"images/sv/sv3-120-guruton.webp",
  "SV3a レイジングサーフ|AR|ユキワラシ":"images/sv/sv3a-063-yukiwarashi.webp",
  "SV3a レイジングサーフ|AR|タマンタ":"images/sv/sv3a-064-tamanta.webp",
  "SV3a レイジングサーフ|AR|プラスル":"images/sv/sv3a-065-plusle.webp",
  "SV3a レイジングサーフ|AR|マイナン":"images/sv/sv3a-066-minun.webp",
  "SV3a レイジングサーフ|AR|バチュル":"images/sv/sv3a-067-bachuru.webp",
  "SV3a レイジングサーフ|AR|コレクレー":"images/sv/sv3a-068-korekure.webp",
  "SV3a レイジングサーフ|AR|グラードン":"images/sv/sv3a-069-groudon.webp",
  "SV3a レイジングサーフ|AR|メテノ":"images/sv/sv3a-070-meteno.webp",
  "SV3a レイジングサーフ|AR|イベルタル":"images/sv/sv3a-071-yveltal.webp",
  "SV3a レイジングサーフ|AR|ナットレイ":"images/sv/sv3a-072-natrey.webp",
  "SV3a レイジングサーフ|AR|ギルガルド":"images/sv/sv3a-073-gillgard.webp",
  "SV3a レイジングサーフ|AR|モトトカゲ":"images/sv/sv3a-074-mototokage.webp",
  "SV4M 未来の一閃|AR|レドームシ":"images/sv/sv4m-067-redomushi.webp",
  "SV4M 未来の一閃|AR|リククラゲ":"images/sv/sv4m-068-rikukurage.webp",
  "SV4M 未来の一閃|AR|テツノドクガ":"images/sv/sv4m-069-tetsunodokuga.webp",
  "SV4M 未来の一閃|AR|バニリッチ":"images/sv/sv4m-070-baniricchi.webp",
  "SV4M 未来の一閃|AR|テツノツツミ":"images/sv/sv4m-071-tetsunotsutsumi.webp",
  "SV4M 未来の一閃|AR|シママ":"images/sv/sv4m-072-shimama.webp",
  "SV4M 未来の一閃|AR|クエスパトラ":"images/sv/sv4m-073-quespatra.webp",
  "SV4M 未来の一閃|AR|ハガネール":"images/sv/sv4m-074-haganeil.webp",
  "SV4M 未来の一閃|AR|エイパム":"images/sv/sv4m-075-aipom.webp",
  "SV4M 未来の一閃|AR|チルット":"images/sv/sv4m-076-chirutto.webp",
  "SV4M 未来の一閃|AR|ポリゴンZ":"images/sv/sv4m-077-porigon-z.webp",
  "SV4M 未来の一閃|AR|テツノコウベ":"images/sv/sv4m-078-tetsunokoube.webp",
  "SV4K 古代の咆哮|AR|イワパレス":"images/sv/sv4k-067-iwaparesu.webp",
  "SV4K 古代の咆哮|AR|ブビィ":"images/sv/sv4k-068-bubii.webp",
  "SV4K 古代の咆哮|AR|コソクムシ":"images/sv/sv4k-069-kosokumushi.webp",
  "SV4K 古代の咆哮|AR|ミガルーサ":"images/sv/sv4k-070-migarusa.webp",
  "SV4K 古代の咆哮|AR|サケブシッポ":"images/sv/sv4k-071-sakebushippo.webp",
  "SV4K 古代の咆哮|AR|コジョンド":"images/sv/sv4k-072-kojondo.webp",
  "SV4K 古代の咆哮|AR|キョジオーン":"images/sv/sv4k-073-kyojioon.webp",
  "SV4K 古代の咆哮|AR|チヲハウハネ":"images/sv/sv4k-074-chiwohauhane.webp",
  "SV4K 古代の咆哮|AR|ダストダス":"images/sv/sv4k-075-dustdas.webp",
  "SV4K 古代の咆哮|AR|モルペコ":"images/sv/sv4k-076-morpeko.webp",
  "SV4K 古代の咆哮|AR|アラブルタケ":"images/sv/sv4k-077-arabulutake.webp",
  "SV4K 古代の咆哮|AR|ドゴーム":"images/sv/sv4k-078-dogomu.webp",
  "SV4a シャイニートレジャーex|AR|ウミトリオ":"images/sv/sv4a-341-umitorio.webp",
  "SV4a シャイニートレジャーex|AR|イルカマン":"images/sv/sv4a-342-irukaman.webp",
  "SV4a シャイニートレジャーex|AR|パモ":"images/sv/sv4a-343-pamo.webp",
  "SV4a シャイニートレジャーex|AR|ミミッキュ":"images/sv/sv4a-344-mimikyu.webp",
    "SV5K ワイルドフォース|AR|ハヤシガメ":"images/sv/sv5k-071-hayashigame.webp",
  "SV5K ワイルドフォース|AR|ユキハミ":"images/sv/sv5k-072-yukihami.webp",
  "SV5K ワイルドフォース|AR|ドーミラー":"images/sv/sv5k-073-domirror.webp",
  "SV5K ワイルドフォース|AR|ランクルス":"images/sv/sv5k-074-rankurusu.webp",
  "SV5K ワイルドフォース|AR|ハバタクカミ":"images/sv/sv5k-075-habatakukami.webp",
  "SV5K ワイルドフォース|AR|ジーランス":"images/sv/sv5k-076-jilans.webp",
  "SV5K ワイルドフォース|AR|バンバドロ":"images/sv/sv5k-077-banbadro.webp",
  "SV5K ワイルドフォース|AR|アーボック":"images/sv/sv5k-078-arbok.webp",
  "SV5K ワイルドフォース|AR|ゴース":"images/sv/sv5k-079-ghos.webp",
  "SV5K ワイルドフォース|AR|ペラップ":"images/sv/sv5k-080-perap.webp",
  "SV5K ワイルドフォース|AR|チラーミィ":"images/sv/sv5k-081-chillarmy.webp",
  "SV5K ワイルドフォース|AR|チラチーノ":"images/sv/sv5k-082-chillaccino.webp",
  "SV5M サイバージャッジ|AR|ダーテング":"images/sv/sv5m-071-datengu.webp",
  "SV5M サイバージャッジ|AR|シキジカ":"images/sv/sv5m-072-shikijika.webp",
  "SV5M サイバージャッジ|AR|メブキジカ":"images/sv/sv5m-073-mebukijika.webp",
  "SV5M サイバージャッジ|AR|ニャビー":"images/sv/sv5m-074-nyabby.webp",
  "SV5M サイバージャッジ|AR|デンヂムシ":"images/sv/sv5m-075-dendimushi.webp",
  "SV5M サイバージャッジ|AR|テツノイバラ":"images/sv/sv5m-076-tetsunoibara.webp",
  "SV5M サイバージャッジ|AR|アブリー":"images/sv/sv5m-077-abuly.webp",
  "SV5M サイバージャッジ|AR|ドリュウズ":"images/sv/sv5m-078-doryuzu.webp",
  "SV5M サイバージャッジ|AR|メタグロス":"images/sv/sv5m-079-metagross.webp",
  "SV5M サイバージャッジ|AR|メルタン":"images/sv/sv5m-080-meltan.webp",
  "SV5M サイバージャッジ|AR|ベロリンガ":"images/sv/sv5m-081-beroringa.webp",
  "SV5M サイバージャッジ|AR|ジジーロン":"images/sv/sv5m-082-jijilong.webp",
  "SV5a クリムゾンヘイズ|AR|カイロス":"images/sv/sv5a-066-kairos.webp",
  "SV5a クリムゾンヘイズ|AR|チャデス":"images/sv/sv5a-067-chades.webp",
  "SV5a クリムゾンヘイズ|AR|コータス":"images/sv/sv5a-068-cotoise.webp",
  "SV5a クリムゾンヘイズ|AR|ゴウカザル":"images/sv/sv5a-069-goukazaru.webp",
  "SV5a クリムゾンヘイズ|AR|フィオネ":"images/sv/sv5a-070-phione.webp",
  "SV5a クリムゾンヘイズ|AR|ウッウ":"images/sv/sv5a-071-uulu.webp",
  "SV5a クリムゾンヘイズ|AR|エレザード":"images/sv/sv5a-072-elezard.webp",
  "SV5a クリムゾンヘイズ|AR|ラブトロス":"images/sv/sv5a-073-lovetolos.webp",
  "SV5a クリムゾンヘイズ|AR|ヒスイ ガーディ":"images/sv/sv5a-074-hisui-gardy.webp",
  "SV5a クリムゾンヘイズ|AR|ダイノーズ":"images/sv/sv5a-075-dainose.webp",
  "SV5a クリムゾンヘイズ|AR|カジッチュ":"images/sv/sv5a-076-kajicchu.webp",
  "SV5a クリムゾンヘイズ|AR|イーブイ":"images/sv/sv5a-077-eevee.webp",
  "SV6 変幻の仮面|AR|キマワリ":"images/sv/sv6-101-kimawari.webp",
  "SV6 変幻の仮面|AR|カミッチュ":"images/sv/sv6-102-kamitchu.webp",
  "SV6 変幻の仮面|AR|ユキメノコ":"images/sv/sv6-103-yukimenoko.webp",
  "SV6 変幻の仮面|AR|カイデン":"images/sv/sv6-104-kaiden.webp",
  "SV6 変幻の仮面|AR|チリーン":"images/sv/sv6-105-chirean.webp",
  "SV6 変幻の仮面|AR|マシマシラ":"images/sv/sv6-106-mashimashira.webp",
  "SV6 変幻の仮面|AR|キチキギス":"images/sv/sv6-107-kichikigisu.webp",
  "SV6 変幻の仮面|AR|ドッコラー":"images/sv/sv6-108-dokkorer.webp",
  "SV6 変幻の仮面|AR|イイネイヌ":"images/sv/sv6-109-iineinu.webp",
  "SV6 変幻の仮面|AR|コドラ":"images/sv/sv6-110-kodora.webp",
  "SV6 変幻の仮面|AR|シャリタツ":"images/sv/sv6-111-sharitatsu.webp",
  "SV6 変幻の仮面|AR|ラッキー":"images/sv/sv6-112-lucky.webp",
  "SV6a ナイトワンダラー|AR|カプ・ブルル":"images/sv/sv6a-066-kapu-bulul.webp",
  "SV6a ナイトワンダラー|AR|ヘルガー":"images/sv/sv6a-067-hellgar.webp",
  "SV6a ナイトワンダラー|AR|タッツー":"images/sv/sv6a-068-tattu.webp",
  "SV6a ナイトワンダラー|AR|ヨマワル":"images/sv/sv6a-069-yomawaru.webp",
  "SV6a ナイトワンダラー|AR|サマヨール":"images/sv/sv6a-070-samayouru.webp",
  "SV6a ナイトワンダラー|AR|ヨノワール":"images/sv/sv6a-071-yonoir.webp",
  "SV6a ナイトワンダラー|AR|クレセリア":"images/sv/sv6a-072-cresselia.webp",
  "SV6a ナイトワンダラー|AR|ゾロア":"images/sv/sv6a-073-zorua.webp",
  "SV6a ナイトワンダラー|AR|ゾウドウ":"images/sv/sv6a-074-zoudou.webp",
  "SV6a ナイトワンダラー|AR|オノンド":"images/sv/sv6a-075-onondo.webp",
  "SV6a ナイトワンダラー|AR|ペルシアン":"images/sv/sv6a-076-persian.webp",
  "SV6a ナイトワンダラー|AR|キテルグマ":"images/sv/sv6a-077-kiteruguma.webp",
  "SV7 ステラミラクル|AR|レディアン":"images/sv/sv7-103-ledian.webp",
  "SV7 ステラミラクル|AR|リリーラ":"images/sv/sv7-104-lilyla.webp",
  "SV7 ステラミラクル|AR|バクガメス":"images/sv/sv7-105-bakugames.webp",
  "SV7 ステラミラクル|AR|ラビフット":"images/sv/sv7-106-raboot.webp",
  "SV7 ステラミラクル|AR|ケケンカニ":"images/sv/sv7-107-kekenkani.webp",
  "SV7 ステラミラクル|AR|バチュル":"images/sv/sv7-108-bachuru.webp",
  "SV7 ステラミラクル|AR|ゼラオラ":"images/sv/sv7-109-zeraora.webp",
  "SV7 ステラミラクル|AR|マホミル":"images/sv/sv7-110-mahomil.webp",
  "SV7 ステラミラクル|AR|アサナン":"images/sv/sv7-111-asanan.webp",
  "SV7 ステラミラクル|AR|ゴクリン":"images/sv/sv7-112-gokulin.webp",
  "SV7 ステラミラクル|AR|ブリジュラス":"images/sv/sv7-113-briduras.webp",
  "SV7 ステラミラクル|AR|ヨルノズク":"images/sv/sv7-114-yorunozuku.webp",
  "SV7a 楽園ドラゴーナ|AR|タマタマ":"images/sv/sv7a-065-tamatama.webp",
  "SV7a 楽園ドラゴーナ|AR|マシェード":"images/sv/sv7a-066-mashade.webp",
  "SV7a 楽園ドラゴーナ|AR|ポワルン たいようのすがた":"images/sv/sv7a-067-powalen-taiyou.webp",
  "SV7a 楽園ドラゴーナ|AR|ハギギシリ":"images/sv/sv7a-068-hagigishiri.webp",
  "SV7a 楽園ドラゴーナ|AR|ハルクジラ":"images/sv/sv7a-069-harukujira.webp",
  "SV7a 楽園ドラゴーナ|AR|ラティオス":"images/sv/sv7a-070-latios.webp",
  "SV7a 楽園ドラゴーナ|AR|ビブラーバ":"images/sv/sv7a-071-vibrava.webp",
  "SV7a 楽園ドラゴーナ|AR|タタッコ":"images/sv/sv7a-072-tatakko.webp",
  "SV7a 楽園ドラゴーナ|AR|エアームド":"images/sv/sv7a-073-airmd.webp",
  "SV7a 楽園ドラゴーナ|AR|アップリュー":"images/sv/sv7a-074-applin.webp",
  "SV7a 楽園ドラゴーナ|AR|タルップル":"images/sv/sv7a-075-tarupple.webp",
  "SV7a 楽園ドラゴーナ|AR|ウォーグル":"images/sv/sv7a-076-wargle.webp",
  "SV8 超電ブレイカー|AR|ビビヨン":"images/sv/sv8-107-vivillon.webp",
  "SV8 超電ブレイカー|AR|メラルバ":"images/sv/sv8-108-meraruba.webp",
  "SV8 超電ブレイカー|AR|ソウブレイズ":"images/sv/sv8-109-soulblades.webp",
  "SV8 超電ブレイカー|AR|ヒンバス":"images/sv/sv8-110-hinbass.webp",
  "SV8 超電ブレイカー|AR|タマザラシ":"images/sv/sv8-111-tamazarashi.webp",
  "SV8 超電ブレイカー|AR|レアコイル":"images/sv/sv8-112-rarecoil.webp",
  "SV8 超電ブレイカー|AR|マッギョ":"images/sv/sv8-113-maggyo.webp",
  "SV8 超電ブレイカー|AR|エムリット":"images/sv/sv8-114-emrit.webp",
  "SV8 超電ブレイカー|AR|ゴマゾウ":"images/sv/sv8-115-gomazou.webp",
  "SV8 超電ブレイカー|AR|アローラ ダグトリオ":"images/sv/sv8-116-alola-dugtrio.webp",
  "SV8 超電ブレイカー|AR|ナマケロ":"images/sv/sv8-117-namakero.webp",
  "SV8 超電ブレイカー|AR|カクレオン":"images/sv/sv8-118-kakureon.webp",
  "SV9 バトルパートナーズ|AR|マラカッチ":"images/sv/sv9-101-maracacchi.webp",
  "SV9 バトルパートナーズ|AR|フリーザー":"images/sv/sv9-102-freezer.webp",
  "SV9 バトルパートナーズ|AR|ホエルオー":"images/sv/sv9-103-whaloh.webp",
  "SV9 バトルパートナーズ|AR|ナンジャモのタイカイデン":"images/sv/sv9-104-nanjamo-no-taikaiden.webp",
  "SV9 バトルパートナーズ|AR|リーリエのアブリボン":"images/sv/sv9-105-lillie-no-abulybon.webp",
  "SV9 バトルパートナーズ|AR|ウリムー":"images/sv/sv9-106-urimoo.webp",
  "SV9 バトルパートナーズ|AR|ルガルガン":"images/sv/sv9-107-lugargan.webp",
  "SV9 バトルパートナーズ|AR|Nのゾロア":"images/sv/sv9-108-n-no-zorua.webp",
  "SV9 バトルパートナーズ|AR|Nのレシラム":"images/sv/sv9-109-n-no-reshiram.webp",
  "SV9 バトルパートナーズ|AR|オオタチ":"images/sv/sv9-110-ootachi.webp",
  "SV9 バトルパートナーズ|AR|オンバット":"images/sv/sv9-111-onbat.webp",
  "SV9 バトルパートナーズ|AR|ホップのウールー":"images/sv/sv9-112-hop-no-wooloo.webp",
  "SV9a 熱風のアリーナ|AR|ヤンヤンマ":"images/sv/sv9a-064-yanyanma.webp",
  "SV9a 熱風のアリーナ|AR|シロナのロズレイド":"images/sv/sv9a-065-shirona-no-roserade.webp",
  "SV9a 熱風のアリーナ|AR|シェイミ":"images/sv/sv9a-066-shaymin.webp",
  "SV9a 熱風のアリーナ|AR|イワパレス":"images/sv/sv9a-067-iwaparesu.webp",
  "SV9a 熱風のアリーナ|AR|カミツオロチ":"images/sv/sv9a-068-kamitsuorochi.webp",
  "SV9a 熱風のアリーナ|AR|ギャロップ":"images/sv/sv9a-069-gallop.webp",
  "SV9a 熱風のアリーナ|AR|ヒビキのバクフーン":"images/sv/sv9a-070-hibiki-no-bakphoon.webp",
  "SV9a 熱風のアリーナ|AR|カスミのコダック":"images/sv/sv9a-071-kasumi-no-koduck.webp",
  "SV9a 熱風のアリーナ|AR|カスミのラプラス":"images/sv/sv9a-072-kasumi-no-laplace.webp",
  "SV9a 熱風のアリーナ|AR|ラクライ":"images/sv/sv9a-073-rakurai.webp",
  "SV9a 熱風のアリーナ|AR|ロトム":"images/sv/sv9a-074-rotom.webp",
  "SV9a 熱風のアリーナ|AR|ペパーのヨクバリス":"images/sv/sv9a-075-pepper-no-yokubarisu.webp",
  "SV10 ロケット団の栄光|AR|ロケット団のワナイダー":"images/sv/sv10-099-rocket-dan-no-wanaider.webp",
  "SV10 ロケット団の栄光|AR|ロケット団のヘルガー":"images/sv/sv10-100-rocket-dan-no-hellgar.webp",
  "SV10 ロケット団の栄光|AR|バシャーモ":"images/sv/sv10-101-bursyamo.webp",
  "SV10 ロケット団の栄光|AR|パールル":"images/sv/sv10-102-pearlulu.webp",
  "SV10 ロケット団の栄光|AR|ロケット団のソーナンス":"images/sv/sv10-103-rocket-dan-no-sonans.webp",
  "SV10 ロケット団の栄光|AR|ロケット団のイオルブ":"images/sv/sv10-104-rocket-dan-no-iolb.webp",
  "SV10 ロケット団の栄光|AR|ロケット団のマタドガス":"images/sv/sv10-105-rocket-dan-no-matadogas.webp",
  "SV10 ロケット団の栄光|AR|ロケット団のヤミカラス":"images/sv/sv10-106-rocket-dan-no-yamikarasu.webp",
  "SV10 ロケット団の栄光|AR|ザマゼンタ":"images/sv/sv10-107-zamazenta.webp",
  "SV10 ロケット団の栄光|AR|ロケット団のラッタ":"images/sv/sv10-108-rocket-dan-no-ratta.webp",
  "SV10 ロケット団の栄光|AR|ロケット団のニャース":"images/sv/sv10-109-rocket-dan-no-nyarth.webp",
  "SV10 ロケット団の栄光|AR|ガルーラ":"images/sv/sv10-110-garura.webp",
  "SV11B ブラックボルト|AR|ツタージャ":"images/sv/sv11b-087-ar.webp",
  "SV11B ブラックボルト|AR|ジャノビー":"images/sv/sv11b-088-ar.webp",
  "SV11B ブラックボルト|AR|ヤナップ":"images/sv/sv11b-089-ar.webp",
  "SV11B ブラックボルト|AR|ヤナッキー":"images/sv/sv11b-090-ar.webp",
  "SV11B ブラックボルト|AR|チュリネ":"images/sv/sv11b-091-ar.webp",
  "SV11B ブラックボルト|AR|ドレディア":"images/sv/sv11b-092-ar.webp",
  "SV11B ブラックボルト|AR|マラカッチ":"images/sv/sv11b-093-ar.webp",
  "SV11B ブラックボルト|AR|カブルモ":"images/sv/sv11b-094-ar.webp",
  "SV11B ブラックボルト|AR|タマゲタケ":"images/sv/sv11b-095-ar.webp",
  "SV11B ブラックボルト|AR|モロバレル":"images/sv/sv11b-096-ar.webp",
  "SV11B ブラックボルト|AR|ビクティニ":"images/sv/sv11b-097-ar.webp",
  "SV11B ブラックボルト|AR|ダルマッカ":"images/sv/sv11b-098-ar.webp",
  "SV11B ブラックボルト|AR|ヒヒダルマ":"images/sv/sv11b-099-ar.webp",
  "SV11B ブラックボルト|AR|ヒトモシ":"images/sv/sv11b-100-ar.webp",
  "SV11B ブラックボルト|AR|ランプラー":"images/sv/sv11b-101-ar.webp",
  "SV11B ブラックボルト|AR|シャンデラ":"images/sv/sv11b-102-ar.webp",
  "SV11B ブラックボルト|AR|メラルバ":"images/sv/sv11b-103-ar.webp",
  "SV11B ブラックボルト|AR|ウルガモス":"images/sv/sv11b-104-ar.webp",
  "SV11B ブラックボルト|AR|ヒヤップ":"images/sv/sv11b-105-ar.webp",
  "SV11B ブラックボルト|AR|ヒヤッキー":"images/sv/sv11b-106-ar.webp",
  "SV11B ブラックボルト|AR|オタマロ":"images/sv/sv11b-107-ar.webp",
  "SV11B ブラックボルト|AR|ガマガル":"images/sv/sv11b-108-ar.webp",
  "SV11B ブラックボルト|AR|ガマゲロゲ":"images/sv/sv11b-109-ar.webp",
  "SV11B ブラックボルト|AR|プロトーガ":"images/sv/sv11b-110-ar.webp",
  "SV11B ブラックボルト|AR|アバゴーラ":"images/sv/sv11b-111-ar.webp",
  "SV11B ブラックボルト|AR|ママンボウ":"images/sv/sv11b-112-ar.webp",
  "SV11B ブラックボルト|AR|クマシュン":"images/sv/sv11b-113-ar.webp",
  "SV11B ブラックボルト|AR|ツンベアー":"images/sv/sv11b-114-ar.webp",
  "SV11B ブラックボルト|AR|フリージオ":"images/sv/sv11b-115-ar.webp",
  "SV11B ブラックボルト|AR|エモンガ":"images/sv/sv11b-116-ar.webp",
  "SV11B ブラックボルト|AR|シビシラス":"images/sv/sv11b-117-ar.webp",
  "SV11B ブラックボルト|AR|シビビール":"images/sv/sv11b-118-ar.webp",
  "SV11B ブラックボルト|AR|シビルドン":"images/sv/sv11b-119-ar.webp",
  "SV11B ブラックボルト|AR|ボルトロス":"images/sv/sv11b-120-ar.webp",
  "SV11B ブラックボルト|AR|ムンナ":"images/sv/sv11b-121-ar.webp",
  "SV11B ブラックボルト|AR|ムシャーナ":"images/sv/sv11b-122-ar.webp",
  "SV11B ブラックボルト|AR|ユニラン":"images/sv/sv11b-123-ar.webp",
  "SV11B ブラックボルト|AR|ダブラン":"images/sv/sv11b-124-ar.webp",
  "SV11B ブラックボルト|AR|ランクルス":"images/sv/sv11b-125-ar.webp",
  "SV11B ブラックボルト|AR|リグレー":"images/sv/sv11b-126-ar.webp",
  "SV11B ブラックボルト|AR|オーベム":"images/sv/sv11b-127-ar.webp",
  "SV11B ブラックボルト|AR|ゴビット":"images/sv/sv11b-128-ar.webp",
  "SV11B ブラックボルト|AR|ゴルーグ":"images/sv/sv11b-129-ar.webp",
  "SV11B ブラックボルト|AR|モグリュー":"images/sv/sv11b-130-ar.webp",
  "SV11B ブラックボルト|AR|ドッコラー":"images/sv/sv11b-131-ar.webp",
  "SV11B ブラックボルト|AR|ドテッコツ":"images/sv/sv11b-132-ar.webp",
  "SV11B ブラックボルト|AR|ローブシン":"images/sv/sv11b-133-ar.webp",
  "SV11B ブラックボルト|AR|ナゲキ":"images/sv/sv11b-134-ar.webp",
  "SV11B ブラックボルト|AR|イシズマイ":"images/sv/sv11b-135-ar.webp",
  "SV11B ブラックボルト|AR|イワパレス":"images/sv/sv11b-136-ar.webp",
  "SV11B ブラックボルト|AR|ランドロス":"images/sv/sv11b-137-ar.webp",
  "SV11B ブラックボルト|AR|フシデ":"images/sv/sv11b-138-ar.webp",
  "SV11B ブラックボルト|AR|ホイーガ":"images/sv/sv11b-139-ar.webp",
  "SV11B ブラックボルト|AR|ペンドラー":"images/sv/sv11b-140-ar.webp",
  "SV11B ブラックボルト|AR|メグロコ":"images/sv/sv11b-141-ar.webp",
  "SV11B ブラックボルト|AR|ワルビル":"images/sv/sv11b-142-ar.webp",
  "SV11B ブラックボルト|AR|ワルビアル":"images/sv/sv11b-143-ar.webp",
  "SV11B ブラックボルト|AR|バルチャイ":"images/sv/sv11b-144-ar.webp",
  "SV11B ブラックボルト|AR|バルジーナ":"images/sv/sv11b-145-ar.webp",
  "SV11B ブラックボルト|AR|シュバルゴ":"images/sv/sv11b-146-ar.webp",
  "SV11B ブラックボルト|AR|コマタナ":"images/sv/sv11b-147-ar.webp",
  "SV11B ブラックボルト|AR|キリキザン":"images/sv/sv11b-148-ar.webp",
  "SV11B ブラックボルト|AR|コバルオン":"images/sv/sv11b-149-ar.webp",
  "SV11B ブラックボルト|AR|キバゴ":"images/sv/sv11b-150-ar.webp",
  "SV11B ブラックボルト|AR|オノンド":"images/sv/sv11b-151-ar.webp",
  "SV11B ブラックボルト|AR|オノノクス":"images/sv/sv11b-152-ar.webp",
  "SV11B ブラックボルト|AR|マメパト":"images/sv/sv11b-153-ar.webp",
  "SV11B ブラックボルト|AR|ハトーボー":"images/sv/sv11b-154-ar.webp",
  "SV11B ブラックボルト|AR|ケンホロウ":"images/sv/sv11b-155-ar.webp",
  "SV11B ブラックボルト|AR|タブンネ":"images/sv/sv11b-156-ar.webp",
  "SV11B ブラックボルト|AR|チラーミィ":"images/sv/sv11b-157-ar.webp",
  "SV11B ブラックボルト|AR|チラチーノ":"images/sv/sv11b-158-ar.webp",
    "SV11W ホワイトフレア|AR|クルミル":"images/sv/sv11w-087-ar.webp",
  "SV11W ホワイトフレア|AR|クルマユ":"images/sv/sv11w-088-ar.webp",
  "SV11W ホワイトフレア|AR|ハハコモリ":"images/sv/sv11w-089-ar.webp",
  "SV11W ホワイトフレア|AR|モンメン":"images/sv/sv11w-090-ar.webp",
  "SV11W ホワイトフレア|AR|シキジカ":"images/sv/sv11w-091-ar.webp",
  "SV11W ホワイトフレア|AR|メブキジカ":"images/sv/sv11w-092-ar.webp",
  "SV11W ホワイトフレア|AR|チョボマキ":"images/sv/sv11w-093-ar.webp",
  "SV11W ホワイトフレア|AR|アギルダー":"images/sv/sv11w-094-ar.webp",
  "SV11W ホワイトフレア|AR|ビリジオン":"images/sv/sv11w-095-ar.webp",
  "SV11W ホワイトフレア|AR|ポカブ":"images/sv/sv11w-096-ar.webp",
  "SV11W ホワイトフレア|AR|チャオブー":"images/sv/sv11w-097-ar.webp",
  "SV11W ホワイトフレア|AR|エンブオー":"images/sv/sv11w-098-ar.webp",
  "SV11W ホワイトフレア|AR|バオップ":"images/sv/sv11w-099-ar.webp",
  "SV11W ホワイトフレア|AR|バオッキー":"images/sv/sv11w-100-ar.webp",
  "SV11W ホワイトフレア|AR|クイタラン":"images/sv/sv11w-101-ar.webp",
  "SV11W ホワイトフレア|AR|ミジュマル":"images/sv/sv11w-102-ar.webp",
  "SV11W ホワイトフレア|AR|フタチマル":"images/sv/sv11w-103-ar.webp",
  "SV11W ホワイトフレア|AR|ダイケンキ":"images/sv/sv11w-104-ar.webp",
  "SV11W ホワイトフレア|AR|バスラオ":"images/sv/sv11w-105-ar.webp",
  "SV11W ホワイトフレア|AR|コアルヒー":"images/sv/sv11w-106-ar.webp",
  "SV11W ホワイトフレア|AR|スワンナ":"images/sv/sv11w-107-ar.webp",
  "SV11W ホワイトフレア|AR|バニプッチ":"images/sv/sv11w-108-ar.webp",
  "SV11W ホワイトフレア|AR|バニリッチ":"images/sv/sv11w-109-ar.webp",
  "SV11W ホワイトフレア|AR|バイバニラ":"images/sv/sv11w-110-ar.webp",
  "SV11W ホワイトフレア|AR|シママ":"images/sv/sv11w-111-ar.webp",
  "SV11W ホワイトフレア|AR|ゼブライカ":"images/sv/sv11w-112-ar.webp",
  "SV11W ホワイトフレア|AR|バチュル":"images/sv/sv11w-113-ar.webp",
  "SV11W ホワイトフレア|AR|デンチュラ":"images/sv/sv11w-114-ar.webp",
  "SV11W ホワイトフレア|AR|マッギョ":"images/sv/sv11w-115-ar.webp",
  "SV11W ホワイトフレア|AR|コロモリ":"images/sv/sv11w-116-ar.webp",
  "SV11W ホワイトフレア|AR|ココロモリ":"images/sv/sv11w-117-ar.webp",
  "SV11W ホワイトフレア|AR|シンボラー":"images/sv/sv11w-118-ar.webp",
  "SV11W ホワイトフレア|AR|デスマス":"images/sv/sv11w-119-ar.webp",
  "SV11W ホワイトフレア|AR|デスカーン":"images/sv/sv11w-120-ar.webp",
  "SV11W ホワイトフレア|AR|ゴチム":"images/sv/sv11w-121-ar.webp",
  "SV11W ホワイトフレア|AR|ゴチミル":"images/sv/sv11w-122-ar.webp",
  "SV11W ホワイトフレア|AR|ゴチルゼル":"images/sv/sv11w-123-ar.webp",
  "SV11W ホワイトフレア|AR|プルリル":"images/sv/sv11w-124-ar.webp",
  "SV11W ホワイトフレア|AR|ダンゴロ":"images/sv/sv11w-125-ar.webp",
  "SV11W ホワイトフレア|AR|ガントル":"images/sv/sv11w-126-ar.webp",
  "SV11W ホワイトフレア|AR|ギガイアス":"images/sv/sv11w-127-ar.webp",
  "SV11W ホワイトフレア|AR|ダゲキ":"images/sv/sv11w-128-ar.webp",
  "SV11W ホワイトフレア|AR|アーケン":"images/sv/sv11w-129-ar.webp",
  "SV11W ホワイトフレア|AR|アーケオス":"images/sv/sv11w-130-ar.webp",
  "SV11W ホワイトフレア|AR|コジョフー":"images/sv/sv11w-131-ar.webp",
  "SV11W ホワイトフレア|AR|コジョンド":"images/sv/sv11w-132-ar.webp",
  "SV11W ホワイトフレア|AR|テラキオン":"images/sv/sv11w-133-ar.webp",
  "SV11W ホワイトフレア|AR|チョロネコ":"images/sv/sv11w-134-ar.webp",
  "SV11W ホワイトフレア|AR|レパルダス":"images/sv/sv11w-135-ar.webp",
  "SV11W ホワイトフレア|AR|ズルッグ":"images/sv/sv11w-136-ar.webp",
  "SV11W ホワイトフレア|AR|ズルズキン":"images/sv/sv11w-137-ar.webp",
  "SV11W ホワイトフレア|AR|ヤブクロン":"images/sv/sv11w-138-ar.webp",
  "SV11W ホワイトフレア|AR|ダストダス":"images/sv/sv11w-139-ar.webp",
  "SV11W ホワイトフレア|AR|ゾロア":"images/sv/sv11w-140-ar.webp",
  "SV11W ホワイトフレア|AR|ゾロアーク":"images/sv/sv11w-141-ar.webp",
  "SV11W ホワイトフレア|AR|モノズ":"images/sv/sv11w-142-ar.webp",
  "SV11W ホワイトフレア|AR|ジヘッド":"images/sv/sv11w-143-ar.webp",
  "SV11W ホワイトフレア|AR|テッシード":"images/sv/sv11w-144-ar.webp",
  "SV11W ホワイトフレア|AR|ナットレイ":"images/sv/sv11w-145-ar.webp",
  "SV11W ホワイトフレア|AR|ギアル":"images/sv/sv11w-146-ar.webp",
  "SV11W ホワイトフレア|AR|ギギアル":"images/sv/sv11w-147-ar.webp",
  "SV11W ホワイトフレア|AR|ギギギアル":"images/sv/sv11w-148-ar.webp",
  "SV11W ホワイトフレア|AR|アイアント":"images/sv/sv11w-149-ar.webp",
  "SV11W ホワイトフレア|AR|クリムガン":"images/sv/sv11w-150-ar.webp",
  "SV11W ホワイトフレア|AR|ミネズミ":"images/sv/sv11w-151-ar.webp",
  "SV11W ホワイトフレア|AR|ミルホッグ":"images/sv/sv11w-152-ar.webp",
  "SV11W ホワイトフレア|AR|ヨーテリー":"images/sv/sv11w-153-ar.webp",
  "SV11W ホワイトフレア|AR|ハーデリア":"images/sv/sv11w-154-ar.webp",
  "SV11W ホワイトフレア|AR|ムーランド":"images/sv/sv11w-155-ar.webp",
  "SV11W ホワイトフレア|AR|ワシボン":"images/sv/sv11w-156-ar.webp",
  "SV11W ホワイトフレア|AR|ウォーグル":"images/sv/sv11w-157-ar.webp",
  "SV11W ホワイトフレア|AR|トルネロス":"images/sv/sv11w-158-ar.webp",


"プロモ・限定カード|AR仕様|001/SV-P ピカチュウ（『ポケットモンスター スカーレット・バイオレット』早期購入特典）":"images/sv/promo-001-svp-pikachu.webp",
"プロモ・限定カード|AR仕様|048/SV-P ミライドン（トリプレットビート シールド戦プロモカードパック）":"images/sv/promo-048-svp-miraidon.webp",
"プロモ・限定カード|AR仕様|049/SV-P コライドン（トリプレットビート シールド戦プロモカードパック）":"images/sv/promo-049-svp-koraidon.webp",
"プロモ・限定カード|AR仕様|098/SV-P 名探偵ピカチュウ（『帰ってきた 名探偵ピカチュウ』早期購入特典）":"images/sv/promo-098-svp-detective-pikachu.webp",

"プロモ・限定カード|AR仕様|SVG 050/049 フシギダネ（スタートデッキGenerations スペシャルバトルセット）":"images/sv/promo-svg-050-fushigidane.webp",
"プロモ・限定カード|AR仕様|SVG 051/049 ヒトカゲ（スタートデッキGenerations スペシャルバトルセット）":"images/sv/promo-svg-051-hitokage.webp",
"プロモ・限定カード|AR仕様|SVG 052/049 ゼニガメ（スタートデッキGenerations スペシャルバトルセット）":"images/sv/promo-svg-052-zenigame.webp",
"プロモ・限定カード|AR仕様|148/SV-P オーガポンみどりのめん（スペシャルジャンボカードセット「オーガポン」）":"images/sv/IMG_2428.webp",
"プロモ・限定カード|AR仕様|218/SV-P ピカチュウ（ポケカの夏がキタ！プロモカードGetキャンペーン）":"images/sv/promo-218-svp-pikachu.webp",

"プロモ・限定カード|AR仕様|192/SV-P ニャース（スタートデッキGenerations スペシャルバトルセット）":"images/sv/promo-192-svp-nyarth.webp",
"プロモ・限定カード|AR仕様|193/SV-P パルデアウパー（スタートデッキGenerations スペシャルバトルセット）":"images/sv/promo-193-svp-paldea-wooper.webp",

"プロモ・限定カード|AR仕様|232/SV-P ナンジャモのカイデン（バトルパートナーズ BOX購入特典）":"images/sv/promo-232-svp-nanjamo-kaiden.webp",

"プロモ・限定カード|AR仕様|SVOD 019/018 ダイゴのダンバル（スターターセットex ダイゴのダンバル＆メタグロスex）":"images/sv/promo-svod-019-daigo-danbaru.webp",
"プロモ・限定カード|AR仕様|SVOM 020/019 マリィのモルペコ（スターターセットex マリィのモルペコ＆オーロンゲex）":"images/sv/promo-svom-020-mary-morpeko.webp",
"プロモ・限定カード|AR仕様|271/SV-P ビクティニ（ブラックボルト・ホワイトフレア カードファイルセット）":"images/sv/IMG_2708.jpeg",
"プロモ・限定カード|SAR仕様|WCS23 001/030 ピカチュウex (ポケモンWCS2023横浜 記念デッキ「ピカチュウ」収録)":"images/sv/promo-wcs23-001-pikachu-ex.webp"
};

const CARD_DATA = {
  "SV1S スカーレットex": {
    "AR": ["オリーニョ","グレンアルマ","ウミディグダ","ヘイラッシャ","ラルトス","キルリア","パピモッチ","リオル","メグロコ","ガケガニ","ドドゲザン","ムックル"],
    "SR": ["ギャラドスex","サーナイトex","イダイナキバex","コライドンex","ドクロッグex","パフュートンex","ジニア","スター団のしたっぱ","博士の研究 オーリム博士","ボタン"],
    "SAR": ["サーナイトex","イダイナキバex","コライドンex","ジニア","ボタン"],
    "UR": ["コライドンex","ネストボール","基本闘エネルギー"]
  },

  "SV1V バイオレットex": {
    "AR": ["タマンチュラ","ノノクラゲ","スコヴィラン","ヤドン","ウデッポウ","パチリス","パーモット","スリープ","ボチ","マフィティフ","オトシドリ","ホシガリス"],
    "SR": ["ワナイダーex","ウインディex","ジバコイルex","ミライドンex","ジュペッタex","テツノワダチex","カエデ","博士の研究 フトゥー博士","ペパー","ミモザ"],
    "SAR": ["ワナイダーex","ミライドンex","テツノワダチex","ペパー","ミモザ"],
    "UR": ["ミライドンex","ふしぎなアメ","基本雷エネルギー"]
  },

  "SV1a トリプレットビート": {
    "AR": ["トロピウス","ニャオハ","ニャローテ","カエンジシ","ホゲータ","アチゲータ","コイキング","クワッス","ウェルカモ","ムウマージ","パルデア ケンタロス","パルデア ウパー"],
    "SR": ["マスカーニャex","ラウドボーンex","ウェーニバルex","デデンネex","ルガルガンex","ドオーex","キハダ","クラベル","ハヤト","ボスの指令 ゲーチス"],
    "SAR": ["マスカーニャex","ラウドボーンex","ウェーニバルex","キハダ","ボスの指令 ゲーチス"],
    "UR": ["マスカーニャex","ラウドボーンex","ウェーニバルex"]
  },

"SV2P スノーハザード": {
  "AR": [
    "アノクサ","マリル","コオリッポ","セビエ",
    "セゴール","セグレイブ","ゴチミル","ベラカス",
    "ウソッキー","ミミズズ","ココガラ","ノココッチ"
  ],
  "SR": [
    "チオンジェンex","パオジアンex","ヤドキングex","コノヨザルex",
    "ダイオウドウex","イキリンコex","グルーシャ","ピーニャ"
  ],
  "SAR": [
    "チオンジェンex","パオジアンex","イキリンコex","グルーシャ","ピーニャ"
  ],
  "UR": [
    "パオジアンex","すごいつりざお","基本水エネルギー"
  ]
},

"SV2D クレイバースト": {
  "AR": [
    "ヘラクロス","ヒノヤコマ","ライチュウ","スナバァ",
    "カヌチャン","ナカヌチャン","コジオ","バンギラス",
    "タギングル","イッカネズミ","カラミンゴ","リキキリン"
  ],
  "SR": [
    "フォレトスex","イーユイex","ハラバリーex","デカヌチャンex",
    "ディンルーex","オンバーンex","サワロ","ナンジャモ"
  ],
  "SAR": [
    "イーユイex","デカヌチャンex","ディンルーex","サワロ","ナンジャモ"
  ],
  "UR": [
    "ディンルーex","スーパーエネルギー回収","基本草エネルギー"
  ]
},
 

  "SV2a ポケモンカード151": {
  "AR": [
    "フシギダネ","フシギソウ","ヒトカゲ","リザード",
    "ゼニガメ","カメール","キャタピー","ピカチュウ",
    "ニドキング","コダック","ニョロゾ","ゴーリキー",
    "モンジャラ","バリヤード","オムナイト","カビゴン",
    "ハクリュー","ミュウツー"
  ],
  "SR": [
    "フシギバナex","リザードンex","カメックスex","アーボックex",
    "キュウコンex","プクリンex","フーディンex","ゴローニャex",
    "ガルーラex","ルージュラex","サンダーex","ミュウex",
    "エリカの招待","サカキのカリスマ","ナナミの手助け","マサキの転送"
  ],
  "SAR": [
    "フシギバナex","リザードンex","カメックスex","フーディンex",
    "サンダーex","ミュウex","エリカの招待","サカキのカリスマ"
  ],
  "UR": [
    "ミュウex","ポケモンいれかえ","基本超エネルギー"
  ]
},

 "SV3 黒炎の支配者": {
  "AR": [
    "クサイハナ","キュウコン","イルカマン","ハラバリー",
    "ピィ","ヨーギラス","デルビル","ハッサム",
    "ブロロン","ポッポ","ピジョン","グルトン"
  ],
  "SR": [
    "コオリッポex","バンギラスex","ビークインex","キラフロルex",
    "リザードンex","アブソルex","ブロロロームex","ピジョットex",
    "オモダカ","オルティガ","ポピー","ライム"
  ],
  "SAR": [
    "コオリッポex","リザードンex","ブロロロームex",
    "ピジョットex","オモダカ","ポピー"
  ],
  "UR": [
    "リザードンex","ボウルタウン","基本炎エネルギー"
  ]
},

  "SV3a レイジングサーフ": {
  "AR": [
    "ユキワラシ","タマンタ","プラスル","マイナン",
    "バチュル","コレクレー","グラードン","メテノ",
    "イベルタル","ナットレイ","ギルガルド","モトトカゲ"
  ],
  "SR": [
    "ユキメノコex","ガブリアスex","カプ・コケコex","フーパex",
    "サーフゴーex","オトシドリex","アオキ","シキミ",
    "チリ","パラソルおねえさん"
  ],
  "SAR": [
    "ガブリアスex","カプ・コケコex","サーフゴーex",
    "チリ","パラソルおねえさん"
  ],
  "UR": [
    "ガブリアスex","ビーチコート","リバーサルエネルギー"
  ]
},

  "SV4K 古代の咆哮": {
  "AR": [
    "イワパレス","ブビィ","コソクムシ","ミガルーサ",
    "サケブシッポ","コジョンド","キョジオーン","チヲハウハネ",
    "ダストダス","モルペコ","アラブルタケ","ドゴーム"
  ],
  "SR": [
    "グレンアルマex","アマージョex","グソクムシャex","デスカーンex",
    "スナノケガワex","トドロクツキex","オーリム博士の気迫",
    "センリ","メロコ"
  ],
  "SAR": [
    "グソクムシャex","スナノケガワex","トドロクツキex",
    "オーリム博士の気迫","メロコ"
  ],
  "UR": [
    "トドロクツキex","ゴージャスマント","基本悪エネルギー"
  ]
},

  "SV4M 未来の一閃": {
  "AR": [
    "レドームシ","リククラゲ","テツノドクガ","バニリッチ",
    "テツノツツミ","シママ","クエスパトラ","ハガネール",
    "エイパム","チルット","ポリゴンZ","テツノコウベ"
  ],
  "SR": [
    "テツノカイナex","テツノブジンex","ギルガルドex",
    "チルタリスex","イッカネズミex","ストリンダーex",
    "ヒョウタ","フトゥー博士のシナリオ","リップ"
  ],
  "SAR": [
    "テツノカイナex","テツノブジンex","チルタリスex",
    "フトゥー博士のシナリオ","リップ"
  ],
  "UR": [
    "テツノブジンex","カウンターキャッチャー","基本鋼エネルギー"
  ]
},

  "SV4a シャイニートレジャーex": {
  "S": [
    "ナゾノクサ","クサイハナ","ラフレシア","ストライク","ハネッコ","ポポッコ","ワタッコ","クヌギダマ",
    "ユキカブリ","ユキノオー","ニャオハ","ニャローテ","ミニーブ","オリーニョ","オリーヴァ","ノノクラゲ",
    "カプサイジ","スコヴィラン","シガロコ","ヒトカゲ","リザード","パルデアケンタロス（炎）","エンテイ","オドリドリ",
    "ホゲータ","アチゲータ","カルボウ","グレンアルマ","ヤドン","ヤドラン","ヒトデマン","スターミー",
    "パルデアケンタロス（水）","クワッス","ウェルカモ","ウミディグダ","ウミトリオ","ナミイルカ","イルカマン","ミガルーサ",
    "ヘイラッシャ","シャリタツ","セビエ","セゴール","セグレイブ","ピカチュウ","ライチュウ","ビリリダマ",
    "マルマイン","コリンク","ルクシオ","レントラー","パチリス","ボルトロス","エレズン","ストリンダー",
    "パモ","パモット","パーモット","カイデン","タイカイデン","プクリン","ケーシィ","ユンゲラー",
    "ピィ","ネイティ","ネイティオ","ラルトス","キルリア","フワンテ","フワライド","マネネ",
    "ミカルゲ","クレッフィ","ミミッキュ","パピモッチ","バウッツェル","ソウブレイズ","ベラカス","ヒラヒナ",
    "カヌチャン","ナカヌチャン","デカヌチャン","ボチ","ハカドッグ","マンキー","オコリザル","コノヨザル",
    "パルデアケンタロス（闘）","リオル","ルカリオ","ルチャブル","コジオ","ジオヅム","キョジオーン","キラーメ",
    "パルデアウパー","ヤミカラス","ニューラ","マニューラ","ヤミラミ","コマタナ","キリキザン","ドドゲザン",
    "オラチフ","マフィティフ","シルシュルー","タギングル","ハッサム","ブロロン","ブロロローム","オンバット",
    "モトトカゲ","ポッポ","ピジョン","プリン","ドードー","ドードリオ","メタモン","カビゴン",
    "キャモメ","ペリッパー","ホシガリス","ヨクバリス","グルトン","パフュートン","ワッカネズミ","イッカネズミ",
    "カラミンゴ"
  ],
  "SSR": [
    "フォレトスex","マスカーニャex","リククラゲex","クエスパトラex","ラウドボーンex","ウェーニバルex",
    "フーディンex","ミュウex","サーナイトex","キラフロルex","イダイナキバex","リザードンex",
    "パルデアドオーex","テツノワダチex","オンバーンex","ピジョットex","プクリンex","イキリンコex"
  ],
  "AR": [
    "ウミトリオ","イルカマン","パモ","ミミッキュ"
  ],
  "SR": [
    "ジャッジマン","ネモ","ネルケ","パルデアの学生","パルデアの学生"
  ],
  "SAR": [
    "ミュウex","サーナイトex","リザードンex","ナンジャモ","ネモ","ネルケ","ペパー","ボタン"
  ],
  "UR": [
    "チオンジェンex","イーユイex","パオジアンex","ミライドンex","ディンルーex","コライドンex"
  ]
},

  "SV5K ワイルドフォース": {
  "AR": [
    "ハヤシガメ","ユキハミ","ドーミラー","ランクルス",
    "ハバタクカミ","ジーランス","バンバドロ","アーボック",
    "ゴース","ペラップ","チラーミィ","チラチーノ"
  ],
  "SR": [
    "ドタイトスex","ウガツホムラex","ウネルミナモex",
    "ウミトリオex","ゲンガーex","タケルライコex",
    "探検家の先導","ビワ","マツバの確信"
  ],
  "SAR": [
    "ウガツホムラex","ウネルミナモex","タケルライコex",
    "ビワ","マツバの確信"
  ],
  "UR": [
    "ウガツホムラex","ウネルミナモex","タケルライコex"
  ]
},

  "SV5M サイバージャッジ": {
  "AR": [
    "ダーテング",
    "シキジカ",
    "メブキジカ",
    "ニャビー",
    "デンヂムシ",
    "テツノイバラ",
    "アブリー",
    "ドリュウズ",
    "メタグロス",
    "メルタン",
    "ベロリンガ",
    "ジジーロン"
  ],
  "SR": [
    "テツノイサハex",
    "ガオガエンex",
    "テツノカシラex",
    "テツノイワオex",
    "リキキリンex",
    "ハッサムex",
    "暗号マニアの解読",
    "セイジ",
    "ベルのまごころ"
  ],
  "SAR": [
    "テツノイサハex",
    "テツノカシラex",
    "テツノイワオex",
    "セイジ",
    "ベルのまごころ"
  ],
  "UR": [
    "テツノイサハex",
    "テツノカシラex",
    "テツノイワオex"
  ]
},

  "SV5a クリムゾンヘイズ": {
  "AR": [
    "カイロス","チャデス","コータス","ゴウカザル",
    "フィオネ","ウッウ","エレザード","ラブトロス",
    "ヒスイ ガーディ","ダイノーズ","カジッチュ","イーブイ"
  ],
  "SR": [
    "ヤバソチャex","マグカルゴex","テツノイバラex","サケブシッポex",
    "ゲッコウガex","ガチグマ アカツキex","管理人","ゴヨウ",
    "サザレ","スイレンのお世話"
  ],
  "SAR": [
    "ヤバソチャex","ゲッコウガex","ガチグマ アカツキex",
    "サザレ","スイレンのお世話"
  ],
  "UR": [
    "ガチグマ アカツキex","緊急ボード","ルミナスエネルギー"
  ]
},

 "SV6 変幻の仮面": {
  "AR": [
    "キマワリ","カミッチュ","ユキメノコ","カイデン",
    "チリーン","マシマシラ","キチキギス","ドッコラー",
    "イイネイヌ","コドラ","シャリタツ","ラッキー"
  ],
  "SR": [
    "オーガポンみどりのめんex","オーガポンかまどのめんex",
    "イルカマンex","オーガポンいどのめんex",
    "レントラーex","オーガポンいしずえのめんex",
    "ドラパルトex","ハピナスex",
    "スグリ","ゼイユ","ハッサク"
  ],
  "SAR": [
    "オーガポンみどりのめんex","オーガポンかまどのめんex",
    "オーガポンいどのめんex","オーガポンいしずえのめんex",
    "ゼイユ","スグリ"
  ],
  "UR": [
    "オーガポンみどりのめんex","改造ハンマー","なかよしポフィン"
  ]
},

"SV6a ナイトワンダラー": {
  "AR": [
    "カプ・ブルル","ヘルガー","タッツー","ヨマワル",
    "サマヨール","ヨノワール","クレセリア","ゾロア",
    "ゾウドウ","オノンド","ペルシアン","キテルグマ"
  ],
  "SR": [
    "モモワロウex",
    "イイネイヌex",
    "マシマシラex",
    "キチキギスex",
    "なかよしポフィンex",
    "アンズ",
    "カシオペア",
    "モモワロウ"
  ],
  "SAR": [
    "モモワロウex",
    "キチキギスex",
    "アンズ",
    "カシオペア",
    "モモワロウ"
  ],
  "UR": [
    "モモワロウex",
    "夜のタンカ",
    "基本悪エネルギー"
  ]
},

  "SV7 ステラミラクル": {
  "AR": [
    "レディアン","リリーラ","バクガメス","ラビフット",
    "ケケンカニ","バチュル","ゼラオラ","マホミル",
    "アサナン","ゴクリン","ブリジュラス","ヨルノズク"
  ],
  "SR": [
    "カミツオロチex","エースバーンex","ラプラスex","デンチュラex",
    "バウッツェルex","チャーレムex","ミミズズex","テラパゴスex",
    "アカマツ","タロ","ハイダイ","ブライア"
  ],
  "SAR": [
    "カミツオロチex","デンチュラex","バウッツェルex",
    "テラパゴスex","タロ","ブライア"
  ],
  "UR": [
    "テラパゴスex","勇気のおまもり","ゼロの大空洞"
  ]
},

  "SV7a 楽園ドラゴーナ": {
  "AR": [
    "タマタマ","マシェード","ポワルン たいようのすがた","ハギギシリ",
    "ハルクジラ","ラティオス","ビブラーバ","タタッコ",
    "エアームド","アップリュー","タルップル","ウォーグル"
  ],
  "SR": [
    "ブラックキュレムex","ラティアスex","フライゴンex","ブリジュラスex",
    "アローラ ナッシーex","モトトカゲex","カキツバタ","サーファー",
    "ドラセナ","ルチアのアピール"
  ],
  "SAR": [
    "ラティアスex","ブリジュラスex","アローラ ナッシーex",
    "カキツバタ","ルチアのアピール"
  ],
  "UR": [
    "アローラ ナッシーex","カウンターゲイン","ジェットエネルギー"
  ]
},

  "SV8 超電ブレイカー": {
  "AR": [
    "ビビヨン","メラルバ","ソウブレイズ","ヒンバス",
    "タマザラシ","レアコイル","マッギョ","エムリット",
    "ゴマゾウ","アローラ ダグトリオ","ナマケロ","カクレオン"
  ],
  "SR": [
    "アイアントex","ミロカロスex","ピカチュウex","シロデスナex",
    "ラティオスex","サザンドラex","ケッキングex",
    "シトロンの機転","ミカンのまなざし","シアノ","ミラクルインカム"
  ],
  "SAR": [
    "アイアントex","ミロカロスex","ピカチュウex",
    "サザンドラex","シトロンの機転","ミカンのまなざし"
  ],
  "UR": [
    "ピカチュウex","夜のタンカ","グラビティーマウンテン"
  ]
},

  "SV8a テラスタルフェスex": {
  "SR": [
    "アオキの手際","アカマツ","アクロマの執念","アンズの秘技",
    "オルティガ","カキツバタ","シアノ","シュウメイ",
    "タロ","ネリネ","パルデアの仲間たち","ビワ"
  ],
  "SAR": [
    "リーフィアex","オーガポン みどりのめんex","ブースターex","ソウブレイズex",
    "オーガポン かまどのめんex","シャワーズex","グレイシアex","イルカマンex",
    "オーガポン いどのめんex","サンダースex","テツノカイナex","エーフィex",
    "ニンフィアex","テツノブジンex","テツノカシラex","スナノケガワex",
    "オーガポン いしずえのめんex","ブラッキーex","トドロクツキex","モモワロウex",
    "サーフゴーex","ドラパルトex","タケルライコex","イーブイex",
    "イーブイex","ガチグマ アカツキex","テラパゴスex","アカマツ",
    "アンズの秘技","カキツバタ","スグリ","タロ","ネリネ"
  ],
  "UR": [
    "テツノイサハex","オーガポン みどりのめんex","ウネルミナモex",
    "ピカチュウex","テラパゴスex"
  ]
},


  "SV9a 熱風のアリーナ": {
  "AR": [
    "ヤンヤンマ","シロナのロズレイド","シェイミ","イワパレス",
    "カミツオロチ","ギャロップ","ヒビキのバクフーン","カスミのコダック",
    "カスミのラプラス","ラクライ","ロトム","ペパーのヨクバリス"
  ],
  "SR": [
    "メガヤンマex","ヒビキのホウオウex","ヘイラッシャex","エレキブルex",
    "シロナのガブリアスex","ペパーのマフィティフex",
    "MCの盛り上げ","ジャッジマン","ヒビキの冒険"
  ],
  "SAR": [
    "メガヤンマex","ヒビキのホウオウex","シロナのガブリアスex",
    "ペパーのマフィティフex","ヒビキの冒険"
  ],
  "UR": [
    "ヒビキのホウオウex","シロナのガブリアスex","ハッコウシティ"
  ]
},

  "SV10 ロケット団の栄光": {
  "AR": [
    "ロケット団のワナイダー","ロケット団のヘルガー","バシャーモ","パールル",
    "ロケット団のソーナンス","ロケット団のイオルブ","ロケット団のマタドガス",
    "ロケット団のヤミカラス","ザマゼンタ","ロケット団のラッタ",
    "ロケット団のニャース","ガルーラ"
  ],
  "SR": [
    "オリーヴァex","ロケット団のファイヤーex","ハルクジラex",
    "ロケット団のミュウツーex","レジロックex","ロケット団のニドキングex",
    "ロケット団のクロバットex","ロケット団のペルシアン",
    "ロケット団のアテナ","ロケット団のアポロ","ロケット団のサカキ",
    "ロケット団のラムダ","ロケット団のランス"
  ],
  "SAR": [
    "ロケット団のファイヤーex","ロケット団のミュウツーex",
    "ロケット団のニドキングex","ロケット団のクロバットex",
    "ロケット団のアテナ","ロケット団のサカキ"
  ],
  "UR": [
    "ロケット団のミュウツーex","ロケット団のクロバットex","ジャミングタワー"
  ]
},

  "SV11B ブラックボルト": {
  "AR": [
  "ツタージャ","ジャノビー","ヤナップ","ヤナッキー","チュリネ","ドレディア",
  "マラカッチ","カブルモ","タマゲタケ","モロバレル","ビクティニ",
  "ダルマッカ","ヒヒダルマ","ヒトモシ","ランプラー","シャンデラ",
  "メラルバ","ウルガモス","ヒヤップ","ヒヤッキー","オタマロ","ガマガル",
  "ガマゲロゲ","プロトーガ","アバゴーラ","ママンボウ","クマシュン",
  "ツンベアー","フリージオ","エモンガ","シビシラス","シビビール",
  "シビルドン","ボルトロス","ムンナ","ムシャーナ","ユニラン","ダブラン",
  "ランクルス","リグレー","オーベム","ゴビット","ゴルーグ","モグリュー",
  "ドッコラー","ドテッコツ","ローブシン","ナゲキ","イシズマイ",
  "イワパレス","ランドロス","フシデ","ホイーガ","ペンドラー",
  "メグロコ","ワルビル","ワルビアル","バルチャイ","バルジーナ",
  "シュバルゴ","コマタナ","キリキザン","コバルオン","キバゴ",
  "オノンド","オノノクス","マメパト","ハトーボー","ケンホロウ",
  "タブンネ","チラーミィ","チラチーノ"
],
  "SR": [
    "ジャローダex","キュレムex","ゼクロムex","メロエッタex",
    "ドリュウズex","ゲノセクトex","Nの筋書き","マコモ"
  ],
  "SAR": [
    "ジャローダex","キュレムex","ゼクロムex","メロエッタex",
    "ドリュウズex","ゲノセクトex","Nの筋書き"
  ],
  "BWR": [
    "ゼクロムex"
  ]
},

  "SV11W ホワイトフレア": {
  "AR": [
  "クルミル","クルマユ","ハハコモリ","モンメン","シキジカ","メブキジカ",
  "チョボマキ","アギルダー","ビリジオン","ポカブ","チャオブー","エンブオー",
  "バオップ","バオッキー","クイタラン","ミジュマル","フタチマル","ダイケンキ",
  "バスラオ","コアルヒー","スワンナ","バニプッチ","バニリッチ","バイバニラ",
  "シママ","ゼブライカ","バチュル","デンチュラ","マッギョ","コロモリ",
  "ココロモリ","シンボラー","デスマス","デスカーン","ゴチム","ゴチミル",
  "ゴチルゼル","プルリル","ダンゴロ","ガントル","ギガイアス","ダゲキ",
  "アーケン","アーケオス","コジョフー","コジョンド","テラキオン","チョロネコ",
  "レパルダス","ズルッグ","ズルズキン","ヤブクロン","ダストダス","ゾロア",
  "ゾロアーク","モノズ","ジヘッド","テッシード","ナットレイ","ギアル",
  "ギギアル","ギギギアル","アイアント","クリムガン","ミネズミ","ミルホッグ",
  "ヨーテリー","ハーデリア","ムーランド","ワシボン","ウォーグル","トルネロス"
  ],
  "SR": [
    "エルフーンex","レシラムex","ケルディオex","ブルンゲルex",
    "サザンドラex","バッフロンex","クラウン","トウコ"
  ],
  "SAR": [
    "エルフーンex","レシラムex","ケルディオex","ブルンゲルex",
    "サザンドラex","バッフロンex","トウコ"
  ],
  "BWR": [
    "レシラムex"
  ]
},

"プロモ・限定カード": {
  "AR仕様": [
  "001/SV-P ピカチュウ（『ポケットモンスター スカーレット・バイオレット』早期購入特典）",
  "048/SV-P ミライドン（トリプレットビート シールド戦プロモカードパック）",
  "049/SV-P コライドン（トリプレットビート シールド戦プロモカードパック）",
  "098/SV-P 名探偵ピカチュウ（『帰ってきた 名探偵ピカチュウ』早期購入特典）",

  "SVG 050/049 フシギダネ（スタートデッキGenerations スペシャルバトルセット）",
  "SVG 051/049 ヒトカゲ（スタートデッキGenerations スペシャルバトルセット）",
  "SVG 052/049 ゼニガメ（スタートデッキGenerations スペシャルバトルセット）",

  "218/SV-P ピカチュウ（ポケカの夏がキタ！プロモカードGetキャンペーン）",
"148/SV-P オーガポンみどりのめん（スペシャルジャンボカードセット「オーガポン」）",
  "192/SV-P ニャース（スタートデッキGenerations スペシャルバトルセット）",
  "193/SV-P パルデアウパー（スタートデッキGenerations スペシャルバトルセット）",

  "232/SV-P ナンジャモのカイデン（バトルパートナーズ BOX購入特典）",

  "SVOD 019/018 ダイゴのダンバル（スターターセットex ダイゴのダンバル＆メタグロスex）",
  "SVOM 020/019 マリィのモルペコ（スターターセットex マリィのモルペコ＆オーロンゲex）",
"271/SV-P ビクティニ（ブラックボルト・ホワイトフレア カードファイルセット）"
  ],
  "SAR仕様": [
    "WCS23 001/030 ピカチュウex (ポケモンWCS2023横浜 記念デッキ「ピカチュウ」収録)"
  ]
}
};
