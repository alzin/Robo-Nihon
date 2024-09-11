import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/blog/page/1',
      permanent: false,
    },
  };
};

const BlogIndex = () => null;
export default BlogIndex;