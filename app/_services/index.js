import request, { gql } from "graphql-request";
const MASTER_URL = `https://ap-south-1.cdn.hygraph.com/content/${process.env.NEXT_PUBLIC_HYGRAPH_KEY}/master`;

export const getCourseList = async () => {
  const query = gql`
    query CourseList {
      courseLists {
        name
        banner {
          url
        }
        free
        id
        totalChapters
        tags
        author
      }
    }
  `;
  const result = await request(MASTER_URL, query);
  return result;
};

export const getCourseById = async (id) => {
  const query =
    gql`
  query Course {
  courseList(where: {id: "` +
    id +
    `"}) {
    id
    chapter {
      ... on Chapter {
        id
        name
        video {
          url
        }
      }
    }
    description
    name
    free
    totalChapters
    youtubeUrl
  }
}`;
  const result = await request(MASTER_URL, query);
  return result;
};
