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
