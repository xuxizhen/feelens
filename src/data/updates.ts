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
