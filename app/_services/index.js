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

export const getCourseById = async (id, userEmail) => {
  console.log(id, userEmail);
  const query =
    gql`  query Course {
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
  userEnrollCourses(
    where: {courseId: "` +
    id +
    `", userEmail: "` +
    userEmail +
    `"}
  ) {
    courseId
    userEmail
    completedChapter
  }
  }`;
  try {
    const result = await request(MASTER_URL, query);
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const EnrollCourse = async (courseId, userEmail) => {
  const mutationQuery =
    gql`
  mutation EnrollCourse {
  createUserEnrollCourse(data: {courseId: "` +
    courseId +
    `", userEmail: "` +
    userEmail +
    `"}) {
    id
  }
}`;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};

export const PublishCourse = async (id) => {
  console.log("publish course", id);
  const mutationQuery =
    gql`
    mutation publish {
      publishUserEnrollCourse(where: { id: "` +
    id +
    `" }) {
        id
      }
    }
  `;

  const result = await request(MASTER_URL, mutationQuery);
  return result;
};
