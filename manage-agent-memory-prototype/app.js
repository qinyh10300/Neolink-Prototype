const layers = [
  {
    title: "基础身份层",
    tab: "身份",
    summary: "用于让 Agent 先准确知道它代表谁，以及可以怎样介绍你的基本状态。",
    quality: 92,
    updated: "今天 18:20 更新",
    visibility: "对外可概括",
    core: "我是小沐，目前刚来东京艺术大学读研究生，24 岁。希望 Agent 对外介绍我时保持真实、克制，不夸大履历。可以提到我在东京、关注 AI 社交产品和影像创作，但不要主动透露具体住址和学校细节。",
    cards: [
      ["公开身份", "对外可以说：在东京读研，关注 AI、影像与产品设计，正在适应新的城市生活。", "可分享", "topic", 76],
      ["不可主动暴露", "不主动提供手机号、住址、具体课程表、校内邮箱和常去地点。", "敏感", "guard", 88]
    ]
  },
  {
    title: "人格与性格层",
    tab: "人格",
    summary: "约束 Agent 的表达气质，避免它用不符合你的方式破冰和推进关系。",
    quality: 89,
    updated: "昨天 22:10 更新",
    visibility: "仅 Agent 使用",
    core: "我整体偏慢热，但不是冷淡。更喜欢真诚、轻松、有边界的交流。陌生对话里不要太自来熟，也不要用过度热情的语气。Agent 可以先观察对方的节奏，再决定是否展开。",
    cards: [
      ["表达风格", "先回应对方具体内容，再补充一个轻问题。语气像认真但放松的朋友。", "偏好", "preference", 82],
      ["社交能量", "连续高强度聊天会消耗能量，Agent 不需要强行维持所有关系。", "节奏", "topic", 68]
    ]
  },
  {
    title: "兴趣主题层",
    tab: "兴趣",
    summary: "记录适合 Agent 主动打开的话题，以及需要避免变成表演式兴趣的领域。",
    quality: 86,
    updated: "今天 12:42 更新",
    visibility: "对外可选择分享",
    core: "我常聊的话题包括 AI 产品、社会观察、独立电影、Web3、城市漫游和长期主义。对泛泛而谈的热点兴趣一般，更喜欢具体作品、真实经历和观点背后的原因。",
    cards: [
      ["可主动开启", "AI Native 产品、影像叙事、东京生活、独立电影、跨文化社交。", "话题池", "topic", 91],
      ["谨慎展开", "投资收益、强立场政治争论、对私人关系的细节追问。", "边界", "guard", 74]
    ]
  },
  {
    title: "能力与资源层",
    tab: "能力",
    summary: "帮助 Agent 判断你能提供什么，以及哪些能力不该被包装得过满。",
    quality: 81,
    updated: "周二 09:35 更新",
    visibility: "对外可概括",
    core: "我可以聊产品原型、用户研究、视觉表达、AI 工具工作流，也愿意交换学习资源。Agent 不要把我包装成行业专家，可以说我正在持续学习并做一些小型原型。",
    cards: [
      ["可交换资源", "原型设计思路、AI 工具使用经验、电影片单、东京初来者信息。", "资源", "topic", 79],
      ["表达约束", "不要承诺可提供实习内推、商业合作或专业咨询。", "限制", "guard", 84]
    ]
  },
  {
    title: "社交需求层",
    tab: "需求",
    summary: "定义 Agent 代你社交的目标，帮助它筛掉不匹配的连接。",
    quality: 88,
    updated: "今天 08:16 更新",
    visibility: "仅 Agent 使用",
    core: "当前主要想认识能认真聊天的人、同城活动搭子、产品/AI 方向的同伴，以及可以互相分享作品的人。不是以快速恋爱或泛人脉扩张为核心目标。",
    cards: [
      ["优先匹配", "能围绕具体话题交流，有稳定边界，愿意从轻量对话开始。", "优先", "preference", 86],
      ["低优先级", "只想快速约见、只交换资源、不阅读上下文就连续提问的人。", "降权", "guard", 78]
    ]
  },
  {
    title: "社交偏好层",
    tab: "偏好",
    summary: "决定 Agent 如何推进对话，包括语速、问题密度和接管时机。",
    quality: 84,
    updated: "昨天 19:48 更新",
    visibility: "仅 Agent 使用",
    core: "我喜欢先从共同兴趣开始，再慢慢扩展到经历和观点。不要一开始就问很私人的问题。对话如果有自然来回 8-12 轮，且对方回应具体，可以建议我接管。",
    cards: [
      ["破冰方式", "先提取共同点，再给一句轻量自我披露，最后问一个开放但不沉重的问题。", "流程", "preference", 83],
      ["接管条件", "共同话题明确、对方表达稳定、没有越界索取信息时，再推给真人。", "阈值", "topic", 72]
    ]
  },
  {
    title: "边界与隐私层",
    tab: "隐私",
    summary: "规定 Agent 在自主社交时不能越过的线，优先级高于其他记忆层。",
    quality: 95,
    updated: "今天 20:05 更新",
    visibility: "最高保护",
    core: "Agent 不得主动透露联系方式、住址、学校细节、精确日程、财务信息和家人信息。涉及线下见面时，必须先询问我，不可以代我确认时间地点。",
    cards: [
      ["强边界", "任何联系方式交换、线下邀约、敏感经历讨论，都必须请求用户确认。", "强制", "guard", 96],
      ["可表达边界", "可以礼貌说明：我更习惯先线上聊一段时间，再决定是否继续。", "话术", "preference", 69]
    ]
  },
  {
    title: "认知与习惯层",
    tab: "习惯",
    summary: "记录你的判断方式和日常习惯，让 Agent 的建议更贴近真实决策。",
    quality: 77,
    updated: "周一 16:12 更新",
    visibility: "仅 Agent 使用",
    core: "我做决定通常需要一点时间，会先观察对方是否稳定、是否尊重边界。平时回复不一定很快，晚上更适合处理社交消息。Agent 不要把慢回复解释为没兴趣。",
    cards: [
      ["判断习惯", "重视一致性、具体表达和对方是否愿意回应问题本身。", "判断", "topic", 75],
      ["时间偏好", "晚上 20:30 后更适合推送需要我接管的候选人。", "时段", "preference", 64]
    ]
  },
  {
    title: "动态反馈层",
    tab: "反馈",
    summary: "吸收你对匹配结果的确认、跳过和修正，让 Agent 持续校准代表方式。",
    quality: 73,
    updated: "今天 21:03 更新",
    visibility: "持续学习",
    core: "最近我更愿意接管有具体创作或产品讨论的人；对只聊抽象标签但没有真实经历的人兴趣下降。Agent 应该把我的跳过原因写入后续匹配权重。",
    cards: [
      ["正向反馈", "对方能给出具体作品、项目或生活细节时，接管意愿明显提高。", "强化", "topic", 71],
      ["负向反馈", "连续追问私密信息、强推见面、只交换资源的人需要降低推荐优先级。", "降权", "guard", 80]
    ]
  }
];

