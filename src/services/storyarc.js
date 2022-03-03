import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const StoryArc_API = createApi({
  reducerPath: "storyarc",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://storyarc-fake-api.herokuapp.com/",
  }),
  endpoints: (builder) => ({
    getAllPost: builder.query({
      query: () => `posts?_expand=user`,
    }),
    getPostWithUserAndCommentsData: builder.query({
      query: ({ postId }) => `posts/${postId}?_expand=user&_embed=comments`,
    }),
    getPostComments: builder.query({
      query: ({ postId }) => `posts/${postId}/comments`,
    }),
    getUserPosts: builder.query({
      query: ({ uid }) =>
        `posts?_expand=user&userId=vlBJfbmG6iNl86pQJhkNldJG0A52`,
    }),
    getUserSavedPosts: builder.query({
      query: () => `/users/vlBJfbmG6iNl86pQJhkNldJG0A52/savedPosts/`, //-> static for now
    }),
    getSearchResults: builder.query({
      query: ({ rua }) => `posts?streetName=${rua}&_expand=user`,
    }),
    getCommentOwner: builder.query({
      query: ({ uid }) => `users?id=${uid}`,
    }),
    getLocations: builder.query({
      query: () => `locations`,
    }),
    addComment: builder.mutation({
      query: (comment) => ({
        url: `comments`,
        method: "POST",
        body: comment,
      }),
    }),
    addUser: builder.mutation({
      query: (user) => ({
        url: `users`,
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const {
  useGetAllPostQuery,
  useGetPostWithUserAndCommentsDataQuery,
  useGetPostCommentsQuery,
  useGetUserPostsQuery,
  useGetUserSavedPostsQuery,
  useGetSearchResultsQuery,
  useGetCommentOwnerQuery,
  useGetLocationsQuery,
  useAddCommentMutation,
  useAddUserMutation,
} = StoryArc_API;
