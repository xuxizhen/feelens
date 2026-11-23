/**
 * Weekly news feed. Append one object (newest items at the top is easiest to
 * review; the page sorts by `date` descending, then `id`). Historical entries fall back to English where translations are missing.
 * New and reviewed entries provide all eight locales; zh-cn uses `zh`.
 *
 * {
 *   id: "unique-slug",                 // stable, never reused
 *   exchange: "backpack" | "binance" | "okx",
 *   date: "YYYY-MM-DD",                // publication date from the source
 *   category: "listing" | "fees" | "product" | "promotion" | "regulatory" | "other",
 *   title: { en: "...", zh: "..." },
 *   summary: { en: "...", zh: "..." },
 *   sourceUrl: "https://...",          // official page or official X post
 * }
 *
 * Do not invent items. Leave an exchange out until a checked source exists.
 * Ids for posts from official X use `${exchange}-${date}-${slug}`.
 */
export const updateExchanges = ["backpack", "binance", "okx"] as const;
export type UpdateExchange = (typeof updateExchanges)[number];
export const updateCategories = [
  "listing",
  "fees",
  "product",
  "promotion",
  "regulatory",
  "other",
] as const;
export type UpdateCategory = (typeof updateCategories)[number];
export type UpdateCopy = { en: string; zh: string } & Partial<Record<"fr" | "pt" | "ko" | "ja" | "ru" | "fa", string>>;
export type UpdateItem = {
  id: string;
  exchange: UpdateExchange;
  date: string;
  category: UpdateCategory;
  title: UpdateCopy;
  summary: UpdateCopy;
  sourceUrl: string;
  checkedAt?: string;
  startsAt?: string;
  endsAt?: string;
  signupEndsAt?: string;
};

