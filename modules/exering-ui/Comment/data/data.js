export default [
  {
    cid: "001",
    pid: "-1",
    userId: "101",
    userName: "zhangsan",
    comment: "How are you? ",
    children: [
      {
        cid: "002",
        pid: "001",
        userId: "102",
        userName: "lisi",
        comment: "I am fine, how about you? ",
        children: [
          {
            cid: "003",
            pid: "002",
            userId: "101",
            userName: "zhangsan",
            comment: "Not bad. ",
            children: [],
          },
          {
            cid: "004",
            pid: "002",
            userId: "103",
            userName: "wangwu",
            comment: "Hey! What's you name? ",
            children: [
              {
                cid: "005",
                pid: "004",
                userId: "104",
                userName: "zhaoliu",
                comment: "lisi",
                children: [],
              },
            ],
          },
        ],
      },
      {
        cid: "006",
        pid: "001",
        userId: "105",
        userName: "tianqi",
        comment: "What're hell you doing? ",
        children: [],
      },
    ],
  },
  {
    cid: "007",
    pid: "-1",
    userId: "106",
    userName: "xiaoming",
    comment: "Hey! What's up? ",
    children: [
      {
        cid: "008",
        pid: "001",
        userId: "107",
        userName: "xiaohong",
        comment: "Nothing much. ",
        children: [],
      },
    ],
  },
];