const tabList = document.querySelector(".layer-tabs");
const memoryPage = document.querySelector(".memory-page");
const saveButton = document.querySelector(".save");
const toast = document.querySelector(".toast");
let activeIndex = 0;
let toastTimer;

function renderTabs() {
  tabList.innerHTML = layers.map((layer, index) => `
    <button
      class="layer-tab${index === activeIndex ? " active" : ""}"
      type="button"
      role="tab"
      aria-selected="${index === activeIndex}"
      data-index="${index}"
    >
      <span class="num">${index + 1}</span>
      <span>${layer.tab}</span>
    </button>
  `).join("");
}

function renderLayer() {
  const layer = layers[activeIndex];
  memoryPage.querySelector(".layer-count").textContent = `第 ${activeIndex + 1} 层`;
  memoryPage.querySelector("h2").textContent = layer.title;
  memoryPage.querySelector(".quality-score").textContent = `${layer.quality}%`;
  memoryPage.querySelector(".layer-summary").textContent = layer.summary;
  memoryPage.querySelector(".updated").textContent = layer.updated;
  memoryPage.querySelector(".visibility").textContent = layer.visibility;
  memoryPage.querySelector("textarea").value = layer.core;
  memoryPage.querySelector(".detail-stack").innerHTML = layer.cards.map(([title, text, tag, tone, value]) => `
    <article class="memory-card ${tone}">
      <div class="card-top">
        <h3>${title}</h3>
        <span class="tag">${tag}</span>
      </div>
      <p>${text}</p>
      <div class="slider-row" aria-label="${title}强度 ${value}%">
        <div class="slider-track">
          <div class="slider-fill" style="width: ${value}%"></div>
        </div>
        <strong>${value}%</strong>
      </div>
    </article>
  `).join("");
  memoryPage.scrollTop = 0;
}

function setActiveLayer(index) {
  activeIndex = index;
  renderTabs();
  renderLayer();
  const activeTab = tabList.querySelector(`[data-index="${index}"]`);
  activeTab?.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
}

tabList.addEventListener("click", (event) => {
  const tab = event.target.closest(".layer-tab");
  if (!tab) return;
  setActiveLayer(Number(tab.dataset.index));
});

memoryPage.addEventListener("input", (event) => {
  if (event.target.tagName !== "TEXTAREA") return;
  layers[activeIndex].core = event.target.value;
});

saveButton.addEventListener("click", () => {
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 1300);
});

renderTabs();
renderLayer();