export const updateItems: readonly UpdateItem[] = [
  {
    "id": "backpack-2026-11-17-cftc-derivatives-exchange-approval",
    "exchange": "backpack",
    "date": "2026-11-17",
    "category": "regulatory",
    "sourceUrl": "https://x.com/Backpack/status/2122454683369283841",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Backpack receives CFTC approval for a U.S. derivatives exchange",
      "zh": "Backpack 获 CFTC 批准在美国设立衍生品交易所",
      "fr": "Backpack reçoit l’agrément de la CFTC pour une bourse de dérivés aux États-Unis",
      "pt": "Backpack recebe aprovação da CFTC para uma bolsa de derivativos nos EUA",
      "ko": "Backpack, 미국 파생상품 거래소에 대한 CFTC 승인 획득",
      "ja": "Backpack、米国のデリバティブ取引所についてCFTCの承認を取得",
      "ru": "Backpack получила одобрение CFTC на биржу деривативов в США",
      "fa": "Backpack برای یک صرافی مشتقه در آمریکا تأیید CFTC گرفت"
    },
    "summary": {
      "en": "Backpack said it received CFTC approval to establish a derivatives exchange powered by one order book with unified global liquidity, offering leveraged perpetuals, crypto collateral, cross-margin and 24/7 trading; a waitlist is open.",
      "zh": "Backpack 表示已获 CFTC 批准，设立以单一订单簿、统一全球流动性驱动的衍生品交易所，支持杠杆永续合约、加密资产抵押、全仓保证金和 7×24 小时交易，现已开放候补名单。",
      "fr": "Backpack a indiqué avoir reçu l’agrément de la CFTC pour établir une bourse de dérivés animée par un carnet d’ordres unique à liquidité mondiale unifiée, proposant des perpétuels à effet de levier, un collatéral en crypto, la marge croisée et une négociation 24 h/24, 7 j/7 ; une liste d’attente est ouverte.",
      "pt": "A Backpack informou que recebeu aprovação da CFTC para estabelecer uma bolsa de derivativos movida por um único livro de ofertas com liquidez global unificada, oferecendo perpétuos alavancados, colateral em cripto, margem cruzada e negociação 24/7; a lista de espera está aberta.",
      "ko": "Backpack은 단일 주문장과 통합된 글로벌 유동성으로 구동되는 파생상품 거래소를 설립하는 CFTC 승인을 받았으며, 레버리지 무기한 계약, 암호화폐 담보, 교차 마진, 24/7 거래를 제공하고 대기자 명단이 열렸다고 밝혔습니다.",
      "ja": "Backpackは、単一のオーダーブックと統合されたグローバル流動性で動くデリバティブ取引所の設立についてCFTCの承認を受け、レバレッジ付き無期限契約、暗号資産担保、クロスマージン、24時間年中無休の取引を提供し、ウェイトリストを開放したと述べました。",
      "ru": "Backpack сообщила, что получила одобрение CFTC на создание биржи деривативов с единым стаканом и общей глобальной ликвидностью: бессрочные контракты с плечом, криптозалог, кросс-маржа и торговля 24/7; лист ожидания открыт.",
      "fa": "Backpack اعلام کرد تأیید CFTC را برای راه‌اندازی یک صرافی مشتقه با یک دفتر سفارش و نقدینگی جهانی یکپارچه دریافت کرده است؛ پرپچوال اهرمی، وثیقه رمزارزی، کراس‌مارجین و معامله ۲۴/۷ ارائه می‌شود و فهرست انتظار باز است."
    }
  },
  {
    "id": "backpack-2026-11-18-nfa-fcm-approval",
    "exchange": "backpack",
    "date": "2026-11-18",
    "category": "regulatory",
    "sourceUrl": "https://x.com/Backpack/status/2123072542483378444",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Backpack secures NFA approval as a Futures Commission Merchant",
      "zh": "Backpack 获 NFA 批准成为期货佣金商（FCM）",
      "fr": "Backpack obtient l’agrément de la NFA comme commissionnaire en contrats à terme (FCM)",
      "pt": "Backpack obtém aprovação da NFA como Futures Commission Merchant (FCM)",
      "ko": "Backpack, 선물위탁중개인(FCM)으로 NFA 승인 확보",
      "ja": "Backpack、先物取次業者（FCM）としてNFAの承認を取得",
      "ru": "Backpack получила одобрение NFA как комиссионер по фьючерсам (FCM)",
      "fa": "Backpack به‌عنوان کارگزار کمیسیون معاملات آتی (FCM) تأیید NFA را گرفت"
    },
    "summary": {
      "en": "Following its exchange and clearinghouse license approvals, Backpack said it secured NFA approval to operate as a Futures Commission Merchant (FCM), aiming to bring leveraged perpetuals with unified global liquidity onshore in the U.S.",
      "zh": "继交易所与清算所牌照获批后，Backpack 表示已获 NFA 批准以期货佣金商（FCM）身份运营，目标是把统一全球流动性的杠杆永续合约带到美国境内。",
      "fr": "Après les agréments de sa bourse et de sa chambre de compensation, Backpack a indiqué avoir obtenu l’agrément de la NFA pour opérer comme commissionnaire en contrats à terme (FCM), afin d’amener aux États-Unis des perpétuels à effet de levier à liquidité mondiale unifiée.",
      "pt": "Após as aprovações de licença da bolsa e da câmara de compensação, a Backpack informou que obteve aprovação da NFA para operar como Futures Commission Merchant (FCM), com o objetivo de trazer para os EUA perpétuos alavancados com liquidez global unificada.",
      "ko": "거래소와 청산소 라이선스 승인에 이어, Backpack은 선물위탁중개인(FCM)으로 운영하는 NFA 승인을 확보해 통합된 글로벌 유동성의 레버리지 무기한 계약을 미국 역내로 가져오는 것이 목표라고 밝혔습니다.",
      "ja": "取引所と清算機関のライセンス承認に続き、Backpackは先物取次業者（FCM）として運営するNFAの承認を取得し、統合されたグローバル流動性を持つレバレッジ付き無期限契約を米国内に持ち込むことを目指すと述べました。",
      "ru": "После одобрения лицензий биржи и клиринговой палаты Backpack сообщила, что получила одобрение NFA на работу в качестве комиссионера по фьючерсам (FCM), чтобы вывести бессрочные контракты с плечом и единой глобальной ликвидностью на территорию США.",
      "fa": "پس از تأیید مجوزهای صرافی و اتاق پایاپای، Backpack اعلام کرد تأیید NFA را برای فعالیت به‌عنوان کارگزار کمیسیون معاملات آتی (FCM) گرفته است تا پرپچوال‌های اهرمی با نقدینگی جهانی یکپارچه را به داخل آمریکا بیاورد."
    }
  },
  {
    "id": "backpack-2026-11-19-anthropic-ant-day-one",
    "exchange": "backpack",
    "date": "2026-11-19",
    "category": "listing",
    "sourceUrl": "https://x.com/Backpack/status/2123388649970741528",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Backpack lists Anthropic (ANT) stock and perps on day one",
      "zh": "Backpack 首日上线 Anthropic（ANT）股票与永续合约",
      "fr": "Backpack cote l’action et les perpétuels Anthropic (ANT) dès le premier jour",
      "pt": "Backpack lista a ação e os perpétuos da Anthropic (ANT) no primeiro dia",
      "ko": "Backpack, Anthropic(ANT) 주식과 무기한 계약을 첫날 상장",
      "ja": "Backpack、Anthropic（ANT）の株式と無期限契約を初日から上場",
      "ru": "Backpack с первого дня листингует акции и бессрочные контракты Anthropic (ANT)",
      "fa": "Backpack سهام و پرپچوال Anthropic (ANT) را از روز نخست فهرست کرد"
    },
    "summary": {
      "en": "Backpack listed Anthropic (ANT) on its IPO day: zero-fee stock trading, 24/7 leveraged ANT perps, and the ability to use ANT shares as collateral to borrow USD and trade on margin.",
      "zh": "Backpack 在 Anthropic（ANT）IPO 首日上线：零手续费股票交易、7×24 小时 ANT 杠杆永续合约，并可用 ANT 股票作抵押借入美元进行保证金交易。",
      "fr": "Backpack a coté Anthropic (ANT) le jour de son introduction : négociation d’actions sans frais, perpétuels ANT à effet de levier 24 h/24, 7 j/7, et la possibilité d’utiliser des actions ANT comme collatéral pour emprunter des USD et négocier sur marge.",
      "pt": "A Backpack listou a Anthropic (ANT) no dia do IPO: negociação de ações com taxa zero, perpétuos ANT alavancados 24/7 e a possibilidade de usar ações ANT como colateral para tomar USD emprestado e negociar com margem.",
      "ko": "Backpack은 Anthropic(ANT) IPO 당일에 상장했습니다. 수수료 없는 주식 거래, 24/7 ANT 레버리지 무기한 계약, 그리고 ANT 주식을 담보로 USD를 빌려 마진 거래할 수 있습니다.",
      "ja": "BackpackはAnthropic（ANT）をIPO当日に上場しました。手数料ゼロの株式取引、24時間年中無休のレバレッジ付きANT無期限契約、そしてANT株を担保にUSDを借りて証拠金取引ができます。",
      "ru": "Backpack провела листинг Anthropic (ANT) в день IPO: торговля акциями без комиссии, бессрочные контракты ANT с плечом 24/7 и возможность использовать акции ANT как залог, чтобы занять USD и торговать с маржой.",
      "fa": "Backpack در روز IPO، Anthropic (ANT) را فهرست کرد: معامله سهام با کارمزد صفر، پرپچوال اهرمی ANT به‌صورت ۲۴/۷، و امکان استفاده از سهام ANT به‌عنوان وثیقه برای قرض گرفتن USD و معامله با مارجین."
    }
  },
  {
    "id": "backpack-2026-11-19-perps-open-week-2",
    "exchange": "backpack",
    "date": "2026-11-19",
    "category": "promotion",
    "sourceUrl": "https://x.com/Backpack/status/2123234592576373000",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Backpack's The Perps Open Week 2 offers $37,500 in rewards",
      "zh": "Backpack「The Perps Open」第二周奖池 37,500 美元",
      "fr": "La semaine 2 de The Perps Open sur Backpack offre 37 500 $ de récompenses",
      "pt": "A semana 2 do The Perps Open da Backpack oferece US$ 37.500 em recompensas",
      "ko": "Backpack The Perps Open 2주차, 보상 $37,500",
      "ja": "BackpackのThe Perps Open第2週は報酬37,500ドル",
      "ru": "Неделя 2 The Perps Open на Backpack: награды на $37 500",
      "fa": "هفته ۲ The Perps Open در Backpack پاداش ۳۷٬۵۰۰ دلار دارد"
    },
    "summary": {
      "en": "Week 2 of The Perps Open is live with $37,500 in rewards: $20,000 weekly plus $2,500 every day through November 25 for trading crypto and equity perps.",
      "zh": "The Perps Open 第二周开启，总奖励 37,500 美元：每周 20,000 美元，另加至 11 月 25 日每天 2,500 美元，交易加密与股票永续合约即可参与瓜分。",
      "fr": "La semaine 2 de The Perps Open est en ligne, avec 37 500 $ de récompenses : 20 000 $ pour la semaine plus 2 500 $ chaque jour jusqu’au 25 novembre, pour la négociation de perpétuels crypto et actions.",
      "pt": "A semana 2 do The Perps Open está no ar, com US$ 37.500 em recompensas: US$ 20.000 na semana mais US$ 2.500 por dia até 25 de novembro, para quem negociar perpétuos de cripto e de ações.",
      "ko": "The Perps Open 2주차가 $37,500 보상으로 진행 중입니다. 주간 $20,000에 더해 11월 25일까지 매일 $2,500이며, 암호화폐와 주식 무기한 계약을 거래하면 참여할 수 있습니다.",
      "ja": "The Perps Openの第2週が報酬37,500ドルで開催中です。週間20,000ドルに加え、11月25日まで毎日2,500ドルで、暗号資産と株式の無期限契約の取引が対象です。",
      "ru": "Неделя 2 The Perps Open идёт с наградами на $37 500: $20 000 за неделю плюс $2 500 каждый день до 25 ноября за торговлю бессрочными контрактами на криптоактивы и акции.",
      "fa": "هفته ۲ The Perps Open با ۳۷٬۵۰۰ دلار پاداش فعال است: ۲۰٬۰۰۰ دلار هفتگی به‌علاوه هر روز ۲٬۵۰۰ دلار تا ۲۵ نوامبر، برای معامله پرپچوال رمزارز و سهام."
    },
    "endsAt": "2026-11-25"
  },
  {
    "id": "binance-2026-11-17-binance-pay-later",
    "exchange": "binance",
    "date": "2026-11-17",
    "category": "product",
    "sourceUrl": "https://x.com/binance/status/2122412141906944154",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Binance introduces Binance Pay Later",
      "zh": "币安推出 Binance Pay Later 先买后付",
      "fr": "Binance lance Binance Pay Later",
      "pt": "Binance apresenta o Binance Pay Later",
      "ko": "바이낸스, Binance Pay Later 도입",
      "ja": "Binance、Binance Pay Laterを導入",
      "ru": "Binance представила Binance Pay Later",
      "fa": "بایننس Binance Pay Later را معرفی کرد"
    },
    "summary": {
      "en": "Binance Pay Later lets users buy without selling crypto while eligible collateral keeps earning in Binance Earn, with 0% interest until the 1st of next month and up to 3% cashback on eligible transactions; initially for eligible users in Argentina and Mexico.",
      "zh": "Binance Pay Later 让用户无需卖出加密资产即可消费，合格抵押品继续在币安理财中赚取收益；至下月 1 日前 0 利息，合格交易最高 3% 返现，首批面向阿根廷和墨西哥的合格用户。",
      "fr": "Binance Pay Later permet d’acheter sans vendre de crypto, tandis que le collatéral éligible continue de rapporter dans Binance Earn, avec 0 % d’intérêt jusqu’au 1er du mois suivant et jusqu’à 3 % de cashback sur les transactions éligibles ; d’abord pour les utilisateurs éligibles en Argentine et au Mexique.",
      "pt": "O Binance Pay Later permite comprar sem vender cripto, enquanto o colateral elegível continua rendendo no Binance Earn, com 0% de juros até o dia 1º do mês seguinte e até 3% de cashback em transações elegíveis; inicialmente para usuários elegíveis na Argentina e no México.",
      "ko": "Binance Pay Later는 암호화폐를 팔지 않고 구매할 수 있게 하며, 자격 있는 담보는 Binance Earn에서 계속 수익을 냅니다. 다음 달 1일까지 이자 0%, 자격 있는 거래에 최대 3% 캐시백이며, 처음에는 아르헨티나와 멕시코의 자격 있는 사용자가 대상입니다.",
      "ja": "Binance Pay Laterでは、暗号資産を売らずに購入でき、対象の担保はBinance Earnで収益を得続けます。翌月1日まで金利0%、対象取引で最大3%のキャッシュバックで、当初はアルゼンチンとメキシコの対象ユーザー向けです。",
      "ru": "Binance Pay Later позволяет покупать, не продавая криптоактивы, а подходящий залог продолжает приносить доход в Binance Earn: 0% до 1-го числа следующего месяца и кэшбэк до 3% по подходящим операциям; сначала для подходящих пользователей в Аргентине и Мексике.",
      "fa": "Binance Pay Later به کاربران امکان می‌دهد بدون فروش رمزارز خرید کنند، در حالی که وثیقه واجد شرایط در Binance Earn به کسب بازده ادامه می‌دهد؛ تا روز اول ماه بعد بهره ۰٪ و برای تراکنش‌های واجد شرایط تا ۳٪ بازگشت وجه، در ابتدا برای کاربران واجد شرایط در آرژانتین و مکزیک."
    }
  },
  {
    "id": "binance-2026-11-18-ant-nvda-perps-carnival",
    "exchange": "binance",
    "date": "2026-11-18",
    "category": "promotion",
    "sourceUrl": "https://x.com/binance/status/2122842220919497087",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Binance Futures launches the ANT & NVDA Perps Carnival",
      "zh": "币安合约推出 ANT 与 NVDA 永续嘉年华",
      "fr": "Binance Futures lance le ANT & NVDA Perps Carnival",
      "pt": "A Binance Futures lança o ANT & NVDA Perps Carnival",
      "ko": "바이낸스 선물, ANT와 NVDA 무기한 카니발 시작",
      "ja": "Binance Futures、ANTとNVDAの無期限カーニバルを開始",
      "ru": "Binance Futures запустила карнавал бессрочных ANT и NVDA",
      "fa": "Binance Futures کارناوال پرپچوال ANT و NVDA را آغاز کرد"
    },
    "summary": {
      "en": "The ANT & NVDA Perps Carnival on Binance Futures offers 175,000 USDC in leaderboard rewards, 25,000 USDC for new TradFi perps traders, and a 3.5x multiplier on ANTUSDT and NVDAUSDT (3x on 9 other pairs).",
      "zh": "币安合约 ANT 与 NVDA 永续嘉年华：排行榜奖励 175,000 USDC，新 TradFi 永续交易者专享 25,000 USDC，ANTUSDT 与 NVDAUSDT 享 3.5 倍积分加成（另 9 个交易对 3 倍）。",
      "fr": "Le ANT & NVDA Perps Carnival sur Binance Futures offre 175 000 USDC de récompenses au classement, 25 000 USDC pour les nouveaux traders de perpétuels TradFi, et un multiplicateur de 3,5x sur ANTUSDT et NVDAUSDT (3x sur 9 autres paires).",
      "pt": "O ANT & NVDA Perps Carnival na Binance Futures oferece 175.000 USDC em recompensas do ranking, 25.000 USDC para novos traders de perpétuos TradFi e um multiplicador de 3,5x em ANTUSDT e NVDAUSDT (3x em outros 9 pares).",
      "ko": "바이낸스 선물의 ANT와 NVDA 무기한 카니발은 리더보드 보상 175,000 USDC, 신규 TradFi 무기한 거래자 25,000 USDC, ANTUSDT와 NVDAUSDT에 3.5배(다른 9개 페어는 3배) 배율을 제공합니다.",
      "ja": "Binance FuturesのANTとNVDA無期限カーニバルは、リーダーボード報酬175,000 USDC、新規TradFi無期限トレーダー向け25,000 USDC、ANTUSDTとNVDAUSDTに3.5倍（他9ペアは3倍）の倍率を提供します。",
      "ru": "Карнавал бессрочных ANT и NVDA на Binance Futures: 175 000 USDC наград в таблице лидеров, 25 000 USDC новым трейдерам бессрочных TradFi и множитель 3,5x на ANTUSDT и NVDAUSDT (3x на 9 других парах).",
      "fa": "کارناوال پرپچوال ANT و NVDA در Binance Futures شامل ۱۷۵٬۰۰۰ USDC پاداش جدول رده‌بندی، ۲۵٬۰۰۰ USDC برای معامله‌گران جدید پرپچوال TradFi، و ضریب ۳٫۵ برابر برای ANTUSDT و NVDAUSDT (۳ برابر برای ۹ جفت دیگر) است."
    }
  },
  {
    "id": "binance-2026-11-18-seven-new-bstocks",
    "exchange": "binance",
    "date": "2026-11-18",
    "category": "listing",
    "sourceUrl": "https://x.com/binance/status/2123039237402440156",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Binance lists seven new bStock pairs",
      "zh": "币安上线 7 个新 bStock 交易对",
      "fr": "Binance cote sept nouvelles paires bStock",
      "pt": "A Binance lista sete novos pares bStock",
      "ko": "바이낸스, bStock 신규 페어 7개 상장",
      "ja": "Binance、bStockの新規ペア7つを上場",
      "ru": "Binance листинговала семь новых пар bStock",
      "fa": "بایننس هفت جفت جدید bStock را فهرست کرد"
    },
    "summary": {
      "en": "Binance listed EWJB/USDT, EWTB/USDT, EWZB/USDT, EWZSB/USDT, IWMB/USDT, MELIB/USDT and NUB/USDT bStocks with 24/7 access.",
      "zh": "币安上线 EWJB/USDT、EWTB/USDT、EWZB/USDT、EWZSB/USDT、IWMB/USDT、MELIB/USDT 和 NUB/USDT 七个 bStock 交易对，支持 7×24 小时交易。",
      "fr": "Binance a coté les bStocks EWJB/USDT, EWTB/USDT, EWZB/USDT, EWZSB/USDT, IWMB/USDT, MELIB/USDT et NUB/USDT, accessibles 24 h/24, 7 j/7.",
      "pt": "A Binance listou os bStocks EWJB/USDT, EWTB/USDT, EWZB/USDT, EWZSB/USDT, IWMB/USDT, MELIB/USDT e NUB/USDT, com acesso 24/7.",
      "ko": "바이낸스는 EWJB/USDT, EWTB/USDT, EWZB/USDT, EWZSB/USDT, IWMB/USDT, MELIB/USDT, NUB/USDT bStock을 24/7 이용으로 상장했습니다.",
      "ja": "BinanceはEWJB/USDT、EWTB/USDT、EWZB/USDT、EWZSB/USDT、IWMB/USDT、MELIB/USDT、NUB/USDTのbStockを24時間年中無休で上場しました。",
      "ru": "Binance провела листинг bStock EWJB/USDT, EWTB/USDT, EWZB/USDT, EWZSB/USDT, IWMB/USDT, MELIB/USDT и NUB/USDT с доступом 24/7.",
      "fa": "بایننس bStockهای EWJB/USDT، EWTB/USDT، EWZB/USDT، EWZSB/USDT، IWMB/USDT، MELIB/USDT و NUB/USDT را با دسترسی ۲۴/۷ فهرست کرد."
    }
  },
  {
    "id": "binance-2026-11-18-hacked-assets-fully-covered",
    "exchange": "binance",
    "date": "2026-11-18",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2123019313347170504",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Binance says coverage of hacked assets is complete",
      "zh": "币安称已完成被盗资产全额覆盖",
      "fr": "Binance indique que la couverture des actifs piratés est achevée",
      "pt": "A Binance diz que a cobertura dos ativos hackeados está concluída",
      "ko": "바이낸스, 해킹된 자산 보전이 완료됐다고 밝혀",
      "ja": "Binance、ハッキングされた資産の補填が完了したと発表",
      "ru": "Binance сообщила, что покрытие взломанных активов завершено",
      "fa": "بایننس می‌گوید پوشش دارایی‌های هک‌شده کامل شده است"
    },
    "summary": {
      "en": "In an #AskBinance roundup, Binance said user assets remain secure and it has completed coverage of hacked assets from the security incident, absorbing the impact so users did not bear the loss.",
      "zh": "币安在 #AskBinance 问答中表示，用户资产安全，已完成此次安全事件被盗资产的覆盖，损失由币安承担，用户未受损失。",
      "fr": "Dans un récapitulatif #AskBinance, Binance a indiqué que les actifs des utilisateurs restent en sécurité et qu’elle a achevé la couverture des actifs piratés lors de l’incident de sécurité, en absorbant l’impact afin que les utilisateurs ne supportent pas la perte.",
      "pt": "Em um resumo #AskBinance, a Binance informou que os ativos dos usuários permanecem seguros e que concluiu a cobertura dos ativos hackeados no incidente de segurança, absorvendo o impacto para que os usuários não arcassem com a perda.",
      "ko": "바이낸스는 #AskBinance 정리에서 사용자 자산은 안전하며, 보안 사고에서 해킹된 자산의 보전을 마쳐 영향을 흡수했기 때문에 사용자가 손실을 부담하지 않았다고 밝혔습니다.",
      "ja": "Binanceは#AskBinanceのまとめの中で、ユーザー資産は安全なままで、セキュリティ事案でハッキングされた資産の補填を完了し、影響を引き受けたためユーザーは損失を負担しなかったと述べました。",
      "ru": "В подборке #AskBinance Binance сообщила, что активы пользователей остаются в безопасности и что покрытие взломанных активов по инциденту безопасности завершено: последствия взяла на себя биржа, пользователи убыток не понесли.",
      "fa": "بایننس در جمع‌بندی #AskBinance گفت دارایی کاربران امن مانده و پوشش دارایی‌های هک‌شده در رخداد امنیتی را کامل کرده و اثر آن را جذب کرده است تا کاربران زیان را تحمل نکنند."
    }
  },
  {
    "id": "binance-2026-11-19-stock-options-api",
    "exchange": "binance",
    "date": "2026-11-19",
    "category": "product",
    "sourceUrl": "https://x.com/binance/status/2123136662075035756",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Binance launches Stock Options API trading",
      "zh": "币安上线股票期权 API 交易",
      "fr": "Binance lance la négociation d’options sur actions via API",
      "pt": "A Binance lança a negociação de opções de ações por API",
      "ko": "바이낸스, 주식 옵션 API 거래 시작",
      "ja": "Binance、株式オプションのAPI取引を開始",
      "ru": "Binance запустила торговлю опционами на акции через API",
      "fa": "بایننس معامله API اختیار معامله سهام را راه‌اندازی کرد"
    },
    "summary": {
      "en": "Binance Stock Options can now be traded through a REST API: look up option contracts, place and cancel orders, exercise long positions, and query positions, orders, fills and settlement events.",
      "zh": "币安股票期权现可通过 REST API 交易：查询期权合约、下单与撤单、行权多头持仓，以及查询持仓、订单、成交和结算事件。",
      "fr": "Les options sur actions de Binance peuvent désormais se négocier via une API REST : consulter les contrats d’options, passer et annuler des ordres, exercer des positions longues, et interroger les positions, les ordres, les exécutions et les événements de règlement.",
      "pt": "As opções de ações da Binance agora podem ser negociadas por uma API REST: consultar contratos de opção, enviar e cancelar ordens, exercer posições compradas e consultar posições, ordens, execuções e eventos de liquidação.",
      "ko": "바이낸스 주식 옵션은 이제 REST API로 거래할 수 있습니다. 옵션 계약을 조회하고, 주문을 넣고 취소하고, 롱 포지션을 행사하며, 포지션, 주문, 체결, 결제 이벤트를 조회할 수 있습니다.",
      "ja": "Binanceの株式オプションはREST APIで取引できます。オプション契約の照会、注文の発注と取消、ロングポジションの行使、そしてポジション、注文、約定、決済イベントの照会ができます。",
      "ru": "Опционами на акции Binance теперь можно торговать через REST API: смотреть контракты, выставлять и отменять ордера, исполнять длинные позиции и запрашивать позиции, ордера, исполнения и события расчётов.",
      "fa": "اختیار معامله سهام بایننس اکنون از راه REST API قابل معامله است: جست‌وجوی قراردادهای اختیار، ثبت و لغو سفارش، اعمال موقعیت‌های خرید، و استعلام موقعیت‌ها، سفارش‌ها، معاملات و رویدادهای تسویه."
    }
  },
  {
    "id": "binance-2026-11-19-por-198-tokens",
    "exchange": "binance",
    "date": "2026-11-19",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2123397190747865522",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Binance Proof of Reserves now covers 198 tokens",
      "zh": "币安储备金证明覆盖 198 种代币",
      "fr": "La preuve de réserves de Binance couvre désormais 198 jetons",
      "pt": "A prova de reservas da Binance agora cobre 198 tokens",
      "ko": "바이낸스 준비금 증명, 이제 198개 토큰을 포함",
      "ja": "Binanceの準備金証明が198トークンをカバー",
      "ru": "Proof of Reserves Binance теперь охватывает 198 токенов",
      "fa": "اثبات ذخایر بایننس اکنون ۱۹۸ توکن را پوشش می‌دهد"
    },
    "summary": {
      "en": "Binance's latest Proof of Reserves snapshot covers 198 tokens; users can verify their assets under Wallet → Verification by choosing a date.",
      "zh": "币安最新储备金证明快照覆盖 198 种代币，用户可在「钱包 → 验证」中选择日期核验自己的资产。",
      "fr": "Le dernier instantané de preuve de réserves de Binance couvre 198 jetons ; les utilisateurs peuvent vérifier leurs actifs dans Portefeuille → Vérification en choisissant une date.",
      "pt": "O snapshot mais recente de prova de reservas da Binance cobre 198 tokens; os usuários podem verificar seus ativos em Carteira → Verificação escolhendo uma data.",
      "ko": "바이낸스의 최신 준비금 증명 스냅샷은 198개 토큰을 포함하며, 사용자는 지갑 → 검증에서 날짜를 선택해 자산을 확인할 수 있습니다.",
      "ja": "Binanceの最新の準備金証明スナップショットは198トークンを対象とし、ユーザーはウォレット → 検証で日付を選んで資産を確認できます。",
      "ru": "Последний снимок Proof of Reserves Binance охватывает 198 токенов; пользователи могут проверить свои активы в разделе «Кошелёк → Проверка», выбрав дату.",
      "fa": "جدیدترین تصویر اثبات ذخایر بایننس ۱۹۸ توکن را پوشش می‌دهد؛ کاربران می‌توانند در کیف پول → تأیید، با انتخاب تاریخ، دارایی خود را بررسی کنند."
    }
  },
  {
    "id": "binance-2026-11-20-antb-bstock",
    "exchange": "binance",
    "date": "2026-11-20",
    "category": "listing",
    "sourceUrl": "https://x.com/binance/status/2123476399965286459",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Binance lists Anthropic bStock ANTB/USDT",
      "zh": "币安上线 Anthropic bStock ANTB/USDT",
      "fr": "Binance cote le bStock Anthropic ANTB/USDT",
      "pt": "A Binance lista o bStock da Anthropic ANTB/USDT",
      "ko": "바이낸스, Anthropic bStock ANTB/USDT 상장",
      "ja": "Binance、AnthropicのbStock ANTB/USDTを上場",
      "ru": "Binance листинговала bStock Anthropic ANTB/USDT",
      "fa": "بایننس bStock مربوط به Anthropic، ANTB/USDT را فهرست کرد"
    },
    "summary": {
      "en": "Binance listed the ANTB/USDT bStock with 24/7 access and 1:1 free, instant exchange for the underlying stock.",
      "zh": "币安上线 ANTB/USDT bStock，支持 7×24 小时交易，并可 1:1 免费即时兑换为对应股票。",
      "fr": "Binance a coté le bStock ANTB/USDT, accessible 24 h/24, 7 j/7, avec un échange gratuit et instantané 1:1 contre l’action sous-jacente.",
      "pt": "A Binance listou o bStock ANTB/USDT com acesso 24/7 e troca gratuita e instantânea de 1:1 pela ação subjacente.",
      "ko": "바이낸스는 ANTB/USDT bStock을 24/7 이용과 기초 주식으로의 1:1 무료 즉시 교환과 함께 상장했습니다.",
      "ja": "BinanceはANTB/USDTのbStockを、24時間年中無休の利用と原株への1:1の無料即時交換付きで上場しました。",
      "ru": "Binance провела листинг bStock ANTB/USDT с доступом 24/7 и бесплатным мгновенным обменом 1:1 на базовую акцию.",
      "fa": "بایننس bStock جفت ANTB/USDT را با دسترسی ۲۴/۷ و تبدیل رایگان و آنی ۱:۱ به سهام پایه فهرست کرد."
    }
  },
  {
    "id": "binance-2026-11-20-monitoring-tag-update",
    "exchange": "binance",
    "date": "2026-11-20",
    "category": "listing",
    "sourceUrl": "https://x.com/binance/status/2123667402626142607",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Binance adds six tokens to the Monitoring Tag, removes Seed Tag for MORPHO and HYPE",
      "zh": "币安将 6 个代币加入监控标签，移除 MORPHO 与 HYPE 种子标签",
      "fr": "Binance ajoute six jetons au Monitoring Tag et retire le Seed Tag de MORPHO et HYPE",
      "pt": "A Binance adiciona seis tokens à Monitoring Tag e remove a Seed Tag de MORPHO e HYPE",
      "ko": "바이낸스, 토큰 6개를 모니터링 태그에 추가하고 MORPHO와 HYPE의 시드 태그 제거",
      "ja": "Binance、6トークンをモニタリングタグに追加し、MORPHOとHYPEのシードタグを解除",
      "ru": "Binance добавила шесть токенов в Monitoring Tag и сняла Seed Tag с MORPHO и HYPE",
      "fa": "بایننس شش توکن را به برچسب نظارت افزود و برچسب Seed را از MORPHO و HYPE برداشت"
    },
    "summary": {
      "en": "On 2026-11-20 Binance extended the Monitoring Tag to BANK, INIT, MITO, ONE, THE and ZIL, and removed the Seed Tag for MORPHO and HYPE.",
      "zh": "币安于 2026-11-20 将 BANK、INIT、MITO、ONE、THE 和 ZIL 纳入监控标签，并移除 MORPHO 与 HYPE 的种子标签。",
      "fr": "Le 2026-11-20, Binance a étendu le Monitoring Tag à BANK, INIT, MITO, ONE, THE et ZIL, et a retiré le Seed Tag de MORPHO et HYPE.",
      "pt": "Em 2026-11-20, a Binance estendeu a Monitoring Tag a BANK, INIT, MITO, ONE, THE e ZIL, e removeu a Seed Tag de MORPHO e HYPE.",
      "ko": "2026-11-20 바이낸스는 모니터링 태그를 BANK, INIT, MITO, ONE, THE, ZIL로 확대하고 MORPHO와 HYPE의 시드 태그를 제거했습니다.",
      "ja": "2026-11-20、BinanceはモニタリングタグをBANK、INIT、MITO、ONE、THE、ZILに広げ、MORPHOとHYPEのシードタグを外しました。",
      "ru": "2026-11-20 Binance распространила Monitoring Tag на BANK, INIT, MITO, ONE, THE и ZIL и сняла Seed Tag с MORPHO и HYPE.",
      "fa": "در ۲۰ نوامبر ۲۰۲۶ بایننس برچسب نظارت را به BANK، INIT، MITO، ONE، THE و ZIL گسترش داد و برچسب Seed را از MORPHO و HYPE برداشت."
    }
  },
  {
    "id": "binance-2026-11-20-usd1-rewards-extended",
    "exchange": "binance",
    "date": "2026-11-20",
    "category": "promotion",
    "sourceUrl": "https://x.com/binance/status/2123763784212693363",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Binance extends the USD1 rewards campaign",
      "zh": "币安延长 USD1 持仓奖励活动",
      "fr": "Binance prolonge la campagne de récompenses USD1",
      "pt": "A Binance prorroga a campanha de recompensas de USD1",
      "ko": "바이낸스, USD1 보상 캠페인 연장",
      "ja": "Binance、USD1報酬キャンペーンを延長",
      "ru": "Binance продлила кампанию наград USD1",
      "fa": "بایننس کمپین پاداش USD1 را تمدید کرد"
    },
    "summary": {
      "en": "Binance extended its USD1 rewards campaign with an expanded reward pool; holding USD1 in any account earns an estimated APR of up to 10%.",
      "zh": "币安延长 USD1 奖励活动并扩大奖池，在任意账户持有 USD1 预估年化最高 10%。",
      "fr": "Binance a prolongé sa campagne de récompenses USD1 avec une cagnotte élargie ; détenir de l’USD1 sur n’importe quel compte rapporte un APR estimé pouvant atteindre 10 %.",
      "pt": "A Binance prorrogou a campanha de recompensas de USD1 com um prêmio ampliado; manter USD1 em qualquer conta rende um APR estimado de até 10%.",
      "ko": "바이낸스는 USD1 보상 캠페인을 보상 풀을 늘려 연장했으며, 어떤 계정이든 USD1을 보유하면 예상 연이율 최대 10%를 받습니다.",
      "ja": "BinanceはUSD1報酬キャンペーンを報酬プールを拡大して延長し、どの口座でもUSD1を保有すると推定年率最大10%になります。",
      "ru": "Binance продлила кампанию наград USD1 с расширенным пулом; хранение USD1 на любом счёте даёт оценочную годовую ставку до 10%.",
      "fa": "بایننس کمپین پاداش USD1 را با استخر پاداش بزرگ‌تر تمدید کرد؛ نگهداری USD1 در هر حساب نرخ سالانه برآوردی تا ۱۰٪ دارد."
    }
  },
  {
    "id": "binance-2026-11-21-stablecoin-simple-earn-5pct",
    "exchange": "binance",
    "date": "2026-11-21",
    "category": "promotion",
    "sourceUrl": "https://x.com/binance/status/2124019980635340874",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Binance renews USDC & USDT Simple Earn campaign at up to 5% APR",
      "zh": "币安重启 USDC/USDT 活期理财活动，年化最高 5%",
      "fr": "Binance relance la campagne Simple Earn USDC et USDT jusqu’à 5 % d’APR",
      "pt": "A Binance renova a campanha Simple Earn de USDC e USDT com até 5% de APR",
      "ko": "바이낸스, USDC·USDT Simple Earn 캠페인을 최대 연 5%로 재개",
      "ja": "Binance、USDCとUSDTのSimple Earnキャンペーンを最大年率5%で再開",
      "ru": "Binance возобновила кампанию Simple Earn по USDC и USDT до 5% годовых",
      "fa": "بایننس کمپین Simple Earn برای USDC و USDT را با APR تا ۵٪ از سر گرفت"
    },
    "summary": {
      "en": "Binance Earn renewed its USDC & USDT Simple Earn Flexible Products campaign, offering up to 5% APR on stablecoins.",
      "zh": "币安理财重启 USDC 与 USDT 活期产品活动，稳定币年化最高 5%。",
      "fr": "Binance Earn a relancé sa campagne Simple Earn Flexible Products sur USDC et USDT, avec jusqu’à 5 % d’APR sur les stablecoins.",
      "pt": "O Binance Earn renovou a campanha Simple Earn Flexible Products de USDC e USDT, oferecendo até 5% de APR em stablecoins.",
      "ko": "Binance Earn은 USDC와 USDT Simple Earn 플렉시블 상품 캠페인을 재개해 스테이블코인에 최대 연 5%를 제공합니다.",
      "ja": "Binance EarnはUSDCとUSDTのSimple Earnフレキシブル商品キャンペーンを再開し、ステーブルコインで最大年率5%を提供します。",
      "ru": "Binance Earn возобновила кампанию Simple Earn Flexible Products по USDC и USDT с доходностью до 5% годовых на стейблкоины.",
      "fa": "Binance Earn کمپین Simple Earn Flexible Products برای USDC و USDT را از سر گرفت و روی استیبل‌کوین تا ۵٪ APR می‌دهد."
    }
  },
  {
    "id": "binance-2026-11-22-bstocks-collateral",
    "exchange": "binance",
    "date": "2026-11-22",
    "category": "product",
    "sourceUrl": "https://x.com/binance/status/2124386301432696952",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Binance adds 7 bStocks as collateral assets",
      "zh": "币安新增 7 个 bStocks 作为抵押资产",
      "fr": "Binance ajoute 7 bStocks comme actifs de collatéral",
      "pt": "A Binance adiciona 7 bStocks como ativos de colateral",
      "ko": "바이낸스, bStocks 7개를 담보 자산으로 추가",
      "ja": "Binance、bStocks 7つを担保資産に追加",
      "ru": "Binance добавила 7 bStocks как залоговые активы",
      "fa": "بایننس ۷ دارایی bStocks را به‌عنوان وثیقه اضافه کرد"
    },
    "summary": {
      "en": "Binance added 7 bStocks tokenized securities as collateral assets.",
      "zh": "币安新增 7 个 bStocks 代币化证券作为抵押资产。",
      "fr": "Binance a ajouté 7 titres tokenisés bStocks comme actifs de collatéral.",
      "pt": "A Binance adicionou 7 valores mobiliários tokenizados bStocks como ativos de colateral.",
      "ko": "바이낸스는 토큰화 증권 bStocks 7개를 담보 자산으로 추가했습니다.",
      "ja": "Binanceはトークン化証券のbStocks 7つを担保資産に追加しました。",
      "ru": "Binance добавила 7 токенизированных бумаг bStocks как залоговые активы.",
      "fa": "بایننس ۷ اوراق بهادار توکنیزه‌شده bStocks را به‌عنوان دارایی وثیقه اضافه کرد."
    }
  },
  {
    "id": "binance-2026-11-22-velodrome-merge-aero",
    "exchange": "binance",
    "date": "2026-11-22",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2124386314758087081",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "Binance completes VELODROME merge into AERO",
      "zh": "币安完成 VELODROME 合并至 AERO",
      "fr": "Binance achève la fusion de VELODROME dans AERO",
      "pt": "A Binance conclui a fusão de VELODROME em AERO",
      "ko": "바이낸스, VELODROME의 AERO 병합을 완료",
      "ja": "Binance、VELODROMEのAEROへのマージを完了",
      "ru": "Binance завершила слияние VELODROME в AERO",
      "fa": "بایننس ادغام VELODROME در AERO را کامل کرد"
    },
    "summary": {
      "en": "Binance completed the Velodrome Finance (VELODROME) token merge to Aerodrome (AERO) and the AERO contract swap.",
      "zh": "币安已完成 Velodrome Finance（VELODROME）代币合并至 Aerodrome（AERO）及 AERO 合约置换。",
      "fr": "Binance a achevé la fusion du jeton Velodrome Finance (VELODROME) vers Aerodrome (AERO) et l’échange de contrat AERO.",
      "pt": "A Binance concluiu a fusão do token Velodrome Finance (VELODROME) para Aerodrome (AERO) e a troca de contrato da AERO.",
      "ko": "바이낸스는 Velodrome Finance(VELODROME) 토큰을 Aerodrome(AERO)으로 병합하고 AERO 계약 스왑을 완료했습니다.",
      "ja": "BinanceはVelodrome Finance（VELODROME）トークンのAerodrome（AERO）へのマージとAEROコントラクトのスワップを完了しました。",
      "ru": "Binance завершила слияние токена Velodrome Finance (VELODROME) в Aerodrome (AERO) и своп контракта AERO.",
      "fa": "بایننس ادغام توکن Velodrome Finance (VELODROME) به Aerodrome (AERO) و تعویض قرارداد AERO را کامل کرد."
    }
  },
  {
    "id": "okx-2026-11-17-jct-perps",
    "exchange": "okx",
    "date": "2026-11-17",
    "category": "listing",
    "sourceUrl": "https://x.com/okx/status/2122378161329447256",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "OKX lists JCTUSDT perpetual futures",
      "zh": "OKX 上线 JCTUSDT 永续合约",
      "fr": "OKX cote les contrats à terme perpétuels JCTUSDT",
      "pt": "A OKX lista os futuros perpétuos JCTUSDT",
      "ko": "OKX, JCTUSDT 무기한 선물 상장",
      "ja": "OKX、JCTUSDTの無期限先物を上場",
      "ru": "OKX листинговала бессрочные фьючерсы JCTUSDT",
      "fa": "OKX معاملات آتی دائمی JCTUSDT را فهرست کرد"
    },
    "summary": {
      "en": "OKX launched global JCTUSDT perpetual futures for Janction (JCT), a Layer-2 network providing AI services.",
      "zh": "OKX 上线 Janction（JCT）的 JCTUSDT 全球永续合约，JCT 是提供 AI 服务的二层网络。",
      "fr": "OKX a lancé les contrats à terme perpétuels JCTUSDT mondiaux pour Janction (JCT), un réseau de couche 2 qui fournit des services d’IA.",
      "pt": "A OKX lançou futuros perpétuos JCTUSDT globais para a Janction (JCT), uma rede de camada 2 que fornece serviços de IA.",
      "ko": "OKX는 AI 서비스를 제공하는 레이어 2 네트워크 Janction(JCT)의 글로벌 JCTUSDT 무기한 선물을 출시했습니다.",
      "ja": "OKXは、AIサービスを提供するレイヤー2ネットワークJanction（JCT）のグローバルなJCTUSDT無期限先物を開始しました。",
      "ru": "OKX запустила глобальные бессрочные фьючерсы JCTUSDT на Janction (JCT), сеть второго уровня, которая предоставляет ИИ-сервисы.",
      "fa": "OKX معاملات آتی دائمی جهانی JCTUSDT را برای Janction (JCT) راه‌اندازی کرد؛ JCT یک شبکه لایه ۲ است که خدمات هوش مصنوعی ارائه می‌دهد."
    }
  },
  {
    "id": "okx-2026-11-18-anthropic-ipo-carnival",
    "exchange": "okx",
    "date": "2026-11-18",
    "category": "promotion",
    "sourceUrl": "https://x.com/okx/status/2122925275407126769",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "OKX Anthropic IPO Carnival offers 250,000 USDT",
      "zh": "OKX Anthropic IPO 嘉年华奖池 250,000 USDT",
      "fr": "L’Anthropic IPO Carnival d’OKX offre 250 000 USDT",
      "pt": "O Anthropic IPO Carnival da OKX oferece 250.000 USDT",
      "ko": "OKX Anthropic IPO 카니발, 250,000 USDT 제공",
      "ja": "OKXのAnthropic IPOカーニバルは250,000 USDT",
      "ru": "Anthropic IPO Carnival на OKX: 250 000 USDT",
      "fa": "کارناوال Anthropic IPO در OKX ۲۵۰٬۰۰۰ USDT می‌دهد"
    },
    "summary": {
      "en": "OKX's Anthropic IPO Carnival offers 250,000 USDT in rewards across a pre-IPO trading competition and special Outcomes events, in eligible regions only.",
      "zh": "OKX 推出 Anthropic IPO 嘉年华，通过 IPO 前交易大赛和 Outcomes 专题活动发放共 250,000 USDT 奖励，仅限合格地区。",
      "fr": "L’Anthropic IPO Carnival d’OKX offre 250 000 USDT de récompenses entre une compétition de trading pré-IPO et des événements Outcomes spéciaux, uniquement dans les régions éligibles.",
      "pt": "O Anthropic IPO Carnival da OKX oferece 250.000 USDT em recompensas entre uma competição de trading pré-IPO e eventos especiais de Outcomes, apenas em regiões elegíveis.",
      "ko": "OKX의 Anthropic IPO 카니발은 상장 전 거래 대회와 특별 Outcomes 이벤트로 250,000 USDT 보상을 제공하며, 자격 있는 지역에서만 진행됩니다.",
      "ja": "OKXのAnthropic IPOカーニバルは、上場前の取引コンテストと特別なOutcomesイベントで250,000 USDTの報酬を提供し、対象地域のみです。",
      "ru": "Anthropic IPO Carnival на OKX раздаёт 250 000 USDT через пред-IPO соревнование по торговле и специальные события Outcomes, только в подходящих регионах.",
      "fa": "کارناوال Anthropic IPO در OKX در یک مسابقه معامله پیش از IPO و رویدادهای ویژه Outcomes در مجموع ۲۵۰٬۰۰۰ USDT پاداش می‌دهد و فقط در مناطق واجد شرایط است."
    }
  },
  {
    "id": "okx-2026-11-18-morpho-stock-token-collateral",
    "exchange": "okx",
    "date": "2026-11-18",
    "category": "product",
    "sourceUrl": "https://x.com/okx/status/2122994388804706438",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "OKX brings boosted stock-token collateral rates with Morpho on X Layer",
      "zh": "OKX 联合 Morpho 在 X Layer 推出股票代币抵押借贷",
      "fr": "OKX relève les taux de collatéral des jetons d’actions avec Morpho sur X Layer",
      "pt": "A OKX traz taxas de colateral ampliadas para tokens de ações com a Morpho na X Layer",
      "ko": "OKX, X Layer에서 Morpho와 함께 주식 토큰 담보율 상향",
      "ja": "OKX、X LayerでMorphoとともに株式トークンの担保率を引き上げ",
      "ru": "OKX с Morpho на X Layer повысила ставки залога для токенов акций",
      "fa": "OKX با Morpho روی X Layer نرخ وثیقه توکن سهام را بالا برد"
    },
    "summary": {
      "en": "Through a partnership with Morpho on X Layer, users can deposit xStocks tokenized stocks as collateral to borrow USDC, with boosted collateral rates and a vault curated by Gauntlet.",
      "zh": "OKX 与 Morpho 合作，在 X Layer 上可用 xStocks 代币化股票作抵押借入 USDC，抵押率提升，金库由 Gauntlet 管理。",
      "fr": "Grâce à un partenariat avec Morpho sur X Layer, les utilisateurs peuvent déposer des actions tokenisées xStocks comme collatéral pour emprunter des USDC, avec des taux de collatéral relevés et un coffre sélectionné par Gauntlet.",
      "pt": "Por uma parceria com a Morpho na X Layer, usuários podem depositar ações tokenizadas xStocks como colateral para tomar USDC emprestado, com taxas de colateral ampliadas e um cofre curado pela Gauntlet.",
      "ko": "X Layer에서 Morpho와의 제휴를 통해 사용자는 xStocks 토큰화 주식을 담보로 예치해 USDC를 빌릴 수 있으며, 담보율이 상향되고 금고는 Gauntlet이 큐레이션합니다.",
      "ja": "X LayerでのMorphoとの提携により、ユーザーはxStocksのトークン化株式を担保に預けてUSDCを借りられ、担保率が引き上げられ、ボルトはGauntletがキュレーションします。",
      "ru": "В партнёрстве с Morpho на X Layer пользователи могут внести токенизированные акции xStocks как залог и занять USDC, с повышенными ставками залога и хранилищем, которое курирует Gauntlet.",
      "fa": "با همکاری Morpho روی X Layer، کاربران می‌توانند سهام توکنیزه‌شده xStocks را به‌عنوان وثیقه بسپارند و USDC قرض بگیرند، با نرخ وثیقه بالاتر و خزانه‌ای که Gauntlet آن را گزینش می‌کند."
    }
  },
  {
    "id": "okx-2026-11-18-x-drops-tao-europe",
    "exchange": "okx",
    "date": "2026-11-18",
    "category": "promotion",
    "sourceUrl": "https://x.com/okx/status/2123038568478122259",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "OKX X Drops in Europe shares 1,050 TAO",
      "zh": "OKX 欧洲站 X Drops 瓜分 1,050 TAO",
      "fr": "X Drops d’OKX en Europe partage 1 050 TAO",
      "pt": "O X Drops da OKX na Europa reparte 1.050 TAO",
      "ko": "OKX 유럽 X Drops, 1,050 TAO 배분",
      "ja": "OKX欧州のX Dropsで1,050 TAOを分配",
      "ru": "X Drops OKX в Европе: 1 050 TAO",
      "fa": "X Drops مربوط به OKX در اروپا ۱٬۰۵۰ TAO را تقسیم می‌کند"
    },
    "summary": {
      "en": "From November 18 to 22, OKX Europe users trading TAO, ZEC, HYPE, LINK, SUI, NEAR, UNI, AERO, LIT or ENA can share 1,050 TAO, with a 3x multiplier on TAO trades.",
      "zh": "11 月 18 日至 22 日，OKX 欧洲用户交易 TAO、ZEC、HYPE、LINK、SUI、NEAR、UNI、AERO、LIT 或 ENA 可瓜分 1,050 TAO，TAO 交易享 3 倍加成。",
      "fr": "Du 18 au 22 novembre, les utilisateurs d’OKX Europe qui négocient TAO, ZEC, HYPE, LINK, SUI, NEAR, UNI, AERO, LIT ou ENA peuvent se partager 1 050 TAO, avec un multiplicateur de 3x sur les transactions TAO.",
      "pt": "De 18 a 22 de novembro, usuários da OKX Europa que negociarem TAO, ZEC, HYPE, LINK, SUI, NEAR, UNI, AERO, LIT ou ENA podem dividir 1.050 TAO, com multiplicador de 3x nas negociações de TAO.",
      "ko": "11월 18일부터 22일까지 TAO, ZEC, HYPE, LINK, SUI, NEAR, UNI, AERO, LIT 또는 ENA를 거래하는 OKX 유럽 사용자는 1,050 TAO를 나눌 수 있으며, TAO 거래는 3배입니다.",
      "ja": "11月18日から22日まで、TAO、ZEC、HYPE、LINK、SUI、NEAR、UNI、AERO、LITまたはENAを取引するOKX欧州のユーザーは1,050 TAOを分け合え、TAO取引は3倍です。",
      "ru": "С 18 по 22 ноября пользователи OKX Europe, торгующие TAO, ZEC, HYPE, LINK, SUI, NEAR, UNI, AERO, LIT или ENA, могут разделить 1 050 TAO, с множителем 3x на сделки TAO.",
      "fa": "از ۱۸ تا ۲۲ نوامبر، کاربران OKX اروپا که TAO، ZEC، HYPE، LINK، SUI، NEAR، UNI، AERO، LIT یا ENA معامله کنند می‌توانند ۱٬۰۵۰ TAO را تقسیم کنند و معامله TAO ضریب ۳ برابر دارد."
    },
    "startsAt": "2026-11-18",
    "endsAt": "2026-11-22"
  },
  {
    "id": "okx-2026-11-19-europe-usdt-to-usdc-bonus",
    "exchange": "okx",
    "date": "2026-11-19",
    "category": "promotion",
    "sourceUrl": "https://x.com/okx/status/2123144215173501150",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "OKX Europe offers 8% bonus for USDT transfers converted to USDC",
      "zh": "OKX 欧洲：转入 USDT 免费换 USDC 享 8% 奖励",
      "fr": "OKX Europe offre un bonus de 8 % pour les transferts d’USDT convertis en USDC",
      "pt": "A OKX Europa oferece bônus de 8% para transferências de USDT convertidas em USDC",
      "ko": "OKX 유럽, USDT를 이체해 USDC로 바꾸면 8% 보너스",
      "ja": "OKX欧州、USDTを送金してUSDCに換えると8%ボーナス",
      "ru": "OKX Europe: бонус 8% за перевод USDT с конвертацией в USDC",
      "fa": "OKX اروپا برای انتقال USDT و تبدیل به USDC پاداش ۸٪ می‌دهد"
    },
    "summary": {
      "en": "OKX invited European users holding USDT elsewhere to transfer it to OKX, convert to USDC for free, and receive an 8% bonus up to €3,500.",
      "zh": "OKX 邀请在其他平台持有 USDT 的欧洲用户转入 OKX，免费兑换为 USDC，并获最高 3,500 欧元的 8% 奖励。",
      "fr": "OKX a invité les utilisateurs européens qui détiennent de l’USDT ailleurs à le transférer vers OKX, à le convertir gratuitement en USDC et à recevoir un bonus de 8 % jusqu’à 3 500 €.",
      "pt": "A OKX convidou usuários europeus que têm USDT em outro lugar a transferi-lo para a OKX, converter em USDC de graça e receber um bônus de 8% de até € 3.500.",
      "ko": "OKX는 다른 곳에 USDT를 둔 유럽 사용자에게 이를 OKX로 이체하고 무료로 USDC로 바꾼 뒤 최대 €3,500의 8% 보너스를 받으라고 초대했습니다.",
      "ja": "OKXは、他でUSDTを持つ欧州のユーザーに、OKXへ送金し、無料でUSDCに換えて、最大3,500ユーロの8%ボーナスを受け取るよう呼びかけました。",
      "ru": "OKX пригласила европейских пользователей, которые держат USDT на других площадках, перевести его на OKX, бесплатно конвертировать в USDC и получить бонус 8% до €3 500.",
      "fa": "OKX از کاربران اروپایی که جای دیگر USDT دارند دعوت کرد آن را به OKX منتقل کنند، رایگان به USDC تبدیل کنند و پاداش ۸٪ تا ۳٬۵۰۰ یورو بگیرند."
    }
  },
  {
    "id": "okx-2026-11-20-anthropic-tokenized-stocks",
    "exchange": "okx",
    "date": "2026-11-20",
    "category": "listing",
    "sourceUrl": "https://x.com/okx/status/2123458816637333812",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "OKX lists Anthropic tokenized stocks, global perps and X-Perps",
      "zh": "OKX 上线 Anthropic 代币化股票、全球永续与 X-Perps",
      "fr": "OKX cote les actions tokenisées, les perpétuels mondiaux et les X-Perps Anthropic",
      "pt": "A OKX lista ações tokenizadas, perpétuos globais e X-Perps da Anthropic",
      "ko": "OKX, Anthropic 토큰화 주식·글로벌 무기한·X-Perps 상장",
      "ja": "OKX、Anthropicのトークン化株式、グローバル無期限、X-Perpsを上場",
      "ru": "OKX листинговала токенизированные акции Anthropic, глобальные бессрочные контракты и X-Perps",
      "fa": "OKX سهام توکنیزه‌شده، پرپچوال جهانی و X-Perps مربوط به Anthropic را فهرست کرد"
    },
    "summary": {
      "en": "OKX made Anthropic tokenized stocks, global perps and X-Perps in Europe live, available in eligible regions.",
      "zh": "OKX 上线 Anthropic 代币化股票、全球永续合约以及欧洲 X-Perps，仅限合格地区。",
      "fr": "OKX a rendu disponibles les actions tokenisées Anthropic, les perpétuels mondiaux et les X-Perps en Europe, dans les régions éligibles.",
      "pt": "A OKX colocou no ar as ações tokenizadas da Anthropic, os perpétuos globais e os X-Perps na Europa, disponíveis em regiões elegíveis.",
      "ko": "OKX는 Anthropic 토큰화 주식, 글로벌 무기한 계약, 유럽 X-Perps를 개시했으며 자격 있는 지역에서 이용할 수 있습니다.",
      "ja": "OKXはAnthropicのトークン化株式、グローバル無期限契約、欧州のX-Perpsを開始し、対象地域で利用できます。",
      "ru": "OKX запустила токенизированные акции Anthropic, глобальные бессрочные контракты и X-Perps в Европе; доступно в подходящих регионах.",
      "fa": "OKX سهام توکنیزه‌شده Anthropic، پرپچوال جهانی و X-Perps اروپا را فعال کرد و در مناطق واجد شرایط در دسترس است."
    }
  },
  {
    "id": "okx-2026-11-20-europe-8pct-apr-deposit",
    "exchange": "okx",
    "date": "2026-11-20",
    "category": "promotion",
    "sourceUrl": "https://x.com/okx/status/2123708112381300937",
    "checkedAt": "2026-11-23",
    "title": {
      "en": "OKX Europe offers 8% APR on eligible crypto deposits",
      "zh": "OKX 欧洲：存入合格加密资产享 8% 年化",
      "fr": "OKX Europe offre 8 % d’APR sur les dépôts crypto éligibles",
      "pt": "A OKX Europa oferece 8% de APR em depósitos de cripto elegíveis",
      "ko": "OKX 유럽, 자격 있는 암호화폐 입금에 연 8%",
      "ja": "OKX欧州、対象の暗号資産入金に年率8%",
      "ru": "OKX Europe: 8% годовых на подходящие криптодепозиты",
      "fa": "OKX اروپا برای واریز رمزارز واجد شرایط APR ۸٪ می‌دهد"
    },
    "summary": {
      "en": "OKX offers 8% APR, paid over three months, on deposits of eligible crypto such as BTC, SOL, ETH and XRP, live in France, Spain, Italy, Poland, Sweden and Belgium until December 10.",
      "zh": "OKX 对存入 BTC、SOL、ETH、XRP 等合格加密资产提供 8% 年化，分三个月发放，在法国、西班牙、意大利、波兰、瑞典和比利时开放至 12 月 10 日。",
      "fr": "OKX offre 8 % d’APR, versés sur trois mois, sur les dépôts de crypto éligibles comme BTC, SOL, ETH et XRP, en France, en Espagne, en Italie, en Pologne, en Suède et en Belgique jusqu’au 10 décembre.",
      "pt": "A OKX oferece 8% de APR, pagos ao longo de três meses, sobre depósitos de cripto elegíveis como BTC, SOL, ETH e XRP, ativo na França, Espanha, Itália, Polônia, Suécia e Bélgica até 10 de dezembro.",
      "ko": "OKX는 BTC, SOL, ETH, XRP 등 자격 있는 암호화폐 입금에 연 8%를 석 달에 걸쳐 지급하며, 프랑스, 스페인, 이탈리아, 폴란드, 스웨덴, 벨기에에서 12월 10일까지 진행됩니다.",
      "ja": "OKXはBTC、SOL、ETH、XRPなどの対象暗号資産の入金に年率8%を3か月にわたって支払い、フランス、スペイン、イタリア、ポーランド、スウェーデン、ベルギーで12月10日まで実施します。",
      "ru": "OKX даёт 8% годовых, с выплатой в течение трёх месяцев, на депозиты подходящих криптоактивов, таких как BTC, SOL, ETH и XRP, во Франции, Испании, Италии, Польше, Швеции и Бельгии до 10 декабря.",
      "fa": "OKX برای واریز رمزارز واجد شرایط مانند BTC، SOL، ETH و XRP نرخ سالانه ۸٪ می‌دهد که در سه ماه پرداخت می‌شود و تا ۱۰ دسامبر در فرانسه، اسپانیا، ایتالیا، لهستان، سوئد و بلژیک فعال است."
    },
    "endsAt": "2026-12-10"
  },
  {
    "id": "backpack-2026-11-15-ios-widgets",
    "exchange": "backpack",
    "date": "2026-11-15",
    "category": "product",
    "sourceUrl": "https://x.com/Backpack/status/2121950512778215816",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Backpack adds iOS Home Screen widgets",
      "zh": "Backpack 推出 iOS 主屏幕小组件",
      "fr": "Backpack ajoute des widgets d’écran d’accueil iOS",
      "pt": "Backpack adiciona widgets da Tela de Início no iOS",
      "ko": "Backpack, iOS 홈 화면 위젯 추가",
      "ja": "Backpack、iOSホーム画面ウィジェットを追加",
      "ru": "Backpack добавила виджеты домашнего экрана iOS",
      "fa": "Backpack ویجت‌های صفحه اصلی iOS را اضافه کرد"
    },
    "summary": {
      "en": "Backpack introduced Home Screen widgets for iOS, showing prices, markets, and upcoming earnings.",
      "zh": "Backpack 推出 iOS 主屏幕小组件，可查看价格、市场和即将发布的财报。",
      "fr": "Backpack a présenté des widgets d’écran d’accueil pour iOS, qui affichent les prix, les marchés et les prochaines publications de résultats.",
      "pt": "A Backpack apresentou widgets da Tela de Início para iOS, mostrando preços, mercados e as próximas divulgações de resultados.",
      "ko": "Backpack은 가격, 시장, 예정된 실적을 보여주는 iOS 홈 화면 위젯을 도입했습니다.",
      "ja": "Backpackは、価格、市場、今後の決算を表示するiOSのホーム画面ウィジェットを導入しました。",
      "ru": "Backpack представила виджеты домашнего экрана для iOS: цены, рынки и ближайшие отчёты о прибыли.",
      "fa": "Backpack ویجت‌های صفحه اصلی iOS را معرفی کرد که قیمت‌ها، بازارها و گزارش‌های سود پیش رو را نشان می‌دهند."
    }
  },
  {
    "id": "binance-2026-11-14-zk-por-proof",
    "exchange": "binance",
    "date": "2026-11-14",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2121557669618339988",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Binance says its Proof of Reserves ZK proof is now ready",
      "zh": "币安称储备证明的零知识证明已生成",
      "fr": "Binance indique que la preuve ZK de ses réserves est prête",
      "pt": "Binance diz que a prova ZK das reservas já está pronta",
      "ko": "바이낸스, 준비금 증명의 ZK 증명이 준비됐다고 밝혀",
      "ja": "Binance、準備金証明のZK証明が用意できたと発表",
      "ru": "Binance сообщила, что ZK-доказательство резервов готово",
      "fa": "بایننس می‌گوید اثبات ZK ذخایر آماده است"
    },
    "summary": {
      "en": "Binance said the zero-knowledge proof has now been generated, so users can independently verify that assets on Binance are backed at a minimum of 1:1.",
      "zh": "币安表示零知识证明现已生成，用户可独立验证其在币安的资产至少获得 1:1 储备支持。",
      "fr": "Binance a indiqué que la preuve à connaissance nulle a désormais été générée, afin que les utilisateurs puissent vérifier de façon indépendante que les actifs sur Binance sont couverts au minimum à 1:1.",
      "pt": "A Binance informou que a prova de conhecimento zero já foi gerada, para que os usuários possam verificar de forma independente que os ativos na Binance têm lastro de no mínimo 1:1.",
      "ko": "바이낸스는 영지식 증명이 생성되어, 사용자가 바이낸스 자산이 최소 1:1로 준비금 지원을 받는지 독립적으로 검증할 수 있다고 밝혔습니다.",
      "ja": "Binanceはゼロ知識証明が生成され、ユーザーがBinance上の資産が最低1:1で裏付けられていることを独自に検証できると述べました。",
      "ru": "Binance сообщила, что доказательство с нулевым разглашением уже сформировано, поэтому пользователи могут независимо проверить, что активы на Binance обеспечены как минимум 1:1.",
      "fa": "بایننس اعلام کرد اثبات دانش صفر اکنون تولید شده است تا کاربران به‌طور مستقل بررسی کنند که دارایی‌ها در بایننس حداقل با نسبت ۱:۱ پشتیبانی می‌شوند."
    }
  },
  {
    "id": "binance-2026-11-14-bstocks-fiat-purchase",
    "exchange": "binance",
    "date": "2026-11-14",
    "category": "product",
    "sourceUrl": "https://x.com/binance/status/2121529493953319379",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Binance Convert and Buy/Sell add fiat purchases of bStocks",
      "zh": "币安闪兑与买卖现已支持法币购买 bStocks",
      "fr": "Convert et Buy/Sell de Binance ajoutent l’achat de bStocks en fiat",
      "pt": "Convert e Buy/Sell da Binance passam a aceitar bStocks em fiat",
      "ko": "바이낸스 Convert·Buy/Sell, bStocks 법정화폐 구매 지원",
      "ja": "BinanceのConvertとBuy/SellでbStocksを法定通貨購入",
      "ru": "Binance Convert и Buy/Sell добавили покупку bStocks за фиат",
      "fa": "Convert و Buy/Sell بایننس خرید bStocks با فیات را اضافه کرد"
    },
    "summary": {
      "en": "Binance said Convert and Buy/Sell now support fiat purchases of bStocks, offering tokenized stock exposure with up to 49 local currencies via fiat balance, card, Apple Pay, or Google Pay. These products are not direct share ownership. Regional restrictions may apply.",
      "zh": "币安表示，闪兑与买卖功能现已支持用法币购买 bStocks，最多可用 49 种当地货币，通过法币余额、银行卡、Apple Pay 或 Google Pay 获得代币化股票敞口。这些产品不是直接持股。可能适用地区限制。",
      "fr": "Binance a indiqué que Convert et Buy/Sell prennent désormais en charge l’achat de bStocks en monnaie fiduciaire, avec une exposition à des actions tokenisées dans jusqu’à 49 devises locales, via solde fiat, carte, Apple Pay ou Google Pay. Ces produits ne constituent pas une détention directe d’actions. Des restrictions régionales peuvent s’appliquer.",
      "pt": "A Binance informou que Convert e Buy/Sell agora aceitam compras de bStocks em moeda fiduciária, com exposição a ações tokenizadas em até 49 moedas locais, via saldo fiat, cartão, Apple Pay ou Google Pay. Esses produtos não são propriedade direta de ações. Restrições regionais podem se aplicar.",
      "ko": "바이낸스는 Convert와 Buy/Sell에서 bStocks를 법정화폐로 살 수 있게 되어, 법정화폐 잔액, 카드, Apple Pay 또는 Google Pay로 최대 49개 현지 통화를 통해 토큰화 주식 노출을 제공한다고 밝혔습니다. 이 상품은 주식을 직접 보유하는 것이 아닙니다. 지역 제한이 적용될 수 있습니다.",
      "ja": "Binanceは、ConvertとBuy/SellがbStocksの法定通貨購入に対応し、法定通貨残高、カード、Apple PayまたはGoogle Payで最大49の現地通貨によるトークン化株式のエクスポージャーを提供すると述べました。これらの商品は株式の直接保有ではありません。地域制限が適用される場合があります。",
      "ru": "Binance сообщила, что Convert и Buy/Sell теперь поддерживают покупку bStocks за фиат: экспозиция на токенизированные акции доступна до 49 местных валют через фиатный баланс, карту, Apple Pay или Google Pay. Эти продукты не являются прямым владением акциями. Могут действовать региональные ограничения.",
      "fa": "بایننس اعلام کرد Convert و Buy/Sell اکنون خرید bStocks با پول فیات را پشتیبانی می‌کنند و با حداکثر ۴۹ ارز محلی، از طریق موجودی فیات، کارت، Apple Pay یا Google Pay معرض سهام توکنیزه‌شده می‌دهند. این محصولات مالکیت مستقیم سهام نیستند. محدودیت منطقه‌ای ممکن است اعمال شود."
    }
  },
  {
    "id": "binance-2026-11-14-withdrawals-87-networks",
    "exchange": "binance",
    "date": "2026-11-14",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2121452596171010552",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Binance reopened withdrawals on 87 networks",
      "zh": "币安本周重新开放 87 个网络的提现",
      "fr": "Binance a rouvert les retraits sur 87 réseaux",
      "pt": "Binance reabriu saques em 87 redes",
      "ko": "바이낸스, 87개 네트워크 출금 재개",
      "ja": "Binance、87ネットワークの出金を再開",
      "ru": "Binance снова открыла выводы в 87 сетях",
      "fa": "بایننس برداشت را در ۸۷ شبکه دوباره باز کرد"
    },
    "summary": {
      "en": "Binance said it reopened withdrawals for 87 networks this week and aims to reopen withdrawals for all remaining networks and assets by the end of next week.",
      "zh": "币安称本周已重新开放 87 个网络的提现，并计划在下周结束前开放所有剩余网络与资产的提现。",
      "fr": "Binance a indiqué avoir rouvert cette semaine les retraits pour 87 réseaux et viser la réouverture des retraits pour tous les réseaux et actifs restants d’ici la fin de la semaine prochaine.",
      "pt": "A Binance informou que reabriu nesta semana os saques de 87 redes e pretende reabrir os saques de todas as redes e ativos restantes até o fim da próxima semana.",
      "ko": "바이낸스는 이번 주 87개 네트워크의 출금을 다시 열었으며, 다음 주 말까지 남은 모든 네트워크와 자산의 출금을 재개하는 것을 목표로 한다고 밝혔습니다.",
      "ja": "Binanceは今週87のネットワークの出金を再開し、来週末までに残るすべてのネットワークと資産の出金再開を目指すと述べました。",
      "ru": "Binance сообщила, что на этой неделе снова открыла выводы для 87 сетей и планирует до конца следующей недели открыть выводы по всем оставшимся сетям и активам.",
      "fa": "بایننس اعلام کرد این هفته برداشت ۸۷ شبکه را دوباره باز کرده و قصد دارد تا پایان هفته بعد برداشت همه شبکه‌ها و دارایی‌های باقی‌مانده را باز کند."
    }
  },
  {
    "id": "binance-2026-11-13-bstock-dividends-ibm-apple",
    "exchange": "binance",
    "date": "2026-11-13",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2121227224225341827",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Binance distributes IBM and Apple bStock dividends",
      "zh": "币安发放 IBM 与苹果 bStock 股息",
      "fr": "Binance distribue les dividendes des bStocks IBM et Apple",
      "pt": "Binance distribui dividendos de bStocks da IBM e da Apple",
      "ko": "바이낸스, IBM·Apple bStock 배당 지급",
      "ja": "Binance、IBMとAppleのbStock配当を配布",
      "ru": "Binance распределила дивиденды bStock IBM и Apple",
      "fa": "بایننس سود سهام bStock شرکت IBM و اپل را توزیع کرد"
    },
    "summary": {
      "en": "Binance said IBM bStock (IBMB) dividends of $1.69 per share were credited to Spot Wallets for holders before 10 Nov 2026, distributed as additional IBMB. Apple bStock (AAPLB) dividends of $0.27 per share were later credited for holders before 12 Nov 2026, distributed as additional AAPLB.",
      "zh": "币安表示，在 2026 年 11 月 10 日前持有 IBM bStock（IBMB）的用户，每股 1.69 美元股息已发放至现货钱包，并以额外 IBMB 形式到账；随后，在 2026 年 11 月 12 日前持有苹果 bStock（AAPLB）的用户，每股 0.27 美元股息亦已以额外 AAPLB 形式到账。",
      "fr": "Binance a indiqué que les dividendes d’IBM bStock (IBMB), de 1,69 $ par action, ont été crédités sur les portefeuilles Spot des détenteurs avant le 10 novembre 2026, sous forme d’IBMB supplémentaires. Les dividendes d’Apple bStock (AAPLB), de 0,27 $ par action, ont ensuite été crédités aux détenteurs avant le 12 novembre 2026, sous forme d’AAPLB supplémentaires.",
      "pt": "A Binance informou que os dividendos de IBM bStock (IBMB), de US$ 1,69 por ação, foram creditados nas carteiras Spot de quem detinha o ativo antes de 10 de novembro de 2026, na forma de IBMB adicional. Os dividendos de Apple bStock (AAPLB), de US$ 0,27 por ação, foram creditados depois a quem detinha o ativo antes de 12 de novembro de 2026, na forma de AAPLB adicional.",
      "ko": "바이낸스는 2026년 11월 10일 이전에 IBM bStock(IBMB)을 보유한 사용자에게 주당 $1.69 배당이 현물 지갑에 추가 IBMB로 입금되었고, 이후 2026년 11월 12일 이전에 Apple bStock(AAPLB)을 보유한 사용자에게 주당 $0.27 배당이 추가 AAPLB로 입금되었다고 밝혔습니다.",
      "ja": "Binanceは、2026年11月10日より前にIBM bStock（IBMB）を保有していたユーザーの現物ウォレットに、1株あたり1.69ドルの配当が追加のIBMBとして入金され、その後、2026年11月12日より前にApple bStock（AAPLB）を保有していたユーザーには1株あたり0.27ドルの配当が追加のAAPLBとして入金されたと述べました。",
      "ru": "Binance сообщила, что дивиденды IBM bStock (IBMB) в размере $1,69 на акцию зачислены на спотовые кошельки держателей до 10 ноября 2026 года в виде дополнительных IBMB. Позже дивиденды Apple bStock (AAPLB) в размере $0,27 на акцию зачислены держателям до 12 ноября 2026 года в виде дополнительных AAPLB.",
      "fa": "بایننس اعلام کرد سود سهام IBM bStock (IBMB) به مبلغ ۱٫۶۹ دلار برای هر سهم، برای دارندگان پیش از ۱۰ نوامبر ۲۰۲۶ به کیف‌های اسپات و به‌صورت IBMB اضافه واریز شده است. سپس سود سهام Apple bStock (AAPLB) به مبلغ ۰٫۲۷ دلار برای هر سهم، برای دارندگان پیش از ۱۲ نوامبر ۲۰۲۶ به‌صورت AAPLB اضافه واریز شد."
    }
  },
  {
    "id": "binance-2026-11-13-lite-loan-fee-discount",
    "exchange": "binance",
    "date": "2026-11-13",
    "category": "promotion",
    "sourceUrl": "https://x.com/binance/status/2120940493060137215",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Binance Lite Loan returns with a 50% fee cut",
      "zh": "币安 Lite Loan 回归，服务费再减半",
      "fr": "Binance Lite Loan revient avec 50 % de réduction sur les frais",
      "pt": "Binance Lite Loan volta com corte de 50% na taxa",
      "ko": "바이낸스 Lite Loan 복귀, 수수료 50% 인하",
      "ja": "Binance Lite Loanが復帰、手数料50%引き",
      "ru": "Binance Lite Loan вернулся со скидкой 50% на комиссию",
      "fa": "Lite Loan بایننس با تخفیف ۵۰٪ کارمزد بازگشت"
    },
    "summary": {
      "en": "Binance said Lite Loan is back with a 50% service-fee discount: users can borrow up to 1,000 USDT against BTC, with no price-triggered liquidation for 30 days, while the BTC keeps earning Simple Earn rewards. The flat fee is 1%, or 0.5% during the campaign. Terms and eligibility may apply.",
      "zh": "币安表示 Lite Loan 已回归并提供服务费五折：用户可以 BTC 抵押借入最多 1,000 USDT，30 天内不会因价格触发清算，抵押的 BTC 仍可获得简单赚币收益。常规服务费为 1%，活动期间为 0.5%。条款与资格可能适用。",
      "fr": "Binance a indiqué que Lite Loan est de retour avec une remise de 50 % sur les frais de service : les utilisateurs peuvent emprunter jusqu’à 1 000 USDT contre du BTC, sans liquidation déclenchée par le prix pendant 30 jours, tandis que le BTC continue de générer des récompenses Simple Earn. Les frais forfaitaires sont de 1 %, ou de 0,5 % pendant la campagne. Des conditions et une éligibilité peuvent s’appliquer.",
      "pt": "A Binance informou que o Lite Loan voltou com 50% de desconto na taxa de serviço: usuários podem tomar até 1.000 USDT emprestados com garantia em BTC, sem liquidação disparada por preço por 30 dias, enquanto o BTC continua rendendo no Simple Earn. A taxa fixa é de 1%, ou 0,5% durante a campanha. Termos e elegibilidade podem se aplicar.",
      "ko": "바이낸스는 Lite Loan이 서비스 수수료 50% 할인으로 돌아왔다고 밝혔습니다. 사용자는 BTC를 담보로 최대 1,000 USDT를 빌릴 수 있고, 30일 동안 가격으로 청산되지 않으며 담보 BTC는 Simple Earn 보상을 계속 받습니다. 정액 수수료는 1%이고 캠페인 기간에는 0.5%입니다. 약관과 자격이 적용될 수 있습니다.",
      "ja": "Binanceは、Lite Loanがサービス手数料50%割引で戻ったと述べました。ユーザーはBTCを担保に最大1,000 USDTを借りられ、30日間は価格による清算がなく、担保のBTCはSimple Earnの報酬を受け続けます。定額手数料は1%で、キャンペーン期間中は0.5%です。規約と参加条件が適用される場合があります。",
      "ru": "Binance сообщила, что Lite Loan вернулся со скидкой 50% на сервисный сбор: можно занять до 1 000 USDT под BTC, без ликвидации по цене в течение 30 дней, при этом BTC продолжает приносить награды Simple Earn. Фиксированная комиссия — 1%, или 0,5% во время акции. Могут действовать условия и критерии участия.",
      "fa": "بایننس اعلام کرد Lite Loan با تخفیف ۵۰٪ کارمزد خدمات بازگشته است: کاربران می‌توانند در برابر BTC تا ۱٬۰۰۰ USDT وام بگیرند، ۳۰ روز به‌خاطر قیمت لیکویید نمی‌شوند و BTC وثیقه همچنان پاداش Simple Earn می‌گیرد. کارمزد ثابت ۱٪ است و در دوره کمپین ۰٫۵٪. شرایط و واجد بودن ممکن است اعمال شود."
    }
  },
  {
    "id": "binance-2026-11-13-incident-coverage-complete",
    "exchange": "binance",
    "date": "2026-11-13",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2120921979226329504",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Binance says it has completed coverage of incident assets",
      "zh": "币安称已完成对安全事件受影响资产的覆盖",
      "fr": "Binance indique avoir achevé la couverture des actifs de l’incident",
      "pt": "Binance diz ter concluído a cobertura dos ativos do incidente",
      "ko": "바이낸스, 사고 영향 자산의 보전을 완료했다고 밝혀",
      "ja": "Binance、事案の影響資産の補償を完了したと発表",
      "ru": "Binance сообщила о полном покрытии активов инцидента",
      "fa": "بایننس می‌گوید پوشش دارایی‌های حادثه را کامل کرده است"
    },
    "summary": {
      "en": "Binance said it has completed coverage of assets impacted in the security incident and published a new Proof of Reserves snapshot. It added that once the zero-knowledge proof was generated, users would be able to independently verify that their assets are backed at a minimum of 1:1.",
      "zh": "币安称已完成对安全事件中受影响资产的覆盖，并发布了新的储备证明快照。同时表示，待零知识证明生成后，用户可独立验证其资产至少获得 1:1 储备支持。",
      "fr": "Binance a indiqué avoir achevé la couverture des actifs touchés par l’incident de sécurité et avoir publié un nouvel instantané de preuve de réserves. Elle a ajouté qu’une fois la preuve à connaissance nulle générée, les utilisateurs pourraient vérifier de façon indépendante que leurs actifs sont couverts au minimum à 1:1.",
      "pt": "A Binance informou que concluiu a cobertura dos ativos afetados no incidente de segurança e publicou um novo snapshot de Prova de Reservas. Acrescentou que, depois de gerada a prova de conhecimento zero, os usuários poderiam verificar de forma independente que seus ativos têm lastro de no mínimo 1:1.",
      "ko": "바이낸스는 보안 사고에서 영향을 받은 자산의 보전을 완료하고 새 준비금 증명 스냅샷을 공개했다고 밝혔습니다. 영지식 증명이 생성되면 사용자가 자신의 자산이 최소 1:1로 준비금 지원을 받는지 독립적으로 검증할 수 있게 된다고 덧붙였습니다.",
      "ja": "Binanceは、セキュリティ事案で影響を受けた資産の補償を完了し、新しいProof of Reservesのスナップショットを公開したと述べました。ゼロ知識証明が生成されれば、ユーザーは自分の資産が最低1:1で裏付けられていることを独自に検証できるようになると付け加えました。",
      "ru": "Binance сообщила, что завершила покрытие активов, затронутых инцидентом безопасности, и опубликовала новый снимок Proof of Reserves. Также указала, что после формирования доказательства с нулевым разглашением пользователи смогут независимо проверить, что их активы обеспечены как минимум 1:1.",
      "fa": "بایننس اعلام کرد پوشش دارایی‌های آسیب‌دیده در حادثه امنیتی را کامل کرده و تصویر جدیدی از اثبات ذخایر منتشر کرده است. همچنین گفت پس از تولید اثبات دانش صفر، کاربران می‌توانند به‌طور مستقل بررسی کنند که دارایی‌هایشان حداقل با نسبت ۱:۱ پشتیبانی می‌شود."
    }
  },
  {
    "id": "backpack-2026-11-12-anthropic-mystery-box",
    "exchange": "backpack",
    "date": "2026-11-12",
    "category": "promotion",
    "sourceUrl": "https://x.com/Backpack/status/2120825087230443886",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Backpack offers an Anthropic stock mystery box for new users",
      "zh": "Backpack 面向新用户推出 Anthropic 股票盲盒",
      "fr": "Backpack propose une mystery box d’actions Anthropic aux nouveaux utilisateurs",
      "pt": "Backpack oferece uma mystery box de ações da Anthropic a novos usuários",
      "ko": "Backpack, 신규 사용자에 Anthropic 주식 미스터리 박스 제공",
      "ja": "Backpack、新規ユーザー向けにAnthropic株のミステリーボックス",
      "ru": "Backpack предлагает новым пользователям mystery box акций Anthropic",
      "fa": "Backpack برای کاربران جدید جعبه مرموز سهام Anthropic می‌دهد"
    },
    "summary": {
      "en": "Backpack said Anthropic is coming to the platform on day one. New users who deposit $500 by Nov 16 and trade $500 in stocks can earn an $ANT stock mystery box as early as IPO day. Terms and eligibility may apply.",
      "zh": "Backpack 表示 Anthropic 将于上市首日登陆平台。新用户在 11 月 16 日前存入 500 美元并完成 500 美元股票交易，最早可在 IPO 当日获得 $ANT 股票盲盒。条款与资格可能适用。",
      "fr": "Backpack a indiqué qu’Anthropic arrivera sur la plateforme dès le premier jour. Les nouveaux utilisateurs qui déposent 500 $ au plus tard le 16 novembre et négocient 500 $ d’actions peuvent obtenir une mystery box d’actions $ANT dès le jour de l’introduction. Des conditions et une éligibilité peuvent s’appliquer.",
      "pt": "A Backpack informou que a Anthropic chegará à plataforma no primeiro dia. Novos usuários que depositarem US$ 500 até 16 de novembro e negociarem US$ 500 em ações podem ganhar uma mystery box de ações $ANT já no dia do IPO. Termos e elegibilidade podem se aplicar.",
      "ko": "Backpack은 Anthropic이 상장 첫날 플랫폼에 온다고 밝혔습니다. 11월 16일까지 500달러를 입금하고 주식 500달러를 거래한 신규 사용자는 이르면 IPO 당일에 $ANT 주식 미스터리 박스를 받을 수 있습니다. 약관과 자격이 적용될 수 있습니다.",
      "ja": "Backpackは、Anthropicが初日にプラットフォームへ来ると述べました。11月16日までに500ドルを入金し、株式を500ドル取引した新規ユーザーは、早ければIPO当日に$ANT株のミステリーボックスを獲得できます。規約と参加条件が適用される場合があります。",
      "ru": "Backpack сообщила, что Anthropic появится на платформе в первый день. Новые пользователи, которые внесут $500 до 16 ноября и совершат сделки с акциями на $500, могут получить mystery box акций $ANT уже в день IPO. Могут действовать условия и критерии участия.",
      "fa": "Backpack اعلام کرد Anthropic از روز نخست به پلتفرم می‌آید. کاربران جدیدی که تا ۱۶ نوامبر ۵۰۰ دلار واریز کنند و ۵۰۰ دلار سهام معامله کنند، می‌توانند از همان روز IPO جعبه مرموز سهام $ANT بگیرند. شرایط و واجد بودن ممکن است اعمال شود."
    }
  },
  {
    "id": "backpack-2026-11-12-minna-bank-mou",
    "exchange": "backpack",
    "date": "2026-11-12",
    "category": "other",
    "sourceUrl": "https://x.com/Backpack/status/2120798292187725971",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Backpack signs MOU with Japan's Minna Bank",
      "zh": "Backpack 与日本 Minna Bank 签署合作备忘录",
      "fr": "Backpack signe un protocole d’accord avec Minna Bank au Japon",
      "pt": "Backpack assina memorando de entendimento com o Minna Bank do Japão",
      "ko": "Backpack, 일본 Minna Bank과 양해각서 체결",
      "ja": "Backpack、日本のMinna Bankと覚書を締結",
      "ru": "Backpack подписала меморандум с японским Minna Bank",
      "fa": "Backpack با Minna Bank ژاپن تفاهم‌نامه امضا کرد"
    },
    "summary": {
      "en": "Backpack said it signed a memorandum of understanding with Minna Bank, a digital bank under Fukuoka Financial Group (FFG), one of Japan's largest regional banking groups. The partnership will explore connecting digital banking with crypto-asset services in Japan. Minna Bank's release refers to an agreement with Trek Labs Japan.",
      "zh": "Backpack 表示已与福冈金融集团（FFG，日本大型地方银行集团之一）旗下数字银行 Minna Bank 签署合作备忘录，探索在日本将数字银行与加密资产服务连接。Minna Bank 的新闻稿称该协议对象为 Trek Labs Japan。",
      "fr": "Backpack a indiqué avoir signé un protocole d’accord avec Minna Bank, banque numérique du Fukuoka Financial Group (FFG), l’un des plus grands groupes bancaires régionaux du Japon. Le partenariat explorera le lien entre banque numérique et services d’actifs crypto au Japon. Le communiqué de Minna Bank évoque un accord avec Trek Labs Japan.",
      "pt": "A Backpack informou que assinou um memorando de entendimento com o Minna Bank, banco digital do Fukuoka Financial Group (FFG), um dos maiores grupos bancários regionais do Japão. A parceria vai explorar a conexão entre banco digital e serviços de criptoativos no Japão. O comunicado do Minna Bank refere um acordo com a Trek Labs Japan.",
      "ko": "Backpack은 일본의 대형 지방 은행 그룹 중 하나인 후쿠오카 파이낸셜 그룹(FFG) 산하 디지털 은행 Minna Bank과 양해각서를 체결했다고 밝혔습니다. 파트너십은 일본에서 디지털 뱅킹과 암호자산 서비스를 연결하는 방안을 탐색합니다. Minna Bank 보도자료는 상대를 Trek Labs Japan으로 적고 있습니다.",
      "ja": "Backpackは、日本の大手地方銀行グループの一つ、福岡フィナンシャルグループ（FFG）傘下のデジタル銀行Minna Bankと覚書を結んだと述べました。提携では、日本でデジタルバンキングと暗号資産サービスをつなぐことを探ります。Minna Bankの発表は、合意相手をTrek Labs Japanとしています。",
      "ru": "Backpack сообщила, что подписала меморандум о взаимопонимании с Minna Bank, цифровым банком Fukuoka Financial Group (FFG), одной из крупнейших региональных банковских групп Японии. Партнёрство изучит связь цифрового банкинга и услуг криптоактивов в Японии. В релизе Minna Bank соглашение указано с Trek Labs Japan.",
      "fa": "Backpack اعلام کرد با Minna Bank، بانک دیجیتال زیرمجموعه Fukuoka Financial Group (FFG)، یکی از بزرگ‌ترین گروه‌های بانک منطقه‌ای ژاپن، تفاهم‌نامه امضا کرده است. این همکاری اتصال بانکداری دیجیتال و خدمات دارایی رمزارزی در ژاپن را بررسی می‌کند. بیانیه Minna Bank طرف توافق را Trek Labs Japan می‌نامد."
    }
  },
  {
    "id": "backpack-2026-11-12-perps-open",
    "exchange": "backpack",
    "date": "2026-11-12",
    "category": "promotion",
    "sourceUrl": "https://x.com/Backpack/status/2120752234359320743",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Backpack launches Perps Open with $75,000 in rewards",
      "zh": "Backpack 推出 Perps Open，奖金池 7.5 万美元",
      "fr": "Backpack lance Perps Open avec 75 000 $ de récompenses",
      "pt": "Backpack lança o Perps Open com US$ 75.000 em recompensas",
      "ko": "Backpack, 보상 $75,000의 Perps Open 시작",
      "ja": "Backpack、報酬75,000ドルのPerps Openを開始",
      "ru": "Backpack запустила Perps Open с наградами на $75 000",
      "fa": "Backpack، Perps Open را با ۷۵٬۰۰۰ دلار پاداش آغاز کرد"
    },
    "summary": {
      "en": "Backpack said The Perps Open is live. Users can trade crypto and equity perps to share $75,000 in rewards, with daily rewards plus two weekly rounds, split half for the top 20 and half for everyone else. Terms and eligibility may apply.",
      "zh": "Backpack 表示 Perps Open 已上线。用户交易加密与股票永续合约即可分享 7.5 万美元奖励，包含每日奖励和两轮每周竞赛，奖金一半给予前 20 名，一半分给其余参与者。条款与资格可能适用。",
      "fr": "Backpack a indiqué que The Perps Open est en ligne. Les utilisateurs peuvent négocier des perpétuels crypto et actions pour se partager 75 000 $ de récompenses, avec des récompenses quotidiennes et deux manches hebdomadaires, pour moitié aux 20 premiers et pour moitié aux autres participants. Des conditions et une éligibilité peuvent s’appliquer.",
      "pt": "A Backpack informou que o Perps Open está no ar. Usuários podem negociar perpétuos de cripto e de ações para dividir US$ 75.000 em recompensas, com prêmios diários e duas rodadas semanais: metade para os 20 primeiros e metade para os demais. Termos e elegibilidade podem se aplicar.",
      "ko": "Backpack은 Perps Open이 시작됐다고 밝혔습니다. 사용자는 암호화폐와 주식 무기한 계약을 거래해 $75,000 보상을 나눌 수 있으며, 일일 보상과 주간 라운드 두 번이 있고 상금의 절반은 상위 20명, 절반은 나머지 참가자에게 갑니다. 약관과 자격이 적용될 수 있습니다.",
      "ja": "BackpackはThe Perps Openが開始したと述べました。ユーザーは暗号資産と株式の無期限契約を取引して75,000ドルの報酬を分け合い、毎日の報酬と週次ラウンド2回があり、賞金の半分は上位20名、半分はその他の参加者に配分されます。規約と参加条件が適用される場合があります。",
      "ru": "Backpack сообщила, что The Perps Open запущен. Пользователи могут торговать бессрочными контрактами на криптоактивы и акции и делить $75 000 наград: ежедневные награды и два недельных раунда, половина — топ-20, половина — остальным. Могут действовать условия и критерии участия.",
      "fa": "Backpack اعلام کرد The Perps Open فعال است. کاربران با معامله پرپچوال رمزارز و سهام ۷۵٬۰۰۰ دلار پاداش را تقسیم می‌کنند؛ پاداش روزانه و دو دور هفتگی دارد، نیمی برای ۲۰ نفر برتر و نیمی برای بقیه شرکت‌کنندگان. شرایط و واجد بودن ممکن است اعمال شود."
    }
  },
  {
    "id": "okx-2026-11-12-anthropic-xperps-europe",
    "exchange": "okx",
    "date": "2026-11-12",
    "category": "product",
    "sourceUrl": "https://x.com/okx/status/2120871789220032983",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Anthropic pre-IPO X-Perps are tradable 24/7 in Europe on OKX",
      "zh": "OKX 欧洲已可 24/7 交易 Anthropic 上市前 X-Perps",
      "fr": "Les X-Perps pré-IPO d’Anthropic se négocient 24 h/24, 7 j/7 en Europe sur OKX",
      "pt": "X-Perps pré-IPO da Anthropic negociáveis 24/7 na Europa na OKX",
      "ko": "OKX 유럽에서 Anthropic 상장 전 X-Perps를 24/7 거래",
      "ja": "OKX欧州でAnthropicの上場前X-Perpsを24時間年中無休で取引",
      "ru": "Пред-IPO X-Perps Anthropic торгуются 24/7 в Европе на OKX",
      "fa": "X-Perps پیش از عرضه Anthropic در اروپا روی OKX به‌صورت ۲۴/۷ قابل معامله است"
    },
    "summary": {
      "en": "OKX said Anthropic is now tradable 24/7 in Europe via pre-IPO X-Perps with up to 10x leverage, and promoted a €50 voucher with 3x leverage. Pre-IPO X-Perps are leveraged derivatives, not shares; leverage can amplify losses and cause liquidation. Capital is at risk. Regional restrictions and terms apply.",
      "zh": "OKX 表示，Anthropic 现已可通过上市前 X-Perps 在欧洲全天候交易，最高 10 倍杠杆，并提供带 3 倍杠杆的 50 欧元券。上市前 X-Perps 是杠杆衍生品，不是股票；杠杆可能放大亏损并导致强平。本金面临风险。地区限制与条款适用。",
      "fr": "OKX a indiqué qu’Anthropic est désormais négociable 24 h/24, 7 j/7 en Europe via des X-Perps pré-introduction, avec un levier jusqu’à 10x, et a mis en avant un bon de 50 € avec un levier de 3x. Les X-Perps pré-IPO sont des dérivés à effet de levier, pas des actions ; le levier peut amplifier les pertes et entraîner une liquidation. Le capital est exposé au risque. Des restrictions régionales et des conditions s’appliquent.",
      "pt": "A OKX informou que a Anthropic já pode ser negociada 24/7 na Europa via X-Perps pré-IPO com alavancagem de até 10x, e promoveu um voucher de € 50 com alavancagem de 3x. Os X-Perps pré-IPO são derivativos alavancados, não ações; a alavancagem pode ampliar perdas e causar liquidação. O capital está em risco. Restrições regionais e termos se aplicam.",
      "ko": "OKX는 Anthropic을 상장 전 X-Perps로 유럽에서 24/7 거래할 수 있으며 최대 10배 레버리지가 가능하고, 3배 레버리지의 €50 바우처를 홍보했다고 밝혔습니다. 상장 전 X-Perps는 주식이 아닌 레버리지 파생상품이며, 레버리지는 손실을 키우고 청산을 일으킬 수 있습니다. 원금 손실 위험이 있습니다. 지역 제한과 약관이 적용됩니다.",
      "ja": "OKXは、Anthropicが上場前X-Perpsで欧州において24時間年中無休で取引でき、最大10倍のレバレッジがあり、3倍レバレッジ付きの50ユーロ券を案内したと述べました。上場前X-Perpsは株式ではなくレバレッジ付きデリバティブです。レバレッジは損失を拡大し、清算を招くことがあります。元本はリスクにさらされます。地域制限と規約が適用されます。",
      "ru": "OKX сообщила, что Anthropic теперь торгуется 24/7 в Европе через пред-IPO X-Perps с плечом до 10x, и продвигала ваучер на €50 с плечом 3x. Пред-IPO X-Perps — это производные с плечом, а не акции; плечо может увеличить убытки и привести к ликвидации. Капитал под риском. Действуют региональные ограничения и условия.",
      "fa": "OKX اعلام کرد Anthropic اکنون در اروپا از راه X-Perps پیش از عرضه، به‌صورت ۲۴/۷ و با اهرم تا ۱۰ برابر قابل معامله است و یک کوپن ۵۰ یورویی با اهرم ۳ برابر را تبلیغ کرده است. X-Perps پیش از عرضه مشتقه اهرمی است، نه سهم؛ اهرم می‌تواند زیان را بزرگ کند و به لیکویید شدن بینجامد. سرمایه در معرض ریسک است. محدودیت منطقه‌ای و شرایط اعمال می‌شود."
    }
  },
  {
    "id": "binance-2026-11-12-ai-pro",
    "exchange": "binance",
    "date": "2026-11-12",
    "category": "product",
    "sourceUrl": "https://x.com/binance/status/2120880359277478161",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Binance highlights AI Pro for strategy backtesting and automation",
      "zh": "币安介绍 AI Pro：可用自然语言回测并自动执行策略",
      "fr": "Binance présente AI Pro pour le backtest et l’automatisation de stratégies",
      "pt": "Binance destaca o AI Pro para backtest e automação de estratégias",
      "ko": "바이낸스, 전략 백테스트와 자동화용 AI Pro 소개",
      "ja": "Binance、戦略のバックテストと自動化のAI Proを紹介",
      "ru": "Binance представила AI Pro для бэктеста и автоматизации стратегий",
      "fa": "بایننس AI Pro را برای بک‌تست و خودکارسازی راهبرد معرفی کرد"
    },
    "summary": {
      "en": "Binance said users can describe a strategy in plain language with Binance AI Pro, backtest it and try it on paper, then approve it to run 24/7. Users decide when it goes live.",
      "zh": "币安表示，用户可通过 Binance AI Pro 用自然语言描述策略，进行回测和模拟交易，确认后再让策略全天候运行。是否上线由用户决定。",
      "fr": "Binance a indiqué que les utilisateurs peuvent décrire une stratégie en langage courant avec Binance AI Pro, la tester sur l’historique et en simulation, puis l’approuver pour qu’elle tourne 24 h/24, 7 j/7. C’est l’utilisateur qui décide du passage en réel.",
      "pt": "A Binance informou que usuários podem descrever uma estratégia em linguagem simples com o Binance AI Pro, fazer o backtest e testá-la em paper trading, depois aprová-la para rodar 24/7. O usuário decide quando ela entra em operação.",
      "ko": "바이낸스는 사용자가 Binance AI Pro로 전략을 일상 언어로 설명하고, 백테스트와 모의 거래를 한 뒤 승인하면 24/7 실행할 수 있다고 밝혔습니다. 실제 적용 시점은 사용자가 정합니다.",
      "ja": "Binanceは、ユーザーがBinance AI Proで戦略を平易な言葉で記述し、バックテストとペーパートレードを試したうえで承認すると、24時間年中無休で実行できると述べました。稼働を始めるかはユーザーが決めます。",
      "ru": "Binance сообщила, что с Binance AI Pro можно описать стратегию обычным языком, прогнать бэктест и бумажную торговлю, а затем одобрить круглосуточный запуск. Когда стратегия выйдет в реальную торговлю, решает пользователь.",
      "fa": "بایننس اعلام کرد کاربران می‌توانند با Binance AI Pro راهبرد را به زبان ساده شرح دهند، آن را بک‌تست و معامله کاغذی کنند و سپس برای اجرای ۲۴/۷ تأیید کنند. زمان فعال‌شدن را خود کاربر تعیین می‌کند."
    }
  },
  {
    "id": "backpack-2026-11-11-stock-limit-orders-live",
    "exchange": "backpack",
    "date": "2026-11-11",
    "category": "product",
    "sourceUrl": "https://x.com/Backpack/status/2120502133250478413",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Stock limit orders are now live on Backpack",
      "zh": "Backpack 股票限价单现已上线",
      "fr": "Les ordres limites sur actions sont disponibles sur Backpack",
      "pt": "Ordens limitadas de ações já estão ativas na Backpack",
      "ko": "Backpack에서 주식 지정가 주문 시작",
      "ja": "Backpackで株式の指値注文が利用可能に",
      "ru": "Лимитные ордера на акции доступны на Backpack",
      "fa": "سفارش‌های محدود سهام در Backpack فعال شد"
    },
    "summary": {
      "en": "Backpack said limit orders for stocks are now live, letting users set their price and trade with zero fees.",
      "zh": "Backpack 表示股票限价单现已上线，用户可自行设定价格，并享受零手续费交易。",
      "fr": "Backpack a indiqué que les ordres limites sur actions sont désormais disponibles : les utilisateurs fixent leur prix et négocient sans frais.",
      "pt": "A Backpack informou que as ordens limitadas de ações já estão ativas, permitindo que usuários definam o preço e negociem com taxa zero.",
      "ko": "Backpack은 주식 지정가 주문이 시작되어 사용자가 가격을 직접 정하고 수수료 없이 거래할 수 있다고 밝혔습니다.",
      "ja": "Backpackは、株式の指値注文が利用可能になり、ユーザーが価格を自分で設定して手数料ゼロで取引できると述べました。",
      "ru": "Backpack сообщила, что лимитные ордера на акции уже доступны: пользователи задают свою цену и торгуют без комиссии.",
      "fa": "Backpack اعلام کرد سفارش محدود سهام اکنون فعال است و کاربران قیمت خود را تعیین می‌کنند و با کارمزد صفر معامله می‌کنند."
    }
  },
  {
    "id": "okx-2026-11-11-okxice-tsv-nov23",
    "exchange": "okx",
    "date": "2026-11-11",
    "category": "product",
    "sourceUrl": "https://x.com/okx/status/2120502060428792047",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "OKXICE Tokenized Securities Venue to go live on November 23",
      "zh": "OKXICE 代币化证券交易场所将于 11 月 23 日上线",
      "fr": "OKXICE, lieu de titres tokenisés, ouvrira le 23 novembre",
      "pt": "OKXICE, local de títulos tokenizados, entra no ar em 23 de novembro",
      "ko": "OKXICE 토큰화 증권 거래소, 11월 23일 개장",
      "ja": "OKXICEトークン化証券会場が11月23日に開始",
      "ru": "Площадка токенизированных бумаг OKXICE откроется 23 ноября",
      "fa": "محل اوراق بهادار توکنیزه‌شده OKXICE در ۲۳ نوامبر فعال می‌شود"
    },
    "summary": {
      "en": "OKX said the OKXICE Tokenized Securities Venue will bring America's capital markets onchain on November 23, with real shares backed 1:1, held in the user's own wallet and tradeable 24/7. An official OKX blog said eligible U.S. customers would be able to trade digital securities around the clock in the OKX app, with more than 70 assets expected at launch, and that access requires eligibility, identity verification, and a CeDeFi Wallet. Terms and eligibility apply.",
      "zh": "OKX 表示，OKXICE 代币化证券交易场所将于 11 月 23 日把美国资本市场带到链上，提供 1:1 支持的真实股份，由用户自行持有于自己的钱包并可 24/7 交易。官方博客称，符合条件的美国用户届时可在 OKX 应用中全天候交易数字证券，上线时预计超过 70 项资产，开通需满足资格、完成身份验证并启用 CeDeFi 钱包。条款与资格适用。",
      "fr": "OKX a indiqué que l’OKXICE Tokenized Securities Venue amènera les marchés de capitaux américains sur la chaîne le 23 novembre, avec de vraies actions couvertes à 1:1, détenues dans le propre portefeuille de l’utilisateur et négociables 24 h/24, 7 j/7. Un blog officiel d’OKX a précisé que les clients américains éligibles pourraient négocier des titres numériques en continu dans l’application OKX, avec plus de 70 actifs attendus au lancement, et que l’accès exige l’éligibilité, une vérification d’identité et un portefeuille CeDeFi. Conditions et éligibilité applicables.",
      "pt": "A OKX informou que o OKXICE Tokenized Securities Venue levará os mercados de capitais dos EUA para a cadeia em 23 de novembro, com ações reais lastreadas 1:1, mantidas na própria carteira do usuário e negociáveis 24/7. Um blog oficial da OKX disse que clientes dos EUA elegíveis poderão negociar títulos digitais o tempo todo no app da OKX, com mais de 70 ativos previstos no lançamento, e que o acesso exige elegibilidade, verificação de identidade e uma CeDeFi Wallet. Termos e elegibilidade se aplicam.",
      "ko": "OKX는 OKXICE 토큰화 증권 거래소가 11월 23일 미국 자본시장을 온체인으로 가져오며, 1:1로 뒷받침되는 실제 주식을 사용자 본인 지갑에 두고 24/7 거래할 수 있다고 밝혔습니다. OKX 공식 블로그는 적격 미국 고객이 OKX 앱에서 디지털 증권을 상시 거래할 수 있고, 출시 때 70개 이상의 자산이 예상되며, 이용에는 자격, 신원 확인, CeDeFi Wallet이 필요하다고 했습니다. 약관과 자격이 적용됩니다.",
      "ja": "OKXは、OKXICE Tokenized Securities Venueが11月23日に米国の資本市場をオンチェーンにし、1:1で裏付けられた実株をユーザー自身のウォレットで保有して24時間年中無休で取引できると述べました。OKX公式ブログは、対象となる米国の顧客がOKXアプリでデジタル証券を常時取引でき、開始時に70を超える資産が見込まれ、利用には適格性、本人確認、CeDeFi Walletが必要だとしました。規約と参加条件が適用されます。",
      "ru": "OKX сообщила, что OKXICE Tokenized Securities Venue 23 ноября выведет рынки капитала США в ончейн: реальные акции с обеспечением 1:1, в собственном кошельке пользователя и с торговлей 24/7. Официальный блог OKX сообщил, что подходящие клиенты из США смогут круглосуточно торговать цифровыми ценными бумагами в приложении OKX, на старте ожидается более 70 активов, а доступ требует соответствия критериям, проверки личности и CeDeFi Wallet. Действуют условия и критерии участия.",
      "fa": "OKX اعلام کرد محل اوراق بهادار توکنیزه‌شده OKXICE در ۲۳ نوامبر بازارهای سرمایه آمریکا را روی زنجیره می‌آورد؛ سهام واقعی با پشتوانه ۱:۱، در کیف خود کاربر و قابل معامله ۲۴/۷. وبلاگ رسمی OKX گفت مشتریان واجد شرایط آمریکا می‌توانند در اپ OKX به‌صورت شبانه‌روزی اوراق دیجیتال معامله کنند، در آغاز بیش از ۷۰ دارایی انتظار می‌رود و دسترسی نیازمند واجد بودن، تأیید هویت و کیف CeDeFi است. شرایط و واجد بودن اعمال می‌شود."
    }
  },
  {
    "id": "okx-2026-11-11-flash-earn-night",
    "exchange": "okx",
    "date": "2026-11-11",
    "category": "promotion",
    "sourceUrl": "https://x.com/okx/status/2120403650782912800",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "NIGHT is live on OKX Flash Earn Lite",
      "zh": "NIGHT 已在 OKX Flash Earn Lite 上线",
      "fr": "NIGHT est disponible sur OKX Flash Earn Lite",
      "pt": "NIGHT está no OKX Flash Earn Lite",
      "ko": "NIGHT, OKX Flash Earn Lite에 출시",
      "ja": "NIGHTがOKX Flash Earn Liteで開始",
      "ru": "NIGHT доступен в OKX Flash Earn Lite",
      "fa": "NIGHT در OKX Flash Earn Lite فعال شد"
    },
    "summary": {
      "en": "OKX said $NIGHT from Midnight Network is now live on Flash Earn Lite. Users who subscribe in-app may share a 12,500,000 NIGHT prize pool. The post did not state an end time and said to join before it ends. Terms and regional eligibility may apply.",
      "zh": "OKX 表示 Midnight Network 的 $NIGHT 已在 Flash Earn Lite 上线。在应用内申购即有机会分享 1,250 万枚 NIGHT 奖池。原帖未给出结束时间，并提醒在结束前参与。条款与地区资格可能适用。",
      "fr": "OKX a indiqué que $NIGHT de Midnight Network est désormais disponible sur Flash Earn Lite. Les utilisateurs qui souscrivent dans l’application peuvent se partager un pool de 12 500 000 NIGHT. La publication n’indiquait pas d’heure de fin et invitait à participer avant la clôture. Des conditions et une éligibilité régionale peuvent s’appliquer.",
      "pt": "A OKX informou que $NIGHT da Midnight Network já está no Flash Earn Lite. Usuários que assinarem no app podem dividir um prêmio de 12.500.000 NIGHT. A publicação não informou o horário de término e pediu para participar antes do fim. Termos e elegibilidade regional podem se aplicar.",
      "ko": "OKX는 Midnight Network의 $NIGHT가 Flash Earn Lite에 출시됐다고 밝혔습니다. 앱에서 신청한 사용자는 12,500,000 NIGHT 상금 풀을 나눌 수 있습니다. 게시물은 종료 시각을 밝히지 않았고 끝나기 전에 참여하라고 했습니다. 약관과 지역 자격이 적용될 수 있습니다.",
      "ja": "OKXは、Midnight Networkの$NIGHTがFlash Earn Liteで開始したと述べました。アプリ内で申し込むユーザーは12,500,000 NIGHTの賞金プールを分け合うことができます。投稿は終了時刻を示さず、終了前に参加するよう案内しました。規約と地域の参加条件が適用される場合があります。",
      "ru": "OKX сообщила, что $NIGHT от Midnight Network уже доступен в Flash Earn Lite. Пользователи, оформившие подписку в приложении, могут разделить призовой пул в 12 500 000 NIGHT. В посте не указано время окончания, и сказано присоединиться до его завершения. Могут действовать условия и региональные ограничения.",
      "fa": "OKX اعلام کرد $NIGHT از Midnight Network اکنون در Flash Earn Lite فعال است. کاربرانی که در اپ اشتراک کنند می‌توانند استخر جایزه ۱۲٬۵۰۰٬۰۰۰ NIGHT را تقسیم کنند. پست زمان پایان را نگفته و خواسته پیش از پایان بپیوندند. شرایط و واجد بودن منطقه‌ای ممکن است اعمال شود."
    }
  },
  {
    "id": "backpack-2026-11-10-anthropic-day-one",
    "exchange": "backpack",
    "date": "2026-11-10",
    "category": "listing",
    "sourceUrl": "https://x.com/Backpack/status/2120151114767298681",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Anthropic to trade on Backpack from day one, with zero fees",
      "zh": "Backpack 将于上市首日上线 Anthropic，交易零手续费",
      "fr": "Anthropic négociable sur Backpack dès le premier jour, sans frais",
      "pt": "Anthropic na Backpack desde o primeiro dia, com taxa zero",
      "ko": "Anthropic, Backpack에서 첫날부터 수수료 없이 거래",
      "ja": "AnthropicをBackpackで初日から手数料ゼロで取引",
      "ru": "Anthropic на Backpack с первого дня и без комиссии",
      "fa": "Anthropic از روز نخست در Backpack با کارمزد صفر معامله می‌شود"
    },
    "summary": {
      "en": "Backpack said Anthropic ($ANT) will be available to trade on the platform from day one, with day-one access and zero trading fees.",
      "zh": "Backpack 表示 Anthropic（$ANT）将自上市首日起可在平台交易，提供首日交易准入，并收取零交易手续费。",
      "fr": "Backpack a indiqué qu’Anthropic ($ANT) sera négociable sur la plateforme dès le premier jour, avec un accès le jour même et des frais de trading nuls.",
      "pt": "A Backpack informou que a Anthropic ($ANT) poderá ser negociada na plataforma desde o primeiro dia, com acesso no dia da estreia e taxa de negociação zero.",
      "ko": "Backpack은 Anthropic($ANT)을 첫날부터 플랫폼에서 거래할 수 있고, 첫날 접근과 거래 수수료 0을 제공한다고 밝혔습니다.",
      "ja": "Backpackは、Anthropic（$ANT）を初日からプラットフォームで取引でき、初日のアクセスと取引手数料ゼロを提供すると述べました。",
      "ru": "Backpack сообщила, что Anthropic ($ANT) будет доступна для торговли на платформе с первого дня, с доступом в день старта и нулевой торговой комиссией.",
      "fa": "Backpack اعلام کرد Anthropic ($ANT) از روز نخست در پلتفرم قابل معامله است، با دسترسی روز اول و کارمزد معامله صفر."
    }
  },
  {
    "id": "binance-2026-11-10-mexc-fincen",
    "exchange": "binance",
    "date": "2026-11-10",
    "category": "regulatory",
    "sourceUrl": "https://x.com/binance/status/2120109138256560437",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Binance tightens compliance after FinCEN designates MEXC",
      "zh": "继 FinCEN 将 MEXC 列为主要洗钱担忧后，币安加强合规措施",
      "fr": "Binance renforce la conformité après la désignation de MEXC par le FinCEN",
      "pt": "Binance reforça a conformidade após o FinCEN designar a MEXC",
      "ko": "FinCEN의 MEXC 지정 이후 바이낸스, 준수 조치 강화",
      "ja": "FinCENがMEXCを指定したあと、Binanceがコンプライアンスを強化",
      "ru": "Binance усилила комплаенс после обозначения MEXC со стороны FinCEN",
      "fa": "بایننس پس از تعیین MEXC توسط FinCEN کنترل انطباق را سخت‌تر کرد"
    },
    "summary": {
      "en": "Following FinCEN's designation of MEXC as a Primary Money Laundering Concern, Binance said it is applying enhanced compliance measures. Effective immediately, users should not send funds to, receive funds from, or otherwise transact through Binance involving MEXC, MEXC Global, MEXC affiliates or related entities. Requests to send funds to MEXC addresses will be rejected. Impacted funds and accounts may be temporarily restricted during review, and such activity may breach Binance's Terms of Use.",
      "zh": "在 FinCEN 将 MEXC 指定为主要洗钱担忧对象后，币安表示已加强合规措施。即日起，用户不应通过币安向 MEXC、MEXC Global、其关联方或相关实体转出、接收或以其他方式交易资金。向 MEXC 地址转账的请求将被拒绝。审查期间受影响资金和账户可能被暂时限制，此类行为可能违反币安使用条款。",
      "fr": "Après la désignation de MEXC par le FinCEN comme Primary Money Laundering Concern, Binance a indiqué appliquer des mesures de conformité renforcées. Avec effet immédiat, les utilisateurs ne doivent pas envoyer de fonds vers, recevoir de fonds de, ni autrement effectuer via Binance des transactions impliquant MEXC, MEXC Global, ses affiliés ou des entités liées. Les demandes d’envoi vers des adresses MEXC seront rejetées. Les fonds et comptes concernés peuvent être temporairement restreints pendant l’examen, et une telle activité peut enfreindre les conditions d’utilisation de Binance.",
      "pt": "Após o FinCEN designar a MEXC como Primary Money Laundering Concern, a Binance informou que aplica medidas de conformidade reforçadas. Com efeito imediato, usuários não devem enviar fundos para, receber fundos de, nem de outro modo transacionar pela Binance envolvendo MEXC, MEXC Global, afiliadas da MEXC ou entidades relacionadas. Pedidos de envio para endereços da MEXC serão recusados. Fundos e contas afetados podem ser temporariamente restritos durante a análise, e essa atividade pode violar os Termos de Uso da Binance.",
      "ko": "FinCEN이 MEXC를 Primary Money Laundering Concern으로 지정한 뒤, 바이낸스는 강화된 준수 조치를 적용한다고 밝혔습니다. 즉시 효력이 있으며, 사용자는 바이낸스를 통해 MEXC, MEXC Global, MEXC 계열사 또는 관련 주체와 자금을 보내거나 받거나 그 밖의 거래를 해서는 안 됩니다. MEXC 주소로 자금을 보내는 요청은 거부됩니다. 검토 중 영향받은 자금과 계정은 일시 제한될 수 있으며, 이러한 활동은 바이낸스 이용약관을 위반할 수 있습니다.",
      "ja": "FinCENがMEXCをPrimary Money Laundering Concernに指定したことを受け、Binanceは強化したコンプライアンス措置を適用すると述べました。即時に効力があり、ユーザーはBinanceを通じてMEXC、MEXC Global、MEXCの関連会社または関係主体との資金の送付、受取、その他の取引をすべきではありません。MEXCアドレスへの送金依頼は拒否されます。審査中、影響を受けた資金と口座は一時的に制限されることがあり、そのような行為はBinanceの利用規約に違反する可能性があります。",
      "ru": "После того как FinCEN обозначил MEXC как Primary Money Laundering Concern, Binance сообщила, что применяет усиленные меры комплаенса. С немедленным эффектом пользователям не следует отправлять средства на, получать средства от или иным образом проводить через Binance операции с MEXC, MEXC Global, аффилированными или связанными лицами MEXC. Запросы на отправку средств на адреса MEXC будут отклонены. Затронутые средства и счета могут быть временно ограничены на время проверки, и такая активность может нарушать Условия использования Binance.",
      "fa": "پس از آنکه FinCEN، MEXC را Primary Money Laundering Concern تعیین کرد، بایننس اعلام کرد تدابیر انطباق تقویت‌شده اعمال می‌کند. از همین لحظه، کاربران نباید از طریق بایننس به MEXC، MEXC Global، وابستگان MEXC یا نهادهای مرتبط وجه بفرستند، از آنها وجه بگیرند یا به شکل دیگری معامله کنند. درخواست ارسال وجه به نشانی‌های MEXC رد می‌شود. وجوه و حساب‌های تحت تأثیر ممکن است در دوره بررسی موقتاً محدود شوند و چنین فعالیتی می‌تواند شرایط استفاده بایننس را نقض کند."
    }
  },
  {
    "id": "binance-2026-11-10-ios-worse-query",
    "exchange": "binance",
    "date": "2026-11-10",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2120093246399430770",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Binance warns of an iOS vulnerability that can expose wallet secrets",
      "zh": "币安提醒 iOS 漏洞可能导致钱包密钥泄露",
      "fr": "Binance alerte sur une faille iOS pouvant exposer les secrets de portefeuille",
      "pt": "Binance alerta para falha no iOS que pode expor segredos da carteira",
      "ko": "바이낸스, 지갑 비밀을 노출할 수 있는 iOS 취약점 경고",
      "ja": "Binance、ウォレット秘密が漏れる可能性のあるiOSの脆弱性を警告",
      "ru": "Binance предупредила об уязвимости iOS, которая может раскрыть секреты кошелька",
      "fa": "بایننس درباره آسیب‌پذیری iOS که می‌تواند راز کیف را افشا کند هشدار داد"
    },
    "summary": {
      "en": "Binance said a vulnerability (worse_query) affecting iOS 26.7.1, 27.0.1, and 27.2 can let malicious apps read local files from other apps, putting seed phrases, private keys, and login credentials at risk. It said this is an iOS-level issue, not unique to Binance, and advised deleting apps from untrusted sources, updating iOS and apps, and, if a breach is suspected, moving funds to a new wallet on a clean device and resetting login sessions.",
      "zh": "币安称，影响 iOS 26.7.1、27.0.1 和 27.2 的漏洞（worse_query）可能让恶意应用读取其他应用的本地文件，从而危及助记词、私钥和登录凭证。币安强调这是 iOS 系统层面的问题，并非币安独有，并建议删除来自不可信来源的应用、更新 iOS 与应用；若怀疑已遭入侵，应将资金转到在干净设备上新建的钱包，并重置所有登录会话。",
      "fr": "Binance a indiqué qu’une vulnérabilité (worse_query) touchant iOS 26.7.1, 27.0.1 et 27.2 peut permettre à des applications malveillantes de lire les fichiers locaux d’autres applications, mettant en risque les phrases mnémoniques, les clés privées et les identifiants de connexion. Binance a précisé qu’il s’agit d’un problème au niveau d’iOS, non propre à Binance, et a conseillé de supprimer les applications de sources non fiables, de mettre à jour iOS et les applications et, en cas de suspicion d’intrusion, de déplacer les fonds vers un nouveau portefeuille sur un appareil sain et de réinitialiser les sessions de connexion.",
      "pt": "A Binance informou que uma vulnerabilidade (worse_query) que afeta o iOS 26.7.1, 27.0.1 e 27.2 pode permitir que apps maliciosos leiam arquivos locais de outros apps, colocando em risco frases-semente, chaves privadas e credenciais de login. Disse que é um problema no nível do iOS, não exclusivo da Binance, e orientou a excluir apps de fontes não confiáveis, atualizar o iOS e os apps e, se houver suspeita de invasão, mover os fundos para uma nova carteira em um dispositivo limpo e redefinir as sessões de login.",
      "ko": "바이낸스는 iOS 26.7.1, 27.0.1, 27.2에 영향을 주는 취약점(worse_query)이 악성 앱이 다른 앱의 로컬 파일을 읽게 해 시드 구문, 개인 키, 로그인 자격 증명을 위험에 빠뜨릴 수 있다고 밝혔습니다. 이는 바이낸스만의 문제가 아닌 iOS 수준의 문제라고 했으며, 신뢰할 수 없는 출처의 앱을 삭제하고 iOS와 앱을 업데이트하고, 침해가 의심되면 깨끗한 기기에서 새 지갑으로 자금을 옮기고 로그인 세션을 재설정하라고 안내했습니다.",
      "ja": "Binanceは、iOS 26.7.1、27.0.1、27.2に影響する脆弱性（worse_query）により、悪意のあるアプリが他のアプリのローカルファイルを読み、シードフレーズ、秘密鍵、ログイン資格情報が危険にさらされる可能性があると述べました。これはBinance固有ではなくiOSレベルの問題だとし、信頼できない提供元のアプリを削除すること、iOSとアプリを更新すること、侵害が疑われる場合はクリーンな端末で新しいウォレットへ資金を移し、ログインセッションをリセットすることを勧めました。",
      "ru": "Binance сообщила, что уязвимость (worse_query), затрагивающая iOS 26.7.1, 27.0.1 и 27.2, может позволить вредоносным приложениям читать локальные файлы других приложений и поставить под угрозу сид-фразы, приватные ключи и данные для входа. Binance указала, что это проблема уровня iOS, а не только Binance, и посоветовала удалить приложения из ненадёжных источников, обновить iOS и приложения, а при подозрении на взлом перевести средства в новый кошелёк на чистом устройстве и сбросить сессии входа.",
      "fa": "بایننس اعلام کرد آسیب‌پذیری (worse_query) که iOS 26.7.1، 27.0.1 و 27.2 را تحت تأثیر قرار می‌دهد می‌تواند به اپ‌های مخرب اجازه دهد فایل‌های محلی اپ‌های دیگر را بخوانند و عبارت بازیابی، کلید خصوصی و اطلاعات ورود را به خطر بیندازند. بایننس گفت این مشکل در سطح iOS است و منحصر به بایننس نیست و توصیه کرد اپ‌های منابع نامطمئن حذف شوند، iOS و اپ‌ها به‌روز شوند و اگر نفوذ مشکوک است، وجوه به کیف تازه روی دستگاه تمیز منتقل و نشست‌های ورود بازنشانی شوند."
    }
  },
  {
    "id": "binance-2026-11-10-community-appreciation-r3",
    "exchange": "binance",
    "date": "2026-11-10",
    "category": "promotion",
    "sourceUrl": "https://x.com/binance/status/2120062789536403922",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Binance Community Appreciation Campaign round 3 adds yield rewards",
      "zh": "币安社区回馈活动第 3 轮加码赚币收益",
      "fr": "Le tour 3 de Community Appreciation chez Binance ajoute des rendements",
      "pt": "A rodada 3 da campanha Community Appreciation da Binance acrescenta rendimentos",
      "ko": "바이낸스 커뮤니티 감사 캠페인 3라운드, 수익 보상 추가",
      "ja": "Binanceコミュニティ感謝キャンペーン第3回が利回り報酬を追加",
      "ru": "3-й раунд кампании Community Appreciation Binance добавляет доходность",
      "fa": "دور سوم کمپین قدردانی جامعه بایننس پاداش بازده اضافه می‌کند"
    },
    "summary": {
      "en": "Binance announced round 3 of its Community Appreciation Campaign: USD1 at up to 10% APR across all Binance accounts with no individual reward cap, USDe at up to 10% APR, and KGST Flexible Earn at up to 15% APR. A later official post said the USD1 reward pool had been expanded and the campaign extended, with variable APR and no lock-up. Terms and eligibility apply.",
      "zh": "币安公布社区回馈活动第 3 轮：所有币安账户持有 USD1 最高可享 10% 年化且无个人奖励上限，USDe 最高 10% 年化，KGST 活期赚币最高 15% 年化。随后官方称 USD1 奖励池已扩大、活动已延期，年化为浮动且无需锁仓。条款与资格适用。",
      "fr": "Binance a annoncé le tour 3 de sa campagne Community Appreciation : USD1 jusqu’à 10 % d’APR sur tous les comptes Binance sans plafond de récompense individuel, USDe jusqu’à 10 % d’APR et KGST Flexible Earn jusqu’à 15 % d’APR. Une publication officielle ultérieure a indiqué que le pool de récompenses USD1 avait été élargi et la campagne prolongée, avec un APR variable et sans blocage. Conditions et éligibilité applicables.",
      "pt": "A Binance anunciou a rodada 3 da campanha Community Appreciation: USD1 com até 10% de APR em todas as contas Binance sem teto individual de recompensa, USDe com até 10% de APR e KGST Flexible Earn com até 15% de APR. Uma publicação oficial posterior informou que o pool de recompensas de USD1 foi ampliado e a campanha prorrogada, com APR variável e sem bloqueio. Termos e elegibilidade se aplicam.",
      "ko": "바이낸스는 커뮤니티 감사 캠페인 3라운드를 발표했습니다. 모든 바이낸스 계정에서 USD1은 개인 보상 한도 없이 최대 10% APR, USDe는 최대 10% APR, KGST Flexible Earn은 최대 15% APR입니다. 이후 공식 게시물은 USD1 보상 풀이 확대되고 캠페인이 연장되었으며 APR은 변동이고 락업이 없다고 했습니다. 약관과 자격이 적용됩니다.",
      "ja": "Binanceはコミュニティ感謝キャンペーン第3回を発表しました。すべてのBinance口座のUSD1は個人の報酬上限なしで最大10% APR、USDeは最大10% APR、KGST Flexible Earnは最大15% APRです。その後の公式投稿は、USD1の報酬プールが拡大されキャンペーンが延長され、APRは変動でロックアップはないとしました。規約と参加条件が適用されます。",
      "ru": "Binance объявила 3-й раунд кампании Community Appreciation: USD1 до 10% годовых на всех счетах Binance без личного потолка награды, USDe до 10% годовых и KGST Flexible Earn до 15% годовых. Более поздний официальный пост сообщил, что пул наград USD1 расширен, а кампания продлена, с плавающей ставкой и без блокировки. Действуют условия и критерии участия.",
      "fa": "بایننس دور سوم کمپین قدردانی جامعه را اعلام کرد: USD1 تا ۱۰٪ APR در همه حساب‌های بایننس بدون سقف پاداش فردی، USDe تا ۱۰٪ APR و KGST Flexible Earn تا ۱۵٪ APR. پست رسمی بعدی گفت استخر پاداش USD1 بزرگ‌تر شده و کمپین تمدید شده، با APR متغیر و بدون قفل. شرایط و واجد بودن اعمال می‌شود."
    }
  },
  {
    "id": "okx-2026-11-10-europe-deposit-apr",
    "exchange": "okx",
    "date": "2026-11-10",
    "category": "promotion",
    "sourceUrl": "https://x.com/okx/status/2120170824384811266",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "OKX offers 8% APR on eligible European crypto deposits",
      "zh": "OKX 在部分欧洲国家推出存款 8% 年化活动",
      "fr": "OKX offre 8 % d’APR sur des dépôts crypto éligibles en Europe",
      "pt": "OKX oferece 8% de APR em depósitos cripto elegíveis na Europa",
      "ko": "OKX, 적격 유럽 암호화폐 입금에 8% APR",
      "ja": "OKX、対象となる欧州の暗号資産入金に8% APR",
      "ru": "OKX предлагает 8% годовых на подходящие криптодепозиты в Европе",
      "fa": "OKX برای واریز رمزارز واجد شرایط در اروپا ۸٪ APR می‌دهد"
    },
    "summary": {
      "en": "OKX said users in France, Spain, Italy, Poland, Sweden, and Belgium can earn 8% APR, paid over three months, when they deposit eligible crypto such as BTC, SOL, ETH, XRP and more, until 10 December. Terms and eligibility apply; crypto is volatile.",
      "zh": "OKX 表示，法国、西班牙、意大利、波兰、瑞典和比利时的用户存入 BTC、SOL、ETH、XRP 等符合条件的加密资产，可获得分三个月发放的 8% 年化收益，活动截至 12 月 10 日。条款与资格适用；加密资产价格波动大。",
      "fr": "OKX a indiqué que les utilisateurs en France, en Espagne, en Italie, en Pologne, en Suède et en Belgique peuvent obtenir 8 % d’APR, versés sur trois mois, en déposant des cryptomonnaies éligibles telles que BTC, SOL, ETH, XRP et d’autres, jusqu’au 10 décembre. Conditions et éligibilité applicables ; les cryptomonnaies sont volatiles.",
      "pt": "A OKX informou que usuários na França, Espanha, Itália, Polônia, Suécia e Bélgica podem obter 8% de APR, pagos ao longo de três meses, ao depositar criptoativos elegíveis como BTC, SOL, ETH, XRP e outros, até 10 de dezembro. Termos e elegibilidade se aplicam; criptoativos têm preço volátil.",
      "ko": "OKX는 프랑스, 스페인, 이탈리아, 폴란드, 스웨덴, 벨기에 사용자가 BTC, SOL, ETH, XRP 등 적격 암호화폐를 입금하면 12월 10일까지 3개월에 걸쳐 지급되는 8% APR을 얻을 수 있다고 밝혔습니다. 약관과 자격이 적용되며, 암호화폐는 가격 변동이 큽니다.",
      "ja": "OKXは、フランス、スペイン、イタリア、ポーランド、スウェーデン、ベルギーのユーザーがBTC、SOL、ETH、XRPなどの対象暗号資産を入金すると、12月10日まで、3か月にわたって支払われる8% APRを得られると述べました。規約と参加条件が適用されます。暗号資産は価格変動が大きいです。",
      "ru": "OKX сообщила, что пользователи во Франции, Испании, Италии, Польше, Швеции и Бельгии могут получить 8% годовых, выплачиваемых в течение трёх месяцев, внеся подходящие криптоактивы, такие как BTC, SOL, ETH, XRP и другие, до 10 декабря. Действуют условия и критерии участия; криптоактивы волатильны.",
      "fa": "OKX اعلام کرد کاربران فرانسه، اسپانیا، ایتالیا، لهستان، سوئد و بلژیک با واریز رمزارز واجد شرایط مانند BTC، SOL، ETH، XRP و موارد دیگر تا ۱۰ دسامبر می‌توانند ۸٪ APR بگیرند که طی سه ماه پرداخت می‌شود. شرایط و واجد بودن اعمال می‌شود؛ رمزارز نوسان قیمت دارد."
    }
  },
  {
    "id": "binance-2026-11-09-withdrawals-alpha-networks",
    "exchange": "binance",
    "date": "2026-11-09",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2119655363385659500",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "Binance re-enables Alpha withdrawals on BSC, ETH, Base and Arbitrum",
      "zh": "币安重新开放 Alpha 在 BSC、ETH、Base 与 Arbitrum 的提现",
      "fr": "Binance rétablit les retraits Alpha sur BSC, ETH, Base et Arbitrum",
      "pt": "Binance reativa saques de Alpha em BSC, ETH, Base e Arbitrum",
      "ko": "바이낸스, BSC·ETH·Base·Arbitrum에서 Alpha 출금 재개",
      "ja": "Binance、BSC・ETH・Base・ArbitrumでAlphaの出金を再開",
      "ru": "Binance снова открыла выводы Alpha в BSC, ETH, Base и Arbitrum",
      "fa": "بایننس برداشت Alpha را در BSC، ETH، Base و Arbitrum دوباره فعال کرد"
    },
    "summary": {
      "en": "In a 9 Nov withdrawal update, Binance said newly re-enabled networks for Alpha were BSC, ETH, Base, and Arbitrum. It also listed assets already enabled on ETH and SOL networks, plus HYPE and APT, and said further networks and assets would be restored in phases after security checks.",
      "zh": "在 11 月 9 日的提现更新中，币安称已为 Alpha 重新开放 BSC、ETH、Base 和 Arbitrum 网络提现，并列出已在 ETH 与 SOL 网络恢复的资产以及 HYPE 与 APT；更多网络与资产将在安全检查完成后分阶段恢复。",
      "fr": "Dans une mise à jour des retraits du 9 novembre, Binance a indiqué que les réseaux nouvellement rouverts pour Alpha étaient BSC, ETH, Base et Arbitrum. Binance a aussi énuméré des actifs déjà rouverts sur les réseaux ETH et SOL, ainsi que HYPE et APT, et a précisé que d’autres réseaux et actifs seraient rétablis par étapes après les contrôles de sécurité.",
      "pt": "Em uma atualização de saques de 9 de novembro, a Binance informou que as redes recém-reativadas para Alpha eram BSC, ETH, Base e Arbitrum. Também listou ativos já habilitados nas redes ETH e SOL, além de HYPE e APT, e disse que mais redes e ativos seriam restaurados em fases após as verificações de segurança.",
      "ko": "11월 9일 출금 업데이트에서 바이낸스는 Alpha에 새로 다시 연 네트워크가 BSC, ETH, Base, Arbitrum이라고 밝혔습니다. ETH와 SOL 네트워크에서 이미 열린 자산과 HYPE, APT도 나열했으며, 더 많은 네트워크와 자산은 보안 점검 뒤 단계적으로 복구된다고 했습니다.",
      "ja": "11月9日の出金更新で、BinanceはAlphaについて新たに再開したネットワークはBSC、ETH、Base、Arbitrumだと述べました。ETHとSOLのネットワークですでに有効な資産に加えHYPEとAPTも挙げ、さらに多くのネットワークと資産はセキュリティ確認のあと段階的に復旧するとしました。",
      "ru": "В обновлении о выводах от 9 ноября Binance сообщила, что для Alpha заново открыты сети BSC, ETH, Base и Arbitrum. Также перечислены активы, уже доступные в сетях ETH и SOL, плюс HYPE и APT; дальнейшие сети и активы восстановят поэтапно после проверок безопасности.",
      "fa": "در به‌روزرسانی برداشت ۹ نوامبر، بایننس اعلام کرد شبکه‌های تازه‌بازشده برای Alpha عبارت‌اند از BSC، ETH، Base و Arbitrum. همچنین دارایی‌هایی را که از قبل روی شبکه‌های ETH و SOL فعال بودند به‌علاوه HYPE و APT فهرست کرد و گفت شبکه‌ها و دارایی‌های بیشتر پس از بررسی‌های امنیتی مرحله‌ای بازیابی می‌شوند."
    }
  },
  {
    "id": "okx-2026-11-09-asset-protection",
    "exchange": "okx",
    "date": "2026-11-09",
    "category": "other",
    "sourceUrl": "https://x.com/okx/status/2119749527489884284",
    "checkedAt": "2026-11-16",
    "title": {
      "en": "OKX outlines its custody and asset-protection controls",
      "zh": "OKX 说明其托管与资产保护机制",
      "fr": "OKX décrit sa conservation et ses contrôles de protection des actifs",
      "pt": "OKX descreve a custódia e os controles de proteção de ativos",
      "ko": "OKX, 수탁과 자산 보호 통제를 설명",
      "ja": "OKX、カストディと資産保護の管理を説明",
      "ru": "OKX описала кастоди и меры защиты активов",
      "fa": "OKX نگهداری و کنترل‌های حفاظت از دارایی را شرح داد"
    },
    "summary": {
      "en": "In the wake of major industry exploits, OKX said it was sharing how its custody model, controls over asset movements, threat detection, response capabilities, and OKX Shield help protect user assets.",
      "zh": "在业内发生多起重大攻击之后，OKX 表示将说明其托管模式、资产流动控制、威胁检测、应急能力以及 OKX Shield 如何保护用户资产。",
      "fr": "Après plusieurs exploits majeurs dans le secteur, OKX a indiqué qu’elle présentait comment son modèle de conservation, ses contrôles des mouvements d’actifs, la détection des menaces, ses capacités de réponse et OKX Shield aident à protéger les actifs des utilisateurs.",
      "pt": "Após grandes explorações no setor, a OKX informou que estava mostrando como seu modelo de custódia, os controles de movimentação de ativos, a detecção de ameaças, a capacidade de resposta e o OKX Shield ajudam a proteger os ativos dos usuários.",
      "ko": "업계의 대형 공격 이후 OKX는 수탁 모델, 자산 이동 통제, 위협 탐지, 대응 능력, OKX Shield가 사용자 자산을 어떻게 보호하는지 공유한다고 밝혔습니다.",
      "ja": "業界で大きな攻撃が起きたあと、OKXはカストディモデル、資産移動の管理、脅威検知、対応能力、OKX Shieldがユーザー資産の保護にどう役立つかを共有すると述べました。",
      "ru": "После крупных отраслевых взломов OKX сообщила, что рассказывает, как модель кастоди, контроль движения активов, обнаружение угроз, возможности реагирования и OKX Shield помогают защищать активы пользователей.",
      "fa": "پس از سوءاستفاده‌های بزرگ در صنعت، OKX اعلام کرد توضیح می‌دهد مدل نگهداری، کنترل جابه‌جایی دارایی، کشف تهدید، توان پاسخ و OKX Shield چگونه از دارایی کاربران محافظت می‌کنند."
    }
  },
  {
    "id": "binance-2026-11-08-withdrawals-hype-apt",
    "exchange": "binance",
    "date": "2026-11-08",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2119352231732580574",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "Binance re-enables HYPE and APT withdrawals",
      "zh": "币安重新开放 HYPE 与 APT 提现",
      "fr": "Binance rétablit les retraits de HYPE et d’APT",
      "pt": "Binance reativa saques de HYPE e APT",
      "ko": "바이낸스, HYPE·APT 출금 재개",
      "ja": "Binance、HYPEとAPTの出金を再開",
      "ru": "Binance снова открыла выводы HYPE и APT",
      "fa": "بایننس برداشت HYPE و APT را دوباره فعال کرد"
    },
    "summary": {
      "en": "In a continued phased recovery after the late-October security incident, Binance said withdrawals were re-enabled for HYPE and APT. It also listed many ETH- and SOL-network assets already restored earlier in the week and said more networks and assets would reopen after security checks.",
      "zh": "在 10 月底安全事件后的分阶段恢复中，币安称已重新开放 HYPE 与 APT 提现，并列出本周早些时候已恢复的大量 ETH 与 SOL 网络资产；更多网络与资产将在安全检查完成后继续开放。",
      "fr": "Dans la poursuite du rétablissement par étapes après l’incident de sécurité de fin octobre, Binance a indiqué que les retraits de HYPE et d’APT étaient de nouveau ouverts. Binance a aussi énuméré de nombreux actifs des réseaux ETH et SOL déjà rétablis plus tôt dans la semaine, et a précisé que d’autres réseaux et actifs rouvriraient après les contrôles de sécurité.",
      "pt": "Na continuidade da recuperação em fases após o incidente de segurança do fim de outubro, a Binance informou que os saques de HYPE e APT foram reativados. Também listou muitos ativos das redes ETH e SOL já restaurados no início da semana e disse que mais redes e ativos reabririam após as verificações de segurança.",
      "ko": "10월 말 보안 사고 이후 단계적 복구가 이어지는 가운데, 바이낸스는 HYPE와 APT 출금을 다시 열었다고 밝혔습니다. 주 초에 이미 복구된 ETH·SOL 네트워크 자산도 다수 나열했으며, 더 많은 네트워크와 자산은 보안 점검 뒤에 다시 열린다고 했습니다.",
      "ja": "10月末のセキュリティ事案後の段階的な復旧の続きとして、BinanceはHYPEとAPTの出金を再び有効にしたと述べました。週の早い時点ですでに復旧していたETHおよびSOLネットワークの多くの資産も挙げ、さらに多くのネットワークと資産はセキュリティ確認のあと再開するとしました。",
      "ru": "В продолжение поэтапного восстановления после инцидента безопасности в конце октября Binance сообщила, что выводы HYPE и APT снова открыты. Также перечислены многие активы сетей ETH и SOL, восстановленные ранее на этой неделе; другие сети и активы откроют после проверок безопасности.",
      "fa": "در ادامه بازیابی مرحله‌ای پس از حادثه امنیتی اواخر اکتبر، بایننس اعلام کرد برداشت HYPE و APT دوباره باز شده است. همچنین بسیاری از دارایی‌های شبکه‌های ETH و SOL را که اوایل همین هفته بازیابی شده بودند فهرست کرد و گفت شبکه‌ها و دارایی‌های بیشتر پس از بررسی‌های امنیتی بازگشایی می‌شوند."
    }
  },
  {
    "id": "okx-2026-11-08-shield-dashboard",
    "exchange": "okx",
    "date": "2026-11-08",
    "category": "product",
    "sourceUrl": "https://x.com/okx/status/2119339394247151725",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "OKX Shield shows security controls with up to $500,000 protection",
      "zh": "OKX Shield 集中展示安全控制，最高 50 万美元保障",
      "fr": "OKX Shield affiche les contrôles, jusqu’à 500 000 $ de protection",
      "pt": "OKX Shield mostra controles com até US$ 500.000 de proteção",
      "ko": "OKX Shield, 보안 제어와 최대 $500,000 보호를 표시",
      "ja": "OKX Shield、セキュリティ制御と最大500,000ドルの保護を表示",
      "ru": "OKX Shield показывает защиту с покрытием до $500 000",
      "fa": "OKX Shield کنترل‌های امنیتی را با پوشش تا ۵۰۰٬۰۰۰ دلار نشان می‌دهد"
    },
    "summary": {
      "en": "OKX said OKX Shield puts security controls and protection status in one view, with up to $500,000 in added account protection against qualifying unauthorized account takeovers. Users can activate it at okx.com/shield. Terms and eligibility apply.",
      "zh": "OKX 表示 OKX Shield 将安全控制与保障状态集中展示，对符合条件的未授权账户接管提供最高 50 万美元额外账户保障，可在 okx.com/shield 开通。条款与资格适用。",
      "fr": "OKX a indiqué qu’OKX Shield rassemble les contrôles de sécurité et le statut de protection dans une seule vue, avec jusqu’à 500 000 $ de protection supplémentaire du compte contre les prises de contrôle non autorisées éligibles. L’activation se fait sur okx.com/shield. Conditions et éligibilité applicables.",
      "pt": "A OKX informou que o OKX Shield reúne controles de segurança e o status de proteção em uma única visão, com até US$ 500.000 de proteção adicional da conta contra tomadas de conta não autorizadas elegíveis. A ativação é em okx.com/shield. Termos e elegibilidade se aplicam.",
      "ko": "OKX는 OKX Shield가 보안 제어와 보호 상태를 한 화면에 모으며, 요건을 충족하는 무단 계정 탈취에 대해 최대 $500,000의 추가 계정 보호를 제공한다고 밝혔습니다. okx.com/shield에서 활성화할 수 있습니다. 약관과 자격이 적용됩니다.",
      "ja": "OKXは、OKX Shieldがセキュリティ制御と保護状況を一つの画面にまとめ、条件を満たす不正なアカウント乗っ取りに対して最大500,000ドルの追加アカウント保護を提供すると述べました。okx.com/shieldで有効にできます。規約と参加条件が適用されます。",
      "ru": "OKX сообщила, что OKX Shield собирает средства безопасности и статус защиты в одном окне и даёт до $500 000 дополнительной защиты счёта от подходящих случаев несанкционированного захвата аккаунта. Включить можно на okx.com/shield. Действуют условия и критерии участия.",
      "fa": "OKX اعلام کرد OKX Shield کنترل‌های امنیتی و وضعیت پوشش را در یک نما جمع می‌کند و در برابر تصاحب غیرمجاز واجد شرایط حساب، تا ۵۰۰٬۰۰۰ دلار حفاظت اضافه حساب می‌دهد. فعال‌سازی در okx.com/shield است. شرایط و واجد بودن اعمال می‌شود."
    }
  },
  {
    "id": "backpack-2026-11-07-deposit-mystery-box",
    "exchange": "backpack",
    "date": "2026-11-07",
    "category": "promotion",
    "sourceUrl": "https://x.com/Backpack/status/2119003520691314744",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "Backpack offers USD yield plus Deposit Mystery Boxes",
      "zh": "Backpack 推出美元收益与入金盲盒活动",
      "fr": "Backpack propose un rendement en USD et des Deposit Mystery Boxes",
      "pt": "Backpack oferece rendimento em USD e Deposit Mystery Boxes",
      "ko": "Backpack, 달러 수익과 입금 미스터리 박스 제공",
      "ja": "Backpack、米ドル利回りと入金ミステリーボックスを提供",
      "ru": "Backpack предлагает доходность в USD и Deposit Mystery Boxes",
      "fa": "Backpack بازده دلار و جعبه‌های مرموز واریز ارائه می‌دهد"
    },
    "summary": {
      "en": "Backpack said USD balances can earn up to 6.91% APY while still serving as trading collateral. Users who opt in and deposit by 2026-11-08, and keep funds on Backpack through 2026-11-22, can unlock up to 12 Deposit Mystery Boxes, each containing a real US stock. An earlier campaign post listed a lower illustrative APY of 3.64%. Terms and regional eligibility may apply.",
      "zh": "Backpack 表示，美元余额最高可赚约 6.91% 年化收益，同时仍可作为交易抵押品。用户在 2026-11-08 前选择加入并存入资金，并在 Backpack 上保留至 2026-11-22，最多可解锁 12 个入金盲盒，每个含真实美股。更早的活动帖曾给出约 3.64% 的示例年化。条款与地区资格可能适用。",
      "fr": "Backpack a indiqué que les soldes en USD peuvent rapporter jusqu’à 6,91 % d’APY tout en servant encore de collatéral de trading. Les utilisateurs qui adhèrent et déposent au plus tard le 8 novembre 2026, et conservent les fonds sur Backpack jusqu’au 22 novembre 2026, peuvent débloquer jusqu’à 12 Deposit Mystery Boxes, chacune contenant une action américaine réelle. Une publication antérieure de la campagne indiquait un APY illustratif plus bas, de 3,64 %. Des conditions et une éligibilité régionale peuvent s’appliquer.",
      "pt": "A Backpack informou que saldos em USD podem render até 6,91% de APY e continuar servindo como garantia de negociação. Usuários que aderirem e depositarem até 8 de novembro de 2026, e mantiverem os fundos na Backpack até 22 de novembro de 2026, podem desbloquear até 12 Deposit Mystery Boxes, cada uma com uma ação real dos EUA. Uma publicação anterior da campanha indicou um APY ilustrativo menor, de 3,64%. Termos e elegibilidade regional podem se aplicar.",
      "ko": "Backpack은 달러 잔액이 거래 담보로 남으면서 최대 6.91% APY를 얻을 수 있다고 밝혔습니다. 2026-11-08까지 참여를 선택하고 입금한 뒤 2026-11-22까지 자금을 Backpack에 두면, 각각 실제 미국 주식이 든 입금 미스터리 박스를 최대 12개 열 수 있습니다. 더 이른 캠페인 게시물에는 더 낮은 예시 APY인 3.64%가 적혀 있었습니다. 약관과 지역 자격이 적용될 수 있습니다.",
      "ja": "Backpackは、米ドル残高が取引の担保のまま最大6.91%のAPYを得られると述べました。2026-11-08までに参加を選んで入金し、2026-11-22まで資金をBackpackに置いた利用者は、それぞれ実物の米国株が入った入金ミステリーボックスを最大12個解除できます。より早いキャンペーン投稿では、より低い例示APYとして3.64%が示されていました。規約と地域の参加条件が適用される場合があります。",
      "ru": "Backpack сообщила, что остатки в USD могут приносить до 6,91% годовых и при этом оставаться торговым обеспечением. Пользователи, которые подключатся и внесут средства не позднее 8 ноября 2026 года и сохранят их на Backpack по 22 ноября 2026 года, могут открыть до 12 Deposit Mystery Boxes; в каждой — реальная акция США. В более раннем посте кампании был указан более низкий иллюстративный APY 3,64%. Могут действовать условия и региональные ограничения.",
      "fa": "Backpack اعلام کرد موجودی دلار می‌تواند تا ۶٫۹۱٪ بازده سالانه داشته باشد و همچنان وثیقه معامله بماند. کاربرانی که تا ۸ نوامبر ۲۰۲۶ بپیوندند و واریز کنند و وجوه را تا ۲۲ نوامبر ۲۰۲۶ در Backpack نگه دارند، می‌توانند تا ۱۲ جعبه مرموز واریز باز کنند که هر کدام یک سهم واقعی آمریکا دارد. پست پیشین کمپین بازده سالانه نمونه پایین‌تری برابر ۳٫۶۴٪ را ذکر کرده بود. شرایط و واجد بودن منطقه‌ای ممکن است اعمال شود."
    }
  },
  {
    "id": "binance-2026-11-05-signalplus-api-keys",
    "exchange": "binance",
    "date": "2026-11-05",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2118295116716589383",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "Binance removes API keys linked to SignalPlus as a precaution",
      "zh": "币安预防性移除与 SignalPlus 关联的 API 密钥",
      "fr": "Binance retire par précaution les clés API liées à SignalPlus",
      "pt": "Binance remove por precaução chaves de API ligadas à SignalPlus",
      "ko": "바이낸스, SignalPlus 연결 API 키를 예방 차원에서 제거",
      "ja": "Binance、予防措置としてSignalPlus連携のAPIキーを削除",
      "ru": "Binance на всякий случай удалила API-ключи, связанные с SignalPlus",
      "fa": "بایننس کلیدهای API مرتبط با SignalPlus را احتیاطاً حذف کرد"
    },
    "summary": {
      "en": "After a potential security issue reported by third-party platform SignalPlus, Binance said it proactively removed all API keys linked to SignalPlus. Binance said its own systems were unaffected and user funds remained safe. Users who used SignalPlus were told to review positions and open orders in Binance directly, wait for SignalPlus to confirm resolution before rebinding keys, and enable IP whitelisting.",
      "zh": "在第三方平台 SignalPlus 报告潜在安全问题后，币安称已预防性移除所有与 SignalPlus 关联的 API 密钥，并表示自身系统未受影响、用户资金安全。曾使用 SignalPlus 的用户应直接在币安查看仓位与挂单，待 SignalPlus 确认解决后再重新绑定密钥，并启用 IP 白名单。",
      "fr": "Après un problème de sécurité potentiel signalé par la plateforme tierce SignalPlus, Binance a indiqué avoir retiré de façon proactive toutes les clés API liées à SignalPlus. Binance a précisé que ses propres systèmes n’étaient pas affectés et que les fonds des utilisateurs restaient en sécurité. Les utilisateurs de SignalPlus ont été invités à vérifier directement sur Binance leurs positions et ordres ouverts, à attendre la confirmation de résolution par SignalPlus avant de relier de nouvelles clés, et à activer la liste blanche d’adresses IP.",
      "pt": "Após um possível problema de segurança informado pela plataforma de terceiros SignalPlus, a Binance disse que removeu de forma proativa todas as chaves de API ligadas à SignalPlus. A Binance afirmou que seus próprios sistemas não foram afetados e que os fundos dos usuários permaneceram seguros. Usuários da SignalPlus foram orientados a revisar posições e ordens em aberto diretamente na Binance, aguardar a SignalPlus confirmar a resolução antes de vincular novas chaves e ativar a lista de IPs permitidos.",
      "ko": "제3자 플랫폼 SignalPlus가 잠재적 보안 문제를 보고한 뒤, 바이낸스는 SignalPlus와 연결된 모든 API 키를 선제적으로 제거했다고 밝혔습니다. 바이낸스는 자체 시스템은 영향받지 않았고 사용자 자금은 안전하다고 했습니다. SignalPlus를 사용한 이용자는 바이낸스에서 포지션과 미체결 주문을 직접 확인하고, SignalPlus가 해결을 확인한 뒤에 키를 다시 연결하며, IP 화이트리스트를 사용하라는 안내를 받았습니다.",
      "ja": "第三者プラットフォームSignalPlusが潜在的なセキュリティ問題を報告したあと、BinanceはSignalPlusに紐づくすべてのAPIキーを予防的に削除したと述べました。Binanceは自社システムは影響を受けておらず、ユーザー資金は安全だとしました。SignalPlusを使っていたユーザーには、Binance上でポジションと未約定注文を直接確認すること、SignalPlusが解決を確認してからキーを再紐付けすること、IPホワイトリストを有効にすることを案内しました。",
      "ru": "После сообщения сторонней платформы SignalPlus о возможной проблеме безопасности Binance заявила, что превентивно удалила все API-ключи, связанные с SignalPlus. Binance сообщила, что её собственные системы не затронуты и средства пользователей в безопасности. Пользователям SignalPlus рекомендовано проверить позиции и открытые ордера непосредственно в Binance, дождаться подтверждения решения от SignalPlus перед повторной привязкой ключей и включить белый список IP.",
      "fa": "پس از گزارش مشکل امنیتی احتمالی توسط پلتفرم ثالث SignalPlus، بایننس اعلام کرد همه کلیدهای API مرتبط با SignalPlus را پیشگیرانه حذف کرده است. بایننس گفت سیستم‌های خودش تحت تأثیر نبوده و وجوه کاربران امن مانده است. به کاربرانی که از SignalPlus استفاده می‌کردند گفته شد موقعیت‌ها و سفارش‌های باز را مستقیماً در بایننس بررسی کنند، تا تأیید رفع مشکل توسط SignalPlus برای اتصال دوباره کلیدها صبر کنند و فهرست سفید IP را فعال کنند."
    }
  },
  {
    "id": "binance-2026-11-04-recovery-98-percent",
    "exchange": "binance",
    "date": "2026-11-04",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2118001921252347938",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "Binance says 98% of stolen assets are covered and expands PoR",
      "zh": "币安称已覆盖约 98% 被盗资产并扩大储备证明",
      "fr": "Binance indique que 98 % des actifs volés sont couverts et élargit la PoR",
      "pt": "Binance diz que 98% dos ativos roubados estão cobertos e amplia a PoR",
      "ko": "바이낸스, 도난 자산의 98%를 보전하고 준비금 증명을 확대",
      "ja": "Binance、盗難資産の98%を補償しPoRを拡大",
      "ru": "Binance сообщила о покрытии 98% похищенных активов и расширила PoR",
      "fa": "بایننس می‌گوید ۹۸٪ دارایی‌های سرقت‌شده پوشش داده شده و اثبات ذخایر را گسترش داد"
    },
    "summary": {
      "en": "In Recovery Update #7, Binance reported that about 98% of stolen assets from the security incident were covered, and published a new and expanded Proof of Reserves snapshot for users to verify.",
      "zh": "在恢复更新第 7 期中，币安称安全事件中约 98% 被盗资产已获覆盖，并发布新的、范围扩大的储备证明快照供用户核验。",
      "fr": "Dans la mise à jour de rétablissement n° 7, Binance a indiqué qu’environ 98 % des actifs volés lors de l’incident de sécurité étaient couverts, et a publié un nouvel instantané élargi de preuve de réserves que les utilisateurs peuvent vérifier.",
      "pt": "Na Atualização de Recuperação nº 7, a Binance informou que cerca de 98% dos ativos roubados no incidente de segurança estavam cobertos e publicou um novo snapshot ampliado de Prova de Reservas para os usuários verificarem.",
      "ko": "복구 업데이트 7호에서 바이낸스는 보안 사고로 도난당한 자산의 약 98%가 보전되었다고 밝혔고, 사용자가 확인할 수 있도록 새롭고 범위가 확대된 준비금 증명 스냅샷을 공개했습니다.",
      "ja": "復旧アップデート第7号で、Binanceはセキュリティ事案で盗まれた資産の約98%がカバーされたと報告し、ユーザーが検証できる新しい拡大版のProof of Reservesスナップショットを公開しました。",
      "ru": "В обновлении о восстановлении № 7 Binance сообщила, что покрыто около 98% активов, похищенных в ходе инцидента безопасности, и опубликовала новый расширенный снимок Proof of Reserves для проверки пользователями.",
      "fa": "در به‌روزرسانی بازیابی شماره ۷، بایننس گزارش داد حدود ۹۸٪ دارایی‌های سرقت‌شده در حادثه امنیتی پوشش داده شده و یک تصویر جدید و گسترده‌تر از اثبات ذخایر را برای بررسی کاربران منتشر کرده است."
    }
  },
  {
    "id": "okx-2026-11-04-simple-options",
    "exchange": "okx",
    "date": "2026-11-04",
    "category": "product",
    "sourceUrl": "https://x.com/okx/status/2117927339988296026",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "OKX launches Simple Options on tokenized stocks",
      "zh": "OKX 上线代币化股票简易期权",
      "fr": "OKX lance Simple Options sur actions tokenisées",
      "pt": "OKX lança Simple Options em ações tokenizadas",
      "ko": "OKX, 토큰화 주식 간이 옵션 출시",
      "ja": "OKX、トークン化株式のSimple Optionsを開始",
      "ru": "OKX запустила Simple Options на токенизированные акции",
      "fa": "OKX گزینه‌های ساده روی سهام توکنیزه‌شده را راه‌اندازی کرد"
    },
    "summary": {
      "en": "OKX introduced Simple Options on tokenized stocks with four strategies, starting from exposure to one tokenized share, and shows premium, breakeven, and potential outcomes before trading. Availability is limited to eligible jurisdictions (excluding USA and EEA per OKX follow-up). Capital is at risk.",
      "zh": "OKX 推出代币化股票简易期权，提供四种策略，起投可低至一张代币化股票的敞口，下单前可查看权利金、盈亏平衡与潜在结果。仅限符合条件的司法辖区（官方后续说明不含美国与欧洲经济区）。本金面临风险。",
      "fr": "OKX a présenté Simple Options sur actions tokenisées, avec quatre stratégies, à partir d’une exposition équivalente à une action tokenisée, et affiche la prime, le seuil de rentabilité et les résultats potentiels avant la transaction. La disponibilité est limitée aux juridictions éligibles (hors États-Unis et EEE, selon un complément d’OKX). Le capital est exposé au risque.",
      "pt": "A OKX apresentou Simple Options em ações tokenizadas, com quatro estratégias, a partir da exposição a uma ação tokenizada, e mostra prêmio, ponto de equilíbrio e resultados potenciais antes da operação. A disponibilidade limita-se a jurisdições elegíveis (excluindo EUA e EEE, segundo complemento da OKX). O capital está em risco.",
      "ko": "OKX는 토큰화 주식에 대한 Simple Options를 네 가지 전략으로 도입했으며, 토큰화 주식 1주 노출부터 시작할 수 있고 거래 전에 프리미엄, 손익분기, 잠재 결과를 보여 줍니다. 이용은 적격 관할권으로 제한됩니다(OKX 후속 설명에 따르면 미국과 유럽경제구역 제외). 원금 손실 위험이 있습니다.",
      "ja": "OKXはトークン化株式のSimple Optionsを4つの戦略で導入し、トークン化株式1株分のエクスポージャーから始められ、取引前にプレミアム、損益分岐、想定結果を表示します。利用は対象となる法域に限られます（OKXの続報では米国とEEAを除く）。元本はリスクにさらされます。",
      "ru": "OKX представила Simple Options на токенизированные акции с четырьмя стратегиями, начиная с экспозиции в размере одной токенизированной акции, и до сделки показывает премию, безубыточность и возможные результаты. Доступ ограничен подходящими юрисдикциями (по последующему уточнению OKX — без США и ЕЭЗ). Капитал под риском.",
      "fa": "OKX گزینه‌های ساده (Simple Options) روی سهام توکنیزه‌شده را با چهار راهبرد معرفی کرد؛ شروع از معرض یک سهم توکنیزه‌شده است و پیش از معامله حق بیمه، نقطه سر‌به‌سر و نتایج احتمالی را نشان می‌دهد. دسترسی به حوزه‌های قضایی واجد شرایط محدود است (طبق توضیح بعدی OKX، بدون آمریکا و منطقه اقتصادی اروپا). سرمایه در معرض ریسک است."
    }
  },
  {
    "id": "okx-2026-11-04-tradfi-copy-trading",
    "exchange": "okx",
    "date": "2026-11-04",
    "category": "product",
    "sourceUrl": "https://x.com/okx/status/2117851837768282456",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "OKX adds TradFi copy trading for equity, ETF, and commodity perps",
      "zh": "OKX 推出传统金融跟单：股票、ETF 与商品永续",
      "fr": "OKX ajoute le copy trading TradFi sur perpétuels actions, ETF et matières premières",
      "pt": "OKX adiciona copy trading TradFi em perpétuos de ações, ETF e commodities",
      "ko": "OKX, 주식·ETF·원자재 무기한의 TradFi 카피 트레이딩 추가",
      "ja": "OKX、株式・ETF・コモディティ無期限のTradFiコピートレードを追加",
      "ru": "OKX добавила копирование TradFi по бессрочным акциям, ETF и сырью",
      "fa": "OKX کپی‌تریدینگ TradFi برای پرپچوال سهام، ETF و کالا را اضافه کرد"
    },
    "summary": {
      "en": "OKX said users can follow TradFi traders and copy strategies across 40+ equity, ETF, and commodity perpetual markets. Copy trading does not guarantee profits; past results are not indicative of future performance.",
      "zh": "OKX 表示用户可跟随传统金融交易者，在 40 多个股票、ETF 与商品永续市场复制策略。跟单不保证盈利，过往表现不代表未来结果。",
      "fr": "OKX a indiqué que les utilisateurs peuvent suivre des traders TradFi et copier des stratégies sur plus de 40 marchés perpétuels d’actions, d’ETF et de matières premières. Le copy trading ne garantit pas de profits ; les résultats passés ne préjugent pas des performances futures.",
      "pt": "A OKX informou que usuários podem seguir traders TradFi e copiar estratégias em mais de 40 mercados perpétuos de ações, ETF e commodities. O copy trading não garante lucros; resultados passados não indicam desempenho futuro.",
      "ko": "OKX는 사용자가 TradFi 트레이더를 팔로우하고 40개 이상의 주식, ETF, 원자재 무기한 시장에서 전략을 복사할 수 있다고 밝혔습니다. 카피 트레이딩은 수익을 보장하지 않으며, 과거 성과가 미래 결과를 나타내지 않습니다.",
      "ja": "OKXは、ユーザーがTradFiトレーダーをフォローし、40以上の株式、ETF、コモディティの無期限市場で戦略をコピーできると述べました。コピートレードは利益を保証せず、過去の結果は将来の成績を示すものではありません。",
      "ru": "OKX сообщила, что пользователи могут следовать за трейдерами TradFi и копировать стратегии на более чем 40 бессрочных рынках акций, ETF и сырьевых товаров. Копирование сделок не гарантирует прибыль; прошлые результаты не указывают на будущие.",
      "fa": "OKX اعلام کرد کاربران می‌توانند معامله‌گران TradFi را دنبال کنند و راهبردها را در بیش از ۴۰ بازار پرپچوال سهام، ETF و کالا کپی کنند. کپی‌تریدینگ سود را تضمین نمی‌کند؛ نتایج گذشته نشان‌دهنده عملکرد آینده نیست."
    }
  },
  {
    "id": "binance-2026-11-03-initial-findings",
    "exchange": "binance",
    "date": "2026-11-03",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2117626126214504729",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "Binance publishes initial findings on the 29 October security incident",
      "zh": "币安发布 10 月 29 日安全事件初步调查结果",
      "fr": "Binance publie les premiers constats sur l’incident du 29 octobre",
      "pt": "Binance publica conclusões iniciais sobre o incidente de 29 de outubro",
      "ko": "바이낸스, 10월 29일 보안 사고 초기 조사 결과 공개",
      "ja": "Binance、10月29日のセキュリティ事案の初期調査結果を公開",
      "ru": "Binance опубликовала предварительные выводы по инциденту 29 октября",
      "fa": "بایننس یافته‌های اولیه حادثه امنیتی ۲۹ اکتبر را منتشر کرد"
    },
    "summary": {
      "en": "Binance published an article titled “29 October Binance Security Incident: Initial Findings and Response Update,” outlining early findings and its response after the incident.",
      "zh": "币安发布题为「29 October Binance Security Incident: Initial Findings and Response Update」的文章，说明事件初步调查结果与应对措施。",
      "fr": "Binance a publié un article intitulé « 29 October Binance Security Incident: Initial Findings and Response Update », qui présente les premiers constats et la réponse après l’incident.",
      "pt": "A Binance publicou um artigo intitulado “29 October Binance Security Incident: Initial Findings and Response Update”, com as conclusões iniciais e a resposta após o incidente.",
      "ko": "바이낸스가 “29 October Binance Security Incident: Initial Findings and Response Update”라는 글을 공개해, 사고 이후의 초기 조사 결과와 대응을 설명했습니다.",
      "ja": "Binanceは「29 October Binance Security Incident: Initial Findings and Response Update」と題した記事を公開し、事案後の初期調査結果と対応を示しました。",
      "ru": "Binance опубликовала статью «29 October Binance Security Incident: Initial Findings and Response Update» с предварительными выводами и описанием мер после инцидента.",
      "fa": "بایننس مقاله‌ای با عنوان «29 October Binance Security Incident: Initial Findings and Response Update» منتشر کرد که یافته‌های اولیه و پاسخ پس از حادثه را شرح می‌دهد."
    }
  },
  {
    "id": "okx-2026-11-03-usdt-usdc-europe-bonus",
    "exchange": "okx",
    "date": "2026-11-03",
    "category": "promotion",
    "sourceUrl": "https://x.com/okx/status/2117504559190876504",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "OKX Europe offers 8% bonus for USDT-to-USDC conversion",
      "zh": "OKX 欧洲推出 USDT 兑换 USDC 的 8% 奖励",
      "fr": "OKX Europe offre un bonus de 8 % pour convertir des USDT en USDC",
      "pt": "OKX Europa oferece bônus de 8% na conversão de USDT para USDC",
      "ko": "OKX 유럽, USDT를 USDC로 전환 시 8% 보너스",
      "ja": "OKX欧州、USDTからUSDCへの交換で8%ボーナス",
      "ru": "OKX Europe предлагает бонус 8% за конвертацию USDT в USDC",
      "fa": "OKX اروپا برای تبدیل USDT به USDC پاداش ۸٪ می‌دهد"
    },
    "summary": {
      "en": "OKX said eligible Europe users can transfer USDT to OKX, convert to USDC at 1:1, and receive an 8% bonus up to €3,500 amid Europe’s changing stablecoin landscape. Campaign terms and regional eligibility apply; crypto is volatile.",
      "zh": "OKX 表示，符合条件的欧洲用户可将 USDT 转入 OKX，按 1:1 兑换为 USDC，并获得最高 3,500 欧元的 8% 奖励，以应对欧洲稳定币环境变化。活动条款与地区资格适用；加密资产价格波动大。",
      "fr": "OKX a indiqué que les utilisateurs éligibles en Europe peuvent transférer des USDT vers OKX, les convertir en USDC au taux de 1:1 et recevoir un bonus de 8 % jusqu’à 3 500 €, dans un contexte de changement du paysage des stablecoins en Europe. Les conditions de la campagne et l’éligibilité régionale s’appliquent ; les cryptomonnaies sont volatiles.",
      "pt": "A OKX informou que usuários elegíveis na Europa podem transferir USDT para a OKX, converter em USDC a 1:1 e receber um bônus de 8% de até € 3.500, em meio às mudanças no cenário de stablecoins na Europa. Termos da campanha e elegibilidade regional se aplicam; criptoativos têm preço volátil.",
      "ko": "OKX는 적격 유럽 사용자가 USDT를 OKX로 옮기고 1:1로 USDC로 전환하면, 유럽 스테이블코인 환경 변화에 따라 최대 €3,500의 8% 보너스를 받을 수 있다고 밝혔습니다. 캠페인 약관과 지역 자격이 적용되며, 암호화폐는 가격 변동이 큽니다.",
      "ja": "OKXは、対象となる欧州のユーザーがUSDTをOKXに移し、1:1でUSDCに交換すると、欧州のステーブルコイン環境の変化に伴い最大3,500ユーロの8%ボーナスを受け取れると述べました。キャンペーン規約と地域の参加条件が適用されます。暗号資産は価格変動が大きいです。",
      "ru": "OKX сообщила, что подходящие пользователи в Европе могут перевести USDT на OKX, конвертировать в USDC по курсу 1:1 и получить бонус 8% до €3 500 на фоне изменений рынка стейблкоинов в Европе. Действуют условия акции и региональные ограничения; криптоактивы волатильны.",
      "fa": "OKX اعلام کرد کاربران واجد شرایط در اروپا می‌توانند USDT را به OKX منتقل کنند، آن را ۱:۱ به USDC تبدیل کنند و در میان تغییر فضای استیبل‌کوین اروپا تا ۳٬۵۰۰ یورو پاداش ۸٪ بگیرند. شرایط کمپین و واجد بودن منطقه‌ای اعمال می‌شود؛ رمزارز نوسان قیمت دارد."
    }
  },
  {
    "id": "binance-2026-11-02-fiat-withdrawals",
    "exchange": "binance",
    "date": "2026-11-02",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2117164969582330063",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "Binance restores more fiat withdrawals including USD",
      "zh": "币安恢复更多法币提现（含美元）",
      "fr": "Binance rétablit d’autres retraits en fiat, dont l’USD",
      "pt": "Binance restaura mais saques fiduciários, inclusive USD",
      "ko": "바이낸스, 달러를 포함한 추가 법정화폐 출금 복구",
      "ja": "Binance、米ドルを含む法定通貨の出金をさらに再開",
      "ru": "Binance восстановила ещё больше фиатных выводов, включая USD",
      "fa": "بایننس برداشت‌های فیات بیشتری از جمله دلار را بازگرداند"
    },
    "summary": {
      "en": "Binance said fiat withdrawals were newly available for USD, AED, VND, PHP, and IDR, in addition to currencies already restored such as JPY, EUR, BRL, and others, with further updates to follow on official channels.",
      "zh": "币安称新开放美元（USD）、阿联酋迪拉姆（AED）、越南盾（VND）、菲律宾比索（PHP）与印尼盾（IDR）等法币提现，并已恢复日元、欧元、巴西雷亚尔等币种；后续更新将通过官方渠道发布。",
      "fr": "Binance a indiqué que les retraits en monnaie fiduciaire étaient de nouveau disponibles pour l’USD, l’AED, le VND, le PHP et l’IDR, en plus de devises déjà rétablies telles que le JPY, l’EUR, le BRL et d’autres. D’autres mises à jour suivront sur les canaux officiels.",
      "pt": "A Binance informou que saques fiduciários voltaram a ficar disponíveis para USD, AED, VND, PHP e IDR, além de moedas já restauradas como JPY, EUR, BRL e outras. Novas atualizações serão publicadas nos canais oficiais.",
      "ko": "바이낸스는 USD, AED, VND, PHP, IDR의 법정화폐 출금을 새로 열었다고 밝혔습니다. JPY, EUR, BRL 등 이미 복구된 통화도 있으며, 이후 업데이트는 공식 채널에서 이어집니다.",
      "ja": "Binanceは、すでに再開していたJPY、EUR、BRLなどに加え、USD、AED、VND、PHP、IDRの法定通貨出金を新たに利用できると述べました。続報は公式チャネルで発表されます。",
      "ru": "Binance сообщила, что выводы фиата вновь доступны для USD, AED, VND, PHP и IDR, в дополнение к уже восстановленным валютам, таким как JPY, EUR, BRL и другим. Дальнейшие обновления появятся в официальных каналах.",
      "fa": "بایننس اعلام کرد برداشت فیات برای USD، AED، VND، PHP و IDR تازه در دسترس است، علاوه بر ارزهایی که پیش‌تر بازگردانده شده‌اند مانند JPY، EUR، BRL و سایر موارد. به‌روزرسانی‌های بعدی در کانال‌های رسمی منتشر می‌شود."
    }
  },
  {
    "id": "binance-2026-11-02-vip-level-protection",
    "exchange": "binance",
    "date": "2026-11-02",
    "category": "product",
    "sourceUrl": "https://x.com/binance/status/2117227212516835337",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "Binance protects eligible VIP levels for 30 days",
      "zh": "币安为符合条件的 VIP 等级提供 30 天保护",
      "fr": "Binance protège les niveaux VIP éligibles pendant 30 jours",
      "pt": "Binance protege níveis VIP elegíveis por 30 dias",
      "ko": "바이낸스, 적격 VIP 등급을 30일간 보호",
      "ja": "Binance、対象VIPレベルを30日間保護",
      "ru": "Binance защищает подходящие уровни VIP на 30 дней",
      "fa": "بایننس سطح VIP واجد شرایط را ۳۰ روز محافظت می‌کند"
    },
    "summary": {
      "en": "Under Binance’s VIP Level Protection Program, eligible VIP 1–9 users receive 30 days of level protection from 2026-11-03 to 2026-12-02, enrolled automatically. The protected level is the highest VIP level reached between 2026-10-21 and 2026-10-30, and will not fall below that floor during the window.",
      "zh": "根据币安 VIP 等级保护计划，符合条件的 VIP 1–9 用户在 2026-11-03 至 2026-12-02 获得 30 天等级保护，自动纳入。保护等级为 2026-10-21 至 2026-10-30 期间达到的最高 VIP 等级，保护期内不会低于该底线。",
      "fr": "Dans le cadre du programme de protection des niveaux VIP de Binance, les utilisateurs éligibles VIP 1 à 9 bénéficient de 30 jours de protection du niveau, du 3 novembre 2026 au 2 décembre 2026, avec inscription automatique. Le niveau protégé est le plus haut niveau VIP atteint entre le 21 octobre 2026 et le 30 octobre 2026, et ne descendra pas sous ce plancher pendant la période.",
      "pt": "No Programa de Proteção de Nível VIP da Binance, usuários elegíveis de VIP 1 a 9 recebem 30 dias de proteção de nível, de 3 de novembro de 2026 a 2 de dezembro de 2026, com inscrição automática. O nível protegido é o VIP mais alto alcançado entre 21 de outubro de 2026 e 30 de outubro de 2026 e não cairá abaixo desse piso durante o período.",
      "ko": "바이낸스 VIP 등급 보호 프로그램에 따라, 적격 VIP 1–9 사용자는 2026-11-03부터 2026-12-02까지 30일간 등급 보호를 받으며 자동으로 포함됩니다. 보호 등급은 2026-10-21부터 2026-10-30 사이에 도달한 최고 VIP 등급이며, 해당 기간에는 그 하한 아래로 내려가지 않습니다.",
      "ja": "BinanceのVIPレベル保護プログラムでは、対象のVIP 1–9ユーザーが2026-11-03から2026-12-02まで30日間のレベル保護を受け、自動的に登録されます。保護されるレベルは2026-10-21から2026-10-30の間に到達した最高VIPレベルで、期間中はその下限を下回りません。",
      "ru": "По программе защиты уровней VIP Binance подходящие пользователи VIP 1–9 получают 30 дней защиты уровня с 3 ноября 2026 по 2 декабря 2026 и подключаются автоматически. Защищённый уровень — самый высокий VIP, достигнутый с 21 октября 2026 по 30 октября 2026, и в этот период он не опустится ниже этого порога.",
      "fa": "بر اساس برنامه حفاظت سطح VIP بایننس، کاربران واجد شرایط VIP ۱ تا ۹ از ۳ نوامبر ۲۰۲۶ تا ۲ دسامبر ۲۰۲۶ به مدت ۳۰ روز حفاظت سطح می‌گیرند و به‌طور خودکار ثبت می‌شوند. سطح محافظت‌شده بالاترین سطح VIP است که بین ۲۱ اکتبر ۲۰۲۶ و ۳۰ اکتبر ۲۰۲۶ به آن رسیده‌اند و در این بازه از آن کف پایین‌تر نمی‌رود."
    }
  },
  {
    "id": "okx-2026-11-02-card-us-live",
    "exchange": "okx",
    "date": "2026-11-02",
    "category": "product",
    "sourceUrl": "https://x.com/okx/status/2117307784287150512",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "OKX Card is live in the United States",
      "zh": "OKX Card 已在美国上线",
      "fr": "L’OKX Card est disponible aux États-Unis",
      "pt": "OKX Card está disponível nos Estados Unidos",
      "ko": "OKX Card, 미국에서 이용 가능",
      "ja": "OKX Cardが米国で利用可能に",
      "ru": "OKX Card доступна в США",
      "fa": "OKX Card در ایالات متحده فعال است"
    },
    "summary": {
      "en": "OKX announced that the OKX Card is live in the US. Eligible users can earn 2% cashback on eligible USDG purchases, with rates reaching 10% at the highest tier, with no FX fees and spending backed by stablecoins. Regional and product terms apply.",
      "zh": "OKX 宣布 OKX Card 已在美国上线。符合条件的用户在合资格的 USDG 消费上可获 2% 返现，最高档可达 10%，无外汇手续费，消费由稳定币支持。地区与产品条款适用。",
      "fr": "OKX a annoncé que l’OKX Card est disponible aux États-Unis. Les utilisateurs éligibles peuvent obtenir 2 % de cashback sur les achats éligibles en USDG, avec des taux allant jusqu’à 10 % au palier le plus élevé, sans frais de change, et des dépenses adossées à des stablecoins. Conditions régionales et du produit applicables.",
      "pt": "A OKX anunciou que o OKX Card está ativo nos EUA. Usuários elegíveis podem receber 2% de cashback em compras elegíveis em USDG, com taxas de até 10% no nível mais alto, sem taxas de câmbio e gastos lastreados em stablecoins. Termos regionais e do produto se aplicam.",
      "ko": "OKX는 OKX Card가 미국에서 출시되었다고 발표했습니다. 적격 사용자는 적격 USDG 결제에서 2% 캐시백을 받을 수 있고, 최고 등급은 10%에 달하며, 환전 수수료가 없고 지출은 스테이블코인으로 뒷받침됩니다. 지역 및 상품 약관이 적용됩니다.",
      "ja": "OKXはOKX Cardが米国で利用可能になったと発表しました。対象ユーザーは対象のUSDG決済で2%のキャッシュバックを受け取れ、最上位では10%に達します。為替手数料はなく、支出はステーブルコインに裏付けられます。地域および商品の規約が適用されます。",
      "ru": "OKX объявила, что OKX Card доступна в США. Подходящие пользователи могут получать 2% кэшбэка за подходящие покупки в USDG, до 10% на высшем уровне, без комиссий за конвертацию валюты; расходы обеспечены стейблкоинами. Действуют региональные и продуктовые условия.",
      "fa": "OKX اعلام کرد OKX Card در آمریکا فعال شده است. کاربران واجد شرایط می‌توانند برای خریدهای واجد شرایط با USDG ۲٪ بازگشت وجه بگیرند و در بالاترین سطح این نرخ به ۱۰٪ می‌رسد؛ کارمزد تبدیل ارز ندارد و خرج با استیبل‌کوین پشتیبانی می‌شود. شرایط منطقه و محصول اعمال می‌شود."
    }
  },
  {
    "id": "okx-2026-11-02-por-49",
    "exchange": "okx",
    "date": "2026-11-02",
    "category": "other",
    "sourceUrl": "https://x.com/okx/status/2117278084759994419",
    "checkedAt": "2026-11-09",
    "title": {
      "en": "OKX publishes its 49th Proof of Reserves report",
      "zh": "OKX 发布第 49 期储备证明报告",
      "fr": "OKX publie son 49e rapport de preuve de réserves",
      "pt": "OKX publica o 49º relatório de Prova de Reservas",
      "ko": "OKX, 49번째 준비금 증명 보고서 공개",
      "ja": "OKXが第49回Proof of Reserves報告を公開",
      "ru": "OKX опубликовала 49-й отчёт Proof of Reserves",
      "fa": "OKX چهل‌ونهمین گزارش اثبات ذخایر را منتشر کرد"
    },
    "summary": {
      "en": "OKX’s 49th consecutive Proof of Reserves report, covering reserves as of 2026-11-01, showed $27.8B in primary assets, with customer assets backed at more than 1:1.",
      "zh": "OKX 第 49 期连续储备证明报告覆盖截至 2026-11-01 的储备，显示主要资产约 278 亿美元，客户资产储备超过 1:1。",
      "fr": "Le 49e rapport consécutif de preuve de réserves d’OKX, portant sur les réserves au 1er novembre 2026, indiquait 27,8 milliards de dollars d’actifs principaux, avec des actifs clients couverts à plus de 1:1.",
      "pt": "O 49º relatório consecutivo de Prova de Reservas da OKX, referente às reservas em 1º de novembro de 2026, mostrou US$ 27,8 bilhões em ativos principais, com ativos de clientes lastreados em mais de 1:1.",
      "ko": "2026-11-01 기준 준비금을 다룬 OKX의 49번째 연속 준비금 증명 보고서는 주요 자산 278억 달러를 보여 주었고, 고객 자산은 1:1을 초과해 뒷받침되었습니다.",
      "ja": "2026-11-01時点の準備金を扱うOKXの49回連続のProof of Reserves報告では、主要資産が278億ドルで、顧客資産は1:1を超えて裏付けられていました。",
      "ru": "49-й подряд отчёт OKX о Proof of Reserves по состоянию на 1 ноября 2026 показал $27,8 млрд основных активов; клиентские активы обеспечены более чем 1:1.",
      "fa": "چهل‌ونهمین گزارش پیاپی اثبات ذخایر OKX، برای ذخایر تا ۱ نوامبر ۲۰۲۶، حدود ۲۷٫۸ میلیارد دلار دارایی اصلی را نشان داد و دارایی مشتریان بیش از ۱:۱ پشتیبانی شده است."
    }
  },
  {
    "id": "binance-2026-11-01-withdrawals-resume",
    "exchange": "binance",
    "date": "2026-11-01",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2116926305254133892",
    "checkedAt": "2026-11-02",
    "title": {
      "en": "Binance resumes withdrawals in phases after the incident",
      "zh": "币安在安全事件后分阶段恢复提现",
      "fr": "Binance rétablit les retraits par étapes après l’incident",
      "pt": "Binance retoma saques em fases após o incidente",
      "ko": "바이낸스, 사고 이후 출금을 단계적으로 재개",
      "ja": "Binance、事案後に出金を段階的に再開",
      "ru": "Binance поэтапно возобновляет выводы после инцидента",
      "fa": "بایننس برداشت‌ها را پس از حادثه مرحله‌ای از سر گرفت"
    },
    "summary": {
      "en": "After the incident, Binance reported a large replenishment of affected assets. An earlier update said about 90% had been restored, covering about $6 billion of the impacted amount. Withdrawals began returning in phases on 2026-11-01 UTC. By 12:36 UTC that day, withdrawals had resumed for all 15 networks and assets in the initial phase, and volumes then stabilized. Binance also updated Proof of Reserves addresses for the new withdrawal wallets.",
      "zh": "事件之后，币安称已大规模补充受影响资产。此前更新称约恢复 90%，覆盖受影响金额约 60 亿美元。提现于 2026-11-01（UTC）起分阶段恢复。当日 12:36 UTC，首批 15 个网络与资产的提现均已恢复，随后交易量趋于稳定。币安同时更新了新提现钱包的储备证明（Proof of Reserves）地址。",
      "fr": "Après l’incident, Binance a signalé un important réapprovisionnement des actifs concernés. Une mise à jour antérieure indiquait qu’environ 90 % avaient été rétablis, couvrant environ 6 milliards de dollars du montant touché. Les retraits ont recommencé par phases le 1er novembre 2026 (UTC). À 12:36 UTC, les retraits avaient repris pour les 15 réseaux et actifs de la première phase, puis les volumes se sont stabilisés. Binance a aussi mis à jour les adresses de preuve de réserves des nouveaux portefeuilles de retrait.",
      "pt": "Após o incidente, a Binance informou uma grande reposição dos ativos afetados. Uma atualização anterior citou cerca de 90% restaurados, cobrindo cerca de US$ 6 bilhões do valor impactado. Os saques começaram a voltar em fases em 1º de novembro de 2026 (UTC). Às 12:36 UTC, os saques haviam sido retomados para as 15 redes e ativos da fase inicial, e os volumes então se estabilizaram. A Binance também atualizou os endereços de Prova de Reservas das novas carteiras de saque.",
      "ko": "사고 이후 바이낸스는 영향받은 자산을 대규모로 보충했다고 밝혔습니다. 앞선 업데이트에서는 약 90%가 복구되어 영향 금액 약 60억 달러를 충당했다고 했습니다. 출금은 2026-11-01 UTC부터 단계적으로 재개되었습니다. 같은 날 12:36 UTC 기준 1단계 15개 네트워크·자산의 출금이 모두 재개되었고, 이후 거래량은 안정되었습니다. 바이낸스는 새 출금 지갑의 준비금 증명 주소도 업데이트했습니다.",
      "ja": "事案後、Binanceは影響を受けた資産を大幅に補充したと報告しました。以前の更新では約90%が回復し、影響額の約60億ドルをカバーしたとしています。出金は2026-11-01 UTCから段階的に再開されました。同日12:36 UTCまでに、初期段階の15のネットワークと資産すべてで出金が再開し、その後出来高は安定しました。新しい出金ウォレットのProof of Reservesアドレスも更新しています。",
      "ru": "После инцидента Binance сообщила о крупном пополнении затронутых активов. В более раннем обновлении говорилось о восстановлении около 90%, что покрывало примерно $6 млрд затронутой суммы. Выводы начали возвращать поэтапно 1 ноября 2026 UTC. К 12:36 UTC выводы возобновились по всем 15 сетям и активам первой фазы, после чего объёмы стабилизировались. Binance также обновила адреса Proof of Reserves для новых кошельков вывода.",
      "fa": "پس از حادثه، بایننس از تأمین گسترده دارایی‌های تحت تأثیر خبر داد. به‌روزرسانی پیشین حدود ۹۰٪ بازیابی و پوشش حدود ۶ میلیارد دلار از مبلغ متأثر را ذکر کرده بود. برداشت‌ها از ۱ نوامبر ۲۰۲۶ به وقت UTC به‌صورت مرحله‌ای بازگشت. تا ساعت ۱۲:۳۶ UTC همان روز، برداشت برای هر ۱۵ شبکه و دارایی مرحله اول از سر گرفته شده بود و سپس حجم‌ها تثبیت شد. بایننس نشانی‌های اثبات ذخایر کیف‌پول‌های برداشت جدید را نیز به‌روز کرد."
    }
  },
  {
    "id": "binance-2026-10-30-security-incident",
    "exchange": "binance",
    "date": "2026-10-30",
    "category": "other",
    "sourceUrl": "https://x.com/binance/status/2115981055043981791",
    "checkedAt": "2026-11-02",
    "title": {
      "en": "Binance says it will cover all losses after a security incident",
      "zh": "币安称将承担安全事件的全部损失",
      "fr": "Binance couvrira toutes les pertes après un incident de sécurité",
      "pt": "Binance diz que cobrirá todas as perdas após incidente de segurança",
      "ko": "바이낸스, 보안 사고 손실을 전액 보전하겠다고 밝혀",
      "ja": "Binance、セキュリティ事案の損失を全額補償すると表明",
      "ru": "Binance заявила, что покроет все убытки после инцидента",
      "fa": "بایننس می‌گوید همه زیان‌های حادثه امنیتی را پوشش می‌دهد"
    },
    "summary": {
      "en": "Binance stated it will cover all losses after a security incident. As a precaution, deposits and withdrawals were temporarily suspended while the team ran security checks, froze funds, and worked with law enforcement.",
      "zh": "币安表示将承担此次安全事件造成的全部损失。作为预防措施，充值与提现曾暂时暂停，团队进行安全检查、冻结资金，并配合执法部门。",
      "fr": "Binance a indiqué qu’elle couvrirait toutes les pertes liées à un incident de sécurité. Par précaution, les dépôts et les retraits ont été temporairement suspendus pendant que l’équipe effectuait des contrôles de sécurité, gelait des fonds et coopérait avec les autorités.",
      "pt": "A Binance afirmou que cobrirá todas as perdas de um incidente de segurança. Por precaução, depósitos e saques foram suspensos temporariamente enquanto a equipe fazia verificações de segurança, congelava fundos e trabalhava com as autoridades.",
      "ko": "바이낸스는 보안 사고로 인한 손실을 전액 보전하겠다고 밝혔습니다. 예방 조치로 입출금이 일시 중단된 동안 보안 점검, 자금 동결, 수사 기관과의 협조가 진행되었습니다.",
      "ja": "Binanceはセキュリティ事案による損失をすべて補償すると述べました。予防措置として入出金を一時停止し、その間にセキュリティ確認、資金の凍結、法執行機関との連携を行いました。",
      "ru": "Binance заявила, что покроет все убытки после инцидента безопасности. В качестве меры предосторожности вводы и выводы временно приостановили, пока команда проводила проверки безопасности, замораживала средства и работала с правоохранительными органами.",
      "fa": "بایننس اعلام کرد همه زیان‌های یک حادثه امنیتی را پوشش می‌دهد. به‌عنوان اقدام احتیاطی، واریز و برداشت موقتاً متوقف شد تا تیم بررسی امنیتی انجام دهد، وجوه را مسدود کند و با نهادهای انتظامی همکاری کند."
    }
  },
  {
    "id": "okx-2026-10-30-operational-status",
    "exchange": "okx",
    "date": "2026-10-30",
    "category": "other",
    "sourceUrl": "https://x.com/okx/status/2115942594958028806",
    "checkedAt": "2026-11-02",
    "title": {
      "en": "OKX says it remains secure and fully operational",
      "zh": "OKX 称平台保持安全并全面运行",
      "fr": "OKX indique rester sécurisée et pleinement opérationnelle",
      "pt": "OKX diz que permanece segura e totalmente operacional",
      "ko": "OKX, 안전하고 정상 운영 중이라고 밝혀",
      "ja": "OKX、安全で通常どおり稼働していると表明",
      "ru": "OKX заявила, что остаётся защищённой и полностью работает",
      "fa": "OKX می‌گوید امن مانده و کاملاً فعال است"
    },
    "summary": {
      "en": "OKX stated that it remains secure and fully operational while monitoring ongoing industry situations and supporting crypto users.",
      "zh": "OKX 表示，在持续关注业内情况并支持加密用户的同时，平台保持安全并全面正常运行。",
      "fr": "OKX a indiqué rester sécurisée et pleinement opérationnelle, tout en surveillant la situation en cours dans le secteur et en accompagnant les utilisateurs de crypto.",
      "pt": "A OKX afirmou que permanece segura e totalmente operacional, enquanto monitora situações em andamento no setor e apoia usuários de cripto.",
      "ko": "OKX는 업계 상황을 계속 살피고 암호화폐 이용자를 지원하는 가운데, 안전하며 정상적으로 운영되고 있다고 밝혔습니다.",
      "ja": "OKXは、業界の状況を注視し暗号資産の利用者を支援しながら、安全かつ通常どおり稼働していると述べました。",
      "ru": "OKX заявила, что остаётся защищённой и полностью работает, следя за текущей ситуацией в отрасли и поддерживая пользователей криптовалют.",
      "fa": "OKX اعلام کرد در حالی که وضعیت جاری صنعت را رصد می‌کند و از کاربران رمزارز پشتیبانی می‌کند، امن مانده و به‌طور کامل فعال است."
    }
  },
  {
    "id": "backpack-2026-10-29-sk-securities-korea",
    "exchange": "backpack",
    "date": "2026-10-29",
    "category": "product",
    "sourceUrl": "https://x.com/Backpack/status/2115799704034566288",
    "checkedAt": "2026-11-02",
    "title": {
      "en": "Backpack partners with SK Securities on Korean equities",
      "zh": "Backpack 与 SK 证券合作，拓展韩国股票全球准入",
      "fr": "Backpack s’associe à SK Securities pour les actions coréennes",
      "pt": "Backpack faz parceria com a SK Securities em ações coreanas",
      "ko": "Backpack, SK증권과 한국 주식 글로벌 접근 협력",
      "ja": "BackpackがSK証券と提携し韓国株へのアクセスを拡大",
      "ru": "Backpack сотрудничает с SK Securities по корейским акциям",
      "fa": "همکاری Backpack و SK Securities برای دسترسی به سهام کره"
    },
    "summary": {
      "en": "Backpack and SK Securities are partnering to expand global access to Korean equities. The partnership combines SK Securities’ institutional expertise in Korea’s capital markets with Backpack’s global reach, so eligible investors can trade Korean stocks through Backpack.",
      "zh": "Backpack 与 SK 证券合作，扩大韩国股票的全球准入。该合作结合 SK 证券在韩国资本市场的机构经验与 Backpack 的全球覆盖，使符合条件的投资者可通过 Backpack 交易韩国股票。",
      "fr": "Backpack et SK Securities s’associent pour élargir l’accès mondial aux actions coréennes. Le partenariat combine l’expertise institutionnelle de SK Securities sur les marchés de capitaux coréens et la portée mondiale de Backpack, afin que les investisseurs éligibles puissent négocier des actions coréennes via Backpack.",
      "pt": "A Backpack e a SK Securities fazem parceria para ampliar o acesso global às ações coreanas. A iniciativa combina a experiência institucional da SK Securities nos mercados de capitais da Coreia com o alcance global da Backpack, para que investidores elegíveis negociem ações coreanas pela Backpack.",
      "ko": "Backpack과 SK증권이 한국 주식의 글로벌 접근을 넓히기 위해 협력합니다. SK증권의 한국 자본시장 기관 전문성과 Backpack의 글로벌 도달 범위를 결합해, 적격 투자자가 Backpack을 통해 한국 주식을 거래할 수 있게 합니다.",
      "ja": "BackpackとSK証券は、韓国株式への世界的なアクセスを広げるために提携します。韓国資本市場におけるSK証券の機関向け専門性とBackpackのグローバルな到達範囲を組み合わせ、対象となる投資家がBackpack経由で韓国株を取引できるようにします。",
      "ru": "Backpack и SK Securities сотрудничают, чтобы расширить глобальный доступ к корейским акциям. Партнёрство сочетает институциональный опыт SK Securities на рынках капитала Кореи и глобальный охват Backpack, чтобы подходящие инвесторы могли торговать корейскими акциями через Backpack.",
      "fa": "Backpack و SK Securities برای گسترش دسترسی جهانی به سهام کره همکاری می‌کنند. این همکاری تخصص نهادی SK Securities در بازارهای سرمایه کره را با دسترسی جهانی Backpack ترکیب می‌کند تا سرمایه‌گذاران واجد شرایط بتوانند سهام کره را از طریق Backpack معامله کنند."
    }
  },
  {
    "id": "backpack-2026-10-29-new-app",
    "exchange": "backpack",
    "date": "2026-10-29",
    "category": "product",
    "sourceUrl": "https://x.com/Backpack/status/2115500177939370471",
    "checkedAt": "2026-11-02",
    "title": {
      "en": "Backpack launches a redesigned mobile app",
      "zh": "Backpack 推出重新设计的移动应用",
      "fr": "Backpack lance une application mobile repensée",
      "pt": "Backpack lança um aplicativo móvel redesenhado",
      "ko": "Backpack, 재설계한 모바일 앱 출시",
      "ja": "Backpackがデザインを刷新したモバイルアプリを公開",
      "ru": "Backpack выпустил обновлённое мобильное приложение",
      "fa": "Backpack اپ موبایل بازطراحی‌شده را منتشر کرد"
    },
    "summary": {
      "en": "Backpack launched a redesigned mobile app (“Meet the new Backpack app / Feel modern finance”).",
      "zh": "Backpack 推出重新设计的移动应用（「Meet the new Backpack app / Feel modern finance」）。",
      "fr": "Backpack a lancé une application mobile repensée (« Meet the new Backpack app / Feel modern finance »).",
      "pt": "A Backpack lançou um aplicativo móvel redesenhado (“Meet the new Backpack app / Feel modern finance”).",
      "ko": "Backpack이 재설계한 모바일 앱을 출시했습니다(“Meet the new Backpack app / Feel modern finance”).",
      "ja": "Backpackはデザインを刷新したモバイルアプリを公開しました（「Meet the new Backpack app / Feel modern finance」）。",
      "ru": "Backpack выпустил обновлённое мобильное приложение («Meet the new Backpack app / Feel modern finance»).",
      "fa": "Backpack اپلیکیشن موبایل بازطراحی‌شده را منتشر کرد («Meet the new Backpack app / Feel modern finance»)."
    }
  },
  {
    "id": "backpack-2026-10-29-returning-mystery-box",
    "exchange": "backpack",
    "date": "2026-10-29",
    "category": "promotion",
    "sourceUrl": "https://x.com/Backpack/status/2115704999590474058",
    "checkedAt": "2026-11-02",
    "title": {
      "en": "Returning traders get one extra Mystery Box",
      "zh": "回归交易者可额外获得一个盲盒",
      "fr": "Traders de retour : une Mystery Box supplémentaire",
      "pt": "Traders que retornam ganham uma Mystery Box extra",
      "ko": "복귀 트레이더에게 미스터리 박스 1개 추가",
      "ja": "復帰トレーダーにミステリーボックスを1つ追加",
      "ru": "Возвращающимся трейдерам — дополнительная Mystery Box",
      "fa": "معامله‌گران بازگشتی یک Mystery Box اضافه می‌گیرند"
    },
    "summary": {
      "en": "Backpack’s returning-trader promotion has a new look and offers one extra Mystery Box to eligible returning traders. Trading $10,000 unlocks two boxes. Stock rewards are up to $1,000 per box; that figure is a rare maximum, not guaranteed. Regional and eligibility restrictions may apply.",
      "zh": "Backpack 回归交易者活动换了新外观，符合条件的回归交易者可额外获得一个盲盒。成交 10,000 美元可解锁两个盲盒。股票奖励每盒最高 1,000 美元，该金额为罕见上限，并非保证。可能适用地区与资格限制。",
      "fr": "La promotion Backpack pour les traders de retour change d’apparence et offre une Mystery Box supplémentaire aux traders éligibles qui reviennent. Un volume de 10 000 $ débloque deux boîtes. Les récompenses en actions vont jusqu’à 1 000 $ par boîte ; ce montant est un maximum rare, non garanti. Des restrictions régionales et d’éligibilité peuvent s’appliquer.",
      "pt": "A promoção da Backpack para traders que retornam tem visual novo e oferece uma Mystery Box extra a traders elegíveis. Negociar US$ 10.000 libera duas caixas. As recompensas em ações chegam a até US$ 1.000 por caixa; esse valor é um máximo raro, não garantido. Restrições regionais e de elegibilidade podem se aplicar.",
      "ko": "Backpack의 복귀 트레이더 프로모션이 새 디자인으로 제공되며, 적격 복귀 트레이더에게 미스터리 박스 1개를 추가로 줍니다. $10,000을 거래하면 박스 2개가 열립니다. 주식 보상은 박스당 최대 $1,000이며, 이는 드문 최대액으로 보장되지 않습니다. 지역 및 자격 제한이 적용될 수 있습니다.",
      "ja": "Backpackの復帰トレーダー向けプロモーションは新しい見た目になり、対象の復帰トレーダーにミステリーボックスを1つ追加します。10,000ドルの取引で2箱が解除されます。株式報酬は1箱あたり最大1,000ドルで、まれな上限であり保証されません。地域および参加条件の制限が適用される場合があります。",
      "ru": "Акция Backpack для возвращающихся трейдеров получила новый вид и даёт одну дополнительную Mystery Box подходящим участникам. Оборот $10 000 открывает две коробки. Награды акциями — до $1 000 за коробку; это редкий максимум, а не гарантия. Могут действовать региональные ограничения и условия участия.",
      "fa": "کمپین معامله‌گران بازگشتی Backpack ظاهر تازه دارد و به واجدان شرایط یک Mystery Box اضافه می‌دهد. معامله ۱۰٬۰۰۰ دلار دو جعبه را باز می‌کند. پاداش سهام تا ۱٬۰۰۰ دلار در هر جعبه است؛ این مبلغ حداکثر نادر است، نه تضمین. محدودیت منطقه و شرایط واجد بودن ممکن است اعمال شود."
    }
  },
  {
    "id": "binance-2026-10-29-predict-listing",
    "exchange": "binance",
    "date": "2026-10-29",
    "category": "listing",
    "sourceUrl": "https://x.com/binance/status/2115790593536532946",
    "checkedAt": "2026-11-02",
    "title": {
      "en": "Binance announced PREDICT with the Seed Tag, then postponed it",
      "zh": "币安宣布上线 PREDICT（种子标签）后推迟",
      "fr": "Binance annonce PREDICT avec Seed Tag, puis reporte la cotation",
      "pt": "Binance anuncia PREDICT com Seed Tag e depois adia a listagem",
      "ko": "바이낸스, PREDICT 시드 태그 상장을 발표한 뒤 연기",
      "ja": "Binance、PREDICTをSeed Tag付きで発表したあと上場を延期",
      "ru": "Binance объявила листинг PREDICT с Seed Tag, затем отложила его",
      "fa": "بایننس PREDICT را با برچسب Seed اعلام کرد و سپس به تعویق انداخت"
    },
    "summary": {
      "en": "Binance announced a listing of @predictdotfun (PREDICT) with the Seed Tag. A later official reply said the PREDICT listing would be postponed until further notice amid the security response.",
      "zh": "币安宣布上线 @predictdotfun（PREDICT），并加注种子标签（Seed Tag）。随后官方回复称，因安全应对，PREDICT 上线推迟至另行通知。",
      "fr": "Binance a annoncé la cotation de @predictdotfun (PREDICT) avec le Seed Tag. Une réponse officielle ultérieure a indiqué que la cotation de PREDICT était reportée jusqu’à nouvel ordre, dans le cadre de la réponse à l’incident de sécurité.",
      "pt": "A Binance anunciou a listagem de @predictdotfun (PREDICT) com a Seed Tag. Uma resposta oficial posterior disse que a listagem de PREDICT seria adiada até novo aviso, em meio à resposta de segurança.",
      "ko": "바이낸스는 @predictdotfun(PREDICT)을 시드 태그(Seed Tag)와 함께 상장한다고 발표했습니다. 이후 공식 답변에서 보안 대응 중에 PREDICT 상장을 추후 공지 시까지 연기한다고 밝혔습니다.",
      "ja": "Binanceは@predictdotfun（PREDICT）をSeed Tag付きで上場すると発表しました。その後の公式返信では、セキュリティ対応に伴いPREDICTの上場を追って通知があるまで延期するとしました。",
      "ru": "Binance объявила листинг @predictdotfun (PREDICT) с меткой Seed Tag. В более позднем официальном ответе сказано, что листинг PREDICT отложен до отдельного уведомления на фоне мер безопасности.",
      "fa": "بایننس فهرست شدن @predictdotfun (PREDICT) را با برچسب Seed اعلام کرد. پاسخ رسمی بعدی گفت به‌دلیل واکنش امنیتی، فهرست شدن PREDICT تا اطلاع بعدی به تعویق می‌افتد."
    }
  },
  {
    "id": "binance-2026-10-29-bstocks-listings",
    "exchange": "binance",
    "date": "2026-10-29",
    "category": "listing",
    "sourceUrl": "https://x.com/binance/status/2115790766484393987",
    "checkedAt": "2026-11-02",
    "title": {
      "en": "Binance lists five new bStocks pairs",
      "zh": "币安上线五个新 bStocks 交易对",
      "fr": "Binance ajoute cinq paires bStocks",
      "pt": "Binance lista cinco novos pares bStocks",
      "ko": "바이낸스, bStocks 거래쌍 5종 상장",
      "ja": "BinanceがbStocksを5銘柄追加",
      "ru": "Binance добавляет пять пар bStocks",
      "fa": "بایننس پنج جفت bStocks جدید فهرست کرد"
    },
    "summary": {
      "en": "New bStocks listings: APPB/USDT, BSPB/USDT, GEVB/USDT, SKDDB/USDT and SKUUB/USDT. They are available 24/7, with a 1:1 free and instant exchange for the corresponding stocks on Binance. These products are not direct share ownership. Regional restrictions apply.",
      "zh": "新上线 bStocks：APPB/USDT、BSPB/USDT、GEVB/USDT、SKDDB/USDT 和 SKUUB/USDT。支持 24/7 交易，并可在币安与对应股票 1:1 免费即时兑换。这些产品不是直接持股。适用地区限制。",
      "fr": "Nouvelles cotations bStocks : APPB/USDT, BSPB/USDT, GEVB/USDT, SKDDB/USDT et SKUUB/USDT. Accès 24h/24 et 7j/7, avec un échange gratuit et instantané 1:1 contre les actions correspondantes sur Binance. Ce n’est pas une détention directe d’actions. Des restrictions régionales s’appliquent.",
      "pt": "Novas listagens bStocks: APPB/USDT, BSPB/USDT, GEVB/USDT, SKDDB/USDT e SKUUB/USDT. Acesso 24/7, com troca gratuita e instantânea 1:1 pelas ações correspondentes na Binance. Não são propriedade direta das ações. Restrições regionais se aplicam.",
      "ko": "신규 bStocks: APPB/USDT, BSPB/USDT, GEVB/USDT, SKDDB/USDT, SKUUB/USDT. 24시간 거래가 가능하며, 바이낸스에서 해당 주식과 1:1로 무료 즉시 교환됩니다. 직접 주식 소유가 아닙니다. 지역 제한이 적용됩니다.",
      "ja": "新規bStocksはAPPB/USDT、BSPB/USDT、GEVB/USDT、SKDDB/USDT、SKUUB/USDTです。24時間取引でき、Binance上の対応する株式と1:1で無料かつ即時に交換できます。直接の株式保有ではありません。地域制限があります。",
      "ru": "Новые листинги bStocks: APPB/USDT, BSPB/USDT, GEVB/USDT, SKDDB/USDT и SKUUB/USDT. Доступ 24/7 и бесплатный мгновенный обмен 1:1 на соответствующие акции на Binance. Это не прямое владение акциями. Действуют региональные ограничения.",
      "fa": "فهرست‌های جدید bStocks: APPB/USDT، BSPB/USDT، GEVB/USDT، SKDDB/USDT و SKUUB/USDT. دسترسی ۲۴/۷ و تبدیل رایگان و فوری ۱:۱ به سهام متناظر در بایننس. این محصولات مالکیت مستقیم سهم نیستند. محدودیت منطقه‌ای اعمال می‌شود."
    }
  },
  {
    "id": "okx-2026-10-29-okxice-tradexyz",
    "exchange": "okx",
    "date": "2026-10-29",
    "category": "product",
    "sourceUrl": "https://x.com/okx/status/2115791000866308182",
    "checkedAt": "2026-11-02",
    "title": {
      "en": "OKXICE: ICE and trade.xyz advance a 24/7 U.S. retail market",
      "zh": "OKXICE：ICE 与 trade.xyz 推进美国零售 24/7 市场",
      "fr": "OKXICE : ICE et trade.xyz avancent un marché américain 24h/24",
      "pt": "Marco da OKXICE: ICE e trade.xyz avançam mercado 24/7 nos EUA",
      "ko": "OKXICE, 미국 개인용 24시간 규제 시장 모델 추진",
      "ja": "OKXICE：ICEとtrade.xyzが米国個人向け24時間市場を推進",
      "ru": "OKXICE: ICE и trade.xyz продвигают круглосуточный рынок для розницы США",
      "fa": "OKXICE: پیشبرد بازار ۲۴/۷ خرده‌فروشی آمریکا با ICE و trade.xyz"
    },
    "summary": {
      "en": "A milestone for the OKXICE joint venture: ICE and @tradexyz are advancing a new regulated, 24/7 market model for U.S. retail traders, with access through OKXICE.",
      "zh": "OKXICE 合资项目的一项进展：ICE 与 @tradexyz 正在推进面向美国零售交易者的新型受监管、全天候（24/7）市场模式，接入通过 OKXICE。",
      "fr": "Étape pour la coentreprise OKXICE : ICE et @tradexyz font avancer un nouveau modèle de marché réglementé, ouvert 24h/24, destiné aux particuliers aux États-Unis, avec un accès via OKXICE.",
      "pt": "Marco da joint venture OKXICE: a ICE e a @tradexyz avançam um novo modelo de mercado regulado, 24/7, para traders de varejo nos EUA, com acesso pela OKXICE.",
      "ko": "OKXICE 합작의 이정표입니다. ICE와 @tradexyz가 미국 개인 투자자를 위한 새로운 규제된 24시간 시장 모델을 추진하며, 접근은 OKXICE를 통합니다.",
      "ja": "OKXICE合弁の節目として、ICEと@tradexyzは米国の個人投資家向けに、規制された24時間の新しい市場モデルを進めており、アクセスはOKXICE経由です。",
      "ru": "Этап совместного предприятия OKXICE: ICE и @tradexyz развивают новую регулируемую круглосуточную модель рынка для розничных трейдеров США с доступом через OKXICE.",
      "fa": "نقطه عطف سرمایه‌گذاری مشترک OKXICE: ICE و @tradexyz مدل بازار جدیدِ تحت نظارت و ۲۴/۷ را برای معامله‌گران خرده‌فروشی آمریکا پیش می‌برند و دسترسی از طریق OKXICE است."
    }
  },
  {
    "id": "okx-2026-10-27-anthropic-xperps",
    "exchange": "okx",
    "date": "2026-10-27",
    "category": "listing",
    "sourceUrl": "https://x.com/okx/status/2114755458338533404",
    "checkedAt": "2026-11-02",
    "title": {
      "en": "Anthropic pre-IPO X-Perps are live on OKX",
      "zh": "OKX 上线 Anthropic 上市前 X-Perps",
      "fr": "X-Perps pré-IPO Anthropic en ligne sur OKX",
      "pt": "X-Perps pré-IPO da Anthropic estão ativos na OKX",
      "ko": "OKX에서 Anthropic 상장 전 X-Perps 거래 개시",
      "ja": "OKXでAnthropicの上場前X-Perpsが取引開始",
      "ru": "На OKX доступны pre-IPO X-Perps на Anthropic",
      "fa": "X-Perps پیش از عرضه عمومی Anthropic در OKX فعال است"
    },
    "summary": {
      "en": "Anthropic filed for a proposed public listing. Trading of its implied valuation is already live on OKX via pre-IPO X-Perps, long or short, with up to 10x leverage. Pre-IPO X-Perps are leveraged derivatives, not shares. Capital is at risk. Regional restrictions apply.",
      "zh": "Anthropic 已提交拟议公开上市的申请。其隐含估值已可在 OKX 通过上市前 X-Perps 交易，可做多或做空，最高 10 倍杠杆。上市前 X-Perps 是杠杆衍生品，不是股票。本金面临风险。适用地区限制。",
      "fr": "Anthropic a déposé une demande d’introduction en bourse proposée. La valorisation implicite se négocie déjà sur OKX via des X-Perps pré-IPO, en position longue ou courte, avec un effet de levier jusqu’à 10x. Les X-Perps pré-IPO sont des dérivés à effet de levier, pas des actions. Le capital est exposé au risque. Des restrictions régionales s’appliquent.",
      "pt": "A Anthropic protocolou um pedido de listagem pública proposta. A negociação de sua avaliação implícita já está ativa na OKX via X-Perps pré-IPO, em compra ou venda, com alavancagem de até 10x. X-Perps pré-IPO são derivativos alavancados, não ações. O capital está em risco. Restrições regionais se aplicam.",
      "ko": "Anthropic이 제안된 공개 상장 신청을 제출했습니다. 내재 가치 거래는 OKX의 상장 전 X-Perps로 이미 가능하며, 롱·숏과 최대 10배 레버리지를 지원합니다. 상장 전 X-Perps는 주식이 아닌 레버리지 파생상품입니다. 원금 손실 위험이 있으며 지역 제한이 적용됩니다.",
      "ja": "Anthropicは提案された公開上場の申請を提出しました。想定評価額の取引はOKXの上場前X-Perpsですでに始まっており、ロングまたはショート、最大10倍のレバレッジです。上場前X-Perpsは株式ではなく、レバレッジ付きデリバティブです。元本はリスクにさらされます。地域制限があります。",
      "ru": "Anthropic подала заявку на предполагаемое публичное размещение. Торговля подразумеваемой оценкой уже идёт на OKX через pre-IPO X-Perps: лонг или шорт, плечо до 10x. Pre-IPO X-Perps — это маржинальные деривативы, а не акции. Капитал под риском. Действуют региональные ограничения.",
      "fa": "Anthropic درخواست فهرست عمومی پیشنهادی را ثبت کرده است. معامله ارزش ضمنی آن هم‌اکنون در OKX از طریق X-Perps پیش از عرضه عمومی فعال است؛ موقعیت خرید یا فروش، با اهرم تا ۱۰ برابر. این قراردادها مشتقه اهرمی هستند، نه سهم. سرمایه در معرض ریسک است. محدودیت منطقه‌ای اعمال می‌شود."
    }
  },
  {
    "id": "binance-2026-10-26-tradfi-perps",
    "exchange": "binance",
    "date": "2026-10-26",
    "category": "listing",
    "sourceUrl": "https://x.com/binance/status/2114661132522885520",
    "checkedAt": "2026-11-02",
    "title": {
      "en": "Binance lists four TradFi perpetual futures",
      "zh": "币安上线四只传统金融永续合约",
      "fr": "Binance ajoute quatre perpétuels TradFi",
      "pt": "Binance lista quatro futuros perpétuos TradFi",
      "ko": "바이낸스, TradFi 무기한 선물 4종 상장",
      "ja": "BinanceがTradFi無期限先物を4銘柄追加",
      "ru": "Binance добавляет четыре бессрочных контракта TradFi",
      "fa": "بایننس چهار قرارداد دائمی TradFi فهرست کرد"
    },
    "summary": {
      "en": "New TradFi perpetual futures: iShares MSCI Indonesia ETF (EIDO), EQT Corporation (EQT), STMicroelectronics NV (STM) and AbbVie Inc. (ABBV). They are available 24/7 with up to 20x leverage.",
      "zh": "新上线传统金融永续合约：iShares MSCI Indonesia ETF（EIDO）、EQT Corporation（EQT）、STMicroelectronics NV（STM）和 AbbVie Inc.（ABBV）。支持 24/7 交易，最高 20 倍杠杆。",
      "fr": "Nouveaux contrats perpétuels TradFi : iShares MSCI Indonesia ETF (EIDO), EQT Corporation (EQT), STMicroelectronics NV (STM) et AbbVie Inc. (ABBV). Disponibles 24h/24, avec un effet de levier jusqu’à 20x.",
      "pt": "Novos perpétuos TradFi: iShares MSCI Indonesia ETF (EIDO), EQT Corporation (EQT), STMicroelectronics NV (STM) e AbbVie Inc. (ABBV). Disponíveis 24/7, com alavancagem de até 20x.",
      "ko": "신규 TradFi 무기한 선물: iShares MSCI Indonesia ETF(EIDO), EQT Corporation(EQT), STMicroelectronics NV(STM), AbbVie Inc.(ABBV). 24시간 거래가 가능하며 최대 20배 레버리지입니다.",
      "ja": "新規TradFi無期限先物は、iShares MSCI Indonesia ETF（EIDO）、EQT Corporation（EQT）、STMicroelectronics NV（STM）、AbbVie Inc.（ABBV）です。24時間取引でき、レバレッジは最大20倍です。",
      "ru": "Новые бессрочные фьючерсы TradFi: iShares MSCI Indonesia ETF (EIDO), EQT Corporation (EQT), STMicroelectronics NV (STM) и AbbVie Inc. (ABBV). Доступны 24/7, плечо до 20x.",
      "fa": "قراردادهای دائمی جدید TradFi: iShares MSCI Indonesia ETF (EIDO)، EQT Corporation (EQT)، STMicroelectronics NV (STM) و AbbVie Inc. (ABBV). دسترسی ۲۴/۷ با اهرم تا ۲۰ برابر."
    }
  },
  {
    "id": "okx-2026-10-26-card-us",
    "exchange": "okx",
    "date": "2026-10-26",
    "category": "product",
    "sourceUrl": "https://x.com/okx/status/2114515105673027848",
    "checkedAt": "2026-11-02",
    "title": {
      "en": "OKX Card is coming to the US",
      "zh": "OKX Card 即将进入美国并开放提前加入",
      "fr": "L’OKX Card arrive aux États-Unis",
      "pt": "OKX Card chega aos EUA",
      "ko": "OKX Card, 미국 출시 예정",
      "ja": "OKX Cardが米国に登場予定",
      "ru": "OKX Card выходит в США",
      "fa": "OKX Card به آمریکا می‌آید"
    },
    "summary": {
      "en": "OKX said the OKX Card is coming to the United States and opened an early join / waitlist.",
      "zh": "OKX 表示 OKX Card 即将进入美国，并开放提前加入／等候名单。",
      "fr": "OKX a indiqué que l’OKX Card arrive aux États-Unis et a ouvert une inscription anticipée / liste d’attente.",
      "pt": "A OKX informou que o OKX Card chegará aos Estados Unidos e abriu uma inscrição antecipada / lista de espera.",
      "ko": "OKX는 OKX Card가 미국에 출시된다고 밝혔고, 사전 참여·대기 명단을 열었습니다.",
      "ja": "OKXはOKX Cardが米国に登場すると述べ、事前参加のウェイトリストを開きました。",
      "ru": "OKX сообщила, что OKX Card появится в США, и открыла раннюю запись в список ожидания.",
      "fa": "OKX اعلام کرد OKX Card به ایالات متحده می‌آید و پیوستن زودهنگام و فهرست انتظار را باز کرده است."
    }
  },
  {
    "id": "backpack-2026-10-21-unpack-week-4",
    "exchange": "backpack",
    "date": "2026-10-21",
    "category": "promotion",
    "sourceUrl": "https://learn.backpack.exchange/blog/unpack-real-stocks-week-4",
    "checkedAt": "2026-10-26",
    "title": {
      "en": "Unpack Real Stocks · Week 4",
      "zh": "Unpack Real Stocks 美股盲盒 · 第四周",
      "fr": "Unpack Real Stocks · Semaine 4",
      "pt": "Unpack Real Stocks · Semana 4",
      "ko": "Unpack Real Stocks · 4주 차",
      "ja": "Unpack Real Stocks · 第4週",
      "ru": "Unpack Real Stocks · Неделя 4",
      "fa": "Unpack Real Stocks · هفته چهارم"
    },
    "summary": {
      "en": "Opt in before trading. First box: $10,000 eligible volume; maximum 15 boxes. KYC and $100 closing balance required. Crypto spot and all perpetuals count; stock spot, USDT/USDC, converts, API, liquidations and market makers are excluded. Open boxes October 29–November 5. Rewards vary; $1,000 is a rare maximum, not guaranteed. Regional restrictions apply; ineligible stock recipients receive equivalent USDC. Campaign eligibility does not make Equity Perps eligible for affiliate fee sharing.",
      "zh": "交易前需报名，首个盲盒要求 10,000 美元有效成交额，最多 15 个。需 KYC 及结束时 100 美元余额。加密现货和所有永续计入；股票现货、USDT/USDC、闪兑、API、强平及做市商排除。10 月 29 日至 11 月 5 日开盒。奖励随机，1,000 美元为罕见最高额，非保底。地区限制适用；不具备股票接收资格者获等值 USDC。活动计入 Equity Perps 不代表其适用 Affiliate 手续费分享。",
      "fr": "Inscription avant trading. Première boîte : 10 000 $ de volume éligible ; 15 maximum. KYC et solde final de 100 $ requis. Crypto spot et tous perpétuels inclus ; actions spot, USDT/USDC, conversions, API, liquidations et teneurs de marché exclus. Ouverture du 29 octobre au 5 novembre. Le maximum rare de 1 000 $ n’est pas garanti. Restrictions régionales ; remplacement en USDC si actions non accessibles. Les Equity Perps restent exclus du partage affilié.",
      "pt": "Inscreva-se antes de operar. Primeira caixa: US$ 10.000 de volume elegível; máximo 15. Exige KYC e saldo final de US$ 100. Spot cripto e todos os perpétuos contam; ações spot, USDT/USDC, conversões, API, liquidações e formadores de mercado são excluídos. Abertura de 29 de outubro a 5 de novembro. US$ 1.000 é máximo raro, não garantido. Restrições regionais; substituição por USDC se inelegível para ações. Equity Perps seguem excluídos da comissão afiliada.",
      "ko": "거래 전 신청해야 합니다. 첫 상자는 적격 거래량 $10,000, 최대 15개입니다. KYC와 종료 잔액 $100이 필요합니다. 암호화폐 현물과 모든 무기한은 포함되며 주식 현물, USDT/USDC, 전환, API, 청산, 마켓메이커는 제외됩니다. 개봉은 10월 29일~11월 5일입니다. $1,000은 드문 최대액으로 보장되지 않습니다. 지역 제한이 있으며 주식 수령 불가 시 USDC로 대체됩니다. Equity Perps는 제휴 수수료 공유에서 제외됩니다.",
      "ja": "取引前に参加登録。最初の箱は対象取引高10,000ドル、最大15箱。KYCと終了時100ドルの残高が必要です。暗号資産現物と全無期限が対象、株式現物、USDT/USDC、変換、API、清算、マーケットメーカーは対象外。開封は10月29日〜11月5日。1,000ドルはまれな最高額で保証ではありません。地域制限があり株式受領不可の場合はUSDCに代替。Equity Perpsは紹介手数料共有の対象外です。",
      "ru": "Регистрация до торговли. Первая коробка: оборот $10 000, максимум 15. Нужны KYC и $100 на конец акции. Криптоспот и все бессрочные контракты учитываются; акции спот, USDT/USDC, конвертация, API, ликвидации и маркетмейкеры исключены. Открытие 29 октября–5 ноября. $1 000 — редкий максимум без гарантии. Действуют региональные ограничения; при недоступности акций замена на USDC. Equity Perps исключены из партнёрского возврата комиссий.",
      "fa": "پیش از معامله ثبت‌نام کنید. اولین جعبه: ۱۰٬۰۰۰ دلار حجم واجد شرایط؛ حداکثر ۱۵ جعبه. احراز هویت و موجودی نهایی ۱۰۰ دلار لازم است. اسپات رمزارز و همه قراردادهای دائمی شامل‌اند؛ سهام اسپات، USDT/USDC، تبدیل، API، لیکوئیدشدن و بازارسازها مستثنا هستند. بازکردن: ۲۹ اکتبر تا ۵ نوامبر. ۱٬۰۰۰ دلار حداکثر نادر است، نه تضمینی. محدودیت منطقه‌ای و جایگزینی USDC برای افراد فاقد صلاحیت دریافت سهام اعمال می‌شود. Equity Perps مشمول سهم کارمزد معرفی نیست."
    },
    "startsAt": "2026-10-21T00:00:00Z",
    "endsAt": "2026-10-27T23:59:00Z"
  },
  {
    "id": "binance-2026-10-22-bstocks-referral-exclusion",
    "exchange": "binance",
    "date": "2026-10-22",
    "category": "promotion",
    "sourceUrl": "https://www.binance.com/en/support/announcement/detail/ed8ff1366f0e4d4687eb1e105e7f61f1",
    "checkedAt": "2026-10-26",
    "title": {
      "en": "bStocks Carnival excludes referral sign-ups",
      "zh": "bStocks 活动排除推荐注册用户",
      "fr": "Carnaval bStocks : inscriptions parrainées exclues",
      "pt": "Carnaval bStocks exclui cadastros por indicação",
      "ko": "bStocks 카니발: 추천 가입 제외",
      "ja": "bStocksカーニバル：紹介登録は対象外",
      "ru": "Карнавал bStocks: реферальные регистрации исключены",
      "fa": "کارناوال bStocks: ثبت‌نام معرفی‌شده مستثناست"
    },
    "summary": {
      "en": "Not a FeeLens referral benefit: both tasks exclude referral/affiliate sign-ups. Eligible new users must register and complete KYC during the campaign and opt in. Task A: deposit at least $20 via fiat, card or P2P; limited to 5,000 users. Task B: at least $50 bStocks volume. Regional and liquidity-provider exclusions apply. Vouchers due December 4, expire 14 days after distribution. The page conflicts on prize-pool caps ($20,000 versus $50,000); no amount is promised here. bStocks are not direct share ownership; US persons are excluded.",
      "zh": "不是 FeeLens 推荐权益：两项任务均排除推荐或 Affiliate 注册用户。合格新用户需在活动期注册、完成 KYC 并报名。任务 A：法币、银行卡或 P2P 入金至少 20 美元，限前 5,000 人；任务 B：bStocks 成交至少 50 美元。适用地区及流动性提供商排除条件。奖励券最迟 12 月 4 日发放，发放后 14 日失效。公告奖池上限存在 20,000 与 50,000 美元冲突，本站不承诺金额。bStocks 不是直接持股，美国人士排除。",
      "fr": "Pas un avantage FeeLens : les deux tâches excluent les inscriptions affiliées/parrainées. Nouveaux utilisateurs éligibles : inscription et KYC pendant la campagne, puis adhésion. A : dépôt de 20 $ minimum via fiat, carte ou P2P, limité à 5 000 personnes. B : volume bStocks de 50 $ minimum. Restrictions régionales et fournisseurs de liquidité exclus. Bons avant le 4 décembre, valables 14 jours. Plafonds contradictoires de 20 000/50 000 $ : aucune somme promise. bStocks ne confèrent pas la propriété directe ; personnes américaines exclues.",
      "pt": "Não é benefício FeeLens: ambas as tarefas excluem cadastro por indicação/afiliado. Novos usuários elegíveis devem se cadastrar, fazer KYC no período e aderir. A: depósito mínimo de US$ 20 por moeda fiduciária, cartão ou P2P, limitado a 5.000 usuários. B: US$ 50 de volume bStocks. Restrições regionais e de provedores de liquidez. Vouchers até 4 de dezembro, validade de 14 dias. Limites conflitantes de US$ 20.000/50.000: nenhum valor prometido. bStocks não são propriedade direta; pessoas dos EUA excluídas.",
      "ko": "FeeLens 추천 혜택이 아닙니다. 두 과제 모두 추천·제휴 가입을 제외합니다. 적격 신규 사용자는 기간 내 가입·KYC·참여 신청이 필요합니다. A는 법정화폐·카드·P2P로 $20 이상 입금, 선착순 5,000명입니다. B는 bStocks 거래량 $50 이상입니다. 지역·유동성 공급자 제한이 있습니다. 바우처는 12월 4일까지 발급, 발급 후 14일 만료입니다. 상금 한도 $20,000/$50,000이 상충하여 금액을 보장하지 않습니다. bStocks는 직접 주식 소유가 아니며 미국인은 제외됩니다.",
      "ja": "FeeLens紹介特典ではありません。両タスクとも紹介・提携経由登録は対象外。対象新規ユーザーは期間内登録・KYC・参加申込が必要。Aは法定通貨・カード・P2Pで20ドル以上入金、先着5,000名。BはbStocks取引高50ドル以上。地域・流動性提供者の除外条件あり。券は12月4日までに配布、14日後失効。賞金上限が20,000／50,000ドルと矛盾するため金額は約束しません。bStocksは直接所有ではなく米国人は対象外。",
      "ru": "Это не бонус FeeLens: обе задачи исключают реферальные/партнёрские регистрации. Нужны новая регистрация, KYC в период акции и заявка на участие. A: депозит от $20 фиатом, картой или P2P, первые 5 000 пользователей. B: оборот bStocks от $50. Региональные ограничения, поставщики ликвидности исключены. Ваучеры до 4 декабря, срок 14 дней. В источнике конфликт лимитов $20 000/$50 000 — сумма не обещается. bStocks не дают прямого владения акциями; лица США исключены.",
      "fa": "مزیت معرفی FeeLens نیست؛ هر دو وظیفه ثبت‌نام معرفی یا همکاری را مستثنا می‌کنند. کاربر جدید واجد شرایط باید در دوره ثبت‌نام و احراز هویت کرده و شرکت را تأیید کند. A: واریز حداقل ۲۰ دلار با ارز رسمی، کارت یا P2P، محدود به ۵٬۰۰۰ نفر. B: حجم bStocks حداقل ۵۰ دلار. محدودیت منطقه و تأمین‌کنندگان نقدینگی اعمال می‌شود. کوپن تا ۴ دسامبر و اعتبار ۱۴ روز. سقف جایزه ۲۰٬۰۰۰/۵۰٬۰۰۰ دلار متناقض است؛ مبلغی وعده نمی‌دهیم. bStocks مالکیت مستقیم نیست و اشخاص آمریکایی مستثنا هستند."
    },
    "startsAt": "2026-10-22T12:00:00Z",
    "endsAt": "2026-11-15T23:59:00Z"
  },
  {
    "id": "okx-2026-10-23-tokenized-stock-schedule",
    "exchange": "okx",
    "date": "2026-10-23",
    "category": "listing",
    "sourceUrl": "https://www.okx.com/help/okx-to-list-unified-tokenized-stocks-xmara-xmcd-and-more-for-spot-trading",
    "checkedAt": "2026-10-26",
    "title": {
      "en": "OKX schedules more tokenized-stock spot pairs",
      "zh": "OKX 公布更多代币化股票现货上线时间",
      "fr": "OKX programme de nouvelles paires d’actions tokenisées",
      "pt": "OKX agenda novos pares de ações tokenizadas",
      "ko": "OKX, 토큰화 주식 현물 추가 일정 발표",
      "ja": "OKX、トークン化株式の現物追加予定",
      "ru": "OKX объявляет график новых токенизированных акций",
      "fa": "برنامه جفت‌های جدید سهام توکنی‌شده OKX"
    },
    "summary": {
      "en": "October 26 UTC: xMARA/USDT is scheduled for 07:00 and xMCD/USDT for 07:30, with more pairs October 26–27. These are price-exposure products, not ownership or shareholder voting rights. Supported regions only; unavailable to US persons or within the US. Check the announcement for each pair’s pre-open, withdrawal and trading schedule; scheduled times are not a guarantee of live availability.",
      "zh": "计划于 10 月 26 日 UTC 07:00 上线 xMARA/USDT、07:30 上线 xMCD/USDT，10 月 26–27 日另有多组。产品提供价格敞口，不代表公司所有权或股东投票权。仅限支持地区，不向美国人士或美国境内提供。各交易对预开盘、提现和交易时间以公告为准，计划时间不等于已确认可交易。",
      "fr": "Le 26 octobre UTC : xMARA/USDT prévu à 07:00, xMCD/USDT à 07:30 ; autres paires les 26–27 octobre. Exposition au prix, sans propriété ni vote d’actionnaire. Régions autorisées uniquement ; personnes américaines et territoire américain exclus. Consultez les horaires propres à chaque paire ; un calendrier ne garantit pas la disponibilité effective.",
      "pt": "Em 26 de outubro UTC: xMARA/USDT previsto às 07:00 e xMCD/USDT às 07:30; mais pares em 26–27 de outubro. Exposição ao preço, sem propriedade ou voto acionário. Apenas regiões permitidas; pessoas dos EUA e território americano excluídos. Confira horários por par; o cronograma não garante disponibilidade efetiva.",
      "ko": "10월 26일 UTC xMARA/USDT 07:00, xMCD/USDT 07:30 예정이며 26~27일 추가 거래쌍이 있습니다. 가격 노출 상품으로 소유권이나 의결권은 없습니다. 지원 지역만 가능하며 미국인·미국 내 이용은 제외됩니다. 각 거래쌍 사전 개장·출금·거래 일정을 확인하세요. 예정 시간이 실제 이용 가능을 보장하지 않습니다.",
      "ja": "10月26日UTC、xMARA/USDTは07:00、xMCD/USDTは07:30予定。26〜27日に他ペアも追加予定です。価格連動商品で、所有権や議決権ではありません。対象地域のみで、米国人・米国内は不可。各ペアの事前受付・出金・取引予定を確認してください。予定日時は利用開始の保証ではありません。",
      "ru": "26 октября UTC: xMARA/USDT запланирован на 07:00, xMCD/USDT на 07:30; другие пары — 26–27 октября. Ценовая экспозиция без права собственности или голоса. Только разрешённые регионы; лица США и территория США исключены. Проверяйте расписание каждой пары: план не гарантирует фактическую доступность.",
      "fa": "۲۶ اکتبر UTC: xMARA/USDT ساعت ۰۷:۰۰ و xMCD/USDT ساعت ۰۷:۳۰ برنامه‌ریزی شده‌اند؛ جفت‌های دیگر ۲۶–۲۷ اکتبر. محصول نمایانگر قیمت است، نه مالکیت یا حق رأی. فقط مناطق مجاز؛ اشخاص آمریکایی و داخل آمریکا مستثنا هستند. زمان هر جفت را بررسی کنید؛ برنامه به معنی تأیید دسترسی واقعی نیست."
    }
  },
  {
    "id": "backpack-2026-10-22-stock-price-band",
    "exchange": "backpack",
    "date": "2026-10-22",
    "category": "product",
    "sourceUrl": "https://docs.backpack.exchange/#changelog",
    "checkedAt": "2026-10-26",
    "title": {
      "en": "Stock API: explicit price-band rejection",
      "zh": "股票 API：明确返回价格区间拒单原因",
      "fr": "API actions : rejet explicite hors bande de prix",
      "pt": "API de ações: rejeição explícita fora da faixa",
      "ko": "주식 API: 가격 범위 밖 주문 명시적 거부",
      "ja": "株式API：価格帯外の拒否を明示",
      "ru": "API акций: явный отказ вне ценового диапазона",
      "fa": "API سهام: رد صریح سفارش خارج از محدوده"
    },
    "summary": {
      "en": "The October 22 changelog adds HTTP 400 responses for stock limit prices outside the permitted band, with the current bound in the message. Indicative quotes expose restingLimitBound. The band is measured from the last price rather than bid/ask. Orders can still expire without a quote if a bound is unavailable or the market moves. This API change does not establish campaign-volume eligibility.",
      "zh": "10 月 22 日日志新增：股票限价超出允许区间时返回 HTTP 400，并在消息中给出当前边界；指示报价增加 restingLimitBound。区间改为以最新价格而非买卖报价计算。无法获得边界或市场变动时，订单仍可能无报价到期。此 API 更新不代表成交量符合活动资格。",
      "fr": "Le journal du 22 octobre ajoute une réponse HTTP 400 pour une limite hors bande, avec la borne actuelle. Les cotations indicatives exposent restingLimitBound. La bande utilise le dernier prix, non bid/ask. Sans borne disponible ou si le marché bouge, l’ordre peut encore expirer sans cotation. Cela ne rend pas le volume API éligible aux campagnes.",
      "pt": "O changelog de 22 de outubro adiciona HTTP 400 para limites fora da faixa, com a borda atual. Cotações indicativas expõem restingLimitBound. A faixa usa o último preço, não bid/ask. Sem limite disponível ou com mudança de mercado, a ordem ainda pode expirar sem cotação. Isso não garante elegibilidade do volume API em campanhas.",
      "ko": "10월 22일 로그는 허용 범위 밖 주식 지정가에 현재 경계를 포함한 HTTP 400을 추가합니다. 지표 호가에는 restingLimitBound가 제공되며 범위는 매수·매도 호가가 아닌 최근 가격 기준입니다. 경계를 알 수 없거나 시장이 움직이면 견적 없이 만료될 수 있습니다. API 거래량의 이벤트 자격을 의미하지 않습니다.",
      "ja": "10月22日の更新で、株式指値が許容帯外の場合、現在の境界を示すHTTP 400を返します。参考価格にrestingLimitBoundを追加。帯はbid/askではなく直近価格を基準にします。境界不明や相場変動時は見積りなしで失効する場合があります。API取引高のキャンペーン適格性を意味しません。",
      "ru": "Журнал от 22 октября добавляет HTTP 400 для лимита акций вне диапазона с текущей границей. Индикативные котировки содержат restingLimitBound. Диапазон считается от последней цены, не bid/ask. При неизвестной границе или движении рынка ордер всё ещё может истечь без котировки. Это не подтверждает участие API-оборота в акциях.",
      "fa": "گزارش ۲۲ اکتبر پاسخ HTTP 400 با مرز جاری را برای قیمت محدود خارج از محدوده اضافه می‌کند. قیمت‌های راهنما restingLimitBound دارند. محدوده از آخرین قیمت است نه bid/ask. نبود مرز یا تغییر بازار همچنان ممکن است باعث انقضای بی‌قیمت شود. این تغییر به معنی شمول حجم API در کمپین نیست."
    }
  },
  {
    "id": "binance-2026-10-22-stock-options",
    "exchange": "binance",
    "date": "2026-10-22",
    "category": "product",
    "title": {
      "en": "Binance stock options: sell covered calls and cash-secured puts",
      "zh": "币安股票期权支持卖出备兑看涨与现金担保看跌"
    },
    "summary": {
      "en": "Binance now lets users sell covered calls and cash-secured puts on stock options, with low fees and physical settlement, covering 7,000+ US stocks and ETFs.",
      "zh": "币安股票期权现支持卖出备兑看涨期权和现金担保看跌期权，费用低、实物交割，覆盖 7,000 多只美股和 ETF。"
    },
    "sourceUrl": "https://x.com/binance/status/2112989799867162899"
  },
  {
    "id": "backpack-2026-10-21-referral-mystery-box",
    "exchange": "backpack",
    "date": "2026-10-21",
    "category": "promotion",
    "sourceUrl": "https://learn.backpack.exchange/blog/mystery-box-referrals",
    "checkedAt": "2026-10-26",
    "title": {
      "en": "Referral Mystery Boxes: eligibility and deadlines",
      "zh": "邀请盲盒：资格与截止时间",
      "fr": "Boîtes de parrainage : conditions et dates",
      "pt": "Caixas por indicação: condições e prazos",
      "ko": "추천 미스터리 박스: 자격과 기한",
      "ja": "紹介ミステリーボックス：条件と期限",
      "ru": "Реферальные коробки: условия и сроки",
      "fa": "جعبه معرفی: شرایط و مهلت‌ها"
    },
    "summary": {
      "en": "Invitees must register by November 3, 23:59 UTC. Within seven days: KYC, at least $500 deposited from outside Backpack and held seven days, and $5,000 traded. Perps, spot and stocks count; stablecoin swaps do not. UK, EEA and market-maker accounts excluded. Weekly checks; both parties get a box per qualifying invite, maximum five for the referrer. $1,000 is a rare maximum, not guaranteed. Use the official quest link; eligibility through our affiliate link is unconfirmed. Equity Perps remain excluded from fee sharing.",
      "zh": "受邀者须于 11 月 3 日 23:59 UTC 前注册，并在注册后七日内完成 KYC、从 Backpack 外部入金至少 500 美元且保留七日、成交 5,000 美元。永续、现货及股票计入，稳定币兑换不计。英国、欧洲经济区及做市商账户排除。每周审核，合格邀请双方各得一盒，邀请人最多五盒。1,000 美元是罕见最高奖，非保底。使用官方任务链接；本站 Affiliate 链接是否适用未确认。Equity Perps 仍不参与手续费分享。",
      "fr": "Inscription avant le 3 novembre à 23:59 UTC. Sous sept jours : KYC, dépôt externe d’au moins 500 $ conservé sept jours et volume de 5 000 $. Perpétuels, spot et actions inclus ; swaps de stablecoins exclus. Royaume-Uni, EEE et teneurs de marché exclus. Contrôle hebdomadaire ; une boîte chacun, cinq maximum pour le parrain. 1 000 $ est un maximum rare, non garanti. Utilisez le lien de quête officiel ; compatibilité de notre lien affilié non confirmée. Equity Perps exclus du partage de frais.",
      "pt": "Cadastro até 3 de novembro, 23:59 UTC. Em sete dias: KYC, depósito externo de US$ 500 mantido sete dias e volume de US$ 5.000. Perpétuos, spot e ações contam; swaps de stablecoins não. Reino Unido, EEE e formadores de mercado excluídos. Verificação semanal; uma caixa para cada parte, até cinco para quem indica. US$ 1.000 é máximo raro, não garantido. Use o link oficial da missão; compatibilidade do nosso link afiliado não confirmada. Equity Perps sem compartilhamento de taxas.",
      "ko": "11월 3일 23:59 UTC까지 가입하고 7일 내 KYC, 외부 입금 $500 이상을 7일 보유, 거래량 $5,000을 완료해야 합니다. 무기한·현물·주식은 포함, 스테이블코인 교환은 제외됩니다. 영국·EEA·마켓메이커는 제외됩니다. 매주 심사 후 양측에 한 상자, 추천인은 최대 5개입니다. $1,000은 드문 최대액으로 보장되지 않습니다. 공식 퀘스트 링크를 사용하세요. 당사 제휴 링크 적용은 미확인입니다. Equity Perps는 수수료 공유 제외입니다.",
      "ja": "11月3日23:59 UTCまでに登録し、7日以内にKYC、外部から500ドル以上入金し7日保有、5,000ドルの取引が必要です。無期限・現物・株式は対象、ステーブルコイン交換は対象外。英国・EEA・マーケットメーカーは除外。毎週審査し双方1箱、紹介者は最大5箱。1,000ドルはまれな最高額で保証ではありません。公式クエストのリンクを使用し、当サイト紹介リンクの適用は未確認です。Equity Perpsは手数料共有対象外。",
      "ru": "Регистрация до 3 ноября 23:59 UTC. За семь дней: KYC, внешний депозит от $500 с хранением семь дней и оборот $5 000. Перпетуалы, спот и акции учитываются; обмен стейблкоинов нет. Великобритания, ЕЭЗ и маркетмейкеры исключены. Проверка еженедельно, по коробке обеим сторонам, до пяти приглашающему. $1 000 — редкий максимум без гарантии. Используйте ссылку официального задания; совместимость нашей ссылки не подтверждена. Equity Perps исключены из возврата комиссий.",
      "fa": "ثبت‌نام تا ۳ نوامبر ساعت ۲۳:۵۹ UTC. طی هفت روز: احراز هویت، واریز خارجی حداقل ۵۰۰ دلار با نگهداری هفت‌روزه و حجم معامله ۵٬۰۰۰ دلار. دائمی، اسپات و سهام شامل‌اند؛ تبدیل استیبل‌کوین خیر. بریتانیا، منطقه اقتصادی اروپا و بازارسازها مستثنا هستند. بررسی هفتگی؛ یک جعبه برای هر طرف و حداکثر پنج برای معرف. ۱٬۰۰۰ دلار حداکثر نادر است، نه تضمینی. از پیوند مأموریت رسمی استفاده کنید؛ شمول پیوند ما تأیید نشده. Equity Perps از سهم کارمزد مستثناست."
    },
    "startsAt": "2026-10-21T00:00:00Z",
    "endsAt": "2026-11-17T23:59:00Z",
    "signupEndsAt": "2026-11-03T23:59:00Z"
  },
  {
    "id": "binance-2026-10-21-five-bstocks",
    "exchange": "binance",
    "date": "2026-10-21",
    "category": "listing",
    "title": {
      "en": "Binance lists five new bStocks",
      "zh": "币安上线 5 个新 bStock"
    },
    "summary": {
      "en": "Binance listed BOTB/USDT, BRKBB/USDT, KSTRB/USDT, TMFB/USDT and VSTB/USDT bStock pairs, tradable 24/7 with 1:1 free and instant exchange for the actual stocks.",
      "zh": "币安上线 BOTB/USDT、BRKBB/USDT、KSTRB/USDT、TMFB/USDT 和 VSTB/USDT bStock 交易对，支持 24/7 交易，并可与对应真实股票 1:1 免费即时兑换。"
    },
    "sourceUrl": "https://x.com/binance/status/2112877130862174252"
  },
  {
    "id": "okx-2026-10-21-axis-perpetual",
    "exchange": "okx",
    "date": "2026-10-21",
    "category": "listing",
    "title": {
      "en": "OKX lists AXISUSDT perpetual futures",
      "zh": "OKX 上线 AXISUSDT 永续合约"
    },
    "summary": {
      "en": "AXISUSDT global perpetual futures trading is now available on OKX. AXIS (@axisrobotics) builds a self-improving data engine for Physical AI.",
      "zh": "OKX 现已上线 AXISUSDT 全球永续合约交易。AXIS（@axisrobotics）致力于打造面向物理 AI 的自我改进数据引擎。"
    },
    "sourceUrl": "https://x.com/okx/status/2112929402787135747"
  },
  {
    "id": "okx-2026-10-21-eurc-order-book",
    "exchange": "okx",
    "date": "2026-10-21",
    "category": "product",
    "title": {
      "en": "OKX integrates Circle's EURC into its unified EUR order book",
      "zh": "OKX 将 Circle 的 EURC 整合进统一欧元订单簿"
    },
    "summary": {
      "en": "OKX integrated EURC by Circle into its unified EUR order book, so EEA traders can access fiat and stablecoin liquidity through one market.",
      "zh": "OKX 将 Circle 发行的 EURC 整合进统一的欧元订单簿，欧洲经济区（EEA）用户可在同一市场获取法币与稳定币流动性。"
    },
    "sourceUrl": "https://x.com/okx/status/2112902698722816275"
  },
  {
    "id": "okx-2026-10-21-shield-us",
    "exchange": "okx",
    "date": "2026-10-21",
    "category": "product",
    "title": {
      "en": "OKX Shield launches in the US with up to $500K protection",
      "zh": "OKX Shield 在美国上线，最高提供 50 万美元保障"
    },
    "summary": {
      "en": "OKX announced the US launch of OKX Shield, an account-protection program that backs eligible customers with up to $500K against qualifying unauthorized account takeovers, at no extra cost.",
      "zh": "OKX 宣布在美国推出 OKX Shield 账户保护计划，为符合条件的用户针对合格的未授权账户盗用提供最高 50 万美元保障，不额外收费。"
    },
    "sourceUrl": "https://x.com/okx/status/2112703160380711365"
  },
  {
    "id": "binance-2026-10-20-auto-order-routing",
    "exchange": "binance",
    "date": "2026-10-20",
    "category": "product",
    "title": {
      "en": "Auto Order Routing goes live on Binance Spot",
      "zh": "币安现货上线自动订单路由"
    },
    "summary": {
      "en": "Binance Spot orders are now routed via whichever path gives the better price at routing time, with no extra Binance fee for the currency conversion. It is live on eligible U, USD, USD1 and USDC-quoted pairs, with more to follow.",
      "zh": "币安现货订单现会自动选择路由时价格更优的路径成交，币安不对其中的币种转换额外收费。目前支持符合条件的 U、USD、USD1 和 USDC 计价交易对，后续将扩展。"
    },
    "sourceUrl": "https://x.com/binance/status/2112378280242258058"
  },
  {
    "id": "tokenized-uvxy",
    "exchange": "backpack",
    "date": "2026-10-17",
    "category": "listing",
    "title": {
      "en": "Backpack announces tokenized UVXY on Solana",
      "zh": "Backpack 公布 Solana 上的代币化 UVXY"
    },
    "summary": {
      "en": "The October 17 announcement adds a tokenized volatility-linked product. It is a leveraged ETF exposure, not a cash-like holding.",
      "zh": "10 月 17 日官方公布新增波动率相关代币化产品。这是杠杆 ETF 敞口，不是现金类资产。"
    },
    "sourceUrl": "https://learn.backpack.exchange/blog/tokenized-proshares-ultra-vix-short-term-futures-etf-uvxy"
  },
  {
    "id": "backpack-ai-search",
    "exchange": "backpack",
    "date": "2026-10-16",
    "category": "product",
    "title": {
      "en": "AI Search: find markets in your own words",
      "zh": "AI Search：用自然语言发现市场"
    },
    "summary": {
      "en": "Backpack’s new guide explains natural-language search across stocks, crypto, perpetuals and Earn, with follow-up filters and saved watchlists.",
      "zh": "官方新指南介绍如何用自然语言搜索股票、加密资产、永续与 Earn，并通过追问筛选和保存自选列表。"
    },
    "sourceUrl": "https://learn.backpack.exchange/articles/backpack-ai-search"
  },
  {
    "id": "okx-2026-10-16-flexible-loans",
    "exchange": "okx",
    "date": "2026-10-16",
    "category": "product",
    "title": {
      "en": "OKX introduces Flexible Loans in USDC",
      "zh": "OKX 推出 USDC 灵活借贷"
    },
    "summary": {
      "en": "OKX Flexible Loans let users borrow up to 500,000 USDC against their crypto at about 3% a year, with VIP limits up to 4.5M USDC.",
      "zh": "OKX 灵活借贷支持以加密资产抵押借入最多 50 万 USDC，年利率约 3%，VIP 额度最高 450 万 USDC。"
    },
    "sourceUrl": "https://x.com/okx/status/2111117464721371318"
  },
  {
    "id": "stock-limit-orders",
    "exchange": "backpack",
    "date": "2026-10-16",
    "category": "product",
    "title": {
      "en": "Stock API limit orders now support 24-hour expiry",
      "zh": "股票 API 限价单有效期延长至 24 小时"
    },
    "summary": {
      "en": "The October 16 API changelog extends stock limit order expiry from ten minutes to 24 hours.",
      "zh": "10 月 16 日 API 更新日志将股票限价单最长有效期从十分钟延长至 24 小时。"
    },
    "sourceUrl": "https://docs.backpack.exchange/#changelog"
  },
  {
    "id": "binance-2026-10-15-flexible-products-apr",
    "exchange": "binance",
    "date": "2026-10-15",
    "category": "promotion",
    "title": {
      "en": "Binance brings back U Flexible Products bonus APR with VIP tiers",
      "zh": "币安 U 活期产品额外年化奖励回归，VIP 分档"
    },
    "summary": {
      "en": "Binance's U Flexible Products bonus APR is back: 5% for regular users (8K U tier), 5% for VIP 1-3 (300K U tier) and 6% for VIP 4-9 (500K U tier).",
      "zh": "币安 U 活期产品额外年化奖励回归：普通用户 5%（8K U 档），VIP 1-3 为 5%（300K U 档），VIP 4-9 为 6%（500K U 档）。"
    },
    "sourceUrl": "https://x.com/binance/status/2110566347528671301"
  },
  {
    "id": "binance-2026-10-14-delist-epic-quick",
    "exchange": "binance",
    "date": "2026-10-14",
    "category": "listing",
    "title": {
      "en": "Binance to delist EPIC and QUICK on Oct 28",
      "zh": "币安将于 10 月 28 日下架 EPIC 和 QUICK"
    },
    "summary": {
      "en": "Binance announced it will delist EPIC and QUICK on 2026-10-28.",
      "zh": "币安宣布将于 2026 年 10 月 28 日下架 EPIC 和 QUICK。"
    },
    "sourceUrl": "https://x.com/binance/status/2110250033874690086"
  },
  {
    "id": "unpack-real-stocks-week-3",
    "exchange": "backpack",
    "date": "2026-10-14",
    "category": "promotion",
    "title": {
      "en": "Unpack Real Stocks · Week 3",
      "zh": "Unpack Real Stocks 美股盲盒 · 第三周"
    },
    "summary": {
      "en": "Opt in before trading. The first mystery box requires $10,000 of eligible volume. Rewards vary; $1,000 is the rare maximum, not a guaranteed payout.",
      "zh": "交易前需先报名，首个盲盒门槛为 10,000 美元有效成交额。奖励随机，1,000 美元是罕见最高奖励，不是保底。"
    },
    "sourceUrl": "https://learn.backpack.exchange/blog/unpack-real-stocks-week-3",
    "startsAt": "2026-10-14T00:00:00Z",
    "endsAt": "2026-10-20T23:59:00Z",
    "checkedAt": "2026-10-26"
  },
  {
    "id": "binance-2026-10-13-x402",
    "exchange": "binance",
    "date": "2026-10-13",
    "category": "product",
    "title": {
      "en": "Binance x402 links AI agents to on-chain payments",
      "zh": "币安推出 x402，连接 AI 代理与链上支付"
    },
    "summary": {
      "en": "Binance x402 offers programmable payments for AI agents on BNB Chain, settled through Binance Pay, using self-custodied USDT with no cards and no gas.",
      "zh": "Binance x402 为 AI 代理提供基于 BNB Chain 的可编程支付，通过 Binance Pay 结算，使用自托管 USDT，无需银行卡、无需 Gas。"
    },
    "sourceUrl": "https://x.com/binance/status/2110012238295629893"
  },
  {
    "id": "backpack-2026-10-12-nakagawa-head-of-strategy",
    "exchange": "backpack",
    "date": "2026-10-12",
    "category": "other",
    "title": {
      "en": "Daisuke Nakagawa joins Backpack Japan as Head of Strategy",
      "zh": "中川大辅加入 Backpack Japan 任战略主管"
    },
    "summary": {
      "en": "Backpack appointed Daisuke Nakagawa as Head of Strategy and Corporate Development at Backpack Japan. He previously served as COO of Kraken Japan and Binance Japan, where he led licensing efforts and exchange operations.",
      "zh": "Backpack 任命中川大辅（Daisuke Nakagawa）为 Backpack Japan 战略与企业发展主管。他曾任 Kraken Japan 和 Binance Japan 的 COO，负责牌照申请与交易所运营。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2109617491760803938"
  },
  {
    "id": "backpack-2026-10-11-google-apple-sign-in",
    "exchange": "backpack",
    "date": "2026-10-11",
    "category": "product",
    "title": {
      "en": "Backpack adds Google and Apple sign-in",
      "zh": "Backpack 支持 Google 和 Apple 账户登录"
    },
    "summary": {
      "en": "Users can now sign up for or log in to Backpack with their Google or Apple account.",
      "zh": "用户现在可以使用 Google 或 Apple 账户注册或登录 Backpack。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2109154524065886401"
  },
  {
    "id": "backpack-2026-10-07-mystery-box-10k",
    "exchange": "backpack",
    "date": "2026-10-07",
    "category": "promotion",
    "title": {
      "en": "Unpack Real Stocks: first Mystery Box now unlocks at $10K volume",
      "zh": "「开箱真股票」活动：首个神秘盒现以 1 万美元交易量解锁"
    },
    "summary": {
      "en": "In Backpack's Unpack Real Stocks campaign, the first Mystery Box now unlocks at $10K trading volume. Every box holds a real US stock reward worth up to $1,000.",
      "zh": "在 Backpack「开箱真股票」活动中，首个神秘盒现在交易量达到 1 万美元即可解锁。每个盒子内含价值最高 1,000 美元的真实美股奖励。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2107670148408922385"
  },
  {
    "id": "okx-2026-10-07-strategic-investment",
    "exchange": "okx",
    "date": "2026-10-07",
    "category": "other",
    "title": {
      "en": "OKX announces strategic investment at $25B pre-money valuation",
      "zh": "OKX 宣布获战略投资，投前估值 250 亿美元"
    },
    "summary": {
      "en": "OKX announced a strategic investment from Circle, QRT, Ripple and SC Ventures by Standard Chartered at a $25 billion pre-money valuation.",
      "zh": "OKX 宣布获得 Circle、QRT、Ripple 及渣打银行旗下 SC Ventures 的战略投资，投前估值 250 亿美元。"
    },
    "sourceUrl": "https://x.com/okx/status/2107512457447272675"
  },
  {
    "id": "okx-2026-10-07-tokenized-securities-venue",
    "exchange": "okx",
    "date": "2026-10-07",
    "category": "regulatory",
    "title": {
      "en": "OKXICE submits Tokenized Securities Venue application",
      "zh": "OKXICE 已提交代币化证券交易场所申请"
    },
    "summary": {
      "en": "OKX said the OKXICE joint venture had submitted its TSV (Tokenized Securities Venue) application, and OKXICE Co-Chair and former New York Governor Andrew Cuomo spoke at OKX Now about the venture.",
      "zh": "OKX 表示，OKXICE 合资公司已提交 TSV（代币化证券交易场所）申请；OKXICE 联席主席、前纽约州州长 Andrew Cuomo 在 OKX Now 上谈及该合资项目。"
    },
    "sourceUrl": "https://x.com/okx/status/2107848700944896154"
  },
  {
    "id": "backpack-2026-10-06-near-spot-perps",
    "exchange": "backpack",
    "date": "2026-10-06",
    "category": "listing",
    "title": {
      "en": "Backpack expands NEAR support: spot, native USDC and perps",
      "zh": "Backpack 扩展 NEAR 支持：现货、原生 USDC 及永续合约"
    },
    "summary": {
      "en": "Backpack added NEAR spot trading with native USDC support, plus NEAR perpetuals.",
      "zh": "Backpack 上线 NEAR 现货交易并支持原生 USDC，同时上线 NEAR 永续合约。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2107441617955373372"
  },
  {
    "id": "backpack-2026-10-06-vip-maker-fees",
    "exchange": "backpack",
    "date": "2026-10-06",
    "category": "fees",
    "title": {
      "en": "Backpack VIP program upgraded: maker fees as low as 0%",
      "zh": "Backpack VIP 计划升级：Maker 费率低至 0%"
    },
    "summary": {
      "en": "Backpack VIP can now be qualified through asset balance, BP staking or trading activity. Benefits include up to 6.5% APY on USD collateral, maker fees as low as 0% and zero fees on global wire transfers.",
      "zh": "Backpack VIP 现可通过资产余额、BP 质押或交易量获得资格。权益包括 USD 抵押品最高 6.5% 年化收益、Maker 费率低至 0%、全球电汇零手续费。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2107396627241775399"
  },
  {
    "id": "okx-2026-10-06-okx-money",
    "exchange": "okx",
    "date": "2026-10-06",
    "category": "product",
    "title": {
      "en": "OKX unveils OKX Money digital dollar wallet",
      "zh": "OKX 发布数字美元钱包 OKX Money"
    },
    "summary": {
      "en": "Unveiled at OKX Now, OKX Money is a digital dollar wallet to save, earn, send and spend with no conversion fees.",
      "zh": "OKX 在 OKX Now 大会上发布 OKX Money，这是一款数字美元钱包，可储蓄、赚取收益、转账和消费，且无兑换费用。"
    },
    "sourceUrl": "https://x.com/okx/status/2107335039264415876"
  },
  {
    "id": "binance-2026-10-03-lite-loan-fee",
    "exchange": "binance",
    "date": "2026-10-03",
    "category": "fees",
    "title": {
      "en": "Binance Lite Loan service fee cut 50% to 0.5%",
      "zh": "币安 Lite Loan 服务费减半至 0.5%"
    },
    "summary": {
      "en": "For a limited time, Binance Lite Loan lets users borrow up to 1,000 USDT against BTC at a 0.5% service fee (down from 1%), with no price-triggered liquidation for 30 days while the BTC keeps earning Simple Earn rewards.",
      "zh": "限时期间，币安 Lite Loan 支持以 BTC 抵押借入最多 1,000 USDT，服务费由 1% 降至 0.5%，30 天内不会因价格触发清算，抵押的 BTC 仍可获得简单赚币收益。"
    },
    "sourceUrl": "https://x.com/binance/status/2106353878174167204"
  },
  {
    "id": "backpack-2026-10-02-ai-search",
    "exchange": "backpack",
    "date": "2026-10-02",
    "category": "product",
    "title": {
      "en": "Backpack introduces AI Search",
      "zh": "Backpack 推出 AI 搜索"
    },
    "summary": {
      "en": "Backpack AI Search lets users find stocks, strategies or market conditions in plain words, with one search bar across stocks, crypto, perps and Earn.",
      "zh": "Backpack AI 搜索支持用自然语言查找股票、策略或市场状况，一个搜索栏覆盖股票、加密货币、永续合约和理财。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2105833764933029966"
  },
  {
    "id": "backpack-2026-09-29-rates-dashboard",
    "exchange": "backpack",
    "date": "2026-09-29",
    "category": "product",
    "title": {
      "en": "Backpack launches Rates dashboard and US Treasury ETF trading",
      "zh": "Backpack 推出利率看板并支持美国国债 ETF 交易"
    },
    "summary": {
      "en": "Backpack introduced a Rates dashboard to monitor live yields, inflation, the debasement trade and market-moving events, alongside trading of US Treasury ETFs.",
      "zh": "Backpack 推出利率（Rates）看板，可追踪实时收益率、通胀、货币贬值交易及影响市场的事件，并可交易美国国债 ETF。"
    },
    "sourceUrl": "https://x.com/Backpack/status/2104872721863815637"
  },
  {
    "id": "okx-2026-09-29-ai-builder-program",
    "exchange": "okx",
    "date": "2026-09-29",
    "category": "promotion",
    "title": {
      "en": "OKX AI Builder Program: earn 35% of net trading fees",
      "zh": "OKX AI Builder 计划：可获 35% 净交易手续费分成"
    },
    "summary": {
      "en": "Builders using Agent Trade Kit or their own stack can attach a Builder Code to orders and, once approved, earn 35% of net trading fees, or up to 50% for invited builders.",
      "zh": "开发者可使用 Agent Trade Kit 或自有技术栈，在订单中附加 Builder Code，审核通过后可获得 35% 的净交易手续费分成，受邀开发者最高 50%。"
    },
    "sourceUrl": "https://x.com/okx/status/2104775676331204953"
  },
  {
    "id": "binance-2026-09-24-list-hype",
    "exchange": "binance",
    "date": "2026-09-24",
    "category": "listing",
    "title": {
      "en": "Binance to list Hyperliquid (HYPE) with Seed Tag",
      "zh": "币安将上线 Hyperliquid (HYPE)，并加注种子标签"
    },
    "summary": {
      "en": "Binance announced it will list Hyperliquid (HYPE) with the Seed Tag applied.",
      "zh": "币安宣布将上线 Hyperliquid（HYPE），并为其加注种子标签（Seed Tag）。"
    },
    "sourceUrl": "https://x.com/binance/status/2103026710585438412"
  }
];
