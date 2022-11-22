const ADD_POST = "ADD_POST";

export interface postStateChild {
  id: number;
  User: {
    id: number;
    nickname: string;
  };
  content: string;
  Images: [
    {
      src: string;
    },
    {
      src: string;
    },
    {
      src: string;
    }
  ];
  Comments: [
    {
      user: {
        nickname: string;
      };
      content: string;
    },
    {
      user: {
        nickname: string;
      };
      content: string;
    }
  ];
}

export interface postState {
  mainPosts: postStateChild[];
  imagePaths: Array<string>;
  postAdded: boolean;
}

const initialState: postState = {
  mainPosts: [
    {
      id: 1,
      User: {
        id: 1,
        nickname: "hello",
      },
      content: "첫번째 게시글 #해시태그 #익스프레스",
      Images: [
        {
          src: "https://dimg.donga.com/ugc/CDB/SHINDONGA/Article/5f/9a/4c/f6/5f9a4cf615cfd2738de6.jpg",
        },
        {
          src: "https://mblogthumb-phinf.pstatic.net/MjAxODAxMDNfNDAg/MDAxNTE0OTYyNTA5NjU0.u5cU9gnAdMHK4uAmf54gNGbKZig0WoIiCKAD2qCaDf0g.yzxNuwFxteMsF9wX7Q0M4QqucBCF6INyczLsjoKyCDwg.JPEG.yg11398/0.jpg?type=w800",
        },
        {
          src: "https://w.namu.la/s/304d71e88cef2375148ca5ad004e7a71a69a84433557877696e88fcb914dd6bd58e8430db71423273847aef41853429112076d93d4e8a8dd7c60da56bd40185ab748244849c9f95308a00d4ac87caf41a078a17ef7905584ee3bfe5664d6bc221d8c61ad1cf2355ef312ca490c55d10b",
        },
      ],
      Comments: [
        {
          user: {
            nickname: "neor",
          },
          content: "신기하다",
        },
        {
          user: {
            nickname: "babvo",
          },
          content: "허허",
        },
      ],
    },
  ],
  imagePaths: [],
  postAdded: false,
};

export interface AddPostRequestAction {
  type: typeof ADD_POST;
}

export const addPost = {
  type: ADD_POST,
};

const dummyPost = {
  id: 2,
  content: "더미데이터입니다.",
  User: {
    id: 1,
    nickname: "화이팅",
  },
  Images: [],
  Comments: [],
};

type PostReducerAction = AddPostRequestAction;

const reducer = (state = initialState, action: PostReducerAction) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPosts: [dummyPost, ...state.mainPosts],
        postAdded: true,
      };
    default:
      return state;
  }
};

export default reducer;
