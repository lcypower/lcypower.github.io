module.exports = {
  title: `LCY's DevLog`,
  description: `개발자가 되고 싶은 개발자의 일기`,
  language: `ko`, // `ko`, `en` => currently support versions for Korean and English
  siteUrl: `https://lcypower.github.io`,
  ogImage: `/profile.png`, // Path to your in the 'static' folder
  comments: {
    utterances: {
      repo: ``, // `zoomkoç√ding/zoomkoding-gatsby-blog`,
    },
  },
  ga: '0', // Google Analytics Tracking ID
  author: {
    name: `이찬윤`,
    bio: {
      role: `개발자`,
      description: ['문제를 해결하려는', '늘 사용자를 생각하는', '항상 자기 자신을 발전시키는', '커뮤니케이션이 잘 되는'],
      thumbnail: 'profile_not.png', // Path to the image in the 'asset' folder
    },
    social: {
      github: `https://github.com/lcypower`, // `https://github.com/lcypower`,
      linkedIn: ``,
      email: `lcypower0@gmail.com`, // `lcypower0@gmail.com`,
    },
  },

  // metadata for About Page
  about: {
    timestamps: [
      // =====       [Timestamp Sample and Structure]      =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!) =====
      {
        date: '',
        activity: '',
        links: {
          github: '',
          post: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        date: '2024.05 ~ ',
        activity: '(주)웍스컴바인 - AI기반 데이터 분석 및 모빌리티 관련 IT',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2023.05 ~ 2024.05',
        activity: '(주)와우플래닛 - 한정판 IP상품 제작/판매 플랫폼',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2021.04 ~ 2023.05',
        activity: '(주)플레이놈 - LM코인, 블록체인 NFT플랫폼',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2020.10 ~ 2021.04',
        activity: '(주)두댓 - 반려동물과 함게 하는 리워드 플랫폼 서비스',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2019.02 ~ 2020.10',
        activity: 'BANKYOU KOREA - 베트남향 IT 비즈니스',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2017.09 ~ 2019.02',
        activity: '애니펜 - AR기반의 컨텐츠 제작기술 개발',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2016.08 ~ 2017.09',
        activity: 'Vendys - 식권대장',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2015.11 ~ 2016.08',
        activity: '나우웍스 - 실시간 일자리 서비스',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2014.09 ~ 2015.11',
        activity: '(주)FXGear - VR컨텐츠 및 기기개발, 벡터기반 드로잉툴 개발',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2013.03 ~ 2014.09',
        activity: '프리랜서 - 시금고 및 금융권 프로젝트',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2011.09 ~ 2013.03',
        activity: '(주)리얼소프트 - 웹에이전시 창업',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2008.10 ~ 2011.03',
        activity: '유채널,다산시스템 - 시금고 및 금융권 프로젝트',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
      {
        date: '2007.09 ~ 2008.10',
        activity: '(주)주인들 - 웹에이전시',
        links: {
          post: '',
          github: '',
          demo: '',
        },
      },
    ],

    projects: [
      // =====        [Project Sample and Structure]        =====
      // ===== 🚫 Don't erase this sample (여기 지우지 마세요!)  =====
      {
        title: '',
        description: '',
        techStack: ['', ''],
        thumbnailUrl: '',
        links: {
          post: '',
          github: '',
          googlePlay: '',
          appStore: '',
          demo: '',
        },
      },
      // ========================================================
      // ========================================================
      {
        title: '개발 블로그 테마 개발',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
      {
        title: '개발 블로그 테마 개발2',
        description:
          '개발 블로그를 운영하는 기간이 조금씩 늘어나고 점점 많은 생각과 경험이 블로그에 쌓아가면서 제 이야기를 담고 있는 블로그를 직접 만들어보고 싶게 되었습니다. 그동안 여러 개발 블로그를 보면서 좋았던 부분과 불편했던 부분들을 바탕으로 레퍼런스를 참고하여 직접 블로그 테마를 만들게 되었습니다.',
        techStack: ['gatsby', 'react'],
        thumbnailUrl: 'blog.png',
        links: {
          post: '/gatsby-starter-zoomkoding-introduction',
          github: 'https://github.com/zoomkoding/zoomkoding-gatsby-blog',
          demo: 'https://www.zoomkoding.com',
        },
      },
    ],
  },
};
