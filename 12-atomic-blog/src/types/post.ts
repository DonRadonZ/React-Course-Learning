export type PostInfoProp = {
        title: string;
        body: string;
}

export type HeaderProp = {
    posts: PostInfoProp[];
    onClearPosts: () => void;
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export type onAddPostProp = {
    onAddPost: (post: PostInfoProp) => void;
}

export type MainProp = {
    posts: PostInfoProp[];
    onAddPost: (post: PostInfoProp) => void;
}


export type SearchProps = {
    searchQuery: string;
    setSearchQuery: (query: string) => void;
}

export type PostProps = {
    posts: PostInfoProp[];
}